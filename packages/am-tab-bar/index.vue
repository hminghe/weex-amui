<template>
  <div class="am-tab-bar" :style="style">
    <slot></slot>
  </div>
</template>

<script>
// import Utils from '../utils'

export default {
  name: 'am-tab-bar',
  props: {
    barTintColor: {
      type: String,
      default: 'white'
    },
    tintColor: {
      type: String,
      default: '#108ee9'
    },
    unselectedTintColor: {
      type: String,
      default: '#888888'
    },
    iconSize: {
      type: [Number, String],
      default: null
    },
    iconFontFamily: {
      type: String,
      default: null
    },
    imageSize: {
      type: [Number, Array],
      default: null // [width, height]
    }
  },
  computed: {
    style () {
      const style = {}
      if (this.barTintColor) {
        style.backgroundColor = this.barTintColor
      }
      return style
    }
  }
}
</script>

<style  scoped lang="less">
@import "~../../theme/am-tab-bar/index.less";
</style>
