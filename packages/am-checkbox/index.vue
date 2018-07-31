<template>
  <div :class="wrapClass" :style="style" >
    <div v-if="checked" class="am-checkbox-inner">
      <div :class="iconClass"></div>
    </div>
  </div>
</template>

<script>
import Utils from '../utils'

export default {
  name: 'am-checkbox',
  props: {
    checked: {
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
    }
  },
  data () {
    return {
      test: false
    }
  },
  // created () {
  //   setInterval(() => {
  //     this.test = !this.test
  //   }, 3000)
  // },
  computed: {
    wrapClass () {
      return Utils.makeClassList({
        'am-checkbox': true,
        'am-checkbox-checked': this.checked,
        'am-checkbox-disabled': this.disabled
      })
    },
    iconClass () {
      return Utils.makeClassList({
        // 'am-checkbox-icon': true,
        'am-checkbox-icon-checked': this.checked,
        'am-checkbox-icon-disabled': this.disabled
      })
    },
    style () {
      const style = {}
      if (this.color) {
        if (this.checked && !this.disabled) {
          style.backgroundColor = this.color
          style.borderColor = this.color
        } else {
          // android里如果不设置，切换之后class里的样式就不见了， 应该是weex的bug
          style.borderColor = '#ccc'
        }
      }
      return style
    }
  }
}
</script>

<style  scoped lang="less">
@import "~../../theme/am-checkbox/index.less";
</style>
