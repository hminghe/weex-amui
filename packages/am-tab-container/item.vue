<!--<template>
  <div
    class="am-tab-container-item"
    :style="style"
  >
    <slot></slot>
  </div>
</template>
-->
<script>
import Utils from '../utils'
export default {
  name: 'am-tab-container-item',
  props: {
    lazy: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      let width = `${this.$parent.width || 750}px`
      if (Utils.isWeb()) {
        width = this._px2rem(width, weex.config.env.rootValue)
      }
      let style = this.$slots.default[0].data.style || {}
      style.width = width
      style.overflow = 'hidden'
      return style
    }
  },
  render (h) {
    if (!this.$slots.default[0].data) {
      this.$slots.default[0].data = {}
    }
    this.$slots.default[0].data.style = this.style
    return this.$slots.default[0]
  }
}
</script>
