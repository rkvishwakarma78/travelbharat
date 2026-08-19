/**
 * TRAVELBHARAT - STATE MONGOOSE MODEL (backend/models/State.js)
 * Schema definition for all 28 States and 8 Union Territories in India.
 */

const mongoose =require('mongoose');

const stateSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'State slug ID is required (e.g. rajasthan)'],
    unique: true,
    trim: true,
    lowercase: true
  },
  name: {
    type: String,
    required: [true, 'State name is required'],
    trim: true
  },
  type: {
    type: String,
    enum: ['state', 'ut'],
    default: 'state'
  },
  region: {
    type: String,
    required: [true, 'Geographical region is required'],
    enum: ['North', 'South', 'West', 'East', 'Central', 'Northeast', 'UT']
  },
  capital: {
    type: String,
    required: true,
    trim: true
  },
  tagline: {
    type: String,
    default: 'Explore India with TravelBharat'
  },
  overview: {
    type: String,
    required: true
  },
  bestTimeToVisit: {
    type: String,
    default: 'October to March'
  },
  popularDishes: {
    type: [String],
    default: []
  },
  majorAirports: {
    type: [String],
    default: []
  },
  bannerImage: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

stateSchema.index({ name: 'text', tagline: 'text', overview: 'text' });

module.exports = mongoose.model('State', stateSchema);