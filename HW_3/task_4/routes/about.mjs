import { Router } from 'express'
const router = Router()
import { getStaticFilePath } from '../helpers.mjs'

const aboutPagePath = getStaticFilePath('about.html', 'public')

router.get('/about', (req, res) => {
  res.sendFile(aboutPagePath)
})

export default router
