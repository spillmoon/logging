var express = require('express');
var router = express.Router();

var logger = require('../common/logger');

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.log('debug', req.headers);
  logger.log('debug', req.query);
  res.render('index', { title: 'Express' });
});

module.exports = router;
