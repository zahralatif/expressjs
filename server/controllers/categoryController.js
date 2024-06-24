const axios = require('axios');

//* service for get all categories
const getAllCategories = async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {getAllCategories};