
<template>
  <div class="demo">
    <am-nav-bar title="分段器"></am-nav-bar>
    <scroller>
      <am-wing-blank>
        <am-white-space></am-white-space>
        <am-segmented-control
          v-model="selected"
          @change="change"
          :values="['Segment1', 'Segment2', 'Segment3']"
        />
      </am-wing-blank>
      <am-wing-blank>
        <am-white-space></am-white-space>
        <am-segmented-control
          disabled
          v-model="selected"
          @change="change"
          :values="['Segment1', 'Segment2', 'Segment3']"
        />
      </am-wing-blank>
      <am-wing-blank>
        <am-white-space></am-white-space>
        <am-segmented-control
          v-model="selected"
          tint-color="#ff0000"
          @change="change"
          :values="['Segment1', 'Segment2', 'Segment3']"
        />
      </am-wing-blank>
      <am-wing-blank>
        <am-white-space></am-white-space>
        <am-segmented-control
          v-model="selected"
          :style="{ width: '500px' }"
          @change="change"
          :values="['Segment1', 'Segment2', 'Segment3']"
        />
      </am-wing-blank>
    </scroller>
  </div>
</template>

<style lang="less" scoped>
  .demo {
    background-color: #f5f5f9;
  }
</style>

<script>
import { AmNavBar, AmSegmentedControl, AmWhiteSpace, AmWingBlank } from '../../index'
const modal = weex.requireModule('modal')

export default {
  components: { AmNavBar, AmSegmentedControl, AmWhiteSpace, AmWingBlank },
  data () {
    return {
      selected: 0
    }
  },
  methods: {
    change (index, value) {
      modal.toast({
        message: `index:${index},value:${value}`
      })
    }
  }
}
</script>
