const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  rooms: { type: Number, required: true },
  amenities: {
    bathroom: { type: Boolean, default: false },
    ac: { type: Boolean, default: false },
    wifi: { type: Boolean, default: false }
  },
  image: { type: String } // URL to hotel photo
});

module.exports = mongoose.model('Hotel', hotelSchema);
