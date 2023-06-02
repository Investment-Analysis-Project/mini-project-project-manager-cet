const express=require('express');
const router=express.Router();
const authController = require('../controllers/auth'); 
const verify = require("../utils/verify");

router.post('/create',verify.verifyAdmin,authController.create);
router.post('/login',authController.login);

module.exports = router;