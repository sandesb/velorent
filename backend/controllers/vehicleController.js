const { addVehicle, getAllVehicles } = require('../models/vehicleModel');

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

// Existing controller to add a new vehicle
const createVehicle = async (req, res) => {
  const { model, year, type, rate_per_day, qr_code, availability_status, photo } = req.body;

  if (!model || !year || !rate_per_day) {
    return res.status(400).json({ message: 'Model, Year, and Rate per Day are required' });
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
    });

    res.status(201).json({
      message: 'Vehicle added successfully',
      data: newVehicle,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add vehicle', error: error.message });
  }
};

module.exports = {
  createVehicle,
  fetchAllVehicles, // Export the new controller
};
