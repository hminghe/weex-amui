<template>
  <div>
    <am-nav-bar title="am-white-space"></am-nav-bar>
    <scroller class="scroller">
      <category title="类型样式"></category>
      <am-white-space size="xs"></am-white-space>
      <placeholder></placeholder>

      <am-white-space size="sm"></am-white-space>
      <placeholder></placeholder>

      <am-white-space size="md"></am-white-space>
      <placeholder></placeholder>

      <am-white-space size="lg"></am-white-space>
      <placeholder></placeholder>

      <am-white-space size="xl"></am-white-space>
      <placeholder></placeholder>
    </scroller>
  </div>
</template>

<style scoped>

</style>

<script>
import { AmWhiteSpace, AmNavBar } from '../../index'
import Placeholder from '../_mods/placeholder.vue'

export default {
  components: { Placeholder, AmWhiteSpace, AmNavBar }

}
</script>
