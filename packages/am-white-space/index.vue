<template>
  <div :class="[`am-white-space-${size}`]"></div>
</template>

<script>
export default {
  name: 'am-white-space',
  props: {
    size: {
      type: String,
      default: 'md' // xs,sm,md,lg,xl
    }
  }
}
</script>

<style scoped lang="less">
@import "~../../theme/am-white-space/index.less";
</style>
