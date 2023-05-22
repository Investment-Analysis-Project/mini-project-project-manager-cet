const express = require('express');
const router = express.Router();
const teams_controller = require('../controllers/teams');

router.get('/', teams_controller.getAllTeams);
router.get('/:id', teams_controller.getidTeam);
router.post('/', teams_controller.addTeam);
router.put('/:id', teams_controller.updateTeam);
router.delete('/:id', teams_controller.deleteTeam);

module.exports = router;