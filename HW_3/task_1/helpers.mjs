export function getSeason() {
  const month = new Date().getMonth()

  if (month === 11 || month <= 1) {
    return 'Winter'
  }
  if (month >= 2 && month <= 4) {
    return 'Spring'
  }
  if (month >= 5 && month <= 7) {
    return 'Summer'
  }

  return 'Autumn'
}

export function getDay() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const dayIndex = new Date().getDay()

  return days[dayIndex]
}

export function getTimeOfDay() {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return 'Morning'
  }
  if (hour >= 12 && hour < 18) {
    return 'Afternoon'
  }
  if (hour >= 18 && hour < 22) {
    return 'Evening'
  }

  return 'Night'
}
