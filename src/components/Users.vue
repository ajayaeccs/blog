<template>
  <div>
    <h1 v-size="'small'">Users {{userId}}</h1>
  </div>
</template>
        
<script>
export default {
  name: "Users",
  data(){
    return{userId:this.$route.params.id}
  }
};
</script>

<style scoped>

</style>