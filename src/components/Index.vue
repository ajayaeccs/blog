<template>
  <div>
    <component v-bind:is="cmp"> </component>
    <br/><br/>
    <b-button variant="success" v-on:click="updateCmp('signin')">SignIn</b-button>
    &nbsp;&nbsp;
    <b-button variant="success" v-on:click="updateCmp('signup')">SignUp</b-button>
  </div>
</template>
        
<script>
import Signin from './Signin'
import Signup from './Signup'
export default {
  name: "Hello",
  components: {"signin":Signin, "signup":Signup},
  data() {
    return {cmp:"signin" };
  },
  methods:{
      updateCmp(cmp){
          this.cmp = cmp; 
      }
  }
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>