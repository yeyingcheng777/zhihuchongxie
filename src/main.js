import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

Vue.config.productionTip = false


// 自定义过滤器
Vue.filter("suolv",function (value) {
  return value.slice(0,100) + "..."
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
