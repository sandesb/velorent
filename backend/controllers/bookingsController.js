const { addBooking, getAllBookings, getBookingById , getBookingsByCustomerId, getBookingsByVendorId} = require('../models/bookingsModel');

// Controller to add a new booking
const createBooking = async (req, res) => {
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
  } = req.body;

  if (!id || !vehicle || !price_per_day || !duration || !pick_up || !total_rent || !customer || !date || !vendor) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newBooking = await addBooking({
      id,
      vehicle,
      price_per_day,
      duration,
      pick_up,
      total_rent,
      customer,
      date,
      vendor,
    });

    res.status(201).json({
      message: 'Booking added successfully.',
      data: newBooking,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Failed to create booking.', error: error.message });
  }
};

// Controller to fetch all bookings
const fetchAllBookings = async (req, res) => {
  try {
    const bookings = await getAllBookings();
    res.status(200).json({
      message: 'Bookings fetched successfully.',
      data: bookings,
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Failed to fetch bookings.', error: error.message });
  }
};

// Controller to fetch a booking by ID
const fetchBookingById = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await getBookingById(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found.' });
    }

    res.status(200).json({
      message: 'Booking fetched successfully.',
      data: booking,
    });
  } catch (error) {
    console.error('Error fetching booking by ID:', error);
    res.status(500).json({ message: 'Failed to fetch booking.', error: error.message });
  }
};

// Controller to fetch bookings by Customer ID
const fetchBookingsByCustomerId = async (req, res) => {
    const { customerId } = req.params;
  
    try {
      const bookings = await getBookingsByCustomerId(customerId);
      res.status(200).json({
        message: 'Bookings fetched successfully.',
        data: bookings,
      });
    } catch (error) {
      console.error('Error fetching bookings by Customer ID:', error);
      res.status(500).json({ message: 'Failed to fetch bookings.', error: error.message });
    }
  };
  
  // Controller to fetch bookings by Vendor ID
  const fetchBookingsByVendorId = async (req, res) => {
    const { vendorId } = req.params;
  
    try {
      const bookings = await getBookingsByVendorId(vendorId);
      res.status(200).json({
        message: 'Bookings fetched successfully.',
        data: bookings,
      });
    } catch (error) {
      console.error('Error fetching bookings by Vendor ID:', error);
      res.status(500).json({ message: 'Failed to fetch bookings.', error: error.message });
    }
  };
  
  module.exports = {
    createBooking,
    fetchAllBookings,
    fetchBookingById,
    fetchBookingsByCustomerId,
    fetchBookingsByVendorId,
  };
