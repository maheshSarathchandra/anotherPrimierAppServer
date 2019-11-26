var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = mongoose.Schema({
    name : {
        type: String,
        required : true

    },
     email: {
        type: String,
        required: true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

var User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUser = function (callback,limit) {
    User.find(callback).limit(limit);
};


module.exports.getUserById = function (username,password,callback) {
    var query = {username : username,password : password};
    User.findOne(query,callback);
};

module.exports.addUser = function (book,callback) {
    User.create(book,callback);
};

