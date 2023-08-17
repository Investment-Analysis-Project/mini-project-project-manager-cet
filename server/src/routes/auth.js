const express=require('express');
const router=express.Router();
const authController = require('../controllers/auth'); 
const verify = require("../utils/verify");
const facultyController = require('../controllers/faculty');

router.post('/create',verify.verifyAdmin,facultyController.addFaculty);
router.post('/login',authController.login);

module.exports = router;