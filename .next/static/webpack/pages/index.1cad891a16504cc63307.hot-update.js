/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/Products.jsx":
/*!*************************************!*\
  !*** ./src/Components/Products.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/Components/Product.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/agwenchez/Desktop/Clones/Amazon/src/Components/Products.jsx\",\n    _this = undefined;\n\n\n\n\nvar Products = function Products(_ref) {\n  var products = _ref.products;\n  // const [productss, setProductss] = useState([])\n  // useEffect(() => {\n  //    async function getProducts (){\n  //         const products = await fetch('https://fakestoreapi.com/products').then(\n  //         res => res.json()\n  //         ).catch(err => console.log(\"Error\", err))\n  //         setProductss(products)\n  //         console.log(\"Products\", products)\n  //    }\n  //    getProducts()\n  // }, [])\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52\",\n    children: products.map(function (_ref2) {\n      var id = _ref2.id,\n          image = _ref2.image,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        id: id,\n        image: image,\n        title: title,\n        price: price,\n        description: description,\n        category: category\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUHJvZHVjdHMuanN4P2Q3Y2IiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJwcm9kdWN0cyIsIm1hcCIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFnQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUM3QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUZBQWY7QUFBQSxjQUVLQSxRQUFRLENBQUNDLEdBQVQsQ0FBYTtBQUFBLFVBQUVDLEVBQUYsU0FBRUEsRUFBRjtBQUFBLFVBQU1DLEtBQU4sU0FBTUEsS0FBTjtBQUFBLFVBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFVBQW9CQyxLQUFwQixTQUFvQkEsS0FBcEI7QUFBQSxVQUEyQkMsV0FBM0IsU0FBMkJBLFdBQTNCO0FBQUEsVUFBd0NDLFFBQXhDLFNBQXdDQSxRQUF4QztBQUFBLDBCQUNWLDhEQUFDLDZDQUFEO0FBRUMsVUFBRSxFQUFFTCxFQUZMO0FBR0MsYUFBSyxFQUFFQyxLQUhSO0FBSUMsYUFBSyxFQUFFQyxLQUpSO0FBS0MsYUFBSyxFQUFFQyxLQUxSO0FBTUMsbUJBQVcsRUFBRUMsV0FOZDtBQU9DLGdCQUFRLEVBQUVDO0FBUFgsU0FDTUwsRUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFU7QUFBQSxLQUFiO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0JILENBOUJEOztLQUFNSCxRO0FBZ0NOLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvUHJvZHVjdHMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCdcblxuXG5jb25zdCBQcm9kdWN0cyA9ICh7cHJvZHVjdHN9KSA9PiB7XG4gICAgLy8gY29uc3QgW3Byb2R1Y3Rzcywgc2V0UHJvZHVjdHNzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cyAoKXtcbiAgICAvLyAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cycpLnRoZW4oXG4gICAgLy8gICAgICAgICByZXMgPT4gcmVzLmpzb24oKVxuICAgIC8vICAgICAgICAgKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvclwiLCBlcnIpKVxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICBzZXRQcm9kdWN0c3MocHJvZHVjdHMpXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3RzXCIsIHByb2R1Y3RzKVxuICAgIC8vICAgIH1cbiAgICAvLyAgICBnZXRQcm9kdWN0cygpXG4gICAgLy8gfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgbWQ6LW10LTUyXCI+XG4gICAgICAgICAgICB7LyogPGgyPlByb2R1Y3RzPC9oMj4gKi99XG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKCh7aWQsIGltYWdlLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeX0pID0+KFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Products.jsx\n");

/***/ })

});