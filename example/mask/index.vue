<template>
  <div>
    <am-nav-bar
      title="mask"
    ></am-nav-bar>
    <am-flex :style="{flex: 1}" direction="column" justify="center" align="center">
      <am-button class="button" @click="show1">有动画</am-button>
      <am-button class="button" @click="show2">无动画</am-button>
      <am-button class="button" @click="show3">3秒后自动关闭</am-button>
      <am-mask
        :animation="animation"
        :show.sync="show"
      ></am-mask>
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

import { AmNavBar, AmMask, AmButton, AmFlex } from '../../index'

export default {
  components: { AmNavBar, AmMask, AmButton, AmFlex },
  data () {
    return {
      show: false,
      animation: false
    }
  },
  methods: {
    show1 () {
      this.animation = true
      this.show = true
    },
    show2 () {
      this.animation = false
      this.show = true
    },
    show3 () {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
}
</script>
