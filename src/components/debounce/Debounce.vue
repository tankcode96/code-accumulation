<template>
  <div class="comp debounce-comp">
    <div>
      <span>次数：{{ normalTimes }}</span>
      <input type="button" value="点击-非防抖" @click="handleNormalClick" />
    </div>
    <div>
      <span>次数：{{ debounceTimes }}</span>
      <input type="button" value="点击-防抖" @click="handleDebounceClick" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "debounce"
})
class DebounceComp extends Vue {
  normalTimes = 0; // 正常情况下的次数
  debounceTimes = 0; // 防抖情况下的次数

  /**
   * 防抖方法
   */
  debounce() {}

  /**
   * 处理页面事件：点击按钮-非防抖
   */
  handleNormalClick() {
    this.normalTimes++;
  }

  /**
   * 处理页面事件：点击按钮-非防抖
   */
  handleDebounceClick() {
    this.debounceTimes++;
  }
}
export default DebounceComp;
</script>

<style lang="scss" scoped></style>
