const express = require('express')
const router = express();

// middleware
const authenticateUser = require('../middleware/authenticate');

// controller
const {getRecommendation} = require('../controllers/recommendationController')

router.route('/recommendation').post(getRecommendation);

module.exports = router;