import alt from '../alt';
import AddLineItemActions from '../actions/AddLineItemActions';

class AddLineItemStore {
	constructor() {
		this.bindActions(AddLineItemActions);
		this.itemName = [];
		this.quantity = [];
		this.itemList = [];
	}

	onGetItemSuccess(data) {
		for(var i = 0; i < data.length; i++) {
			this.itemList[i] = data[i];
		}
	}

	onGetItemFail(jqXhr) {
		toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
	}

	onUpdateItem(event) {

		this.itemName = event.target.value;
	}

	onUpdateQuantity(event) {
		this.quantity = event.target.value;
	}

	onInvalidQuantity() {
		toastr.error('The quantity you entered is not valid');
	}
}

export default alt.createStore(AddLineItemStore);