<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <h1>{{title}}</h1>
    <Home v-on:changeTitle="updateParentTitle($event)"
      msg="Ajay welcomes you to vue js"
      v-bind:message="message"
      v-bind:users="users"
      
    /> -->
    <!-- <Hello /> -->
    <!-- <Signup /> -->
    <!-- <EmployeeList /> -->
    <!-- <ActiveBoot /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
// import Hello from './components/Hello.vue'
// import Signup from './components/Signup.vue'
// import EmployeeList from './components/EmployeeList'
// import ActiveBoot from './components/ActiveBoot'

export default {
  name: 'App',
  components: {
    //Home,Hello,Signup,ActiveBoot
    // EmployeeList
  },
    data(){
           return{
                title: "Props Title",
                message:"Nandini",
                users:[
                      {id:1,name:"Ajay Srivastava",email:"ajayaeccs@gmail.com",contact:9004558830},
                      {id:2,name:"Sunil Srivastava",email:"ajayaeccs@gmail.com",contact:9450734039},
                      {id:3,name:"Mala Srivastava",email:"xxxx@gmail.com",contact:123456789},
                      {id:4,name:"Nandini Shrivastav",email:"nandinisri001@gmail.com",contact:8956132570}
                  ]
            }
      },
      methods:{
        updateParentTitle(title){
          this.title = title
        }
      }         
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
