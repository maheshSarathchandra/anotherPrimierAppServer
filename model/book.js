var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bookSchema = mongoose.Schema({
    name : {
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

var Book = module.exports = mongoose.model('Book',bookSchema);

module.exports.getBooks = function (callback,limit) {
   Book.find(callback).limit(limit);
};


module.exports.getBookById = function (id,callback) {
    var query = {_id : id};
  Book.findOne(query,callback);
};

module.exports.addBook = function (book,callback) {
    Book.create(book,callback);
};

module.exports.updateBook = function (id,book,options,callback) {
    var query = {_id : id};
    var update = {
        name : book.name,
        bookPrice : book.bookPrice,
        picture : book.picture,
        auther : book.auther,
        translator : book.translator
    };
    Book.findOneAndUpdate(query,update,options,callback);
};

module.exports.removeBook = function (id,callback) {
    var query = {_id : id};

    Book.remove(query,callback);
};
