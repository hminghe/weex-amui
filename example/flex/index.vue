
<template>
  <div>
    <am-nav-bar title="am-flex"></am-nav-bar>
    <scroller>
      <div>
        <am-white-space></am-white-space>

        <am-flex>
          <am-flex-item v-for="i in 2" :key="i">
            <placeholder/>
          </am-flex-item>
        </am-flex>

        <am-white-space></am-white-space>

        <am-flex>
          <am-flex-item v-for="i in 3" :key="i">
            <placeholder/>
          </am-flex-item>
        </am-flex>

        <am-white-space></am-white-space>

        <am-flex>
          <am-flex-item v-for="i in 4" :key="i">
            <placeholder/>
          </am-flex-item>
        </am-flex>

        <am-white-space></am-white-space>

        <am-flex :gutter="10">
          <am-flex-item v-for="i in count" :key="i">
            <placeholder/>
          </am-flex-item>
        </am-flex>

        <am-white-space></am-white-space>
        <am-button @click="count++">add block</am-button>
      </div>
    </scroller>
  </div>
</template>

<style scoped>

</style>

<script>
import { AmButton, AmFlex, AmFlexItem, AmWhiteSpace, AmNavBar } from '../../index'
import Placeholder from '../_mods/placeholder.vue'

export default {
  components: { Placeholder, AmButton, AmFlex, AmFlexItem, AmWhiteSpace, AmNavBar },

  computed: {},
  data () {
    return {
      count: 1
    }
  }
}
</script>
