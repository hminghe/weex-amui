# am-picker 选择器

> 在一组预设数据中进行选择，e.g. 省市区选择。

### 规则
- 尽量使用 Picker 来帮助用户完成输入，避免用户通过键盘直接输入。
- 一般配合 `<am-list-item />` 组件一起使用

## 使用方法 
```vue
<template>
  <am-list header="picker">
    <am-picker
      :show.sync="show"
      title="请选择"
      :data="seasons"
      v-model="value"
      @ok="onOK"
      @hide="onHide"
    >
      <am-list-item
        slot-scope="{ extra, show }"
        title="地址"
        :extra="extra"
        @click="show"
      ></am-list-item>
    </am-picker>
  </am-list>
</template>

<script>
  import { AmPicker, AmList, AmListItem } from 'weex-amui'

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
    components: { AmPickerView, AmList, AmListItem },
    data: {
      seasons,
      value: [],
    },
    methods: {
      onOK (value2, labels) {
        console.log(value2, labels)
      },
      onHide (type) {
        console.log('hide', type)
      },
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/am-picker/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`data`** | `Array` | `Y` | `[]` | [注1] |
| **`value`** | `Array` | `Y` | `null` | 可以使用`v-model`绑定 |
| **`show`** | `Boolean` | `N` | `false` | 是否显示, 可以使用`.sync`同步 |
| **`title`** | `String` | `N` | `null` | 大标题 |
| **`okText`** | `String` | `N` | `确定` | 选中的文案 |
| **`dismissText`** | `String` | `N` | `确定` | 取消的文案 |
| **`format`** | `Function` | `N` | `(lables) => lables.join(',')` | 格式化选中值的函数 |
| **`placeholder`** | `String` | `N` | `请选择` | 当值为空的时候，传给子组件的 `extra` 值 |
| **`colTextMaxLength`** | `[String, Number]` | `N` | `auto` | [注2]  |

- 注1：普通：`Array{Array<{value, label}>}`， 联动： `Array<{value, label, children: Array}>`。详细结构可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/picker-view/data.js)

- 注2：每列文字最大多长, 多出的加`...`, `auto` 自动计算最多可以显示多少位, `0` 不限制 `(如果你的文字不会出现换行的问题建议设置为0)`

### Events
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`ok`** | `点击确定` | `(values, labels)` |
| **`hide`** | `隐藏时回调` | `(type)`, type=`dismiss`或者`ok` |
| **`change`** | `改变时回调` | `(values, , labels)` |


### Slots
| Name | Required | Description |
| ---- |:---:|:----------:|
| **`default`** | `N` | 一般放 `<am-list-item/>` 组件 |

### Scoped Slot 
```
自定义子组件的内容，参数为 { extra: String, show: Function }
extra：格式化选中的值	
show：显示方法，调用后显示picker
<am-list-item
  slot-scope="{ extra, show }"
  :extra="extra"
  @click="show"
></am-list-item>
```