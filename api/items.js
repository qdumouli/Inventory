module.exports = function(app, _, db) {

	app.post('/addItems', function(req,res, next) {
		var body = _.pick(req.body, 'name', 'price', 'sizeCount', 'provenance', 'category');
		var item = new db.items({
			name: body.name,
			price: body.price,
			sizeCount: body.sizeCount,
			provenance: body.provenance,
			category: body.category
		});

		console.log(item);

		item.save(function(err) {
			if(err) return next(err);
			res.send({ message: body.name} + ' has been added successfully!');
		});
	});
}