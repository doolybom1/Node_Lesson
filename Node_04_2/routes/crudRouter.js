var express = require('express');
var router = express.Router;

router.get("/:data/lsit",function(req,res){
    let data = req.params.data;
    if(data == 'book'){
        bookVO.find({},function(err,data){
            res.json(data);
        })
    }else if(data == 'address'){
        addressVO.find()
    }

    res.end("list");
})

router.get("/:data/insert",function(req,res){
    //res.render("write");
    res.end("insert");
})

router.post("/:data/insert",function(req,res){
    res.end("insert_post");
})

router.get("/:data:/id/update",function(req,res){
    res.end("update");
})

router.put("/:data:/id/update",function(req,res){
    res.end("update_put");
})

router.delete("/:data:/id/delete",function(req,res){
    res.end("delete_delete");
})