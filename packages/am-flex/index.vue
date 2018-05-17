<template>
  <div class="am-flex" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'am-flex',
  props: {
    gutter: {
      type: Number,
      default: 16
    },
    direction: {
      type: String,
      default: 'row',
      validator (value) {
        return ['column', 'row'].indexOf(value) !== -1
      }
    },
    justify: {
      type: String,
      default: 'flex-start',
      validator (value) {
        return ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'].indexOf(value) !== -1
      }
    },
    align: {
      type: String,
      default: 'stretch',
      validator (value) {
        return ['stretch', 'flex-start', 'flex-end', 'center'].indexOf(value) !== -1
      }
    },
    wrap: {
      type: String,
      default: 'nowrap',
      validator (value) {
        return ['nowrap', 'wrap', 'wrap-reverse']
      }
    }
  },
  computed: {
    style () {
      return {
        flexDirection: this.direction,
        justifyContent: this.justify,
        alignItems: this.align,
        flexWrap: this.wrap
      }
    }
  }
}
</script>
