var express = require('express');
var router = express.Router();

const listWeatherController = require('../controller/indexController')


router.get('/', listWeatherController.home);
router.get('/listWeather', listWeatherController.list);
router.post('/listWeather', listWeatherController.add);
router.get('/detailWeather',listWeatherController.detail)
router.delete('/delete/:id', listWeatherController.delete)
router.get('/listTeam', listWeatherController.listTeam);
router.post('/listTeam', listWeatherController.addTeam);

module.exports = router;
