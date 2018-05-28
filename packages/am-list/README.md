# am-list

> 单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。


### 规则
- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。


## 使用方法 

```vue
<template>
  <am-list
    header="Header"
    footer="Footer"
  >
    <am-list-item
      title="Title"
      extra="extra content"
      @click="click"
    ></am-list-item>
  </am-list>
</template>

<script>
  import { AmList, AmListItem } from 'weex-amui'
  export default {
    components: { AmList, AmListItem },
    methods: {
      click (event) {
        console.log(event)
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/list/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`header`** | `String` | `N` | `null` | 头部文字 |
| **`footer`** | `String` | `N` | `null`  | 底部文字 |
| **`headerStyle`** | `Object` | `N` | `{}` | 头部样式 |
| **`footerStyle`** | `Object` | `N` | `{}` | 底部样式 |

### Slots
| Name | Required | Description |
| ---- |:---:|:----------:|
| **`header`** | `N` | 会覆盖 `prop.header` |
| **`footer`** | `N` | 会覆盖 `prop.footer` |

### Events
```
无事件
```

# am-list-item
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`thumb`** | `String` | `N` | `null` | 缩略图链接 |
| **`thumbStyle`** | `Object` | `N` | `{}` | 缩略图样式 |
| **`title`** | `String` | `N` | `null` | 标题 |
| **`titleNumber`** | `number` | `N` | `0`  | 标题的文字个数，`0` 不限制，可用 `2-7` 之间的数字	 |
| **`titleDisabled`** | `Boolean` | `N` | `false` | 标题禁用(字体颜色设置为`#bbb`) |
| **`extra`** | `String` | `N` | `null` | 右边内容 |
| **`arrow`** | `String` | `N` | `right` | 箭头方向(右,上,下), 可选`right`,`up`,`down`,`empty`，如果是`empty`不显示 |
| **`brief`** | `String` | `N` | `null` | 辅助说明，在标题下方 |
| **`align`** | `String` | `N` | `null` | 子元素垂直对齐，可选`top`,`middle`,`bottom`	 |
| **`tapActive`** | `Boolean` | `N` | `true` | 按下效果 |

### Slots
| Name | Required | Description |
| ---- |:---:|:----------:|
| **`thumb`** | `N` | 会覆盖 `prop.thumb`，`prop.thumbStyle` 对他也无效 |
| **`extra`** | `N` | 会覆盖 `prop.extra` |
| **`brief`** | `N` | 会覆盖 `prop.brief` |

### Events
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`click`** | `点击回调函数` | `(event)` |