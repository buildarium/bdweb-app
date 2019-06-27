<template>
  <div class="user-box">
    <h3>User <font-awesome-icon icon="user" /></h3>
    <p>Username: {{username}}</p>
    <p>Name: {{firstname}} {{lastname}}</p>
    <p>Email: {{email}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserInfo extends Vue {
  @Prop() private username!: string;
  @Prop() private firstname!: string;
  @Prop() private lastname!: string;
  @Prop() private email!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  p {
    font-size: 12px;
  }
</style>