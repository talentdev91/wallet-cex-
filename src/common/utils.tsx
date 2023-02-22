/** @format */
import dateFormat from 'dateformat'

export function isEmptyObject(obj: any) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

export const pairSplit = (pair: string) => {
  const pairArray = pair.toString().split('/')

  return { coin1: pairArray[0], coin2: pairArray[1] }
}

export const onlyUnique = (value: any, index: any, self: any) => {
  return self.indexOf(value) === index
}

export const numberWithCommas = (x: any) => {
  if (x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  }
  return 0
}

export const dateConvert = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000)
  return (
    time.getFullYear() +
    '-' +
    (time.getMonth() + 1) +
    '-' +
    time.getDate() +
    ' ' +
    ('0' + time.getHours()).slice(-2) +
    ':' +
    ('0' + time.getMinutes()).slice(-2)
  )
}

export const dateToType = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000)
  const month = new Array(12)
  month[0] = 'JAN'
  month[1] = 'FEB'
  month[2] = 'MAR'
  month[3] = 'APR'
  month[4] = 'MAY'
  month[5] = 'JUN'
  month[6] = 'JUL'
  month[7] = 'AUG'
  month[8] = 'SEP'
  month[9] = 'OCT'
  month[10] = 'NOV'
  month[11] = 'DEC'
  return (
    time.getDate() +
    ' ' +
    month[time.getMonth()] +
    ' ' +
    time.getFullYear() +
    ', ' +
    ('0' + time.getHours()).slice(-2) +
    ':' +
    ('0' + time.getMinutes()).slice(-2)
  )
}

export const timestampToDate = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000)
  const month = new Array(12)
  return (
    time.getFullYear() +
    '-' +
    (time.getMonth() + 1) +
    '-' +
    time.getDate() +
    ' ' +
    ('0' + time.getHours()).slice(-2) +
    ':' +
    ('0' + time.getMinutes()).slice(-2) +
    ':' +
    ('0' + time.getSeconds()).slice(-2)
  )
}

export const isoDatetoString = (newDate: any) => {
  let date = new Date(newDate)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let dt = date.getDate()

  return year + '-' + month + '-' + dt
}
