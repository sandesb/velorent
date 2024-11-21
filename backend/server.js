const express = require('express');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes'); // Import user routes
require('./db'); // Import and initialize database connection

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Velorenta API');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
