import alt from '../alt';

class AddLineItemActions {
	constructor() {
		this.generateActions(
			'getItemSuccess',
			'getItemFail',
			'updateItem',
			'updateQuantity',
			'invalidQuantity'
		);
	}

	getItems() {
		$.ajax({ url: '/items'}).done((data) => { this.actions.getItemSuccess(data);
		}).fail((jqXhr) => { this.actions.getItemFail(jqXhr);
		});
	}
}

export default alt.createActions(AddLineItemActions);