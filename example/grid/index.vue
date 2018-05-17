
<template>
  <div>
    <am-nav-bar title="am-grid"></am-nav-bar>
    <scroller>
      <div>
        <am-white-space size="lg"></am-white-space>
        <am-wing-blank>
          <am-grid @click="handleClick" :data="list"></am-grid>
        </am-wing-blank>

        <am-white-space size="lg"></am-white-space>
        <am-grid @click="handleClick"  :data="list" :column-num="3"></am-grid>

        <am-white-space size="lg"></am-white-space>
        <am-wing-blank>
          <text style="font-size: 32px">无边框</text>
        </am-wing-blank>
        <am-grid
          @click="handleClick"
          :data="list"
          :hasLine="false"
          :column-num="3"></am-grid>

        <am-white-space size="lg"></am-white-space>
      </div>
    </scroller>
  </div>
</template>

<script>
import { AmGrid, AmWhiteSpace, AmWingBlank, AmNavBar } from '../../index'
import Placeholder from '../_mods/placeholder.vue'
const modal = weex.requireModule('modal')

export default {
  components: { Placeholder, AmGrid, AmWhiteSpace, AmWingBlank, AmNavBar },
  data () {
    return {
      list: Array.from(new Array(9)).map((v, k) => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name ${k}`
      }))
    }
  },
  methods: {
    handleClick (item, index) {
      modal.toast({
        message: index
      })
    }
  }
}
</script>
