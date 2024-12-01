/* Задача 3. Через параметри запиту передають операцію (add, subtract, mult) і числа (розділені дефісами), які треба опрацювати. Знайти результат і повернути користувачу. Наприклад при запиті:
http://localhost:3000/add/12-4-23-45 - треба знайти суму чисел 12,4,23,45*/

import { createServer } from 'node:http'
import {
  performAddition,
  performSubtraction,
  performMultiplication
} from 'helpers.mjs'

const hostname = '127.0.0.1'
const port = 3000
const contentType = 'text/plain'

const handleOperationRequest = (operation, numberString, res) => {
  const numbers = numberString.split('-').map(Number)

  if (numbers.some(isNaN)) {
    res.writeHead(400, { 'Content-Type': contentType })
    res.end('Invalid numbers provided')
    return
  }

  let result
  switch (operation) {
    case 'add':
      result = performAddition(numbers)
      break
    case 'subtract':
      result = performSubtraction(numbers)
      break
    case 'mult':
      result = performMultiplication(numbers)
      break
    default:
      res.writeHead(400, { 'Content-Type': contentType })
      res.end('Invalid operation')
      return
  }

  res.writeHead(200, { 'Content-Type': contentType })
  res.end(`Result of ${operation}: ${result}`)
}

const handleRequest = (req, res) => {
  const urlParts = req.url.split('/')
  const operation = urlParts[1]
  const numberString = urlParts[2]

  if (['add', 'subtract', 'mult'].includes(operation) && numberString) {
    handleOperationRequest(operation, numberString, res)
    return
  }

  res.writeHead(404, { 'Content-Type': contentType })
  res.end('Route not found.')
}

const server = createServer(handleRequest)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
