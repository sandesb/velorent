const { Pool } = require('pg');
require('dotenv').config();

// PostgreSQL pool configuration
const pool = new Pool({
  user: process.env.PG_USER || 'your_username',
  host: process.env.PG_HOST || 'localhost',
  database: process.env.PG_DATABASE || 'velorenta',
  password: process.env.PG_PASSWORD || 'your_password',
  port: process.env.PG_PORT || 5432,
});

// Test database connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Database connection error:', err.stack));

module.exports = pool;
