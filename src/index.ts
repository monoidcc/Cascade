import gameloop = require('gameloopjs')
const qs = <T extends Element>(q: string): T => document.querySelector(q) as any
const byId = <T extends Element>(id: string): T => document.getElementById(id) as any

let width = 0
let height = 0
let ctx: CanvasRenderingContext2D

class Rect {
  width: number
  height: number
  color: string
  constructor(
    private x: number,
    private y: number,
    width: number,
    height: number,
    color: string,
  ) {
    this.width = width
    this.height = height
    this.color = color
  }

  left(): number {
    return this.x - this.width / 2
  }

  top(): number {
    return this.y - this.height / 2
  }

  move(speed: Speed): void {
    this.x += speed.x
    this.y += speed.y
  }

  scale(width: number = 0, height: number = 0): void {
    this.width += width
    this.height += height
  }
}

class Speed {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class WaveRect {
  rect: Rect
  private speed: Speed
  constructor(
    rect: Rect,
    speed: Speed
  ) {
    this.rect = rect
    this.speed = speed
  }

  step() {
    this.rect.move(this.speed)
  }
}

class Wave {
  rects: WaveRect[] = []

  add(...wr: WaveRect[]): void {
    this.rects.push(...wr)
  }

  toArray(): Rect[] {
    return this.rects.map(wr => wr.rect)
  }

  eject(): Rect[] {
    const arr = this.toArray()
    this.rects.splice(0, this.rects.length)
    return arr
  }

  step(): void {
    this.rects.forEach(wr => { wr.step() })
  }
}

class Result {
  rects: Rect[] = []

  add(...r: Rect[]) {
    this.rects.push(...r)
  }
}

const initCanvas = () => {
  const canvas = byId<HTMLCanvasElement>('main-canvas')
  const main = byId<HTMLElement>('main')
  ctx = canvas.getContext('2d')!
  width = main.clientWidth
  height = main.clientHeight
  canvas.width = width
  canvas.height = height
}
let loop = gameloop(main, 60)
let x = false
function initButtons() {
  qs('.a-btn').addEventListener('click', () => {
    newWave()
  })
  qs('.b-btn').addEventListener('click', () => {
    x = !x
    if (x) {
      loop.run()
    } else {
      loop.stop()
    }
  })
}

let wave: Wave = new Wave()
let result: Result = new Result()

function main() {
  wave.step()
  console.log('main')
  ctx.clearRect(0, 0, width, height)
  ctx.fillStyle = '#000'
  drawWave(ctx, wave)
  drawResult(ctx, result)
}

const v = 2
const v0 = new Speed(v, 0)
const v1 = new Speed(0, v)
const v2 = new Speed(-v, 0)
const v3 = new Speed(0, -v)

function gen(): void {
  const w = 100
  const hw = w / 2
  const d = Math.random() * Math.min(width, height)
  const c = 'hsla(220,80%,50%,0.5)'
  wave.add(new WaveRect(new Rect(0 - hw, d, w, w, c), v0))
  wave.add(new WaveRect(new Rect(width - d, -hw, w, w, c), v1))
  wave.add(new WaveRect(new Rect(width + hw, height - d, w, w, c), v2))
  wave.add(new WaveRect(new Rect(d, height + hw, w, w, c), v3))
}

function newWave() {
  const rects = wave.eject()
  result.add(...rects)
  gen()
}

function init() {
  newWave()
}

type Ctx = CanvasRenderingContext2D

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
