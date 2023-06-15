const express = require('express')
const multer = require('multer')
const router = express();

// middleware
const authenticateUser = require('../middleware/authenticate');
const upload = require('../middleware/upload')

// controller
const {getRecommendation, getPrediction} = require('../controllers/recommendationController')

router.route('/recommendation').post(getRecommendation);
router.route('/predict').post(upload.single('image'), getPrediction);

module.exports = router;