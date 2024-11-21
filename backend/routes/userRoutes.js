const express = require('express');
const { getAllUsers, createUser, loginUser, updateUserById, deleteUserById } = require('../controllers/userController');

const router = express.Router();

// Route to get all users
router.get('/users', getAllUsers);

// Route to add a new user
router.post('/users', createUser);

// Route to login
router.post('/login', loginUser);

// Route to update a user
router.put('/users/:id', updateUserById);

// Route to delete a user
router.delete('/users/:id', deleteUserById);

module.exports = router;
