webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(178);

	var _Home = __webpack_require__(233);

	var _Home2 = _interopRequireDefault(_Home);

	var _Cover = __webpack_require__(252);

	var _Cover2 = _interopRequireDefault(_Cover);

	var _About = __webpack_require__(253);

	var _About2 = _interopRequireDefault(_About);

	var _Works = __webpack_require__(256);

	var _Works2 = _interopRequireDefault(_Works);

	var _Contact = __webpack_require__(260);

	var _Contact2 = _interopRequireDefault(_Contact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _Home2.default },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Cover2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _Cover2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/works', component: _Works2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _Contact2.default })
	    )
	), document.getElementById('app'));

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _reactAddonsCssTransitionGroup = __webpack_require__(234);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _home = __webpack_require__(247);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Nav = function (_Component) {
	    _inherits(Nav, _Component);

	    function Nav() {
	        _classCallCheck(this, Nav);

	        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	    }

	    _createClass(Nav, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'nav',
	                { className: _home2.default.nav },
	                _react2.default.createElement(
	                    'div',
	                    { className: _home2.default.logo },
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/' },
	                        'Yiming'
	                    )
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { className: _home2.default.navRight },
	                    _react2.default.createElement(
	                        'li',
	                        { className: _home2.default.navItem },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/about' },
	                            'About'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: _home2.default.navItem },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/works' },
	                            'Works'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: _home2.default.navItem },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/contact' },
	                            'Contact'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Nav;
	}(_react.Component);

	var Footer = function (_Component2) {
	    _inherits(Footer, _Component2);

	    function Footer() {
	        _classCallCheck(this, Footer);

	        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	    }

	    _createClass(Footer, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _home2.default.footer },
	                'Copyright \xA9 2017 Yiming'
	            );
	        }
	    }]);

	    return Footer;
	}(_react.Component);

	var Home = function (_Component3) {
	    _inherits(Home, _Component3);

	    function Home() {
	        _classCallCheck(this, Home);

	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }

	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _home2.default.home },
	                _react2.default.createElement(Nav, null),
	                _react2.default.createElement(
	                    _reactAddonsCssTransitionGroup2.default,
	                    {
	                        transitionName: 'transitionWrapper',
	                        component: 'div',
	                        className: _home2.default.transitionWrapper,
	                        transitionEnterTimeout: 500,
	                        transitionLeaveTimeout: 500 },
	                    _react2.default.createElement(
	                        'div',
	                        { key: this.props.location.pathname,
	                            style: { position: "absolute", width: "100%" } },
	                        this.props.children
	                    )
	                ),
	                _react2.default.createElement(Footer, null)
	            );
	        }
	    }]);

	    return Home;
	}(_react.Component);

	exports.default = Home;

/***/ },

/***/ 247:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"home":"home__home-eoHdD","nav":"home__nav-3UAsZ","navRight":"home__navRight-3TeEE","navItem":"home__navItem-1WIRy","logo":"home__logo-twxd2","cover":"home__cover-1-Qk9","title":"home__title-1WgcK","subTitle":"home__subTitle-2w8ji","footer":"home__footer-3Lvo6","transitionWrapper":"home__transitionWrapper-2x_uP"};

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _home = __webpack_require__(247);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cover = function (_Component) {
	    _inherits(Cover, _Component);

	    function Cover() {
	        _classCallCheck(this, Cover);

	        return _possibleConstructorReturn(this, (Cover.__proto__ || Object.getPrototypeOf(Cover)).apply(this, arguments));
	    }

	    _createClass(Cover, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _home2.default.cover },
	                _react2.default.createElement(
	                    'h1',
	                    { className: _home2.default.title },
	                    'Yiming'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _home2.default.subTitle },
	                    'Life is not easy,'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _home2.default.subTitle },
	                    'but I have a rock heart!'
	                )
	            );
	        }
	    }]);

	    return Cover;
	}(_react.Component);

	exports.default = Cover;

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _about = __webpack_require__(254);

	var _about2 = _interopRequireDefault(_about);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var About = function (_Component) {
	    _inherits(About, _Component);

	    function About() {
	        _classCallCheck(this, About);

	        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	    }

	    _createClass(About, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _about2.default.about },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u6211\u53EB\u4F55\u4E00\u9E23\uFF1B'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u751F\u4E8E 1992 \u5E74 10 \u6708\uFF1B'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '2014 \u5E74 7 \u6708\u6BD5\u4E1A\u4E8E\u5929\u6D25\u5927\u5B66\uFF1B'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '2015 \u5E74 9 \u6708\u5F00\u59CB\u4ECE\u4E8B\u524D\u7AEF\u5F00\u53D1\uFF1B'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u7231\u597D\uFF1A\u770B\u5C0F\u8BF4\u3001\u542C\u6E2F\u4E50\u3001\u5199\u4EE3\u7801\uFF1B'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '\u76EE\u6807\uFF1A\u6210\u4E3A\u4E00\u540D\u4F18\u79C0\u7684\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\u3002'
	                ),
	                _react2.default.createElement(
	                    'a',
	                    { className: _about2.default.cv, href: 'https://ymjrcc.github.io/my_cv/build/', target: '_blank' },
	                    '\u5728\u7EBF\u7B80\u5386'
	                )
	            );
	        }
	    }]);

	    return About;
	}(_react.Component);

	exports.default = About;

/***/ },

/***/ 254:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"about":"about__about-244xt","cv":"about__cv-1hKNU"};

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _works = __webpack_require__(257);

	var _works2 = _interopRequireDefault(_works);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Works = function (_Component) {
	    _inherits(Works, _Component);

	    function Works() {
	        _classCallCheck(this, Works);

	        return _possibleConstructorReturn(this, (Works.__proto__ || Object.getPrototypeOf(Works)).apply(this, arguments));
	    }

	    _createClass(Works, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _works2.default.works },
	                _react2.default.createElement(
	                    'h2',
	                    { className: _works2.default.title },
	                    'Works List'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { className: _works2.default.list },
	                    _react2.default.createElement(
	                        'li',
	                        { className: _works2.default.item },
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'https://github.com/ymjrcc/Fireball_by_React', target: '_blank' },
	                            'Fireball Demo'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: _works2.default.item },
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'https://github.com/ymjrcc/My_GitHub_Pages', target: '_blank' },
	                            'My GitHub Pages'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: _works2.default.item },
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'https://github.com/ymjrcc/Gallery_by_React', target: '_blank' },
	                            'Gallery'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: _works2.default.item },
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'https://github.com/ymjrcc/carousel', target: '_blank' },
	                            'Carousel'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        '\u2026\u2026'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _works2.default.fireball },
	                    _react2.default.createElement('img', { src: __webpack_require__(259) }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _works2.default.fireballTitle },
	                        'Fireball Demo'
	                    )
	                )
	            );
	        }
	    }]);

	    return Works;
	}(_react.Component);

	exports.default = Works;

/***/ },

/***/ 257:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"works":"works__works-3so8w","fireball":"works__fireball-17v0s","fireballTitle":"works__fireballTitle-_csks","title":"works__title-1dj0z","list":"works__list-zTa97","item":"works__item-2Bw7D"};

/***/ },

/***/ 259:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _contact = __webpack_require__(261);

	var _contact2 = _interopRequireDefault(_contact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Contact = function (_Component) {
	    _inherits(Contact, _Component);

	    function Contact() {
	        _classCallCheck(this, Contact);

	        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
	    }

	    _createClass(Contact, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _contact2.default.contact },
	                _react2.default.createElement(
	                    'h2',
	                    { className: _contact2.default.title },
	                    '\u8054\u7CFB\u6211'
	                ),
	                _react2.default.createElement('div', { className: _contact2.default.hr }),
	                _react2.default.createElement(
	                    'div',
	                    { className: _contact2.default.info },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '\u624B\u673A\uFF1A15271831026'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '\u90AE\u7BB1\uFF1Ahym826@126.com'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'QQ/\u5FAE\u4FE1\uFF1A420491300'
	                    )
	                )
	            );
	        }
	    }]);

	    return Contact;
	}(_react.Component);

	exports.default = Contact;

/***/ },

/***/ 261:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"contact":"contact__contact-2zgCB","title":"contact__title-2EzXp","hr":"contact__hr-2RRZL","info":"contact__info-1ZILN"};

/***/ }

});