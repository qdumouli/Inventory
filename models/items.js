var mongoose = require('mongoose');

var itemsSchema = new mongoose.Schema({
	name: String,
	price: Number,
	sizeCount: Number,
	provenance: String,
	category: String
});

module.exports = mongoose.model('Items', itemsSchema);