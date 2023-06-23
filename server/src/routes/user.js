const express=require('express');
const router=express.Router();
const userController = require('../controllers/user'); 
const verify = require('../utils/verify');

router.get('/email/:id',userController.userEmail);
router.put('/changepassword/:id',verify.verifyUser,userController.changePassword );

module.exports = router;