import { Router } from 'express'
const router = Router()

import { getStaticFilePath, getData } from '../helpers.mjs'

router.get('/products', (req, res) => {
  const filePath = getStaticFilePath('products.json', 'data')

  const products = getData(filePath)

  console.log(products)
  res.render('products', {
    heading: 'Our Products',
    products
  })
})
export default router
