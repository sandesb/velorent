const pool = require('../db');

// Fetch all users
const getUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Fetch user by email
const getUserByEmail = async (email) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Add a new user
const addUser = async (user) => {
  const { full_name, email, password, number, address, role } = user;
  try {
    const result = await pool.query(
      'INSERT INTO users (id, full_name, email, password, number, address, role) VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6) RETURNING *',
      [full_name, email, password, number, address, role]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};


// Update user by ID
const updateUser = async (id, user) => {
  const { full_name, email, number, address, role } = user;
  try {
    const result = await pool.query(
      `UPDATE users
       SET full_name = $1, email = $2, number = $3, address = $4, role = $5
       WHERE id = $6
       RETURNING *`,
      [full_name, email, number, address, role, id]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Delete user by ID
const deleteUser = async (id) => {
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
  getUserByEmail,
  addUser,
  updateUser,
  deleteUser,
};
