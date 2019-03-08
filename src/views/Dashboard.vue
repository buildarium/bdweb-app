<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  export default {
    name: 'dashboard',
    components: {
      HelloWorld,
    },
    methods: {
      signOut: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('signin');
        });
      }
    }
  }
  // @Component({
  //   name: 'dashboard',
  //   components: {
  //     HelloWorld,
  //   },
  //   methods: {
  //     signOut: function() {
  //       firebase.auth().signOut().then(() => {
  //         this.$router.replace('signin');
  //       });
  //     }
  //   }
  // })
  // export default class Dashboard extends Vue {}
</script>
