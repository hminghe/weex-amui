# am-date-picker-view 日期选择

> DatePickerView 的功能类似于 DatePicker ，但它是直接渲染在区域中，而不是弹出窗口。


## 使用方法

```vue
<template>
  <div>
    <am-date-picker-view
      format="YYYY-MM-DD"
      v-model="value"
    ></am-date-picker-view>
  </div>
</template>

<script>
  import { AmDatePickerView } from 'weex-amui'
  export default {
    components: { AmDatePickerView },
    data () {
      return {
        value: '2011-11-11'
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/date-picker-view/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----|:---|:-------|:----------|
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
| **`input`** | 改变值时 | `（value)`, value返回的格式与 `format` 属性一致 |
