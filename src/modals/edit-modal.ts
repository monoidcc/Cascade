import { component, innerHTML, on, sub, is, wired } from 'capsid'
import { css } from 'emotion'
// import { share } from '@lepont/share'
import { Artwork } from '../domain/models'
import { drawArtwork } from '../adapters/canvas'

@component('edit-modal')
@innerHTML(`
  <canvas class="edit-canvas" width="500" height="500"></canvas>
  <div class="edit-controls">
    <button class="delete-btn">DELETE</button>
    <button class="share-btn"><s>SHARE<s></button>
    <button class="download-btn">DOWNLOAD</button>
    <button class="cancel-btn">CANCEL</button>
  </div>
`)
@sub('edit-modal')
@is(css`
  display: none;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  canvas {
    width: min(80vh, 80vw);
    height: min(80vh, 80vw);
  }

  &.show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`)
@sub('open-edit-modal')
export class EditModal {
  el?: Element

  @wired('canvas')
  canvas?: HTMLCanvasElement

  artwork?: Artwork

  @on('open-edit-modal')
  open({ detail: artwork }: { detail: Artwork }) {
    const canvas = this.canvas!
    const { width, height } = canvas
    const ctx = canvas.getContext('2d')!
    this.artwork = artwork

    drawArtwork(ctx, artwork, width, height)
    this.el!.classList.add('show')
  }

  @on.click.at('.cancel-btn')
  @on('hide-edit-modal')
  hide() {
    this.el!.classList.remove('show')
  }

  @on.click.at('.delete-btn')
  delete() {
    alert('not impletemented!')
  }

  @on.click.at('.share-btn')
  share() {
    alert('doesn\'t work now')
    /*
    const text = this.artwork!.text.body
    const base64Image = this.canvas!.toDataURL()
    alert(typeof base64Image)
    alert(base64Image.substr(0, 100))
    share({
      // urls: [base64Image],
      // urls: ['https://google.com/'],
      url: base64Image,
      // filenames: [`${text}.png`],
      // type: 'image/png',
      // message: text,
      // title: text,
      // foo: 'bar'
    } as any).catch(e => {
      alert('error!!')
      alert(e)
    })
    */
  }

  @on.click.at('.download-btn')
  download() {
    const base64Image = this.canvas!.toDataURL()
    const a = document.createElement('a')
    a.setAttribute('download', 'tententen-share.png')
    a.href= base64Image
    a.click()
  }
}
