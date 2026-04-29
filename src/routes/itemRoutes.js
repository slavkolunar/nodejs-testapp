const express = require('express');
const controller = require('../controllers/itemController');

const router = express.Router();

router.post('/items', controller.create);
router.get('/items', controller.list);

module.exports = router;