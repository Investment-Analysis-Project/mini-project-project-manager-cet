const express = require('express');
const router = express.Router();
const faculty_controller = require('../controllers/faculty');
const verify = require("../utils/verify");

router.get('/', faculty_controller.getAllfaculty);
router.get('/facultydet/:id', faculty_controller.getidFaculty);
router.get('/facultyid/:id',faculty_controller.getuseridFaculty);
router.post('/',verify.verifyAdmin,faculty_controller.addFaculty);
router.put('/:id',verify.verifyUser,faculty_controller.updateFaculty);
router.delete('/:id',verify.verifyAdmin,faculty_controller.deleteFaculty);

module.exports = router;