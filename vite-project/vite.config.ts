import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import pugPlugin from "vite-plugin-pug"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ 
      template: { 
        transformAssetUrls // vuetifyでのassets url変換
      }
    }),
    vueJsx(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true, // vuetifyコンポーネント自動インポート
      styles: { configFile: 'src/styles/settings.scss' },
    }),
    pugPlugin(
      { pretty: true },
      { name: "My Pug" }
    ),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
