const express = require('express');
const router = express.Router();
const projects_controller = require('../controllers/projects');

router.get('/', projects_controller.getAllProjects);
router.get('/:id', projects_controller.getidProject);
router.post('/', projects_controller.addProject);
router.put('/:id', projects_controller.updateProject);
router.delete('/:id', projects_controller.deleteProject);

module.exports = router;