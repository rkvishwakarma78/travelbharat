/**
 * TRAVELBHARAT - DESTINATION / TOURIST PLACE MODEL (backend/models/Destination.js)
 * Schema definition for 500+ monuments, forts, beaches, temples, and attractions.
 */

const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Destination slug ID is required (e.g. taj-mahal)'],
    unique: true,
    trim: true,
    lowercase: true
  },
  name: {
    type: String,
    required: [true, 'Place name is required'],
    trim: true
  },
  stateId: {
    type: String,
    required: [true, 'Parent state ID is required'],
    trim: true,
    lowercase: true,
    index: true
  },
  cityId: {
    type: String,
    required: [true, 'Parent city ID is required'],
    trim: true,
    lowercase: true,
    index: true
  },
  category: {
    type: String,
    required: [true, 'Category is required (e.g. Heritage, Nature, Spiritual, Beaches, Adventure, Wildlife)'],
    trim: true,
    index: true
  },
  tags: {
    type: [String],
    default: []
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  history: {
    type: String,
    default: ''
  },
  bestTime: {
    type: String,
    default: 'October to March'
  },
  timings: {
    type: String,
    default: 'Sunrise to Sunset (06:00 AM - 06:00 PM)'
  },
  entryFee: {
    type: String,
    default: 'Free entry / Nominal ticket charges'
  },
  location: {
    type: String,
    default: ''
  },
  latitude: {
    type: Number,
    default: 0
  },
  longitude: {
    type: Number,
    default: 0
  },
  mapUrl: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    required: [true, 'Primary image URL is required']
  },
  gallery: {
    type: [String],
    default: []
  },
  nearbyPlaces: {
    type: [String],
    default: []
  },
  isPopular: {
    type: Boolean,
    default: false,
    index: true
  },
  isHiddenGem: {
    type: Boolean,
    default: false,
    index: true
  }
}, {
  timestamps: true
});

destinationSchema.index({
  name: 'text',
  description: 'text',
  category: 'text',
  tags: 'text'
});

destinationSchema.index({ stateId: 1, cityId: 1, category: 1 });

module.exports = mongoose.model('Destination', destinationSchema);