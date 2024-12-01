export const performAddition = (numbers) => numbers.reduce((acc, num) => acc + num, 0)

export const performSubtraction = (numbers) => numbers.reduce((acc, num) => acc - num)

export const performMultiplication = (numbers) =>
  numbers.reduce((acc, num) => acc * num, 1)