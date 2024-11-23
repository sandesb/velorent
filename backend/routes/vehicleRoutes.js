const express = require('express');
const { createVehicle, fetchAllVehicles } = require('../controllers/vehicleController');

const router = express.Router();

// Route to add a new vehicle
router.post('/vehicles', createVehicle);

// Route to fetch all vehicles
router.get('/vehicles', fetchAllVehicles);

module.exports = router;
