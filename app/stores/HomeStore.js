import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
	constructor() {
		this.bindActions(HomeActions);
		this.ajaxAnimationClass = '';
	}

	onUpdateAjaxAnimation(className) {
		this.ajaxAnimationClass = className;
	}
}

export default alt.createStore(HomeStore);