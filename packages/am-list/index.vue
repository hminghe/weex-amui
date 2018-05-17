<template>
  <div class="am-list">
    <slot name="header">
      <text v-if="header" :style="headerStyle" class="am-list-header">{{header}}</text>
    </slot>
    <slot></slot>
    <slot name="footer">
      <text v-if="footer" :style="footerStyle" class="am-list-footer">{{footer}}</text>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'am-list',
  props: {
    header: {
      type: String,
      default: null
    },
    footer: {
      type: String,
      default: null
    },
    headerStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    footerStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less" src="../../theme/am-list/index.less">

</style>
