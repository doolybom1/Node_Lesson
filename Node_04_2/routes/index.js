var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // json type의 클래스 데이터
  var book = {
    name: '자바스크리트',
    writer: '이의재',
    comp: '정민출판사',
    year: 2020
  }

  var books = [
    {name:'k1'},
    {name:'<b>k2</b>'},
    {name:'k3'},
    {name:'k4'},
    {name:'k5'},
  ]


  res.render('index', { title: '인클루드 연습', book:book, books:books });
});

module.exports = router;
