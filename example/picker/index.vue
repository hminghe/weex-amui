
<template>
  <div>
    <am-nav-bar title="am-picker"></am-nav-bar>
    <scroller>
      <am-list header="和am-list-item一起使用">
        <am-picker
          title="请选择"
          :data="district"
          v-model="value1"
          @ok="onOK"
          @hide="onHide"
        >
          <am-list-item
            slot-scope="{ extra, show }"
            title="地址"
            :extra="extra"
            @click="show"
          ></am-list-item>
        </am-picker>
        <am-picker
          title="请选择"
          :data="seasons"
          v-model="value2"
          @ok="onOK"
          @hide="onHide"
          placeholder="点我选择"
        >
          <am-list-item
            slot-scope="{ extra, show }"
            title="时间"
            :extra="extra"
            @click="show"
          ></am-list-item>
        </am-picker>
      </am-list>
      <am-list header="用其他子组合">
        <am-picker
          :show.sync="pickerShow"
          title="请选择"
          :data="seasons"
          v-model="value3"
          @ok="onOK"
          @hide="onHide"
        >
          <template slot-scope="{ extra, show }">
            <am-wing-blank>
              <am-button
                :text="extra"
                @click="show"
              ></am-button>
            </am-wing-blank>
          </template>
        </am-picker>
      </am-list>
      <am-list header="使用show属性操作显示">
        <am-wing-blank>
          <am-button
            text="点我"
            @click="pickerShow = true"
          ></am-button>
        </am-wing-blank>
      </am-list>
    </scroller>
  </div>
</template>

<style scoped>

</style>

<script>
import { AmButton, AmList, AmListItem, AmPicker, AmWingBlank, AmNavBar } from '../../index'

import { seasons, district } from '../picker-view/data.js'

export default {
  components: { AmButton, AmList, AmListItem, AmPicker, AmWingBlank, AmNavBar },

  computed: {},
  data () {
    return {
      seasons,
      district,
      value1: [],
      value2: [],
      value3: [],
      pickerShow: false
    }
  },
  methods: {
    onHide (type) {
      console.log('hide', type)
    },
    onOK (value, label) {
      console.log('ok', value, label)
    }
  }
}
</script>
