var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = mongoose.Schema({
    comment : {
        type: String,
        required : true

    },
    book : {
      type : String,
      required: true
    },
    create_date : {
        type : Date,
        default : Date.now()
    }
});

var Comments = module.exports = mongoose.model('Comment',commentSchema);

module.exports.addComment = function (comment,callback) {
    Comments.create(comment,callback);
};

module.exports.getComment = function (callback,limit) {
    Comments.find(callback).limit(limit);
};

module.exports.removeComment = function (id,callback) {
    var query = {_id : id};

    Comments.remove(query,callback);
};