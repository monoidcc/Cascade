import { pub, innerHTML, on, is, sub, component } from 'capsid'
import { css } from 'emotion'
import { Ctx } from './dom'
import { drawText } from './draw-util'

@component('preview-modal')
@sub('preview-modal')
@innerHTML(`
  <canvas class="preview-canvas" />
`)
@is(css`
  display: none;
  background-color: rgba(0, 0, 0, 0.3);
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
class PreviewModal {
  @on('preview-modal')
  @pub('preview-draw')
  open({ detail }) {
    this.el.classList.add('show')
    console.log(detail)
    return detail
  }

  hide() {
    this.el.classList.remove('show')
  }
}

@component('preview-canvas')
@sub('preview-draw')
class PreviewCanvas {
  resize() {
    const size = this.getCanvasSize()
    this.el!.width = size
    this.el!.height = size
  }

  getCanvasSize() {
    const el = this.el!
    const parent = this.el.parentElement!
    return Math.min(parent.clientWidth, parent.clientHeight) * 0.8
  }

  @on('preview-draw')
  draw({ detail: result }) {
    this.resize()
    const ctx = this.el.getContext('2d')!
    drawText(ctx, result.text, this.el.width, this.el.height)
  }
}
