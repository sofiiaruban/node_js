import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.render('home', {
    menu: [
      { name: 'About', link: '/about' },
      { name: 'Products', link: '/products' },
      { name: 'Add Products', link: '/add-products' }
    ]
  })
})

export default router
