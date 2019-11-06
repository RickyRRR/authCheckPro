// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.import Vue from 'vue'
// import iview from 'iview'

import Vue from 'vue'
import App from './App.vue'
import {axiosPost,axiosGet} from './myAxios.js'
import axios from 'axios'

import router from './router'
import store from './store.js'
Vue.config.productionTip = false

Vue.prototype.$axiosPost = axiosPost
Vue.prototype.$axiosGet = axiosGet
/*Vue.prototype.$axiosTest = axiosTest*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
