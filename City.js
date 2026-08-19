/**
 * TRAVELBHARAT - CITY MONGOOSE MODEL (backend/models/City.js)
 * Schema definition for 200+ Indian tourist cities, transit guides, and weather notes.
 */

const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'City slug ID is required (e.g. jaipur)'],
    unique: true,
    trim: true,
    lowercase: true
  },
  name: {
    type: String,
    required: [true, 'City name is required'],
    trim: true
  },
  stateId: {
    type: String,
    required: [true, 'Parent state slug ID is required (e.g. rajasthan)'],
    trim: true,
    lowercase: true,
    index: true
  },
  region: {
    type: String,
    default: 'North'
  },
  tier: {
    type: String,
    enum: ['major', 'offbeat'],
    default: 'major'
  },
  knownAs: {
    type: String,
    default: 'Historic Tourist Hub'
  },
  overview: {
    type: String,
    required: true
  },
  bestTime: {
    type: String,
    default: 'October to March'
  },
  idealDuration: {
    type: String,
    default: '2-3 Days'
  },
  howToReach: {
    air: { type: String, default: 'Nearest domestic airport.' },
    train: { type: String, default: 'Major railway junction.' },
    road: { type: String, default: 'Connected via National Highways.' }
  },
  weatherInfo: {
    type: String,
    default: 'Pleasant winter season, warm summers.'
  },
  heroImage: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

citySchema.index({ name: 'text', knownAs: 'text', overview: 'text' });
citySchema.index({ stateId: 1, tier: 1 });

module.exports = mongoose.model('City', citySchema);