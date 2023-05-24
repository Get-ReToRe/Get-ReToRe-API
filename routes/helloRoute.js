const express = require('express');
const router = express.Router();

// middleware
const authenticateUser = require('../middleware/authenticate');

// controller
const { sayHello, sayHelloName } = require('../controllers/helloController');

router.route('/hello').get(authenticateUser,sayHello);
router.route('/hello/:name').get(sayHelloName);

module.exports = router;

