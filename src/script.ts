import gameloop = require('gameloopjs')
import bezier = require('bezier-easing')
import Color = require('color')
import { Rect, Motion, Wave, WaveRect, Result } from './models'
import { dice } from './random'
import { Ctx } from './dom'
import { component, on, pub, sub, is } from 'capsid'
import { css } from 'emotion'

@component('main-canvas')
@sub('a', 'b')
export class MainCanvas {
  width = 0
  height = 0
  ctx?: Ctx
  wave: Wave
  result: Result
  loop: any
  el?: HTMLCanvasElement
  easing0 = bezier(0.42, 0, 0.58, 1)
  colors = [
    Color().hue(dice(360)).saturationl(dice(100)).lightness(dice(100)).alpha(0.35),
    Color().hue(dice(360)).saturationl(dice(100)).lightness(dice(100)).alpha(0.35),
    Color().hue(dice(360)).saturationl(dice(100)).lightness(dice(100)).alpha(0.35),
    Color().hue(dice(360)).saturationl(dice(100)).lightness(dice(100)).alpha(0.35)
  ]

  constructor() {
    this.wave = new Wave()
    this.result = new Result()
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

  }

  rotateColor(): void {
    this.colors.push(this.colors.shift()!)
  }

  newWave(): void {
    this.rotateColor()
    const min = Math.min(this.width, this.height)
    const w = dice(min / 3) + min / 6
    const hw = w / 2
    const ratio = Math.random()
    const dw = this.width * ratio
    const dh = this.height * ratio
    const alpha = dice(1)
    const c0 = this.colors[0].alpha(alpha).toString()
    const c1 = this.colors[1].alpha(alpha).toString()
    const c2 = this.colors[2].alpha(alpha).toString()
    const c3 = this.colors[3].alpha(alpha).toString()
    const r0 = new Rect(0 - hw, dh, w, w, c0)
    const r1 = new Rect(this.width - dw, -hw, w, w, c1)
    const r2 = new Rect(this.width + hw, this.height - dh, w, w, c2)
    const r3 = new Rect(dw, this.height + hw, w, w, c3)
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
      this.ctx!.fillRect(rect.left(), rect.top(), rect.width, rect.height)
    })
  }

  @on('a')
  a() {
    this.newWave()
  }

  @on('b')
  b() {
    this.wave.eject()
    this.result.clear()
  }
}

@component('controls')
@is(css`
  position: fixed;
  height: 50px;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 150px;
    height: 36px;
    margin: 0 5px;
    background-color: hsla(220,20%,80%,0.8);
    border-width: 0;
  }
`)
export class Controls {
  @on.click.at('.a-btn')
  @pub('a')
  a() {
  }

  @on.click.at('.b-btn')
  @pub('b')
  b() {
  }
}
