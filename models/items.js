var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemsSchema = new Schema({
	name: String,
	price: Number,
	sizeCount: Number,
	provenance: String,
	Category: String,
	quantity: Number
});

module.exports = mongoose.model('Items', itemsSchema);