export default {
  format (date, fmt = 'YYYY-MM-DD HH:mm') {
    const MAP = {
      'Y+': date.getFullYear(),
      'M+': date.getMonth() + 1,
      'D+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes()
    }

    Object.keys(MAP).forEach(key => {
      if (new RegExp(`(${key})`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, `0${MAP[key]}`.substr(-Math.max(MAP[key].toString().length, 2)))
      }
    })

    return fmt
  },
  formatStr (str, fmt = 'YYYY-MM-DD HH:mm') {
    if (typeof str !== 'string' || str.length !== fmt.length) {
      str = this.format(new Date(), fmt)
    }
    const TYPES = [
      'YYYY',
      'MM',
      'DD',
      'HH',
      'mm'
    ]
    const result = {}
    for (let i = 0; i < TYPES.length; i++) {
      let type = TYPES[i]
      let index = fmt.indexOf(type)
      if (index > -1) {
        result[type] = str.substr(index, type.length)
        // 格式错误，用返回当前时间
        if (!/^\d+$/.test(result[type])) {
          return this.formatStr(this.format(new Date(), fmt), fmt)
        }
      }
    }
    TYPES.forEach(type => {
      let index = fmt.indexOf(type)
      if (index > -1) {
        result[type] = str.substr(index, type.length)
      }
    })
    return result
  }
  // isLeapYear (year) {
  //   return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
  // },
  // isShortMonth (month) {
  //   return [4, 6, 9, 11].indexOf(~~month) > -1
  // }
}
