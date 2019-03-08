<template>
  <div class="signup">
    <h3>Join Buildarium</h3>
    <p>Create an account</p>
    <br />
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <br />
    <br />
    <button @click="signUp">Sign Up</button>
    <br />
    <br />
    <p>Already have an account? <br> <router-link to="/signin">Sign in</router-link>.</p>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import router from '../router';

  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function(user) {
            router.replace('dashboard');
          },
          function(err) {
            alert('Something went wrong: ' + err.message);
          }
        )
      }
    }
  }
</script>

<style lang="scss"scoped>
.signup {
  position: relative;
  border: 2px solid white;
  background-color: black;
  width: 50%;
  border-radius: 10px;
  margin: auto;
  text-align: center;
  padding: 10px;
  margin-top: 40vh;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%)
}
</style>