var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('RanpreetKaur', { title: 'Ranpreet Kaur' });
});
router.get('/TeninderSingh', function(req, res, next) {
  res.render('TeninderSingh', { title: 'Teninder Singh' });
});
router.get('/HarjitKaur', function(req, res, next) {
  res.render('HarjitKaur', { title: 'Harjit Kaur' });
});
router.get('/RanpinderSingh', function(req, res, next) {
  res.render('RanpinderSingh', { title: 'Ranpinder Singh' });
});

module.exports = router;
