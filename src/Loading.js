import Loadings from './pages/Loading'

import Vue from 'vue'

const load = {
  install: () => {
    Vue.component('load', Loadings)
  }
}

export default load /* 暴露组件，在main.js中才能Vue.use使用组件 */
