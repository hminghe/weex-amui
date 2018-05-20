# am-icon

> 常用图标，[iconfont](http://www.iconfont.cn/) 的封装

### 规则
- 只对少量的图标封装，建议自己封装用到的图标减少字体文件的体积
- 内置图标：`search`,`reload`,`arrow-down`,`arrow-up`,`arrow-right`,`arrow-left`,`down`,`up`,`right`,`left`,`warning-circle`,`warning-circle-o`,`close-circle`,`close-circle-o`,`check-circle`,`check-circle-o`,`check`,`clock-circle`,`clock-circle-o`,`ellipsis`,`loading`
- 自定义图标需要先查找对应图标的 `unicode` 字符

## 使用方法

```vue
<template>
  <div>
    <am-icon type="left" size="lg" />

    <!--自定义的图标-->
    <am-icon :type="'\ue813'" font-family="myIcon">
  </div>
</template>

<script>
  import { AmIcon } from 'weex-amui'
  const dom = weex.requireModule('dom')

  export default {
    components: { AmIcon },
    beforeCreate () {
      // 添加自己的图标文件
      dom.addRule('fontFace', {
        'fontFamily': 'myIcon', // 与 <am-icon/> 组件的 fontFamily 属性对应
        'src': "url('https://at.alicdn.com/t/font_666154_scqtwgh1e27kqpvi.ttf')"
      })
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/icon/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`type`** | `String` | `N` | `null` | 内置图标名或者对应图标的 `unicode` 字符 |
| **`size`** | `String`/`Number` | `N` | `md` | 固定值可选：`xxs`,`xs`,`sm`,`md`,`lg` 或者 自定义大小number |
| **`color`** | `String` | `N` | `null` | 颜色 |
| **`fontFamily`** | `String` | `N` | `AMUIIconFont` | 字体名称，自定义图标要设置 |
