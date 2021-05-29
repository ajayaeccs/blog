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

    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"><router-link to="/">Home</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link to="/employee">About Us</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="/signup">Register</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <!-- <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/employee">About Us</router-link></li>
        <li><router-link to="/signup">Register</router-link></li>
      </ul>
    </nav> -->
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

nav ul{
  list-style: none;
}
</style>
