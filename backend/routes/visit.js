const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitController');

router.get('/record-visit', visitController.recordVisit);
router.get('/visit-data', visitController.getVisitData);

module.exports = router;
