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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/Components/Product.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/agwenchez/Desktop/Clones/Amazon/src/Components/Products.jsx\",\n    _this = undefined;\n\n\n\n\nvar Products = function Products(_ref) {\n  var products = _ref.products;\n  // const [productss, setProductss] = useState([])\n  // useEffect(() => {\n  //    async function getProducts (){\n  //         const products = await fetch('https://fakestoreapi.com/products').then(\n  //         res => res.json()\n  //         ).catch(err => console.log(\"Error\", err))\n  //         setProductss(products)\n  //         console.log(\"Products\", products)\n  //    }\n  //    getProducts()\n  // }, [])\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto\",\n    children: [products.slice(0, 4).map(function (_ref2) {\n      var id = _ref2.id,\n          image = _ref2.image,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        id: id,\n        image: image,\n        title: title,\n        price: price,\n        description: description,\n        category: category\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: \"md:col-span-full ml-5 pr-10 md:h-screen w-full\",\n      src: \"https://links.papareact.com/dyz\",\n      alt: \"advert\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this), products.slice(4, products.length).map(function (_ref3) {\n      var id = _ref3.id,\n          image = _ref3.image,\n          title = _ref3.title,\n          price = _ref3.price,\n          description = _ref3.description,\n          category = _ref3.category;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        id: id,\n        image: image,\n        title: title,\n        price: price,\n        description: description,\n        category: category\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 21\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUHJvZHVjdHMuanN4P2Q3Y2IiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJwcm9kdWN0cyIsInNsaWNlIiwibWFwIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWdCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBQzdCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyx5RkFBZjtBQUFBLGVBRUtBLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBb0JDLEdBQXBCLENBQXdCO0FBQUEsVUFBRUMsRUFBRixTQUFFQSxFQUFGO0FBQUEsVUFBTUMsS0FBTixTQUFNQSxLQUFOO0FBQUEsVUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsVUFBb0JDLEtBQXBCLFNBQW9CQSxLQUFwQjtBQUFBLFVBQTJCQyxXQUEzQixTQUEyQkEsV0FBM0I7QUFBQSxVQUF3Q0MsUUFBeEMsU0FBd0NBLFFBQXhDO0FBQUEsMEJBQ3JCLDhEQUFDLDZDQUFEO0FBRUMsVUFBRSxFQUFFTCxFQUZMO0FBR0MsYUFBSyxFQUFFQyxLQUhSO0FBSUMsYUFBSyxFQUFFQyxLQUpSO0FBS0MsYUFBSyxFQUFFQyxLQUxSO0FBTUMsbUJBQVcsRUFBRUMsV0FOZDtBQU9DLGdCQUFRLEVBQUVDO0FBUFgsU0FDTUwsRUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHFCO0FBQUEsS0FBeEIsQ0FGTCxlQWNJO0FBQUssZUFBUyxFQUFDLGdEQUFmO0FBQWdFLFNBQUcsRUFBQyxpQ0FBcEU7QUFBc0csU0FBRyxFQUFDO0FBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSixFQWlCU0gsUUFBUSxDQUFDQyxLQUFULENBQWUsQ0FBZixFQUFpQkQsUUFBUSxDQUFDUyxNQUExQixFQUFrQ1AsR0FBbEMsQ0FBc0M7QUFBQSxVQUFFQyxFQUFGLFNBQUVBLEVBQUY7QUFBQSxVQUFNQyxLQUFOLFNBQU1BLEtBQU47QUFBQSxVQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxVQUFvQkMsS0FBcEIsU0FBb0JBLEtBQXBCO0FBQUEsVUFBMkJDLFdBQTNCLFNBQTJCQSxXQUEzQjtBQUFBLFVBQXdDQyxRQUF4QyxTQUF3Q0EsUUFBeEM7QUFBQSwwQkFDbkMsOERBQUMsNkNBQUQ7QUFFQSxVQUFFLEVBQUVMLEVBRko7QUFHQSxhQUFLLEVBQUVDLEtBSFA7QUFJQSxhQUFLLEVBQUVDLEtBSlA7QUFLQSxhQUFLLEVBQUVDLEtBTFA7QUFNQSxtQkFBVyxFQUFFQyxXQU5iO0FBT0EsZ0JBQVEsRUFBRUM7QUFQVixTQUNLTCxFQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbUM7QUFBQSxLQUF0QyxDQWpCVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlDSCxDQS9DRDs7S0FBTUosUTtBQWlETiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3NyYy9Db21wb25lbnRzL1Byb2R1Y3RzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnXG5cblxuY29uc3QgUHJvZHVjdHMgPSAoe3Byb2R1Y3RzfSkgPT4ge1xuICAgIC8vIGNvbnN0IFtwcm9kdWN0c3MsIHNldFByb2R1Y3Rzc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHMgKCl7XG4gICAgLy8gICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMnKS50aGVuKFxuICAgIC8vICAgICAgICAgcmVzID0+IHJlcy5qc29uKClcbiAgICAvLyAgICAgICAgICkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyKSlcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgc2V0UHJvZHVjdHNzKHByb2R1Y3RzKVxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0c1wiLCBwcm9kdWN0cylcbiAgICAvLyAgICB9XG4gICAgLy8gICAgZ2V0UHJvZHVjdHMoKVxuICAgIC8vIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctcm93LWRlbnNlIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IG1kOi1tdC01MiBteC1hdXRvXCI+XG4gICAgICAgICAgICB7LyogPGgyPlByb2R1Y3RzPC9oMj4gKi99XG4gICAgICAgICAgICB7cHJvZHVjdHMuc2xpY2UoMCw0KS5tYXAoKHtpZCwgaW1hZ2UsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5fSkgPT4oXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RcbiAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tZnVsbCBtbC01IHByLTEwIG1kOmgtc2NyZWVuIHctZnVsbFwiIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9keXpcIiBhbHQ9XCJhZHZlcnRcIiAvPlxuXG4gICAgICAgICAgICB7LyogPGRpdj4gKi99XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLnNsaWNlKDQscHJvZHVjdHMubGVuZ3RoKS5tYXAoKHtpZCwgaW1hZ2UsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5fSkgPT4oXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Products.jsx\n");

/***/ })

});