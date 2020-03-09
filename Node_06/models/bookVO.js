var mong = require('mongoose');
var bookModel = mong.Schema({
    bTitle : String,
    bWriter : String,
    bComp : String,
    bPrice : Number
})

module.exports = mong.model('book2',bookModel);