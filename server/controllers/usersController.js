const axios = require('axios');

//* service for get all users
const getUsers = async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/users')
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for get user by id
const getUserById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await axios.get(`https://fakestoreapi.com/users/${id}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for create a user
const createUser = async (req, res) => {
    const userData = req.body
    try {
        const response = await axios.post('https://fakestoreapi.com/users', userData)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for update a user by id
const updateUserById = async (req, res) => {
    const id = req.params.id
    const userData = req.body
    try {
        const response = await axios.put(`https://fakestoreapi.com/users/${id}`, userData)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//* service for delete user by id
const deleteUserById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await axios.delete(`https://fakestoreapi.com/users/${id}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {getUsers, getUserById, createUser, updateUserById, deleteUserById}