const express = require('express');
const router = express.Router();
const guides_controller = require('../controllers/guides');

router.get('/', guides_controller.getAllGuides);
router.get('/:id', guides_controller.getidGuide);
router.post('/', guides_controller.addGuide);
router.put('/:id', guides_controller.updateGuide);
router.delete('/:id', guides_controller.deleteGuide);

module.exports = router;