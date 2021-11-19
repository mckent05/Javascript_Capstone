/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/backg.jpg */ \"./src/img/backg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'PT Serif', serif;\\r\\n}\\r\\n\\r\\n.d-flex {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.p-relative {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.j-center {\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.j-space-around {\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.align-center {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.a-center {\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.flex-dir {\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.partial0 {\\r\\n  background-color: lightblue;\\r\\n  padding: 1.5% 0;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  z-index: 5;\\r\\n}\\r\\n\\r\\n#root {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center/cover no-repeat;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  width: 90%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.content > div {\\r\\n  background-color: transparent;\\r\\n  margin-top: 70px;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n.welcome-text {\\r\\n  color: lightblue;\\r\\n  font-size: 20px;\\r\\n  text-transform: capitalize;\\r\\n  animation: move 10s ease-in infinite;\\r\\n  width: max-content;\\r\\n}\\r\\n\\r\\n@keyframes move {\\r\\n  0% {\\r\\n    transform: translateX(70%);\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    transform: translateX(35%);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: translateX(0);\\r\\n  }\\r\\n}\\r\\n\\r\\n.movie-cont {\\r\\n  padding: 0;\\r\\n  width: 100%;\\r\\n  justify-content: space-evenly;\\r\\n  flex-wrap: wrap;\\r\\n  row-gap: 50px;\\r\\n  margin: 80px 0;\\r\\n}\\r\\n\\r\\n.movie-cont li {\\r\\n  width: 25%;\\r\\n  padding: 10px;\\r\\n  box-shadow: 0 2px 8px ghostwhite;\\r\\n}\\r\\n\\r\\n.movie-cont li:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.desc {\\r\\n  width: 80%;\\r\\n  align-items: flex-start;\\r\\n  margin: 10px 0;\\r\\n}\\r\\n\\r\\n.desc h2 {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  row-gap: 10px;\\r\\n  height: 1%;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  color: beige;\\r\\n}\\r\\n\\r\\n.likes p {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.btn-cont {\\r\\n  width: 80%;\\r\\n  row-gap: 10px;\\r\\n}\\r\\n\\r\\n.btn-cont button {\\r\\n  width: 60%;\\r\\n  text-transform: capitalize;\\r\\n  color: black;\\r\\n  border: 0;\\r\\n  outline: 0;\\r\\n  padding: 12px;\\r\\n  font-size: 20px;\\r\\n  box-shadow: 0 4px 6px grey;\\r\\n  background-color: lightblue;\\r\\n  justify-content: space-between;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.fa-comment-alt {\\r\\n  color: black;\\r\\n  width: 30%;\\r\\n  margin-top: 7%;\\r\\n}\\r\\n\\r\\n/* Popup window */\\r\\n.modal {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  background-color: rgb(0, 0, 0);\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  background-color: #e4e4d6;\\r\\n  margin: 5% auto;\\r\\n  padding: 20px;\\r\\n  border: 1px solid #888;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.b-radius {\\r\\n  border-radius: 17px;\\r\\n}\\r\\n\\r\\n.l-high {\\r\\n  line-height: 2;\\r\\n}\\r\\n\\r\\n.inner-pad {\\r\\n  padding: 2px 8px;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  color: #aaa;\\r\\n  float: right;\\r\\n  font-size: 28px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.close:hover,\\r\\n.close:focus {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.red-back {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n#movie-title {\\r\\n  font-size: 2rem;\\r\\n  color: rgb(35, 27, 49);\\r\\n  margin: 8% 0 2%;\\r\\n}\\r\\n\\r\\n#features {\\r\\n  margin-bottom: 2%;\\r\\n  font-weight: 900;\\r\\n}\\r\\n\\r\\n.feat {\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n.feat > span {\\r\\n  margin: 2% 0;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  margin: 3% 15%;\\r\\n  padding: 16px;\\r\\n  background-color: #d5d8cf;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  margin: 4px 0;\\r\\n}\\r\\n\\r\\n#description {\\r\\n  overflow: hidden;\\r\\n  display: -webkit-box;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-line-clamp: 4;\\r\\n  margin: 5%;\\r\\n  justify-self: flex-start;\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  height: 150px;\\r\\n  min-height: 25%;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript_capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript_capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/movies.js */ \"./src/modules/movies.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_movies_js__WEBPACK_IMPORTED_MODULE_1__.getMyMovies)(_modules_movies_js__WEBPACK_IMPORTED_MODULE_1__.movieID);\n  const counter = (0,_modules_movies_js__WEBPACK_IMPORTED_MODULE_1__.itemCounter)(_modules_movies_js__WEBPACK_IMPORTED_MODULE_1__.movieID);\n  _modules_movies_js__WEBPACK_IMPORTED_MODULE_1__.movieCounter.innerHTML = `(${counter.length})`;\n});\n\n\n//# sourceURL=webpack://javascript_capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/addlikes.js":
/*!*********************************!*\
  !*** ./src/modules/addlikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\n\nconst postNewLike = (itemName) => {\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(itemName);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postNewLike);\n\n//# sourceURL=webpack://javascript_capstone/./src/modules/addlikes.js?");

/***/ }),

/***/ "./src/modules/commentUpdate.js":
/*!**************************************!*\
  !*** ./src/modules/commentUpdate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fmn7FvfYPqUQ1nyJXuIv/comments';\n\nconst postComment = async (id, name, comment) => {\n  try {\n    let newComment;\n    if (name !== '' && comment !== '') {\n      newComment = {\n        item_id: id,\n        username: name,\n        comment,\n      };\n\n      await fetch(baseUrl, {\n        method: 'POST',\n        headers: {\n          'Content-type': 'application/json',\n        },\n        body: JSON.stringify(newComment),\n      });\n      document.getElementById('user').value = '';\n      document.getElementById('comment').value = '';\n    }\n    return newComment;\n  } catch (error) {\n    return error;\n  }\n};\n\nconst getComments = async (id) => {\n  const req = await fetch(`${baseUrl}?item_id=${id}`);\n  const res = await req.json();\n  const data = await res;\n  return data;\n};\n\n\n\n//# sourceURL=webpack://javascript_capstone/./src/modules/commentUpdate.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"fetchAllPopup\": () => (/* binding */ fetchAllPopup),\n/* harmony export */   \"fetchFilm\": () => (/* binding */ fetchFilm),\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter)\n/* harmony export */ });\n/* harmony import */ var _commentUpdate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentUpdate.js */ \"./src/modules/commentUpdate.js\");\n\n\nconst fetchFilm = (id) => fetch(`https://api.tvmaze.com/lookup/shows?tvrage= ${id}`);\n\nconst modal = document.getElementById('myModal');\n\nconst commentCounter = (list, holder) => {\n  holder.textContent = `(${list.length})`;\n  return holder.textContent;\n};\n\nconst commentPopup = (\n  premiered,\n  rating,\n  type,\n  runtime,\n  image,\n  title,\n  movieId,\n  summary,\n) => {\n  const modalContent = document.getElementById('modal-content');\n  const content = document.createElement('section');\n  content.classList = 'align-center';\n  content.innerHTML = `<div class\"img-container\"><img src=${image} alt=\"movie-pic\" class\"popup-img\"></div>\n  <h2 id=\"movie-title\">${title}</h2>\n  <section id=\"features\" class=\"d-flex j-center j-space-around\">\n    <div id=\"featA\" class=\"d-flex flex-dir feat\">\n      <span>Premiered Date: ${premiered}</span>\n      <span>Movie Rating: ${rating}</span>\n    </div>\n    <div id=\"featB\" class=\"d-flex flex-dir feat\">\n      <span>Movie Type: ${type}</span>\n      <span>Runtime: ${runtime} hrs</span>\n    </div>\n  </section>\n  <section id=\"description\" class=\"d-flex\">\n    <p>${summary}</p>\n  </section>\n  <h3>Comments <span id=\"comment-count\"></span></h3>\n  <ul class=\"comment-list\"></ul>\n  <form action=\"\" class=\"d-flex flex-dir form b-radius\">\n    <h3>Add a comment</h3>\n    <input class=\"l-high inner-pad\" type=\"text\" id=\"user\" placeholder=\"Your name\" required>\n    <textarea class=\"inner-pad\" rows=\"10\" cols=\"50\" maxlength=\"200\" type=\"text\" id=\"comment\" placeholder=\"Your insights\" required></textarea>\n    <button class=\"l-high\" type=\"submit\" id=\"submit\">Submit</button>\n  </form>`;\n\n  modalContent.appendChild(content);\n\n  document.getElementsByClassName('close')[0].addEventListener('click', () => {\n    modal.style.display = 'none';\n    modalContent.removeChild(content);\n  });\n\n  window.onclick = function (event) {\n    if (event.target === modal) {\n      modal.style.display = 'none';\n      if (modalContent.hasChildNodes) {\n        modalContent.removeChild(content);\n      }\n    }\n  };\n\n  const commentList = document.querySelector('.comment-list');\n  const displayComments = (list) => {\n    commentCounter(list, document.querySelector('#comment-count'));\n    commentList.textContent = '';\n    if (list.length > 0) {\n      list.forEach((comment) => {\n        const li = document.createElement('li');\n        li.innerHTML = `\n          <span id=\"comment-date\">${comment.creation_date}</span>\n          <span id=\"comment-user\">${comment.username}</span>:\n          <span id=\"comment-msg\">${comment.comment}</span>\n        `;\n        commentList.append(li);\n      });\n    }\n  };\n\n  const eachComment = (0,_commentUpdate_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(movieId);\n  eachComment.then((data) => {\n    displayComments(data);\n  });\n\n  const submitComment = document.getElementById('submit');\n  submitComment.addEventListener('click', (e) => {\n    e.preventDefault();\n    (0,_commentUpdate_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(\n      movieId,\n      document.getElementById('user').value,\n      document.getElementById('comment').value,\n    ).then(() => {\n      const refreshComment = (0,_commentUpdate_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(movieId);\n      refreshComment.then((data) => {\n        displayComments(data);\n      });\n    });\n  });\n};\n\nconst fetchPopup = async (id, movieName) => {\n  try {\n    const req = await (await fetchFilm(id)).json();\n    if (req.name === movieName) {\n      commentPopup(\n        req.premiered,\n        req.rating.average,\n        req.type,\n        req.averageRuntime,\n        req.image.medium,\n        req.name,\n        req.id,\n        req.summary,\n      );\n    }\n    return req;\n  } catch (error) {\n    return error;\n  }\n};\n\nconst fetchAllPopup = (list, movieName) => {\n  list.forEach((movie) => {\n    fetchPopup(movie, movieName);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://javascript_capstone/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst postLikes = (item) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/muSoj5Uz98agXzNuuOcQ/likes/',\n  {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: item,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n\nconst getLikes = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/muSoj5Uz98agXzNuuOcQ/likes/');\n\n\n\n\n//# sourceURL=webpack://javascript_capstone/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/movies.js":
/*!*******************************!*\
  !*** ./src/modules/movies.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movieID\": () => (/* binding */ movieID),\n/* harmony export */   \"getMyMovies\": () => (/* binding */ getMyMovies),\n/* harmony export */   \"itemCounter\": () => (/* binding */ itemCounter),\n/* harmony export */   \"movieCounter\": () => (/* binding */ movieCounter)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _addlikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addlikes.js */ \"./src/modules/addlikes.js\");\n\n\n\n\nconst movieID = [\n  35814, 22622, 28417, 38923, 27387, 28376, 24493, 2589, 41883, 27195,\n];\nconst movieCont = document.querySelector('.movie-cont');\nconst movieCounter = document.querySelector('.movie-counter');\n\nconst displayMovies = (movieName, image, likes) => {\n  movieCont.innerHTML += `<li class ='p-relative d-flex a-center j-center flex-dir'>\n    <img src=${image} alt='' class='image'>\n    <section class='desc p-relative d-flex j-space-around'>\n        <h2 class= 'item_id d-flex'>${movieName}</h2>\n        <article class='likes p-relative d-flex flex-dir'>\n            <i class='fas fa-heart'></i>\n            <p><span class='item-likes'>${likes}</span><span>likes</span>\n            </p>\n        </article>\n    </section>\n    <div class='btn-cont p-relative d-flex a-center j-center flex-dir'>\n        <button class='comment-btn p-relative d-flex a-center' data-id='comment'>comment <span class= 'fas fa-comment-alt'></span></button>\n    </div>\n   </li>`;\n\n  const allCommentBtns = document.querySelectorAll('.comment-btn');\n  const myLikes = document.querySelectorAll('.fa-heart');\n\n  allCommentBtns.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      const movieTitle = e.target.parentElement.previousElementSibling.children[0].innerHTML;\n      _display_js__WEBPACK_IMPORTED_MODULE_1__.modal.style.display = 'block';\n      (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.fetchAllPopup)(movieID, movieTitle);\n    });\n  });\n\n  myLikes.forEach((like) => {\n    like.addEventListener('click', (e) => {\n      e.currentTarget.classList.add('red-back');\n      const itemId = e.currentTarget.parentElement.parentElement.children[0].innerHTML;\n      let newLikes = e.currentTarget.nextElementSibling.children[0].innerHTML;\n      newLikes = parseInt(newLikes, 10);\n      (0,_addlikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(itemId);\n      newLikes += 1;\n      e.currentTarget.nextElementSibling.children[0].innerHTML = newLikes;\n    });\n  });\n};\n\nconst getMovies = async (id) => {\n  try {\n    const data = await (await (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.fetchFilm)(id)).json();\n    const dataID = data.name;\n    let likesData = await (await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)()).json();\n    likesData = likesData.filter((item) => item.item_id === dataID);\n    displayMovies(data.name, data.image.medium, likesData[0].likes);\n    return likesData;\n  } catch (err) {\n    return err;\n  }\n};\n\nconst getMyMovies = (list) => {\n  list.forEach((item) => {\n    getMovies(item);\n  });\n};\n\nconst itemCounter = (list) => list;\n\n\n\n\n//# sourceURL=webpack://javascript_capstone/./src/modules/movies.js?");

/***/ }),

/***/ "./src/img/backg.jpg":
/*!***************************!*\
  !*** ./src/img/backg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"817410494eb3e043fcb7.jpg\";\n\n//# sourceURL=webpack://javascript_capstone/./src/img/backg.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;