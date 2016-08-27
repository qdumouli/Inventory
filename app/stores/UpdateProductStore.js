import alt from '../alt';
import UpdateProductActions from '../actions/UpdateProductActions';

class UpdateProductStore {
	constructor() {
		this.bindActions(UpdateProductActions);
		this.itemList = [];
		this.name = [];
		this.price = [];
		this.sizeCount = [];
		this._id = [];
	}

	onGetProductSuccess(data) {
		for(var i = 0; i < data.length; i++) {
			this.items[i] = data[i];
		}
		toastr.success('The products were loaded');
	}

	onGetProductFail(jqXhr) {
		toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
	}

	onUpdateProductSuccess(successMessage) {
		toastr.success(successMessage);
	}

	onUpdateProductFail(errorMessage) {
		toastr.error(errorMessage);
	}

	onUpdateName(event) {
		this.name = event.target.value;
	}

	onUpdatePrice(event) {
		this.price = event.target.value;
	}

	onUpdateSizeCount(event) {
		this.sizeCount = event.target.value;
	}

	onInvalidName() {
		this.nameValidationState = 'has-error';
		this.helpBlock = 'Please enter a valid name';
	}

	onInvalidPrice() {
		this.priceValidationState = 'has-error';
		this.helpBlock = 'Please enter a valid price';
	}

	onInvalidSizeCount() {
		this.sizeCountValidationState = 'has-error';
		this.helpBlock = 'Please enter a valid size count';
	}
}

export default alt.createStore(UpdateProductStore);

