const express = require('express');
const router = express.Router();

// middleware
const authenticateUser = require('../middleware/authenticate');

// controller
const packageController = require('../controllers/packageController')

router.route('/package').get(packageController.getAllPackage);
router.route('/package/:id').get(packageController.getPackageById);

module.exports = router;