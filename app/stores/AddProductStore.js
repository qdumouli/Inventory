import alt from '../alt';
import AddProductActions from '../actions/AddProductActions';

class AddProductStore {
	constructor() {
		this.bindActions(AddProductActions);
		this.name = '';
		this.price = '';
		this.sizeCount = '';
		this.provenance = 'Quebec';
		this.category = 'Fruits';
		this.helpBlock = '';
		this.nameValidationState = '';
		this.priceValidationState = '';
		this.sizeCountValidationState = '';
		this.provenanceValidationState = '';
		this.categoryValidationState = '';
	}

	onAddProductSuccess(successMessage) {
		this.helpBlock = successMessage;
		toastr.success('Product added successfully!');
	}

	onAddProductFail(errorMessage) {
		this.nameValidationState = 'has-error';
		this.priceValidationState = 'has-error';
		this.sizeCountValidationState = 'has-error';
		this.provenanceValidationState = 'has-error';
		this.categoryValidationState = 'has-error';
		this.helpBlock = errorMessage;
	}

	onUpdateName(event) {
		this.name = event.target.value;
		this.nameValidationState = '';
	}

	onUpdatePrice(event) {
		this.price = event.target.value;
		this.priceValidationState = '';
	}

	onUpdateSizeCount(event) {
		this.sizeCount = event.target.value;
		this.sizeCountValidationState = '';
	}

	onUpdateProvenance(event) {
		this.provenance = event.target.value;
		this.provenanceValidationState = '';
	}

	onUpdateCategory(event) {
		this.category = event.target.value;
		this.categoryValidationState = '';
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

export default alt.createStore(AddProductStore);





