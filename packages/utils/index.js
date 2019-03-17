const _toString = Object.prototype.toString

const Utils = {
  isWeb () {
    const { platform } = weex.config.env
    return typeof (window) === 'object' && platform.toLowerCase() === 'web'
  },
  isIOS () {
    const { platform } = weex.config.env
    return platform.toLowerCase() === 'ios'
  },
  /**
   * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
   * @returns {boolean}
   * */
  isIPhoneX () {
    const { deviceHeight } = weex.config.env;
    if (Utils.env.isWeb()) {
      return typeof window !== undefined && window.screen && window.screen.width && window.screen.height 
      && ((parseInt(window.screen.width, 10) === 375) && (parseInt(window.screen.height, 10) === 812)
      || (parseInt(window.screen.width, 10) === 414) && (parseInt(window.screen.height, 10) === 896));
    }
    return Utils.env.isIOS() && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight == 1792);
  },
  isAndroid () {
    const { platform } = weex.config.env
    return platform.toLowerCase() === 'android'
  },
  isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  },
  makeClassList (classList) {
    // web 支持
    if (this.isWeb() || Array.isArray(classList)) {
      return classList
    } else {
      return Object.keys(classList).filter(classname => classList[classname])
    }
  }
}
export default Utils
