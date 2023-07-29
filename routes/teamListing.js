const express = require('express');
const router = express.Router();
const teamListingController = require('../controllers/teamListingController');

router.get('/', teamListingController.index);
router.delete('/members/delete/:id', teamListingController.deleteMember);
router.delete('/teams/delete/:id', teamListingController.deleteTeam);
router.get('/members/view/:id', teamListingController.viewMember);
router.get('/teams/view/:id', teamListingController.viewTeam);

module.exports = router;
