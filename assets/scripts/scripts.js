/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/scripts/mainNavigation.js":
/*!******************************************!*\
  !*** ./source/scripts/mainNavigation.js ***!
  \******************************************/
/*! exports provided: mainNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainNavigation", function() { return mainNavigation; });
function mainNavigation() {
  // Select all items that have a dropdown menu
  var menuItems = document.querySelectorAll('li.menu-item-has-children');
  menuItems.forEach(function (el) {
    // All limks that open a dropdown 
    var dropdownLinks = el.querySelector('a'); // Create a button to open the dropdown menu

    var button = '<button>+<span class="screen-reader-text">show submenu for “' + dropdownLinks.text + '”</span></button>';
    dropdownLinks.insertAdjacentHTML('afterend', button);
    el.querySelector('button').addEventListener("click", function (event) {
      if (this.parentNode.classList.contains("open")) {
        // If menu is open, close it
        this.parentNode.classList.remove('open');
        this.parentNode.querySelector('button').setAttribute('aria-expanded', "false");
      } else {
        // If menu is closed, open it
        this.parentNode.classList.add('open');
        this.parentNode.querySelector('button').setAttribute('aria-expanded', "true");
      }

      event.preventDefault();
    }); // el.querySelector('button').addEventListener('mouseenter',  function(){
    //     this.parentNode.classList.add('open');
    //     this.parentNode.querySelector('button').setAttribute('aria-expanded', 'true');
    // });
    // el.querySelector('button').addEventListener('mouseleave',  function(){
    //     this.parentNode.classList.remove('open');
    //     this.parentNode.querySelector('button').setAttribute('aria-expanded', "false");
    // });
  });
}

mainNavigation();


/***/ }),

/***/ "./source/scripts/scripts.js":
/*!***********************************!*\
  !*** ./source/scripts/scripts.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainNavigation */ "./source/scripts/mainNavigation.js");
/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/***/ }),

/***/ "./source/styles/styles.scss":
/*!***********************************!*\
  !*** ./source/styles/styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./source/scripts/scripts.js ./source/styles/styles.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./source/scripts/scripts.js */"./source/scripts/scripts.js");
module.exports = __webpack_require__(/*! ./source/styles/styles.scss */"./source/styles/styles.scss");


/***/ })

/******/ });
//# sourceMappingURL=scripts.js.map