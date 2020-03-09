import gameloop = require('gameloopjs')
import bezier = require('bezier-easing')
import Color = require('color')
import { Rect, Motion, Wave, WaveRect, Result } from './models'
import { dice } from './random'
import { qs, byId, Ctx } from './dom'

let width = 0
let height = 0
let ctx: Ctx
const wave: Wave = new Wave()
const result: Result = new Result()
const loop = gameloop(main, 60)

const initCanvas = () => {
  const canvas = byId<HTMLCanvasElement>('main-canvas')
  const main = byId<HTMLElement>('main')
  ctx = canvas.getContext('2d')!
  width = main.clientWidth
  height = main.clientHeight
  canvas.width = width
  canvas.height = height
}

function initButtons() {
  qs('.a-btn').addEventListener('click', () => {
    newWave()
  })
  qs('.b-btn').addEventListener('click', () => {
    result.clear()
    wave.eject()
  })
}

function main() {
  const finished = wave.step()
  if (finished) {
    result.add(...finished.map(wr => wr.rect))
  }
  console.log('main')
  ctx.clearRect(0, 0, width, height)
  ctx.fillStyle = '#000'
  drawResult(ctx, result)
  drawWave(ctx, wave)
}

const easing0 = bezier(0.42, 0, 0.58, 1)
const colors = [
  `hsla(${dice(360)},50%,50%,0.35)`,
  `hsla(${dice(360)},50%,50%,0.35)`,
  `hsla(${dice(360)},50%,50%,0.35)`,
  `hsla(${dice(360)},50%,50%,0.35)`
]

function gen(): void {
  const min = Math.min(width, height)
  const w = dice(min / 3) + min / 6
  const hw = w / 2
  const ratio = Math.random()
  const dw = width * ratio
  const dh = height * ratio
  const c0 = colors[0]
  const c1 = colors[1]
  const c2 = colors[2]
  const c3 = colors[3]
  const r0 = new Rect(0 - hw, dh, w, w, c0)
  const r1 = new Rect(width - dw, -hw, w, w, c1)
  const r2 = new Rect(width + hw, height - dh, w, w, c2)
  const r3 = new Rect(dw, height + hw, w, w, c3)
  const frames = 60
  const m0 = new Motion(frames, easing0, w, 0)
  const m1 = new Motion(frames, easing0, 0, w)
  const m2 = new Motion(frames, easing0, -w, 0)
  const m3 = new Motion(frames, easing0, 0, -w)
  m0.init(r0.x, r0.y)
  m1.init(r1.x, r1.y)
  m2.init(r2.x, r2.y)
  m3.init(r3.x, r3.y)
  wave.add(new WaveRect(r0, m0))
  wave.add(new WaveRect(r1, m1))
  wave.add(new WaveRect(r2, m2))
  wave.add(new WaveRect(r3, m3))
}

function newWave() {
  gen()
}

function init() {
  loop.run()
}

function drawResult(ctx: Ctx, result: Result) {
  drawRects(ctx, result.rects)
}

function drawWave(ctx: Ctx, wave: Wave) {
  drawRects(ctx, wave.toArray())
}

function drawRects(ctx: Ctx, rects: Rect[]) {
  rects.forEach(rect => {
    ctx.fillStyle = rect.color
    ctx.fillRect(rect.left(), rect.top(), rect.width, rect.height)
  })
}

;(window as any).onload = async () => {
  initCanvas()
  initButtons()
  init()
}
