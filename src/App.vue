<!-- @format -->

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/codeList">demo</router-link>
    </div>
    <div id="demo-area">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/styles/style.scss';

  #nav {
    padding: 30px;
    border-bottom: 1px solid #ccc;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  #demo-area {
    padding: 30px;
  }

  .view {
  }

  .comp {
  }
</style>
