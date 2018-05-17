# am-list-textarea

> 基于 `am-list-item` 对 `textarea` 进行封装，用于接受多行文本。


## 使用方法 

```vue
<template>
  <am-list
    header="Header"
    :footer="`value=${value}`"
  >
    <am-list-textarea 
      v-model="value"
      title="标题"
      :rows="5"
      placeholder="请输入内容">
    </am-list-textarea>
  </am-list>
</template>

<script>
  import { AmList, AmListTextarea } from 'weex-amui'
  export default {
    components: { AmList, AmListTextarea },
    data () {
      return {
        value: ''
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](TODO)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`value`** | `String` | `N` | `null` | value, 可以用 `v-model` 双向绑定 |
| **`rows`** | `Number` | `N` | `2` | 组件的高度 |
| **`title`** | `String` | `N` | `null` | 标题 |
| **`titleNumber`** | `Number` | `N` | `5`  | 标题的文字个数，可用 `2-7` 之间的数字	 |
| **`placeholder`** | `String` | `N` | `null` | placeholder |
| **`disabled`** | `Boolean` | `N` | `false` | 禁用 |
| **`thumb`** | `String` | `N` | `null` | 缩略图链接 |
| **`thumbStyle`** | `Object` | `N` | `{}` | 缩略图样式 |
| **`extra`** | `String` | `null` | `null` | 右边内容 |
| **`align`** | `String` | `N` | `left` | input值的对齐方式，可选：`left`,`center`,`right` |
| **`editable`** | `Boolean` | `N` | `true` | 是否可编辑 |
| **`disabled`** | `Boolean` | `N` | `false` | 是否禁用 |
| **`autofocus`** | `Boolean` | `N` | `true` | 自动获取光标 |
| **`returnKeyType`** | `String` | `N` | `default` | 键盘返回键的类型,支持 `defalut`,`go`,`next`,`search`,`send`,`done` |
| **`maxLength`** | `Number` | `N` | `null` | 输入的最大长度 |


### Slots
| Name | Required | Description |
| ---- |:---:|:----------:|
| **`thumb`** | `N` | 会覆盖 `prop.thumb` |
| **`extra`** | `N` | 会覆盖 `prop.extra` |

### Events
| Event	 | Description | Parameters |
| ---- |:----------:|:----:|
| **`input`** | `输入` | `(value)` |

- 除了 `input` 事件之外，其他事件与 `weex` 的 `<textarea/>` 组件一致 [文档](http://weex.apache.org/cn/references/components/textarea.html#shi-jian)。

### Methods
- 所有方法与 `weex` 的 `<textarea/>` 组件一致 [文档](http://weex.apache.org/cn/references/components/input.html#methods)