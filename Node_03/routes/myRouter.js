// nodejs router(spring에서는 controller)에서 web request 응답을 쉽게 처리할 수 있도록 도와주는 미들웨어
var express = require('express');
// web request에 반응하는 이벤트 핸들러
var router = express.Router();
var bookVO = require("../models/book");

/* 
    web브라우저에서 localhost:3000/~~/ 라고 path를 요청하면 반응하는 이벤트 핸들러
    callback 함수에게 req,res,next라고하는 3개의 매개변수를 주입한다
    req : web으로부터 전달된 HTTP 정보들이 들어있다
    res : 서버로부터 web에게 응답할때 필요한 HTTP 정보들이 기본적으로 포함되어 있다
*/
router.get("/", function(req,res,next){
    bookVO.find({},function(err,data){
        res.json(data);
    })
})

router.get("/insert", function(req,res){
    res.render("write");
})

router.post("/insert",function(req,res){
    /*
        form의 input box에 값을 입력하고 submit을 입력하면 input box에 담긴 데이터들이
        req의 body에 실려서 건너온다
        req.body 라는 속성을 참조하면 body에는 vo 형식의 데이터들이 담겨온다
    */
   // 새로운 bookVO를 생성하면서 req.body를 주입하면 req.body의 데이터가 담긴 vo가 생성되고
   // 생성된 vo를 save에 주입한다
    var newVO = new bookVO(req.body);

    // save가 성공하면 db로부터 추가된 데이터를 findOne하여 data에 담아준다
    newVO.save(req.body,function(err,data){
        res.json(data);
    })

}) // router.post('/insert')

router.get('/delete/:id',function(req,res){
    bookVO.deleteOne({_id:id},function(err,data){
        res.json(data);
    })
})

router.get('/update/:id',function(req,res){
    let id = req.params.id;
    bookVO.findOne({_id:id},function(err,data){
        res.render("write",{bookVO:data});
    })
})

// RestFull 방식에서는 update를 수행할때는 method=PUT 방식으로 하도록 권장한다.
// 내가 수행하고자 하는일이 무엇인지 명확히 하고 싶다라는 의미
router.post('/update',function(req,res){

    var id = req.params.id;
    var updateVO = new bookVO(req.body);
    bookVO.update({_id:id},{$set:updateVO},function(err,data){
        res.json(data);
    })
})


// 위에서 세팅된 초기화, get() 메서드가 설정된 상태
// router 객체를 외부에서 참조할 수 있도록 exports 설정
module.exports = router;