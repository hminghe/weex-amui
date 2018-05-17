<template>
  <div>
    <am-nav-bar title="am-button"></am-nav-bar>
    <scroller class="scroller">
      <div class="button-list">
          <text class="button-text">default</text>
          <am-button @click="handleClick"
                      text="确定"
                      width="702px"
                      type="default"/>
          <text class="button-text">default & disabled</text>
          <am-button @click="handleClick"
                      text="确定"
                      type="default"
                      width="702px"
                      disabled/>
          <text class="button-text">primary</text>
          <am-button @click="handleClick"
                      text="确定"
                      width="702px"
                      type="primary"/>
          <text class="button-text">primary & disabled</text>
          <am-button @click="handleClick"
                      text="确定"
                      type="primary"
                      width="702px"
                      disabled/>
          <text class="button-text">warning</text>
          <am-button @click="handleClick"
                      text="确定"
                      width="702px"
                      type="warning"/>
          <text class="button-text">warning & disabled</text>
          <am-button @click="handleClick"
                      text="确定"
                      width="702px"
                      type="warning"
                      disabled/>
          <text class="button-text">ghost</text>
          <am-button @click="handleClick"
                      text="确定"
                      width="702px"
                      type="ghost"/>
          <text class="button-text">ghost &  disabled</text>
          <am-button @click="handleClick"
                      text="确定"
                      width="702px"
                      type="ghost"
                      disabled/>
          <text class="button-text"></text>
          <div class="size">
            <am-button @click="handleClick"
                        text="确定"
                        width="330px"
                        type="primary"/>
            <am-button @click="handleClick"
                        text="确定"
                        width="330px"
                        type="default"/>
          </div>
          <div class="size">
            <am-button @click="handleClick"
                        text="确定"
                        type="warning"/>
            <am-button @click="handleClick"
                      text="确定"
                      type="ghost"/>
            <am-button @click="handleClick"
                      text="确定"
                      size="small"/>
              <am-button @click="handleClick"
                      text="确定"
                      type="ghost"
                      size="small"/>
          </div>
      </div>
    </scroller>
  </div>
</template>

<style scoped>

  .button-list {
    margin-bottom: 100px;
    align-items: center;
  }

  .button-text {
    font-size: 32px;
    margin-top: 40px;
    margin-bottom: 16px;
  }

  .size {
    flex-direction: row;
    justify-content: space-around;
    width: 702px;
    margin-top: 20px
  }
</style>

<script>
import { AmNavBar, AmButton } from '../../index'

const modal = weex.requireModule('modal')
export default {
  components: { AmNavBar, AmButton },
  data: () => ({
    typeList: ['default', 'primary', 'warning']
  }),
  methods: {
    handleClick (e) {
      const { type } = e
      modal.toast({
        message: type
      })
    }
  }
}
</script>
