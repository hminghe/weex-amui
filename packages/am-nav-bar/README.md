# am-nav-bar

> 导航栏

### 规则
- 可在导航栏中显示当前视图的标题。如果标题非常冗长且无法精简，可以空缺。
- 可在导航栏中使用 `<am-segmented-control/>` 对内容进行层级划分。
- 避免用过多的元素填满导航栏。一般情况下，一个『返回按钮』、一个『标题』、一个『当前视图的控件』就足够了；如果已经有了 `<am-segmented-control/>` ，一般只搭配一个『返回按钮』或者『当前视图的控件』。


## 使用方法

```vue
<template>
  <div>
    <am-nav-bar
      title="标题"
      :right-btn="['search', 'ellipsis']"
      @click="handleClick"
    ></am-nav-bar>

    <am-nav-bar
      mode="light"
      title="标题"
      :left-btn="[{is: 'text', text: '返回', key: 'back'}]"
      :right-btn="[{is: 'text', text: '编辑', key: 'edit'}]"
      @click="handleClick"
    ></am-nav-bar>
  </div>
</template>

<script>
  import { AmNavBar } from 'weex-amui'
  export default {
    components: { AmNavBar }
  }
</script>

```
更详细代码可以参考 [这里](TODO)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`mode`** | `String` | `N` | `dark` | 模式，可选：`dark`,`light` |
| **`title`** | `String` | `N` | `null` | 标题 |
| **`leftBtn`** | `Array` | `N` | `[注2]` | [Object, Object, ...]，格式 `[注1]` |
| **`rightBtn`** | `Array` | `N` | `[]` | 和 `leftBtn` 一样 |

- 注1：leftBtn 和 rightBtn 可以多个按钮，格式如下
```JSON
[
  {
    is: String, // icon 或者 text
    type: String, // is="icon" 才有，对应 <am-icon/> 组件的 type
    text: String, // is="text" 才有，显示的方法
    key: Any, // @click 事件返回的参数，如果不设置返回 type 或者 text。不要设置 key="title" 会和标题的key冲突
    onClick: Function // 点击触发的方法， 如果设置了 onClick，不会触发组件的 @click 事件
  },
  ...
]

// 如果是icon可以简写如下：
[
  'search', // 图标的type
  'ellipsis'
]
```
- 注2：leftBtn 的默认值如下
```JSON
[{
  is: 'icon',
  type: 'left',
  onClick () {
    Navigator.pop({}, e => {}) // 点击返回
  }
}]
```

### Event
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`click`** | `点击回调函数` | `(key)` 点击标题返回的 key="title"  |
