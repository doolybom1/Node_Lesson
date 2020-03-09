var mong = require('mongoose');
var bookModel = mong.Schema({
    bTitel : String,
    bWriter : String,
    bComp : String,
    bPrice : Number
})

module.exports = mong.model('book2',bookModel);