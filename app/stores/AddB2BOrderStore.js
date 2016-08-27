import alt from '../alt';
import AddB2BOrderActions from '../actions/AddB2BOrderActions';

class AddB2BOrderStore {
	constructor() {
		this.bindActions(AddB2BOrderActions);
		this.name = '';
		this.items = ['items-0'];
		this.quantity = '';
		this.nameValidationState = '';
	}

	onAddOrderSuccess(successMessage) {
		toastr.success('New order is in');
	}

	onAddOrderFail(errorMessage) {
		toastr.error(errorMessage);
	}

	onUpdateName(event) {
		this.name = event.target.value;
	}

	onInvalidName() {
		toastr.error('Please enter a valid name');
		this.nameValidationState = 'has-error';
	}
}

export default alt.createStore(AddB2BOrderStore);