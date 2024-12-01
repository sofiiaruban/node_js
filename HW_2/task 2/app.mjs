/* Задача 2. Користувач через роут ‘/save_num/число’ може передати на сервер якесь число. Ці числа поступово треба зберігати у текстовому файлі numbers.txt. Наприклад, використовуючи такий роут:
http://localhost:3000/save_num/78  -  у файл треба додати число 78.
А використовуючи роути  ‘/sum’ – знайти суму, ‘mult’ –знайти добуток. За роутом «/remove» файл треба видалити.
*/

import { createServer } from 'node:http'

import {
  appendToNumbersFile,
  calculateSum,
  calculateMult,
  removeNumbersFile
} from './helpers.mjs'



const hostname = '127.0.0.1'
const port = 3000
const contentType = 'text/plain'

const handleSaveNumRequest = (req, res) => {
  const numberStr = req.url.split('/').pop()
  const number = parseInt(numberStr, 10)

  if (!isNaN(number)) {
    appendToNumbersFile(number, res)
  } else {
    res.writeHead(400, { 'Content-Type': contentType })
    res.end('Invalid number!')
  }
}

const handleRequest = (req, res) => {
  switch (req.url) {
    case '/sum':
      calculateSum(res)
      break
    case '/mult':
      calculateMult(res)
      break
    case '/remove':
      removeNumbersFile(res)
      break
    default:
      if (req.url.startsWith('/save_num/')) {
        handleSaveNumRequest(req, res)
      } else {
        res.writeHead(404, { 'Content-Type': contentType })
        res.end('Route not found.')
      }
      break
  }
}

const server = createServer(handleRequest)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
