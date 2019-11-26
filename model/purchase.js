var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PurchaseSchema = mongoose.Schema({
    quantity: {
        type: String,
        required : true

    },
    email : {
        type: String,
        required: true
    },
    phoneNumber : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    create_date : {
        type : Date,
        default : Date.now()
    }
});

var Purchase = module.exports = mongoose.model('Purchase',PurchaseSchema);

module.exports.getPurchase = function (callback,limit) {
    Purchase.find(callback).limit(limit);
};


module.exports.getPurchaseById = function (id,callback) {
    var query = {_id : id};
    Purchase.findOne(query,callback);
};

module.exports.addPurchase = function (purchase,callback) {
    Purchase.create(purchase,callback);
};


module.exports.removePurchase = function (id,callback) {
    var query = {_id : id};

    Purchase.remove(query,callback);
};
