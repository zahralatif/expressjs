const express = require('express');
const router = express.Router();
const { getProducts, getProductById, deleteProductById, createProduct, updateProductById, getProductsWithLimit, getAllCategories } = require('../controllers/productController');

router.get('/all', getProducts);
router.get('/:id', getProductById);
router.post('/create', createProduct); 
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);
router.get('/limit', getProductsWithLimit); //? didn't work
router.get('/categories', getAllCategories);

module.exports = router;