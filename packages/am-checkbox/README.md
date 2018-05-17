# am-checkbox

> 复选框icon，通常不会单独使用

## 使用方法 

```vue
<template>
  <am-checked
    checked></am-button>
</template>

<script>
  import { AmCheckbox } from 'weex-amui'
  export default {
    components: { AmCheckbox }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/checkbox/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`checked`** | `Boolean` | `N` | `false` | 是否选中 |
| **`disabled`** | `Boolean` | `N` | `false` | 设置禁用 |
| **`color`** | `String` | `N` | `null` | 设置颜色 |


### 事件回调
```
默认无事件，如果需要点击事件请使用 `@click.native=""`
```
