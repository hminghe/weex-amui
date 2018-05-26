
<template>
  <div>
    <am-nav-bar title="am-picker-view"></am-nav-bar>
    <div>
      <am-picker-view
        :data="seasons"
        v-model="value1"
        @change="onChange"
      ></am-picker-view>
      <text class="title">联动</text>
      <am-picker-view
        :data="district"
        v-model="value2"
        @change="onChange"
      ></am-picker-view>
      <scroller>
        <text>value1:{{JSON.stringify(value1)}}</text>
        <text>value2:{{JSON.stringify(value2)}}</text>
        <text>changeReturnData: {{JSON.stringify(changeReturnData)}}</text>
      </scroller>
    </div>
  </div>
</template>

<style scoped>
  .title {
    font-size: 32px;
    text-align: center;
  }
</style>

<script>
import { AmButton, AmNavBar, AmPickerView } from '../../index'

import { seasons, district } from './data'
console.log(seasons, district)

export default {
  components: { AmButton, AmNavBar, AmPickerView },

  computed: {},
  data () {
    return {
      seasons,
      district,
      value1: [],
      value2: [],
      changeReturnData: null
    }
  },
  methods: {
    onChange (items) {
      this.changeReturnData = items
    }
  }
}
</script>
