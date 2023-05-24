const express = require('express');
const router = express.Router();

// middleware
const authenticateUser = require('../middleware/authenticate');

// controller
const { placeList, placeFromId } = require('../controllers/placeController');

router.route('/').get(placeList);
router.route('/:id').get(placeFromId);

module.exports = router;