import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Index from './components/Index'
import Signup from './components/Signup'
import EmployeeList from './components/EmployeeList'
import Users from './components/Users'
import PageNotFound from './components/PageNotFound'

Vue.use(VueRouter)

const routes = [
  {path:'/',component:Index},
  {path:'/employee',component:EmployeeList},
  {path:'/signup',component:Signup},
  {path:'/users/:id',component:Users},
  {path:'*',component:PageNotFound}
]

const router = new VueRouter({routes})
Vue.config.productionTip = false

Vue.filter("UCase",function(val){
  return val.toUpperCase()
})

Vue.directive("size",{
  bind(el,binding){
    if(binding.value == "small"){
      el.style.fontSize = "20px"
    }else if(binding.value == "medium"){
      el.style.fontSize = "30px"
    }else if(binding.value == "big"){
      el.style.fontSize = "40px"
    }else{
      el.style.fontSize = "20px"
    }

  }
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
