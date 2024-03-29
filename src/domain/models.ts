import * as uuid from "uuid";
import { getStorage } from "../util/storage";
import { PLATFORM } from "../const";

export class Rect {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string,
  ) {}

  clone(): Rect {
    return new Rect(this.x, this.y, this.width, this.height, this.color);
  }

  left(): number {
    return this.x - this.width / 2;
  }

  top(): number {
    return this.y - this.height / 2;
  }

  goto(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  scale(width: number = 0, height: number = 0): void {
    this.width += width;
    this.height += height;
  }
}

export class Motion {
  frame = 0;
  initX = 0;
  initY = 0;
  constructor(
    public frameMax: number,
    public easing: any,
    public x: number,
    public y: number,
  ) {}

  init(x: number, y: number): void {
    this.initX = x;
    this.initY = y;
  }

  isFinished(): boolean {
    return this.frame >= this.frameMax;
  }

  step() {
    if (this.isFinished()) {
      return;
    }
    this.frame++;
  }

  get(): { x: number; y: number } {
    return {
      x: this.initX + this.x * this.easing(this.frame / this.frameMax),
      y: this.initY + this.y * this.easing(this.frame / this.frameMax),
    };
  }
}

export class WaveRect {
  private initX: number;
  private initY: number;
  constructor(public rect: Rect, public motion: Motion) {
    this.initX = rect.x;
    this.initY = rect.y;
  }

  step() {
    this.motion.step();
    const { x, y } = this.motion.get();
    this.rect.goto(x, y);
  }

  isFinished(): boolean {
    return this.motion.isFinished();
  }
}

export class Wave {
  rects: WaveRect[] = [];

  add(...wr: WaveRect[]): void {
    this.rects.push(...wr);
  }

  toArray(): Rect[] {
    return this.rects.map((wr) => wr.rect);
  }

  eject(): Rect[] {
    const arr = this.toArray();
    this.rects.splice(0, this.rects.length);
    return arr;
  }

  step(): WaveRect[] {
    const finished: WaveRect[] = [];
    const wip: WaveRect[] = [];
    this.rects.forEach((wr) => {
      wr.step();
      if (wr.isFinished()) {
        finished.push(wr);
      } else {
        wip.push(wr);
      }
    });
    this.rects = wip;
    return finished;
  }
}

export class Result {
  rects: Rect[] = [];

  add(...r: Rect[]) {
    this.rects.push(...r);
  }

  clear() {
    this.rects.splice(0, this.rects.length);
  }
}

const fontsForIos = [
  '"Avenir Next"',
  "Arial",
  "Verdana",
  '"Arial Black"',
  "AmericanTypewriter-Bold",
  '"Chalkboard SE"',
  "Copperplate-Bold",
  "GillSans-UltraBold",
  '"DIN Condensed"',
];

const fontsForAndroid = [
  "Arial",
  "Baskerville",
  "Casual",
  "Courier",
  "Cursive",
  "Fantasy",
  "Helvetica",
  "monospace",
  "sans-serif",
  "sans-serif-black",
  "sans-serif-condensed",
  "sans-serif-condensed-light",
  "sans-serif-light",
];
/**
 * Text represents the text on the canvas
 */
export class TextLabel {
  sizeInverse: number;

  fonts = PLATFORM === "android" ? fontsForAndroid : fontsForIos;

  public fontFamily: string;

  constructor(
    public body: string,
    fontFamily: string,
    public size: number,
    public color: string,
    public shadowColor: string,
  ) {
    this.sizeInverse = 1 / size;
    this.fontFamily = this.fonts[0];
    if (this.fonts.includes(fontFamily)) {
      this.rotateUntil(fontFamily);
    }
  }

  isMaxSize(): boolean {
    return this.sizeInverse - 1 <= 0.01;
  }

  sizeUp(): void {
    if (this.isMaxSize()) {
      return;
    }
    this.sizeInverse -= 1;
    this.size = 1 / this.sizeInverse;
  }

  sizeDown(): void {
    this.sizeInverse += 1;
    this.size = 1 / this.sizeInverse;
  }

  rotateFonts(): void {
    this.fonts.push(this.fonts.shift()!);
    this.fontFamily = this.fonts[0];
  }

  rotateUntil(fontFamily: string): void {
    for (const _ of Array(this.fonts.length)) {
      this.rotateFonts();
      if (this.fontFamily === fontFamily) {
        break;
      }
    }
  }

  font(height: number): string {
    return `bold ${height * this.size}px ${this.fontFamily}`;
  }

  shadowBlur(height: number): number {
    return (height * this.size) / 20;
  }
}

export class Artwork {
  static MAX_ITEMS = 70;
  constructor(
    public id: string,
    public boxes: Rect[],
    public text: TextLabel,
    public backgroundColor: string,
    public createdAt: number,
  ) {}
}

/**
 * Creates a work from the result and text.
 */
export function createArtwork(result: Result, text: TextLabel): Artwork {
  return new Artwork(uuid.v4(), result.rects, text, "white", Date.now());
}

/**
 * The collection of artworks.
 */
export class ArtworkCollection {
  constructor(public artworks: Artwork[]) {}

  upsert(artwork: Artwork): void {
    const i = this.findIndexById(artwork.id);
    if (i === -1) {
      this.artworks.unshift(artwork);
    } else {
      this.artworks[i] = artwork;
    }
  }

  findIndexById(id: string): number {
    return this.artworks.findIndex((artwork) => artwork.id === id);
  }

  remove(artwork: Artwork): void {
    this.removeById(artwork.id);
  }

  removeById(id: string): void {
    const i = this.findIndexById(id);

    if (i === -1) {
      throw new Error(`Work not found: id=${id}`);
    }

    this.artworks.splice(i, 1);
  }

  get length(): number {
    return this.artworks.length;
  }
}

const KEY_ARTWORK_COLLECTION = "Cascade/artwork-collection";

type TextLabelDto = {
  body: string;
  fontFamily: string;
  size: number;
  color: string;
  shadowColor: string;
};

type RectDto = {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
};

type ArtworkDto = {
  id: string;
  text: TextLabelDto;
  boxes: RectDto[];
  backgroundColor: string;
  createdAt: number;
};

/**
 * The repository for artwork
 */
export class ArtworkRepository {
  async get(): Promise<ArtworkCollection> {
    const { getItem } = await getStorage();
    const arr: ArtworkDto[] =
      (await getItem<ArtworkDto[]>(KEY_ARTWORK_COLLECTION)) || [];

    return new ArtworkCollection(arr.map(ArtworkRepository.dtoToArtwork));
  }

  async save(artwork: Artwork): Promise<void> {
    const artworks = await this.get();
    artworks.upsert(artwork);
    await this.saveAll(artworks);
  }

  async saveAll(artworks: ArtworkCollection): Promise<void> {
    const { setItem } = await getStorage();
    await setItem<ArtworkDto[]>(KEY_ARTWORK_COLLECTION, artworks.artworks);
  }

  async remove(artwork: Artwork): Promise<void> {
    const artworks = await this.get();
    artworks.remove(artwork);
    await this.saveAll(artworks);
  }

  async isFull(): Promise<boolean> {
    return (await this.get()).length >= Artwork.MAX_ITEMS;
  }

  static dtoToArtwork(dto: ArtworkDto): Artwork {
    return new Artwork(
      dto.id,
      dto.boxes.map(ArtworkRepository.dtoToRect),
      ArtworkRepository.dtoToTextLabel(dto.text),
      dto.backgroundColor,
      dto.createdAt,
    );
  }

  static dtoToTextLabel(dto: TextLabelDto): TextLabel {
    return new TextLabel(
      dto.body,
      dto.fontFamily,
      dto.size,
      dto.color,
      dto.shadowColor,
    );
  }

  static dtoToRect(dto: RectDto): Rect {
    return new Rect(dto.x, dto.y, dto.width, dto.height, dto.color);
  }
}
