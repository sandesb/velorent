const pool = require('../db'); // Import your database connection

// Add a new booking
const addBooking = async (booking) => {
  const {
    id,
    vehicle,
    price_per_day,
    duration,
    pick_up,
    total_rent,
    customer,
    date,
    vendor,
  } = booking;

  try {
    const result = await pool.query(
      `INSERT INTO bookings 
      (id, vehicle, price_per_day, duration, pick_up, total_rent, customer, date, vendor)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *`,
      [id, vehicle, price_per_day, duration, pick_up, total_rent, customer, date, vendor]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Fetch all bookings
const getAllBookings = async () => {
  try {
    const result = await pool.query('SELECT * FROM bookings');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Fetch a booking by ID
const getBookingById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM bookings WHERE id = $1', [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Fetch bookings by Customer ID
const getBookingsByCustomerId = async (customerId) => {
    try {
      const result = await pool.query('SELECT * FROM bookings WHERE customer = $1', [customerId]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  };
  
  // Fetch bookings by Vendor ID
  const getBookingsByVendorId = async (vendorId) => {
    try {
      const result = await pool.query('SELECT * FROM bookings WHERE vendor = $1', [vendorId]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  };

module.exports = {
    addBooking,
    getAllBookings,
    getBookingById,
    getBookingsByCustomerId,
    getBookingsByVendorId,
  };