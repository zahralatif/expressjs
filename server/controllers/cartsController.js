const axios = require('axios');

//* service for get all carts
const getCarts = async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/carts')
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for get cart by id
const getCartById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await axios.get(`https://fakestoreapi.com/carts/${id}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for get user by id
const getUserById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await axios.get(`https://fakestoreapi.com/carts/user/${id}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for create a cart
const createCart = async (req, res) => {
    const cartData = req.body
    try {
        const response = await axios.post('https://fakestoreapi.com/carts', cartData)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for update a cart by id
const updateCartById = async (req, res) => {
    const id = req.params.id
    const cartData = req.body
    try {
        const response = await axios.put(`https://fakestoreapi.com/carts/${id}`, cartData)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for delete cart by id
const deleteCartById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await axios.delete(`https://fakestoreapi.com/carts/${id}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {getCarts, getCartById, getUserById, createCart, updateCartById, deleteCartById}