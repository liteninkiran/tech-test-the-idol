const express = require('express');
const router = express.Router();
const teamListingController = require('../controllers/teamListingController');

/**
 *  Customer Routes 
 */
router.get('/', teamListingController.index);

module.exports = router;
