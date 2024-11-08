import { component, innerHTML, is, make, on, pub, sub, wired } from "capsid";
import { css } from "emotion";
import { Artwork, ArtworkRepository } from "../domain/models";
import { drawArtwork } from "../adapters/canvas";
import { GRAYISH_BLUE_ALPHA80 } from "../const/color";
import * as Event from "../const/event";
import monoSvg from "../img/mono.svg";

const GAP = 4;

@component("list-dialog")
@sub("artwork-save", Event.LIST_MODAL_OPEN, Event.LIST_DIALOG_REFRESH)
@innerHTML(`
  <header class="list-dialog__header">
    <svg class="done-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
    </svg>
    <span class="list-dialog__header__title"></span>
    <span style="width: 21px; mrgin-right: 12px;">&nbsp;</span>
  </header>
  <main class="list-dialog__list-area"></main>
`)
@is(css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  overflow: scroll;

  .list-dialog__header {
    flex-shrink: 0;
    border-style: solid;
    border-width: 0 0 1px;
    border-bottom-color: ${GRAYISH_BLUE_ALPHA80};
    height: 62px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;

    svg {
      margin-left: 12px;
      width: 21px;
      height: 21px;
      cursor: pointer;
    }

    .list-dialog__header__title {
      font-weight: bold;
    }
  }

  .list-dialog__list-area {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    overflow-x: hidden;

    padding-top: ${GAP}px;
    padding-bottom: ${GAP}px;
    margin-left: -${GAP/2}px;
    margin-right: -${GAP/2}px;

    .list-item {
      margin: ${GAP/2}px;
    }

    .last-item {
      display: flex;
      justify-content: center;
      align-items: center;

      .mono {
        width: 57px;
        height: 57px;
      }
    }

    .no-items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 300px;

      img {
        width: 57px;
      }

      p {
        color: #888;
        margin-top: 20px;

        .close-button {
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`)
export class ListModal {
  el?: HTMLDivElement;

  @wired(".list-dialog__header__title")
  headerTitle?: HTMLDivElement;

  @wired(".list-dialog__list-area")
  listArea?: HTMLDivElement;

  @on("artwork-save")
  async artworkSave({ detail: artwork }: { detail: Artwork }) {
    await new ArtworkRepository().save(artwork);
    this.open();
  }

  @on(Event.LIST_MODAL_OPEN)
  async open() {
    await this.refresh();

    this.el!.classList.add("show");
  }

  @on.click.at(".mono")
  @pub(Event.TOAST)
  mono(e: Event): Event.ToastMessage {
    e.stopImmediatePropagation();
    return {
      message: "Hi, I'm Mono.",
      variant: "success",
    }
  }

  @on.click
  @on.click.at(".close-button")
  close() {
    this.el!.classList.remove("show");
  }

  @on(Event.LIST_DIALOG_REFRESH)
  async refresh() {
    this.listArea!.innerHTML = "";
    const artworks = await new ArtworkRepository().get();

    let numPartition = 3;
    if (window.innerHeight < window.innerWidth) {
      // If the width is bigger than height
      // increase the horizontal partition number
      const x = window.innerHeight / 3;
      numPartition = Math.ceil(window.innerWidth / x);
    }

    const size = (window.innerWidth - GAP * (numPartition - 1)) / numPartition;

    this.headerTitle!.innerHTML =
      `Artworks (${artworks.length}/${Artwork.MAX_ITEMS})`;

    if (artworks.length === 0) {
      this.listArea!.innerHTML = `
        <div class="no-items">
          <img class="mono" src="${monoSvg}" />
          <p>No items. Let's create one in the <span class="close-button" href="">main canvas</span>!</p>
        </div>
      `;
      return;
    }

    artworks.artworks
      .map((artwork: Artwork): [Artwork, HTMLDivElement] => [
        artwork,
        this.el!.querySelector(`[dataset-key="${artwork.id}"]`) ||
        document.createElement("div"),
      ])
      .forEach(([artwork, div]: [Artwork, HTMLDivElement]) => {
        make<ListItem>("list-item", div).update(artwork, size);
        this.listArea!.appendChild(div);
      });

    const div = document.createElement("div");
    div.classList.add("last-item");
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    div.innerHTML = `<img class="mono" src="${monoSvg}" />`;
    this.listArea!.appendChild(div);
  }
}

@component("list-item")
@innerHTML(`<canvas></canvas>`)
export class ListItem {
  el?: HTMLDivElement;

  artwork?: Artwork;
  size?: number;

  @wired("canvas")
  canvas?: HTMLCanvasElement;

  update(artwork: Artwork, size: number): void {
    this.el!.dataset.key = artwork.id;
    this.artwork = artwork;
    this.el!.style.width = `${size}px`;
    this.el!.style.height = `${size}px`;
    this.canvas!.width = size;
    this.canvas!.height = size;
    this.draw();
  }

  draw(): void {
    drawArtwork(
      this.canvas!.getContext("2d")!,
      this.artwork!,
      this.canvas!.width,
      this.canvas!.height,
    );
  }

  @on.click
  @pub("open-edit-modal")
  onClick(e: Event): Artwork {
    e.stopPropagation();
    return this.artwork!;
  }
}
