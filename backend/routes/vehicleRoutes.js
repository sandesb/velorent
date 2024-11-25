const express = require('express');
const { createVehicle, fetchAllVehicles, fetchVehiclesByUserId, fetchVehiclesById  } = require('../controllers/vehicleController');

const router = express.Router();

// Route to add a new vehicle
router.post('/vehicles', createVehicle);

// Route to fetch all vehicles
router.get('/vehicles', fetchAllVehicles);

router.get('/vehicles/:userId', fetchVehiclesByUserId);
router.get('/vehicles/details/:id', fetchVehiclesById);



module.exports = router;
