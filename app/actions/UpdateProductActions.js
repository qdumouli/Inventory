import alt from '../alt';

class UpdateProductActions {
	constructor() {
		this.generateActions(
			'getProductSuccess',
			'getProductFail',
			'updateProductSuccess',
			'updateProductFail',
			'updateName',
			'updatePrice',
			'updateSizeCount',
			'invalidName',
			'invalidPrice',
			'invalidSizeCount'
		);
	}

	getItemsList() {
		$.ajax({ url: '/items'}).done((data) => { this.actions.getProductSuccess(data);
		}).fail((jqXhr) => { this.actions.getProductFail(jqXhr);
		});
	}

	updateItems(id, name, price, sizeCount) {
		$.ajax({
			type: 'POST',
			url: '/updateItems',
			data: {
				_id: id,
				name: name,
				price: price,
				sizeCount: sizeCount
			}
		}).done((data) => { this.actions.updateProductSuccess(data.message); 
		}).fail((jqXhr) => { this.actions.updateProductFail(jqXhr.responseJSON.message);
		});
	}
}

export default alt.createActions(UpdateProductActions);