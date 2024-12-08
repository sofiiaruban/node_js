import express from 'express'
import { getStaticFilePath } from './helpers.mjs'
/*
 Задача 3. Розробити програму з такими функціональними можливостями:

 | Маршрут        | Що повертає                                         |
 |----------------|-----------------------------------------------------|
 | "/"            | Вітання користувача                                 |
 | "/goals"       | Ваші цілі                                           |
 | Статичні файли |                                                     |
 | about          | Містить тему та умову задачі                        |
 | news           | Містить перелік важливих новин (для Вас)            |
 | Обробка параметрів запитів |                                         |
 | /info/:myLinks | Залежно від значення параметра повертає сторінку з: |
 | "sites"        | Адреси улюблених сайтів                             |
 | "films"        | Адреси улюблених онлайн кінотеатрів                 |
 | "me"           | Інформація про себе                                 |
 */

const app = express()
const port = 3000
const aboutPagePath = getStaticFilePath('about.html')
const newsPagePath = getStaticFilePath('news.html')
const sitesPath = getStaticFilePath('sites.html')
const filmsPath = getStaticFilePath('films.html')
const mePath = getStaticFilePath('aboutMe.html')

app.get('/', (req, res) => {
  res.send(`Hi, User`)
})

app.get('/goals', (req, res) => {
  res.send(`My goal is to become a good developer`)
})

app.get('/about', (req, res) => {
  res.sendFile(aboutPagePath)
})

app.get('/news', (req, res) => {
  res.sendFile(newsPagePath)
})

app.get('/info/:myLinks', (req, res) => {
  const myLinks = req.params['myLinks']

  const linksPaths = {
    sites: sitesPath,
    films: filmsPath,
    me: mePath
  }

  if (!linksPaths[myLinks]) {
    res.status(404).send('Page not found')
  }

  res.sendFile(linksPaths[myLinks])
})

app.use((req, res) => {
  res.status(404).send('Page not found')
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
