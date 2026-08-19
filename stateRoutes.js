const express = require('express');
const router = express.Router();
const {
  getAllStates,
  getStateById,
  createState,
  updateState,
  deleteState
} = require('../controllers/stateController');

router.route('/')
  .get(getAllStates)
  .post(createState);

router.route('/:id')
  .get(getStateById)
  .put(updateState)
  .delete(deleteState);

module.exports = router;