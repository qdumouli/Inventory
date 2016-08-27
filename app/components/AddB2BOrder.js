import React from 'react';
import AddB2BOrderActions from '../actions/AddB2BOrderActions';
import AddB2BOrderStore from '../stores/AddB2BOrderStore';
import AddLineItem from './AddLineItem';

class AddB2BOrder extends React.Component {
	constructor(props) {
		super(props);
		this.state = AddB2BOrderStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		AddB2BOrderStore.listen(this.onChange);
	}

	componentWillUnmount() {
		AddB2BOrderStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleClick() {
		var newInput = 'items-' + this.state.items.length;
        this.setState({ items: this.state.items.concat([newInput]) });
	}

	removeItemClick() {
		var length = this.state.items.length - 1;
		console.log(length);
		this.setState({ items: this.state.items.splice(1, length) });
	}

	handleSubmit(event) {
	    event.preventDefault();

	    var name = this.state.name.trim();
	    var itemName = this.state.itemName;
	    var quantity = this.state.quantity;


	    if (name.length == 0) {
	      	AddProductActions.invalidName;
	      	this.refs.nameTextField.getDOMNode().focus();
	    }

	    if (name.length > 0) {
	      	AddB2BOrderActions.AddNewOrder(name, items);
	    }
	}

	render() {
		return (
			<div className='container'>
		        <div className='row flipInX animated'>
		          	<div className='col-sm-12'>
		            	<div className='panel panel-default'>
		              		<div className='panel-heading'> Add New Order </div>
	              			<div className='panel-body'>
	                			<form onSubmit={this.handleSubmit.bind(this)}>
	                				<div className='row'>
		                				<div className='col-sm-10'>
			                				<div className={'form-group ' + this.state.nameValidationState}>
												<input type='text' className='form-control' ref='nameTextField' value={this.state.name} placeholder='Customer Name'
												onChange={AddB2BOrderActions.updateName} autoFocus required/>
											</div>
										</div>
										<div className='col-sm-2'>
											<button type='button' className='btn btn-primary' onClick={() => this.handleClick()}> Add Another Item</button>
											<hr />
											<button type='button' className='btn btn-primary' onClick={() => this.removeItemClick()}> Remove Last Item </button>
										</div>
									</div>
									{this.state.items.map(item => <AddLineItem key={item} />)}
	                  				<button type='submit' className='btn btn-primary'>Submit</button>
	                			</form>
		              		</div>
		            	</div>
		          	</div>
		       	</div>
		    </div>
		);
	}
}

export default AddB2BOrder;