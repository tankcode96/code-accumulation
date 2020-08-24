<!-- @format -->

<template>
  <div class="comp throttle-comp"></div>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator'

  @Component({
    name: 'throttle'
  })
  class ThrottleComp extends Vue {
    throttlePrevious = 0 // 节流方法-记录下来的时间戳
    throttleTimer = null // 节流方法-定时器对象

    /**
     * 函数节流
     * @param func 函数
     * @param wait 延迟执行毫秒数
     * @param type 1 表时间戳版（立即执行） 2 表定时器版（延迟执行）
     */
    throttle(func, wait, type = 1) {
      let previous = 0
      let timeout
      return function() {
        let context = this
        let args = arguments
        if (type === 1) {
          let now = Date.now()

          if (now - previous > wait) {
            func.apply(context, args)
            previous = now
          }
        } else if (type === 2) {
          if (!timeout) {
            timeout = setTimeout(() => {
              timeout = null
              func.apply(context, args)
            }, wait)
          }
        }
      }
    }
  }
  export default ThrottleComp
</script>

<style lang="scss" scoped></style>
