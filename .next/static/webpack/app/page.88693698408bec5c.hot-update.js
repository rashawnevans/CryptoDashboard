"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/ui/list-item.tsx":
/*!**********************************!*\
  !*** ./src/app/ui/list-item.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/page */ \"(app-pages-browser)/./src/app/api/page.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ListItem(props) {\n    _s();\n    const { name, ticker } = props;\n    const [assetMin, setAssestMin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [assetMax, setAssestMax] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [currentPrice, setCurrentPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [priceChange, setPriceChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (name) {\n            (0,_api_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().then((data)=>{\n                const allValues = data.data.map((item)=>parseFloat(item.priceUsd));\n                setAssestMin(Math.min(...allValues));\n                setAssestMax(Math.max(...allValues));\n                setCurrentPrice(allValues.pop());\n            });\n        }\n    }, [\n        name\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPriceChange(assetMax - assetMin);\n    }, [\n        assetMax,\n        assetMin\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: ticker\n            }, void 0, false, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Min - \",\n                    assetMin\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Max - \",\n                    assetMax\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Curr - \",\n                    currentPrice\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Cha - \",\n                    priceChange\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(ListItem, \"QFy5j3dbejQzovx7HvUvQQT0vO4=\");\n_c = ListItem;\nvar _c;\n$RefreshReg$(_c, \"ListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvbGlzdC1pdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBRVg7QUFFekIsU0FBU0ksU0FBU0MsS0FBYTs7SUFDNUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtJQUN6QixNQUFNLENBQUNHLFVBQVVDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDMUMsTUFBTSxDQUFDUSxVQUFVQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzFDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJSyxNQUFNO1lBQ1JILHFEQUFhQSxHQUFHYSxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ3BCLE1BQU1DLFlBQVlELEtBQUtBLElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLE9BQy9CQyxXQUFXRCxLQUFLRSxRQUFRO2dCQUUxQmIsYUFBYWMsS0FBS0MsR0FBRyxJQUFJTjtnQkFDekJQLGFBQWFZLEtBQUtFLEdBQUcsSUFBSVA7Z0JBQ3pCTCxnQkFBZ0JLLFVBQVVRLEdBQUc7WUFDL0I7UUFDRjtJQUNGLEdBQUc7UUFBQ3BCO0tBQUs7SUFFVEwsZ0RBQVNBLENBQUM7UUFDUmMsZUFBZUwsV0FBV0Y7SUFDNUIsR0FBRztRQUFDRTtRQUFVRjtLQUFTO0lBRXZCLHFCQUNFLDhEQUFDbUI7OzBCQUNDLDhEQUFDQzswQkFBR3RCOzs7Ozs7MEJBQ0osOERBQUNzQjswQkFBR3JCOzs7Ozs7MEJBQ0osOERBQUNxQjs7b0JBQUU7b0JBQU9wQjs7Ozs7OzswQkFDViw4REFBQ29COztvQkFBRTtvQkFBT2xCOzs7Ozs7OzBCQUNWLDhEQUFDa0I7O29CQUFFO29CQUFRaEI7Ozs7Ozs7MEJBQ1gsOERBQUNnQjs7b0JBQUU7b0JBQU9kOzs7Ozs7Ozs7Ozs7O0FBR2hCO0dBbEN3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9saXN0LWl0ZW0udHN4P2FjNjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDcnlwdG8gfSBmcm9tIFwiLi4vbGliL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgZ2V0Q3J5cHRvRGF0YSBmcm9tIFwiLi4vYXBpL3BhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdEl0ZW0ocHJvcHM6IENyeXB0bykge1xuICBjb25zdCB7IG5hbWUsIHRpY2tlciB9ID0gcHJvcHM7XG4gIGNvbnN0IFthc3NldE1pbiwgc2V0QXNzZXN0TWluXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYXNzZXRNYXgsIHNldEFzc2VzdE1heF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2N1cnJlbnRQcmljZSwgc2V0Q3VycmVudFByaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcHJpY2VDaGFuZ2UsIHNldFByaWNlQ2hhbmdlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGdldENyeXB0b0RhdGEoKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgYWxsVmFsdWVzID0gZGF0YS5kYXRhLm1hcCgoaXRlbTogYW55KSA9PlxuICAgICAgICAgIHBhcnNlRmxvYXQoaXRlbS5wcmljZVVzZClcbiAgICAgICAgKTtcbiAgICAgICAgc2V0QXNzZXN0TWluKE1hdGgubWluKC4uLmFsbFZhbHVlcykpO1xuICAgICAgICBzZXRBc3Nlc3RNYXgoTWF0aC5tYXgoLi4uYWxsVmFsdWVzKSk7XG4gICAgICAgIHNldEN1cnJlbnRQcmljZShhbGxWYWx1ZXMucG9wKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbbmFtZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJpY2VDaGFuZ2UoYXNzZXRNYXggLSBhc3NldE1pbik7XG4gIH0sIFthc3NldE1heCwgYXNzZXRNaW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAgPHA+e25hbWV9PC9wPlxuICAgICAgPHA+e3RpY2tlcn08L3A+XG4gICAgICA8cD5NaW4gLSB7YXNzZXRNaW59PC9wPlxuICAgICAgPHA+TWF4IC0ge2Fzc2V0TWF4fTwvcD5cbiAgICAgIDxwPkN1cnIgLSB7Y3VycmVudFByaWNlfTwvcD5cbiAgICAgIDxwPkNoYSAtIHtwcmljZUNoYW5nZX08L3A+XG4gICAgPC9zcGFuPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRDcnlwdG9EYXRhIiwiTGlzdEl0ZW0iLCJwcm9wcyIsIm5hbWUiLCJ0aWNrZXIiLCJhc3NldE1pbiIsInNldEFzc2VzdE1pbiIsImFzc2V0TWF4Iiwic2V0QXNzZXN0TWF4IiwiY3VycmVudFByaWNlIiwic2V0Q3VycmVudFByaWNlIiwicHJpY2VDaGFuZ2UiLCJzZXRQcmljZUNoYW5nZSIsInRoZW4iLCJkYXRhIiwiYWxsVmFsdWVzIiwibWFwIiwiaXRlbSIsInBhcnNlRmxvYXQiLCJwcmljZVVzZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJwb3AiLCJzcGFuIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/list-item.tsx\n"));

/***/ })

});