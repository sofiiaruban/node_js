import express from 'express'
import { getStaticFilePath } from './helpers.mjs'
/*
  Задача 2. Розробити серверну частину додатку, який за відповідними маршрутами
   (“/”, “/coffee”, “/music”) повертає створені HTML документи.
 */

const app = express()
const port = 3000
const aboutPagePath = getStaticFilePath('about.html')
const coffeePagePath = getStaticFilePath('coffee.html')
const musicPagePath = getStaticFilePath('music.html')

app.get('/', (req, res) => {
  res.sendFile(aboutPagePath)
})

app.get('/coffee', (req, res) => {
  res.sendFile(coffeePagePath)
})

app.get('/music', (req, res) => {
  res.sendFile(musicPagePath)
})

app.use((req, res) => {
  res.status(404).send('Page not found')
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
