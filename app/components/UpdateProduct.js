import React from 'react';
import UpdateProductActions from '../actions/UpdateProductActions';
import UpdateProductStore from '../stores/UpdateProductStore';

class UpdateProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = UpdateProductStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		UpdateProductStore.listen(this.onChange);
		UpdateProductActions.getItemsList();
	}

	componentWillUnmount() {
		UpdateProductStore.unlisten(this.onChange);
	}

	onChange(state) {
    	this.setState(state);
  	}

  	handleSubmit(event) {
	    event.preventDefault();

	    var id = this.state._id;
	    var name = this.state.name.trim();
	    var price = this.state.price;
	    var sizeCount = this.state.sizeCount;


	    if (name.length == 0) {
	      	UpdateProductActions.invalidName;
	      	this.refs.nameTextField.getDOMNode().focus();
	    }

	    if (price == 0) {
	      	UpdateProductActions.invalidPrice;
	      	this.refs.priceField.getDOMNode().focus();
	    }

	    if (sizeCount == 0) {
	    	UpdateProductActions.invalidSizeCount;
	    	this.refs.sizeCountField.getDOMNode().focus();
	    }

	    if (name.length > 0 && price > 0 && sizeCount > 0) {
	      	UpdateProductActions.updateItems(id, name, price, sizeCount);
	    }
	}

	render() {
		var buttonAdjust = {'margin-top': '10%'};
		let items = this.state.itemList.map((item) => {
			return (
				<div>
					<div className='form-group col-sm-4'>
						<label className='control-label'>Product Name</label>
						<input type='text' className='form-control' ref='nameTextField' value={this.state.name[this.props.key] || item.name}
							onChange={UpdateProductActions.updateName} autoFocus required />
					</div>
					<div className='form-group col-sm-4'>
						<label className='control-label'>Product Price</label>
						<input type='number' className='form-control' step='0.01' ref='priceField' value={this.state.price[this.props.key] || item.price} 
							onChange={UpdateProductActions.updatePrice} autoFocus required />
					</div>
					<div className='form-group col-sm-4'>
						<label className='control-label'>Product Size Count</label>
						<input type='number' className='form-control' step='0.01' ref='sizeCountField' value={this.state.sizeCount[this.props.key] || item.sizeCount} 
							onChange={UpdateProductActions.updateSizeCount} autoFocus required />
					</div>
				<div>
			);
		});

		return (
			<div key={'items-0'}>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className='col-sm-9'>
						{items}
					</div>
					<div className='col-sm-3'>
						<button type='submit' className='btn btn-primary' style={buttonAdjust}> Update </button>
					</div>
				</form>
			</div>
		);
	}
}

export default UpdateProduct;



