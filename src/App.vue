<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import '../src/shared/styles/main.less';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: block;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y:scroll;

}
</style>
