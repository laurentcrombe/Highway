(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Highway", [], factory);
	else if(typeof exports === 'object')
		exports["Highway"] = factory();
	else
		root["Highway"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Highway - Loader File:
 * This file contains the methods handling the routing of your pages.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */

var Loader = function () {
  /**
   * Constructor:
   * Construct the Loader, initialise it and extract options.
   * 
   * @param {object} options - The Options
   */
  function Loader(options) {
    _classCallCheck(this, Loader);

    // Options
    this.views = options.views;
    this.mode = options.mode || 'out-in';

    // Events
    this.onPopstate = this.popstate.bind(this);
    this.onPathChange = this.change.bind(this);

    // PopState
    window.addEventListener('popstate', this.onPopstate);

    // Init
    this.bind();
    this.init();
  }

  /**
   * Initialisation:
   * When landing on the website the first page does'nt pass through the loader
   * so we need to initialise it as well as the attributes of our loader.
   */


  _createClass(Loader, [{
    key: 'init',
    value: function init() {
      // Attributes
      var title = document.querySelector('title').innerHTML;
      var view = document.querySelector('[loader-view]');
      var name = view.getAttribute('loader-view');

      this.path = window.location.pathname;
      this.stack = {};
      this.stack[this.path] = {
        title: title,
        view: view,
        name: name
      };

      // Load Current  
      this.current = new this.views[name](this.stack[this.path]);
      this.current.init();

      // Active
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var link = _step.value;

          if (link.pathname === this.path) {
            this.active(link);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Binding:
     * We create events we bind on DOM elements.
     */

  }, {
    key: 'bind',
    value: function bind() {
      // Get Links
      this.links = document.querySelectorAll('a:not([loader-disabled])');

      // Add Events on DOM Links
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var link = _step2.value;

          link.addEventListener('click', this.onPathChange);
          link.addEventListener('touchstart', this.onPathChange);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }

    /**
     * Unbinding:
     * We remove events we bound on DOM elements.
     */

  }, {
    key: 'unbind',
    value: function unbind() {
      // Remove Events from DOM Links
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.links[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var link = _step3.value;

          link.removeEventListener('click', this.onPathChange);
          link.removeEventListener('touchstart', this.onPathChange);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    /**
     * Popstate:
     * We fetch the path from the window location on `popstate` event
     */

  }, {
    key: 'popstate',
    value: function popstate() {
      // Update Path
      this.path = window.location.pathname;

      // Active
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.links[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var link = _step4.value;

          if (link.pathname === this.path) {
            this.temp = link;
          }
        }

        // Fetch Path
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this.fetchCall();
    }

    /**
     * Active:
     * Set active classnames on elements and remove previous active classname.
     * 
     * @param {object} el - The Element
     */

  }, {
    key: 'active',
    value: function active(el) {
      var classname = el.getAttribute('loader-active');

      if (classname) {
        if (this.HTMLActive) {
          var _classname = this.HTMLActive.getAttribute('loader-active');
          this.HTMLActive.classList.remove(_classname);
        }

        this.HTMLActive = el;
        this.HTMLActive.classList.add(classname);
      }
    }

    /**
     * Change:
     * We check when path changes on link `click` event 
     * 
     * @param {object} event - The `click` Event
     */

  }, {
    key: 'change',
    value: function change(event) {
      // Prevent event from firing
      event = event || window.event;
      if (event.preventDefault) {
        event.preventDefault();
      }
      event.returnValue = false;

      // Attributes
      var link = event.currentTarget;
      var path = link.getAttribute('href');
      var target = link.getAttribute('target');

      // We check if the current link target should open in a new blank window.
      // If the target is set to `_blank` the script stops otherwise it continues.
      if (target === '_blank') {
        // Open New Window
        return window.open(path, '_blank');
      }

      // Save Link Temporary
      this.temp = link;

      // Update
      this.update(path);
    }

    /**
     * Update:
     * We check when path updates.
     * 
     * @param {string} path - The Path
     */

  }, {
    key: 'update',
    value: function update(path) {
      // We check if the current link redirects to a different page than the
      // displayed one. If the two pages are different the script continues
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
      var _this = this;

      // We check if the path has been cached and we fetch it if not.
      if (!this.stack[this.path]) {
        fetch(this.path).then(function (response) {
          return response.text();
        }).then(function (result) {
          return _this.fetchSuccess(result);
        }).catch(function (error) {
          return _this.fetchError(error);
        });
        return;
      }

      // Redirect
      this.redirect();
    }

    /**
     * Fetch Sucess:
     * We fetch update DOM on fetch success.
     * 
     * @param {string} result - The Page HTML
     */

  }, {
    key: 'fetchSuccess',
    value: function fetchSuccess(result) {
      // Update Attributes
      var page = document.createRange().createContextualFragment(result);
      var title = page.querySelector('title').innerHTML;
      var view = page.querySelector('[loader-view]');
      var name = view.getAttribute('loader-view');

      // Update Stack
      this.stack[this.path] = {
        title: title,
        view: view,
        name: name
      };

      // Redirect
      this.redirect();
    }

    /**
     * Fetch Error:
     * We throw an error message on fetch error.
     * 
     * @param {string} error - The Error
     */

  }, {
    key: 'fetchError',
    value: function fetchError(error) {
      throw Error(error);
    }

    /**
     * Redirect:
     * We update DOM with the page to display.
     */

  }, {
    key: 'redirect',
    value: function redirect() {
      var _this2 = this;

      var name = this.stack[this.path].name;

      // Update Previous/Current

      this.previous = this.current;
      this.current = new this.views[name](this.stack[this.path]);

      // Update Active
      this.active(this.temp);

      // Unbind Events
      this.unbind();

      // Load/Unload Views
      switch (this.mode) {
        // Both:
        // Previous and current transitions run at the same time.
        case 'both':
          this.current.load();
          this.previous.unload().then(function () {
            return _this2.bind();
          }).catch(function (e) {
            throw Error(e);
          });
          break;

        // In-Out:
        // Previous transition runs after current transition is over.
        case 'in-out':
          this.current.load().then(function () {
            return _this2.previous.unload();
          }).then(function () {
            return _this2.bind();
          }).catch(function (e) {
            throw Error(e);
          });
          break;

        // Out-In:
        // Current transition runs after previous transition is over (default).
        default:
          this.previous.unload().then(function () {
            return _this2.current.load();
          }).then(function () {
            return _this2.bind();
          }).catch(function (e) {
            throw Error(e);
          });
      }
    }
  }]);

  return Loader;
}();

// Export Class


exports.default = Loader;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Highway - View File:
 * This file contains the methods handling the display of your pages.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */

var View = function () {
  /**
   * Constructor:
   * Construct the View, get the `loader-wrapper` and extract options.
   * 
   * @param {object} options - The options
   */
  function View(options) {
    _classCallCheck(this, View);

    // Wrapper
    this.wrapper = document.querySelector('[loader-wrapper]');

    // Options
    this.title = options.title;
    this.view = options.view;
  }

  /**
   * Initialisation:
   * We call the enter completed method. This is usefull for the landing page
   * that does not pass through the loader.
   */


  _createClass(View, [{
    key: 'init',
    value: function init() {
      // Enter Completed
      if (this.onEnterCompleted) {
        this.onEnterCompleted();
      }
    }

    /**
     * Append:
     * We append the view content to the `loader-wrapper` and we update the page
     * title. 
     */

  }, {
    key: 'append',
    value: function append() {
      // Update Title
      document.title = this.title;

      // Append
      this.wrapper.appendChild(this.view);
    }

    /**
     * Remove:
     * We remove the view content from the `loader-wrapper`.
     */

  }, {
    key: 'remove',
    value: function remove() {
      // Remove
      this.wrapper.removeChild(this.view);
    }

    /**
     * Load:
     * We load the view content and call the transition `in`. Analytics are 
     * updated as well if the GA script has been setup.
     */

  }, {
    key: 'load',
    value: function load() {
      var _this = this;

      // Enter
      if (this.onEnter) {
        this.onEnter();
      }

      // Append
      this.append();

      // Promise for Async methods
      return new Promise(function (resolve, reject) {
        // Transition
        _this.transition.in(_this.view, function () {
          // Resolve
          resolve();

          // Send GA
          _this.analytics();

          // Enter Completed
          if (_this.onEnterCompleted) {
            _this.onEnterCompleted();
          }
        });
      });
    }

    /**
     * Unload:
     * We unload the view content and call the transition `out`.
     */

  }, {
    key: 'unload',
    value: function unload() {
      var _this2 = this;

      // Leave
      if (this.onLeave) {
        this.onLeave();
      }

      // Promise for Async methods
      return new Promise(function (resolve, reject) {
        // Transition
        _this2.transition.out(_this2.view, function () {
          // Resolve
          resolve();

          // Remove
          _this2.remove();

          // Leave Completed
          if (_this2.onLeaveCompleted) {
            _this2.onLeaveCompleted();
          }
        });
      });
    }

    /**
     * Analytics:
     * We update GA if the script has been setup.
     */

  }, {
    key: 'analytics',
    value: function analytics() {
      // Send Page View to GA
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _view = __webpack_require__(1);

var _view2 = _interopRequireDefault(_view);

var _loader = __webpack_require__(0);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Highway - Main File:
 * This file requires the requested files for Highway.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */

var Highway = {
  View: _view2.default,
  Loader: _loader2.default
};

exports.default = Highway;

/***/ })
/******/ ]);
});
//# sourceMappingURL=highway.js.map