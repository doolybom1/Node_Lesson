var express = require('express');
var router = express.Router;

router.get("/lsit",function(req,res){
    res.end("list");
})

router.get("/insert",function(req,res){
    //res.render("write");
    res.end("insert");
})

router.post("/insert",function(req,res){
    res.end("insert_post");
})

router.get("/update/:id",function(req,res){
    res.end("update");
})

router.put("/update/:id",function(req,res){
    res.end("update_put");
})

router.delete("/delete/:id",function(req,res){
    res.end("delete_delete");
})