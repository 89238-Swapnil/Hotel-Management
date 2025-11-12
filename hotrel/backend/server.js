// Load environment variables from .env file
require('dotenv').config();

// Import dependencies
const cors = require('cors');
const express = require('express');
const path = require('path');
const connectDB = require('./config/db.config');
const authRoutes = require('./routes/auth.routes');
const hotelRoutes = require('./routes/hotel.routes');
const bookingRoutes = require('./routes/booking.routes');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


connectDB();


app.use('/api/hotels', hotelRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

//console.log('req.body:', req.body);
//console.log('req.file:', req.file);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
