const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { getProducts, getProductById, deleteProductById } = require('./controllers/productController');
const { getAllCategories } = require('./controllers/categoryController');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Home page");
})

app.get('/users', (req, res) => {
    res.send("All users");
})

app.get('/products', getProducts)
app.get('/products/:id', getProductById)
app.delete('/products/:id', deleteProductById)
app.get('/products/categories', getAllCategories)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})