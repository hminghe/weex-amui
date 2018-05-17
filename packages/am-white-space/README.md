# am-white-space

> 上下留白，布局控件


## 使用方法 

```vue
<template>
  <div>
    <am-white-space size="xs"></am-white-space>
    <text>test</text>

    <am-white-space size="sm"></am-white-space>
    <text>test</text>

    <am-white-space size="md"></am-white-space>
    <text>test</text>

    <am-white-space size="lg"></am-white-space>
    <text>test</text>

    <am-white-space size="xl"></am-white-space>
    <text>test</text>
  </div>
</template>

<script>
  import { AmWhiteSpace } from 'weex-amui'
  export default {
    components: { AmWhiteSpace }
  }
</script>

```
更详细代码可以参考 [这里](TODO)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`size`** | `String` | `N` | `md` | size，可选：`xs`,`sm`,`md`,`lg`,`xl` |