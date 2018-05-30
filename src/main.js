import Vue from 'vue'
import VueLazyComponent from '@xunlei/vue-lazy-component'  // 懒加载

import App from './App.vue'
import router from './router'
import store from './store'

import 'font-awesome/css/font-awesome.min.css'  // 图标库 http://www.fontawesome.com.cn/faicons/

Vue.config.productionTip = false

Vue.use(VueLazyComponent)

window.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')