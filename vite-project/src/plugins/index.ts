/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import pinia from '../stores'
import router from '../router'
import vuetify from './vuetify'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
  loadFonts()
  app.use(router).use(pinia).use(vuetify)
}
