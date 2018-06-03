# am-date-picker 日期选择

> 用于选择日期或者时间。

### 规则
- 一般配合 `<am-list-item />` 组件一起使用

## 使用方法

```vue
<template>
  <div>
    <am-list header="日期选择">
      <am-date-picker
        title="请选择日期"
        v-model="value"
      >
        <am-list-item
          slot-scope="{ extra, show }"
          title="日期"
          :extra="extra"
          @click="show"
        ></am-list-item>
      </am-date-picker>
    </am-list>
  </div>
</template>

<script>
  import { AmDatePicker } from 'weex-amui'
  export default {
    components: { AmDatePicker },
    data () {
      return {
        value: '2011-11-11 11:11'
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/date-picker/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----|:---|:-------|:----------|
| **`show`** | `Boolean` | `N` | `false` | 是否显示, 可以使用`.sync`同步 |
| **`title`** | `String` | `N` | `null` | 大标题 |
| **`okText`** | `String` | `N` | `确定` | 选中的文案 |
| **`dismissText`** | `String` | `N` | `确定` | 取消的文案 |
| **`placeholder`** | `String` | `N` | `请选择` | 当值为空的时候，传给子组件的 `extra` 值 |
| **`value`** | `String` | `Y` | `null` | 当前选中时间，格式对应 `format`, 可以使用 `v-model` |
| **`format`** | `String` | `N` | `YYYY-MM-DD HH:mm` | 时间格式 [注1] |
| **`minDate`** | `String` | `N` | `2000-01-01` | 最小可选日期，只支持年月日，固定格式 `YYYY-MM-DD` |
| **`maxDate`** | `String` | `N` | `2030-12-31` | 最大可选日期，只支持年月日，固定格式 `YYYY-MM-DD` |
| **`hourList`** | `Array` | `N` | `null` | 可选的小时列表，数组格式：`[2, 7, 9, 12]`，不设置为0到23时。 |
| **`minuteStep`** | `Number` | `N` | `1` | 分钟数递增步长设置 |
| **`formatYear`** | `String` | `N` | `{value}` | 年份的渲染模板 |
| **`formatMonth`** | `String` | `N` | `{value}` | 月份的渲染模板	 |
| **`formatDay`** | `String` | `N` | `{value}` | 日期的渲染模板	 |
| **`formatHour`** | `String` | `N` | `{value}` | 小时的渲染模板 |
| **`formatMinute`** | `String` | `N` | `{value}` | 分钟的渲染模板 |

- 注1：`YYYY=年`，`MM=月`，`DD=日`，`HH=小时`，`mm=分钟`, 可以自定义value的格式，例如：`YYYY年MM月DD日 HH时mm分`

### Events
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`ok`** | `点击确定` | `(value)`, value返回的格式与 `format` 属性一致 |
| **`hide`** | `隐藏时回调` | `(type)`, type=`dismiss`或者`ok` |


### Slots
| Name | Required | Description |
| ---- |:---:|:----------:|
| **`default`** | `N` | 一般放 `<am-list-item/>` 组件 |

### Scoped Slot 
```
自定义子组件的内容，参数为 { extra: String, show: Function }
extra：当前值	
show：显示方法，调用后显示picker
<am-list-item
  slot-scope="{ extra, show }"
  :extra="extra"
  @click="show"
></am-list-item>
```