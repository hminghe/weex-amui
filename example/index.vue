<template>
  <div>
    <am-nav-bar
      title="Demo"
      :left-btn="[]"
    ></am-nav-bar>
    <scroller>
      <am-list header="布局">
        <am-list-item
          title="am-flex Flex布局"
          @click="handleClick('am-flex')"
        />
        <am-list-item
          title="am-wing-blank 两翼留白"
          @click="handleClick('am-wing-blank')"
        />
        <am-list-item
          title="white-space 上下留白"
          @click="handleClick('am-white-space')"
        />
      </am-list>
      <am-list header="导航">
        <am-list-item
          title="am-nav-bar 导航栏"
          @click="handleClick('am-nav-bar')"
        />
      </am-list>
      <am-list header="数据输入">
        <am-list-item
          title="am-button 按钮"
          @click="handleClick('am-button')"
        />
        <am-list-item
          title="am-checkbox 复选框"
          @click="handleClick('am-checkbox')"
        />
        <am-list-item
          title="am-list-checkbox 复选框"
          @click="handleClick('am-list-checkbox')"
        />
        <am-list-item
          title="am-list-input 输入框"
          @click="handleClick('am-list-input')"
        />
        <am-list-item
          title="am-list-radio 单选框"
          @click="handleClick('am-list-radio')"
        />
        <am-list-item
          title="am-list-textarea 多行输入"
          @click="handleClick('am-list-textarea')"
        />
        <am-list-item
          title="am-switch 开关"
          @click="handleClick('am-switch')"
        />
      </am-list>
      <am-list
        header="数据展示"
      >
        <am-list-item
          title="am-grid 宫格"
          @click="handleClick('am-grid')"
        />
        <am-list-item
          title="am-icon 图标"
          @click="handleClick('am-icon')"
        />
        <am-list-item
          title="am-list 列表"
          @click="handleClick('am-list')"
        />
      </am-list>
    </scroller>
  </div>
</template>

<script>
import { AmNavBar, AmList, AmListItem, Utils } from '../index'
const navigator = weex.requireModule('navigator')

export default {
  components: { AmNavBar, AmList, AmListItem },
  data () {
    return {}
  },
  methods: {
    handleClick (name) {
      console.log(name)
      name = name.replace('am-', '')
      const suffix = Utils.isWeb() ? 'html' : 'js'
      let url = `${name}/index.${suffix}`
      console.log(url)
      url = weex.config.bundleUrl.replace(`index.${suffix}`, url)
      console.log('url', url)
      navigator.push({
        url: url,
        animated: 'true'
      })
    }
  }
}
</script>
