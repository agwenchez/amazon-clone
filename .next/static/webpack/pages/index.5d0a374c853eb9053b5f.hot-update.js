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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/Components/Product.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/agwenchez/Desktop/Clones/Amazon/src/Components/Products.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Products = function Products(_ref) {\n  _s();\n\n  var products = _ref.products;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      productss = _useState[0],\n      setProductss = _useState[1]; // useEffect(() => {\n  //    async function getProducts (){\n  //         const products = await fetch('https://fakestoreapi.com/products').then(\n  //         res => res.json()\n  //         ).catch(err => console.log(\"Error\", err))\n  //         setProductss(products)\n  //         console.log(\"Products\", products)\n  //    }\n  //    getProducts()\n  // }, [])\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, _this), products.map(function (_ref2) {\n      var id = _ref2.id,\n          image = _ref2.image,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        id: id,\n        image: image,\n        title: title,\n        price: price,\n        description: description,\n        category: category\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Products, \"j6yY5Yc53KIKvqndDygKnOS7I/k=\");\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUHJvZHVjdHMuanN4P2Q3Y2IiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJwcm9kdWN0cyIsInVzZVN0YXRlIiwicHJvZHVjdHNzIiwic2V0UHJvZHVjdHNzIiwibWFwIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxrQkFDS0MsK0NBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUN0QkMsU0FEc0I7QUFBQSxNQUNYQyxZQURXLGlCQUc3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhO0FBQUEsVUFBRUMsRUFBRixTQUFFQSxFQUFGO0FBQUEsVUFBTUMsS0FBTixTQUFNQSxLQUFOO0FBQUEsVUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsVUFBb0JDLEtBQXBCLFNBQW9CQSxLQUFwQjtBQUFBLFVBQTJCQyxXQUEzQixTQUEyQkEsV0FBM0I7QUFBQSxVQUF3Q0MsUUFBeEMsU0FBd0NBLFFBQXhDO0FBQUEsMEJBQ1YsOERBQUMsNkNBQUQ7QUFFQyxVQUFFLEVBQUVMLEVBRkw7QUFHQyxhQUFLLEVBQUVDLEtBSFI7QUFJQyxhQUFLLEVBQUVDLEtBSlI7QUFLQyxhQUFLLEVBQUVDLEtBTFI7QUFNQyxtQkFBVyxFQUFFQyxXQU5kO0FBT0MsZ0JBQVEsRUFBRUM7QUFQWCxTQUNNTCxFQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVTtBQUFBLEtBQWIsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQTlCRDs7R0FBTU4sUTs7S0FBQUEsUTtBQWdDTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL1Byb2R1Y3RzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnXG5cblxuY29uc3QgUHJvZHVjdHMgPSAoe3Byb2R1Y3RzfSkgPT4ge1xuICAgIGNvbnN0IFtwcm9kdWN0c3MsIHNldFByb2R1Y3Rzc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHMgKCl7XG4gICAgLy8gICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMnKS50aGVuKFxuICAgIC8vICAgICAgICAgcmVzID0+IHJlcy5qc29uKClcbiAgICAvLyAgICAgICAgICkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyKSlcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgc2V0UHJvZHVjdHNzKHByb2R1Y3RzKVxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0c1wiLCBwcm9kdWN0cylcbiAgICAvLyAgICB9XG4gICAgLy8gICAgZ2V0UHJvZHVjdHMoKVxuICAgIC8vIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctcm93LWRlbnNlXCI+XG4gICAgICAgICAgICA8aDI+UHJvZHVjdHM8L2gyPlxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgoe2lkLCBpbWFnZSwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnl9KSA9PihcbiAgICAgICAgICAgICAgICA8UHJvZHVjdFxuICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Products.jsx\n");

/***/ })

});