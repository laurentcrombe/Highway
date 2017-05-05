/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = __webpack_require__(4);

var _router2 = _interopRequireDefault(_router);

var _view = __webpack_require__(5);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Highway - Main File:
 * This file requires the requested files for Highway.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */

var Highway = {
  Router: _router2.default,
  View: _view2.default
};

exports.default = Highway;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Transition - Fade:
 * Simple fadeIn/fadeOut transition using `TweenMax`. Notice`TweenMax` is not
 * required in this file simply because it should be required in your main
 * file and not in transitions files.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */

var Fade = {
  in: function _in(el, complete) {
    TweenMax.fromTo(el, 1, { alpha: 0.0 }, { alpha: 1.0, onComplete: complete });
  },
  out: function out(el, complete) {
    TweenMax.fromTo(el, 1, { alpha: 1.0 }, { alpha: 0.0, onComplete: complete });
  }
};

exports.default = Fade;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _highway = __webpack_require__(0);

var _highway2 = _interopRequireDefault(_highway);

var _fade = __webpack_require__(1);

var _fade2 = _interopRequireDefault(_fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Highway


// Transition


var Home = function (_Highway$View) {
  _inherits(Home, _Highway$View);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'onEnter',
    value: function onEnter() {}
  }, {
    key: 'onLeave',
    value: function onLeave() {}
  }, {
    key: 'onEnterCompleted',
    value: function onEnterCompleted() {}
  }, {
    key: 'onLeaveCompleted',
    value: function onLeaveCompleted() {}
  }, {
    key: 'transition',
    get: function get() {
      return _fade2.default;
    }
  }]);

  return Home;
}(_highway2.default.View);

exports.default = Home;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _highway = __webpack_require__(0);

var _highway2 = _interopRequireDefault(_highway);

var _fade = __webpack_require__(1);

var _fade2 = _interopRequireDefault(_fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Highway


// Transition


var Page = function (_Highway$View) {
  _inherits(Page, _Highway$View);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'onEnter',
    value: function onEnter() {}
  }, {
    key: 'onLeave',
    value: function onLeave() {}
  }, {
    key: 'onEnterCompleted',
    value: function onEnterCompleted() {}
  }, {
    key: 'onLeaveCompleted',
    value: function onLeaveCompleted() {}
  }, {
    key: 'transition',
    get: function get() {
      return _fade2.default;
    }
  }]);

  return Page;
}(_highway2.default.View);

exports.default = Page;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Highway - Router File:
 * This file contains the methods handling the routing our your pages. It works
 * in pair with the `view.js` file so never forget to add both of them in your
 * project directory since they depend on each other.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */

var Router = function () {
  /**
   * Constructor:
   * Construct the class and initialise it.
   * @param {object} options - The options
   */
  function Router(options) {
    _classCallCheck(this, Router);

    // Attributes
    this.views = options.views;
    this.mode = options.mode || 'out-in';
    this.stack = {};

    // Init
    this.init();
  }

  /**
   * Initialisation:
   * We initialise the attributes and the current page class.
   */


  _createClass(Router, [{
    key: 'init',
    value: function init() {
      // Update Attributes
      var title = document.querySelector('title').innerHTML;
      var root = document.querySelector('[namespace]');
      var name = root.getAttribute('namespace');

      this.path = window.location.pathname;
      this.stack[this.path] = {
        title: title,
        root: root,
        name: name
      };

      // Load Current View  
      this.current = new this.views[name](this.stack[this.path]);
      this.current.init();

      // Bind
      this.bind();
    }

    /**
     * Binding:
     * We create events we bind on DOM elements.
     */

  }, {
    key: 'bind',
    value: function bind() {
      var _this = this;

      // Popstate
      if (!this.onPopstate) {
        // Create Event
        this.onPopstate = this.popstate.bind(this);

        // Add Events on Window
        window.addEventListener('popstate', this.onPopstate);
      }

      // Update
      if (!this.onUpdate) {
        // Get Links
        var links = document.querySelectorAll('[a[href]:not([disabled])]');

        // Create Events
        this.onUpdate = this.update.bind(this);

        // Add Events on DOM Links
        [].forEach.call(links, function (el, i) {
          el.addEventListener('click', _this.onUpdate);
        });
      }
    }

    /**
     * Unbinding:
     * We remove events we bound on DOM elements.
     */

  }, {
    key: 'unbind',
    value: function unbind() {
      var _this2 = this;

      // Update
      if (this.onUpdate) {
        // Get Links
        var links = document.querySelectorAll('a[href]:not([disabled])');

        // Remove Events from DOM Links
        [].forEach.call(links, function (el, i) {
          el.removeEventListener('click', _this2.onUpdate);
        });

        // Clean up Events
        this.onUpdate = null;
      }
    }

    /**
     * Popstate:
     * We fetch the path from the history state on `popstate` event
     */

  }, {
    key: 'popstate',
    value: function popstate() {
      // Update Path
      this.path = window.location.pathname;

      // Fetch Path
      this.fetchCall();
    }

    /**
     * Update:
     * We check when window location updates
     * @param {object} event - The `click` event
     */

  }, {
    key: 'update',
    value: function update(event) {
      // Prevent event from Firing
      event.preventDefault();

      // Get Path
      var target = event.currentTarget;
      var path = target.getAttribute('href');

      // We check if the current link redirects to a different page than the
      // displayed ones. If the two pages are different the script continues
      // otherwise the script stops.
      if (path !== this.path) {
        // Update Path
        this.path = path;

        // Push State in History
        window.history.pushState({ path: this.path }, '', this.path);

        // Fetch Path
        this.fetchCall();
      }
    }

    /**
     * Fetch:
     * We fetch the path.
     */

  }, {
    key: 'fetchCall',
    value: function fetchCall() {
      var _this3 = this;

      // We check if the path has been cached and we fetch it if not.
      if (!this.stack[this.path]) {
        fetch(this.path).then(function (response) {
          return response.text();
        }).then(function (result) {
          return _this3.fetchSuccess(result);
        }).catch(function (error) {
          return _this3.fetchError(error);
        });
        return;
      }

      // Redirect
      this.redirect();
    }

    /**
     * Fetch Sucess:
     * We fetch update DOM on fetch success.
     * @param {string} result - The page HTML
     */

  }, {
    key: 'fetchSuccess',
    value: function fetchSuccess(result) {
      // Update Attributes
      var page = document.createRange().createContextualFragment(result);
      var title = page.querySelector('title').innerHTML;
      var root = page.querySelector('[namespace]');
      var name = root.getAttribute('namespace');

      // Update History
      this.stack[this.path] = {
        title: title,
        root: root,
        name: name
      };

      // Redirect
      this.redirect();
    }

    /**
     * Fetch Error:
     * We throw an error message on fetch error.
     * @param {string} error - The error to display
     */

  }, {
    key: 'fetchError',
    value: function fetchError(error) {
      // Fetch Failed
      throw new Error(error);
    }

    /**
     * Redirect:
     * We update DOM with the page to display.
     */

  }, {
    key: 'redirect',
    value: function redirect() {
      var _this4 = this;

      var name = this.stack[this.path].name;

      // Update Previous/Current

      this.previous = this.current;
      this.current = new this.views[name](this.stack[this.path]);

      // Load/Unload Views
      switch (this.mode) {
        case 'both':
          // Unload Previous
          this.previous.unload();
          this.unbind();

          // Load Current
          this.current.load();
          this.bind();
          break;
        case 'in-out':
          // Load Current
          this.current.load(function () {
            // Unload Previous
            _this4.previous.unload();
            _this4.unbind();
          });
          this.bind();
          break;
        default:
          // Unload Previous
          this.previous.unload(function () {
            // Load Current
            _this4.current.load();
            _this4.bind();
          });
          this.unbind();
      }
    }
  }]);

  return Router;
}();

// Export Class


exports.default = Router;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Highway - View File:
 * This file contains the methods handling the display of your pages. It works
 * in pair with the `core.js` file so never forget to add both of them in your
 * project directory since they depend on each other.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */

var View = function () {
  /**
   * Constructor:
   * Construct the class.
   * @param {object} options - The options
   */
  function View(options) {
    _classCallCheck(this, View);

    // Check Transition
    if (typeof this.transition === 'undefined') {
      throw new Error('Undefined Transitions');
    }

    // Get Options
    this.title = options.title;
    this.root = options.root;
    this.name = options.name;

    // Get Datas
    this.wrapper = document.querySelector('.router-wrapper');
  }

  /**
   * Initialisation:
   * We call the enter completed method.
   */


  _createClass(View, [{
    key: 'init',
    value: function init() {
      // Enter Completed
      this.onEnterCompleted();
    }

    /**
     * Append:
     * We append the view to DOM.
     */

  }, {
    key: 'append',
    value: function append() {
      // Update Title
      document.title = this.title;

      // Append
      this.wrapper.appendChild(this.root);
    }

    /**
     * Remove:
     * We remove the view from DOM.
     */

  }, {
    key: 'remove',
    value: function remove() {
      // Remove
      this.wrapper.removeChild(this.root);

      // Leave Completed
      this.onLeaveCompleted();
    }

    /**
     * Load:
     * We load the view.
     * @param {function} callback - The callback function
     */

  }, {
    key: 'load',
    value: function load(callback) {
      var _this = this;

      // Enter
      this.onEnter();

      // Append
      this.append();

      // Transition In
      this.tIn = new Promise(function (resolve, reject) {
        if (!_this.transition.in) {
          reject();
          return;
        }
        _this.transition.in(_this.root, resolve);
      });

      this.tIn.then(this.init.bind(this)).then(this.analytics.bind(this)).then(callback).catch(function () {
        throw new Error('Undefined Transition In');
      });
    }

    /**
     * Unload:
     * We unload the view.
     * @param {function} callback - The callback function
     */

  }, {
    key: 'unload',
    value: function unload(callback) {
      var _this2 = this;

      // Leave
      this.onLeave();

      // Transition Out
      this.tOut = new Promise(function (resolve, reject) {
        if (!_this2.transition.out) {
          reject();
          return;
        }
        _this2.transition.out(_this2.root, resolve);
      });

      this.tOut.then(this.remove.bind(this)).then(callback).catch(function () {
        throw new Error('Undefined Transition Out');
      });
    }

    /**
     * Analytics:
     * We update GA if the script exists.
     */

  }, {
    key: 'analytics',
    value: function analytics() {
      // Send Page View to GA if enabled
      if (typeof ga !== 'undefined') {
        ga('set', { page: window.location.pathname, title: document.title });
        ga('send', 'pageview');
      }
    }
  }]);

  return View;
}();

// Export Class


exports.default = View;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _highway = __webpack_require__(0);

var _highway2 = _interopRequireDefault(_highway);

var _home = __webpack_require__(2);

var _home2 = _interopRequireDefault(_home);

var _page = __webpack_require__(3);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Highway


// Views


// App
var App = function App() {
  _classCallCheck(this, App);

  document.addEventListener('DOMContentLoaded', function () {
    new _highway2.default.Router({
      views: {
        'home': _home2.default,
        'page': _page2.default
      }
    });
  });
};

// DOM Ready


(function () {
  var a = new App();
})();

/***/ })
/******/ ]);