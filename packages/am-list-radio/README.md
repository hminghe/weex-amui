# am-list-radio

> 单选框


## 使用方法 

```vue
<template>
  <am-list>
    <am-list-radio
            title="radio 1"
            :checked="value === 1"
            @change="value = 1"
          ></am-list-radio>
    <am-list-radio
            title="radio 2"
            :checked="value === 2"
            @change="value = 2"
          ></am-list-radio> 
  </am-list>
</template>

<script>
  import { AmList, AmListRadio } from 'weex-amui'
  export default {
    components: { AmList, AmListRadio },
    data () {
      return {
        value: 1
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/list-radio/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`checked`** | `Boolean` | `N` | `false` | 是否选中 |
| **`thumb`** | `String` | `N` | `null` | 缩略图链接 |
| **`thumbStyle`** | `Object` | `N` | `{}` | 缩略图样式 |
| **`title`** | `String` | `N` | `null` | 标题 |
| **`brief`** | `String` | `N` | `null` | 辅助说明，在标题下方 |
| **`align`** | `String` | `N` | `null` | 子元素垂直对齐，可选`top`,`middle`,`bottom`	 |
| **`disabled`** | `Boolean` | `N` | `false` | 禁用 |
| **`color`** | `String` | `N` | `null` | 选中颜色 |



### Slots
| Name | Required | Description |
| ---- |:---:|:----------:|
| **`thumb`** | `N` | 会覆盖 `prop.thumb` |
| **`brief`** | `N` | 会覆盖 `prop.brief` |

### 事件回调
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`change`** | `选中时调用` | `(event)` |