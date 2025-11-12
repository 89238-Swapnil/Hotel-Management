const express = require('express');
const router = express.Router();
const { createHotel, getHotels } = require('../controllers/hotel.controller');
const upload = require('../middlewares/upload'); // ✅ Add this line

router.post('/', upload.single('image'), createHotel);  // Add a new hotel
router.get('/', getHotels);        // Get all hotels
console.log('getHotels:', typeof getHotels); // should log "function"

module.exports = router;
