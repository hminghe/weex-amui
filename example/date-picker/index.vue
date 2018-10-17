
<template>
  <div>
    <am-nav-bar title="am-date-picker"></am-nav-bar>
    <scroller>
      <am-list header="基本" footer=" ">
        <am-date-picker
          :show.sync="pickerShow"
          min-date="1900-01-01"
          max-date="2100-01-01"
          title="请选择"
          v-model="value1"
          @ok="onOK"
          @hide="onHide"
          @change="onChange"
        >
          <am-list-item
            slot-scope="{ extra, show }"
            title="title"
            :extra="extra"
            @click="show"
          ></am-list-item>
        </am-date-picker>
        <am-date-picker
          title="日期"
          v-model="value3"
          format="YYYY-MM-DD"
          @ok="onOK"
          @hide="onHide"
          @change="onChange"
          placeholder="点我选择"
        >
          <am-list-item
            slot-scope="{ extra, show }"
            title="日期"
            brief="format=YYYY-MM-DD"
            :extra="extra"
            @click="show"
          ></am-list-item>
        </am-date-picker>
        <am-date-picker
          title="请选择年月"
          v-model="value2"
          format="YYYY年MM月"
          @ok="onOK"
          @hide="onHide"
          @change="onChange"
          placeholder="点我选择"
        >
          <am-list-item
            slot-scope="{ extra, show }"
            title="年月"
            brief="format=YYYY年MM月"
            :extra="extra"
            @click="show"
          ></am-list-item>
        </am-date-picker>
        <am-date-picker
          title="时间"
          v-model="value4"
          format="HH:mm"
          @ok="onOK"
          @hide="onHide"
          @change="onChange"
          placeholder="点我选择"
        >
          <am-list-item
            slot-scope="{ extra, show }"
            title="时间"
            brief="format=HH:mm"
            :extra="extra"
            @click="show"
          ></am-list-item>
        </am-date-picker>
      </am-list>
      <am-wing-blank>
        <am-button @click="pickerShow=true">点我显示</am-button>
      </am-wing-blank>
    </scroller>
  </div>
</template>

<style scoped>

</style>

<script>
import { AmButton, AmList, AmListItem, AmDatePicker, AmWingBlank, AmNavBar } from '../../index'

export default {
  components: { AmButton, AmList, AmListItem, AmDatePicker, AmWingBlank, AmNavBar },

  computed: {},
  data () {
    return {
      value1: '2009-01-03 22:22',
      value2: '',
      value3: '',
      value4: '',
      pickerShow: false
    }
  },
  methods: {
    onHide (type) {
      console.log('hide', type)
    },
    onOK (value) {
      console.log('ok', value)
    },
    onChange (value) {
      console.log('change', value)
    }
  }
}
</script>
