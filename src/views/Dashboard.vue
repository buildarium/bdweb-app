<template>
  <div class="dashboard">
    <img alt="Vue logo" src="../assets/logo.svg" id="logo">
    <h1>Buildarium</h1>
    <div 
    <div class="panel-keeper">
      <div class="menu-bar">
        <a href='https://depot.buildarium.com/'><button>Depot</button></a>
        <a href='https://twitter.com/buildarium'><button>Mission Control</button></a>
        <button @click="signOut">Sign out</button>
      </div>
      <p>User Info</p>
      <KitList username="bucktower" />
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  import KitList from '@/components/KitList.vue';

  export default {
    name: 'dashboard',
    components: {
      HelloWorld,
      KitList
    },
    methods: {
      signOut: function() {
        localStorage.removeItem('user');
        localStorage.removeItem('jwt');
        this.$router.replace('signin');
        // firebase.auth().signOut().then(() => {
        //   this.$router.replace('signin');
        // });
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

<style lang="scss" scoped>
  .dashboard {
    margin-top: 20px;
    // Panel management
    .panel-keeper {
      display: grid;
      grid-template-columns: 25% auto;
      grid-template-rows: auto auto auto 30px;
      padding-left: 20px;
      padding-right: 20px;
      .menu-bar {
        margin-top: 20px;
        margin-bottom: 40px;
        grid-column: 1 / 3;
        display: flex;
        justify-content: space-around;
        
      }
    }

    // Logo
    #logo {
      width: 80px;
    }
    #logo:hover {
      animation-name: ckw;
      animation-duration: 5s;
    }

    @keyframes ckw {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
    }
  }
</style>
