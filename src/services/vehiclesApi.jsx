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
};

export default vehiclesApi;
