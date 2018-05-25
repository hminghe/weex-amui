<template>
  <div
    v-if="isWeb"
    v-html="html"
    :style="{width: `${width}px`, height: `${height}px`,overflow: 'auto'}"
  ></div>
  <web
    v-else
    :src="url"
    :style="{width: `${width}px`, height: `${height}px`}"
  >
  </web>
</template>

<script>
import Utils from '../utils/index.js'
export default {
  name: 'am-html',
  props: {
    width: {
      type: Number,
      default: 750
    },
    height: {
      type: Number,
      default: 750
    },
    html: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isWeb: Utils.isWeb()
    }
  },
  computed: {
    url () {
      return `javascript:setTimeout(function () {
          var meta = document.createElement('meta');
          meta.setAttribute('name', 'viewport');
          meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
          document.head.appendChild(meta);
          document.body.innerHTML = '<style>body, html {margin: 0;}</style>${this.html}'
        });`
    }
  }
}
</script>
