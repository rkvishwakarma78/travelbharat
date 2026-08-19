const express = require('express');
const router = express.Router();
const {
  getAllDestinations,
  getDestinationById,
  searchDestinations,
  createDestination,
  updateDestination,
  deleteDestination
} = require('../controllers/destinationController');

router.get('/search/query', searchDestinations);

router.route('/')
  .get(getAllDestinations)
  .post(createDestination);

router.route('/:id')
  .get(getDestinationById)
  .put(updateDestination)
  .delete(deleteDestination);

module.exports = router;