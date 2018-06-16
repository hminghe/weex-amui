<template>
  <div>
    <am-nav-bar title="am-image"></am-nav-bar>
    <scroller style="flex: 1">
      <text class="text">自动高</text>
      <am-image :image-style="{width: '200px'}" auto-height src="https://gw.alicdn.com/tfs/TB1KF_ybRTH8KJjy0FiXXcRsXXa-890-1186.png"></am-image>
      <text class="text">自动宽</text>
      <am-image @load.native="handleLoad" :image-style="{height: '500px'}" auto-width src="https://gw.alicdn.com/tfs/TB1KF_ybRTH8KJjy0FiXXcRsXXa-890-1186.png"></am-image>
    </scroller>
  </div>
</template>

<style scoped>
.text {
  font-size: 30px;
  padding-top: 10px;
  padding-left: 15px;
}
</style>

<script>
import { AmNavBar, AmImage } from '../../index'

export default {
  components: { AmNavBar, AmImage },
  methods: {
    // load 事件和weex <image/> 组件一致
    handleLoad ($event) {
      console.log($event)
    }
  }
}
</script>
