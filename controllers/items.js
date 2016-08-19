module.exports = function(app, _, moment) {

	var Items = require('../models/items');

	app.post('/items', function(req,res) {
		var body = _.pick(req.body, 'name', 'price', 'sizeCount', 'provenance', 'category');
		var items = new Items();

		items.name = body.name;
		items.price = body.price;
		items.sizeCount = body.sizeCount;

		var changed = false;

		items.findOneAndUpdate({"name": items.name}, {"price": items.price, "sizeCount":items.sizeCount}, function(err, item) {
			if(err) throw err;

			res.json({message: 'updated existing price and sizeCount'});
			return changed = true;
		});
		if(changed == false) {
			items.save(function(err) {
				if(err)
					res.send(err);

				res.json({ message: 'new items entered'});
			});
		} 
	});

	app.get('/items', function(req,res) {
		Items.find({}, function(err, item) {
			if(err)
				res.send(err);

			res.locals.items = item;
			res.render('items');
		});
	});
}