var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('holoHacker', { title: 'Express' });
});
router.get('/watchCoreDevelopment', function(req, res, next) {
  res.render('holoHacker', { title: 'Express' });
});

module.exports = router;
