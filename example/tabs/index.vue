
<template>
  <div class="demo">
    <am-nav-bar title="am-tabs"></am-nav-bar>
    <div class="main">
      <am-tabs
        v-model="selected"
        @change="change"
        :tabs="['Tab1', 'Tab2', 'Tab3']"
      />
      <am-white-space></am-white-space>
      <am-tabs
        v-model="selected"
        @change="change"
        :tab-width="160"
        :tabs="['Tab1', 'Tab2', 'Tab1', 'Tab2', 'Tab1', 'Tab2', 'Tab1', 'Tab2', 'Tab1', 'Tab2', 'Tab1', 'Tab2']"
      />
      <am-tabs
        class="bottom"
        v-model="selected"
        @change="change"
        tab-bar-position="bottom"
        :tabs="['Tab1', 'Tab2', 'Tab3']"
      />
      <am-tabs
        class="left"
        v-model="selected"
        @change="change"
        tab-bar-position="left"
        :tab-width="200"
        :tabs="['Tab1', 'Tab2', 'Tab3', 'Tab3', 'Tab3', 'Tab3', 'Tab3', 'Tab3', 'Tab3', 'Tab3', 'Tab3']"
      />
      <am-tabs
        class="right"
        v-model="selected"
        @change="change"
        tab-bar-position="right"
        :tab-width="200"
        :tabs="['Tab1', 'Tab2', 'Tab3']"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .demo {
    background-color: #f5f5f9;
  }
  .main {
    flex: 1;
  }
  .bottom {
    width: 750px;
    bottom: 0;
    position: absolute;
  }
  .left {
    position: absolute;
    left: 0;
    width: 200px;
    top: 300px;
    height: 300px;
  }
  .right {
    position: absolute;
    right: 0;
    width: 200px;
    top: 300px;
    height: 300px;
  }
</style>

<script>
import { AmNavBar, AmTabs, AmWhiteSpace, AmWingBlank } from '../../index'
const modal = weex.requireModule('modal')

export default {
  components: { AmNavBar, AmTabs, AmWhiteSpace, AmWingBlank },
  data () {
    return {
      selected: 0
    }
  },
  methods: {
    change (index, value) {
      modal.toast({
        message: `index:${index},value:${value}`
      })
    }
  }
}
</script>
