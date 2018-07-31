<template>
  <div class="am-picker">
    <am-popup
      ref="popup"
      :show="currentShow"
      :auto-close="false"
      @clickMask="handleMaskClick"
      :height="popupHeight"
    >
      <am-nav-bar
        class="am-picker-header"
        mode="light"
        :title="title"
        :left-btn="[{is: 'text', text: dismissText, key: 'dismiss'}]"
        :right-btn="[{is: 'text', text: okText, key: 'ok'}]"
        @click="handleHeaderClick"
      ></am-nav-bar>
      <am-picker-view
        :data="data"
        :value="currentValue"
        ref="pickerView"
      ></am-picker-view>
    </am-popup>
    <slot :extra="extra" :show="() => {currentShow = true}"></slot>
  </div>
</template>

<script>
import AmPopup from '../am-popup'
import AmNavBar from '../am-nav-bar'
import AmPickerView from '../am-picker-view'
import ListItemMixin from '../am-list/item-mixin'
import Utils from '../utils'

export default {
  name: 'am-picker',
  mixins: [ListItemMixin],
  components: { AmPopup, AmNavBar, AmPickerView },
  model: {
    prop: 'value',
    event: 'ok'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array, // Array<Array<{value, label, children: Array}>>
      default: () => []
    },
    value: {
      type: Array,
      default: null
    },
    okText: {
      type: String,
      default: '确定'
    },
    dismissText: {
      type: String,
      default: '取消'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    format: {
      type: [Function, String],
      default: (lables) => lables.join(',')
    }
  },
  data () {
    return {
      currentShow: this.show,
      currentValue: this.value || [],
      selected: null,
      isIPhoneX: Utils.isIPhoneX()
    }
  },
  computed: {
    lables () {
      return this.selected ? this.selected.map(item => item.label) : []
    },
    extra () {
      return this.format(this.lables) || this.placeholder
    },
    popupHeight () {
      return 562 + (this.isIPhoneX ? 78 : 0)
    }
  },
  methods: {
    initData () {
      if (this.currentValue) {
        const isCascade = this.data[0] && Utils.isPlainObject(this.data[0])
        this.selected = []
        this.currentValue.some((value, index) => {
          let current = isCascade
            ? (index === 0 ? this.data : this.selected[index - 1].children)
            : this.data[index]

          current.some(item => {
            if (item.value === this.currentValue[index]) {
              this.selected[index] = item
              return true
            }
          })
          return !this.selected[index]
        })
      }
    },
    close (type = 'dismiss') {
      this.$emit('hide', type)
      this.currentShow = false
    },
    handleMaskClick () {
      this.close('dismiss')
    },
    handleHeaderClick (type) {
      switch (type) {
        case 'ok':
          this.selected = [...this.$refs.pickerView.selected]
          this.currentValue = [...this.$refs.pickerView.selectedValue]
          this.$emit('ok', this.currentValue, this.lables)
          this.close('ok')
          break
        case 'dismiss':
          this.close('dismiss')
          break
      }
    }
  },
  watch: {
    currentShow (val) {
      if (this.show !== val) {
        this.$emit('update:show', val)
      }
    },
    show (val) {
      if (this.currentShow !== val) {
        this.currentShow = val
      }
    },
    value (val) {
      if (val.join() !== this.currentValue.join()) {
        this.currentValue = val
        this.initData()
      }
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<style scoped lang="less">
@import "~../../theme/am-picker/index.less";
</style>
