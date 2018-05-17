const itemMixin = {
  computed: {
    _isFirstChild () {
      if ('_isFirstChild' in this.$parent) {
        return this.$parent._isFirstChild
      }
      return this.$parent.$slots.default && this.$parent.$slots.default[0] === this.$vnode
    },
    _isLastChild () {
      if ('_isLastChild' in this.$parent) {
        return this.$parent._isLastChild
      }
      return this.$parent.$slots.default && this.$parent.$slots.default[this.$parent.$slots.default.length - 1] === this.$vnode
    }
  }
}

export default itemMixin
