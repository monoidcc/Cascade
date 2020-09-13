import gameloop = require('gameloopjs')
import bezier = require('bezier-easing')
import Color = require('color')
import { css } from 'emotion'

import {
  Rect,
  Motion,
  Wave,
  Artwork,
  WaveRect,
  Result,
  TextLabel,
  createArtwork,
} from './domain/models'
import * as Events from './events'
import { dice } from './util/random'
import { Ctx } from './util/dom'
import { wired, component, on, pub, sub, is, innerHTML, prep } from 'capsid'
import { drawText, drawRects } from './adapters/canvas'
import { GRAYISH_BLUE_ALPHA80, VERY_DARK_GRAYISH_BLUE } from './const/color'

/** The main area */
@component('main')
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
  @pub(Events.INIT_CANVAS_CONTROLS)
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
  textColors: any[] = []
  colors: any[] = []
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

  randomColor(): any {
    return Color()
      .hue(dice(360))
      .saturationl(dice(100))
      .lightness(dice(100))
      .alpha(0.35)
  }

  baseColors(): any[] {
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
    await new Promise(setTimeout)
    const canvasSize = Math.min(wrapper.clientWidth, wrapper.clientHeight)
    el.width = this.width = canvasSize
    el.height = this.height = canvasSize
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

    const canvasY = e.clientY - this.el!.offsetTop
    const canvasX = e.clientX - this.el!.offsetLeft

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
  @pub('preview-modal')
  save(): Artwork {
    return createArtwork(this.result, this.text)
  }
}

const KEY_TEXT = 'tententen-current-text'

@component('main__header-controls')
@is(css`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;

  height: 62px;
  flex-shrink: 0;

  border-bottom-width: 1px;
  border-bottom-color: ${GRAYISH_BLUE_ALPHA80};
  border-bottom-style: solid;

  button {
    width: 42px;
    height: 42px;
    margin: 8px 10px;
    background-color: ${GRAYISH_BLUE_ALPHA80};
    border-radius: 8px;
    border-width: 0;
    color: ${VERY_DARK_GRAYISH_BLUE};
  }

  input {
    text-align: center;
    height: 40px;
    border-radius: 8px;
    border: solid 1px ${GRAYISH_BLUE_ALPHA80};
    color: ${VERY_DARK_GRAYISH_BLUE};
  }
`)
@sub(Events.INIT_CANVAS_CONTROLS)
@innerHTML(`
  <button class="down-btn">⬇️</button>
  <input class="text-input" />
  <button class="up-btn">⬆️</button>
`)
export class MainHeaderControls {
  @wired('.text-input')
  textInput?: HTMLInputElement

  @on(Events.INIT_CANVAS_CONTROLS)
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
@is(css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 82px;
  width: 100%;
  flex-shrink: 0;

  border-top-width: 1px;
  border-top-color: ${GRAYISH_BLUE_ALPHA80};
  border-top-style: solid;

  button {
    width: 100px;
    height: 42px;
    margin: 0 15px;
    background-color: ${GRAYISH_BLUE_ALPHA80};
    border-width: 0;
    border-radius: 8px;
    color: ${VERY_DARK_GRAYISH_BLUE};
  }
`)
@sub(Events.INIT_CANVAS_CONTROLS)
@innerHTML(`
  <button class="font-btn">♻ FONT</button>
  <button class="a-btn" style="width: 100px;">♻ COLOR</button>
  <button class="b-btn">♻ RESET</button>
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

  button {
    width: 100px;
    height: 52px;
    background-color: white;
    border-width: 0;
    font-weight: bold;
    color: ${VERY_DARK_GRAYISH_BLUE};
  }

  button:first-child {
    border-right-style: solid;
    border-right-width: 1px;
    border-right-color: ${GRAYISH_BLUE_ALPHA80};
  }

  button:last-child {
    border-left-style: solid;
    border-left-width: 1px;
    border-left-color: ${GRAYISH_BLUE_ALPHA80};
  }
`)
@sub(Events.INIT_CANVAS_CONTROLS)
@innerHTML(`
  <button class="list-btn">LIST</button>
  <button class="help-btn">?</button>
  <button class="save-btn">SAVE</button>
`)
export class MainFooterControls {
  @on.click.at('.save-btn')
  @pub('save')
  save() {}

  @on.click.at('.list-btn')
  @pub(Events.LIST_MODAL_OPEM)
  list() {}
}
