import Vue from 'vue'
import Bootstrap from './bootstrap'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Bootstrap)

new Vue({
  router: Bootstrap.routers,
  store: Bootstrap.stores,
  render: h => h(App)
}).$mount('#app')
