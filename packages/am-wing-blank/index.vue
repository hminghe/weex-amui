<template>
  <div :class="[`am-wing-blank-${size}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'am-wing-blank',
  props: {
    size: {
      type: String,
      default: 'lg'
    }
  }
}
</script>

<style scoped lang="less">
@import "~../../theme/am-wing-blank/index.less";
</style>
