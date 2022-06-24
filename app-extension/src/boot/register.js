import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-poke-card-v1'

export default boot(({ app, store }) => {
  app.use(VuePlugin, { store })
})
