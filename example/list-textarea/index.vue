<template>
  <div>
    <am-nav-bar title="am-list-textarea"></am-nav-bar>
    <scroller class="scroller">
      <div>
        <am-list header="am-list-input">
          <am-list-textarea
            v-model="value"
            title="标题"
            placeholder="请输入内容"
          />
          <am-list-textarea
            v-model="value"
            title="标题"
            :rows="3"
            placeholder="请输入内容"
          />
          <am-list-textarea
            v-model="value"
            title="标题"
            placeholder="请输入内容"
            :rows="3"
            :auto-height="true"
          />
          <am-list-textarea
            v-model="value"
            :title-number="0"
            placeholder="请输入内容"
            :rows="10"
          />
        </am-list>
      </div>
    </scroller>
  </div>
</template>

<script>
import { AmNavBar, AmList, AmListTextarea } from '../../index'

export default {
  components: { AmNavBar, AmList, AmListTextarea },
  data () {
    return {
      value: ''
    }
  }
}
</script>
