const express = require('express');
const router = express.Router();
const faculty_controller = require('../controllers/faculty');
const verify = require("../utils/verify");

router.get('/', faculty_controller.getAllfaculty);
router.get('/faculty_det/:id', faculty_controller.getbyidFaculty);
router.get('/faculty_user_id/:id', faculty_controller.getuseridFaculty);
router.post('/',verify.verifyAdmin,faculty_controller.addFaculty);
router.put('/:id',verify.verifyUser,faculty_controller.updateFaculty);
router.delete('/:id',verify.verifyAdmin,faculty_controller.deleteFaculty);

module.exports = router;


// Format for Post request
// {
//     "username": "string",
//     "password": "string",
//     "email": "string",
//     "faculty_id": "string",
//     "faculty_name": "string",
//     "designation": "string",
//     "area_of_interest": "List",
//     "experience": "Integer",
//     "contact": "string"
// }