<template>
  <div :class="gridClass">
    <am-flex
      v-for="(row, rowIndex) in rowArr"
      :key="rowIndex"
      :gutter="0"
      class="am-grid-row"
    >
      <div
        v-for="(item, index) in row"
        :key="index"
        :class="getItemClass(item)"
        :style="_itemStyle"
        @click="handleClick($event, item)"
      >
        <template v-if="item">
          <image
            class="am-grid-icon"
            :style="_iconStyle"
            :src="item.icon"
          />
          <text v-if="item.text" class="am-grid-text">{{item.text}}</text>
        </template>
      </div>
    </am-flex>
  </div>
</template>

<script>
import Utils from '../utils'
import AmFlex from '../am-flex'
import AmFlexItem from '../am-flex-item'

export default {
  name: 'am-grid',
  components: {
    AmFlex,
    AmFlexItem
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    columnNum: {
      type: Number,
      default: 4
    },
    hasLine: {
      type: Boolean,
      default: true
    },
    itemStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    iconStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    rowArr () {
      const rowArr = []
      let rowCount
      this.data.forEach((item, index) => {
        rowCount = Math.floor(index / this.columnNum)
        if (!rowArr[rowCount]) {
          rowArr[rowCount] = []
        }
        rowArr[rowCount].push(item)
      })

      while (rowArr[rowCount].length !== this.columnNum) {
        rowArr[rowCount].push(false)
      }
      return rowArr
    },
    gridClass () {
      return Utils.makeClassList({
        'am-grid': true,
        'am-grid-line': this.hasLine
      })
    },
    itemClass () {
      return Utils.makeClassList({
        'am-grid-item': true,
        'am-grid-item-line': this.hasLine
      })
    },
    itemWidth () {
      return 750 / this.columnNum
    },
    _itemStyle () {
      return {
        height: `${this.itemWidth}px`,
        ...this.itemStyle
      }
    },
    _iconStyle () {
      let width = `${this.itemWidth * 0.28}px`
      return {
        width: width,
        height: width,
        ...this.iconStyle
      }
    }
  },
  methods: {
    handleClick ($event, item) {
      if (item) {
        this.$emit('click', item, this.data.indexOf(item))
      }
    },
    getItemClass (item) {
      return Utils.makeClassList({
        'am-grid-item': true,
        'am-grid-item-line': this.hasLine,
        'am-grid-item-tap': !!item
      })
    }
  }
}
</script>

<style scoped lang="less" src="../../theme/am-grid/index.less">
</style>
