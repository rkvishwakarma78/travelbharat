/**
 * TRAVELBHARAT - STATE CONTROLLER (backend/controllers/stateController.js)
 * Handles CRUD operations for 36 Indian States and Union Territories.
 */

const State = require('../models/State');

// @desc    Get all states (with optional ?region= filter)
// @route   GET /api/states
exports.getAllStates = async (req, res) => {
  try {
    const { region, type } = req.query;
    const filter = {};

    if (region && region.toLowerCase() !== 'all') {
      if (region.toLowerCase() === 'ut') {
        filter.type = 'ut';
      } else {
        filter.region = new RegExp(`^${region}$`, 'i');
        filter.type = { $ne: 'ut' };
      }
    }

    if (type) {
      filter.type = type.toLowerCase();
    }

    const states = await State.find(filter).sort({ name: 1 });
    res.status(200).json({
      success: true,
      count: states.length,
      data: states
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error retrieving states',
      error: error.message
    });
  }
};

// @desc    Get single state by slug ID
// @route   GET /api/states/:id
exports.getStateById = async (req, res) => {
  try {
    const state = await State.findOne({ id: req.params.id.toLowerCase() });
    
    if (!state) {
      return res.status(404).json({
        success: false,
        message: `State with ID '${req.params.id}' not found`
      });
    }

    res.status(200).json({
      success: true,
      data: state
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error retrieving state',
      error: error.message
    });
  }
};

// @desc    Create new state [Admin]
// @route   POST /api/states
exports.createState = async (req, res) => {
  try {
    const state = await State.create(req.body);
    res.status(201).json({
      success: true,
      data: state
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create state',
      error: error.message
    });
  }
};

// @desc    Update state by ID [Admin]
// @route   PUT /api/states/:id
exports.updateState = async (req, res) => {
  try {
    const state = await State.findOneAndUpdate(
      { id: req.params.id.toLowerCase() },
      req.body,
      { new: true, runValidators: true }
    );

    if (!state) {
      return res.status(404).json({
        success: false,
        message: `State with ID '${req.params.id}' not found`
      });
    }

    res.status(200).json({
      success: true,
      data: state
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update state',
      error: error.message
    });
  }
};

// @desc    Delete state by ID [Admin]
// @route   DELETE /api/states/:id
exports.deleteState = async (req, res) => {
  try {
    const state = await State.findOneAndDelete({ id: req.params.id.toLowerCase() });

    if (!state) {
      return res.status(404).json({
        success: false,
        message: `State with ID '${req.params.id}' not found`
      });
    }

    res.status(200).json({
      success: true,
      message: `State '${state.name}' successfully deleted`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete state',
      error: error.message
    });
  }
};