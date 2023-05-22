const express = require('express');
const router = express.Router();
const guides_controller = require('../controllers/guides');

router.get('/', guides_controller.getAllGuides);

module.exports = router;