<template>
  <div class="dashboard">
    <img alt="Vue logo" src="../assets/logo.svg" id="logo">
    <h1>Buildarium</h1>
    <div class="panel-keeper">
      <div class="menu-bar">
        <a href='https://depot.buildarium.com/'><button>Depot</button></a>
        <a href='https://twitter.com/buildarium'><button>Mission Control</button></a>
        <button @click="signOut">Sign out</button>
      </div>
      <UserInfo
        username="bucktower"
        firstname="Buck"
        lastname="Tower"
        email="buck@bucktower.net"
        />
      <div class="kit-box">
        <h3>Kits <font-awesome-icon icon="box-open" /></h3>
        <button>Claim a kit</button>
        <div class="kit-cards" v-if="kitsLoaded">
          <KitCard v-for="kit in ownedKits"
            :type=kit.type
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import firebase from 'firebase';
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  import KitCard from '@/components/KitCard.vue';
  import UserInfo from '@/components/UserInfo.vue';

  export default {
    name: 'dashboard',
    components: {
      HelloWorld,
      KitCard,
      UserInfo
    },
    data() {
      return {
        ownedKits: [],
        kitsLoaded: false
      }
    },
    methods: {
      signOut: function() {
        localStorage.removeItem('user');
        localStorage.removeItem('awt');
        this.$router.replace('signin');
      },
      loadOwnedKits: function() {
        console.log(this.kitsLoaded);
        this.$http.get('http://test.buildarium.com:5202/kit/me', {
          'headers': {
            'Authorization': localStorage.awt
          }
        })
        .then((response) => {
          this.ownedKits = response.data['kits'];
          localStorage.setItem('ownedKits', JSON.stringify(response.data['kits']));
          this.kitsLoaded = true;
          console.log(this.kitsLoaded);
        })
      }
    },
    created() {
      this.kitsLoaded = false;
      this.loadOwnedKits()
    }
  }
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
    
    .kit-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: space-between;
    }
  }
</style>
