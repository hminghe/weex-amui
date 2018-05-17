<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/07/31. -->

<template>
  <div>
    <am-nav-bar title="am-wing-blank"></am-nav-bar>
    <scroller class="scroller">
      <am-wing-blank size="sm">
        <placeholder></placeholder>
      </am-wing-blank>
      <am-white-space></am-white-space>
      <am-wing-blank size="md">
        <placeholder></placeholder>
      </am-wing-blank>
      <am-white-space></am-white-space>
      <am-wing-blank size="lg">
        <placeholder></placeholder>
      </am-wing-blank>
    </scroller>
  </div>
</template>

<style scoped>

</style>

<script>
import { AmWingBlank, AmWhiteSpace, AmNavBar } from '../../index'
import Placeholder from '../_mods/placeholder.vue'

export default {
  components: { AmWingBlank, AmWhiteSpace, AmNavBar, Placeholder }

}
</script>
