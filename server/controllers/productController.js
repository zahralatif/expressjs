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

//* service for create a product
const createProduct = async (req, res) => {
    const productData = req.body
    try {
        const response = await axios.post('https://fakestoreapi.com/products', productData)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for update a product by id
const updateProductById = async (req, res) => {
    const id = req.params.id
    const productData = req.body
    try {
        const response = await axios.put(`https://fakestoreapi.com/products/${id}`, productData)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for get all products with limit
const getProductsWithLimit = async (req, res) => {
    const limit = req.query.limit || 5;
    try {
        const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

//* service for get all categories
const getAllCategories = async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { getProducts, getProductById, deleteProductById, createProduct, updateProductById, getProductsWithLimit, getAllCategories }
