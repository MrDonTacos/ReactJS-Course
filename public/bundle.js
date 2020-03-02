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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/utils.js */ \"./src/utils.js\");\n/* harmony import */ var _src_person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/person */ \"./src/person.js\");\n\r\n\r\n\r\nconsole.log('app.js is running!');\r\nObject(_src_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"helloWorld\"])();\r\nconsole.log(Object(_src_person__WEBPACK_IMPORTED_MODULE_1__[\"isAdult\"])(18));\r\nconsole.log(Object(_src_person__WEBPACK_IMPORTED_MODULE_1__[\"carDrink\"])(20));\r\nconsole.log(Object(_src_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"triangle\"])(4,4));\r\nconsole.log(Object(_src_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"square\"])(4,4));\r\nconsole.log(Object(_src_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(8));\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! exports provided: isAdult, carDrink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAdult\", function() { return isAdult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"carDrink\", function() { return carDrink; });\nconst isAdult = (age) => {\r\n    if(age>=18)\r\n    return true\r\n    else\r\n    return false\r\n}\r\n\r\nconst carDrink = (age) => {\r\n    if (age>=21) {\r\n        return true\r\n    }else{\r\n        return false\r\n    }\r\n}\r\n\r\n//export {isAdult, carDrink}\n\n//# sourceURL=webpack:///./src/person.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default, helloWorld, square, triangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"helloWorld\", function() { return helloWorld; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"square\", function() { return square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triangle\", function() { return triangle; });\nconsole.log('utils.js running');\r\n\r\nconst helloWorld = () => {\r\n    console.log(\"I'm an arrow function\");\r\n}\r\n\r\nconst square = (a,b) => a*b; \r\n\r\nconst triangle = (a,b) => (a*b)/2\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((a) => a*4);\r\n\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });