import gameloop = require('gameloopjs')
const qs = <T extends Element>(q: string): T => document.querySelector(q) as any
const byId = <T extends Element>(id: string): T => document.getElementById(id) as any

let width = 0
let height = 0

let x: number[] = []
let y: number[] = []
let z: number[] = []

const walk = (diff: number): ((x: number) => number) => (x: number): number => {
  if (Math.random() > 0.5) {
    x += diff
  } else {
    x -= diff
  }

  return x % width
}

const main = () => {
  const canvas = byId<HTMLCanvasElement>('main-canvas')
  const main = byId<HTMLElement>('main')
  const ctx = canvas.getContext('2d')!
  width = main.clientWidth
  height = main.clientHeight
  canvas.width = width
  canvas.height = height
  for (const _ of Array(7)) {
    x.push(Math.floor(width * 1 / 4))
    y.push(Math.floor(width * 2 / 4))
    z.push(Math.floor(width * 3 / 4))
  }
  gameloop(main2, 60).run()
}

const walk0 = walk(1)

const step = (x: number[]): number[] => {
  const len = x.length
  x = x.map(walk0)
  /*
  x = x.map((k, i) => {
    const prev = x[(i - 1 + len) % len]
    const next = x[(i + 1 + len) % len]
    return (k * 10 + prev + next) / 12
  })
  */
  return x
}

const draw = (x: number[], ctx: any): void => {
  const len = x.length
  x.forEach((x, i) => {
    ctx.fillRect(0, height * i / len, x, height / len + 0 + 1)
  })
}

const main2 = () => {
  const canvas = byId<HTMLCanvasElement>('main-canvas')
  const ctx = canvas.getContext('2d')!
  x = step(x)
  y = step(y)
  z = step(z)
  ctx.clearRect(0, 0, width, height)
  ctx.fillStyle = '#000'
  draw(z, ctx)
  ctx.fillStyle = '#989800'
  draw(y, ctx)
  ctx.fillStyle = '#ffffff'
  draw(x, ctx)
}

;(window as any).onload = () => {
  main()
}
