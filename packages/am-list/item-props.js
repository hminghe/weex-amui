const props = () => ({
  title: {
    type: String,
    default: null
  },
  titleNumber: {
    type: Number,
    default: 0
  },
  titleDisabled: {
    type: Boolean,
    default: false
  },
  extra: {
    type: String,
    default: null
  },
  arrow: {
    type: String,
    default: 'horizontal'
  },
  thumb: {
    type: String,
    default: null
  },
  thumbStyle: {
    type: Object,
    default () {
      return {}
    }
  },
  brief: {
    type: String,
    default: null
  },
  tapActive: {
    type: Boolean,
    default: true
  },
  align: {
    type: String,
    default: 'middle'
  }
  // multiple: {
  //   type: Boolean,
  //   default: false
  // }
})

export default props
