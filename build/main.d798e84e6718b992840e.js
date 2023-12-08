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

/***/ "./dist/combinations.js":
/*!******************************!*\
  !*** ./dist/combinations.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   combinations: () => (/* binding */ combinations)\n/* harmony export */ });\nvar combinations = [];\nfor (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n        combinations.push([i, j]);\n    }\n}\n\n\n//# sourceURL=webpack://seabattle/./dist/combinations.js?");

/***/ }),

/***/ "./dist/initBoard.js":
/*!***************************!*\
  !*** ./dist/initBoard.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShowBoard: () => (/* binding */ ShowBoard),\n/* harmony export */   shipList: () => (/* binding */ shipList),\n/* harmony export */   startGameBoard: () => (/* binding */ startGameBoard),\n/* harmony export */   sysParams: () => (/* binding */ sysParams)\n/* harmony export */ });\n/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ \"./dist/types.js\");\n\nvar sysParams = {\n    ROWS: 10,\n    COLS: 10,\n};\nfunction CreateEmptyBoard() {\n    var board = [];\n    for (var i = 0; i < sysParams.ROWS; i++) {\n        var row = [];\n        for (var j = 0; j < sysParams.COLS; j++) {\n            row.push({ state: _types_js__WEBPACK_IMPORTED_MODULE_0__.CellState.Empty });\n        }\n        board.push(row);\n    }\n    return board;\n}\nfunction ShowBoard(board) {\n    for (var i = 0; i < board.length; i++) {\n        var row = '';\n        for (var j = 0; j < board[i].length; j++) {\n            row += \"\".concat(board[i][j].state, \" \");\n        }\n        console.log(row);\n    }\n}\nvar shipList = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];\nvar startGameBoard = CreateEmptyBoard();\n\n\n//# sourceURL=webpack://seabattle/./dist/initBoard.js?");

/***/ }),

/***/ "./dist/placeShips.js":
/*!****************************!*\
  !*** ./dist/placeShips.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initBoard.js */ \"./dist/initBoard.js\");\n/* harmony import */ var _setupBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setupBoard.js */ \"./dist/setupBoard.js\");\n\n\nvar matrix = (0,_setupBoard_js__WEBPACK_IMPORTED_MODULE_1__.setupShip)(_setupBoard_js__WEBPACK_IMPORTED_MODULE_1__.localShips[0], _initBoard_js__WEBPACK_IMPORTED_MODULE_0__.startGameBoard);\nfor (var i = 1; i < _setupBoard_js__WEBPACK_IMPORTED_MODULE_1__.localShips.length; i++) {\n    matrix = (0,_setupBoard_js__WEBPACK_IMPORTED_MODULE_1__.setupShip)(_setupBoard_js__WEBPACK_IMPORTED_MODULE_1__.localShips[i], matrix);\n    console.log(i);\n}\n(0,_initBoard_js__WEBPACK_IMPORTED_MODULE_0__.ShowBoard)(matrix);\n\n//# sourceURL=webpack://seabattle/./dist/placeShips.js?");

/***/ }),

/***/ "./dist/setupBoard.js":
/*!****************************!*\
  !*** ./dist/setupBoard.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localShips: () => (/* binding */ localShips),\n/* harmony export */   setupShip: () => (/* binding */ setupShip)\n/* harmony export */ });\n/* harmony import */ var _initBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initBoard.js */ \"./dist/initBoard.js\");\n/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ \"./dist/types.js\");\n/* harmony import */ var _combinations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combinations.js */ \"./dist/combinations.js\");\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n\n\n\nvar localCombinations = __spreadArray([], _combinations_js__WEBPACK_IMPORTED_MODULE_2__.combinations, true);\nvar localShips = __spreadArray([], _initBoard_js__WEBPACK_IMPORTED_MODULE_0__.shipList, true);\nfunction getDirection() {\n    return Math.random() < 0.5;\n}\nfunction checkCollision(size, gridmatrix, x, y, direction) {\n    if (direction) {\n        if (y >= _initBoard_js__WEBPACK_IMPORTED_MODULE_0__.sysParams.COLS - size) {\n            if (gridmatrix[y - size][x].state > _types_js__WEBPACK_IMPORTED_MODULE_1__.CellState.Empty) {\n                return true;\n            }\n        }\n        else {\n            if (gridmatrix[y + size][x].state > _types_js__WEBPACK_IMPORTED_MODULE_1__.CellState.Empty) {\n                return true;\n            }\n        }\n    }\n    else {\n        if (x >= _initBoard_js__WEBPACK_IMPORTED_MODULE_0__.sysParams.ROWS - size) {\n            if (gridmatrix[y][x - size].state > _types_js__WEBPACK_IMPORTED_MODULE_1__.CellState.Empty) {\n                return true;\n            }\n        }\n        else {\n            if (gridmatrix[y][x + size].state > _types_js__WEBPACK_IMPORTED_MODULE_1__.CellState.Empty) {\n                return true;\n            }\n        }\n    }\n    return false;\n}\nfunction markSurroundingCells(x, y, gridmatrix) {\n    var _loop_1 = function (i) {\n        var _loop_2 = function (j) {\n            if (gridmatrix[i][j].state == _types_js__WEBPACK_IMPORTED_MODULE_1__.CellState.Empty) {\n                gridmatrix[i][j] = { state: _types_js__WEBPACK_IMPORTED_MODULE_1__.CellState.Barrier };\n                if (localCombinations.some(function (arr) { return arr[0] === j && arr[1] === i; })) {\n                    localCombinations = localCombinations.filter(function (item) { return !(item[0] === j && item[1] === i); });\n                }\n            }\n        };\n        for (var j = Math.max(0, x - 1); j < Math.min(_initBoard_js__WEBPACK_IMPORTED_MODULE_0__.sysParams.ROWS, x + 2); j++) {\n            _loop_2(j);\n        }\n    };\n    for (var i = Math.max(0, y - 1); i < Math.min(_initBoard_js__WEBPACK_IMPORTED_MODULE_0__.sysParams.COLS, y + 2); i++) {\n        _loop_1(i);\n    }\n}\nfunction setupShip(size, gridmatrix) {\n    var direction = getDirection();\n    var combination = localCombinations[Math.ceil(Math.random() * localCombinations.length - 1)];\n    var x = combination[0];\n    var y = combination[1];\n    while (checkCollision(size, gridmatrix, x, y, direction)) {\n        direction = getDirection();\n        var combination_1 = localCombinations[Math.ceil(Math.random() * localCombinations.length - 1)];\n        x = combination_1[0];\n        y = combination_1[1];\n    }\n    if (direction) {\n        if (y >= _initBoard_js__WEBPACK_IMPORTED_MODULE_0__.sysParams.COLS - size) {\n            var _loop_3 = function (i) {\n                gridmatrix[y - i][x] = { state: _types_js__WEBPACK_IMPORTED_MODULE_1__.CellState.Ship };\n                markSurroundingCells(x, y - i, gridmatrix);\n                localCombinations = localCombinations.filter(function (item) { return !(item[0] === x && item[1] === y - i); });\n            };\n            for (var i = 0; i < size; i++) {\n                _loop_3(i);\n            }\n        }\n        else {\n            var _loop_4 = function (i) {\n                gridmatrix[y + i][x] = { state: _types_js__WEBPACK_IMPORTED_MODULE_1__.CellState.Ship };\n                markSurroundingCells(x, y + i, gridmatrix);\n                localCombinations = localCombinations.filter(function (item) { return !(item[0] === x && item[1] === y + i); });\n            };\n            for (var i = 0; i < size; i++) {\n                _loop_4(i);\n            }\n        }\n    }\n    else {\n        if (x >= _initBoard_js__WEBPACK_IMPORTED_MODULE_0__.sysParams.ROWS - size) {\n            var _loop_5 = function (i) {\n                gridmatrix[y][x - i] = { state: _types_js__WEBPACK_IMPORTED_MODULE_1__.CellState.Ship };\n                markSurroundingCells(x - i, y, gridmatrix);\n                localCombinations = localCombinations.filter(function (item) { return !(item[0] === x - i && item[1] === y); });\n            };\n            for (var i = 0; i < size; i++) {\n                _loop_5(i);\n            }\n        }\n        else {\n            var _loop_6 = function (i) {\n                gridmatrix[y][x + i] = { state: _types_js__WEBPACK_IMPORTED_MODULE_1__.CellState.Ship };\n                markSurroundingCells(x + i, y, gridmatrix);\n                localCombinations = localCombinations.filter(function (item) { return !(item[0] === x + i && item[1] === y); });\n            };\n            for (var i = 0; i < size; i++) {\n                _loop_6(i);\n            }\n        }\n    }\n    _initBoard_js__WEBPACK_IMPORTED_MODULE_0__.shipList.splice(_initBoard_js__WEBPACK_IMPORTED_MODULE_0__.shipList.indexOf(size), 1);\n    return gridmatrix;\n}\n\n\n//# sourceURL=webpack://seabattle/./dist/setupBoard.js?");

/***/ }),

/***/ "./dist/types.js":
/*!***********************!*\
  !*** ./dist/types.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CellState: () => (/* binding */ CellState)\n/* harmony export */ });\nvar CellState;\n(function (CellState) {\n    CellState[CellState[\"Empty\"] = 0] = \"Empty\";\n    CellState[CellState[\"Ship\"] = 1] = \"Ship\";\n    CellState[CellState[\"Hit\"] = 2] = \"Hit\";\n    CellState[CellState[\"Miss\"] = 3] = \"Miss\";\n    CellState[CellState[\"Barrier\"] = 4] = \"Barrier\";\n})(CellState || (CellState = {}));\n\n\n//# sourceURL=webpack://seabattle/./dist/types.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/placeShips.js");
/******/ 	
/******/ })()
;