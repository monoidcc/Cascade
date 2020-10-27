import * as Event from "../const/event"
import { prep } from 'capsid'
import { wrap } from "module"

export default {
  title: 'confirm-dialog'
}

export const normal = () => {
  const btn = document.createElement('button')
  btn.textContent = 'ConfirmDialog'
  btn.addEventListener('click', () => {
    document.querySelectorAll(`.sub\\:${Event.OPEN_CONFIRM_DIALOG}`).forEach((node) => {
      node.dispatchEvent(
        new CustomEvent<Event.OpenConfirmDialogMessage>(
          Event.OPEN_CONFIRM_DIALOG,
          { detail: { message: 'Confirm', onConfirm: () => {} }, bubbles: false }
        )
      )
    })
  })
  const provider = document.createElement('div')
  const cl = provider.classList;
  cl.add('confirm-dialog-provider')
  cl.add('fixed-fill-content')
  cl.add('fade-in-opacity')

  const wrapper = document.createElement('div')
  wrapper.appendChild(btn)
  wrapper.appendChild(provider)

  setTimeout(() => {
    prep()
  }, 10)
  return wrapper
}
