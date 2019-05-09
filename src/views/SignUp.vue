<template>
  <div class="signup">
    <h3>Join Buildarium</h3>
    <p>Create an account</p>
    <br />
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <input type="password" v-model="passwordCheck" placeholder="Retype password"><br>
    <br>
    <input type="text" v-model="firstName" placeholder="First name"><br>
    <input type="text" v-model="lastName" placeholder="Last name"><br>
    <br>
    <input type="text" v-model="username" placeholder="Username"><br>
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
        password: '',
        passwordCheck: '',
        firstName: '',
        lastName: '',
        username: ''
      }
    },
    methods: {
      signUp: function() {
        if (this.password === this.passwordCheck && this.password.length > 0) {
          this.$http.get('http://localhost:3000/signup', {
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username
          })
          .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('jwt', response.data.token);

            if (localStorage.getItem('jwt') != null) {
              router.replace('dashboard');
            }
          })
          .catch(error => {
            console.error(error);
          });
        } else {
          this.password = '';
          this.passwordCheck = '';
          alert('Passwords do not match');
        }
        // firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        //   function(user) {
        //     router.replace('dashboard');
        //   },
        //   function(err) {
        //     alert('Something went wrong: ' + err.message);
        //   }
        // )
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
  a:hover {
    color: black;
    background-color: white;
  }
</style>