var express = require('express');
var router = express.Router();
var gjStation =require('../models/gjbusStation');

/* GET home page. */
router.get('/', function(req, res, next) {
  let station = req.query.station
  gjStation.find({BUSSTOP_NAME:station})
});

module.exports = router;
