import gameloop = require('gameloopjs')
import bezier = require('bezier-easing')
import Color = require('color')
import { Rect, Motion, Wave, WaveRect, Result, TextLabel } from './models'
import { dice } from './random'
import { Ctx } from './dom'
import { wired, component, on, pub, sub, is, innerHTML } from 'capsid'
import { css } from 'emotion'

@component('main-canvas')
@sub('a', 'b', 'down', 'up', 'font', 'text')
export class MainCanvas {
  width = 0
  height = 0
  ctx?: Ctx
  wave: Wave
  result: Result
  loop: any
  el?: HTMLCanvasElement
  easing0 = bezier(0.42, 0, 0.58, 1)
  baseColors = [
    Color().hue(dice(360)).saturationl(dice(100)).lightness(dice(100)).alpha(0.35),
    Color().hue(dice(360)).saturationl(dice(100)).lightness(dice(100)).alpha(0.35),
    Color().hue(dice(360)).saturationl(dice(100)).lightness(dice(100)).alpha(0.35),
    Color().hue(dice(360)).saturationl(dice(100)).lightness(dice(100)).alpha(0.35)
  ]
  textColors: Array<any>
  colors: Array<any>
  text: TextLabel

  constructor() {
    this.colors = [...this.baseColors]
    this.textColors = this.baseColors.map(c => c.alpha(1))
    this.wave = new Wave()
    this.result = new Result()
    this.text = new TextLabel(
      '',
      'Avenir Next',
      1 / 6,
      this.colors[0].alpha(1).toString(),
      this.colors[1].alpha(1).toString()
    )
    this.loop = gameloop(this.main, 60)
  }

  __mount__() {
    const el = this.el!
    const main = el.parentElement!
    this.ctx = el.getContext('2d')!
    const canvasSize = Math.min(main.clientWidth, main.clientHeight)
    el.width = this.width = canvasSize
    el.height = this.height = canvasSize
    this.loop.run()
  }

  main = () => {
    const finished = this.wave.step()
    if (finished) {
      this.result.add(...finished.map(wr => wr.rect))
    }
    this.ctx!.clearRect(0, 0, this.width, this.height)
    this.drawRects(this.result.rects)
    this.drawRects(this.wave.toArray())
    this.drawText()
  }

  rotateColors(): void {
    this.colors.push(this.colors.shift()!)
  }

  rotateTextColors(): void {
    this.textColors.push(this.textColors.shift()!)
    this.text.color = this.textColors[0].string()
    this.text.shadowColor = this.textColors[1].string()
  }

  newWave(e: MouseEvent): void {
    this.rotateColors()

    const ratioX = e.clientX / this.width
    const ratioY = (this.height - e.clientY) / this.height

    const ratioA = ratioY
    const ratioW = dice(1)

    const min = 1
    const w = min / 3 * ratioW + min / 6
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

  drawRects(rects: Rect[]) {
    rects.forEach(rect => {
      this.ctx!.fillStyle = rect.color
      this.ctx!.fillRect(rect.left() * this.width, rect.top() * this.height, rect.width * this.width, rect.height * this.height)
    })
  }

  drawText(): void {
    const ctx = this.ctx!
    ctx.save()

    ctx.font = this.text.font(this.height)
    ctx.fillStyle = this.text.color
    ctx.shadowColor = this.text.shadowColor
    ctx.shadowBlur = this.text.shadowBlur(this.height)

    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.textAlign = 'center'

    ctx.fillText(this.text.body, this.width / 2, this.height / 2 + this.height * this.text.size / 3)
    ctx.restore()
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
  b(): void {
    this.wave.eject()
    this.result.clear()
  }
}

const KEY_TEXT = 'tententen-current-text'

@component('controls')
@is(css`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  button {
    width: 150px;
    height: 36px;
    margin: 8px 15px;
    background-color: hsla(220,20%,80%,0.8);
    border-width: 0;
  }
`)
@innerHTML(`
  <input class="text-input" />
  <button class="font-btn">Font</button>
  <button class="up-btn">⬆️</button>
  <button class="down-btn">⬇️</button>
  <button class="a-btn">A</button>
  <button class="b-btn">B</button>
`)
export class Controls {
  @wired('.text-input')
  textInput?: HTMLInputElement

  __mount__() {
    setTimeout(() => {
      this.textInput!.value = localStorage[KEY_TEXT] || 'Tententen'
      this.text()
    }, 1)
  }

  @on('input', { at: '.text-input' })
  @pub('text')
  text() {
    return localStorage[KEY_TEXT] = this.textInput!.value
  }

  @on.click.at('.a-btn')
  @pub('a')
  a() {}

  @on.click.at('.b-btn')
  @pub('b')
  b() {}

  @on.click.at('.down-btn')
  @pub('down')
  down() {}

  @on.click.at('.up-btn')
  @pub('up')
  up() {}

  @on.click.at('.font-btn')
  @pub('font')
  font() {}
}
