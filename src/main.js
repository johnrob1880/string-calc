let isNum = /^-?\d*\.?\d*$/
let isAddDays = /^'[\d-]*'d\+\d*$/
let isSubtractDays = /^'[\d-]*'d-\d*$/

import { addDays } from 'date-fns';

export default function (fn, onError) {
  if (isAddDays.test(fn)) {
    let split = fn.split('d+')
    let date = new Date(split[0].slice(1, split[0].length - 1) + 'T00:00')
    let num = parseInt(split[1])

    return addDays(date, num).toLocaleDateString()
  } else if (isSubtractDays.test(fn)) {
    let split = fn.split('d-')
    let date = new Date(split[0].slice(1, split[0].length - 1) + 'T00:00')
    let num = -parseInt(split[1])

    return addDays(date, num).toLocaleDateString()
  } else if (isNum.test(fn)) {
    return fn
  }

  try {
    fn = fn.replace(/[^-()\d/*+.]/g, '')
    /* eslint no-new-func: "warn" */
    return new Function('return ' + fn)()
  } catch (e) {
    let message = 'missing'
    onError && onError(message)
    return fn
  }
}
