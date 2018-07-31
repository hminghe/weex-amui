<template>
  <!-- <div :class="btnClass" :style="btnStyle" @click="handleClick"> -->
    <text
      :class="btnClass"
      :style="_style"
      @touchstart="_touchstart"
      @touchend="_touchend"
      @touchcancel="_touchend"
      @click="handleClick"
    ><slot>{{text}}</slot></text>
    <!-- <div @click="handleClick" v-if="!disabled" class="overlay" ></div> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: 'am-button',
  props: {
    width: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '确认'
    },
    size: {
      type: String,
      default: 'large'
    },
    type: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    btnClass () {
      const classMap = {
        'am-button': true
      }

      classMap[`am-button-${this.type}`] = true
      classMap[`am-button-${this.type}-active`] = !this.disabled && this.active
      classMap[`am-button-${this.type}-disabled`] = this.disabled
      classMap['am-button-small'] = this.size === 'small'
      return Object.keys(classMap).filter(val => classMap[val])
    },
    _style () {
      const _style = this.btnStyle
      if (this.width) {
        _style.width = this.width
      }
      return _style
    }
  },
  methods: {
    _touchstart () {
      this.active = true
    },
    _touchend () {
      this.active = false
    },
    handleClick (event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "~../../theme/am-button/index.less";
</style>
