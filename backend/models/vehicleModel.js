const pool = require('../db');

const addVehicle = async (vehicle) => {
  const {
    model,
    year,
    type,
    rate_per_day,
    qr_code,
    availability_status,
    photo,
    user_id, // Add user_id here
  } = vehicle;

  try {
    const result = await pool.query(
      `INSERT INTO vehicles 
      (id, model, year, type, rate_per_day, qr_code, availability_status, photo, user_id) 
      VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *`,
      [model, year, type, rate_per_day, qr_code, availability_status, photo, user_id]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};


// Fetch all vehicles
const getAllVehicles = async () => {
    try {
      const result = await pool.query('SELECT * FROM vehicles');
      return result.rows;
    } catch (error) {
      throw error;
    }
  };

  const getAllVehiclesByUserId = async (user_id) => {
    try {
      const result = await pool.query('SELECT * FROM vehicles WHERE user_id = $1', [user_id]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  };

  const getVehiclesById = async (id) => {
    try {
      const result = await pool.query("SELECT * FROM vehicles WHERE id = $1", [id]);
      return result.rows[0]; // Return the vehicle if found
    } catch (error) {
      throw error; // Throw the error to be handled by the controller
    }
  };
  
  

module.exports = {
  addVehicle,
  getAllVehicles, // Export the new function
  getAllVehiclesByUserId, 
  getVehiclesById// Export the new function


};
