# am-native-tab-container

> 原生面板，可切换显示子页面。


### 规则
- 一般和 `<am-tab-bar/>` 或者 `<am-tabs/>` 一起使用
- 可左右划动切换页面，如不需要左右划动切换请使用 `<am-tab-container/>`
- 只支持native端，web端请使用 `<am-tab-container/>`

## 使用方法 

```vue
<template>
  <div>
    <am-nav-bar
      :title="tabBar[selected].title"
      :left-btn="[]"
    ></am-nav-bar>
    <am-native-tab-container :index="selected">
      <am-native-tab-container-item>
        <am-native-tab-container-item>
          <div>
            <div class="panel">
              <text class="text">首页</text>
            </div>
          </div>
        </am-native-tab-container-item>
      </am-native-tab-container-item>
      <am-native-tab-container-item>
        <div>
          <div class="panel">
            <text class="text">钱包</text>
          </div>
        </div>
      </am-native-tab-container-item>
      <am-native-tab-container-item>
        <div>
          <div class="panel">
            <text class="text">心</text>
          </div>
        </div>
      </am-native-tab-container-item>
      <am-native-tab-container-item>
        <div>
          <div class="panel">
            <text class="text">我</text>
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
  import { 
    AmNavBar,
    AmTabBar,
    AmTabBarItem,
    AmNativeTabContainer,
    AmNativeTabContainerItem
  } from 'weex-amui'

  export default {
    components: { 
      AmNavBar,
      AmTabBar,
      AmTabBarItem,
      AmNativeTabContainer,
      AmNativeTabContainerItem
    },
  data () {
    return {
      selected: 0,
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
      ]
    }
  },
  beforeCreate () {
    // tabBar 的图标
    weex.requireModule('dom').addRule('fontFace', {
      'fontFamily': 'testIcon',
      'src': "url('https://at.alicdn.com/t/font_666154_scqtwgh1e27kqpvi.ttf')"
    })
  }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/native-tab-container/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`index`** | `Number` | `Y` | `0` | 当前面板，可以用 `.sync` 同步 |
| **`width`** | `Number` | `N` | `750` | 宽度，默认是750满屏 |

### Slots
| Name | Required | Description |
| ---- |:---:|:----------:|
| **`default`** | `Y` | 一般放 `<am-native-tab-container/>` |

### Events
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`change`** | `切换页面时触发` | `(index)` |


### am-native-tab-container-item

### Slots
| Name | Required | Description |
| ---- |:---:|:----------:|
| **`default`** | `Y` | 显示的内容 |