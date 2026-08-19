const express = require('express');
const router = express.Router();
const {
  submitInquiry,
  getAllInquiries,
  deleteInquiry
} = require('../controllers/inquiryController');

router.route('/')
  .get(getAllInquiries)
  .post(submitInquiry);

router.route('/:id')
  .delete(deleteInquiry);

module.exports = router;