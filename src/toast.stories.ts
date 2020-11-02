import * as Event from './const/event'
import { create } from './util/dom'
import { component, pub, on } from 'capsid'


export default {
  title: 'Toast'
}

@component('toast-opener')
class ToastOpener {
  el?: HTMLElement;
  @on.click
  @pub(Event.TOAST)
  onClick(): Event.ToastMessage {
    const { message, variant } = this.el!.dataset
    return { message: message!, variant: variant as any  }
  }
}

export const success = () => create(`
  <div>
    <div class="toast-provider fixed-fill-content"></div>
    <button
      class="toast-opener"
      data-message="Toast message lorem ipsum"
      data-variant="success"
    >
      open Toast
    </button>
  </div>
`)

export const danger = () => create(`
  <div>
    <div class="toast-provider fixed-fill-content"></div>
    <button
      class="toast-opener"
      data-message="Toast message lorem ipsum"
      data-variant="danger"
    >
      open Toast
    </button>
  </div>
`)

