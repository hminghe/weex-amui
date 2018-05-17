# Weex-AMUI


## 安装
```shell
npm i weex-amui -S
```

## 使用
```vue
<template>
  <div>
    <am-button 
      @click="handleClick"
      text="确定"
      type="primary"/>
  </div>
</template>

<script>
  import { AmButton } from 'weex-flymeui';

  export default {
    components: { AmButton },
    methods: {
      handleClick () {
        // enter your code
      }
    }
  };
</script>
```

## 使用前
1. 因为官方版本的 `weex-vue-precompiler` 会把自定义组件的 `click`, `change` 等事件处理出错，需要安装一下另外一个修改的版本**(只影响web端)**。
```shell
npm i https://github.com/HMingHe/weex-vue-precompiler.git -D
```

2. 需要使用 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component) 来只引入需要的组件打包，同时如果没有安装 `babel-preset-stage-0`，也需要一并安装。
```shell
npm i babel-preset-stage-0 babel-plugin-component  -D
```
```json
// 增加一个plugins的配置到 .babelrc 中
{
  "presets": ["es2015", "stage-0"],
  "plugins": [
    [
      "component",
      {
        "libraryName": "weex-amui",
        "libDir": "packages",
        "style": false
      }
    ]
  ]
}
```

## 运行 Demo

```shell
npm i
npm run start
```
