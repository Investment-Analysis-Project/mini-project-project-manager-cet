const express = require('express');
const router = express.Router();
const uploads_controller = require('../controllers/uploads');

router.post('/', uploads_controller.uploadFile);

module.exports = router;