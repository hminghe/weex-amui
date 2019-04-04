# am-picker-view 选择器

> PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口。

## 使用方法 

```vue
<template>
  <div>
    <am-picker-view
      :data="seasons"
      v-model="value"
      @change="onChange"
    ></am-picker-view>
  </div>
</template>

<script>
  import { AmPickerView } from 'weex-amui'

  const seasons = [
    [
      {
        label: '2013',
        value: '2013'
      },
      {
        label: '2014',
        value: '2014'
      }
    ],
    [
      {
        label: '春',
        value: '春'
      },
      {
        label: '夏',
        value: '夏'
      }
    ]
  ]

  export default {
    components: { AmPickerView },
    data: {
      seasons,
      value: '',
    },
    methods: {
      onChange (items) {
        console.log(items)
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/hminghe/weex-amui/blob/master/example/picker-view/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`data`** | `Array` | `Y` | `[]` | [注1] |
| **`value`** | `Array` | `Y` | `null` | 可以使用`v-model`绑定 |
| **`colTextMaxLength`** | `[String, Number]` | `N` | `auto` | [注2]  |


- 注1：普通：`Array{Array<{value, label}>}`， 联动： `Array<{value, label, children: Array}>`。详细结构可以参考 [这里](https://github.com/hminghe/weex-amui/blob/master/example/picker-view/data.js)

- 注2：每列文字最大多长, 多出的加`...`, `auto` 自动计算最多可以显示多少位, `0` 不限制 `(如果你的文字不会出现换行的问题建议设置为0)`

### Events
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`input`** | 改变值时 | `(Array<...value>)` |
| **`change`** | 改变值时 | `([...Array<{value, label}>])`[注1] |

