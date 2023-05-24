const express = require('express');
const router = express.Router();
const students_controller = require('../controllers/students');

router.get('/', students_controller.getAllStudents);
router.get('/:id', students_controller.getidStudent);
router.get('/team/:id', students_controller.getteamStudent);
router.post('/', students_controller.addStudent);
router.put('/:id', students_controller.updateStudent);
router.delete('/:id', students_controller.deleteStudent);

module.exports = router;