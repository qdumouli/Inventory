import alt from '../alt';
import ListProductActions from '../actions/ListProductActions';

class ListProductStore {
	constructor() {
		this.bindActions(ListProductActions);
		this.itemList = ['items-0'];
	}
}

export default alt.createStore(ListProductStore);

