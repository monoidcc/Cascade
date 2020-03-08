import gameloop = require('gameloopjs')
import bezier = require('bezier-easing')
const qs = <T extends Element>(q: string): T => document.querySelector(q) as any
const byId = <T extends Element>(id: string): T =>
  document.getElementById(id) as any

let width = 0
let height = 0
let ctx: CanvasRenderingContext2D

class Rect {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string
  ) {}

  clone(): Rect {
    return new Rect(this.x, this.y, this.width, this.height, this.color)
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

  goto(x: number, y: number): void {
    this.x = x
    this.y = y
  }

  scale(width: number = 0, height: number = 0): void {
    this.width += width
    this.height += height
  }
}

class Speed {
  constructor(public x: number, public y: number) {}
}

class Motion {
  frame = 0
  initX = 0
  initY = 0
  constructor(
    public frameMax: number,
    public easing: any,
    public x: number,
    public y: number
  ) {}

  init(x: number, y: number): void {
    this.initX = x
    this.initY = y
  }

  isFinished(): boolean {
    return this.frame >= this.frameMax
  }

  step() {
    if (this.isFinished()) {
      return
    }
    this.frame++
  }

  get(): { x: number; y: number } {
    return {
      x: this.initX + this.x * this.easing(this.frame / this.frameMax),
      y: this.initY + this.y * this.easing(this.frame / this.frameMax)
    }
  }
}

class WaveRect {
  private initX: number
  private initY: number
  constructor(public rect: Rect, public motion: Motion) {
    this.initX = rect.x
    this.initY = rect.y
  }

  step() {
    this.motion.step()
    const { x, y } = this.motion.get()
    this.rect.goto(x, y)
  }

  isFinished(): boolean {
    return this.motion.isFinished()
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

  step(): WaveRect[] {
    const finished: WaveRect[] = []
    const wip: WaveRect[] = []
    this.rects.forEach(wr => {
      wr.step()
      if (wr.isFinished()) {
        finished.push(wr)
      } else {
        wip.push(wr)
      }
    })
    this.rects = wip
    return finished
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

const dice = (n: number): number => Math.random() * n

const easing0 = bezier(0.42, 0, 0.58, 1)

function gen(): void {
  const w = dice(300) + 100
  const hw = w / 2
  const d = dice(Math.min(width, height))
  const c = `hsla(${dice(360)},80%,50%,0.35)`
  const r0 = new Rect(0 - hw, d, w, w, c)
  const r1 = new Rect(width - d, -hw, w, w, c)
  const r2 = new Rect(width + hw, height - d, w, w, c)
  const r3 = new Rect(d, height + hw, w, w, c)
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
