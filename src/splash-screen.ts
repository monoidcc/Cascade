import { component, innerHTML, is, wired, pub } from 'capsid'
import { css } from 'emotion'
import { defer } from './util/async'

@component('splash-screen')
@innerHTML(`
  <span class="logo in">monoid</span>
`)
@is(css`
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
    el.innerHTML = `<span class="logo in">monoid</span>`
    await defer(50)
    this.logo!.classList.remove('in')
    await defer(1000)
    this.logo!.classList.add('out')
    await defer(500)
    el.innerHTML = `<span class="logo in">Tententen</span>`
    await defer(50)
    this.logo!.classList.remove('in')
    await defer(1000)
    this.logo!.classList.add('out')
    el.classList.add('hidden')
    this.startMain()
  }

  @pub('start-main')
  startMain() {}
}
