/**
 * TRAVELBHARAT - INQUIRY CONTROLLER (backend/controllers/inquiryController.js)
 * Handles contact form submissions and feedback retrieval.
 */

const Inquiry = require('../models/Inquiry');

// @desc    Submit new contact inquiry
// @route   POST /api/inquiries
exports.submitInquiry = async (req, res) => {
  try {
    const { name, email, subject, place, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, and message.'
      });
    }

    const inquiry = await Inquiry.create({
      name,
      email,
      subject: subject || 'General Tourism Inquiry',
      place: place || '',
      message
    });

    res.status(201).json({
      success: true,
      message: 'Your inquiry has been received successfully.',
      data: inquiry
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to record inquiry',
      error: error.message
    });
  }
};

// @desc    Get all inquiries [Admin]
// @route   GET /api/inquiries
exports.getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error retrieving inquiries',
      error: error.message
    });
  }
};

// @desc    Delete inquiry [Admin]
// @route   DELETE /api/inquiries/:id
exports.deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Inquiry deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete inquiry',
      error: error.message
    });
  }
};