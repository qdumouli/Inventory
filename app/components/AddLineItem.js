import React from 'react';
import AddLineItemActions from '../actions/AddLineItemActions';
import AddLineItemStore from '../stores/AddLineItemStore';

class AddLineItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = AddLineItemStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		AddLineItemStore.listen(this.onChange);
		AddLineItemActions.getItems();
	}

	componentWillUnmount() {
		AddLineItemStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		let items = this.state.itemList.map((itemName) => {
			return (
				<option key={itemName._id} >{itemName.name}</option>
			);
		});

		return (
			<div className='row' key={'items-0'}>
				<div className='col-sm-6'>
      				<div className='form-group'>
      					<label className='control-label'> Item Name </label>
      					<select className='form-control' value={this.state.itemName[this.props.key]} 
							onChange={AddLineItemActions.updateItem} required>
							{items}
						</select>
					</div>
				</div>
				<div className='col-sm-6'>
					<div className={'form-group' + this.state.sizeCountValidationState}>
						<label className='control-label'> Item Quantity </label>
						<input type='number' className='form-control' value={this.state.quantity[this.props.key]} 
						onChange={AddLineItemActions.updateQuantity} autoFocus required/>
					</div>
				</div>
			</div>
		);
	}
}

export default AddLineItem;