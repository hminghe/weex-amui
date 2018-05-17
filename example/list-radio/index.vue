<template>
  <div>
    <am-nav-bar title="am-list-redio"></am-nav-bar>
    <scroller class="scroller">
      <div>
        <am-list header="单选" :footer="`value=${value}`">
          <am-list-radio
            v-for="item in list"
            :key="item.value"
            :title="item.name"
            :checked="item.value === value"
            @change="value = item.value"
          ></am-list-radio>
          <am-list-radio
            title="自定义颜色(color=red)"
            color="red"
            :checked="value === 5"
            @change="value = 5"
          ></am-list-radio>
          <am-list-radio
            title="标题"
            brief="说明一下"
            align="top"
            :checked="value === 6"
            @change="value = 6"
          ></am-list-radio>
          <am-list-radio
            title="禁用(不能点击)"
            brief="value=1"
            :checked="value === 1"
            @change="value = 1"
            :disabled="true"
          ></am-list-radio>
        </am-list>
        <am-list header="其实也可以把他变成多选" :footer="'value=' + JSON.stringify(value2)">
          <am-list-radio
            v-for="item in list"
            :key="item.value"
            :title="item.name"
            :checked="value2.indexOf(item.value) > -1"
            @change="handleChange(item)"
          ></am-list-radio>
        </am-list>
      </div>
    </scroller>
  </div>
</template>

<script>
import { AmNavBar, AmList, AmListRadio } from '../../index'

export default {
  components: { AmNavBar, AmList, AmListRadio },
  data () {
    return {
      value: 0,
      value2: [1],
      list: Array.from(new Array(3)).map((v, k) => ({
        value: k,
        name: `Radio ${k}`
      }))
    }
  },
  methods: {
    handleChange (item) {
      let index = this.value2.indexOf(item.value)
      if (index > -1) {
        this.value2.splice(index, 1)
      } else {
        this.value2.push(item.value)
      }
    }
  }
}
</script>
