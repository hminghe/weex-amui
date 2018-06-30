<template>
  <div class="panel" v-if="isWeb">
    <text class="text">只支持native端，请用Weex playground app扫码体验（有惊喜）</text>
  </div>
  <div v-else>
    <am-nav-bar
      :title="tabBar[selected].title"
      :left-btn="[]"
    ></am-nav-bar>
    <am-native-tab-container :index.sync="selected">
      <am-native-tab-container-item>
        <div style="flex: 1">
          <am-tabs
            v-model="tabSelected"
            :tabs="['Tab1', 'Tab2', 'Tab3']"
          />
          <am-native-tab-container :index.sync="tabSelected">
            <am-native-tab-container-item>
              <div>
                <div class="panel" @click="test('tab1')">
                  <text class="text">Tab1</text>
                </div>
              </div>
            </am-native-tab-container-item>
            <am-native-tab-container-item>
              <list>
                <cell>
                  <div class="panel">
                    <text class="text">Tab2</text>
                  </div>
                </cell>
                <cell v-for="index in lists" :key="index">
                  <div class="panel">
                    <text class="text" @click="test(index)">{{index}}</text>
                  </div>
                </cell>
              </list>
            </am-native-tab-container-item>
            <am-native-tab-container-item>
              <div>
                <div class="panel">
                  <text class="text">Tab3</text>
                </div>
              </div>
            </am-native-tab-container-item>
          </am-native-tab-container>
        </div>
      </am-native-tab-container-item>
      <am-native-tab-container-item>
        <list>
          <cell>
            <div class="panel">
              <text class="text">钱包</text>
            </div>
          </cell>
          <cell v-for="index in lists" :key="index">
            <div class="panel">
              <text class="text" @click="test(index)">{{index}}</text>
            </div>
          </cell>
        </list>
      </am-native-tab-container-item>
      <am-native-tab-container-item>
        <div>
          <div class="panel">
            <text class="text" @click="test('心')">心</text>
          </div>
        </div>
      </am-native-tab-container-item>
      <am-native-tab-container-item>
        <div>
          <div class="panel">
            <text class="text" @click="test('我')">我</text>
          </div>
        </div>
        <div>
          <div class="panel">
            <text class="text" @click="test('我')">我</text>
          </div>
        </div>
      </am-native-tab-container-item>
    </am-native-tab-container>
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
import { AmNavBar, AmTabBar, AmTabBarItem, AmNativeTabContainer, AmNativeTabContainerItem, AmTabs, Utils } from '../../index'
const dom = weex.requireModule('dom')

export default {
  components: { AmNavBar, AmTabBar, AmTabBarItem, AmNativeTabContainer, AmNativeTabContainerItem, AmTabs },
  data () {
    return {
      isWeb: Utils.isWeb(),
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
  },
  methods: {
    test (msg = 'test') {
      weex.requireModule('modal').toast({
        message: msg
      })
    }
  }
}
</script>
