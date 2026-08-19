/**
 * TRAVELBHARAT - DESTINATION CONTROLLER (backend/controllers/destinationController.js)
 * Full CRUD, search, and multi-facet filtering for 500+ Tourist Destinations.
 */

const Destination = require('../models/Destination');

// @desc    Get destinations
// @route   GET /api/destinations
exports.getAllDestinations = async (req, res) => {
  try {
    const {
      stateId,
      cityId,
      category,
      isPopular,
      isHiddenGem,
      search,
      limit = 100,
      page = 1
    } = req.query;

    const filter = {};

    if (stateId && stateId.toLowerCase() !== 'all') {
      filter.stateId = stateId.toLowerCase();
    }

    if (cityId && cityId.toLowerCase() !== 'all') {
      filter.cityId = cityId.toLowerCase();
    }

    if (category && category.toLowerCase() !== 'all') {
      filter.category = new RegExp(`^${category}$`, 'i');
    }

    if (isPopular !== undefined) {
      filter.isPopular = isPopular === 'true';
    }

    if (isHiddenGem !== undefined) {
      filter.isHiddenGem = isHiddenGem === 'true';
    }

    if (search) {
      filter.$or = [
        { name: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') },
        { tags: new RegExp(search, 'i') },
        { category: new RegExp(search, 'i') }
      ];
    }

    const totalCount = await Destination.countDocuments(filter);
    const destinations = await Destination.find(filter)
      .sort({ name: 1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    res.status(200).json({
      success: true,
      count: destinations.length,
      totalCount,
      totalPages: Math.ceil(totalCount / parseInt(limit)),
      currentPage: parseInt(page),
      data: destinations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error retrieving destinations',
      error: error.message
    });
  }
};

// @desc    Get single destination by slug ID
// @route   GET /api/destinations/:id
exports.getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findOne({ id: req.params.id.toLowerCase() });

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: `Destination with ID '${req.params.id}' not found`
      });
    }

    res.status(200).json({
      success: true,
      data: destination
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error retrieving destination',
      error: error.message
    });
  }
};

// @desc    Global Multi-Facet Search
// @route   GET /api/destinations/search/query
exports.searchDestinations = async (req, res) => {
  try {
    const { q, state, category } = req.query;
    const filter = {};

    if (q) {
      filter.$or = [
        { name: new RegExp(q, 'i') },
        { description: new RegExp(q, 'i') },
        { tags: new RegExp(q, 'i') }
      ];
    }

    if (state && state !== 'all') filter.stateId = state.toLowerCase();
    if (category && category !== 'all') filter.category = new RegExp(`^${category}$`, 'i');

    const results = await Destination.find(filter).limit(50);

    res.status(200).json({
      success: true,
      count: results.length,
      data: results
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Search query failed',
      error: error.message
    });
  }
};

// @desc    Create new destination [Admin]
// @route   POST /api/destinations
exports.createDestination = async (req, res) => {
  try {
    if (!req.body.id && req.body.name) {
      req.body.id = req.body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    const destination = await Destination.create(req.body);
    res.status(201).json({
      success: true,
      data: destination
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create destination',
      error: error.message
    });
  }
};

// @desc    Update destination by ID [Admin]
// @route   PUT /api/destinations/:id
exports.updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findOneAndUpdate(
      { id: req.params.id.toLowerCase() },
      req.body,
      { new: true, runValidators: true }
    );

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: `Destination with ID '${req.params.id}' not found`
      });
    }

    res.status(200).json({
      success: true,
      data: destination
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update destination',
      error: error.message
    });
  }
};

// @desc    Delete destination by ID [Admin]
// @route   DELETE /api/destinations/:id
exports.deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findOneAndDelete({ id: req.params.id.toLowerCase() });

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: `Destination with ID '${req.params.id}' not found`
      });
    }

    res.status(200).json({
      success: true,
      message: `Destination '${destination.name}' successfully deleted`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete destination',
      error: error.message
    });
  }
};