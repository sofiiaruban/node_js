import express from 'express'
import { getSeason, getDay, getTimeOfDay } from './helpers.mjs'
/*
  Задача 1. Розробити додаток з такими маршрутами:

  | Маршрут   | Що повертає               |
  |-----------|---------------------------|
  | season    | повертає пору року        |
  | day       | повертає поточний день    |
  | time      | повертає час дня          |
  |           | (ранок, обід, вечеря)     |
 */

const app = express()
const port = 3000

app.get('/season', (req, res) => {
  const season = getSeason()
  res.send(`Current season is: ${season}`)
})

app.get('/day', (req, res) => {
  const day = getDay()
  res.send(`Today is: ${day}`)
})

app.get('/time', (req, res) => {
  const timeOfDay = getTimeOfDay()
  res.send(`It is: ${timeOfDay}`)
})

app.use((req, res) => {
  res.status(404).send('Page not found')
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
