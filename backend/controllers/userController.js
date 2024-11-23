const bcrypt = require('bcrypt');
const { getUsers, addUser, getUserByEmail, updateUser, deleteUser } = require('../models/userModel');

// Controller to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();

    // Exclude passwords from the response
    const usersWithoutPasswords = users.map(({ password, ...rest }) => rest);

    res.status(200).json(usersWithoutPasswords);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// Controller to add a new user
const createUser = async (req, res) => {
  try {
    const user = req.body;

    // Validate input
    if (!user.full_name || !user.email || !user.password || !user.number || !user.address || typeof user.role !== 'boolean') {
      return res.status(400).json({ message: 'All fields are required and must be valid.' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(user.password, 10); // 10 is the salt rounds
    user.password = hashedPassword;

    // Save the user in the database
    const newUser = await addUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Controller to handle login
const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body; // Include role

    // Validate input
    if (!email || !password || typeof role !== "boolean") {
      return res.status(400).json({ message: "Email, password, and role are required." });
    }

    // Fetch user by email
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Validate role
    if (user.role !== role) {
      return res.status(403).json({ message: "Role mismatch." });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Login successful
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        number: user.number,
        address: user.address,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error.message);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};


// Controller to update a user
const updateUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = req.body;
  
      // Validate input
      if (!user.full_name || !user.email || !user.number || !user.address || typeof user.role !== 'boolean') {
        return res.status(400).json({ message: 'All fields are required and must be valid.' });
      }
  
      // Update the user in the database
      const updatedUser = await updateUser(id, user);
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error.message);
      res.status(500).json({ message: 'Error updating user', error: error.message });
    }
  };
  
  // Controller to delete a user
  const deleteUserById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Delete the user from the database
      const deletedUser = await deleteUser(id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
      console.error('Error deleting user:', error.message);
      res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
  };
  
  module.exports = {
    getAllUsers,
    createUser,
    loginUser,
    updateUserById,
    deleteUserById,
  };
