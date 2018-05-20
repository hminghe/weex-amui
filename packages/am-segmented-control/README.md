# am-segmented-control 分段器
> 由至少 2 个分段控件组成，用作不同视图的显示；是 iOS 的推荐组件。

### 规则
- 和 `<am-tabs/>` 功能相似，尽可能避免一个页面中同时出现这两个组件。
- 可以搭配 `<am-tab-bar/>` 一起使用，用于显示多个视图，分段数一般为 2 个。
- 单独放置一行时，分段数最多为 5 个；文案需要精简，一般 2-4 个字。
- 尽可能保持文案长度一致。


## 使用方法 

```vue
<template>
  <div>
    <am-segmented-control
        v-model="selected"
        :values="['Segment1', 'Segment2', 'Segment3']"
      />
  </div>
</template>

<script>
  import { AmSegmentedControl } from 'weex-amui'
  export default {
    components: { AmSegmentedControl },
    data () {
      return {
        selected: 0
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/segmented-control/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`values`** | `Array` | `Y` | `[]` | 选项数组,值是字符串 |
| **`selected`** | `Number` | `Y` | `0` | 选中项在数组中的索引，可以用 `v-model` 双向绑定 |
| **`disabled`** | `Boolean` | `N` | `false` | 禁用 |
| **`tintColor`** | `String` | `N` | `null` | 组件主色调 |

### Events
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`change`** | `切换时调用` | `(index, value)` |
