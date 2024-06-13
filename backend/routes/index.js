const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/visit', require('./visit'));

module.exports = router;
