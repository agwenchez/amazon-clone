/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/Product.jsx":
/*!************************************!*\
  !*** ./src/Components/Product.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/agwenchez/Desktop/Clones/Amazon/src/Components/Product.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar MAX_RATING = 5;\nvar MIN_RATING = 1;\n\nvar Product = function Product(_ref) {\n  _s();\n\n  var id = _ref.id,\n      image = _ref.image,\n      title = _ref.title,\n      price = _ref.price,\n      description = _ref.description,\n      category = _ref.category;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),\n      rating = _useState[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"relative flex-col m-5 bg-white z-30 p-10\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"top-2 right-2 text-xs italic text-gray-400\",\n      children: category\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n      src: image,\n      height: 200,\n      width: 200,\n      objectFit: \"contain\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      className: \"my-3\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex\",\n      children: Array(rating).fill().map(function (_, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {\n          className: \"h-5 text-yellow-500\"\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"text-xs my-2 line-clamp-2\",\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"mb-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {\n        quantity: price,\n        currency: \"KES\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"mt-auto button\",\n      children: \"Add to Basket\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 12\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Product, \"2u1XxixizTzLT2Ysvd+Y5Q7LjaI=\");\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUHJvZHVjdC5qc3g/MDYyYiJdLCJuYW1lcyI6WyJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsImltYWdlIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJ1c2VTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhdGluZyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQW5COztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXNEO0FBQUE7O0FBQUEsTUFBcERDLEVBQW9ELFFBQXBEQSxFQUFvRDtBQUFBLE1BQWhEQyxLQUFnRCxRQUFoREEsS0FBZ0Q7QUFBQSxNQUF6Q0MsS0FBeUMsUUFBekNBLEtBQXlDO0FBQUEsTUFBbENDLEtBQWtDLFFBQWxDQSxLQUFrQztBQUFBLE1BQTNCQyxXQUEyQixRQUEzQkEsV0FBMkI7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7O0FBQUEsa0JBQ2pEQywrQ0FBUSxDQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWdCWixVQUFVLEdBQUdDLFVBQWIsR0FBMEIsQ0FBMUMsQ0FBWCxJQUEyREEsVUFBN0QsQ0FEeUM7QUFBQSxNQUMzRFksTUFEMkQ7O0FBR2xFLHNCQUNJO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQUEsNEJBQ0c7QUFBRyxlQUFTLEVBQUMsNENBQWI7QUFBQSxnQkFBMkRMO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESCxlQUdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISCxlQUlHLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFSixLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSCxlQU1HO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSxnQkFBc0JDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSCxlQVFHO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxnQkFDTVMsS0FBSyxDQUFDRCxNQUFELENBQUwsQ0FDQUUsSUFEQSxHQUVBQyxHQUZBLENBRUksVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsNEJBQ0QsOERBQUMsNERBQUQ7QUFBa0IsbUJBQVMsRUFBQztBQUE1QixXQUFlQSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREM7QUFBQSxPQUZKO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJILGVBZ0JHO0FBQUcsZUFBUyxFQUFDLDJCQUFiO0FBQUEsZ0JBQTBDWDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJILGVBa0JHO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw2QkFDSyw4REFBQyxpRUFBRDtBQUFVLGdCQUFRLEVBQUVELEtBQXBCO0FBQTJCLGdCQUFRLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkgsZUFxQkc7QUFBUSxlQUFTLEVBQUMsZ0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUJILENBNUJEOztHQUFNSixPOztLQUFBQSxPO0FBOEJOLCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvUHJvZHVjdC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xuaW1wb3J0IEN1cnJlbmN5IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlcidcblxuY29uc3QgTUFYX1JBVElORyA9IDVcbmNvbnN0IE1JTl9SQVRJTkcgPSAxXG5cbmNvbnN0IFByb2R1Y3QgPSAoe2lkLCBpbWFnZSwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnl9KSA9PiB7XG4gICAgY29uc3QgW3JhdGluZ10gPSB1c2VTdGF0ZSggTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICooTUFYX1JBVElORyAtIE1JTl9SQVRJTkcgKyAxKSkgKyBNSU5fUkFUSU5HKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4LWNvbCBtLTUgYmctd2hpdGUgei0zMCBwLTEwXCI+XG4gICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcC0yIHJpZ2h0LTIgdGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTQwMFwiPntjYXRlZ29yeX08L3A+XG5cbiAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9J2NvbnRhaW4nIC8+XG5cbiAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15LTNcIj57dGl0bGV9PC9oND5cblxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICB7QXJyYXkocmF0aW5nKVxuICAgICAgICAgICAgICAgIC5maWxsKClcbiAgICAgICAgICAgICAgICAubWFwKChfLGkpPT4oIFxuICAgICAgICAgICAgICAgICAgICA8U3Rhckljb24ga2V5PXtpfSBjbGFzc05hbWU9XCJoLTUgdGV4dC15ZWxsb3ctNTAwXCIvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBteS0yIGxpbmUtY2xhbXAtMlwiPntkZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZX0gY3VycmVuY3k9XCJLRVNcIi8+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LWF1dG8gYnV0dG9uXCI+QWRkIHRvIEJhc2tldDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Product.jsx\n");

/***/ })

});