const pool = require('../db');

// Add a new vehicle
const addVehicle = async (vehicle) => {
  const { model, year, type, rate_per_day, qr_code, availability_status, photo } = vehicle;
  try {
    const result = await pool.query(
      `INSERT INTO vehicles 
      (id, model, year, type, rate_per_day, qr_code, availability_status, photo) 
      VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7) 
      RETURNING *`,
      [model, year, type , rate_per_day, qr_code, availability_status, photo]
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

module.exports = {
  addVehicle,
  getAllVehicles, // Export the new function

};
