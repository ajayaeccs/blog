<template>
  <div>
    <form @submit="posts" method="post">
    <div>
      <b-form-input v-model="post.title" placeholder="Enter the title"></b-form-input>
      <div class="mt-2">Value: {{ post.title }}</div>
    </div>
    <div>
      <b-form-input v-model="post.author" placeholder="Enter the author name "></b-form-input>
      <div class="mt-2">Value: {{ post.author }}</div>
    </div>
    <b-button variant="success" type="submit">Post</b-button>
    </form>
  </div>
</template>
        
<script>
import Vue from 'vue' 
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)

export default {
  name: "ActiveBoot",
  data() {
    return {
      post:{
          title: "",
          author: ""
      }
    }
  },
  methods:{
      posts(e){
          e.preventDefault()

          Vue.axios.post('http://localhost:3000/posts',this.post)
                    .then(resp=>{console.log("result", resp)})
          //console.log(this.post)
      }

  }
}

</script>

<style scoped>

</style>