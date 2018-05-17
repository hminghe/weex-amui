<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/07/28. -->

<template>
  <div class="wxc-title" :aria-hidden="true">
    <text class="text">{{title}}</text>
  </div>
</template>

<style scoped>
.text {
  font-size: 60px;
  font-weight: 600;
  color: #000000;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
  color: #108ee9;
}
</style>

<script>
export default {
  props: {
    title: String
  }
}
</script>
