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

/***/ "./labs/src/intro/getBrowserInfo.js":
/*!******************************************!*\
  !*** ./labs/src/intro/getBrowserInfo.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/* eslint guard-for-in:off */\nvar getBrowserInfo = function getBrowserInfo() {\n  var cssClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var html = \"<ul class=\\\"\" + cssClass + \"\\\">\";\n  for (var prop in navigator) {\n    try {\n      html += \"<li>\" + prop + \"=\" + navigator[prop] + \"</li>\";\n    } catch (error) {\n      console.error(error);\n    }\n  }\n  html += \"</ul>\";\n\n  return html;\n};\nexports.default = getBrowserInfo;\n\n//# sourceURL=webpack:///./labs/src/intro/getBrowserInfo.js?");

/***/ }),

/***/ "./labs/src/intro/index.js":
/*!*********************************!*\
  !*** ./labs/src/intro/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./site.css */ \"./labs/src/intro/site.css\");\n\nvar _persons = __webpack_require__(/*! ./persons.json */ \"./labs/src/intro/persons.json\");\n\nvar _persons2 = _interopRequireDefault(_persons);\n\nvar _getBrowserInfo = __webpack_require__(/*! ./getBrowserInfo */ \"./labs/src/intro/getBrowserInfo.js\");\n\nvar _getBrowserInfo2 = _interopRequireDefault(_getBrowserInfo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nalert(\"Hello world\"); /* eslint no-undef:off, func-style:off, require-jsdoc:off */\n\ndocument.getElementById(\"main\").innerHTML = \"Hello world\";\n\nvar min = 1;\nvar max = 10;\nvar random = Math.floor(Math.random() * (max - min + 1)) + min;\nconsole.log('The random number: ' + random);\n\nvar str = '';\nfor (var index = 1; index <= random; index++) {\n\n    console.log('This is the index: ' + index);\n    switch (index) {\n        case 1:\n            str += 'fun' + ' ';\n            break;\n\n        case 2:\n            str += 'blue' + ' ';\n            break;\n\n        case 3:\n            str += 'free' + ' ';\n            break;\n\n        case 4:\n            str += 'pour' + ' ';\n            break;\n\n        case 5:\n            str += 'hive' + ' ';\n            break;\n\n        case 6:\n            str += 'kicks' + ' ';\n            break;\n\n        case 7:\n            str += 'eleven' + ' ';\n            break;\n\n        case 8:\n            str += 'straight' + ' ';\n            break;\n\n        case 9:\n            str += 'fine' + ' ';\n            break;\n\n        case 10:\n            str += 'pen' + ' ';\n            break;\n    }\n}\n\nfunction getPersons() {\n\n    var promise = new Promise(function (resolve) {\n        // We will do async stuff here in a minute\n        setTimeout(function () {\n            console.log(\"finished reading persons\", _persons2.default);\n            resolve(_persons2.default);\n        }, 3000);\n    });\n\n    console.log(_persons2.default);\n    return promise;\n}\n\nvar persons = [];\npersons = getPersons().then(function (listOfPoeple) {\n    console.log('promise resolved', listOfPoeple);\n    var personString = listOfPoeple.map(function (p) {\n        return '<section class=\"person-card\">\\n                <header>\\n                  <h1>\\n                    ' + p.name.first + ' ' + p.name.last + '\\n                  </h1>\\n                </header>\\n                <div class=\"profile-image-div\">\\n                  <img src=\"' + p.picture.large + '\" alt=\"' + p.name.first + ' ' + p.name.last + '\" />\\n                </div>\\n                <div class=\"person-data\">\\n                  <ul>\\n                    <li>\\n                      <span class=\"label\">Location</span>\\n                      <br />' + p.location.street + '\\n                      <br />' + p.location.city + ', ' + p.location.state + ' ' + p.location.postcode + '\\n                      <br />' + p.location.country + '</li>\\n                    <li>\\n                      <span class=\"label\">Email:</span> ' + p.email + '</li>\\n                    <li>\\n                      <span class=\"label\">Cell:</span> ' + p.cell + '</li>\\n                    <li>\\n                      <span class=\"label\">Gender:</span> ' + p.gender + '</li>\\n                  </ul>\\n                </div>\\n                </header>\\n              </section>';\n    }).join();\n    document.getElementById(\"list\").innerHTML = personString;\n});\n\ndocument.getElementById(\"number\").innerHTML = str;\ndocument.getElementById(\"info\").innerHTML = (0, _getBrowserInfo2.default)();\n\n//# sourceURL=webpack:///./labs/src/intro/index.js?");

/***/ }),

/***/ "./labs/src/intro/persons.json":
/*!*************************************!*\
  !*** ./labs/src/intro/persons.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = [{\"gender\":\"female\",\"name\":{\"title\":\"mrs\",\"first\":\"milagros\",\"last\":\"serrano\"},\"location\":{\"street\":\"1452 calle de ángel garcía\",\"city\":\"mérida\",\"state\":\"islas baleares\",\"postcode\":90234,\"coordinates\":{\"latitude\":\"-19.5032\",\"longitude\":\"27.4399\"},\"timezone\":{\"offset\":\"+4:30\",\"description\":\"Kabul\"}},\"email\":\"milagros.serrano@example.com\",\"login\":{\"uuid\":\"ae6a2b8b-ec46-4931-beb8-5b8cc5d5442a\",\"username\":\"orangegoose763\",\"password\":\"rayray\",\"salt\":\"VryKnho5\",\"md5\":\"77d923140cd9f452622b596aed4d0166\",\"sha1\":\"6e4cad40c957ae158dc0b42206169481aa038e59\",\"sha256\":\"72ceee0406c256991e4995cdcbce063f687b63f2e4113ee031ffea19392df45b\"},\"dob\":{\"date\":\"1971-06-23T19:10:24Z\",\"age\":47},\"registered\":{\"date\":\"2014-10-05T07:10:04Z\",\"age\":3},\"phone\":\"938-323-166\",\"cell\":\"606-389-529\",\"id\":{\"name\":\"DNI\",\"value\":\"38521138-T\"},\"picture\":{\"large\":\"https://randomuser.me/api/portraits/women/75.jpg\",\"medium\":\"https://randomuser.me/api/portraits/med/women/75.jpg\",\"thumbnail\":\"https://randomuser.me/api/portraits/thumb/women/75.jpg\"},\"nat\":\"ES\"},{\"gender\":\"female\",\"name\":{\"title\":\"mrs\",\"first\":\"aaliyah\",\"last\":\"brown\"},\"location\":{\"street\":\"3510 ferry road\",\"city\":\"invercargill\",\"state\":\"hawke's bay\",\"postcode\":21518,\"coordinates\":{\"latitude\":\"34.6245\",\"longitude\":\"-156.1398\"},\"timezone\":{\"offset\":\"-3:30\",\"description\":\"Newfoundland\"}},\"email\":\"aaliyah.brown@example.com\",\"login\":{\"uuid\":\"95ee83f6-d842-424e-8dc0-0855454220fe\",\"username\":\"crazybear536\",\"password\":\"bettina\",\"salt\":\"id75S5o5\",\"md5\":\"c72ecfeabdcdde505d1f5a1af3440efd\",\"sha1\":\"3e7c5e252c1d08c8ed5ad994e62e283eca4efddb\",\"sha256\":\"827afcdeca63f588670798290beff040591297b5f8fab3cc0cd7b041b51d47e2\"},\"dob\":{\"date\":\"1994-06-01T00:01:56Z\",\"age\":24},\"registered\":{\"date\":\"2014-12-16T15:34:23Z\",\"age\":3},\"phone\":\"(419)-338-6662\",\"cell\":\"(499)-958-1248\",\"id\":{\"name\":\"\",\"value\":null},\"picture\":{\"large\":\"https://randomuser.me/api/portraits/women/72.jpg\",\"medium\":\"https://randomuser.me/api/portraits/med/women/72.jpg\",\"thumbnail\":\"https://randomuser.me/api/portraits/thumb/women/72.jpg\"},\"nat\":\"NZ\"},{\"gender\":\"female\",\"name\":{\"title\":\"ms\",\"first\":\"غزل\",\"last\":\"سهيلي راد\"},\"location\":{\"street\":\"8593 میدان شهدا\",\"city\":\"نیشابور\",\"state\":\"فارس\",\"postcode\":39876,\"coordinates\":{\"latitude\":\"40.4269\",\"longitude\":\"145.2720\"},\"timezone\":{\"offset\":\"-12:00\",\"description\":\"Eniwetok, Kwajalein\"}},\"email\":\"غزل.سهيليراد@example.com\",\"login\":{\"uuid\":\"3e2407fc-b72f-455d-aba4-7eee9d247eac\",\"username\":\"angryladybug952\",\"password\":\"alliance\",\"salt\":\"AB7mCYzI\",\"md5\":\"a570bc0b06ee80e8658a8146d84b63a3\",\"sha1\":\"c483c2246c2ffe743517ffa28f95094d48469f55\",\"sha256\":\"ec0a6222c275a6daeddb6c303829a2ecd354249cd38753d2ebe3105eb93d7f64\"},\"dob\":{\"date\":\"1972-09-21T08:15:25Z\",\"age\":45},\"registered\":{\"date\":\"2015-01-24T11:06:34Z\",\"age\":3},\"phone\":\"013-07025959\",\"cell\":\"0980-820-4986\",\"id\":{\"name\":\"\",\"value\":null},\"picture\":{\"large\":\"https://randomuser.me/api/portraits/women/38.jpg\",\"medium\":\"https://randomuser.me/api/portraits/med/women/38.jpg\",\"thumbnail\":\"https://randomuser.me/api/portraits/thumb/women/38.jpg\"},\"nat\":\"IR\"},{\"gender\":\"female\",\"name\":{\"title\":\"mrs\",\"first\":\"judith\",\"last\":\"gray\"},\"location\":{\"street\":\"8128 w campbell ave\",\"city\":\"ballarat\",\"state\":\"western australia\",\"postcode\":7455,\"coordinates\":{\"latitude\":\"8.9004\",\"longitude\":\"-39.6237\"},\"timezone\":{\"offset\":\"+5:30\",\"description\":\"Bombay, Calcutta, Madras, New Delhi\"}},\"email\":\"judith.gray@example.com\",\"login\":{\"uuid\":\"e0dbc756-7f37-4c68-907f-8c6251b038f9\",\"username\":\"silverbear581\",\"password\":\"batman1\",\"salt\":\"o1qqeROe\",\"md5\":\"ce2719eabe46f8bd9c8a0304c6fae45b\",\"sha1\":\"f9caa46ed4602237c8447a63fba1019d9a83913e\",\"sha256\":\"de7b3dc7ee007e92ea67da3ea735d8de64875d0cfa9a18f7026d536a1fc9160b\"},\"dob\":{\"date\":\"1964-08-09T06:03:06Z\",\"age\":53},\"registered\":{\"date\":\"2002-06-09T03:51:46Z\",\"age\":16},\"phone\":\"05-6536-0131\",\"cell\":\"0461-570-770\",\"id\":{\"name\":\"TFN\",\"value\":\"044432850\"},\"picture\":{\"large\":\"https://randomuser.me/api/portraits/women/33.jpg\",\"medium\":\"https://randomuser.me/api/portraits/med/women/33.jpg\",\"thumbnail\":\"https://randomuser.me/api/portraits/thumb/women/33.jpg\"},\"nat\":\"AU\"},{\"gender\":\"male\",\"name\":{\"title\":\"mr\",\"first\":\"sanjin\",\"last\":\"pulles\"},\"location\":{\"street\":\"8378 leidseweg\",\"city\":\"boekel\",\"state\":\"limburg\",\"postcode\":77965,\"coordinates\":{\"latitude\":\"78.7604\",\"longitude\":\"115.5961\"},\"timezone\":{\"offset\":\"+10:00\",\"description\":\"Eastern Australia, Guam, Vladivostok\"}},\"email\":\"sanjin.pulles@example.com\",\"login\":{\"uuid\":\"0d406fe9-0a75-49b3-a1eb-3d441ba11c08\",\"username\":\"lazyleopard356\",\"password\":\"internal\",\"salt\":\"EpuWjARF\",\"md5\":\"e9f2453f1783c7a8499cc787597052cb\",\"sha1\":\"adb5ac3278a149b69a0a9bd07099e4e39440a492\",\"sha256\":\"94e17584c60238150f194ac58f90d762c49c9b21ad25aec91e71d49bbe270a21\"},\"dob\":{\"date\":\"1986-04-19T01:22:27Z\",\"age\":32},\"registered\":{\"date\":\"2006-11-23T13:25:30Z\",\"age\":11},\"phone\":\"(318)-113-8856\",\"cell\":\"(621)-123-6550\",\"id\":{\"name\":\"BSN\",\"value\":\"46471867\"},\"picture\":{\"large\":\"https://randomuser.me/api/portraits/men/73.jpg\",\"medium\":\"https://randomuser.me/api/portraits/med/men/73.jpg\",\"thumbnail\":\"https://randomuser.me/api/portraits/thumb/men/73.jpg\"},\"nat\":\"NL\"}];\n\n//# sourceURL=webpack:///./labs/src/intro/persons.json?");

/***/ }),

/***/ "./labs/src/intro/site.css":
/*!*********************************!*\
  !*** ./labs/src/intro/site.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./site.css */ \"./node_modules/css-loader/index.js!./labs/src/intro/site.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./labs/src/intro/site.css?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./labs/src/intro/site.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./labs/src/intro/site.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \":root {\\n--dark: rgba(0, 0, 0, 1);\\n--bright1: rgba(156, 13, 56, 1);\\n--bright2: rgba(206, 83, 116, 1);\\n--light1: #EEE0FA;\\n--light2: rgba(221, 240, 255, 1);\\n}\\n\\nbody {\\n  font-family: Arial, Helvetica, sans-serif;\\n  color: var(--dark);\\n}\\n\\n.person-card {\\n  border: 3px solid var(--bright1);\\n  border-radius: 5px;\\n  background-color: var(--light1);\\n  padding: 5px;\\n  margin: 5px;\\n  display: grid;\\n  grid-template-columns: 130px 1fr;\\n  grid-template-rows: 3em 1fr;\\n  grid-template-areas:\\n    'heading heading'\\n    'image   person-data';\\n}\\n\\n.person-card header {\\n  grid-area: heading;\\n  background-color: var(--light2);\\n  text-align: center;\\n  vertical-align: middle;\\n}\\n.person-card .profile-image-div {\\n  grid-area: image;\\n}\\n.person-card .person-data {\\n  grid-area: person-data;\\n}\\n.person-card .profile-image-div img {\\n  border-radius: 5px;\\n  padding: auto auto;\\n  margin: auto auto;\\n  text-align: center;\\n  vertical-align: middle;\\n}\\n.person-card .label {\\n  font-weight: bold;\\n}\\n.person-card ul {\\n  padding-left: 10px;\\n}\\n.person-card li {\\n  list-style-type: none;\\n  border: 1px solid var(--bright1);\\n  padding: 2px;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./labs/src/intro/site.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif (item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function (modules, mediaQuery) {\n\t\tif (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor (var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif (typeof id === \"number\") alreadyImportedModules[id] = true;\n\t\t}\n\t\tfor (i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif (mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if (mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n\t// get current location\n\tvar location = typeof window !== \"undefined\" && window.location;\n\n\tif (!location) {\n\t\tthrow new Error(\"fixUrls requires window.location\");\n\t}\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t\treturn css;\n\t}\n\n\tvar baseUrl = location.protocol + \"//\" + location.host;\n\tvar currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n This regular expression is just a way to recursively match brackets within\n a string.\n \t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n    (  = Start a capturing group\n      (?:  = Start a non-capturing group\n          [^)(]  = Match anything that isn't a parentheses\n          |  = OR\n          \\(  = Match a start parentheses\n              (?:  = Start another non-capturing groups\n                  [^)(]+  = Match anything that isn't a parentheses\n                  |  = OR\n                  \\(  = Match a start parentheses\n                      [^)(]*  = Match anything that isn't a parentheses\n                  \\)  = Match a end parentheses\n              )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n  \\)  = Match a close parens\n \t /gi  = Get all matches, not the first.  Be case insensitive.\n  */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function (fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl.trim().replace(/^\"(.*)\"$/, function (o, $1) {\n\t\t\treturn $1;\n\t\t}).replace(/^'(.*)'$/, function (o, $1) {\n\t\t\treturn $1;\n\t\t});\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t\treturn fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t\t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ })

/******/ });