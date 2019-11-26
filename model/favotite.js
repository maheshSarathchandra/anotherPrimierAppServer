var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var favotiteSchema = mongoose.Schema({
    bookName : {
        type: String,
        required : true

    },
    bookPrice : {
        type: String,
        required: true
    },
    picture : {
        type : String,
        required : true
    },
    auther : {
        type : String,
        required : true
    },
    translator :  {
        type : String,
        required : true
    },
    create_date : {
        type : Date,
        default : Date.now()
    }
});

var Favotite = module.exports = mongoose.model('Favotite',favotiteSchema);


module.exports.getFavotite = function (callback,limit) {
    Favotite.find(callback).limit(limit);
};

module.exports.addFavotite = function (favotite,callback) {
    Favotite.create(favotite,callback);
};




module.exports.removeFavotite = function (id,callback) {
    var query = {_id : id};

    Favotite.remove(query,callback);
};