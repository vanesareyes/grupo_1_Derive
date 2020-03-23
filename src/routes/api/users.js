const path = require('path');
const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersController');

router.get('/', usersAPIController.list);
router.get('/:id', usersAPIController.detail);

module.exports = router;