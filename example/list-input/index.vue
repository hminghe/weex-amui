<template>
  <div>
    <am-nav-bar title="am-list-input"></am-nav-bar>
    <scroller class="scroller">
      <div>
        <am-list header="am-list-input">
          <am-list-input v-model="inputValue" title="标题" @change="test" placeholder="请输入内容"></am-list-input>
          <am-list-input v-model="inputValue" title="" placeholder="没有标题"></am-list-input>
          <am-list-input v-model="inputValue" title="标题" placeholder="光标在右" align="right"></am-list-input>
          <am-list-input
            type="number"
            title="价格"
            v-model="inputValue2"
            :title-number="3"
            :autofocus="true"
            placeholder="autofocus"
          ></am-list-input>
          <am-list-input
            title="不可编辑"
            v-model="inputValue"
            :editable="false"
            placeholder="不可编辑"
          >
          </am-list-input>
          <am-list-input
            title="禁用"
            v-model="inputValue"
            :disabled="true"
            placeholder="请输入内容"
          >
          </am-list-input>
          <am-list-input
            v-model="inputValue"
            title="标题"
            :title-number="3"
            :disabled="inputDisbled"
            placeholder="请输入内容"
          >
            <am-switch v-model="inputDisbled" slot="extra"></am-switch>
          </am-list-input>
          <am-list-input
            v-model="inputValue"
            title="多行"
            :title-number="3"
            :singleline="false"
            :lines="5"
            :disabled="inputDisbled"
            placeholder="请输入内容"
          >
          </am-list-input>
        </am-list>
      </div>
    </scroller>
  </div>
</template>

<script>
import { AmNavBar, AmList, AmListItem, AmListInput, AmListRadio, AmButton, AmSwitch } from '../../index'

export default {
  components: { AmNavBar, AmList, AmListItem, AmListRadio, AmListInput, AmButton, AmSwitch },
  data () {
    return {
      inputValue: '',
      inputValue2: '',
      inputDisbled: false
    }
  },
  methods: {
    test (event) {
      console.log(event)
    }
  }
}
</script>
