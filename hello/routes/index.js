var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '반갑습니다' });
});

router.get('/insert', function(req,res, next){
	res.render('index', { title: '방가방가' });
});


module.exports = router;
