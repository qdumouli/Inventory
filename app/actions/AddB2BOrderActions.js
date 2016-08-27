import alt from '../alt';

class AddB2BOrderActions {
	constructor() {
		this.generateActions(
			'addOrderSuccess',
			'addOrderFail',
			'updateName',
			'invalidName'
		);
	}

	addNewOrder(name, items) {
		$.ajax({
			type: 'POST',
			url: '/addNewOrder',
			data: {
				name: name,
				items: items
			}
		}).done((data) => {this.actions.addOrderSuccess(data.message);
		}).fail((jqXhr) => {this.actions.addOrderFail(jqXhr.responseJSON.message);
		});
	}
}

export default alt.createActions(AddB2BOrderActions);