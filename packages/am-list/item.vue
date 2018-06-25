<template>
  <div class="am-list-item" :class="itemClass" @click="handleClick">
    <slot name="thumb">
      <image
        v-if="thumb"
        class="am-list-thumb"
        :src="thumb"
        :style="thumbStyle"
      />
    </slot>
    <div class="am-list-line" :class="lineClass">
      <div v-if="!!title" :class="['am-list-content', `am-list-content-text-${titleNumber}`]">
        <text class="am-list-content-text" :class="contentTextClass">{{title}}</text>
        <slot name="brief">
          <text class="am-list-content-brief" v-if="brief">{{brief}}</text>
        </slot>
      </div>
      <slot name="extra">
        <text class="am-list-extra" v-if="extra">{{extra}}</text>
      </slot>
      <!-- <image
        v-if="showArrow"
        class="am-list-arrow"
        :class="arrowClass"
        :src="arrowUrl"
        /> -->
      <am-icon
        v-if="showArrow"
        class="am-list-arrow"
        :type="arrow"
        site="xxs"
      ></am-icon>
    </div>
  </div>
</template>

<script>
import Utils from '../utils'
import props from './item-props'
import itemMixin from './item-mixin'
import AmIcon from '../am-icon'
// const arrowUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABnUlEQVRYR82XTW7CMBCFZzRehFW5SYlKkbwq3ABOULgBPQm9QekJ4AbQDUioKHCTsCKLRFMZRJVWceKfRG2WiZ332TOeN0YoeaIoaidJtiCil14vPJSNdf2GuolK/HxOV4jYYYYYkUdSPq5dhXTztADb7eccAJ5/TsSJlA/qfW1P6Q4kSboEwKcmIbQAN9Gmd6ISQIEUQ8Bcyu7ENxZGAE1CGAM0BWEFUAKxDgIahWEY24bEGkAJbDb7KSLP8mLMfGi1xMAWwgnguhP7MQC/+UI4A5RBCCEmpqXbC0APAbEQNDCB8AbwhagFIAfxCgB3t7wwMbHaAJTobhd1sixTjvkNcYXRm1jtAGmarRChbWpgtQGoY8nMs1/iJwAelvURtQAU1QQAOBFRv+okeAP4iF+yw7Z258drxI9ENK5a+e0/zgA68SCgvo0fOAEUmREAHG3FnUJQ3B3xRxCIoc3KnUKgac3epeyOXXPJOARNiBuHoClxI4A/a8vzVzPTuu6SB//9anax1ntV16tMxWX1lTlwvZ6nSyIxNS2ttiBf02PsISPWB9wAAAAASUVORK5CYII='
export default {
  name: 'am-list-item',
  components: {AmIcon},
  mixins: [itemMixin],
  props: props(),
  data () {
    return {
      // arrowUrl: arrowUrl
    }
  },
  inject: ['noBorder'],
  computed: {
    showArrow () {
      return this.arrow && this.arrow !== 'empty'
    },
    itemClass () {
      return Utils.makeClassList({
        'am-list-item-tap': this.tapActive,
        'am-list-item-first': !this.noBorder && this._isFirstChild,
        'am-list-item-last': !this.noBorder && this._isLastChild
      })
    },
    lineClass () {
      return Utils.makeClassList({
        'am-list-line-border': !this.noBorder,
        'am-list-line-align-top': this.align === 'top',
        'am-list-line-align-middle': this.align === 'middle',
        'am-list-line-align-bottom': this.align === 'bottom',
        // 'am-list-line-multiple': this.multiple || !!this.brief,
        'am-list-line-last': this._isLastChild
      })
    },
    // arrowClass () {
    //   return Utils.makeClassList({
    //     'am-list-arrow-vertical': this.arrow === 'down',
    //     'am-list-arrow-vertical-up': this.arrow === 'up'
    //   })
    // },
    contentTextClass () {
      return Utils.makeClassList({
        'am-list-content-text-disabled': this.titleDisabled
      })
    }
  },
  methods: {
    handleClick ($event) {
      this.$emit('click', $event)
    }
  }
}
</script>

<style scoped lang="less">
@import "../../theme/am-list/item.less";
</style>
