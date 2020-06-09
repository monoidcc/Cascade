import { component, install } from 'capsid'
import debug from 'capsid/debug'
install(debug)
import './splash-screen'
import './main-canvas'
import './app'
import './modals/list-modal'
import './modals/edit-modal'
import './modals/preview-modal'

@component('app')
export class App {}
