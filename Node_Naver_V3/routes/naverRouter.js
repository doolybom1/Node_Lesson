var naver = require("../config/naver_secret");
var express = require('express');
var router = express.Router();
// 5
var request = require('request');
var bookVO = require('../models/naver_book');

// 3
var reqOptions = (api_url) => {
    var options = {
        url: api_url,
        headers: {
            'X-Naver-Client-Id': naver.client_id,
            'X-Naver-Client-Secret': naver.client_secret
        }
    }
    return options
}
/*
    module.exports = function() {} 의 구조
    이 모듈을 사용하는 곳에서 어떤 값을 매개변수로 전달하고자할 때 사용하는 코드
*/

/*
    ()=>{}
    화살표 함수 ES5 이상에서 사용할 수 있는 단축형 함수
    한가지 단점이 변수 scope가 상당히 민감하다
    특히 this라는 키워드의 변수는 scope 때문에 사용하면서 많은 테스트를 수행해야 한다
    이유는 function 방식의 함수와는 다르게 작동되기 때문이다
*/


// 1
//router.get('/',function(req,res){
router.get('/', (req, res) => {
    res.json(naver);
})


// 4
router.post('/book', (req, res) => {

    /*
        router.get 방식으로 form에서 값을 전달하면 req.query에 변수가 담겨서 전달되고 
        router.post 방식으로 form에서 값을 전달하면 req.body에 변수가 담겨서 전달된다
    */
    let searchName = req.body.search
    let api_url = naver.book_url
    api_url += "?query=" + encodeURI(searchName)

    /*

    */
    bookVO.find({ search: searchName }).exec((err, data) => {
        if (err) {
            res.send(err)
        } else {
            if (data.length > 0) {
                res.json(data)
            } else {
                request.get(reqOptions(api_url), (err, response, body) => {
                    // 오류가 없으면 err는 null값이 된다
                    if (err) {
                        console.log(err)
                        res.send(response.statusMessage)
                    } else if (response.statusCode == 200) {
                        var naverJson = JSON.parse(body).items
                        for (let book of naverJson0) {
                            book.search = searchName
                        }
                        bookVO.collection.insertMany(naverJson, (err, data) => {
                            res.json(data)
                        })
                    } else {
                        res.send("unknow error response")
                    }
                })
            }
        }
    })

})
module.exports = router