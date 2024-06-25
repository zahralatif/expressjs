const express = require('express');
const router = express.Router();
const { getCarts, getCartById, getUserById, createCart, updateCartById, deleteCartById } = require('../controllers/cartsController');

router.get('/all', getCarts);
router.get('/:id', getCartById);
router.get('/user/:id', getUserById);
router.post('/create', createCart); 
router.put('/:id', updateCartById);
router.delete('/:id', deleteCartById);

module.exports = router;