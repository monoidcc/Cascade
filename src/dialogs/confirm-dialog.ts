import { component, innerHTML, is, on, pub, sub, wired } from "capsid";
import { css } from "emotion";
import * as Event from "../const/event";
import {
  GRAYISH_BLUE_ALPHA80,
  LIGHT_GRAYISH_LIME_GREEN,
  VERY_DARK_GRAY_ALPHA80,
  VERY_SOFT_RED,
} from "../const/color";

@component("confirm-dialog-provider")
@sub(Event.OPEN_CONFIRM_DIALOG)
@sub(Event.CLOSE_CONFIRM_DIALOG)
@is(css`
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`)
@innerHTML(`<div class="confirm-dialog"></div>`)
export class ConfirmDialogProvider {
  el?: HTMLElement;

  __mount__() {}

  @on(Event.OPEN_CONFIRM_DIALOG)
  open() {
    this.el!.classList.add("show");
  }

  @on.click
  @on(Event.CLOSE_CONFIRM_DIALOG)
  close() {
    this.el!.classList.remove("show");
  }
}

@component("confirm-dialog")
@sub(Event.OPEN_CONFIRM_DIALOG)
@is(css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 80%;
  background-color: white;
  border-radius: 8px;
  line-height: 1.6;

  .confirm-dialog__content {
    padding: 16px;
    flex-grow: 1;
  }

  .confirm-dialog__actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    padding: 16px;

    button {
      height: 40px;
      background-color: #fcfcfc;
      border-radius: 8px;
      border-width: 1px;
      border-color: ${GRAYISH_BLUE_ALPHA80};
      border-style: solid;
      padding-left: 12px;
      padding-right: 12px;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.01) inset;
      font-weight: 900;
    }

    button.is-danger {
      border-width: 0;
      background-color: ${VERY_SOFT_RED};
      color: ${VERY_DARK_GRAY_ALPHA80};
    }

    button.is-success {
      border-width: 0;
      background-color: ${LIGHT_GRAYISH_LIME_GREEN};
      color: ${VERY_DARK_GRAY_ALPHA80};
    }
  }
`)
@innerHTML(`
  <div class="confirm-dialog__content"></div>
  <div class="confirm-dialog__actions">
    <button class="confirm-dialog__cancel">Cancel</button>
    <button class="confirm-dialog__confirm"></button>
  </div>
`)
export class ConfirmDialog {
  el?: HTMLElement;
  onConfirm?: () => void;

  @wired(".confirm-dialog__content")
  content?: HTMLDivElement;

  @wired(".confirm-dialog__actions")
  actions?: HTMLDivElement;

  @wired(".confirm-dialog__confirm")
  confirmButton?: HTMLButtonElement;

  @on.click
  onClick(e: Event) {
    e.stopPropagation();
  }

  @on(Event.OPEN_CONFIRM_DIALOG)
  onOpen(e: Event.OpenConfrimDialogEvent) {
    const msg = e.detail;
    this.content!.textContent = msg.message;
    this.confirmButton!.textContent = msg.confirmLabel || "OK";
    if (msg.confirmVariant === "danger") {
      this.confirmButton!.classList.add("is-danger");
    } else if (msg.confirmVariant === "success") {
      this.confirmButton!.classList.add("is-success");
    }
    this.onConfirm = e.detail.onConfirm;
  }

  @on.click.at(".confirm-dialog__confirm")
  @pub(Event.CLOSE_CONFIRM_DIALOG)
  async onOk() {
    await this.onConfirm?.();
  }

  @on.click.at(".confirm-dialog__cancel")
  @pub(Event.CLOSE_CONFIRM_DIALOG)
  onCancel() {}
}
