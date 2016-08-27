var mongoose = require('mongoose');

var lineItemsSchema = new mongoose.Schema({
	name: String,
	price: Number,
	quantity: Number
});

module.exports = mongoose.model('LineItems', lineItemsSchema);