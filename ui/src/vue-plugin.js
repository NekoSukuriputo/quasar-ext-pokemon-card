import Component from './components/Component'
import InputCol6 from './components/InputCol6.vue'
import AppTimeout from './components/AppTimeout.vue'
import Directive from './directives/Directive'
import InputCol6Directive from './directives/InputCol6Directive'
import storeTimeout from './store'

const version = __UI_VERSION__

function install(app,  options ={}) {
  if (!options.store) console.log('Please provide a store!!')

  app.component('InputCol6', InputCol6)
  app.component('AppTimeout', AppTimeout)
  app.component(Component.name, Component)
  app.directive(Directive.name, Directive)
  app.directive(InputCol6Directive.name, InputCol6Directive)
  options.store.registerModule('storeTimeout', storeTimeout)
}

export {
  version,
  InputCol6,
  Component,
  AppTimeout,
  Directive,
  InputCol6Directive,
  storeTimeout,
  install
}
