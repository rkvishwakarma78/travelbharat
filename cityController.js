/**
 * TRAVELBHARAT - CITY CONTROLLER (backend/controllers/cityController.js)
 * Handles CRUD operations for 200+ Indian tourist cities and transit guides.
 */

const City = require('../models/City');

// @desc    Get all cities
// @route   GET /api/cities
exports.getAllCities = async (req, res) => {
  try {
    const { stateId, tier, region, search } = req.query;
    const filter = {};

    if (stateId && stateId.toLowerCase() !== 'all') {
      filter.stateId = stateId.toLowerCase();
    }

    if (tier) {
      filter.tier = tier.toLowerCase();
    }

    if (region && region.toLowerCase() !== 'all') {
      filter.region = new RegExp(`^${region}$`, 'i');
    }

    if (search) {
      filter.$or = [
        { name: new RegExp(search, 'i') },
        { knownAs: new RegExp(search, 'i') },
        { overview: new RegExp(search, 'i') }
      ];
    }

    const cities = await City.find(filter).sort({ name: 1 });
    res.status(200).json({
      success: true,
      count: cities.length,
      data: cities
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error retrieving cities',
      error: error.message
    });
  }
};

// @desc    Get single city by slug ID
// @route   GET /api/cities/:id
exports.getCityById = async (req, res) => {
  try {
    const city = await City.findOne({ id: req.params.id.toLowerCase() });

    if (!city) {
      return res.status(404).json({
        success: false,
        message: `City with ID '${req.params.id}' not found`
      });
    }

    res.status(200).json({
      success: true,
      data: city
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error retrieving city',
      error: error.message
    });
  }
};

// @desc    Create new city [Admin]
// @route   POST /api/cities
exports.createCity = async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.status(201).json({
      success: true,
      data: city
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create city',
      error: error.message
    });
  }
};

// @desc    Update city by ID [Admin]
// @route   PUT /api/cities/:id
exports.updateCity = async (req, res) => {
  try {
    const city = await City.findOneAndUpdate(
      { id: req.params.id.toLowerCase() },
      req.body,
      { new: true, runValidators: true }
    );

    if (!city) {
      return res.status(404).json({
        success: false,
        message: `City with ID '${req.params.id}' not found`
      });
    }

    res.status(200).json({
      success: true,
      data: city
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update city',
      error: error.message
    });
  }
};

// @desc    Delete city by ID [Admin]
// @route   DELETE /api/cities/:id
exports.deleteCity = async (req, res) => {
  try {
    const city = await City.findOneAndDelete({ id: req.params.id.toLowerCase() });

    if (!city) {
      return res.status(404).json({
        success: false,
        message: `City with ID '${req.params.id}' not found`
      });
    }

    res.status(200).json({
      success: true,
      message: `City '${city.name}' successfully deleted`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete city',
      error: error.message
    });
  }
};