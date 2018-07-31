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
      <am-date-picker-view
        ref="pickerView"
        :value="currentValue"
        v-bind="datePickerViewPrpos"
      ></am-date-picker-view>
    </am-popup>
    <slot :extra="extra" :show="() => {currentShow = true}"></slot>
  </div>
</template>

<script>
import AmPopup from '../am-popup'
import AmNavBar from '../am-nav-bar'
import AmDatePickerView from '../am-date-picker-view'
import ListItemMixin from '../am-list/item-mixin'
import Utils from '../utils'
const prpos = require('../am-date-picker-view/props.js').default()

export default {
  name: 'am-date-picker',
  mixins: [ListItemMixin],
  components: { AmPopup, AmNavBar, AmDatePickerView },
  model: {
    prop: 'value',
    event: 'ok'
  },
  props: {
    ...prpos,
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
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
    }
  },
  data () {
    return {
      currentShow: this.show,
      currentValue: this.value || '',
      selected: null,
      isIPhoneX: Utils.isIPhoneX()
    }
  },
  computed: {
    datePickerViewPrpos () {
      const val = {}
      Object.keys(prpos).forEach(key => {
        if (key !== 'value') {
          val[key] = this[key]
        }
      })
      return val
    },
    extra () {
      return this.currentValue || this.value || this.placeholder
    },
    popupHeight () {
      return 562 + (this.isIPhoneX ? 78 : 0)
    }
  },
  methods: {
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
          this.currentValue = this.$refs.pickerView.strDate
          this.$emit('ok', this.currentValue)
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
      if (val !== this.currentValue) {
        this.currentValue = val
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "~../../theme/am-picker/index.less";
</style>
