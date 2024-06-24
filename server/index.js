const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { getProducts, getProductById, deleteProductById, createProduct, updateProductById, getProductsWithLimit, getAllCategories } = require('./controllers/productController');
const { getCarts, getCartById, getUserById, createCart, updateCartById, deleteCartById } = require('./controllers/cartsController');
const { getUsers, createUser, updateUserById, deleteUserById } = require('./controllers/usersController');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Home page");
});

// app.get('/users', (req, res) => {
//     res.send("All users");
// });

app.get('/products', getProducts);
app.get('/products/:id', getProductById);
app.post('/products', createProduct); 
app.put('/products/:id', updateProductById);
app.delete('/products/:id', deleteProductById);
app.get('/products/limit', getProductsWithLimit); //? didn't work
app.get('/products/categories', getAllCategories);
app.get('/carts', getCarts);
app.get('/carts/:id', getCartById);
app.get('/carts/user/:id', getUserById);
app.post('/carts', createCart); 
app.put('/carts/:id', updateCartById);
app.delete('/carts/:id', deleteCartById);
app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.post('/users', createUser); 
app.put('/users/:id', updateUserById);
app.delete('/users/:id', deleteUserById);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
