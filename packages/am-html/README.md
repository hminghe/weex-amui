# am-html

> 用来加载HTML内容的， web使用`v-html`,native使用`<web/>`组件

!> native端滚动会和 `list`、`scroller`冲突导致html内容不能滚动，不能自适应HTML的高度

## 使用方法

```vue
<template>
  <div>
    <am-html :width="750" :height="750" :html="html"></am-html>
  </div>
</template>

<script>
  import { AmHtml } from 'weex-amui'
  export default {
    components: { AmHtml },
    data () {
      return {
        html: '<h1 style="background: red">html</h1>'
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/html/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`html`** | `String` | `Y` | `null` | 要加载的html |
| **`width`** | `Number` | `N` | `750` | width |
| **`height`** | `Number` | `N` | `750` | height |
