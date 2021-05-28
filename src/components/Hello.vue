<template>
  <div>
    <h1>Hello Component</h1>
    <Users />
    <Products />
  </div>
</template>
        
<script>

import Users from './Users.vue'
import Products from './Products.vue'
export default {
  name: "Hello",
  components: {
    Users,Products
  }
};
</script>

<style scoped>
div{
    background-color:antiquewhite;
    height: 500px;
}
</style>