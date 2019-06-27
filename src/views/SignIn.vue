<template>
  <div class="signin">
    <h3>Thank God you're back</h3>
    <p>The universe needs your help...</p>
    <br />
    <input type="text" v-model="username" placeholder="Username"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <br />
    <br />
    <button @click="signin">Sign in</button>
    <br />
    <br />
    <p>Don't have an account? <br> <router-link to="/signup">Create one</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import router from '../router';

  export default {
    name: 'signin',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      signin: function() {
        if(this.password.length > 0) {
          this.$http.post('http://test.buildarium.com:5205/auth/signin', {
            username: this.username,
            password: this.password
          })
          .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('awt', response.data.token);
            localStorage.setItem('awtexpiration', response.data.expiration);
            
            if (localStorage.getItem('awt') != null) {
              router.replace('dashboard');
            }
          })
          .catch(function (error) {
            console.error(error);
          })
        }
        // firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        //   function(user) {
        //     console.log(router);
        //     router.replace('dashboard');
        //   },
        //   function(err) {
        //     alert('Something went wrong: ' + err.message);
        //   }
        // );
      }
    }
  }
</script>

<style lang="scss" scoped>
  .signin {
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
