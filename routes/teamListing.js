const express = require('express');
const router = express.Router();
const teamListingController = require('../controllers/teamListingController');

router.get('/', teamListingController.index);
router.delete('/members/delete/:id', teamListingController.deleteMember);

module.exports = router;
