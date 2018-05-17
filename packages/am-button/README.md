# am-button

> 按钮组件，支持 4 种样式和 2 个size

## 使用方法 

```vue
<template>
  <am-button
    width="702px"
    text="确定"
    @click="click"></am-button>
</template>

<script>
  import { AmButton } from 'weex-amui'
  export default {
    components: { AmButton },
    methods: {
      click (e) {
        console.log(e)
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](TODO)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`text`** | `String` | `Y` | `确认` | 展现的文字 |
| **`width`** | `String` | `Y` |  | 宽度，默认是自适应文字长度 |
| **`type`** | `String` | `N` | `primary` | 可选：`['primary','defulat','primary', 'warning']` (注1) |
| **`size`** | `String` | `N` | `large` | 可选：`['large','small']` |
| **`disabled`** | `Boolean` | `N` | `false` | 设置禁用	 |
| **`btnStyle`** | `Object` | `N` | `{}` | 覆盖按钮样式 |

- 注1：type，除了4个默认的类型，也可以自定义类型，例如 `type="red"` 会对应绑定一个 `am-button-red` 的类，在 `variable.less` 的 `.buttonTheme()` 方法里添加自定义的样式。

### 事件回调
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`click`** | `String` | `event` |
