import { component, is, on, prep, sub } from 'capsid'
import { css } from 'emotion'
import { LIGHT_GRAYISH_LIME_GREEN, MOSTLY_BLACK, VERY_SOFT_RED } from './const/color'
import * as Event from './const/event'
import { defer } from './util/async'

@component('toast-provider')
@sub(Event.TOAST)
@is(css`
  pointer-events: none;
`)
export class ToastProvider {
  el?: HTMLElement

  @on(Event.TOAST)
  onToast(e: Event.ToastEvent) {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.textContent = e.detail.message
    if (e.detail.variant === 'success') {
      toast.classList.add('is-success')
    } else if (e.detail.variant === 'danger') {
      toast.classList.add('is-danger')
    }
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
  background-color: ${MOSTLY_BLACK};
  color: rgba(0, 0, 0, 0.7);
  padding: 8px;

  &.show {
    opacity: 0.9;
  }

  &.is-success {
    background-color: ${LIGHT_GRAYISH_LIME_GREEN};
  }

  &.is-danger {
    background-color: ${VERY_SOFT_RED}
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
