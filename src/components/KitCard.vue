<template>
  <div class="grey-box">
    <div class="top-label">
      <span class="kit-title">{{type.charAt(0).toUpperCase() + type.slice(1) }}</span>
      <font-awesome-icon icon="unlock" />
    </div>
    <img
      class="depot-preview"
      src="http://via.placeholder.com/350x250/ffffff"
      />
    <!--<p class="description">-->
    <!--  The standard starter kit. Hello world!-->
    <!--</p>-->
    <!--<p>-->
    <!--  Requirements:-->
    <!--</p>-->
    <!--<ul>-->
    <!--  <li>Some other kit</li>-->
    <!--  <li>Yet another kit</li>-->
    <!--</ul>-->
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class KitCard extends Vue {
    @Prop() private type!: string;
  }
</script>

<style scoped lang="scss">
  .grey-box {
    background-color: rgba(255,255,255,0.75);
    width: 33%;
    color: #000;
    padding: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    .top-label {
      padding-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }
    .depot-preview {
      /*width: 100%;*/
      max-width: 280;
    }
    p, ul {
      font-size: 12px;
      line-height: 1.6;
      text-align: left;
    }
  }
</style>