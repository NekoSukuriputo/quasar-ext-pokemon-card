import Component from './components/Component'
import InputCol6 from './components/InputCol6.vue'
import Directive from './directives/Directive'
import InputCol6Directive from './directives/InputCol6Directive'

const version = __UI_VERSION__

function install(app) {
  app.component('InputCol6', InputCol6)
  app.component(Component.name, Component)
  app.directive(Directive.name, Directive)
  app.directive(InputCol6Directive.name, InputCol6Directive)
}

export {
  version,
  InputCol6,
  Component,
  Directive,
  InputCol6Directive,
  install
}
