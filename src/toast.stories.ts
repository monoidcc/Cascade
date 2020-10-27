import * as Event from './const/event'

export default {
  title: 'Toast'
}

export const success = () => {
  const btn = document.createElement('button')
  document.body.classList.add('toast-provider')
  btn.textContent = 'Toast'
  btn.addEventListener('click', () => {
    const evt = new CustomEvent<Event.ToastMessage>(
      Event.TOAST,
      { detail: { message: 'Success!', variant: 'success' } }
    )
    document.body.dispatchEvent(evt)
  })
  return btn
}

export const danger = () => {
  const btn = document.createElement('button')
  document.body.classList.add('toast-provider')
  btn.textContent = 'Toast'
  btn.addEventListener('click', () => {
    const evt = new CustomEvent<Event.ToastMessage>(
      Event.TOAST,
      { detail: { message: 'Failed!', variant: 'danger' } }
    )
    document.body.dispatchEvent(evt)
  })
  return btn
}

