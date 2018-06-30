<template>
  <div
    class="am-tab-container-item"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'am-native-tab-container-item',
  props: {
    lazy: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      let width = `${this.$parent.width || 750}px`
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: width
      }
    }
  }
}
</script>
