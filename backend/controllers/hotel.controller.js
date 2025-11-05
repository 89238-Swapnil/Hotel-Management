const multer = require('multer');
const Hotel = require('../models/hotel.model');

exports.createHotel = async (req, res) => {
  try {
    const hotelData = {
      ...req.body,
      image: req.file ? `/upload/${req.file.filename}` : ''
    };

    const hotel = new Hotel(hotelData);
    await hotel.save();
    res.status(201).json(hotel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  console.log('req.body:', req.body);
  console.log('req.file:', req.file);

};
