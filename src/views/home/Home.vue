<!-- @format -->

<template>
  <div class="view home-view"></div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component({
    name: 'home'
  })
  class HomeView extends Vue {
    constructor() {
      super() // class B 继承 class A，那么super就类似于call的继承：在这里super相当于把 A 的constructor给执行了，并且让方法中的this是B的实例，super当中传递的实参都是在给 A 的constructor传递。
    }
  }

  export default HomeView
</script>

<style lang="scss" scoped></style>
