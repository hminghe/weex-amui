<template>
  <div class="am-picker-view">
    <col
      v-for="(items, index) in currentData"
      :key="index"
      :data="items"
      :text-length="textLength"
      :value="selected[index] || null"
      @input="item => onChange(item, index)"
    />
  </div>
</template>

<script>
import Col from './col.vue'
import Utils from '../utils'

export default {
  name: 'am-picker-view',
  components: {
    Col
  },
  props: {
    data: {
      type: Array, // Array<Array<{value, label, children: Array}>>
      default: () => []
    },
    value: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      selected: [],
      currentData: []
    }
  },
  computed: {
    isCascade () {
      return this.data[0] && Utils.isPlainObject(this.data[0])
    },
    selectedValue () {
      return this.selected.map(item => {
        return item.value
      })
    },
    textLength () {
      return parseInt(22 / this.currentData.length - 1)
    }
  },
  methods: {
    init () {
      this.selected = []
      this.currentData = []
      let index = 0
      let current = this.isCascade ? this.data : this.data[index]
      while (current && Array.isArray(current) && current.length) {
        this.currentData.push(current)

        if (this.value && this.value[index] !== undefined) {
          current.some(item => {
            if (item.value === this.value[index]) {
              this.selected[index] = item
              return true
            }
          })
        }

        if (!this.selected[index]) {
          this.selected[index] = current[0]
        }
        index++
        current = this.isCascade ? this.selected[this.selected.length - 1].children : this.data[index]
      }
    },
    // initData () {
    //   console.log('initData')
    //   this.currentData = []
    //   if (this.data[0]) {
    //     if (!this.isCascade) {
    //       this.currentData = this.data
    //     } else {
    //       this.currentData.push(this.data)
    //       let colIndex = 0
    //       while (true) {
    //         const item = this.selected[colIndex] && this.currentData[colIndex].indexOf(this.selected[colIndex]) >= 0 ? this.selected[colIndex] : this.currentData[colIndex][0]
    //         if (item.children && Array.isArray(item.children) && item.children.length > 0) {
    //           this.currentData.push(item.children)
    //           colIndex++
    //         } else {
    //           break
    //         }
    //       }
    //     }
    //   }
    // },
    getCol (index) {
      return this.currentData[index]
    },
    onChange (item, colIndex) {
      this.selected.splice(colIndex, 1, item)
      if (this.isCascade) {
        this.selected.splice(colIndex + 1, this.selected.length - 1)
        this.currentData.splice(colIndex + 1, this.currentData.length - 1)
        let i = colIndex
        while (true) {
          let children = this.selected[i].children
          if (children && Array.isArray(children) && children.length > 0) {
            this.currentData.push(children)
            this.selected.push(children[0])
            i++
          } else {
            break
          }
        }
      }

      this.$emit('change', this.selected)
    }
  },
  created () {
    this.init()
  },
  watch: {
    value (val) {
      if (val.join() !== this.selectedValue.join()) {
        this.init()
      }
    },
    selectedValue (val) {
      if (this.value && val.join() !== this.value.join()) {
        this.$emit('input', this.selectedValue)
      }
    },
    data () {
      this.init()
    }
  }
}
</script>

<style lang="less">
@import '~../../theme/am-picker/view.less';

</style>
