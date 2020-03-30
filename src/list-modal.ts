import { is, component, on, sub, innerHTML } from 'capsid'
import { css } from 'emotion'
import { Artwork, ArtworkRepository } from './models'
import { drawArtwork } from './canvas-adapter'

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
`)
@innerHTML(`
  <button class="close-button">CLOSE</button>
`)
@sub('artwork-save')
class ListModal {
  el?: HTMLDivElement

  @on('artwork-save')
  async artworkSave({ detail: artwork }: { detail: Artwork }) {
    await new ArtworkRepository().save(artwork)
    this.open()
  }

  async open() {
    const artworks = await (new ArtworkRepository().get())

    artworks.artworks.forEach((artwork: Artork) => {
      const item = document.createElement('canvas')
      item.width = 150
      item.height = 150
      this.el.appendChild(item)
      drawArtwork(item.getContext('2d'), artwork, 150, 150)
    })

    this.el.classList.add('show')
  }

  @on.click.at('.close-button')
  close() {
    this.el.classList.remove('show')
  }
}
