<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Home msg="Ajay welcomes you to vue js"/> -->
    <Hello />
  </div>
</template>

<script>
import Home from './components/Home.vue'
// import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    Home//,Hello
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
