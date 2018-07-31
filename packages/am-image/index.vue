<template>
  <image
    ref="image"
    :src="src"
    :resize="resize"
    :placeholder="placeholder"
    @load="handleLoad"
    :style="style"
  />
</template>

<script>
const dom = weex.requireModule('dom')
export default {
  name: 'am-image',
  props: {
    autoWidth: {
      type: Boolean,
      default: false
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    resize: {
      type: String,
      default: 'stretch',
      validator (val) {
        return ['cover', 'contain', 'stretch'].indexOf(val) >= 0
      }
    },
    src: {
      type: String,
      default: ''
    },
    imageStyle: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      loaded: false,
      widht: null,
      height: null
    }
  },
  computed: {
    props () {
      const data = {
        src: this.src,
        resize: this.resize
      }
      if (this.placeholder) {
        data.placeholder = this.placeholder
      }
      return data
    },
    style () {
      const style = {
        width: '0.1px',
        height: '0.1px',
        ...this.imageStyle
      }
      if (this.loaded) {
        style.width = this.width ? `${this.width}px` : style.width
        style.height = this.height ? `${this.height}px` : style.height
      }
      return style
    }
  },
  methods: {
    handleLoad ($event) {
      if ($event.success && (this.autoWidth || this.autoHeight)) {
        dom.getComponentRect(this.$refs.image, option => {
          console.log(option)
          if (!option.result) return
          if (this.autoWidth) {
            this.width = option.size.height / $event.size.naturalHeight * $event.size.naturalWidth
          } else {
            this.height = option.size.width / $event.size.naturalWidth * $event.size.naturalHeight
          }
          this.loaded = true
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "~../../theme/am-icon/index.less";
</style>
