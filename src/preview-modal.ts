import { install, pub, emits, innerHTML, on, is, sub, component } from 'capsid'
import debug = require('capsid/debug')
install(debug)
import { css } from 'emotion'
import { Ctx } from './dom'
import { drawText } from './draw-util'
import { Result } from './models'

@component('preview-modal')
@sub('preview-modal')
@innerHTML(`
  <canvas class="preview-canvas" />
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
class PreviewModal {
  @on('preview-modal')
  @pub('preview-draw')
  open({ detail }) {
    this.el.classList.add('show')
    console.log(detail)
    return detail
  }

  @on.click
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
  draw({ detail }) {
    const result: Result = detail
    this.resize()
    const ctx = this.el.getContext('2d')!
    ctx.fillStyle = result.backgroundColor
    ctx.fillRect(0, 0, this.el.width, this.el.height)
    drawText(ctx, result.text, this.el.width, this.el.height)
  }

  @on.click
  onClick(e) {
    e.stopPropagation()
  }
}
