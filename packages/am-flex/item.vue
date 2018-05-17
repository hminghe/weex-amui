<template>
  <div class="am-flex-item" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'am-flex-item',
  props: {
    flex: {
      type: Number,
      default: 1
    }
  },
  computed: {
    isFirstChild () {
      return this.$parent && this.$parent.$slots.default[0] === this.$vnode
    },
    style () {
      let marginLeft = !this.isFirstChild && this.$parent.gutter ? this.$parent.gutter : 0
      return {
        flex: this.flex,
        marginLeft: `${marginLeft}px`
      }
    }
  },
  created () {
    // console.log(this.gutter, this.$parent)
  }
}
</script>

<style scoped lang="less" >
</style>
