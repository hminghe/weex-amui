# am-popup 弹窗

> 支持上下左右四个方向面板弹出

## 使用方法

```vue
<template>
  <div>
    <am-button @click="show=true">显示</am-button>
    <am-popup
        :show.sync="show"
        position="bottom"
        width="500"
        height="400"
      >
        <text :style="{fontSize: '40px'}">popup</text>
        <am-button
          type="warning"
          @click="show=false"
        >点我关闭</am-button>
      </am-popup>
  </div>
</template>

<script>
  import { AmPopup, AmButton } from 'weex-amui'
  export default {
    components: { AmPopup, AmButton },
    data () {
      return {
        show: false
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/popup/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`show`** | `Boolean` | `Y` | `true` | 是否显示，可以用`.sync`同步 |
| **`autoClose`** | `Boolean` | `N` | `true` | 点击遮罩层自动关闭 |
| **`position`** | `String` | `N` | `bottom` | 出来位置，可选：`top`, `right`,`bottom`, `left` |
| **`width`** | `Number` | `N` | `750` | 弹出层的宽度(`position`=`left`或者`right`时有效) |
| **`height`** | `Number` | `N` | `750` | 弹出层的高度(`position`=`top`或者`bottom`时有效) |
| **`offset`** | `Object{top, left, right, bottom}` | `N` | `{}` | 弹出层的偏移量[注1] |
| **`popupStyle`** | `Object` | `N` | `{}` | 自定义样式 |

- 注1：`position=top`时`offset.bottom`无效，=`right`时`offset.left`无效，=`bottom`时`offset.top`，=`left时offset.right`无效。
