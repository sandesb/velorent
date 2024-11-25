const express = require('express');
const {
  createBooking,
  fetchAllBookings,
  fetchBookingById,
  fetchBookingsByCustomerId,
  fetchBookingsByVendorId,
} = require('../controllers/bookingsController');

const router = express.Router();

// Route to add a new booking
router.post('/bookings', createBooking);

// Route to fetch all bookings
router.get('/bookings', fetchAllBookings);

// Route to fetch a booking by ID
router.get('/bookings/:id', fetchBookingById);

// Route to fetch bookings by Customer ID
router.get('/bookings/customer/:customerId', fetchBookingsByCustomerId);

// Route to fetch bookings by Vendor ID
router.get('/bookings/vendor/:vendorId', fetchBookingsByVendorId);

module.exports = router;
