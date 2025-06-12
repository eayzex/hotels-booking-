
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  gallery: [String],
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['luxury', 'riad', 'mountain', 'desert', 'kasbah', 'beach'],
    required: true
  },
  amenities: [String],
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Hotel', hotelSchema);
