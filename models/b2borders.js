var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
	clientName: String,
	lineItems: []
});

module.exports = mongoose.model('B2BOrders', orderSchema);