import fs from 'fs'

const numbersFilePath = 'numbers.txt'

export const appendToNumbersFile = (number, res) => {
  fs.appendFile(numbersFilePath, `${number}\n`, (err) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Error writing to file')
      return
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Numbers file updated!')
  })
}
export const calculateSum = (res) => {
  fs.readFile(numbersFilePath, 'utf8', (err, data) => {
    if (err || !data) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('File read error or empty file.')
      return
    }

    const sum = data
      .split('\n')
      .filter(Boolean)
      .map(Number)
      .reduce((acc, num) => acc + num, 0)

    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`Sum of numbers: ${sum}`)
  })
}

export const calculateMult = (res) => {
  fs.readFile(numbersFilePath, 'utf8', (err, data) => {
    if (err || !data) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('File read error or empty file.')
      return
    }

    const product = data
      .split('\n')
      .filter(Boolean)
      .map(Number)
      .reduce((acc, num) => acc * num, 1)

    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`Multiplication of numbers: ${product}`)
  })
}

export const removeNumbersFile = (res) => {
  fs.unlink(numbersFilePath, (err) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Error deleting file or file does not exist.')
      return
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Numbers file deleted!')
  })
}
