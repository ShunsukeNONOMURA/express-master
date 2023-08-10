# vite master
viteの開発環境を構築する

## 起動
```
git clone https://github.com/ShunsukeNONOMURA/vite-master.git
```

## 主要ライブラリ
- yarn create vite で設定
    - typescript
    - jsx
    - vue router
    - pinia
    - vitest
    - cypress
    - eslint
    - prettier


## 導入メモ
### create vite
v1.22.19で載せられるものをひとまず前載せする。
```
yarn create vite

yarn create v1.22.19

Vue.js - The Progressive JavaScript Framework

✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › Cypress
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

$ cd vite-project
$ yarn install
```

### pug導入
yarnで導入
```
yarn add -D vite-plugin-pug eslint@8 eslint-plugin-vue eslint-plugin-vue-pug
```

`vite.config.js`に設定追記
```
// vite.config.(js|ts)
import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
})
```

`.eslintrc.cjs`に設定追記
```
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended'
  ]
}
```

- 参考
    - [vite-plugin-pug](https://www.npmjs.com/package/vite-plugin-pug)
    - [eslint-plugin-vue-pug](https://github.com/rashfael/eslint-plugin-vue-pug)
