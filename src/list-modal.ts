import { wired, is, component, on, sub, innerHTML } from 'capsid'
import { css } from 'emotion'
import { Artwork, ArtworkRepository } from './models'
import { drawArtwork } from './adapter-canvas'

@component('list-modal')
@is(css`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  overflow: scroll;

  &.show {
    display: flex;
    flex-wrap: wrap;
  }

  canvas {
    width: min(25vw, 25vh);
    height: min(25vw, 25vh);
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
@sub('artwork-save')
export class ListModal {
  el?: HTMLDivElement

  @wired('.list-area')
  listArea?: HTMLDivElement

  @on('artwork-save')
  async artworkSave({ detail: artwork }: { detail: Artwork }) {
    await new ArtworkRepository().save(artwork)
    this.open()
  }

  async open() {
    this.listArea!.innerHTML = ''
    const artworks = await (new ArtworkRepository().get())

    artworks.artworks.forEach((artwork: Artwork) => {
      const item = document.createElement('canvas')
      item.width = 150
      item.height = 150
      this.listArea!.appendChild(item)
      drawArtwork(item.getContext('2d')!, artwork, 150, 150)
    })

    this.el!.classList.add('show')
  }

  @on.click.at('.close-button')
  close() {
    this.el!.classList.remove('show')
  }
}
