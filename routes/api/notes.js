const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//POST /notes
router.post('/', notesCtrl.create);

module.exports = router;