<template>
  <div>
    <am-nav-bar title="am-switch"></am-nav-bar>
    <div style="flex: 1;">
      <div style="flex: 1;justify-content: center;align-items: center;">
        <am-switch v-model="checked"></am-switch>
        <div style="height: 100px;"></div>
        <am-switch v-model="checked" disabled></am-switch>
        <div style="height: 100px;"></div>
        <am-switch v-model="checked" :color="color"></am-switch>
        <div style="height: 100px;"></div>
        <div style="align-self: stretch">
          <am-list>
            <am-list-item
              arrow=""
              :tap-active="false"
              title="开关"
            ><am-switch slot="extra" v-model="switchChecked"></am-switch></am-list-item>
            <am-list-item
              arrow=""
              :tap-active="false"
              title="开关2"
            ><am-switch color="red" slot="extra" v-model="switchChecked"></am-switch></am-list-item>
            <am-list-item
              arrow=""
              :tap-active="false"
              title="开关2"
            ><switch slot="extra"></switch></am-list-item>
          </am-list>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import { AmNavBar, AmSwitch, AmList, AmListItem } from '../../index'

export default {
  components: { AmNavBar, AmSwitch, AmList, AmListItem },
  data () {
    return {
      checked: false,
      color: 'red',
      switchChecked: true
    }
  }
}
</script>
