var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('calendar.jade');
});

router.get('/events', function(req, res) {
  var startDate = req.query.start;
  var endDate = req.query.end;

  res.send(req.query.start);
});

router.get('/test', function(req, res) {
  console.log("tested ok");
});

module.exports = router;
