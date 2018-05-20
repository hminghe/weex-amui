# am-switch

> 滑动开关

## 使用方法 

```vue
<template>
  <am-list
    header="滑动开关"
    :footer="`value=${value}`">
    <am-list-item
      arrow=""
      :tap-active="false"
      title="开关">
      <am-switch 
        slot="extra"
        v-model="value">
      </am-switch>
    </am-list-item>
  </am-list>
</template>

<script>
  import { AmList, AmListItem, Switch } from 'weex-amui'
  export default {
    components: { AmList, AmListItem, Switch },
    data () {
      return {
        value: false
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/switch/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`value`** | `Boolean` | `N` | `false` | 是否选中，可以用 `v-model` 双向绑定 |
| **`disabled`** | `Boolean` | `N` | `false` | 禁用 |
| **`color`** | `String` | `N` | `null` | 选中的颜色 |
| **`native`** | `Boolean` | `N` | `false` | 是否使用 `weex` 的 `<switch/>` 组件 |

- 注：ios 如果不设置 `color` 默认使用 `weex` 的 `<switch/>` 组件

### Events
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`change`** | `值改变` | `(value: Boolean)` |