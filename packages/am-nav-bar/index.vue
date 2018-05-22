<template>
  <div :class="['am-nav-bar', `am-nav-bar-${mode}`]">
    <div class="am-nav-bar-left">
      <slot name="left">
        <div
          v-for="(item, index) in left"
          :key="index"
          :class="['am-nav-bar-btn', `am-nav-bar-${mode}-btn`]"
          @click="handleClick(item)"
        >
          <am-icon
            v-if="item.is === 'icon'"
            :type="item.type"
            :class="['am-nav-bar-btn-icon', `am-nav-bar-${mode}-btn-icon`]"
          />
          <text
            v-else-if="item.is === 'text'"
            :class="['am-nav-bar-btn-text', `am-nav-bar-${mode}-btn-text`]"
          >{{item.text}}</text>
          <!-- <image v-else-if="item.is === 'image'" :src="item.src"/> -->
        </div>
      </slot>
    </div>
    <slot name="title">
      <text @click="handleClick({key: 'title'})" :class="['am-nav-bar-title', `am-nav-bar-${mode}-title`]">{{title}}</text>
    </slot>
    <div class="am-nav-bar-right">
      <slot name="right">
        <div
          v-for="(item, index) in right"
          :key="index"
          @click="handleClick(item)"
          :class="['am-nav-bar-btn', `am-nav-bar-${mode}-btn`]"
        >
          <am-icon
            v-if="item.is === 'icon'"
            :type="item.type"
            :class="['am-nav-bar-btn-icon', `am-nav-bar-${mode}-btn-icon`]"
          />
          <text
            v-else-if="item.is === 'text'"
            :class="['am-nav-bar-btn-text', `am-nav-bar-${mode}-btn-text`]"
          >{{item.text}}</text>
          <!-- <image v-else-if="item.is === 'image'" :src="item.src"/> -->
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
// import Utils from '../utils/index'
import AmIcon from '../am-icon/index'
const Navigator = weex.requireModule('navigator')

export default {
  name: 'am-nav-bar',
  props: {
    mode: {
      type: String,
      default: 'dark' // dark, light
    },
    title: {
      type: String,
      default: null
    },
    leftBtn: {
      type: Array,
      default: () => [{
        is: 'icon',
        type: 'left',
        onClick () {
          Navigator.pop({}, e => {})
        }
      }]
    },
    rightBtn: {
      type: Array,
      default: () => []
    }
  },
  components: { AmIcon },
  computed: {
    navBarClass () {
      return [
        `am-nav-bar-${this.mode}`
      ]
    },
    titleClass () {
      return [
        `am-nav-bar-${this.mode}-title`
      ]
    },
    left () {
      return this.makeBtn(this.leftBtn)
    },
    right () {
      return this.makeBtn(this.rightBtn)
    }
  },
  methods: {
    makeBtn (btns) {
      return btns.map(item => {
        let option = item
        if (typeof item === 'string') {
          option = {
            is: 'icon',
            type: item
          }
        }
        return option
      })
    },
    handleClick (item) {
      if (typeof item.onClick === 'function') {
        item.onClick()
      } else {
        this.$emit('click', item.key || item.type || item.text || item.src)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "../../theme/am-nav-bar/index.less";
</style>
