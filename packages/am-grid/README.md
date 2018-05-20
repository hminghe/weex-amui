# am-grid

> 在水平和垂直方向，将布局切分成若干等大的区块。

### 规则
- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。

## 使用方法 

```vue
<template>
  <am-grid 
    @click="click"
    :data="list" 
    :column-num="3"
  ></am-grid>
</template>

<script>
  import { AmGrid } from 'weex-amui'
  export default {
    components: { AmGrid },
    data () {
      const list = Array.from(new Array(9)).map((v, k) => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name ${k}`
      }))
      return {
        list: list
      }
    },
    methods: {
      click (item, index) {
        console.log(item, index)
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/grid/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`data`** | `Array<{icon, text}>	` | `Y` | `[]` | 传入的菜单数据 |
| **`columnNum`** | `Number` | `N` | `4`  | 列数 |
| **`hasLine`** | `Boolean` | `N` | `true` | 是否有边框 |
| **`itemStyle`** | `Object` | `N` | `{}` | 每个格子自定义样式 |
| **`iconStyle`** | `Object` | `N` | `{}` | 图片自定义样式 |

### 事件回调
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`click`** | `点击每个菜单的回调函数` | `(el: Object, index: number)` |
