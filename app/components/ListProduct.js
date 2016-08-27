import React from 'react';
import ListProductActions from '../actions/ListProductActions';
import ListProductStore from '../stores/ListProductStore';
import UpdateProduct from './UpdateProduct';

class ListProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = ListProductStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		ListProductStore.listen(this.onChange);
	}

	componentWillUnmount() {
		ListProductStore.unlisten(this.onChange);
	}

	onChange(state) {
    	this.setState(state);
  	}

  	initiateUpdate(item) {
  		console.log(item);
  	}

	render() {
		return (
			<div className='container'>
		        <div className='row flipInX animated'>
		          	<div className='col-sm-12'>
		            	<div className='panel panel-default'>
		              		<div className='panel-heading'> Product List </div>
	              			<div className='panel-body'>
	              				<div className='row'>
									{this.state.itemList.map(item => <UpdateProduct key={item} />)}
								</div>
		              		</div>
		            	</div>
		          	</div>
		       	</div>
		    </div>
		);
	}
}

export default ListProduct;



