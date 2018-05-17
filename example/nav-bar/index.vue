
<template>
  <div class="demo">
    <am-nav-bar title="am-nav-bar"></am-nav-bar>
    <scroller>
      <am-white-space></am-white-space>
      <am-nav-bar
        title="标题"
        :right-btn="['search', 'ellipsis']"
        @click="handleClick"
      ></am-nav-bar>
      <am-white-space></am-white-space>
      <am-nav-bar
        mode="light"
        title="标题"
        :left-btn="[{is: 'text', text: '返回', key: 'back'}]"
        :right-btn="[{is: 'text', text: '编辑', key: 'edit'}]"
        @click="handleClick"
      >
      </am-nav-bar>
    </scroller>
  </div>
</template>

<style lang="less" scoped>
  .demo {
    background-color: #f5f5f9;
  }
</style>

<script>
import { AmNavBar, AmWhiteSpace } from '../../index'
const modal = weex.requireModule('modal')

export default {
  components: { AmNavBar, AmWhiteSpace },
  methods: {
    handleClick (value) {
      modal.toast({
        message: value
      })
    }
  }
}
</script>
