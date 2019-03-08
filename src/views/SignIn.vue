<template>
  <div class="signin">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="signin">Sign in</button>
    <p>You don't have an account? You can <router-link to="/signup">create one</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'signin',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      signin: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          function(user) {
            this.$router.replace('dashboard');
          },
          function(err) {
            alert('Something went wrong: ' + err.message);
          }
        );
      }
    }
  }
</script>

<style scoped>
</style>
