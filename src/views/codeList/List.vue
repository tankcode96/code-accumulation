<template>
  <div class="view list-view"></div>
</template>

<script>
import Vue from "vue";
import { debounce, throttle, recursion } from "@/components";

import { Component } from "vue-property-decorator";
@Component({
  name: "list",
  components: {
    debounce,
    throttle,
    recursion
  }
})
class ListView extends Vue {
  constructor() {
    super();
  }
}
export default ListView;
</script>

<style scoped></style>
