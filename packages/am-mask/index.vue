<template>
  <div
    v-if="currentShow"
    ref="mask"
    class="am-mask"
    :style="style"
    @click="handleClick"
  >
  </div>
</template>

<script>
const animation = weex.requireModule('animation')
export default {
  name: 'am-mask',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    offset: {
      type: Object,
      default: () => ({})
    },
    animation: {
      type: Boolean,
      default: false
    },
    animationTimingFunction: {
      type: Array,
      default: () => ['ease-in', 'ease-out']
    },
    animationDuration: {
      type: [Number, String],
      default: 300
    }
  },
  data () {
    return {
      currentShow: this.show
    }
  },
  computed: {
    style () {
      const style = {}
      Object.keys(this.offset).forEach(key => {
        style[key] = `${this.offset[key]}px`
      })
      style.backgroundColor = `rgba(0, 0, 0,${!this.animation ? this.opacity : 0.1})`
      return style
    }
  },
  methods: {
    handleClick ($event) {
      this.$emit('click', $event)
      if (this.autoClose) {
        this.switch(false)
      }
    },
    switch (show) {
      if (show || !this.animation) {
        this.currentShow = show
        this.$emit('update:show', show)
      }
      if (this.animation) {
        setTimeout(() => {
          animation.transition(this.$refs.mask, {
            styles: {
              backgroundColor: `rgba(0, 0, 0, ${show ? this.opacity : 0})`
            },
            duration: this.animationDuration, // ms
            timingFunction: this.animationTimingFunction[show ? 0 : 1]
          }, () => {
            if (!show) {
              this.currentShow = false
              this.$emit('update:show', false)
            }
          })
        }, 50)
      }
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

<style>
.am-mask {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
</style>
