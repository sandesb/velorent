const { addVehicle, getAllVehicles,  getAllVehiclesByUserId,  getVehiclesById } = require('../models/vehicleModel');

// Controller to fetch all vehicles
const fetchAllVehicles = async (req, res) => {
  try {
    const vehicles = await getAllVehicles();
    res.status(200).json({
      message: 'Vehicles fetched successfully',
      data: vehicles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch vehicles', error: error.message });
  }
};

const createVehicle = async (req, res) => {
  const {
    model,
    year,
    type,
    rate_per_day,
    qr_code,
    availability_status,
    photo,
    user_id, // Include user_id here
  } = req.body;

  if (!model || !year || !rate_per_day || !user_id) {
    return res.status(400).json({
      message: 'Model, Year, Rate per Day, and User ID are required',
    });
  }

  try {
    const newVehicle = await addVehicle({
      model,
      year,
      type,
      rate_per_day,
      qr_code,
      availability_status,
      photo,
      user_id, // Pass user_id here
    });

    res.status(201).json({
      message: 'Vehicle added successfully',
      data: newVehicle,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to add vehicle',
      error: error.message,
    });
  }
};

// Controller to fetch vehicles by user_id
const fetchVehiclesByUserId = async (req, res) => {
  const { userId } = req.params; // Extract userId from the request parameters

  try {
    const vehicles = await getAllVehiclesByUserId(userId);
    res.status(200).json({
      message: 'Vehicles fetched successfully',
      data: vehicles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch vehicles', error: error.message });
  }
};

const fetchVehiclesById = async (req, res) => {
  const { id } = req.params;

  try {
    const vehicle = await getVehiclesById(id);
    if (vehicle) {
      res.status(200).json({
        message: "Vehicle fetched successfully",
        data: vehicle, // Send the vehicle object
      });
    } else {
      res.status(404).json({
        message: "Vehicle not found",
        data: [], // Explicitly return an empty array if not found
      });
    }
  } catch (error) {
    console.error("Error fetching vehicle by ID:", error);
    res.status(500).json({
      message: "Failed to fetch vehicle",
      error: error.message,
    });
  }
};





module.exports = {
  createVehicle,
  fetchAllVehicles, // Export the new controller
  fetchVehiclesByUserId,
  fetchVehiclesById // Export the new controller

};
