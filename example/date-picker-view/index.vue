
<template>
  <div>
    <am-nav-bar title="am-date-picker-view"></am-nav-bar>
    <div>
      <text class="title">开始时间</text>
      <am-date-picker-view
        format="YYYY-MM-DD"
        v-model="start"
      ></am-date-picker-view>
      <text class="title">结束时间</text>
      <am-date-picker-view
        format="YYYY-MM-DD"
        :min-date="start"
        v-model="end"
      ></am-date-picker-view>
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
import { AmButton, AmNavBar, AmDatePickerView } from '../../index'

export default {
  components: { AmButton, AmNavBar, AmDatePickerView },

  computed: {},
  data () {
    return {
      start: '2015-11-11',
      end: '2015-12-12'
    }
  },
  methods: {
    onChange (items) {
      this.changeReturnData = items
    }
  }
}
</script>
