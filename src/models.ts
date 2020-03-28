import * as uuid from 'uuid'
import { getStorage } from './infrastructure'

export class Rect {
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

  goto(x: number, y: number): void {
    this.x = x
    this.y = y
  }

  scale(width: number = 0, height: number = 0): void {
    this.width += width
    this.height += height
  }
}

export class Motion {
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

export class WaveRect {
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

export class Wave {
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

export class Result {
  rects: Rect[] = []

  add(...r: Rect[]) {
    this.rects.push(...r)
  }

  clear() {
    this.rects.splice(0, this.rects.length)
  }
}

/**
 * Text represents the text on the canvas
 */
export class TextLabel {
  sizeInverse: number
  fonts = [
    'Avenir Next',
    'Arial',
    'Verdana',
    'Arial Black',
    'AmericanTypewriter-Bold',
    'Chalkboard SE',
    'Copperplate-Bold',
    'GillSans-UltraBold',
    'DIN Condensed'
  ]
  constructor(
    public body: string,
    public fontFamily: string,
    public size: number,
    public color: string,
    public shadowColor: string
  ) {
    this.sizeInverse = 1 / size
  }

  sizeUp(): void {
    this.sizeInverse -= 1
    this.size = 1 / this.sizeInverse
  }

  sizeDown(): void {
    this.sizeInverse += 1
    this.size = 1 / this.sizeInverse
  }

  rotateFonts(): void {
    this.fonts.push(this.fonts.shift()!)
    this.fontFamily = this.fonts[0]
  }

  font(height: number): string {
    return `bold ${height * this.size}px "${this.fontFamily}"`
  }

  shadowBlur(height: number): number {
    return (height * this.size) / 20
  }
}

export class Work {
  constructor(
    public id: string,
    public boxes: Rect[],
    public text: TextLabel,
    public backgroundColor: string
  ) {}
}

/**
 * Creates a work from the result and text.
 */
export function createWork(result: Result, text: TextLabel) {
  return new Work(uuid.v4(), result.rects, text, 'white')
}

export class WorkCollection {
  constructor(public works: Work[]) {}

  upsert(work: Work): void {
    const i = this.findIndexById(work.id)
    if (i === -1) {
      this.works.unshift(work)
    } else {
      this.works[i] = work
    }
  }

  findIndexById(id: string): number {
    return this.works.findIndex(work => work.id === id)
  }

  remove(work: Work): void {
    this.removeById(work.id)
  }

  removeById(id: string): void {
    const i = this.findIndexById(id)

    if (i === -1) {
      throw new Error(`Work not found: id=${id}`)
    }

    this.works.splice(i, 1)
  }
}

const KEY_WORK_COLLECTION = 'Tententen/work-collection'

type TextLabelDto = {
  body: string
  fontFamily: string
  size: number
  color: string
  shadowColor: string
}

type RectDto = {
  x: number
  y: number
  width: number
  height: number
  color: string
}

type WorkDto = {
  id: string
  text: TextLabelDto
  boxes: RectDto[]
  backgroundColor: string
}

export class WorkRepository {
  async get(): WorkCollection {
    const { getItem } = await getStorage()
    const arr = (await getItem(KEY_WORK_COLLECTION)) || []

    return new WorkCollection(arr.map(WorkRepository.dtoToWork))
  }

  async save(work: Work) {
    const works = await this.get()
    works.upsert(work)
    await this.saveAll(works)
  }

  async saveAll(works: Work[]) {
    const { setItem } = await getStorage()
    await setItem(KEY_WORK_COLLECTION, works.works)
  }

  async remove(work: Work) {
    const works = await this.get()
    works.remove(work)
    await this.saveAll(works)
  }

  static dtoToWork(dto: WorkDto): Work {
    return new Work(
      dto.id,
      dto.boxes.map(WorkRepository.dtoToRect),
      WorkRepository.dtoToTextLabel(dto.text),
      dto.backgroundColor
    )
  }

  static dtoToTextLabel(dto: TextLabelDto): TextLabel {
    return new TextLabel(
      dto.body,
      dto.fontFamily,
      dto.size,
      dto.color,
      dto.shadowColor
    )
  }

  static dtoToRect(dto: RectDto): Rect {
    return new Rect(dto.x, dto.y, dto.width, dto.height, dto.color)
  }
}
