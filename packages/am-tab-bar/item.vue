<template>
  <div class="am-tab-bar-item" @click="handelClick">
    <div class="am-tab-bar-item-wrap">
      <am-icon
        v-if="icon"
        class="am-tab-bar-item-icon"
        v-bind="iconProps"
      ></am-icon>
      <image
        v-else-if="image"
        class="am-tab-bar-item-image"
        :src="selected && imageActive ? imageActive : image"
        :style="imageStyle"
      />
      <div class="am-tab-bar-item-dot" v-if="dot"></div>
    </div>
      <text
        v-if="title"
        :style="textStyle"
        class="am-tab-bar-item-title"
      >{{title}}</text>
    <slot></slot>
  </div>
</template>

<script>
// import Utils from '../utils'
import AmIcon from '../am-icon'

export default {
  name: 'am-tab-bar-item',
  components: { AmIcon },
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: [Number, String],
      default: null
    },
    iconFontFamily: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    imageActive: {
      type: String,
      default: null
    },
    imageSize: {
      type: [Number, Array],
      default: null // [width, height]
    },
    title: {
      type: String,
      default: null
    },
    tintColor: {
      type: String,
      default: null
    },
    unselectedTintColor: {
      type: String,
      default: null
    },
    dot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    textStyle () {
      return {
        color: this.selected
          ? (this.tintColor || this.$parent.tintColor)
          : (this.unselectedTintColor || this.$parent.unselectedTintColor)
      }
    },
    iconProps () {
      const props = {
        type: this.icon,
        color: this.textStyle.color
      }
      if (this.iconFontFamily || this.$parent.iconFontFamily) {
        props.fontFamily = this.iconFontFamily || this.$parent.iconFontFamily
      }
      if (this.iconSize || this.$parent.iconSize) {
        props.size = this.iconSize || this.$parent.iconSize
      }
      return props
    },
    imageStyle () {
      const style = {}

      if (this.imageSize || this.$parent.imageSize) {
        const size = this.imageSize || this.$parent.imageSize
        if (Array.isArray(size)) {
          style.width = size[0] + 'px'
          style.height = size[1] + 'px'
        } else {
          style.width = size + 'px'
          style.height = size + 'px'
        }
      }
      return style
    }
  },
  methods: {
    handelClick ($event) {
      console.log('click')
      this.$emit('click', $event)
    }
  }
}
</script>

<style  scoped lang="less">
@import "../../theme/am-tab-bar/item.less";
</style>
