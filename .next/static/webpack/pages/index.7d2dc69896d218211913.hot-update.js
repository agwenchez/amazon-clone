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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_agwenchez_Desktop_Clones_Amazon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_agwenchez_Desktop_Clones_Amazon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_agwenchez_Desktop_Clones_Amazon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_agwenchez_Desktop_Clones_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ \"./src/Components/Product.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/agwenchez/Desktop/Clones/Amazon/src/Components/Products.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Products = function Products(_ref) {\n  _s();\n\n  var products = _ref.products;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      productss = _useState[0],\n      setProductss = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    function getProducts() {\n      return _getProducts.apply(this, arguments);\n    }\n\n    function _getProducts() {\n      _getProducts = (0,_Users_agwenchez_Desktop_Clones_Amazon_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_agwenchez_Desktop_Clones_Amazon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var products;\n        return _Users_agwenchez_Desktop_Clones_Amazon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('https://fakestoreapi.com/products').then(function (res) {\n                  return res.json();\n                })[\"catch\"](function (err) {\n                  return console.log(\"Error\", err);\n                });\n\n              case 2:\n                products = _context.sent;\n                set;\n                console.log(\"Products\", products);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _getProducts.apply(this, arguments);\n    }\n\n    getProducts();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, _this), products.map(function (_ref2) {\n      var id = _ref2.id,\n          image = _ref2.image,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__.default, {\n        id: id,\n        image: image,\n        title: title,\n        price: price,\n        description: description,\n        category: category\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Products, \"xfFsCkhD1O+zu7wQyWR45kEzsaI=\");\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUHJvZHVjdHMuanN4P2Q3Y2IiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJwcm9kdWN0cyIsInVzZVN0YXRlIiwicHJvZHVjdHNzIiwic2V0UHJvZHVjdHNzIiwidXNlRWZmZWN0IiwiZ2V0UHJvZHVjdHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNldCIsIm1hcCIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxrQkFDS0MsK0NBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUN0QkMsU0FEc0I7QUFBQSxNQUNYQyxZQURXOztBQUc3QkMsa0RBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDRUMsV0FERjtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5VUFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUM0QkMsS0FBSyxDQUFDLG1DQUFELENBQUwsQ0FBMkNDLElBQTNDLENBQ3ZCLFVBQUFDLEdBQUc7QUFBQSx5QkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxpQkFEb0IsV0FFZixVQUFBQyxHQUFHO0FBQUEseUJBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLEdBQXJCLENBQUo7QUFBQSxpQkFGWSxDQUQ1Qjs7QUFBQTtBQUNXVix3QkFEWDtBQUtLYSxtQkFBRztBQUNIRix1QkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlosUUFBeEI7O0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYTtBQUFBO0FBQUE7O0FBU2JLLGVBQVc7QUFDYixHQVZRLEVBVU4sRUFWTSxDQUFUO0FBV0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFS0wsUUFBUSxDQUFDYyxHQUFULENBQWE7QUFBQSxVQUFFQyxFQUFGLFNBQUVBLEVBQUY7QUFBQSxVQUFNQyxLQUFOLFNBQU1BLEtBQU47QUFBQSxVQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxVQUFvQkMsS0FBcEIsU0FBb0JBLEtBQXBCO0FBQUEsVUFBMkJDLFdBQTNCLFNBQTJCQSxXQUEzQjtBQUFBLFVBQXdDQyxRQUF4QyxTQUF3Q0EsUUFBeEM7QUFBQSwwQkFDViw4REFBQyw2Q0FBRDtBQUVDLFVBQUUsRUFBRUwsRUFGTDtBQUdDLGFBQUssRUFBRUMsS0FIUjtBQUlDLGFBQUssRUFBRUMsS0FKUjtBQUtDLGFBQUssRUFBRUMsS0FMUjtBQU1DLG1CQUFXLEVBQUVDLFdBTmQ7QUFPQyxnQkFBUSxFQUFFQztBQVBYLFNBQ01MLEVBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUEsS0FBYixDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0JILENBOUJEOztHQUFNaEIsUTs7S0FBQUEsUTtBQWdDTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL1Byb2R1Y3RzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnXG5cblxuY29uc3QgUHJvZHVjdHMgPSAoe3Byb2R1Y3RzfSkgPT4ge1xuICAgIGNvbnN0IFtwcm9kdWN0c3MsIHNldFByb2R1Y3Rzc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHMgKCl7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMnKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHJlcy5qc29uKClcbiAgICAgICAgICAgICkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyKSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3RzXCIsIHByb2R1Y3RzKVxuICAgICAgIH1cbiAgICAgICBnZXRQcm9kdWN0cygpXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxoMj5Qcm9kdWN0czwvaDI+XG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKCh7aWQsIGltYWdlLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeX0pID0+KFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Products.jsx\n");

/***/ })

});