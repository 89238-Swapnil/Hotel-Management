const express = require('express');
const router = express.Router();
const { createBooking, getBookings } = require('../controllers/booking.controller');

router.post('/', createBooking);     // Book a hotel
router.get('/', getBookings);        // Get all bookings

module.exports = router;
