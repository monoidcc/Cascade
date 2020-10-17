export const INIT_CANVAS_CONTROLS = 'init-canvas-controls'
export const LIST_MODAL_OPEN = 'list-modal-open'
export const TOAST = 'toast'

export type MessageVariant = 'success' | 'danger'


export type ToastMessage = {
  message: string,
  variant: MessageVariant,
}

export type ToastEvent = CustomEvent<ToastMessage>
