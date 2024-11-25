import axios from "axios";

const BASE_URL = "http://localhost:5000/api/vehicles"; // Base URL for vehicle-related endpoints

const vehiclesApi = {
  // Add a new vehicle
  addVehicle: (vehicleData) => {
    return new Promise((resolve, reject) => {
      axios
        .post(BASE_URL, vehicleData)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },

  // Fetch all vehicles
  getVehicles: () => {
    return new Promise((resolve, reject) => {
      axios
        .get(BASE_URL)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },

  // Fetch vehicles by user_id
  getVehiclesByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}/${userId}`) // Use endpoint for user-specific vehicles
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },

  getVehiclesById: (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}/details/${id}`) // Use endpoint for user-specific vehicles
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },
};

export default vehiclesApi;
