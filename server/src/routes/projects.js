const express = require('express');
const router = express.Router();
const projects_controller = require('../controllers/projects');
const verify = require('../utils/verify');

router.get('/',projects_controller.getAllProjects);
router.get('/:id', projects_controller.getidProject);
router.post('/',verify.verifyAdmin,projects_controller.addProject);
router.put('/:id',verify.verifyAdmin,projects_controller.updateProject);
router.delete('/:id',verify.verifyAdmin,projects_controller.deleteProject);

module.exports = router;