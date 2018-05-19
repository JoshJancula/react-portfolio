const express = require('express');
const router = express.Router();

router.use('/api', require('./apiRoutes'));

router.use(express.static('client/public'));

module.exports = router;