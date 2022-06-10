import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'PokeCard',

  setup () {
    return () => h(QBadge, {
      class: 'PokeCard',
      label: 'PokeCard'
    })
  }
}
