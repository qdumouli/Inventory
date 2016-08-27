import alt from '../alt';

class AddProductActions {
	constructor() {
		this.generateActions(
			'addProductSuccess',
			'addProductFail',
			'updateName',
			'updatePrice',
			'updateSizeCount',
			'updateProvenance',
			'updateCategory',
			'invalidName',
			'invalidPrice',
			'invalidSizeCount'
		);
	}

	addProduct(name, price, sizeCount, provenance, category) {
		$.ajax({
			type:'POST',
			url: '/addItems',
			data: {
				name: name,
				price: price,
				sizeCount: sizeCount,
				provenance: provenance,
				category: category
			}
		}).done((data) => { this.actions.addProductSuccess(data.message);
		}).fail((jqXhr) => { this.actions.addProductFail(jqXhr.responseJSON.message);
		});
	}
}

export default alt.createActions(AddProductActions);