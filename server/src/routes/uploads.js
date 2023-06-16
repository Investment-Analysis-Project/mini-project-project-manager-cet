const express = require('express');
const router = express.Router();
const uploads_controller = require('../controllers/uploads');

router.post('/abstract', uploads_controller.uploadAbstract);
router.post('/report', uploads_controller.uploadReport);

module.exports = router;