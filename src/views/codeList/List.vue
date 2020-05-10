<!-- @format -->

<template>
  <div class="view list-view">
    <ul>
      <li>
        <debounce></debounce>
      </li>
      <li>
        <throttle></throttle>
      </li>
      <li>
        <recursion></recursion>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { debounce, throttle, recursion } from '@/components'

  import { Component } from 'vue-property-decorator'
  @Component({
    name: 'list',
    components: {
      debounce,
      throttle,
      recursion
    }
  })
  class ListView extends Vue {
    constructor() {
      super()
    }
  }
  export default ListView
</script>

<style scoped></style>
