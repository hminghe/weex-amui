<template>
  <div>
    <am-nav-bar title="am-checkbox"></am-nav-bar>
    <scroller class="scroller">
      <category title="类型样式"></category>
      <div style="padding: 30px">
        <div
          style="margin-bottom: 20px;flex-direction: row; "
        >
          <am-checkbox></am-checkbox>
          <text style="font-size: 30px;margin-left: 10px">default</text>
        </div>
        <div
          style="margin-bottom: 20px;flex-direction: row; "
        >
          <am-checkbox checked></am-checkbox>
          <text style="font-size: 30px;margin-left: 10px">checked</text>
        </div>
        <div
          style="margin-bottom: 20px;flex-direction: row; "
        >
          <am-checkbox checked color="red"></am-checkbox>
          <text style="font-size: 30px;margin-left: 10px">checked & color=red</text>
        </div>
        <div
          style="margin-bottom: 20px;flex-direction: row; "
        >
          <am-checkbox checked disabled></am-checkbox>
          <text style="font-size: 30px;margin-left: 10px">checked & disabled</text>
        </div>
      </div>
    </scroller>
  </div>
</template>

<style scoped>

</style>

<script>
import { AmNavBar, AmCheckbox } from '../../index'
import Placeholder from '../_mods/placeholder.vue'

export default {
  components: { Placeholder, AmNavBar, AmCheckbox }
}
</script>
