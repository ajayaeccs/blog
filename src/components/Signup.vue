<template>
  <div>
    <h2>{{greeting|UCase}}</h2>
    <h3 class="error" v-if="error.length">
      Please correct the following error(s)
      <ul>
        <li v-for="e in error" v-bind:key="e.id">{{e}}</li>
      </ul>
    </h3>

    <form @submit="signupUser">
      <fieldset>
        <legend>Registration Form</legend>
        <label for="name">Name:</label><br />
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          v-model="signup.username"
        />
        <br />
        <br />
        <label for="password">Password:</label><br />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          v-model="signup.password"
        />
        <br />
        <br />
        Choose Hobbies:<br />
        <input
          type="checkbox"
          id="cricket"
          value="cricket"
          v-model="signup.hobbies"
        />
        <label for="cricket">Cricket</label>
        <br />
        <input
          type="checkbox"
          id="football"
          value="football"
          v-model="signup.hobbies"
        />
        <label for="football">Football</label>
        <br />
        <input
          type="checkbox"
          id="hockey"
          value="hockey"
          v-model="signup.hobbies"
        />
        <label for="hockey">Hockey</label>
        <br />
        <br />
        Select Gender:<br />
        <input type="radio" id="male" value="male" v-model="signup.gender" />
        <label for="male">Male</label>
        &nbsp;&nbsp;
        <input
          type="radio"
          id="female"
          value="female"
          v-model="signup.gender"
        />
        <label for="female">Female</label>
        &nbsp;&nbsp;
        <input type="radio" id="other" value="other" v-model="signup.gender" />
        <label for="other">Other</label>
        <br />
        <br />
        <button>Sign Up</button>
      </fieldset>
    </form>
  </div>
</template>
        
<script>
export default {
  name: "Signup",
  data() {
    return {
      error: [],
      greeting: "Welcome to Registration Page",
      signup: {
        username: null,
        password: null,
        hobbies: [],
        gender: null,
      },
    };
  },
  methods: {
    signupUser(e) {
      this.error = []
      if (!this.signup.username) {
        this.error.push("Username is required");
      }
      if (!this.signup.password) {
        this.error.push("Password is required");
      }
      console.warn(this.error);
      e.preventDefault();
    },
  },

}

</script>

<style scoped>
div {
  background-color: antiquewhite;
  height: 500px;
}

.error{
color:red;
}
</style>