const express = require('express');
const cors = require('cors'); // Import cors package
require('dotenv').config();

const userRoutes = require('./routes/userRoutes'); // Import user routes
require('./db'); // Import and initialize database connection
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
// Routes
app.use('/api', userRoutes);
app.use('/api', vehicleRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the Velorenta API');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
