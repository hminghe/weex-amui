# am-flex

> Flex 是 CSS flex 布局的一个封装。

## 使用方法 

```vue
<template>
  <am-flex>
    <am-flex-item>50%</am-flex-item>
    <am-flex-item>50%</am-flex-item>
  </am-flex>
</template>

<script>
  import { AmFlex, AmFlexItem } from 'weex-amui'
  export default {
    components: { AmFlex, AmFlexItem },
    methods: {
      click (e) {
        console.log(e)
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](TODO)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`direction`** | `String` | `N` | `row` | 可选：`['column', 'row']` |
| **`justify`** | `String` | `N` | `flex-start` | 可选：`['flex-start', 'flex-end', 'center', 'space-between', 'space-around']` |
| **`align`** | `String` | `N` | `stretch` | 可选：`['stretch', 'flex-start', 'flex-end', 'center']` |
| **`wrap`** | `String` | `N` | `nowrap` | 可选：`['nowrap', 'wrap', 'wrap-reverse']` |

### Slots
| Name | Required | Description |
| ---- |:---:|:----------:|
| **`default`** | `Y` | 一般放 `am-flex-item` |


### am-flex-item 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:|:----------:|
| **`flex`** | `Number` | `N` | `1` |  |

- 注：am-flex-item 组件默认加上了样式flex:1,保证所有 item 平均分宽度, am-flex 容器的 children 不一定是 am-flex-item
