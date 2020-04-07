import { component, innerHTML, on, sub, is, wired } from 'capsid'
import { css } from 'emotion'
import { share } from '@lepont/share'
import { Artwork } from '../domain/models'
import { drawArtwork } from '../adapters/canvas'

@component('edit-modal')
@innerHTML(`
  <canvas class="edit-canvas" width="500" height="500"></canvas>
  <div class="edit-controls">
    <button class="delete-btn">DELETE</button>
    <button class="share-btn">SHARE</button>
    <button class="cancel-btn">CANCEL</button>
  </div>
`)
@sub('edit-modal')
@is(css`
  display: none;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  canvas {
    width: min(80vh, 80vw);
    height: min(80vh, 80vw);
  }

  &.show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`)
@sub('open-edit-modal')
export class EditModal {
  el?: Element

  @wired('canvas')
  canvas?: HTMLCanvasElement

  artwork?: Artwork

  @on('open-edit-modal')
  open({ detail: artwork }: { detail: Artwork }) {
    const canvas = this.canvas!
    const { width, height } = canvas
    const ctx = canvas.getContext('2d')!
    this.artwork = artwork

    drawArtwork(ctx, artwork, width, height)
    this.el!.classList.add('show')
  }

  @on.click.at('.cancel-btn')
  @on('hide-edit-modal')
  hide() {
    this.el!.classList.remove('show')
  }

  @on.click.at('.delete-btn')
  delete() {
    alert('not impletemented!')
  }

  @on.click.at('.share-btn')
  share() {
    share({
      urls: [this.canvas!.toDataURL()],
      type: 'image/png',
      message: this.artwork!.text.body
    })
  }
}
