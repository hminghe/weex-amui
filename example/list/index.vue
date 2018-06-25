<template>
  <div>
    <am-nav-bar title="am-list"></am-nav-bar>
    <scroller class="scroller">
      <div>
        <am-list
          header="基础样式"
          footer="Footer"
        >
          <am-list-item
            title="标题"
            extra="extra content"
          ></am-list-item>
        </am-list>
        <am-list
          header="没有边框"
          footer="Footer"
          no-border
        >
          <am-list-item
            title="标题"
            extra="extra content"
          ></am-list-item>
          <am-list-item
            title="标题"
            extra="extra content"
          ></am-list-item>
        </am-list>
        <am-list header="am-list-input">
          <am-list-input v-model="inputValue" title="标题" placeholder="请输入内容"></am-list-input>
          <am-list-input v-model="inputValue" title="" placeholder="没有标题"></am-list-input>
          <am-list-input v-model="inputValue" title="标题" placeholder="光标在右" align="right"></am-list-input>
          <am-list-input
            type="number"
            title="价格"
            v-model="inputValue2"
            :title-number="3"
            placeholder="请输入内容"
          ></am-list-input>
          <am-list-input
            title="标题"
            v-model="inputValue"
            :title-number="3"
            :disabled="true"
            placeholder="请输入内容"
          >
            <am-switch slot="extra"></am-switch>
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
        </am-list>
        <am-list
          header="带图标"
        >
          <am-list-item
            title="钱包"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          ></am-list-item>
            <am-list-item
            title="图表"
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          ></am-list-item>
        </am-list>
        <am-list
          header="带描述"
        >
          <am-list-item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            title="钱包"
            brief="余额：100元"
          ></am-list-item>
          <am-list-item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            title="图表"
            brief="这里很长长长长长这里很长长长长长这里很长长长长长这里很长长长长长"
          ></am-list-item>
        </am-list>
        <am-list
          header="Test"
        >
          <am-list-item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow=""
            :tap-active="false"
            title="按钮"
          ><am-button size="small" slot="extra"></am-button></am-list-item>
          <am-list-item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow=""
            title="开关"
            :tap-active="false"
          ><switch size="small" slot="extra"></switch></am-list-item>
        </am-list>
      </div>
    </scroller>
  </div>
</template>

<script>
import { AmNavBar, AmList, AmListItem, AmListInput, AmButton, AmSwitch } from '../../index'

export default {
  components: { AmNavBar, AmList, AmListItem, AmListInput, AmButton, AmSwitch },
  data () {
    return {
      inputValue: '',
      inputValue2: '',
      inputDisbled: false
    }
  }
}
</script>
