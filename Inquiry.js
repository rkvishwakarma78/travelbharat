/**
 * TRAVELBHARAT - CONTACT INQUIRY MODEL (backend/models/Inquiry.js)
 * Schema definition for user tourism feedback, corrections, and academic evaluations.
 */

const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: [true, 'Valid email address is required'],
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address']
  },
  subject: {
    type: String,
    default: 'General Tourism Inquiry',
    enum: [
      'General Tourism Inquiry',
      'Destination Suggestion',
      'Information / Tariff Correction',
      'College Project Feedback',
      'Other'
    ]
  },
  place: {
    type: String,
    default: '',
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Message content is required'],
    trim: true,
    minlength: 8
  },
  status: {
    type: String,
    enum: ['new', 'read', 'archived'],
    default: 'new'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inquiry', inquirySchema);