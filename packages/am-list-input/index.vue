<template>
  <item
    arrow=""
    :title="title"
    :title-number="titleNumber"
    :tap-active="false"
    :thumb="thumb"
    :thumb-style="thumbStyle"
    :title-disabled="disabled"
  >
    <template slot="thumb">
      <slot name="thumb"></slot>
    </template>
    <template slot="extra">
      <input
        :class="inputClass"
        ref="input"
        :placeholder="placeholder"
        :style="inputStyle"
        :disabled="computeDisabled"
        :value="inputValue"
        :return-key-type="returnKeyType"
        :autofocus="autofocus"
        :max-length="maxLength"
        :max="max"
        :min="min"
        :type="type"
        v-on="inputListeners"
      />
      <slot name="extra">
        <text class="am-list-extra" v-if="extra">{{extra}}</text>
      </slot>
    </template>
  </item>
</template>

<script>
import Item from '../am-list/item.vue'
import itemMixin from '../am-list/item-mixin'
import Utils from '../utils'

export default {
  name: 'am-list-input',
  mixins: [itemMixin],
  components: {
    Item
  },
  props: {
    type: {
      type: String,
      default: 'text' // text，date，datetime，email， password，tel，time，url，number
    },
    value: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleNumber: {
      type: Number,
      default: 5
    },
    placeholder: {
      type: String,
      default: ''
    },
    thumb: {
      type: String,
      default: ''
    },
    thumbStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    align: {
      type: String,
      default: 'left'
    },
    extra: {
      type: String,
      default: ''
    },
    editable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    returnKeyType: {
      type: String,
      default: 'default' // defalut;go;next;search;send,done
    },
    maxLength: {
      type: Number,
      default: null
    },
    max: {
      type: String,
      default: null
    },
    min: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    inputListeners () {
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 除了input事件， 其他事件和weex的input一样
        {
          // 这里确保组件配合 `v-model` 的工作
          input: this.onInput
        }
      )
    },
    inputClass () {
      return Utils.makeClassList({
        'am-list-input': true,
        'am-list-input-disabled': this.disabled,
        'am-list-input-uneditable': this.uneditable
      })
    },
    inputStyle () {
      return {
        textAlign: this.align
      }
    },
    computeDisabled () {
      return this.disabled || !this.editable
    }
  },
  methods: {
    onInput ($event) {
      this.inputValue = $event.value
      // let args = ['input', ...arguments]
      this.$emit('input', this.inputValue)
    },
    // onChange () {
    //   let args = ['change', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onFocus () {
    //   let args = ['focus', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onBlur () {
    //   let args = ['blur', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onReturn () {
    //   let args = ['return', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onLongpress () {
    //   let args = ['longpress', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onAppear () {
    //   let args = ['appear', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onDisappear () {
    //   let args = ['disappear', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    focus () {
      typeof this.$refs.input.focus === 'function' && this.$refs.input.focus()
    },
    blur () {
      typeof this.$refs.input.blur === 'function' && this.$refs.input.blur()
    },
    setSelectionRange (selectionStart, selectionEnd) {
      typeof this.$refs.input.setSelectionRange === 'function' && this.$refs.input.setSelectionRange(selectionStart, selectionEnd)
    },
    getSelectionRange (callback) {
      typeof this.$refs.input.getSelectionRange === 'function' && this.$refs.input.getSelectionRange(callback)
    },
    // 0.18
    setTextFormatter (params) {
      typeof this.$refs.input.setTextFormatter === 'function' && this.$refs.input.setTextFormatter(params)
    }
  },
  watch: {
    value (val) {
      if (this.inputValue !== val) {
        this.inputValue = val
      }
    },
    computeDisabled (val) {
      // web 里动态修改 disabled input 的 value 会被清空
      if (Utils.isWeb()) {
        this.$nextTick(() => {
          this.$refs.input.$el.value = this.inputValue
        })
      }
    }
  },
  mounted () {
    console.log(this.$listeners)
    this.inputValue = this.value
  }
}
</script>

<style scoped lang="less">
@import "../../theme/am-list/input.less";
</style>
