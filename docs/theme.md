## 自定义主题
> `0.1.0` 版本以上支持修改组件的默认样式

!> 如果你是用 `weex create` 创建的项目，下面说到的 `webpack` 的配置是在 `configs/webpack.common.conf.js` 文件里的， `webConfig` 和 `weexConfig` 都要修改！

### 变量修改
1. 下载可配置变量文件放到自己的项目里。 文件：https://github.com/hminghe/weex-amui/blob/master/theme/base/variable.less
2. 修改 `webpack` 配置， 在 `config.resolve.alias` 添加 `'./variable.less': 'src/theme/variable.less'`。
```js
resolve: {
	extensions: ['.js', '.vue', '.json'],
	alias: {
		'@': helper.resolve('src'),
		'./var`iable.less': helper.resolve('src/theme/') + 'variable.less' // 'src/theme' 要修改成你自己的目录
	} 
}
```

### 修改单个组件
1. 下载你要修改的组件放到自己的项目里。 https://github.com/hminghe/weex-amui/blob/master/theme/
2. 修改 `webpack` 配置， 在 `config.resolve.alias` 添加 `'../../theme/am-button': 'src/theme/am-button'`。
```js
resolve: {
	extensions: ['.js', '.vue', '.json'],
	alias: {
		'@': helper.resolve('src'),
		'../../theme/am-button': helper.resolve('src/theme/am-button')
		// 'src/theme/am-button' 要修改成你自己的目录
	} 
}
```

### 修改全部组件
1. 下载`theme`目录放到自己的项目里。 https://github.com/hminghe/weex-amui/blob/master/theme/
2. 修改 `webpack` 配置， 在 `config.resolve.alias` 添加 `'../../theme': 'src/theme'`。
```js
resolve: {
	extensions: ['.js', '.vue', '.json'],
	alias: {
		'@': helper.resolve('src'),
		'../../theme': helper.resolve('src/theme') // 'src/theme' 要修改成你自己的目录
	} 
}
```