const express = require('express');
const router = express.Router();
const teamListingController = require('../controllers/teamListingController');
const teamsController = require('../controllers/teamsController');
const membersController = require('../controllers/membersController');

router.get('/', teamListingController.index);

// Members
router.get('/members/view/:id', membersController.show);
router.get('/members/add', membersController.create);
router.post('/members/add', membersController.store);
router.get('/members/edit/:id', membersController.edit);
router.put('/members/edit/:id', membersController.update);
router.delete('/members/delete/:id', membersController.destroy);

// Teams
router.get('/teams/view/:id', teamsController.show);
router.get('/teams/edit/:id', teamsController.edit);
router.put('/teams/edit/:id', teamsController.update);
router.delete('/teams/delete/:id', teamsController.destroy);

module.exports = router;
