# am-list-checkbox

> 基于 `am-list-item` 对 `am-checkbox` 进行封装


## 使用方法 

```vue
<template>
  <am-list
    header="Header"
    footer="Footer"
  >
    <am-list-checkbox
      title="checkbox 1"
      :value="1"
      :checked-values.sync="value"
    >
    </am-list-checkbox>
    <am-list-checkbox
      title="checkbox 2"
      :value="2"
      :checked-values.sync="value"
    >
    </am-list-checkbox>
  </am-list>
</template>

<script>
  import { AmList, AmListCheckbox } from 'weex-amui'
  export default {
    components: { AmList, AmListCheckbox },
    data () {
      return {
        value: []
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/list-checkbox/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`value`** | `Any` | `Y` |  | 选中之后的值 |
| **`checkedValues`** | `Array` | `Y` | `[]`  | 所有选中值的数组，请使用 `.sync` 同步 |
| **`disabled`** | `Boolean` | `N` | `false` | 禁用 |
| **`color`** | `String` | `N` | `null` | checkbox的颜色 |
| **`left`** | `Boolean` | `N` | `false` | checkbox在左边 |


- 注：checkbox 默认在 `am-list-item` 的 `slots.extra` 位置，当 `left=true` 时， `checkbox` 在 `slots.thumb` 位置。
- 除了`tapActive` 和 `arrow`，其他参数与 `am-list-item` 一致。
- `tapActive` 不能设置。
- `arrow` 默认是 `empty`



### Slots
```
与 am-list-item 一致
```

### 事件回调
```
无事件
```