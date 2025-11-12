const Booking = require('../models/booking.model');

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find().populate('hotel');
  res.json(bookings);
};
