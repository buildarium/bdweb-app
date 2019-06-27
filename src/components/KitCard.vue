<template>
  <div class="grey-box">
    <div class="top-label">
      <span class="kit-title">{{title}}</span>
      <font-awesome-icon icon="unlock" />
    </div>
    <img
      class="depot-preview"
      src="http://via.placeholder.com/350x250/ffffff"
      />
    <p class="description">
      The standard starter kit. Hello world!
    </p>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class KitCard extends Vue {
    @Prop() private title!: string;
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
    .top-label {
      padding-bottom: 10px;
    }
    .depot-preview {
      width: 100%;
    }
    .description {
      font-size: 10px;
    }
  }
</style>