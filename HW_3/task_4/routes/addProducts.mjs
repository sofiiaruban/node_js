import { Router } from 'express'
import { getStaticFilePath, getData } from '../helpers.mjs'
import fs from 'fs'

const router = Router()

const filePath = getStaticFilePath('products.json', 'data')

router.get('/add-products', (req, res) => {
  res.render('addProducts', {
    heading: 'Add a New Product'
  })
})

router.post('/add-products', (req, res) => {
  const { title, price } = req.body
  const products = getData(filePath)

  products.push({ title, price })

  fs.writeFileSync(filePath, JSON.stringify(products, null, 2))

  res.redirect('/products')
})

export default router
