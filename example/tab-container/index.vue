<template>
  <div>
    <am-nav-bar
      :title="tabBar[selected].title"
      :left-btn="[]"
    ></am-nav-bar>
    <am-tab-container :index="selected">
      <am-tab-container-item>
        <div>
          <am-tabs
            v-model="tabSelected"
            :tabs="['Tab1', 'Tab2', 'Tab3']"
          />
          <text style="text-align: center;margin-top: 10px;font-size: 24px">am-tab-container 里放 am-tab-container</text>
          <am-tab-container :index="tabSelected">
            <am-tab-container-item>
              <div>
                <div class="panel">
                  <text class="text">Tab1</text>
                </div>
              </div>
            </am-tab-container-item>
            <am-tab-container-item>
              <div>
                <div class="panel">
                  <text class="text">Tab2</text>
                </div>
              </div>
            </am-tab-container-item>
            <am-tab-container-item>
              <div>
                <div class="panel">
                  <text class="text">Tab3</text>
                </div>
              </div>
            </am-tab-container-item>
          </am-tab-container>
        </div>
      </am-tab-container-item>
      <am-tab-container-item>
        <list>
          <cell>
            <div class="panel">
              <text class="text">钱包</text>
            </div>
          </cell>
          <cell v-for="index in lists" :key="index">
            <div class="panel">
              <text class="text">{{index}}</text>
            </div>
          </cell>
        </list>
      </am-tab-container-item>
      <am-tab-container-item>
        <div>
          <div class="panel">
            <text class="text">心</text>
          </div>
        </div>
      </am-tab-container-item>
      <am-tab-container-item>
        <div>
          <div class="panel">
            <text class="text">我</text>
          </div>
        </div>
      </am-tab-container-item>
    </am-tab-container>
    <am-tab-bar
      icon-font-family="testIcon"
    >
      <am-tab-bar-item
        v-for="(item, index) in tabBar"
        :key="item.title"
        :icon="item.icon"
        :title="item.title"
        :selected="selected === index"
        @click="selected = index"
      />
    </am-tab-bar>
  </div>
</template>

<style scoped lang="less">
  // 设置 web 端的root节点高度为100% (native端默认是100%)
  .weex-root {
    height: 100%;
  }
  .panel {
    width: 600px;
    height: 300px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
</style>

<script>
import { AmNavBar, AmTabBar, AmTabBarItem, AmTabContainer, AmTabContainerItem, AmTabs } from '../../index'
const dom = weex.requireModule('dom')

export default {
  components: { AmNavBar, AmTabBar, AmTabBarItem, AmTabContainer, AmTabContainerItem, AmTabs },
  data () {
    return {
      selected: 0,
      tabSelected: 0,
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
      lists: [
        'First', 'Second', 'Third', 'Fourth',
        'Fifth', 'Sixth', 'Seventh', 'Eighth'
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
