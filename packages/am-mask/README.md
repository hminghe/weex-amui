# am-mask 遮罩层

> 遮罩层

## 使用方法

```vue
<template>
  <div>
    <am-nav-bar
      title="mask"
    ></am-nav-bar>
    <am-flex :style="{flex: 1}" direction="column" justify="center" align="center">
      <am-button class="button" @click="show1">有动画</am-button>
      <am-button class="button" @click="show2">无动画</am-button>
      <am-button class="button" @click="show3">3秒后自动关闭</am-button>
      <am-mask
        :animation="animation"
        :show.sync="show"
      ></am-mask>
    </am-flex>
  </div>
</template>

<style scoped>
.button {
  width: 600px;
  margin-top: 30px;
}
</style>

<script>

import { AmNavBar, AmMask, AmButton, AmFlex } from '../../index'

export default {
  components: { AmNavBar, AmMask, AmButton, AmFlex },
  data () {
    return {
      show: false,
      animation: false
    }
  },
  methods: {
    show1 () {
      this.animation = true
      this.show = true
    },
    show2 () {
      this.animation = false
      this.show = true
    },
    show3 () {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
}
</script>
```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/mask/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`show`** | `Boolean` | `Y` | `true` | 是否显示，可以用`.sync`同步 |
| **`autoClose`** | `Boolean` | `N` | `true` | 点击自动关闭 |
| **`opacity`** | `Number` | `N` | `0.6` | 显示时的透明度 |
| **`animation`** | `Boolean` | `N` | `false` | 显示隐藏动画 |
| **`animationTimingFunction`** | `Array` | `N` | `['ease-in', 'ease-out']` | 动画函数，0：显示，1：隐藏 |
| **`animationDuration`** | `Number` | `N` | `300` | 动画时间 |
