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
/******/ 	return __webpack_require__(__webpack_require__.s = "./labs/src/intro/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./labs/src/intro/index.js":
/*!*********************************!*\
  !*** ./labs/src/intro/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("alert(\"Hello world\");\ndocument.getElementById(\"main\").innerHTML = \"Hello world\";\n\nlet min = 1;\nlet max = 10;\nlet random = Math.floor(Math.random() * (max - min + 1)) + min;\nconsole.log('The random number: ' + random);\n\nlet str = '';\nfor (let index = 1; index <= random; index++) {\n\n    console.log('This is the index: ' + index);\n    switch (index) {\n        case 1:\n            str += 'fun' + ' ';\n            break;\n\n        case 2:\n            str += 'blue' + ' ';\n            break;\n\n        case 3:\n            str += 'free' + ' ';\n            break;\n\n        case 4:\n            str += 'pour' + ' ';\n            break;\n\n        case 5:\n            str += 'hive' + ' ';\n            break;\n\n        case 6:\n            str += 'kicks' + ' ';\n            break;\n\n        case 7:\n            str += 'eleven' + ' ';\n            break;\n\n        case 8:\n            str += 'straight' + ' ';\n            break;\n\n        case 9:\n            str += 'fine' + ' ';\n            break;\n\n        case 10:\n            str += 'pen' + ' ';\n            break;\n    }\n\n}\n\ndocument.getElementById(\"number\").innerHTML = str;\n\n//# sourceURL=webpack:///./labs/src/intro/index.js?");

/***/ })

/******/ });