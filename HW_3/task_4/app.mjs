import express from 'express'

import aboutRouter from './routes/about.mjs'
import homeRouter from './routes/home.mjs'
import addProductsRouter from './routes/addProducts.mjs'
import productsRouter from './routes/products.mjs'

/*
  Задача 4. З використанням роутерів та шаблонізаторів розробити інтернет магазин з такими сторінками:
    1) about – як статична сторінка (розмістити у public)
    2) сторінка додавання продукту (поки лише відображаємо поля для заповнення інформації)
    3) сторінка відображення продуктів (у формі таблиці і списку)
    4) головна – знаходяться посилання на сторінки about і products і addproducts
 */

const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
const port = 3000

app.get('/', homeRouter)

app.get('/about', aboutRouter)

app.get('/add-products', addProductsRouter)

app.get('/products', productsRouter)

app.use((req, res) => {
  res.status(404).send('Page not found')
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
