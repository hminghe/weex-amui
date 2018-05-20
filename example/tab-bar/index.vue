<template>
  <div class="demo">
    <am-nav-bar title="am-tab-bar"></am-nav-bar>
    <div class="main">
      <text class="text">{{selected}}</text>

      <div class="other-demo">
        <text class="text">只显示icon</text>
        <am-tab-bar
          icon-font-family="testIcon"
        >
          <am-tab-bar-item
            v-for="item in tabBar"
            :key="item.title"
            :icon="item.icon"
            :selected="selected === item.title"
            @click="selected = item.title"
          />
        </am-tab-bar>
        <am-white-space size="lg"></am-white-space>
        <text class="text">图标用图片</text>
        <am-tab-bar
          :image-size="60"
        >
          <am-tab-bar-item
            v-for="item in tabBar2"
            :key="item.title"
            :image="item.image"
            :image-active="item.activeImage"
            :title="item.title"
            :selected="selected2 === item.title"
            @click="selected2 = item.title"
          />
        </am-tab-bar>
      </div>
    </div>
    <am-tab-bar
      icon-font-family="testIcon"
    >
      <am-tab-bar-item
        v-for="item in tabBar"
        :key="item.title"
        :icon="item.icon"
        :title="item.title"
        :selected="selected === item.title"
        @click="selected = item.title"
      />
    </am-tab-bar>
  </div>
</template>

<style scoped>
  .main {
    flex: 1;
    justify-content: center;
    background-color: #f5f5f9;
  }
  .text {
    font-size: 32px;
    text-align: center;
  }
  .other-demo {
    margin-top: 20px
  }
</style>

<script>
import { AmTabBar, AmTabBarItem, AmNavBar, AmWhiteSpace } from '../../index'
const dom = weex.requireModule('dom')

export default {
  components: { AmTabBar, AmTabBarItem, AmNavBar, AmWhiteSpace },
  data () {
    return {
      selected: '首页',
      tabBar: [
        {
          icon: '\ue7ce',
          title: '首页'
        },
        {
          icon: '\ue7ac',
          title: '钱包'
        },
        {
          icon: '\ue800',
          title: '心'
        },
        {
          icon: '\ue7e8',
          title: '我'
        }
      ],
      selected2: '首页',
      // 图片用图片
      tabBar2: [
        {
          title: '首页',
          image: 'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png',
          activeImage: 'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png'
        },
        {
          title: '特别推荐',
          image: 'https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png',
          activeImage: 'https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png'
        },
        {
          title: '消息中心',
          image: 'https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png',
          activeImage: 'https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png',
          badge: 5
        },
        {
          title: '我的主页',
          image: 'https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png',
          activeImage: 'https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png',
          dot: true
        }
      ]
    }
  },
  beforeCreate () {
    dom.addRule('fontFace', {
      'fontFamily': 'testIcon',
      'src': "url('https://at.alicdn.com/t/font_666154_scqtwgh1e27kqpvi.ttf')"
    })
  }
}
</script>
