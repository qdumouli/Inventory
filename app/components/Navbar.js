import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = NavbarStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		NavbarStore.listen(this.onChange);

		$(document).ajaxStart(() => {
	      NavbarActions.updateAjaxAnimation('fadeIn');
	    });

	    $(document).ajaxComplete(() => {
	      setTimeout(() => {
	        NavbarActions.updateAjaxAnimation('fadeOut');
	      }, 750);
	    });
	}

	componentWillUnmount() {
		NavbarStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		return (
			<nav className='navbar navbar-default navbar-static-top'>
		        <div className='navbar-header'>
		          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
		            <span className='sr-only'>Toggle navigation</span>
		            <span className='icon-bar'></span>
		            <span className='icon-bar'></span>
		            <span className='icon-bar'></span>
		          </button>
		          <Link to='/' className='navbar-brand'>
		            <span ref='triangles' className={'triangles animated ' + this.state.ajaxAnimationClass}>
		              <div className='tri invert'></div>
		              <div className='tri invert'></div>
		              <div className='tri'></div>
		              <div className='tri invert'></div>
		              <div className='tri invert'></div>
		              <div className='tri'></div>
		              <div className='tri invert'></div>
		              <div className='tri'></div>
		              <div className='tri invert'></div>
		            </span>
		            Inventory
		          </Link>
		        </div>
		        <div id='navbar' className='navbar-collapse collapse'>
		          <ul className='nav navbar-nav'>
		            <li><Link to='/'>Home</Link></li>
		            <li><Link to='/compo'>Make Composition</Link></li>
		            <li><Link to='/addItems'>Add New Item</Link></li>
		            <li><Link to='/addOrder'>Add New B2B Order</Link></li>
		            <li><Link to='/item'>Update Items</Link></li>
		          </ul>
		        </div>
		    </nav>
		);
	}
}

export default Navbar;


