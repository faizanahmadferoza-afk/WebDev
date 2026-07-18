const express = require('express');
const router = express.Router();
const { getItems, createItem, deleteItem } = require('../controllers/itemController');
const { protect } = require('../middleware/authMiddleware');

// Route configurations
router.route('/')
  .get(getItems)          // Public access
  .post(protect, createItem); // Protected access (Requires valid JWT token)

router.route('/:id')
  .delete(protect, deleteItem); // Protected access

module.exports = router;