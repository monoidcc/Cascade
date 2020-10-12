import { component, is, on, prep, sub } from 'capsid'
import { css } from 'emotion'
import * as Event from './const/event'
import { defer } from './util/async'

@component('toast-provider')
@sub(Event.TOAST)
export class ToastProvider {
  el?: HTMLElement

  @on(Event.TOAST)
  onToast(e: CustomEvent) {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.textContent = e.detail.message
    this.el!.appendChild(toast)
    prep('toast', this.el)
  }
}

@component('toast')
@is(css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  bottom: 52px;
  height: 82px;
  opacity: 0;
  transition-property: opacity;
  transition-duration: 500ms;
  text-align: center;
  background-color: gray;
  color: white;
  padding: 8px;

  &.show {
    opacity: 0.9;
  }
`)
export class Toast {
  el?: HTMLElement
  async __mount__() {
    await defer(100)
    this.el!.classList.add('show')
    await defer(5000)
    await this.remove()
  }

  @on.click
  async remove() {
    this.el?.classList.remove('show')
    await defer(600)
    this.el?.parentElement?.removeChild(this.el)
  }
}
