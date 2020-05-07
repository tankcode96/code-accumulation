<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/codeList">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/styles/style.scss';

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.view {
}

.comp {
}
</style>
