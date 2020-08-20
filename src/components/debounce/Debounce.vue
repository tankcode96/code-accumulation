<!-- @format -->

<template>
  <div class="comp debounce-comp">
    <div class="operate-area">
      <div class="row">
        <span class="row-span">没有防抖的input</span>
        <input @input="handleWithoutDebounceInput" @focus="handleFocus('without')" />
      </div>
      <div class="row">
        <span class="row-span">防抖的input</span>
        <input @input="handleDebounceInput" @focus="handleFocus('with')" />
      </div>
    </div>
    <div class="view-area" v-if="consoleList.length > 0">
      <p class="console-li" v-for="(li, index) in consoleList" :key="index">{{ li }}</p>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";

@Component({
  name: "debounce"
})
class DebounceComp extends Vue {
  @Watch("currentFocus")
  currentFocusWatcher(newVal, oldVal) {
    if (newVal !== oldVal) {
      this.consoleList = [];
    }
  }

  currentFocus = ""; // 当前聚焦的输入框 without:非防抖 with:防抖
  consoleList = []; // 输出到页面的内容列表
  debounceTimer = null; // 防抖方法-定时器对象

  /**
   * 防抖方法
   */
  debounce() {
    return new Promise((resolve, reject) => {
      const a = 1;
      if (a === 1) {
        resolve();
      } else {
        reject();
      }
    });
  }

  /**
   * 处理页面事件：输入框聚焦
   */
  handleFocus(type) {
    try {
      this.currentFocus = type;
      this.debounce()
        .then(() => {
          console.log("resolve");
        })
        .catch(e => {
          console.log("reject", e);
        });
    } catch (e) {
      console.log("catch");
    }
  }

  /**
   * 处理页面事件：输入-非防抖
   */
  handleWithoutDebounceInput(e) {
    this.ajax(e.target.value);
  }

  /**
   * 处理页面事件：输入-防抖
   */
  handleDebounceInput(e) {
    this.ajax(e.target.value);
  }

  /**
   * 请求方法
   */
  ajax(value) {
    this.consoleList.unshift(value);
  }

  /**
   * 函数防抖
   * @param func 函数
   * @param wait 延迟执行毫秒数
   * @param immediate true 表立即执行，false 表非立即执行
   */
  debounce(func, wait, immediate) {
    let timeout;

    return function() {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(() => {
          timeout = null;
        }, wait);
        if (callNow) func.apply(context, args);
      } else {
        timeout = setTimeout(function() {
          func.apply(context, args);
        }, wait);
      }
    };
  }
}
export default DebounceComp;
</script>

<style lang="scss" scoped>
.debounce-comp {
  display: flex;

  .operate-area {
    width: 400px;
    height: 400px;

    .row {
      margin-bottom: 22px;

      .row-span {
        display: inline-block;
        width: 120px;
        padding-right: 10px;
        text-align: right;
      }
    }
  }

  .view-area {
    width: 300px;
    height: 400px;
    overflow: auto;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
}
</style>
