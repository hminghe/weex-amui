<template>
  <div>
    <am-nav-bar
      title="test"
    ></am-nav-bar>
    <am-flex :style="{flex: 1}" direction="column" justify="center" align="center">
      <am-button class="button" @click="showPopup('top')">上</am-button>
      <am-button class="button" @click="showPopup('bottom', {}, false)">下(auto-close=false)</am-button>
      <am-button class="button" @click="showPopup('left')">左</am-button>
      <am-button class="button" @click="showPopup('right')">右</am-button>
      <am-button class="button" @click="showPopup('top', {top: 90})">上(offset.top=90)</am-button>
      <am-button class="button" @click="showPopup('right', {top: 90})">右(offset.top=90)</am-button>
      <am-popup
        :show.sync="show"
        :position="position"
        :offset="offset"
        :auto-close="autoClose"
        width="500"
        height="400"
      >
        <am-wing-blank>
          <text :style="{fontSize: '40px'}">popup</text>
          <am-white-space></am-white-space>
          <am-button
            type="warning"
            @click="show=false"
          >点我关闭</am-button>
        </am-wing-blank>
      </am-popup>
    </am-flex>
  </div>
</template>

<style scoped>
.button {
  width: 600px;
  margin-top: 30px;
}
</style>

<script>

import { AmNavBar, AmPopup, AmButton, AmFlex, AmWingBlank } from '../../index'

export default {
  components: { AmNavBar, AmPopup, AmButton, AmFlex, AmWingBlank },
  data () {
    return {
      show: false,
      position: 'bottom',
      offset: {},
      autoClose: true
    }
  },
  methods: {
    showPopup (position, offset = {}, autoClose = true) {
      this.position = position
      this.offset = offset
      this.autoClose = autoClose
      this.show = true
    }
  }
}
</script>
