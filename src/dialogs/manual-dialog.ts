import { component, innerHTML, on, sub, is } from 'capsid'
import { css } from 'emotion'
import * as Event from '../const/event'
import sample0Png from '../img/doc/sample0.png'
import sample1Png from '../img/doc/sample1.png'
import sample2Png from '../img/doc/sample2.png'
import sample3Png from '../img/doc/sample3.png'
import textboxPng from '../img/doc/textbox.png'
import editDialogPng from '../img/doc/edit-dialog.png'
import monoSvg from '../img/mono.svg'

@component('manual-dialog__provider')
@sub(Event.OPEN_MANUAL_DIALOG)
@innerHTML(/* html */`
  <div class="manual-dialog">
    <h2>Tententen User's Manual</h2>
    <p>Tententen is a generative art app. You can create images like the below very easily.</p>
    <p class="manual-dialog__sample-images">
      <img class="half-image" src="${sample0Png}" />
      <img class="half-image" src="${sample1Png}" />
    </p>
    <hr />
    <p>You can input in the text box at the top to modify the text in the center of the Canvas. You can change the size of the text with the up and down arrows.</p>
    <p class="manual-dialog__sample-images">
      <img class="full-image" src="${textboxPng}" />
    </p>
    <hr />
    <p>Tap in the Canvas and 4 boxes apear from the 4 sides. They has some rules and some randomness. Tap in the canvas in various ways and guess what the rules are!</p>
    <p class="manual-dialog__sample-images">
      <img class="half-image" src="${sample2Png}" />
      <img class="half-image" src="${sample3Png}" />
    </p>
    <p>Hint: The higher position you tap, the more opaque boxes appear. The lower position you tap, the more transparent boxes appear.</p>
    <hr/>
    <p>You can save the created image by pressing Save button. You can also download them to the Album or share them via other Apps.</p>
    <p class="manual-dialog__sample-images">
      <img class="half-image" src="${editDialogPng}" />
    </p>
    <p class="center">Be creative and have fun!</p>
    <p class="center"><img src="${monoSvg}" width="40"></p>
  </div>
`)
@is(css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.45);

  .manual-dialog {
    height: calc(100vh - 45px);
    width: calc(100vw - 30px);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    overflow: scroll;
    padding: 15px;

    background-color: white;
    transform: translateY(100vh);
    transition-duration: 500ms;

    color: #555;

    p {
      line-height: 1.6;
    }

    .center {
      text-align: center;
    }

    hr {
      border-style: solid;
      border-bottom-width: 1px;
      border-top-width: 0;
      border-color: #ddd;
      margin: 30px 0;
    }
  }

  .manual-dialog__sample-images {
    display: flex;
    justify-content: space-around;

    .half-image {
      width: 45%;
    }

    .full-image {
      width: 90%;
    }
  }

  &.show .manual-dialog {
    transform: translateY(0);
  }
`)
export class ManualDialogProvider {
  el?: HTMLElement

  @on(Event.OPEN_MANUAL_DIALOG)
  onOpen() {
    this.el?.classList.add('show')
  }

  @on.click
  onClick() {
    this.el?.classList.remove('show')
  }
}
