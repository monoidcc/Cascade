import { install, pub, emits, innerHTML, on, is, sub, component } from 'capsid'
import debug = require('capsid/debug')
install(debug)
import { css } from 'emotion'
import { Ctx } from './dom'
import { drawText, drawRects, drawWork } from './canvas-adapter'
import { Work } from './models'

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
  el?: HTMLDivElement

  @on('preview-modal')
  @pub('preview-draw')
  open({ detail }: { detail: Work }): Work {
    this.el!.classList.add('show')
    return detail
  }

  @on.click
  hide() {
    this.el!.classList.remove('show')
  }
}

@component('preview-canvas')
@sub('preview-draw')
class PreviewCanvas {
  el?: HTMLCanvasElement

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
  draw({ detail: work }: { detail: Work }) {
    this.resize()
    const el = this.el!
    const ctx = el.getContext('2d')!
    drawWork(ctx, work, el.width, el.height)
  }

  @on.click
  onClick(e: Event) {
    e.stopPropagation()
  }
}
