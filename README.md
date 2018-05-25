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
  import { AmButton } from 'weex-amui';

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
- 安装 `less-loader` 以正确编译less源码
```shell
npm i less less-loader -D
```

- 安装 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component) 来只引入需要的组件打包，同时如果没有安装 `babel-preset-stage-0`，也需要一并安装。
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

- 如果你使用了 `weex-vue-render@1.x` 版本（现在使用 `weex-toolkit` 创建的项目可选`0.x`和`1.x`），1.x版本依赖的 `weex-vue-precompiler` 当前版本会把自定义组件的 `click`, `change` 等事件处理出错，需要安装一下另外一个修改的版本。
```shell
npm i https://github.com/HMingHe/weex-vue-precompiler.git -D
```


## 运行 Demo

```shell
npm i
npm run start
```

## 参考或者直接使用了他们的代码，感谢

[Ant Design Mobile](https://mobile.ant.design/)
[weex-ui](https://github.com/alibaba/weex-ui)
[weex-flymeui](https://github.com/FlymeApps/weex-flymeui)
