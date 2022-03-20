import Vue from 'vue'
import App from './App.vue'
import { router } from "./router"
import { store } from "./store/store"
import VueResource from "vue-resource"
import VueRouter from 'vue-router'

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
