import { pub, emits, innerHTML, on, is, sub, component } from 'capsid'
import { css } from 'emotion'
import { drawArtwork } from '../adapters/canvas'
import { Artwork } from '../domain/models'

@component('preview-modal')
@sub('preview-modal')
@innerHTML(`
  <canvas class="preview-canvas"></canvas>
  <div class="preview-controls"></div>
`)
@is(css`
  display: none;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  &.show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`)
export class PreviewModal {
  el?: HTMLDivElement

  @on('preview-modal')
  @pub('preview-draw')
  open({ detail }: { detail: Artwork }): Artwork {
    this.el!.classList.add('show')
    return detail
  }

  @on.click
  @on('preview-modal-hide')
  hide() {
    this.el!.classList.remove('show')
  }
}

@component('preview-canvas')
@sub('preview-draw')
@sub('preview-save')
export class PreviewCanvas {
  el?: HTMLCanvasElement
  artwork?: Artwork

  resize() {
    const size = this.getCanvasSize()
    this.el!.width = size
    this.el!.height = size
  }

  getCanvasSize() {
    const el = this.el!
    const parent = el.parentElement!
    return Math.min(parent.clientWidth, parent.clientHeight) * 0.8
  }

  @on('preview-draw')
  draw({ detail: artwork }: { detail: Artwork }) {
    this.resize()
    this.artwork = artwork
    const el = this.el!
    const ctx = el.getContext('2d')!
    drawArtwork(ctx, artwork, el.width, el.height)
  }

  @on('preview-save')
  @pub('artwork-save')
  @emits('preview-modal-hide')
  previewSave() {
    return this.artwork
  }

  @on.click
  onClick(e: Event) {
    e.stopPropagation()
  }
}

@is(css`
  background-color: white;
  margin: 15px 0;
  width: 80%;
  height: 12%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    width: 150px;
    height: 36px;
    border-width: 0;
    background-color: hsla(220,20%,80%,0.8);
  }
`)
@innerHTML(`
  <button class="save">SAVE</button>
  <button class="cancel">CANCEL</button>
`)
@component('preview-controls')
export class PreviewControls {
  @on.click
  onClick(e: Event) {
    e.stopPropagation()
  }

  @on.click.at('.save')
  @pub('preview-save')
  previewSave() {
  }

  @on.click.at('.cancel')
  @pub('preview-cancel')
  previewCancel() {
    alert('cancel')
  }
}
