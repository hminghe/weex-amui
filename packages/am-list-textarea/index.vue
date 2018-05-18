<template>
  <item
    arrow=""
    :title="title"
    :title-number="titleNumber"
    :tap-active="false"
    :thumb="thumb"
    :title-disabled="disabled"
    align="top"
    :multiple="true"
  >
    <template slot="thumb">
      <slot name="thumb"></slot>
    </template>
    <template slot="extra">
      <textarea
        :class="textareaClass"
        ref="textarea"
        :placeholder="placeholder"
        :style="textareaStyle"
        :disabled="computeDisabled"
        :value="textareaValue"
        :return-key-type="returnKeyType"
        :autofocus="autofocus"
        :rows="computeRows"
        v-on="textareaListeners"
      ></textarea>
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
  name: 'am-list-textarea',
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
      default: null
    },
    title: {
      type: String,
      default: null
    },
    titleNumber: {
      type: Number,
      default: 5
    },
    placeholder: {
      type: String,
      default: null
    },
    rows: {
      type: Number,
      default: 2
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    thumb: {
      type: String,
      default: null
    },
    align: {
      type: String,
      default: 'left'
    },
    extra: {
      type: String,
      default: null
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
      default: null // defalut;go;next;search;send,done
    }
  },
  data () {
    return {
      textareaValue: ''
    }
  },
  computed: {
    textareaListeners () {
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
    textareaClass () {
      return Utils.makeClassList({
        'am-list-textarea': true,
        // 'am-list-textarea-auto-height': this.autoHeight,
        'am-list-textarea-disabled': this.disabled,
        'am-list-textarea-uneditable': this.uneditable
      })
    },
    textareaStyle () {
      return {
        textAlign: this.align
      }
    },
    computeDisabled () {
      return this.disabled || !this.editable
    },
    computeRows () {
      if (this.autoHeight) {
        return Math.max(this.rows, this.textareaValue.split('\n').length)
      }
      return this.rows
    },
    placeholderText () {
      return this.textareaValue
    }
  },
  methods: {
    onInput ($event) {
      this.textareaValue = $event.value
      this.$emit('input', this.textareaValue)
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
      typeof this.$refs.textarea.focus === 'function' && this.$refs.textarea.focus()
    },
    blur () {
      typeof this.$refs.textarea.blur === 'function' && this.$refs.textarea.blur()
    },
    setSelectionRange (selectionStart, selectionEnd) {
      typeof this.$refs.textarea.setSelectionRange === 'function' && this.$refs.textarea.setSelectionRange(selectionStart, selectionEnd)
    },
    getSelectionRange (callback) {
      typeof this.$refs.textarea.getSelectionRange === 'function' && this.$refs.textarea.getSelectionRange(callback)
    },
    // 0.18
    setTextFormatter (params) {
      typeof this.$refs.textarea.setTextFormatter === 'function' && this.$refs.textarea.setTextFormatter(params)
    }
  },
  watch: {
    value (val) {
      if (this.textareaValue !== val) {
        this.textareaValue = val
      }
    },
    computeDisabled (val) {
      // web 里动态修改 disabled input 的 value 会被清空
      if (Utils.isWeb()) {
        this.$nextTick(() => {
          this.$refs.textarea.$el.value = this.textareaValue
        })
      }
    },
    computeRows () {
      if (Utils.isWeb()) {
        this.$nextTick(() => {
          this.$refs.textarea.$el.value = this.textareaValue
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "../../theme/am-list/textarea.less";
</style>
