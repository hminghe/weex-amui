<script>
import AmPickerView from '../am-picker-view'
import dateUtil from '../utils/date'
import props from './props'

const TYPE_MAP = {
  'YYYY': 'Year',
  'MM': 'Month',
  'DD': 'Day',
  'HH': 'Hour',
  'mm': 'Minute'
}

export default {
  name: 'am-date-picker-view',
  props: props(),
  data () {
    return {
      dateData: [],
      currentValue: this.strDate2DateMap(this.value, this.format)
    }
  },
  computed: {
    types () {
      return Object.keys(dateUtil.formatStr('', this.format)).map(key => TYPE_MAP[key])
    },
    yearConfig () {
      return {start: this.minDateMap.Year, end: this.maxDateMap.Year}
    },
    monthConfig () {
      const config = {start: 1, end: 12}
      if (this.currentValue.Year === this.minDateMap.Year) {
        config.start = this.minDateMap.Month
      }
      if (this.currentValue.Year === this.maxDateMap.Year) {
        config.end = this.maxDateMap.Month
      }
      return config
    },
    dayConfig () {
      const config = {start: 1, end: this.getMonthEndDay(this.currentValue.Year, this.currentValue.Month)}
      if (this.currentValue.Year === this.minDateMap.Year && this.currentValue.Month === this.minDateMap.Month) {
        config.start = this.minDateMap.Day
      }
      if (this.currentValue.Year === this.maxDateMap.Year && this.currentValue.Month === this.maxDateMap.Month) {
        config.end = this.maxDateMap.Day
      }
      return config
    },
    hourConfig () {
      return {start: 0, end: 23, fixedList: this.hourList || null}
    },
    minuteConfig () {
      return {start: 0, end: 59, step: this.minuteStep}
    },
    configs () {
      return {
        Year: this.yearConfig,
        Month: this.monthConfig,
        Day: this.dayConfig,
        Hour: this.hourConfig,
        Minute: this.minuteConfig
      }
    },
    strDate () {
      const date = new Date(
        this.currentValue.Year || 1970,
        (this.currentValue.Month || 1) - 1,
        this.currentValue.Day || 1,
        this.currentValue.Hour || 0,
        this.currentValue.Minute || 0
      )
      return dateUtil.format(date, this.format)
    },
    minDateMap () {
      return this.strDate2DateMap(this.minDate, 'YYYY-MM-DD')
    },
    maxDateMap () {
      return this.strDate2DateMap(this.maxDate, 'YYYY-MM-DD')
    }
  },
  methods: {
    strDate2DateMap (str, fmt) {
      const value = {}
      const result = dateUtil.formatStr(str, fmt)
      Object.keys(result).forEach(key => {
        value[TYPE_MAP[key]] = result[key]
      })
      return value
    },
    markData () {
      let dateData = []
      Object.keys(this.types).forEach(key => {
        let type = this.types[key]
        if (type) {
          dateData.push(this.fillValues(type, this.configs[type]))
        }
      })
      this.dateData = dateData
    },
    fillValues (type, {start, end, step = 1, fixedList = null}) {
      const getItem = (value) => {
        value = (value < 10 ? '0' : '') + value
        const label = this[`format${type}`].replace('{value}', value)
        return { value, label }
      }
      if (fixedList) {
        return fixedList.map(getItem)
      }
      const values = []
      for (let i = ~~start; i <= end; i += step) {
        values.push(getItem(i))
      }
      return values
    },
    isLeapYear (year) {
      return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
    },
    isShortMonth (month) {
      return ['04', '06', '09', '11'].indexOf(month) > -1
    },
    getMonthEndDay (year, month) {
      if (this.isShortMonth(month)) {
        return '30'
      } else if (month === '02') {
        return this.isLeapYear(year) ? '29' : '28'
      } else {
        return '31'
      }
    }
  },
  watch: {
    currentValue: {
      handler (val) {
        this.markData()
      },
      deep: true
    },
    value () {
      this.currentValue = this.strDate2DateMap(this.value, this.format)
    },
    minDate () {
      this.markData()
    },
    maxDate () {
      this.markData()
    }
  },
  created () {
    this.markData()
  },
  render (h) {
    return h(AmPickerView, {
      props: {
        data: this.dateData,
        value: Object.values(this.currentValue)
      },
      on: {
        input: (val) => {
          this.types.forEach((type, index) => {
            this.currentValue[type] = val[index]
          })
          this.$emit('input', this.strDate)
        }
      }
    })
  }
}
</script>
