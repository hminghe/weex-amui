
<template>
  <div :class="['am-tabs-wrap', `am-tabs-wrap-${tabDirection}`]">
    <component
      :is="itemStyle.flex === 1 ? 'div' : 'scroller'"
      :class="['am-tabs', `am-tabs-${tabDirection}`, `am-tabs-${tabBarPosition}`]"
      :scroll-direction="tabDirection"
    >
      <div
        v-for="(title, index) in tabs"
        :key="index"
        :class="['am-tabs-item', `am-tabs-item-${tabDirection}`]"
        :style="itemStyle"
        @click="handleClick(index, title)"
      >
        <text
          :class="['am-tabs-item-text', selected === index ? 'am-tabs-item-text-selected' : '']"
        >{{title}}</text>
        <div
          v-if="selected === index"
          :class="['am-tabs-item-underline', `am-tabs-item-underline-${tabBarPosition}`]"
          :style="underlineStyle"
        ></div>
      </div>
    </component>
  </div>
</template>

<script>
import Utils from '../utils/index.js'

export default {
  name: 'am-tabs',
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Number,
      default: 0
    },
    tabBarPosition: {
      type: String,
      default: 'top' // top, bottom, left, right
    },
    // tabDirection: {
    //   type: String,
    //   default: 'horizontal' // 'horizontal' | 'vertical'
    // },
    tabWidth: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      isWeb: Utils.isWeb()
    }
  },
  computed: {
    tabDirection () {
      return this.tabBarPosition === 'top' || this.tabBarPosition === 'bottom' ? 'horizontal' : 'vertical'
    },
    underlineStyle () {
      const style = {}
      if (this.tabBarPosition === 'top' || this.tabBarPosition === 'bottom') {

      }
      return style
    },
    itemStyle () {
      const style = {}
      if (this.tabWidth) {
        style.width = this.tabWidth + 'px'
      } else if (this.tabDirection === 'horizontal') {
        style.flex = 1
      }
      return style
    }
  },
  methods: {
    handleClick (index, value) {
      if (this.disabled) return
      this.$emit('change', index, value)
    }
    // renderMain (h) {
    //   return this.tabs.map((title, index) => {
    //     return h(
    //       'div',
    //       {
    //         key: index,
    //         ref: 'tab',
    //         'class': ['am-tabs-item', `am-tabs-item-${this.tabDirection}`],
    //         style: this.itemStyle,
    //         on: {
    //           click: () => this.handleClick(index, title)
    //         }
    //       },
    //       [
    //         h('text', {'class': ['am-tabs-item-text', this.selected === index ? 'am-tabs-item-text-selected' : '']}, [title])
    //       ]
    //     )
    //   })
    // }
  }

  // render (h) {
  //   return h('div', {'class': ['am-tabs-wrap', `am-tabs-wrap-${this.tabDirection}`]}, [
  //     h(this.itemStyle.flex === 1 ? 'div' : 'scroller', {
  //       'class': ['am-tabs', `am-tabs-${this.tabDirection}`, `am-tabs-${this.tabBarPosition}`]
  //     }, this.renderMain(h))
  //   ])
  // }
}
</script>

<style scoped lang="less">
@import "~../../theme/am-tabs/index.less";
</style>
