/* Задача 4. Розробити серверну частину додатку, який за відповідними маршрутами (“/”, “/coffee”, “/music”) 
повертає створені HTML документи (розмістіть їх там же, де і додаток), що описують: інформацію про себе,
 інфорімацію про улюблену кав’ярню,  інформацію про улюблений музичний гурт.*/
 
import { createServer } from 'node:http'
import { readFileAndRespond } from './helpers.mjs'

const hostname = '127.0.0.1'
const port = 3000
const aboutPage = 'static/about.html'
const coffeePage = 'static/coffee.html'
const musicPage = 'static/music.html'
const contentType = 'text/html;charset=utf-8'

const server = createServer((req, res) => {
  try {
    if (req.url == '/') {
      readFileAndRespond(aboutPage, res, contentType)
    } else if (req.url == '/coffee') {
      readFileAndRespond(coffeePage, res, contentType)
    } else if (req.url == '/music') {
      readFileAndRespond(musicPage, res, contentType)
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Page Not Found')
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': contentType })
    res.statusCode = 500
    res.end('Server Error')
    return
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
