import { format, isValid } from 'date-fns'

export const dateFormat = {
  methods: {
    onFormatTime (val, formatString = 'YYYY-MM-DD HH:mm:ss') {
      if (val && isValid(new Date(val))) {
        return format(val, formatString)
      }
      return '- -'
    }
  }
}

export default {
  dateFormat
}
