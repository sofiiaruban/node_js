import { Router } from 'express'
import { getStaticFilePath, getData, addProduct } from '../helpers.mjs'

const router = Router()

const filePath = getStaticFilePath('products.json', 'data')

router.get('/add-products', (req, res) => {
  res.render('addProducts', {
    heading: 'Add a New Product'
  })
})

router.post('/add-products', (req, res) => {
  const { title, price } = req.body

  if (!title || !price) {
    console.error('Invalid input:', req.body)
    return res.status(400).send('Both title and price are required')
  }

  const products = getData(filePath)

  addProduct(products, filePath, { title, price })

  res.redirect('/products')
})

export default router
