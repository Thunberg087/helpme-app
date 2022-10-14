const padZero = (input: number, len?: number) => {
  var s = String(input),
    c = '0'
  len = len || 2
  while (s.length < len) s = c + s
  return s
}

const getMonthNumber = (date: Date) => {
  return padZero(date.getMonth() + 1)
}

/**
 Formats to: "2000-01-01"
*/
export function formatDate(date: Date) {
  date = new Date(date)
  return `${date.getFullYear()}-${getMonthNumber(date)}-${padZero(date.getDate())}`
}

/**
 Formats to: "2021-02-12 17:00"
*/
export function formatDateWithTime(date: Date) {
  date = new Date(date)
  return `${date.getFullYear()}-${getMonthNumber(date)}-${('0' + date.getDate()).slice(-2)} ${padZero(date.getHours())}:${padZero(date.getMinutes())}`
}

/**
 Formats to: "Wednesday, 19 Aug 09:00"
*/
export function formatDateWithDayname(date: Date) {
  date = new Date(date)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${days[date.getDay()]}, ${('0' + date.getDate()).slice(-2)} ${monthNames[date.getMonth()]} ${padZero(date.getHours())}:${padZero(date.getMinutes())}`
}

/**
 Formats to: "30 Aug 21:01"
*/
export function formatDateWithMonthNameAndTime(date: Date) {
  date = new Date(date)
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${('0' + date.getDate()).slice(-2)} ${monthNames[date.getMonth()]} ${padZero(date.getHours())}:${padZero(date.getMinutes())}`
}

/**
 Formats to: "Fri, 24 Sep"
*/
export function formatDateWithDayAndMonthName(date: Date) {
  date = new Date(date)
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${days[date.getDay()]}, ${padZero(date.getDate())} ${monthNames[date.getMonth()]} `
}
