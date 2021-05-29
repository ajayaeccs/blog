import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Index from './components/Index'
import Signup from './components/Signup'
import EmployeeList from './components/EmployeeList'

Vue.use(VueRouter)

const routes = [
  {path:'/',component:Index},
  {path:'/employee',component:EmployeeList},
  {path:'/signup',component:Signup},
]

const router = new VueRouter({routes})
Vue.config.productionTip = false

Vue.filter("UCase",function(val){
  return val.toUpperCase()
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
