<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
#app {
  font-family: 'Press Start 2P', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: transparent;
  
  h1, h2, h3, h4 {
    color: #fff829;
  }
  ::selection {
    background: white; /* WebKit/Blink Browsers */
    color: black;
  }
  ::-moz-selection {
    background: white; /* Gecko Browsers */
    color: black;
  }
  a {
    color: white;
  }
  a:hover {
    color: black;
    background-color: white;
  }
  input {
    font-family: 'Press Start 2P', cursive;
    border-radius: 0;
    border-width: 0;
    background-color: black;
    padding: 4px;
    color: white;
    margin: 5px;
  }
  button {
    background-color: black;
    font-family: 'Press Start 2P', cursive;
    border: 2px solid white;
    color: white;
    padding: 8px;
    border-radius: 5px;
  }
  button:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
}
</style>
