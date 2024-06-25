const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../controllers/usersController');

router.get('/all', getUsers);
router.get('/:id', getUserById);
router.post('/create', createUser); 
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

module.exports = router;