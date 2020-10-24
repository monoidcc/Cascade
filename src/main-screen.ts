import gameloop = require('gameloopjs')
import bezier = require('bezier-easing')
import Color = require('color')
import { css } from 'emotion'

import { devicePixelRatio } from './const'
import {
  Rect,
  Motion,
  Wave,
  Artwork,
  WaveRect,
  Result,
  TextLabel,
  createArtwork,
  ArtworkRepository
} from './domain/models'
import * as Event from './const/event'
import { dice } from './util/random'
import { Ctx } from './util/dom'
import { wired, component, on, pub, sub, is, innerHTML, prep } from 'capsid'
import { drawText, drawRects } from './adapters/canvas'
import { GRAYISH_BLUE_ALPHA80, VERY_DARK_GRAYISH_BLUE } from './const/color'
import { defer } from './util/async'

/** The main area */
@component('main-screen')
@is(css`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  .main__canvas-wrapper {
    flex-grow: 1;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${GRAYISH_BLUE_ALPHA80};

    canvas {
      background-color: white;
    }
  }
`)
@sub('start-main')
export class Main {
  el?: HTMLElement
  @on('start-main')
  @pub(Event.INIT_CANVAS_CONTROLS)
  start() {
    const el = this.el!
    el.classList.remove('hidden')
    el.innerHTML = `
      <div class="main__header-controls"></div>
      <div class="main__canvas-wrapper">
        <canvas class="main__canvas" width="1" height="1"></canvas>
      </div>
      <div class="main__middle-controls"></div>
      <div class="main__footer-controls"></div>
    `
    prep()
  }
}

/**
 * The main canvas where the user edit the contents of the artworks.
 */
@component('main__canvas')
@sub('a', 'b', 'down', 'up', 'font', 'text', 'save', 'list')
export class MainCanvas {
  width = 0
  height = 0
  ctx?: Ctx
  wave: Wave
  result: Result
  loop: any
  el?: HTMLCanvasElement
  easing0 = bezier(0.42, 0, 0.58, 1)
  textColors: Color[] = []
  colors: Color[] = []
  text: TextLabel

  constructor() {
    this.wave = new Wave()
    this.result = new Result()
    this.text = new TextLabel('', 'Avenir Next', 1 / 6, '#fff', '#fff')
    this.resetColors()
    this.loop = gameloop(this.main, 60)
  }

  resetColors() {
    const baseColors = this.baseColors()
    this.colors = [...baseColors]
    this.textColors = baseColors.map(c => c.alpha(1))
    this.text.color = this.colors[0].alpha(1).toString()
    this.text.shadowColor = this.colors[1].alpha(1).toString()
  }

  randomColor(): Color {
    return Color()
      .hue(dice(360))
      .saturationl(dice(100))
      .lightness(dice(100))
      .alpha(0.35)
  }

  baseColors(): Color[] {
    return [
      this.randomColor(),
      this.randomColor(),
      this.randomColor(),
      this.randomColor(),
    ]
  }

  async __mount__() {
    const el = this.el!
    const wrapper = el.parentElement!
    this.ctx = el.getContext('2d')!
    await defer(0)
    const canvasSize = Math.min(wrapper.clientWidth, wrapper.clientHeight)
    el.width = this.width = canvasSize * devicePixelRatio
    el.height = this.height = canvasSize * devicePixelRatio
    el.style.width = `${canvasSize}px`
    el.style.height = `${canvasSize}px`
    this.loop.run()
  }

  /** The step function of the main loop */
  main = () => {
    const finished = this.wave.step()
    if (finished) {
      this.result.add(...finished.map(wr => wr.rect))
    }
    const ctx = this.ctx!
    const { width, height } = this.el!
    ctx.clearRect(0, 0, width, height)
    drawRects(ctx, this.result.rects, width, height)
    drawRects(ctx, this.wave.toArray(), width, height)
    drawText(ctx, this.text, width, height)
  }

  rotateColors(): void {
    this.colors.push(this.colors.shift()!)
  }

  rotateTextColors(): void {
    this.textColors.push(this.textColors.shift()!)
    this.text.color = this.textColors[0].string()
    this.text.shadowColor = this.textColors[1].string()
  }

  /** Creates a new wave (set of 4 boxes coming into the canvas)
   * based on the given client position
   */
  newWave(e: MouseEvent): void {
    this.rotateColors()

    const canvasY = (e.clientY - this.el!.offsetTop) * devicePixelRatio
    const canvasX = (e.clientX - this.el!.offsetLeft) * devicePixelRatio

    const ratioX = canvasX / this.width
    const ratioY = (this.height - canvasY) / this.height

    const ratioA = ratioY
    const ratioW = dice(1)

    const min = 1
    const w = (min / 3) * ratioW + min / 6
    const hw = w / 2
    const dw = ratioX
    const dh = ratioX
    const alpha = ratioA
    const c0 = this.colors[0].alpha(alpha).toString()
    const c1 = this.colors[1].alpha(alpha).toString()
    const c2 = this.colors[2].alpha(alpha).toString()
    const c3 = this.colors[3].alpha(alpha).toString()
    const r0 = new Rect(0 - hw, dh, w, w, c0)
    const r1 = new Rect(1 - dw, -hw, w, w, c1)
    const r2 = new Rect(1 + hw, 1 - dh, w, w, c2)
    const r3 = new Rect(dw, 1 + hw, w, w, c3)
    const frames = 60
    const m0 = new Motion(frames, this.easing0, w, 0)
    const m1 = new Motion(frames, this.easing0, 0, w)
    const m2 = new Motion(frames, this.easing0, -w, 0)
    const m3 = new Motion(frames, this.easing0, 0, -w)
    m0.init(r0.x, r0.y)
    m1.init(r1.x, r1.y)
    m2.init(r2.x, r2.y)
    m3.init(r3.x, r3.y)
    this.wave.add(new WaveRect(r0, m0))
    this.wave.add(new WaveRect(r1, m1))
    this.wave.add(new WaveRect(r2, m2))
    this.wave.add(new WaveRect(r3, m3))
  }

  @on('text')
  onText({ detail }: { detail: string }): void {
    this.text.body = detail
  }

  @on('mouseup')
  mouseup(e: MouseEvent): void {
    this.newWave(e)
  }

  @on('font')
  font(): void {
    this.text.rotateFonts()
  }

  @on('up')
  up(): void {
    this.text.sizeUp()
  }

  @on('down')
  down(): void {
    this.text.sizeDown()
  }

  @on('a')
  a(): void {
    this.rotateTextColors()
  }

  @on('b')
  async b(): Promise<void> {
    this.wave.eject()
    this.result.clear()
    this.resetColors()
  }

  @on('save')
  @pub('open-edit-modal')
  async save(): Promise<Artwork> {
    const artwork = createArtwork(this.result, this.text)
    await new ArtworkRepository().save(artwork)
    return artwork
  }
}

const KEY_TEXT = 'tententen-current-text'

@component('main__header-controls')
@sub(Event.INIT_CANVAS_CONTROLS)
@is(css`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 62px;
  flex-shrink: 0;

  border-bottom-width: 1px;
  border-bottom-color: ${GRAYISH_BLUE_ALPHA80};
  border-bottom-style: solid;

  button {
    width: 40px;
    height: 40px;
    background-color: #fcfcfc;
    border-radius: 8px;
    border-width: 1;
    border-color: ${GRAYISH_BLUE_ALPHA80};
    border-style: solid;
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.01) inset;
    font-weight: 900;
    color: ${VERY_DARK_GRAYISH_BLUE};

    svg {
      height: 21px;
      width: 21px;
    }
  }

  input {
    text-align: center;
    height: 40px;
    border-radius: 8px;
    border: solid 1px ${GRAYISH_BLUE_ALPHA80};
    color: ${VERY_DARK_GRAYISH_BLUE};
  }
`)
@innerHTML(`
  <button class="down-btn">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
  </button>
  <input class="text-input" />
  <button class="up-btn">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
  </button>
`)
export class MainHeaderControls {
  @wired('.text-input')
  textInput?: HTMLInputElement

  @on(Event.INIT_CANVAS_CONTROLS)
  init() {
    this.textInput!.value = localStorage[KEY_TEXT] || 'Tententen'
    this.text()
  }

  @on('input', { at: '.text-input' })
  @pub('text')
  text() {
    return (localStorage[KEY_TEXT] = this.textInput!.value)
  }

  @on.click.at('.down-btn')
  @pub('down')
  down() {}

  @on.click.at('.up-btn')
  @pub('up')
  up() {}
}

@component('main__middle-controls')
@sub(Event.INIT_CANVAS_CONTROLS)
@innerHTML(`
  <button class="font-btn">♻ FONT</button>
  <button class="a-btn">♻ COLOR</button>
  <button class="b-btn">♻ RESET</button>
`)
@is(css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  height: 82px;
  width: 100%;
  flex-shrink: 0;

  border-top-width: 1px;
  border-top-color: ${GRAYISH_BLUE_ALPHA80};
  border-top-style: solid;

  button {
    height: 40px;
    background-color: #fcfcfc;
    border-radius: 8px;
    border-width: 1;
    border-color: ${GRAYISH_BLUE_ALPHA80};
    border-style: solid;
    padding-left: 12px;
    padding-right: 12px;
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.01) inset;
    font-weight: 900;
    color: ${VERY_DARK_GRAYISH_BLUE};
  }
`)
export class MainMiddleControls {
  @on.click.at('.a-btn')
  @pub('a')
  a() {}

  @on.click.at('.b-btn')
  @pub('b')
  b() {}

  @on.click.at('.font-btn')
  @pub('font')
  font() {}
}

@component('main__footer-controls')
@innerHTML(`
  <button class="list-btn">LIST</button>
  <button class="help-btn">?</button>
  <button class="save-btn">SAVE</button>
`)
@is(css`
  height: 52px;
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  border-top-width: 1px;
  border-top-color: ${GRAYISH_BLUE_ALPHA80};
  border-top-style: solid;
  background-color: #fcfcfc;

  button {
    width: 100px;
    height: 52px;
    background-color: white;
    border-width: 0;
    font-weight: bold;
    color: ${VERY_DARK_GRAYISH_BLUE};
    color: #868686;
    background-color: transparent;
  }
`)
@sub(Event.INIT_CANVAS_CONTROLS)
export class MainFooterControls {
  @on.click.at('.save-btn')
  @pub('save')
  save() {
  }

  @on.click.at('.list-btn')
  // @pub(Event.LIST_MODAL_OPEN)
  @pub(Event.OPEN_CONFIRM_DIALOG)
  list(): Event.OpenConfirmDialogMessage {
    return {
      message: 'Are you sure to delete this image?',
      confirmLabel: 'DELETE',
      confirmVariant: 'danger',
      onConfirm: () => alert('deleting'),
    }
  }
}
