var express = require('express');
var router = express.Router();

const listWeatherController = require('../controller/indexController')


router.get('/', listWeatherController.home);
router.get('/listWeather', listWeatherController.list);
router.post('/listWeather', listWeatherController.add);

module.exports = router;
