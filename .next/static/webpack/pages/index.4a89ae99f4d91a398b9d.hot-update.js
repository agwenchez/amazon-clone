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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/Components/Product.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/agwenchez/Desktop/Clones/Amazon/src/Components/Products.jsx\",\n    _this = undefined;\n\n\n\n\nvar Products = function Products(_ref) {\n  var products = _ref.products;\n  // const [productss, setProductss] = useState([])\n  // useEffect(() => {\n  //    async function getProducts (){\n  //         const products = await fetch('https://fakestoreapi.com/products').then(\n  //         res => res.json()\n  //         ).catch(err => console.log(\"Error\", err))\n  //         setProductss(products)\n  //         console.log(\"Products\", products)\n  //    }\n  //    getProducts()\n  // }, [])\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto\",\n    children: [products.map(function (_ref2) {\n      var id = _ref2.id,\n          image = _ref2.image,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        id: id,\n        image: image,\n        title: title,\n        price: price,\n        description: description,\n        category: category\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: \"md:col-span-full ml-5 \",\n      src: \"https://links.papareact.com/dyz\",\n      alt: \"advert\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUHJvZHVjdHMuanN4P2Q3Y2IiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJwcm9kdWN0cyIsIm1hcCIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFnQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUM3QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUZBQWY7QUFBQSxlQUVLQSxRQUFRLENBQUNDLEdBQVQsQ0FBYTtBQUFBLFVBQUVDLEVBQUYsU0FBRUEsRUFBRjtBQUFBLFVBQU1DLEtBQU4sU0FBTUEsS0FBTjtBQUFBLFVBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFVBQW9CQyxLQUFwQixTQUFvQkEsS0FBcEI7QUFBQSxVQUEyQkMsV0FBM0IsU0FBMkJBLFdBQTNCO0FBQUEsVUFBd0NDLFFBQXhDLFNBQXdDQSxRQUF4QztBQUFBLDBCQUNWLDhEQUFDLDZDQUFEO0FBRUMsVUFBRSxFQUFFTCxFQUZMO0FBR0MsYUFBSyxFQUFFQyxLQUhSO0FBSUMsYUFBSyxFQUFFQyxLQUpSO0FBS0MsYUFBSyxFQUFFQyxLQUxSO0FBTUMsbUJBQVcsRUFBRUMsV0FOZDtBQU9DLGdCQUFRLEVBQUVDO0FBUFgsU0FDTUwsRUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFU7QUFBQSxLQUFiLENBRkwsZUFjSTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUF3QyxTQUFHLEVBQUMsaUNBQTVDO0FBQThFLFNBQUcsRUFBQztBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0FoQ0Q7O0tBQU1ILFE7QUFrQ04sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9Qcm9kdWN0cy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0J1xuXG5cbmNvbnN0IFByb2R1Y3RzID0gKHtwcm9kdWN0c30pID0+IHtcbiAgICAvLyBjb25zdCBbcHJvZHVjdHNzLCBzZXRQcm9kdWN0c3NdID0gdXNlU3RhdGUoW10pXG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgIGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzICgpe1xuICAgIC8vICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzJykudGhlbihcbiAgICAvLyAgICAgICAgIHJlcyA9PiByZXMuanNvbigpXG4gICAgLy8gICAgICAgICApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycikpXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIHNldFByb2R1Y3Rzcyhwcm9kdWN0cylcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdHNcIiwgcHJvZHVjdHMpXG4gICAgLy8gICAgfVxuICAgIC8vICAgIGdldFByb2R1Y3RzKClcbiAgICAvLyB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBtZDotbXQtNTIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgey8qIDxoMj5Qcm9kdWN0czwvaDI+ICovfVxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgoe2lkLCBpbWFnZSwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnl9KSA9PihcbiAgICAgICAgICAgICAgICA8UHJvZHVjdFxuICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi1mdWxsIG1sLTUgXCIgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2R5elwiIGFsdD1cImFkdmVydFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Products.jsx\n");

/***/ })

});