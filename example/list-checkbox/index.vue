<template>
  <div>
    <am-nav-bar title="am-list-checkbox"></am-nav-bar>
    <scroller class="scroller">
      <div>
        <am-list  header="多选" :footer="`value=${value}`">
          <am-list-checkbox
            v-for="item in list"
            :key="item.value"
            :title="item.name"
            :value="item.value"
            :checked-values.sync="value"
          >
          </am-list-checkbox>
          <am-list-checkbox
            title="自定义颜色(color=red)"
            color="red"
            :value="5"
            :checked-values.sync="value"
          ></am-list-checkbox>
          <am-list-checkbox
            title="标题"
            brief="说明一下"
            align="top"
            :value="6"
            :checked-values.sync="value"
          ></am-list-checkbox>
          <am-list-checkbox
            title="禁用(不能点击)"
            :value="7"
            :checked-values.sync="value"
            :disabled="disabled"
          ></am-list-checkbox>
        </am-list>
        <am-list header="多选(left)" :footer="'value=' + JSON.stringify(value2)">
          <am-list-checkbox
            v-for="item in list"
            :key="item.value"
            :title="item.name"
            left
            :value="item"
            :checked-values.sync="value2"
          ></am-list-checkbox>
        </am-list>
      </div>
    </scroller>
  </div>
</template>

<script>
import { AmNavBar, AmList, AmListCheckbox } from '../../index'

export default {
  components: { AmNavBar, AmList, AmListCheckbox },
  data () {
    return {
      value: [1],
      value2: [1],
      disabled: true,
      list: Array.from(new Array(3)).map((v, k) => ({
        value: k,
        name: `Checkbox ${k}`
      }))
    }
  }
}
</script>
