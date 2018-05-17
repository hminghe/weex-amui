<template>
<!-- arrow=""
    :title="title"
    :thumb="thumb"
    :title-disabled="disabled"
    :tap-active="!disabled"
    :brief="brief"
    :align="align" -->
  <item
    v-bind="itemProps"
    @click="handleClick"
  >
    <template slot="brief">
      <slot name="brief"></slot>
    </template>
    <template :slot="!left ? 'thumb' : 'extra'">
      <slot :name="!left ? 'thumb' : 'extra'"></slot>
    </template>
    <am-checkbox
      :class="classList"
      :slot="left ? 'thumb' : 'extra'"
      :checked="checked"
      :disabled="disabled"
      :color="color"
    >
    </am-checkbox>
  </item>
</template>

<script>
import Utils from '../utils/'
import Item from '../am-list/item.vue'
import AmCheckbox from '../am-checkbox'
import itemMixin from '../am-list/item-mixin'
import itemProps from '../am-list/item-props'

const props = itemProps()
props.arrow.default = 'empty'
delete props.tapActive

export default {
  name: 'am-list-checkbox',
  components: {
    Item,
    AmCheckbox
  },
  mixins: [itemMixin],
  props: {
    ...props,
    value: {},
    checkedValues: {
      type: Array,
      default () {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
    },
    left: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      return Utils.makeClassList({
        'am-list-checkbox-left': this.left
      })
    },
    checked () {
      return this.checkedValues.indexOf(this.value) > -1
    },
    itemProps () {
      const itemProps = {}
      Object.keys(props).map(name => {
        itemProps[name] = this[name]
      })
      itemProps.titleDisabled = this.disabled
      itemProps.tapActive = !this.disabled
      return itemProps
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      let data = [...this.checkedValues]
      if (this.checked) {
        data.splice(this.checkedValues.indexOf(this.value), 1)
      } else {
        data.push(this.value)
      }
      this.$emit('update:checkedValues', data)
      // this.$emit('change', data)
    }
  }
}
</script>

<style scoped lang="less" src="../../theme/am-list/checkbox.less">

</style>
