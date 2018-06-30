<template>
  <slider
    :style="{flex: 1}"
    :infinite="false"
    :index="index"
    @change="handelChange"
  >
    <slot></slot>
  </slider>
</template>

<script>

export default {
  name: 'am-native-tab-container',
  props: {
    index: {
      type: Number,
      default: 0
    },
    width: {
      type: [Number, String],
      default: 750
    }
  },
  methods: {
    handelChange ($event) {
      this.$emit('update:index', $event.index)
      this.$emit('change', $event.index)
    }
  },
  watch: {
    index (val) {
      if (val !== this.index) {
        this.$emit('update:index', val)
      }
    }
  }
}
</script>
