import axios from "axios";

const BASE_URL = "http://localhost:5000/api/bookings"; // Base URL for bookings-related endpoints

const bookingsApi = {
  // Add a new booking
  addBooking: (bookingData) => {
    return new Promise((resolve, reject) => {
      axios
        .post(BASE_URL, bookingData)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },

  // Fetch bookings by Customer ID
  getBookingsByCustomerId: (customerId) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}/customer/${customerId}`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },

  // Fetch bookings by Vendor ID
  getBookingsByVendorId: (vendorId) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}/vendor/${vendorId}`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },
};

export default bookingsApi;
