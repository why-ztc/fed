import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// load global style
import './styles/index.scss'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
