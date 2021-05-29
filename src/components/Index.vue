<template>
  <div>
    <h1>Hello {{greeting}}</h1>
  </div>
</template>
        
<script>


export default {
  name: "Hello",
  components: {
  },
  data(){
      return{greeting:"Ajay Srivastava"}
  },
};
</script>

<style scoped>
div{
    text-align: center;
}
</style>