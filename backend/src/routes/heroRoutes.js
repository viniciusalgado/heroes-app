const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');

router.get('/heroes', heroController.getAllHeroes);
router.post('/hero', heroController.getSpecificHero);

module.exports = router;
