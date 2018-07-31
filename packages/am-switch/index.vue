<template>
  <!-- weex-el weex-switch weex-switch-checked -->
  <switch
    v-if="isIOS&&!color"
    :checked="checked"
    :disabled="disabled"
    @change="handleClick"
  ></switch>
  <div v-else @click="handleClick" class="am-switch" :class="switchClass" :style="switchStyle">
    <div class="am-switch-animate" ref="animate" :class="switchAnimateClass"></div>
    <div class="am-switch-inner" :class="switchInnerClass"></div>
    <!-- <image class="am-switch-inner" ref="inner" :class="switchInnerClass" src="http://p7vn8372y.bkt.clouddn.com/switch-inner.png"/> -->
  </div>
</template>

<script>
import Utils from '../utils'
const animation = weex.requireModule('animation')

export default {
  name: 'am-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
    },
    native: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isIOS: Utils.isIOS(),
      checked: this.value
    }
  },
  computed: {
    showNative () {
      return this.native || (this.isIOS && !this.color)
    },
    switchClass () {
      return Utils.makeClassList({
        'am-switch-checked': this.checked,
        'am-switch-disabled': this.disabled
      })
    },
    switchInnerClass () {
      return Utils.makeClassList({
        'am-switch-inner-checked': this.checked
      })
    },
    switchAnimateClass () {
      return Utils.makeClassList({
        'am-switch-animate-checked': this.checked
      })
    },
    switchStyle () {
      const style = {}
      if (this.color) {
        style.backgroundColor = this.checked ? this.color : '#e5e5e5'
      }
      return style
    }
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        this.checked = !this.checked
        this.$emit('input', this.checked)
        this.$emit('change', this.checked)
      }
    }
  },
  watch: {
    value (newVal) {
      this.checked = newVal
    },
    checked (val) {
      // ios  css 的 scale 动画 有问题， 所以这里用 animation 实现
      if (this.isIOS && this.color) {
        animation.transition(this.$refs.animate, {
          styles: {
            transform: `scale(${val ? '0' : '1'})`
          },
          duration: 300, // ms
          timingFunction: 'ease',
          needLayout: false,
          delay: 0 // ms
        })
      }
      // animation.transition(this.$refs.inner, {
      //   styles: {
      //     transform: `translateX(${val ? '40' : '0'})`
      //   },
      //   duration: 300, // ms
      //   timingFunction: 'ease',
      //   needLayout: false,
      //   delay: 0 // ms
      // })
    }
  }
}
</script>

<style  scoped lang="less">
@import "~../../theme/am-switch/index.less";
</style>
