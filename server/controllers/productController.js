const axios = require('axios');

//* service for get all products
const getProducts = async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for get product by id
const getProductById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for delete product by id
const deleteProductById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await axios.delete(`https://fakestoreapi.com/products/${id}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { getProducts, getProductById, deleteProductById}