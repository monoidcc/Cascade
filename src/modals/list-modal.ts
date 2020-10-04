import {
  wired,
  is,
  component,
  on,
  sub,
  innerHTML,
  make,
  get,
  pub
} from 'capsid'
import { css } from 'emotion'
import { Artwork, ArtworkRepository } from '../domain/models'
import { drawArtwork } from '../adapters/canvas'
import * as Events from '../events'

@component('list-modal')
@is(css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  overflow: scroll;
  transform: translateX(100vw);
  transition: transform 500ms;

  &.show {
    transform: translateX(0);
  }

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
@innerHTML(`
  <div class="list-area"></div>
  <div class="list-controls">
    <button class="close-button">CLOSE</button>
  </div>
`)
@sub('artwork-save', Events.LIST_MODAL_OPEM)
export class ListModal {
  el?: HTMLDivElement

  @wired('.list-area')
  listArea?: HTMLDivElement

  @on('artwork-save')
  async artworkSave({ detail: artwork }: { detail: Artwork }) {
    await new ArtworkRepository().save(artwork)
    this.open()
  }

  @on(Events.LIST_MODAL_OPEM)
  async open() {
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

    this.el!.classList.add('show')
  }

  @on.click
  @on.click.at('.close-button')
  close() {
    this.el!.classList.remove('show')
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
