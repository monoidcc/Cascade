import '../src/index.ts'
import { css } from 'emotion'

const globalStyle = css`
.fixed-fill-content {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}

.fade-in-opacity {
  opacity: 0;
  pointer-events: none;

  transition-property: opacity visibility;
  transition-duration: 500ms;
  visibility: hidden;
}

.fade-in-opacity.show {
  pointer-events: auto;
  opacity: 1.0;
  visibility: visible;
}
`

document.body.classList.add(globalStyle)

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
}
