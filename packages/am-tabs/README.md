# am-tabs 标签页
> 用于让用户在不同的视图中进行切换。

### 规则
- 标签数量，一般 2-4 个；其中，标签中的文案需要精简，一般 2-4 个字。

## 使用方法 

```vue
<template>
  <div>
    <am-tabs
        v-model="selected"
        :tabs="['Tab1', 'Tab2', 'Tab3']"
      />
  </div>
</template>

<script>
  import { AmTabs } from 'weex-amui'
  export default {
    components: { AmTabs },
    data () {
      return {
        selected: 0
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/tabs/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`tabs`** | `Array` | `Y` | `[]` | 选项数组,值是字符串 |
| **`selected`** | `Number` | `Y` | `0` | 选中项在数组中的索引，可以用 `v-model` 双向绑定 |
| **`tabBarPosition`** | `String` | `N` | `top` | TabBar位置, `top`, `bottom`, `left`, `right`， 其中 `top` 和 `bottom` 是水平模式，`left` 和 `right` 是垂直模式 |
| **`tabWidth`** | `Number` | `N` | `null` | tab的宽度(注1) |

- 注1：`垂直模式` 默认可滚动；`水平模式` 如果没有设置 `tabWidth`，tab平分宽度（flex: 1），不可以滚动。

### Events
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`change`** | `切换时调用` | `(index, value)` |
