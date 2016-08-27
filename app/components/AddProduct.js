import React from 'react';
import AddProductActions from '../actions/AddProductActions';
import AddProductStore from '../stores/AddProductStore';

class AddProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = AddProductStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		AddProductStore.listen(this.onChange);
	}

	componentWillUnmount() {
		AddProductStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleSubmit(event) {
	    event.preventDefault();

	    var name = this.state.name.trim();
	    var price = this.state.price;
	    var sizeCount = this.state.sizeCount;
	    var provenance = this.state.provenance;
	    var category = this.state.category;


	    if (name.length == 0) {
	      	AddProductActions.invalidName;
	      	this.refs.nameTextField.getDOMNode().focus();
	    }

	    if (price == 0) {
	      	AddProductActions.invalidPrice;
	      	this.refs.priceField.getDOMNode().focus();
	    }

	    if (sizeCount == 0) {
	    	AddProductActions.invalidSizeCount;
	    	this.refs.sizeCountField.getDOMNode().focus();
	    }

	    if (name.length > 0 && price > 0 && sizeCount > 0) {
	      	AddProductActions.addProduct(name, price, sizeCount, provenance, category);
	    }
	}

	render() {
		return (
			<div className='container'>
		        <div className='row flipInX animated'>
		          	<div className='col-sm-12'>
		            	<div className='panel panel-default'>
		              		<div className='panel-heading'> Add Product </div>
	              			<div className='panel-body'>
	                			<form onSubmit={this.handleSubmit.bind(this)}>
	                  				<div className={'form-group ' + this.state.nameValidationState}>
	                    				<label className='control-label'>Product Name</label>
	                    				<input type='text' className='form-control' ref='nameTextField' value={this.state.name} 
	                    				onChange={AddProductActions.updateName} autoFocus required/>
	                  				</div>
	                  				<div className='row'>
	                  					<div className='col-sm-6'>
			                  				<div className={'form-group' + this.state.priceValidationState}>
			                  					<label className='control-label'>Product Price</label>
			                  					<input type='number' className='form-control' step='0.01' ref='priceField' value={this.state.price}
			                  					onChange={AddProductActions.updatePrice} autoFocus required/>
											</div>
										</div>
										<div className='col-sm-6'>
											<div className={'form-group' + this.state.sizeCountValidationState}>
												<label className='control-label'>Product Size Count</label>
												<input type='number' className='form-control' step='0.01' ref='sizeCountField' value={this.state.sizeCount} 
												onChange={AddProductActions.updateSizeCount} autoFocus required/>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-sm-6'>
											<div className={'form-group' + this.state.provenanceValidationState}>
												<label className='control-label'>Product Provenance</label>
												<select className='form-control' value={this.state.provenance} 
												onChange={AddProductActions.updateProvenance} required>
													<option value='Quebec'>Quebec</option>
													<option value='International'>International</option>
												</select>
											</div>
										</div>
										<div className='col-sm-6'>
											<div className={'form-group' + this.state.categoryValidationState}>
												<label className='control-label'>Product Category</label>
												<select className='form-control' value={this.state.category} 
												onChange={AddProductActions.updateCategory} required>
													<option value='Fruits'>Fruits</option>
													<option value='Vegetables'>Vegetables</option>
													<option value='Mushrooms'>Mushrooms</option>
												</select>
											</div>
										</div>
									</div>
	                  				<button type='submit' className='btn btn-primary'>Submit</button>
									<p className='help-block text-center'>{this.state.helpBlock}</p>
	                			</form>
		              		</div>
		            	</div>
		          	</div>
		       	</div>
		    </div>
		);
	}
}

export default AddProduct;





