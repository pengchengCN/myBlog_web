import Vue from 'vue'
import VueLazyComponent from '@xunlei/vue-lazy-component'  // 懒加载
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueLazyComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
