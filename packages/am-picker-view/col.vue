<template>
  <div
    class="am-picker-col"
    @panstart="scrollHanders.touchstart"
    @panmove="scrollHanders.touchmove"
    @panend="scrollHanders.touchend"
  >
    <div ref="content" class="am-picker-col-content">
      <template v-if="isWeb">
        <div
          ref="item"
          v-for="(item, index) in data"
          :key="item.value"
        >
          <text
            :class="['am-picker-col-item', selected === index ? 'am-picker-col-item-selected' : '']"
          >{{item.label}}</text>
        </div>
      </template>
      <text v-else ref="items" class="am-picker-col-items">{{items}}</text>
    </div>
    <div class="am-picker-col-mask">
      <div class="am-picker-col-mask-top"></div>
      <div class="am-picker-col-indicator"></div>
      <div class="am-picker-col-mask-bottom"></div>
    </div>
  </div>
</template>

<script>
import Utils from '../utils'
const animation = weex.requireModule('animation')
const dom = weex.requireModule('dom')

const itemLineHeight = {
  _callbackList: [],
  value: Utils.isAndroid() ? null : 68,
  status: Utils.isAndroid() ? 0 : 2, // 0: 没有，1：计算中, 2:完成
  compute (vm) {
    if (this.status >= 1) return
    this.status = 1
    let sid = setInterval(() => next(), 100)

    let next = () => {
      dom.getComponentRect(vm.$refs.items, (options) => {
        if (options.result && options.size.height) {
          this.finish(options.size.height / vm.data.length)
        } else {
          setTimeout(() => next(), 100)
        }
      })
      clearInterval(sid)
    }
  },
  onFinish (callback) {
    if (this.status === 2) {
      callback(this.value)
    } else {
      this._callbackList.push(callback)
    }
  },
  finish (height) {
    this.status = 2
    this.value = height
    this._callbackList.forEach(callback => callback(height))
  }
}

export default {
  name: 'am-picker-view-col',
  props: {
    data: {
      type: Array, // Array<{value, label}>
      default: () => []
    },
    value: null
  },
  data () {
    let selected = this.data.indexOf(this.value)
    if (selected < 0) selected = 0
    return {
      selected: selected,
      itemHeight: itemLineHeight.value || 68,
      scrollHanders: {},
      isWeb: Utils.isWeb(),
      isAndroid: Utils.isAndroid()
    }
  },
  created () {
    const scrollHanders = (() => {
      let scrollY = -1
      let lastY = 0
      let startY = 0
      let scrollDisabled = false
      let isMoving = false
      // let animationIntervalId = 0

      const setAnimation = (ref, styles, timingFunction = 'linear', duration = 0, callback = null) => {
        (duration && this.isAndroid) && (scrollDisabled = true)
        animation.transition(ref, {
          styles,
          duration: duration, // ms
          timingFunction: timingFunction,
          needLayout: false,
          delay: 0 // ms
        }, () => {
          (duration && this.isAndroid) && (scrollDisabled = false)

          if (typeof callback === 'function') {
            callback()
          }
        })
      }

      const scrollingComplete = () => {
        if (!isMoving && scrollY >= 0) {
          const index = computeChildIndex(scrollY, this.itemHeight, this.data.length)
          this.selected = index
        }
      }

      const scrollTo = (_x, y, time = 0.3) => {
        if (scrollY !== y) {
          scrollY = y
          setAnimation(
            this.$refs.content,
            {transform: `translateY(${-scrollY}px)`},
            time === 0 ? 'linear' : 'cubic-bezier(0,0,0.2,1.15)',
            time * 1000,
            scrollingComplete
          )
        }
      }

      const Velocity = ((minInterval = 30, maxInterval = 100) => {
        let _time = 0
        let _y = 0
        let _velocity = 0
        const recorder = {
          record: (y) => {
            const now = +new Date()
            _velocity = (y - _y) / (now - _time)
            if (now - _time >= minInterval) {
              _velocity = now - _time <= maxInterval ? _velocity : 0
              _y = y
              _time = now
            }
          },
          getVelocity: (y) => {
            if (y !== _y) {
              recorder.record(y)
            }
            return _velocity
          }
        }
        return recorder
      })()

      const onFinish = () => {
        isMoving = false
        let targetY = scrollY

        const height = (this.data.length - 1) * this.itemHeight

        let time = 0.3

        const velocity = Velocity.getVelocity(targetY) * 4
        if (velocity) {
          targetY = velocity * 40 + targetY
          time = Math.abs(velocity) * 0.1
        }

        if (targetY % this.itemHeight !== 0) {
          targetY = Math.round(targetY / this.itemHeight) * this.itemHeight
        }

        if (targetY < 0) {
          targetY = 0
        } else if (targetY > height) {
          targetY = height
        }

        scrollTo(0, targetY, time < 0.3 ? 0.3 : time)
        onScrollChange()
      }

      const onStart = y => {
        if (scrollDisabled) {
          return
        }

        isMoving = true
        startY = y
        lastY = scrollY
      }

      const onMove = y => {
        if (scrollDisabled || !isMoving) {
          return
        }

        scrollY = lastY - y + startY
        Velocity.record(scrollY)

        onScrollChange()
        setAnimation(this.$refs.content, {transform: `translateY(${-scrollY}px)`})
      }

      const onScrollChange = () => {
        // const top = scrollHanders.getValue()
        // if (top >= 0) {
        //   const item = this.data
        //   const index = computeChildIndex(top, this.itemHeight, item.length)
        //   if (this.scrollValue !== index) {
        //     this.scrollValue = index
        //     const child = item[index]
        //     if (child) {
        //       console.log('selected', index)
        //       // this.props.onScrollChange(child.props.value)
        //     } else if (!child && console.warn) {
        //       console.warn('child not found', item, index)
        //     }
        //   }
        // }
      }

      const computeChildIndex = (top, itemHeight, itemLength) => {
        const index = Math.round(top / itemHeight)
        return Math.min(index, itemLength - 1)
      }

      return {
        touchstart: (evt) => onStart(evt.changedTouches[0].screenY),
        // mousedown: (evt) => onStart(evt.screenY),
        touchmove: (evt) => {
          // evt.preventDefault()
          onMove(evt.changedTouches[0].screenY)
        },
        // mousemove: (evt) => {
        //   evt.preventDefault()
        //   onMove(evt.screenY)
        // },
        touchend: () => onFinish(),
        // touchcancel: () => onFinish(),
        // mouseup: () => onFinish(),
        getValue: () => {
          return scrollY
        },
        scrollTo,
        setDisabled: (disabled = false) => {
          scrollDisabled = disabled
        }
      }
    })()
    // Object.keys(scrollHanders).forEach(key => {
    //   if (key.indexOf('touch') === 0) {
    //     this.$set(this.listeners, key, scrollHanders[key])
    //   }
    // })
    this.scrollHanders = scrollHanders
  },
  mounted () {
    this.selected > 0 && this.scrollToItem(this.selected)
    if (this.isAndroid) {
      itemLineHeight.compute(this)
      itemLineHeight.onFinish(height => {
        this.itemHeight = height
        this.scrollToItem(this.selected)
      })
    }
  },
  methods: {
    getItemIndex (value) {
      if (!value) return 0
      const len = this.data.length
      for (let i = 0; i < len; i++) {
        if (this.data[i].value === value) {
          return i
        }
      }
      return 0
    },
    scrollToItem (index, time = 0) {
      if (index < 0) index = 0
      this.scrollHanders.scrollTo(0, index * this.itemHeight, time)
    }
  },
  watch: {
    selected (val, oldVal) {
      if (this.data[val] !== this.value) {
        this.$emit('input', this.data[val])
      }
    },
    value (val) {
      if (val !== this.data[this.selected]) {
        this.scrollToItem(this.data.indexOf(val))
      }
    }
  },
  computed: {
    items () {
      return this.data.map(item => item.label).join('\n')
    }
  }
}
</script>

<style lang="less">
@import '../../theme/am-picker/col.less';

</style>
