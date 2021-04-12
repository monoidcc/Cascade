export const INIT_CANVAS_CONTROLS = 'init-canvas-controls'
export const LIST_MODAL_OPEN = 'list-modal-open'
export const LIST_DIALOG_REFRESH = 'refresh-list-dialog'
export const TOAST = 'toast'
export const OPEN_CONFIRM_DIALOG = 'open-confirm-dialog'
export const CLOSE_CONFIRM_DIALOG = 'close-confirm-dialog'
export const OPEN_MANUAL_DIALOG = 'open-manual-dialog'
export const CHANGE_FONT_COLOR = 'change-font-color'
export const RESET = 'reset'
export const IS_FONT_SIZE_MAX = 'is-font-size-max'
export const ARTWORK_PERSISTED = 'artwork-persisted'

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
