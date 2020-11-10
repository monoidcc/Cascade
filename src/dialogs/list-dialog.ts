import {
  wired,
  is,
  component,
  on,
  sub,
  innerHTML,
  make,
  pub
} from 'capsid'
import { css } from 'emotion'
import { Artwork, ArtworkRepository } from '../domain/models'
import { drawArtwork } from '../adapters/canvas'
import * as Event from '../const/event'

@component('list-dialog')
@sub('artwork-save', Event.LIST_MODAL_OPEN, Event.LIST_DIALOG_REFRESH)
@innerHTML(`
  <div class="list-area"></div>
  <div class="list-controls">
    <button class="close-button">CLOSE</button>
  </div>
`)
@is(css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.9);
  overflow: scroll;

  .list-controls {
    display: flex;
    justify-content: center;
    align-items: center;

    .close-button {
      width: 150px;
      height: 36px;
    }
  }
`)
export class ListModal {
  el?: HTMLDivElement

  @wired('.list-area')
  listArea?: HTMLDivElement

  @on('artwork-save')
  async artworkSave({ detail: artwork }: { detail: Artwork }) {
    await new ArtworkRepository().save(artwork)
    this.open()
  }

  @on(Event.LIST_MODAL_OPEN)
  async open() {
    await this.refresh()

    this.el!.classList.add('show')
  }

  @on.click
  @on.click.at('.close-button')
  close() {
    this.el!.classList.remove('show')
  }

  @on(Event.LIST_DIALOG_REFRESH)
  async refresh() {
    this.listArea!.innerHTML = ''
    const artworks = await new ArtworkRepository().get()

    artworks.artworks
      .map((artwork: Artwork): [Artwork, HTMLDivElement] => [
        artwork,
        this.el!.querySelector(`[dataset-key="${artwork.id}"]`) ||
          document.createElement('div')
      ])
      .forEach(([artwork, div]: [Artwork, HTMLDivElement]) => {
        make<ListItem>('list-item', div).update(artwork)
        this.listArea!.appendChild(div)
      })
  }
}

@component('list-item')
@is(css`
  display: inline-box;
  position: relative;
  width: min(25vw, 25vh);
  height: min(25vw, 25vh);

  canvas {
    width: 100%;
    height: 100%;
  }
`)
@innerHTML(`<canvas></canvas>`)
export class ListItem {
  el?: HTMLDivElement

  artwork?: Artwork

  @wired('canvas')
  canvas?: HTMLCanvasElement

  __mount__(): void {
    this.canvas!.width = 150
    this.canvas!.height = 150
  }

  update(artwork: Artwork): void {
    this.el!.dataset.key = artwork.id
    this.artwork = artwork
    this.draw()
  }

  draw(): void {
    drawArtwork(
      this.canvas!.getContext('2d')!,
      this.artwork!,
      this.canvas!.width,
      this.canvas!.height
    )
  }

  @on.click
  @pub('open-edit-modal')
  onClick(e: Event): Artwork {
    e.stopPropagation()
    return this.artwork!
  }
}
