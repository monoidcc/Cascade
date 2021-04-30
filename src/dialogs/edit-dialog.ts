import { component, emits, innerHTML, is, on, pub, sub, wired } from "capsid";
import { css } from "emotion";
import { Artwork, ArtworkRepository } from "../domain/models";
import { drawArtwork } from "../adapters/canvas";
import { sendMessage } from "lepont/browser";
import { PermissionsAndroid } from "@lepont/permissions-android";
import { share } from "@lepont/share";
import button from "../button";
import { PLATFORM } from "../const";
import { GRAYISH_BLUE_ALPHA80 } from "../const/color";
import * as Event from "../const/event";

@component("edit-dialog")
@sub("open-edit-modal")
@is(css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

  .edit-dialog__header {
    border-style: solid;
    border-width: 0 0 1px;
    border-bottom-color: ${GRAYISH_BLUE_ALPHA80};
    height: 62px;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: white;

    svg {
      margin-left: 12px;
      width: 21px;
      height: 21px;
      cursor: pointer;
    }
  }

  .edit-dialog__main {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .edit-dialog__controls {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 134px;

    border-style: solid;
    border-width: 1px 0 0;
    border-top-color: ${GRAYISH_BLUE_ALPHA80};

    background-color: #fcfcfc;
  }

  .edit-dialog__controls > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 40px;

  }

  .edit-dialog__controls > div:first-child {
  }
`)
@innerHTML(/* html */ `
  <header class="edit-dialog__header">
    <svg class="done-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
    </svg>
  </header>
  <div class="edit-dialog__main">
    <canvas class="edit-canvas" width="50" height="50"></canvas>
  </div>
  <div class="edit-dialog__controls">
    <div>
      <button class="${button} is-info share-btn">SHARE</button>
      <button class="${button} is-info download-btn">DOWNLOAD</button>
    </div>
    <div>
      <button class="${button} is-danger delete-btn">DELETE</button>
      <button class="${button} done-btn">DONE</button>
    </div>
  </div>
`)
export class EditModal {
  el?: Element;

  @wired("canvas")
  canvas?: HTMLCanvasElement;

  @wired(".edit-dialog__main")
  main?: HTMLDivElement;

  artwork?: Artwork;

  @on("open-edit-modal")
  open({ detail: artwork }: { detail: Artwork }) {
    const maxWidth = document.body.offsetWidth;
    const maxHeight = this.main!.offsetHeight;

    const size = Math.min(maxWidth, maxHeight) * 0.9;
    const canvasSize = size * window.devicePixelRatio;

    const canvas = this.canvas!;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    const ctx = canvas.getContext("2d")!;
    this.artwork = artwork;

    drawArtwork(ctx, artwork, canvasSize, canvasSize);
    this.el!.classList.add("show");
  }

  @on.click.at(".done-btn")
  @on("hide-edit-modal")
  hide() {
    this.el!.classList.remove("show");
  }

  @on.click.at(".delete-btn")
  @pub(Event.OPEN_CONFIRM_DIALOG)
  delete(): Event.OpenConfirmDialogMessage {
    return {
      message: "Are you sure to delete this image?",
      confirmLabel: "Delete",
      confirmVariant: "danger",
      onConfirm: () => {
        this.onDelete();
      },
    };
  }

  @pub(Event.LIST_DIALOG_REFRESH)
  @pub(Event.ARTWORK_PERSISTED)
  async onDelete() {
    const repository = new ArtworkRepository();
    await repository.remove(this.artwork!);
    this.hide();
  }

  @pub(Event.TOAST)
  toastDanger(message: string): Event.ToastMessage {
    return {
      message,
      variant: "danger",
    };
  }
  @pub(Event.TOAST)
  toastSuccess(message: string): Event.ToastMessage {
    return {
      message,
      variant: "success",
    };
  }

  @on.click.at(".share-btn")
  async share() {
    const base64Content = this.canvas!.toDataURL();
    if (PLATFORM === "web") {
      this.toastDanger("Share is not supported on web");
      return;
    }
    try {
      if (PLATFORM === "android") {
        const permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Tententen Storage Permission",
            message: "Tententen needs access to your storage " +
              "so you can save awesome pictures.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          },
        );
        if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
          this.toastDanger("Permission Denied");
          return;
        }
      }
      share({
        message: `${this.artwork?.text.body} #tententenapp`,
        urls: [base64Content],
      });
    } catch (e) {
      this.toastDanger(e);
    }
  }

  @on.click.at(".download-btn")
  async download() {
    const base64Content = this.canvas!.toDataURL().substr(22);
    if (PLATFORM === "web") {
      this.toastDanger("Download is not supported on web");
      return;
    }
    try {
      if (PLATFORM === "android") {
        const permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Tententen Storage Permission",
            message: "Tententen needs access to your storage " +
              "so you can save awesome pictures.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          },
        );
        if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
          this.toastDanger("Permission denied");
          return;
        }
      }
      const savedPath = await sendMessage({
        type: "write-tmp-image",
        payload: {
          content: base64Content,
          filename: "tmp.png",
          encode: "base64",
        },
      });
      await sendMessage({
        type: "cameraroll:save",
        payload: { tag: savedPath, type: "photo", album: "Tententen" },
      });
      this.toastSuccess("Saved the picture to the album");
    } catch (e) {
      this.toastDanger(e);
    }
  }
}
