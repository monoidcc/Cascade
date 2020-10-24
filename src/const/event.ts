export const INIT_CANVAS_CONTROLS = 'init-canvas-controls'
export const LIST_MODAL_OPEN = 'list-modal-open'
export const TOAST = 'toast'
export const OPEN_CONFIRM_DIALOG = 'open-confirm-dialog'
export const CLOSE_CONFIRM_DIALOG = 'close-confirm-dialog'

export type MessageVariant = 'success' | 'danger' | 'default'

export type ToastMessage = {
  message: string
  variant: MessageVariant
}

export type ToastEvent = CustomEvent<ToastMessage>

export type OpenConfirmDialogMessage = {
  message: string
  confirmLabel?: string
  confirmVariant?: MessageVariant
  onConfirm: () => void
}

export type OpenConfrimDialogEvent = CustomEvent<OpenConfirmDialogMessage>
