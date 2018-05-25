<template>
  <div>
    <am-nav-bar title="am-html"></am-nav-bar>
    <scroller style="flex: 1">
      <am-html :height="1000" :html="html"></am-html>
      <!-- <am-list header="HTML">
        <am-list-textarea :rows="10" v-model="html"></am-list-textarea>
      </am-list> -->
    </scroller>
  </div>
</template>

<script>
import { AmNavBar, AmHtml } from '../../index'

export default {
  components: { AmNavBar, AmHtml },
  data () {
    return {
      html: `<style>.my-html{background: red}</style>
<div class="my-html">
  <h1>h1</h1>
  <h2>h2</h2>
  <h3>h3</h3>
  <div>div</div>
  <p>p</p>
  <img src="https://www.vue-js.com/public/images/vue.png"/>
</div>`
    }
  }
}
</script>
