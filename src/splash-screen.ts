import { component, innerHTML, is, wired, pub } from 'capsid'
import { css } from 'emotion'
import { defer } from './util/async'
import { onLoadImage } from './util/dom'
import monoidSvg from './img/monoid-white.svg'

@component('splash-screen')
@is(css`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  &.ready {
    transition-duration: 500ms;
  }

  &.hidden {
    opacity: 0;
  }

  .logo {
    transition-duration: 500ms;
    opacity: 1;
  }
  .logo.is-monoid {
    max-width: 40%;
    filter: drop-shadow(0 0 20px white);
  }
  .logo.is-tententen {
    font-size: 60px;
    font-family: serif;
    font-weight: bold;
  }
  .logo.out {
    transform: translate(0, -10px);
    opacity: 0;
  }
  .logo.in {
    transform: translate(0, 10px);
    opacity: 0;
  }
`)
export class SplashScreen {
  el?: HTMLElement
  @wired('.logo')
  logo?: HTMLElement
  __mount__() {
    this.sequence()
  }

  async sequence() {
    const el = this.el!
    await defer(10)
    el.classList.add('ready')
    const img = await onLoadImage(monoidSvg)
    img.classList.add('logo', 'in', 'is-monoid')
    el.appendChild(img)
    await defer(50)
    this.logo!.classList.remove('in')
    await defer(1000)
    this.logo!.classList.add('out')
    await defer(500)
    el.innerHTML = `<span class="logo in is-tententen">Tententen</span>`
    await defer(50)
    this.logo!.classList.remove('in')
    await defer(1000)
    this.logo!.classList.add('out')
    el.classList.add('hidden')
    this.startMain()
    await defer(500)
    el.parentElement?.removeChild(el)
  }

  @pub('start-main')
  startMain() {}
}
