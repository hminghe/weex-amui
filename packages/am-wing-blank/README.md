# am-wing-blank

> 左右留白，布局控件


## 使用方法 

```vue
<template>
  <div>
    <am-wing-blank size="sm">
      <div class="placeholder"></div>
    </am-wing-blank>
    
    <am-white-space></am-white-space>

    <am-wing-blank size="md">
      <div class="placeholder"></div>
    </am-wing-blank>
    
    <am-white-space></am-white-space>

    <am-wing-blank size="lg">
      <div class="placeholder"></div>
    </am-wing-blank>
  </div>
</template>

<script>
  import { AmWhiteSpace, AmWingBlank } from 'weex-amui'
  export default {
    components: { AmWhiteSpace, AmWingBlank }
  }
</script>

<style>
.placeholder {
  background-color: red;
  height: 40px;

}
</style>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/wing-blank/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`size`** | `String` | `N` | `lg ` | size，可选：`sm`,`md`,`lg` |