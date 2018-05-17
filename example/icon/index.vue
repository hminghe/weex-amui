
<template>
  <div>
    <am-nav-bar title="am-icon"></am-nav-bar>
    <scroller class="scroller">
      <am-flex wrap="wrap">
        <am-flex
          class="icon-item"
          v-for="(val, key) in Icons"
          :key="key"
          direction="column"
          align="center"
        >
          <am-icon
            :type="key"
            color=""
            ></am-icon>
          <text class="icon-name">{{key}}</text>
        </am-flex>
        <am-flex
          class="icon-item"
          direction="column"
          align="center"
        >
          <am-icon font-family="myIcon" :type="'\ue813'"></am-icon>
          <text class="icon-name">自定义1</text>
        </am-flex>
        <am-flex
          class="icon-item"
          direction="column"
          align="center"
        >
          <am-icon font-family="myIcon" :type="'\ue814'"></am-icon>
          <text class="icon-name">自定义2</text>
        </am-flex>
        <am-flex
          class="icon-item"
          direction="column"
          align="center"
        >
          <am-icon font-family="myIcon" :type="'\ue815'"></am-icon>
          <text class="icon-name">自定义3</text>
        </am-flex>
      </am-flex>
    </scroller>
  </div>
</template>

<style lang="less" scoped>
  .icon-item {
    width: 750px / 3;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .icon-name {
    font-size: 30px;
    margin-top: 20px;
  }
</style>

<script>
import { AmNavBar, AmIcon, AmFlex } from '../../index'
import Icons from '../../packages/am-icon/icon.js'

const dom = weex.requireModule('dom')

export default {
  components: { AmNavBar, AmIcon, AmFlex },
  data () {
    return {
      Icons
    }
  },
  beforeCreate () {
    // 添加自己的图标文件
    dom.addRule('fontFace', {
      'fontFamily': 'myIcon', // 与 <am-icon/> 组件的 fontFamily 属性对应
      'src': "url('https://at.alicdn.com/t/font_666154_scqtwgh1e27kqpvi.ttf')"
    })
  },
  methods: {}
}
</script>
