<template>
  <div>
    <h1>{{ message }}</h1>
    <h2> Please goto Home page </h2>
    <router-link to="/">Home</router-link>
  </div>
</template>
        
<script>
export default {
  name: "PageNotFound",
  data() {
    return { message: "404! Page Not Found" };
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>