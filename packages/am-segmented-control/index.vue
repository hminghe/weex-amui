<template>
  <div
    :class="segmentClass"
  >
    <text
      v-for="(value, index) in values"
      :key="index"
      :class="getItemClass(index)"
      :style="getSegmentItemStyle(index)"
      @click="handleClick(index, value)"
    >{{value}}</text>
  </div>
</template>

<script>
import Utils from '../utils/index.js'

export default {
  name: 'am-segmented-control',
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    values: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tintColor: {
      type: String,
      default: null
    }
  },
  computed: {
    segmentClass () {
      return Utils.makeClassList({
        'am-segment': true,
        'am-segment-disabled': this.disabled
      })
    }
  },
  methods: {
    getItemClass (index) {
      return Utils.makeClassList({
        'am-segment-item': true,
        'am-segment-item-first': index === 0,
        'am-segment-item-last': index === this.values.length - 1,
        'am-segment-item-selected': this.selected === index
      })
    },
    getSegmentItemStyle (index) {
      const style = {}
      if (this.tintColor) {
        style.borderColor = this.tintColor
        if (this.selected === index) {
          style.backgroundColor = this.tintColor
          style.color = '#ffffff'
        } else {
          style.color = this.tintColor
        }
      }
      return style
    },
    handleClick (index, value) {
      if (this.disabled) return
      this.$emit('change', index, value)
    }
  }
}
</script>

<style scoped lang="less">
@import "../../theme/am-segmented-control/index.less";
</style>
