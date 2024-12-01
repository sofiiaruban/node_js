/* Задача 5. Створити додаток з історією. У файлі json зберігаємо усі роути та кількість
 відвідувань. У налаштуваннях settings.json зберігати який роут треба використати для 
 перегляду історії та назву файлу де зберігається історія
*/

import fs from 'fs'
import { createServer } from 'node:http'
import { updateHistory, respondWithHistory } from './helpers.mjs'

const hostname = '127.0.0.1'
const port = 3000
const settings = JSON.parse(fs.readFileSync('settings.json', 'utf8'))
const historyFile = settings.historyFile
const historyRoute = settings.historyRoute
const contentType = 'text/plain'

const server = createServer((req, res) => {
  const url = req.url

  updateHistory(url, historyFile)

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': contentType })
    res.end('This is the home page')
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': contentType })
    res.end('This is the about page.')
  } else if (url === historyRoute) {
    respondWithHistory(res, historyFile)
  } else {
    res.writeHead(404, { 'Content-Type': contentType })
    res.end('Page not found')
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
