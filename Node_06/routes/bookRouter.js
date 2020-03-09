var express = require('express');
var router = express.Router();

var bookVO = require("../models/bookVO");

// selectAll 전체리스트 보이기
router.get("/",function(req,res){
    bookVO.find({},function(err,books){
        res.render("book/list",{books:books});
    })
})



router.get("/insert",function(req,res){
    var book = new bookVO();
    res.render("book/write",{book:book,formTitle:'INSERT'});
    res.end("insert");
})

router.post("/insert",function(req,res){
    var book = new bookVO(req.body);
    book.save(function(err,data){
        res.redirect("/book");
    })
})



// 수정화면 보여주기
router.get("/update/:id", function(req,res){
    bookVO.findOne({_id:req.params.id},function(err,book){
        res.render("book/write",{book:book,formTitle:'UPDATE'})
    })
})

// 수정화면에서 저장 버튼을 클릭했을 때
router.post("/update/:id", function(req,res){
    let id = req.params.id;
    bookVO.update({_id:id},{$set:req.body},function(err,data){
        res.redirect("/book");
    })
})



router.get("/delete/:id",function(req,res){
    let id = req.params.id;
    bookVO.deleteOne({_id:id},function(err,data){
        res.redirect("/book");
    })
})

module.exports = router