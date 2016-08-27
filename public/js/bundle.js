(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddB2BOrderActions = function () {
	function AddB2BOrderActions() {
		_classCallCheck(this, AddB2BOrderActions);

		this.generateActions('addOrderSuccess', 'addOrderFail', 'updateName', 'invalidName');
	}

	_createClass(AddB2BOrderActions, [{
		key: 'addNewOrder',
		value: function addNewOrder(name, items) {
			var _this = this;

			$.ajax({
				type: 'POST',
				url: '/addNewOrder',
				data: {
					name: name,
					items: items
				}
			}).done(function (data) {
				_this.actions.addOrderSuccess(data.message);
			}).fail(function (jqXhr) {
				_this.actions.addOrderFail(jqXhr.responseJSON.message);
			});
		}
	}]);

	return AddB2BOrderActions;
}();

exports.default = _alt2.default.createActions(AddB2BOrderActions);

},{"../alt":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddLineItemActions = function () {
	function AddLineItemActions() {
		_classCallCheck(this, AddLineItemActions);

		this.generateActions('getItemSuccess', 'getItemFail', 'updateItem', 'updateQuantity', 'invalidQuantity');
	}

	_createClass(AddLineItemActions, [{
		key: 'getItems',
		value: function getItems() {
			var _this = this;

			$.ajax({ url: '/items' }).done(function (data) {
				_this.actions.getItemSuccess(data);
			}).fail(function (jqXhr) {
				_this.actions.getItemFail(jqXhr);
			});
		}
	}]);

	return AddLineItemActions;
}();

exports.default = _alt2.default.createActions(AddLineItemActions);

},{"../alt":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddProductActions = function () {
	function AddProductActions() {
		_classCallCheck(this, AddProductActions);

		this.generateActions('addProductSuccess', 'addProductFail', 'updateName', 'updatePrice', 'updateSizeCount', 'updateProvenance', 'updateCategory', 'invalidName', 'invalidPrice', 'invalidSizeCount');
	}

	_createClass(AddProductActions, [{
		key: 'addProduct',
		value: function addProduct(name, price, sizeCount, provenance, category) {
			var _this = this;

			$.ajax({
				type: 'POST',
				url: '/addItems',
				data: {
					name: name,
					price: price,
					sizeCount: sizeCount,
					provenance: provenance,
					category: category
				}
			}).done(function (data) {
				_this.actions.addProductSuccess(data.message);
			}).fail(function (jqXhr) {
				_this.actions.addProductFail(jqXhr.responseJSON.message);
			});
		}
	}]);

	return AddProductActions;
}();

exports.default = _alt2.default.createActions(AddProductActions);

},{"../alt":8}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeActions = function HomeActions() {
	_classCallCheck(this, HomeActions);

	this.generateActions('updateAjaxAnimation');
};

exports.default = _alt2.default.createActions(HomeActions);

},{"../alt":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListProductActions = function ListProductActions() {
	_classCallCheck(this, ListProductActions);

	this.generateActions();
};

exports.default = _alt2.default.createActions(ListProductActions);

},{"../alt":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function NavbarActions() {
	_classCallCheck(this, NavbarActions);

	this.generateActions('updateAjaxAnimation');
};

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":8}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpdateProductActions = function () {
	function UpdateProductActions() {
		_classCallCheck(this, UpdateProductActions);

		this.generateActions('getProductSuccess', 'getProductFail', 'updateProductSuccess', 'updateProductFail', 'updateName', 'updatePrice', 'updateSizeCount', 'invalidName', 'invalidPrice', 'invalidSizeCount');
	}

	_createClass(UpdateProductActions, [{
		key: 'getItemsList',
		value: function getItemsList() {
			var _this = this;

			$.ajax({ url: '/items' }).done(function (data) {
				_this.actions.getProductSuccess(data);
			}).fail(function (jqXhr) {
				_this.actions.getProductFail(jqXhr);
			});
		}
	}, {
		key: 'updateItems',
		value: function updateItems(id, name, price, sizeCount) {
			var _this2 = this;

			$.ajax({
				type: 'POST',
				url: '/updateItems',
				data: {
					_id: id,
					name: name,
					price: price,
					sizeCount: sizeCount
				}
			}).done(function (data) {
				_this2.actions.updateProductSuccess(data.message);
			}).fail(function (jqXhr) {
				_this2.actions.updateProductFail(jqXhr.responseJSON.message);
			});
		}
	}]);

	return UpdateProductActions;
}();

exports.default = _alt2.default.createActions(UpdateProductActions);

},{"../alt":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddB2BOrderActions = require('../actions/AddB2BOrderActions');

var _AddB2BOrderActions2 = _interopRequireDefault(_AddB2BOrderActions);

var _AddB2BOrderStore = require('../stores/AddB2BOrderStore');

var _AddB2BOrderStore2 = _interopRequireDefault(_AddB2BOrderStore);

var _AddLineItem = require('./AddLineItem');

var _AddLineItem2 = _interopRequireDefault(_AddLineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddB2BOrder = function (_React$Component) {
	_inherits(AddB2BOrder, _React$Component);

	function AddB2BOrder(props) {
		_classCallCheck(this, AddB2BOrder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddB2BOrder).call(this, props));

		_this.state = _AddB2BOrderStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(AddB2BOrder, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_AddB2BOrderStore2.default.listen(this.onChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_AddB2BOrderStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			var newInput = 'items-' + this.state.items.length;
			this.setState({ items: this.state.items.concat([newInput]) });
		}
	}, {
		key: 'removeItemClick',
		value: function removeItemClick() {
			var length = this.state.items.length - 1;
			console.log(length);
			this.setState({ items: this.state.items.splice(1, length) });
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			event.preventDefault();

			var name = this.state.name.trim();
			var itemName = this.state.itemName;
			var quantity = this.state.quantity;

			if (name.length == 0) {
				AddProductActions.invalidName;
				this.refs.nameTextField.getDOMNode().focus();
			}

			if (name.length > 0) {
				_AddB2BOrderActions2.default.AddNewOrder(name, items);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row flipInX animated' },
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12' },
						_react2.default.createElement(
							'div',
							{ className: 'panel panel-default' },
							_react2.default.createElement(
								'div',
								{ className: 'panel-heading' },
								' Add New Order '
							),
							_react2.default.createElement(
								'div',
								{ className: 'panel-body' },
								_react2.default.createElement(
									'form',
									{ onSubmit: this.handleSubmit.bind(this) },
									_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
											'div',
											{ className: 'col-sm-10' },
											_react2.default.createElement(
												'div',
												{ className: 'form-group ' + this.state.nameValidationState },
												_react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name, placeholder: 'Customer Name',
													onChange: _AddB2BOrderActions2.default.updateName, autoFocus: true, required: true })
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'col-sm-2' },
											_react2.default.createElement(
												'button',
												{ type: 'button', className: 'btn btn-primary', onClick: function onClick() {
														return _this2.handleClick();
													} },
												' Add Another Item'
											),
											_react2.default.createElement('hr', null),
											_react2.default.createElement(
												'button',
												{ type: 'button', className: 'btn btn-primary', onClick: function onClick() {
														return _this2.removeItemClick();
													} },
												' Remove Last Item '
											)
										)
									),
									this.state.items.map(function (item) {
										return _react2.default.createElement(_AddLineItem2.default, { key: item });
									}),
									_react2.default.createElement(
										'button',
										{ type: 'submit', className: 'btn btn-primary' },
										'Submit'
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return AddB2BOrder;
}(_react2.default.Component);

exports.default = AddB2BOrder;

},{"../actions/AddB2BOrderActions":1,"../stores/AddB2BOrderStore":19,"./AddLineItem":10,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddLineItemActions = require('../actions/AddLineItemActions');

var _AddLineItemActions2 = _interopRequireDefault(_AddLineItemActions);

var _AddLineItemStore = require('../stores/AddLineItemStore');

var _AddLineItemStore2 = _interopRequireDefault(_AddLineItemStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddLineItem = function (_React$Component) {
	_inherits(AddLineItem, _React$Component);

	function AddLineItem(props) {
		_classCallCheck(this, AddLineItem);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddLineItem).call(this, props));

		_this.state = _AddLineItemStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(AddLineItem, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_AddLineItemStore2.default.listen(this.onChange);
			_AddLineItemActions2.default.getItems();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_AddLineItemStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var items = this.state.itemList.map(function (itemName) {
				return _react2.default.createElement(
					'option',
					{ key: itemName._id },
					itemName.name
				);
			});

			return _react2.default.createElement(
				'div',
				{ className: 'row', key: 'items-0' },
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-6' },
					_react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							{ className: 'control-label' },
							' Item Name '
						),
						_react2.default.createElement(
							'select',
							{ className: 'form-control', value: this.state.itemName[this.props.key],
								onChange: _AddLineItemActions2.default.updateItem, required: true },
							items
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-6' },
					_react2.default.createElement(
						'div',
						{ className: 'form-group' + this.state.sizeCountValidationState },
						_react2.default.createElement(
							'label',
							{ className: 'control-label' },
							' Item Quantity '
						),
						_react2.default.createElement('input', { type: 'number', className: 'form-control', value: this.state.quantity[this.props.key],
							onChange: _AddLineItemActions2.default.updateQuantity, autoFocus: true, required: true })
					)
				)
			);
		}
	}]);

	return AddLineItem;
}(_react2.default.Component);

exports.default = AddLineItem;

},{"../actions/AddLineItemActions":2,"../stores/AddLineItemStore":20,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddProductActions = require('../actions/AddProductActions');

var _AddProductActions2 = _interopRequireDefault(_AddProductActions);

var _AddProductStore = require('../stores/AddProductStore');

var _AddProductStore2 = _interopRequireDefault(_AddProductStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddProduct = function (_React$Component) {
	_inherits(AddProduct, _React$Component);

	function AddProduct(props) {
		_classCallCheck(this, AddProduct);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddProduct).call(this, props));

		_this.state = _AddProductStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(AddProduct, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_AddProductStore2.default.listen(this.onChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_AddProductStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			event.preventDefault();

			var name = this.state.name.trim();
			var price = this.state.price;
			var sizeCount = this.state.sizeCount;
			var provenance = this.state.provenance;
			var category = this.state.category;

			if (name.length == 0) {
				_AddProductActions2.default.invalidName;
				this.refs.nameTextField.getDOMNode().focus();
			}

			if (price == 0) {
				_AddProductActions2.default.invalidPrice;
				this.refs.priceField.getDOMNode().focus();
			}

			if (sizeCount == 0) {
				_AddProductActions2.default.invalidSizeCount;
				this.refs.sizeCountField.getDOMNode().focus();
			}

			if (name.length > 0 && price > 0 && sizeCount > 0) {
				_AddProductActions2.default.addProduct(name, price, sizeCount, provenance, category);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row flipInX animated' },
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12' },
						_react2.default.createElement(
							'div',
							{ className: 'panel panel-default' },
							_react2.default.createElement(
								'div',
								{ className: 'panel-heading' },
								' Add Product '
							),
							_react2.default.createElement(
								'div',
								{ className: 'panel-body' },
								_react2.default.createElement(
									'form',
									{ onSubmit: this.handleSubmit.bind(this) },
									_react2.default.createElement(
										'div',
										{ className: 'form-group ' + this.state.nameValidationState },
										_react2.default.createElement(
											'label',
											{ className: 'control-label' },
											'Product Name'
										),
										_react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
											onChange: _AddProductActions2.default.updateName, autoFocus: true, required: true })
									),
									_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
											'div',
											{ className: 'col-sm-6' },
											_react2.default.createElement(
												'div',
												{ className: 'form-group' + this.state.priceValidationState },
												_react2.default.createElement(
													'label',
													{ className: 'control-label' },
													'Product Price'
												),
												_react2.default.createElement('input', { type: 'number', className: 'form-control', step: '0.01', ref: 'priceField', value: this.state.price,
													onChange: _AddProductActions2.default.updatePrice, autoFocus: true, required: true })
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'col-sm-6' },
											_react2.default.createElement(
												'div',
												{ className: 'form-group' + this.state.sizeCountValidationState },
												_react2.default.createElement(
													'label',
													{ className: 'control-label' },
													'Product Size Count'
												),
												_react2.default.createElement('input', { type: 'number', className: 'form-control', step: '0.01', ref: 'sizeCountField', value: this.state.sizeCount,
													onChange: _AddProductActions2.default.updateSizeCount, autoFocus: true, required: true })
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
											'div',
											{ className: 'col-sm-6' },
											_react2.default.createElement(
												'div',
												{ className: 'form-group' + this.state.provenanceValidationState },
												_react2.default.createElement(
													'label',
													{ className: 'control-label' },
													'Product Provenance'
												),
												_react2.default.createElement(
													'select',
													{ className: 'form-control', value: this.state.provenance,
														onChange: _AddProductActions2.default.updateProvenance, required: true },
													_react2.default.createElement(
														'option',
														{ value: 'Quebec' },
														'Quebec'
													),
													_react2.default.createElement(
														'option',
														{ value: 'International' },
														'International'
													)
												)
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'col-sm-6' },
											_react2.default.createElement(
												'div',
												{ className: 'form-group' + this.state.categoryValidationState },
												_react2.default.createElement(
													'label',
													{ className: 'control-label' },
													'Product Category'
												),
												_react2.default.createElement(
													'select',
													{ className: 'form-control', value: this.state.category,
														onChange: _AddProductActions2.default.updateCategory, required: true },
													_react2.default.createElement(
														'option',
														{ value: 'Fruits' },
														'Fruits'
													),
													_react2.default.createElement(
														'option',
														{ value: 'Vegetables' },
														'Vegetables'
													),
													_react2.default.createElement(
														'option',
														{ value: 'Mushrooms' },
														'Mushrooms'
													)
												)
											)
										)
									),
									_react2.default.createElement(
										'button',
										{ type: 'submit', className: 'btn btn-primary' },
										'Submit'
									),
									_react2.default.createElement(
										'p',
										{ className: 'help-block text-center' },
										this.state.helpBlock
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return AddProduct;
}(_react2.default.Component);

exports.default = AddProduct;

},{"../actions/AddProductActions":3,"../stores/AddProductStore":21,"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
        this.props.children
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./Navbar":15,"react":"react"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

var _HomeStore = require('../stores/HomeStore');

var _HomeStore2 = _interopRequireDefault(_HomeStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

		_this.state = _HomeStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_HomeStore2.default.listen(this.onChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_HomeStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'h1',
				{ className: 'flipInX animated' },
				'Yo'
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

},{"../actions/HomeActions":4,"../stores/HomeStore":22,"react":"react"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListProductActions = require('../actions/ListProductActions');

var _ListProductActions2 = _interopRequireDefault(_ListProductActions);

var _ListProductStore = require('../stores/ListProductStore');

var _ListProductStore2 = _interopRequireDefault(_ListProductStore);

var _UpdateProduct = require('./UpdateProduct');

var _UpdateProduct2 = _interopRequireDefault(_UpdateProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListProduct = function (_React$Component) {
	_inherits(ListProduct, _React$Component);

	function ListProduct(props) {
		_classCallCheck(this, ListProduct);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListProduct).call(this, props));

		_this.state = _ListProductStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(ListProduct, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_ListProductStore2.default.listen(this.onChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_ListProductStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'initiateUpdate',
		value: function initiateUpdate(item) {
			console.log(item);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row flipInX animated' },
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12' },
						_react2.default.createElement(
							'div',
							{ className: 'panel panel-default' },
							_react2.default.createElement(
								'div',
								{ className: 'panel-heading' },
								' Product List '
							),
							_react2.default.createElement(
								'div',
								{ className: 'panel-body' },
								this.state.itemList.map(function (item) {
									return _react2.default.createElement(_UpdateProduct2.default, { key: item });
								})
							)
						)
					)
				)
			);
		}
	}]);

	return ListProduct;
}(_react2.default.Component);

exports.default = ListProduct;

},{"../actions/ListProductActions":5,"../stores/ListProductStore":23,"./UpdateProduct":16,"react":"react"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
	_inherits(Navbar, _React$Component);

	function Navbar(props) {
		_classCallCheck(this, Navbar);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

		_this.state = _NavbarStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Navbar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_NavbarStore2.default.listen(this.onChange);

			$(document).ajaxStart(function () {
				_NavbarActions2.default.updateAjaxAnimation('fadeIn');
			});

			$(document).ajaxComplete(function () {
				setTimeout(function () {
					_NavbarActions2.default.updateAjaxAnimation('fadeOut');
				}, 750);
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_NavbarStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'nav',
				{ className: 'navbar navbar-default navbar-static-top' },
				_react2.default.createElement(
					'div',
					{ className: 'navbar-header' },
					_react2.default.createElement(
						'button',
						{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
						_react2.default.createElement(
							'span',
							{ className: 'sr-only' },
							'Toggle navigation'
						),
						_react2.default.createElement('span', { className: 'icon-bar' }),
						_react2.default.createElement('span', { className: 'icon-bar' }),
						_react2.default.createElement('span', { className: 'icon-bar' })
					),
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/', className: 'navbar-brand' },
						_react2.default.createElement(
							'span',
							{ ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
							_react2.default.createElement('div', { className: 'tri invert' }),
							_react2.default.createElement('div', { className: 'tri invert' }),
							_react2.default.createElement('div', { className: 'tri' }),
							_react2.default.createElement('div', { className: 'tri invert' }),
							_react2.default.createElement('div', { className: 'tri invert' }),
							_react2.default.createElement('div', { className: 'tri' }),
							_react2.default.createElement('div', { className: 'tri invert' }),
							_react2.default.createElement('div', { className: 'tri' }),
							_react2.default.createElement('div', { className: 'tri invert' })
						),
						'Inventory'
					)
				),
				_react2.default.createElement(
					'div',
					{ id: 'navbar', className: 'navbar-collapse collapse' },
					_react2.default.createElement(
						'ul',
						{ className: 'nav navbar-nav' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/' },
								'Home'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/compo' },
								'Make Composition'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/addItems' },
								'Add New Item'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/addOrder' },
								'Add New B2B Order'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/item' },
								'Update Items'
							)
						)
					)
				)
			);
		}
	}]);

	return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":6,"../stores/NavbarStore":24,"react":"react","react-router":"react-router"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UpdateProductActions = require('../actions/UpdateProductActions');

var _UpdateProductActions2 = _interopRequireDefault(_UpdateProductActions);

var _UpdateProductStore = require('../stores/UpdateProductStore');

var _UpdateProductStore2 = _interopRequireDefault(_UpdateProductStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateProduct = function (_React$Component) {
	_inherits(UpdateProduct, _React$Component);

	function UpdateProduct(props) {
		_classCallCheck(this, UpdateProduct);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UpdateProduct).call(this, props));

		_this.state = _UpdateProductStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(UpdateProduct, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_UpdateProductStore2.default.listen(this.onChange);
			_UpdateProductActions2.default.getItemsList();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_UpdateProductStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			event.preventDefault();

			var id = this.state._id;
			var name = this.state.name.trim();
			var price = this.state.price;
			var sizeCount = this.state.sizeCount;

			if (name.length == 0) {
				_UpdateProductActions2.default.invalidName;
				this.refs.nameTextField.getDOMNode().focus();
			}

			if (price == 0) {
				_UpdateProductActions2.default.invalidPrice;
				this.refs.priceField.getDOMNode().focus();
			}

			if (sizeCount == 0) {
				_UpdateProductActions2.default.invalidSizeCount;
				this.refs.sizeCountField.getDOMNode().focus();
			}

			if (name.length > 0 && price > 0 && sizeCount > 0) {
				_UpdateProductActions2.default.updateItems(id, name, price, sizeCount);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var buttonAdjust = { 'margin-top': '10%' };
			var items = this.state.items.map(function (itemName) {
				return _react2.default.createElement(
					'option',
					{ key: itemName._id },
					itemName.name
				);
			});

			return _react2.default.createElement(
				'div',
				{ className: 'row flipInX' },
				_react2.default.createElement(
					'form',
					{ onSubmit: this.handleSubmit.bind(this) },
					_react2.default.createElement(
						'div',
						{ className: 'form-group col-sm-3' },
						_react2.default.createElement(
							'label',
							{ className: 'control-label' },
							'Product Name'
						),
						_react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name || item.name,
							onChange: _UpdateProductActions2.default.updateName.bind(item), autoFocus: true, required: true })
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group col-sm-3' },
						_react2.default.createElement(
							'label',
							{ className: 'control-label' },
							'Product Price'
						),
						_react2.default.createElement('input', { type: 'number', className: 'form-control', step: '0.01', ref: 'priceField', value: this.state.price || item.price,
							onChange: _UpdateProductActions2.default.updatePrice, autoFocus: true, required: true })
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group col-sm-3' },
						_react2.default.createElement(
							'label',
							{ className: 'control-label' },
							'Product Size Count'
						),
						_react2.default.createElement('input', { type: 'number', className: 'form-control', step: '0.01', ref: 'sizeCountField', value: this.state.sizeCount || item.sizeCount,
							onChange: _UpdateProductActions2.default.updateSizeCount, autoFocus: true, required: true })
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group col-sm-3' },
						_react2.default.createElement(
							'button',
							{ type: 'submit', className: 'btn btn-primary', style: buttonAdjust },
							'Submit'
						)
					)
				)
			);
		}
	}]);

	return UpdateProduct;
}(_react2.default.Component);

exports.default = UpdateProduct;

},{"../actions/UpdateProductActions":7,"../stores/UpdateProductStore":25,"react":"react"}],17:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":18,"history/lib/createBrowserHistory":34,"react":"react","react-dom":"react-dom","react-router":"react-router"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _AddProduct = require('./components/AddProduct');

var _AddProduct2 = _interopRequireDefault(_AddProduct);

var _ListProduct = require('./components/ListProduct');

var _ListProduct2 = _interopRequireDefault(_ListProduct);

var _AddB2BOrder = require('./components/AddB2BOrder');

var _AddB2BOrder2 = _interopRequireDefault(_AddB2BOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/addItems', component: _AddProduct2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/item', component: _ListProduct2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/addOrder', component: _AddB2BOrder2.default })
);

},{"./components/AddB2BOrder":9,"./components/AddProduct":11,"./components/App":12,"./components/Home":13,"./components/ListProduct":14,"react":"react","react-router":"react-router"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddB2BOrderActions = require('../actions/AddB2BOrderActions');

var _AddB2BOrderActions2 = _interopRequireDefault(_AddB2BOrderActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddB2BOrderStore = function () {
	function AddB2BOrderStore() {
		_classCallCheck(this, AddB2BOrderStore);

		this.bindActions(_AddB2BOrderActions2.default);
		this.name = '';
		this.items = ['items-0'];
		this.quantity = '';
		this.nameValidationState = '';
	}

	_createClass(AddB2BOrderStore, [{
		key: 'onAddOrderSuccess',
		value: function onAddOrderSuccess(successMessage) {
			toastr.success('New order is in');
		}
	}, {
		key: 'onAddOrderFail',
		value: function onAddOrderFail(errorMessage) {
			toastr.error(errorMessage);
		}
	}, {
		key: 'onUpdateName',
		value: function onUpdateName(event) {
			this.name = event.target.value;
		}
	}, {
		key: 'onInvalidName',
		value: function onInvalidName() {
			toastr.error('Please enter a valid name');
			this.nameValidationState = 'has-error';
		}
	}]);

	return AddB2BOrderStore;
}();

exports.default = _alt2.default.createStore(AddB2BOrderStore);

},{"../actions/AddB2BOrderActions":1,"../alt":8}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddLineItemActions = require('../actions/AddLineItemActions');

var _AddLineItemActions2 = _interopRequireDefault(_AddLineItemActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddLineItemStore = function () {
	function AddLineItemStore() {
		_classCallCheck(this, AddLineItemStore);

		this.bindActions(_AddLineItemActions2.default);
		this.itemName = [];
		this.quantity = [];
		this.itemList = [];
	}

	_createClass(AddLineItemStore, [{
		key: 'onGetItemSuccess',
		value: function onGetItemSuccess(data) {
			for (var i = 0; i < data.length; i++) {
				this.itemList[i] = data[i];
			}
		}
	}, {
		key: 'onGetItemFail',
		value: function onGetItemFail(jqXhr) {
			toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
		}
	}, {
		key: 'onUpdateItem',
		value: function onUpdateItem(event) {

			this.itemName = event.target.value;
		}
	}, {
		key: 'onUpdateQuantity',
		value: function onUpdateQuantity(event) {
			this.quantity = event.target.value;
		}
	}, {
		key: 'onInvalidQuantity',
		value: function onInvalidQuantity() {
			toastr.error('The quantity you entered is not valid');
		}
	}]);

	return AddLineItemStore;
}();

exports.default = _alt2.default.createStore(AddLineItemStore);

},{"../actions/AddLineItemActions":2,"../alt":8}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddProductActions = require('../actions/AddProductActions');

var _AddProductActions2 = _interopRequireDefault(_AddProductActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddProductStore = function () {
	function AddProductStore() {
		_classCallCheck(this, AddProductStore);

		this.bindActions(_AddProductActions2.default);
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

	_createClass(AddProductStore, [{
		key: 'onAddProductSuccess',
		value: function onAddProductSuccess(successMessage) {
			this.helpBlock = successMessage;
			toastr.success('Product added successfully!');
		}
	}, {
		key: 'onAddProductFail',
		value: function onAddProductFail(errorMessage) {
			this.nameValidationState = 'has-error';
			this.priceValidationState = 'has-error';
			this.sizeCountValidationState = 'has-error';
			this.provenanceValidationState = 'has-error';
			this.categoryValidationState = 'has-error';
			this.helpBlock = errorMessage;
		}
	}, {
		key: 'onUpdateName',
		value: function onUpdateName(event) {
			this.name = event.target.value;
			this.nameValidationState = '';
		}
	}, {
		key: 'onUpdatePrice',
		value: function onUpdatePrice(event) {
			this.price = event.target.value;
			this.priceValidationState = '';
		}
	}, {
		key: 'onUpdateSizeCount',
		value: function onUpdateSizeCount(event) {
			this.sizeCount = event.target.value;
			this.sizeCountValidationState = '';
		}
	}, {
		key: 'onUpdateProvenance',
		value: function onUpdateProvenance(event) {
			this.provenance = event.target.value;
			this.provenanceValidationState = '';
		}
	}, {
		key: 'onUpdateCategory',
		value: function onUpdateCategory(event) {
			this.category = event.target.value;
			this.categoryValidationState = '';
		}
	}, {
		key: 'onInvalidName',
		value: function onInvalidName() {
			this.nameValidationState = 'has-error';
			this.helpBlock = 'Please enter a valid name';
		}
	}, {
		key: 'onInvalidPrice',
		value: function onInvalidPrice() {
			this.priceValidationState = 'has-error';
			this.helpBlock = 'Please enter a valid price';
		}
	}, {
		key: 'onInvalidSizeCount',
		value: function onInvalidSizeCount() {
			this.sizeCountValidationState = 'has-error';
			this.helpBlock = 'Please enter a valid size count';
		}
	}]);

	return AddProductStore;
}();

exports.default = _alt2.default.createStore(AddProductStore);

},{"../actions/AddProductActions":3,"../alt":8}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeStore = function () {
	function HomeStore() {
		_classCallCheck(this, HomeStore);

		this.bindActions(_HomeActions2.default);
		this.ajaxAnimationClass = '';
	}

	_createClass(HomeStore, [{
		key: 'onUpdateAjaxAnimation',
		value: function onUpdateAjaxAnimation(className) {
			this.ajaxAnimationClass = className;
		}
	}]);

	return HomeStore;
}();

exports.default = _alt2.default.createStore(HomeStore);

},{"../actions/HomeActions":4,"../alt":8}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ListProductActions = require('../actions/ListProductActions');

var _ListProductActions2 = _interopRequireDefault(_ListProductActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListProductStore = function ListProductStore() {
	_classCallCheck(this, ListProductStore);

	this.bindActions(_ListProductActions2.default);
	this.itemList = ['items-0'];
};

exports.default = _alt2.default.createStore(ListProductStore);

},{"../actions/ListProductActions":5,"../alt":8}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
	function NavbarStore() {
		_classCallCheck(this, NavbarStore);

		this.bindActions(_NavbarActions2.default);
		this.ajaxAnimationClass = '';
	}

	_createClass(NavbarStore, [{
		key: 'onUpdateAjaxAnimation',
		value: function onUpdateAjaxAnimation(className) {
			this.ajaxAnimationClass = className; //fadein or fadeout
		}
	}]);

	return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":6,"../alt":8}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _UpdateProductActions = require('../actions/UpdateProductActions');

var _UpdateProductActions2 = _interopRequireDefault(_UpdateProductActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpdateProductStore = function () {
	function UpdateProductStore() {
		_classCallCheck(this, UpdateProductStore);

		this.bindActions(_UpdateProductActions2.default);
		this.items = [];
		this.name = [];
		this.price = [];
		this.sizeCount = [];
		this._id = [];
	}

	_createClass(UpdateProductStore, [{
		key: 'onGetProductSuccess',
		value: function onGetProductSuccess(data) {
			for (var i = 0; i < data.length; i++) {
				this.items[i] = data[i];
			}
			toastr.success('The products were loaded');
		}
	}, {
		key: 'onGetProductFail',
		value: function onGetProductFail(jqXhr) {
			toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
		}
	}, {
		key: 'onUpdateProductSuccess',
		value: function onUpdateProductSuccess(successMessage) {
			toastr.success(successMessage);
		}
	}, {
		key: 'onUpdateProductFail',
		value: function onUpdateProductFail(errorMessage) {
			toastr.error(errorMessage);
		}
	}, {
		key: 'onUpdateName',
		value: function onUpdateName(event) {
			this.name = event.target.value;
		}
	}, {
		key: 'onUpdatePrice',
		value: function onUpdatePrice(event) {
			this.price = event.target.value;
		}
	}, {
		key: 'onUpdateSizeCount',
		value: function onUpdateSizeCount(event) {
			this.sizeCount = event.target.value;
		}
	}, {
		key: 'onInvalidName',
		value: function onInvalidName() {
			this.nameValidationState = 'has-error';
			this.helpBlock = 'Please enter a valid name';
		}
	}, {
		key: 'onInvalidPrice',
		value: function onInvalidPrice() {
			this.priceValidationState = 'has-error';
			this.helpBlock = 'Please enter a valid price';
		}
	}, {
		key: 'onInvalidSizeCount',
		value: function onInvalidSizeCount() {
			this.sizeCountValidationState = 'has-error';
			this.helpBlock = 'Please enter a valid size count';
		}
	}]);

	return UpdateProductStore;
}();

exports.default = _alt2.default.createStore(UpdateProductStore);

},{"../actions/UpdateProductActions":7,"../alt":8}],26:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":27,"./lib/keys.js":28}],27:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],28:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],29:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],30:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],31:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":43,"warning":44}],32:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],33:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],34:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":29,"./DOMStateStorage":31,"./DOMUtils":32,"./ExecutionEnvironment":33,"./createDOMHistory":35,"./parsePath":40,"_process":43,"invariant":42}],35:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":32,"./ExecutionEnvironment":33,"./createHistory":36,"_process":43,"invariant":42}],36:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":29,"./AsyncUtils":30,"./createLocation":37,"./deprecate":38,"./parsePath":40,"./runTransitionHook":41,"deep-equal":26}],37:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":29,"./parsePath":40}],38:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],39:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],40:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":39,"_process":43,"warning":44}],41:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":43,"warning":44}],42:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":43}],43:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
    try {
        cachedSetTimeout = setTimeout;
    } catch (e) {
        cachedSetTimeout = function () {
            throw new Error('setTimeout is not defined');
        }
    }
    try {
        cachedClearTimeout = clearTimeout;
    } catch (e) {
        cachedClearTimeout = function () {
            throw new Error('clearTimeout is not defined');
        }
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],44:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":43}]},{},[17])


//# sourceMappingURL=bundle.js.map
