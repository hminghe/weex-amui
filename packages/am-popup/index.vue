<template>
  <div v-if="currentShow">
    <am-mask
      :show="maskShow"
      :auto-close="false"
      :animation="true"
      :animation-duration="150"
      :offset="offset"
      @click="handleClickMask"
    ></am-mask>
    <div
      class="am-popup-wrap"
      :style="wrapStyle"
      @click="()=>{}"
      ref="wrap"
    >
      <div class="am-popup" ref="popup" :style="popupStyle">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AmMask from '../am-mask'
const animation = weex.requireModule('animation')
export default {
  name: 'am-popup',
  components: { AmMask },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    height: {
      type: [Number, String],
      default: 750
    },
    width: {
      type: [Number, String],
      default: 750
    },
    position: {
      type: String,
      default: 'bottom',
      validator (val) {
        return ['top', 'right', 'left', 'bottom'].indexOf(val) >= 0
      }
    },
    offset: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      currentShow: this.show,
      maskShow: false,
      wrapBaseStyle: {}
    }
  },
  computed: {
    popupStyle () {
      return {
        transform: this.transformHide
      }
    },
    wrapStyle () {
      const style = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: this.width + 'px',
        height: this.height + 'px'
      }
      Object.keys(this.offset).forEach(key => {
        style[key] = `${this.offset[key]}px`
      })
      switch (this.position) {
        case 'top':
          delete style.bottom
          delete style.width
          break
        case 'right':
          delete style.left
          delete style.height
          break
        case 'bottom':
          delete style.top
          delete style.width
          break
        case 'left':
          delete style.right
          delete style.height
          break
      }
      return style
    },
    transformShow () {
      return this.transformHide.replace(/\d+/, 0)
    },
    transformHide () {
      let transform
      switch (this.position) {
        case 'top':
          transform = `translateY(-${this.height}px)`
          break
        case 'right':
          transform = `translateX(${this.width}px)`
          break
        case 'bottom':
          transform = `translateY(${this.height}px)`
          break
        case 'left':
          transform = `translateX(-${this.width}px)`
          break
      }
      return transform
    }
  },
  methods: {
    handleClickMask () {
      this.$emit('clickMask')
      if (this.autoClose) {
        this.switch(false)
      }
    },
    handleClick ($event) {
      this.$emit('click', $event)
      if (this.autoClose) {
        this.switch(false)
      }
    },
    setShow (show) {
      this.currentShow = show
      this.$emit('update:show', show)
    },
    switch (show) {
      this.maskShow = show
      if (show) {
        this.setShow(show)
      }

      setTimeout(() => {
        animation.transition(this.$refs.popup, {
          styles: {
            transform: show ? this.transformShow : this.transformHide
          },
          duration: 150, // ms
          timingFunction: 'ease'
        }, () => {
          show || this.setShow(show)
        })
      }, 50)
    }
  },
  watch: {
    show (val) {
      if (val !== this.currentShow) {
        this.switch(val)
      }
    }
  },
  created () {
    if (this.show) {
      this.switch(true)
    }
  }
}
</script>

<style scoped>
.am-popup {
  position: absolute;
  background-color: #ffffff;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.am-popup-wrap {
  position: fixed;
  overflow: hidden;
  /* transition-property: height, width;
  transition-duration: 0.2s;
  transition-delay: 0s;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0); */
}
</style>
