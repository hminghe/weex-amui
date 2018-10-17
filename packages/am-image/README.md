# am-image

> `<image/>` 组件封装，支持自动高或者自动宽

## 使用方法

```vue
<template>
  <div>
    <text class="text">自动高</text>
    <am-image :image-style="{width: '200px'}" auto-height src="https://gw.alicdn.com/tfs/TB1KF_ybRTH8KJjy0FiXXcRsXXa-890-1186.png"></am-image>

    <text class="text">自动宽</text>
    <am-image @load.native="handleLoad" :image-style="{height: '500px'}" auto-width src="https://gw.alicdn.com/tfs/TB1KF_ybRTH8KJjy0FiXXcRsXXa-890-1186.png"></am-image>
  </div>
</template>

<script>
  import { AmImage } from 'weex-amui'

  export default {
    components: { AmImage },
    methods: {
      handleLoad ($event) {
        console.log($event)
      }
    }
  }
</script>

```
更详细代码可以参考 [这里](https://github.com/HMingHe/weex-amui/blob/master/example/image/index.vue)

### 可配置参数
| Prop	 | Type | Required | Default | Description |
| ---- |:----|:---|:-------|:----------|
| **`src`** | `String` | `Y` | `null` | 要显示图片的 URL |
| **`placeholder`** | `String` | `N` | `null` | 占位图的 URL，当由 src 表示的图片下载完成并展示后将被删除。 |
| **`resize`** | `String` | `N` | `stretch` | 可选：`cover`, `contain`, `stretch` |
| **`imageStyle`** | `Object` | `N` | `{}` | 图片的style |
| **`autoWidth`** | `Boolean` | `N` | `false` | 是否自动宽 |
| **`autoHeight`** | `Boolean` | `N` | `false` | 是否自动高 |

- 注：`autoWidth` 和 `autoHeight` 二选一， 如果是 `autoHeight` 必须有宽度，如果是 `autoWidth` 必须有高度。

### Events

- 注：如果要使用image的事件请添加 `.native`, 例如：`@click.native`, `@load.native`，image支持的事件请参考：[这里](http://weex.apache.org/cn/references/components/image.html#shi-jian)


### Methods

- 可以使用 `save` 方法， 请参考：[这里](http://weex.apache.org/cn/references/components/image.html#save-v0-16-0)