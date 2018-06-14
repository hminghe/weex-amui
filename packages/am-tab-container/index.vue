
<script>
import Utils from '../utils'
export default {
  name: 'am-tab-container',
  props: {
    index: {
      type: Number,
      default: 0
    },
    animation: {
      type: Boolean,
      default: true
    },
    width: {
      type: [Number, String],
      default: 750
    }
  },
  computed: {
    style () {
      return {
        width: `${this.width * this.$slots.default.filter(VNode => VNode.tag).length}px`,
        transform: `translateX(-${this.width * this.index}px)`
      }
    },
    classList () {
      return Utils.makeClassList({
        'am-tab-container': true,
        'am-tab-container-animation': this.animation
      })
    }
  },
  render (h) {
    return h('div', {
      class: this.classList,
      style: this.style
    }, this.$slots.default)
  }
}
</script>

<style scoped lang="less">
  .am-tab-container {
    flex: 1;
    flex-direction: row;
    flex-wrap: nowrap;
    &-animation {
      transition: transform 0.3s;
    }
  }
</style>
