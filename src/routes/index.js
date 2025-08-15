const express = require('express');
const journalRoutes = require('./journal');

const router = express.Router();

router.use('/journal', journalRoutes);

module.exports = router;