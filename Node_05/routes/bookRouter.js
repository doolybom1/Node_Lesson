var express = require('express');
var router = express.Router();

var bookVO = require("../models/book")

router.get("/",function(req,res,next){
    bookVO.find({},function(err,data){
        res.render("books/list",{books:data});
    })
})

router.get("/insert",function(req,res){
    var book = new bookVO();
    res.render("books/write",{book:book, btnText:'추가'});
})

router.post("/insert", function(req,res){
    var newVO = new bookVO(req.body);
    newVO.save(req.body,function(err,data){
        res.redirect("/book");
    })
})

router.get("/name",function(req,res){
    let name = req.query.name;
    bookVO.findOne({bTitle:name},function(err,data){
        res.json(data);
    })
})



module.exports = router;