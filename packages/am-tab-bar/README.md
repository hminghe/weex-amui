# am-tab-bar 标签栏

> 位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

## 规则
- 用作 APP 的一级分类，数量控制在 3-5 个之间。

## 使用方法 

```vue
<template>
  <div class="demo">
    <am-nav-bar title="am-tab-bar"></am-nav-bar>
    <div class="main">
      <text class="text">{{selected}}</text>
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
    font-size: 100px;
    text-align: center;
  }
</style>

<script>
import { AmTabBar, AmTabBarItem, AmNavBar } from 'weex-amui'
const dom = weex.requireModule('dom')

export default {
  components: { AmTabBar, AmTabBarItem, AmNavBar },
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
```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/tab-bar/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`barTintColor`** | `String` | `N` | `white` | 背景色 |
| **`tintColor`** | `String` | `N` | `#108ee9` | 选中的字体颜色 |
| **`unselectedTintColor`** | `String` | `N` | `#888888` | 未选中的字体颜色 |
| **`iconSize`** | `[Number, String]` | `N` | `null` | 和 `<am-icon/>` 组件的`size`参数一致 |
| **`iconFontFamily`** | `String` | `N` | `null` | 和 `<am-icon/>` 组件的`fontFamily`参数一致 |
| **`imageSize`** | `[Number, Array]` | `N` | `null` | 类型是`Number`时，宽高等于传入的值；类型是`Array`时，格式是[width, height] |

- 注：`tintColor`/`unselectedTintColor`/`iconSize`/`iconFontFamily`/`imageSize` 是统一设置 `item` 对应参数，优先级比 `item` 的低

# am-tab-bar-item
### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`selected`** | `Boolean` | `N` | `false` | 是否选中 |
| **`title`** | `String` | `N` | `null` | 标题 |
| **`icon`** | `String` | `N` | `null` | 和 `<am-icon/>` 组件的`type`参数一致 |
| **`iconSize`** | `[Number, String]` | `N` | `null` | 和 `<am-icon/>` 组件的`size`参数一致 |
| **`iconFontFamily`** | `String` | `N` | `null` | 和 `<am-icon/>` 组件的`fontFamily`参数一致 |
| **`image`** | `String` | `N` | `null` | 图片的url |
| **`imageActive`** | `String` | `N` | `null` | 选中时图片的url |
| **`imageSize`** | `[Number, Array]` | `N` | `null` | 类型是`Number`时，宽高等于传入的值；类型是`Array`时，格式是[width, height] |
| **`tintColor`** | `String` | `N` | `#108ee9` | 选中的字体颜色 |
| **`unselectedTintColor`** | `String` | `N` | `#888888` | 未选中的字体颜色 |
| **`dot`** | `Boolean` | `N` | `false` | 显示红点 |

- 注：`icon` 和 `image` 两选一，`icon` 比 `image` 优先

### Events
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`click`** | `点击回调函数` | `(event)` |