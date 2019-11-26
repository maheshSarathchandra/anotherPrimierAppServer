var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RateSchema = mongoose.Schema({
    quantity: {
        type: String,
        required : true

    },
    newData: {
      type: String,
      required: true
    },
    create_date : {
        type : Date,
        default : Date.now()
    }
});

var Rate = module.exports = mongoose.model('Rate',RateSchema);

module.exports.getRate = function (callback,limit) {
    Rate.find(callback).limit(limit);
};


module.exports.addRate = function (rate,callback) {
    Rate.create(rate,callback);
};


