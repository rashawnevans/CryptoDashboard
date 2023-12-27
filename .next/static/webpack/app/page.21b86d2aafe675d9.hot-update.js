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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/page */ \"(app-pages-browser)/./src/app/api/page.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ListItem(props) {\n    _s();\n    const { name, ticker } = props;\n    const [assetMin, setAssestMin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [assetMax, setAssestMax] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [currentPrice, setCurrentPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [priceChange, setPriceChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [priceChangePercent, setPriceChangePercent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (name) {\n            (0,_api_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().then((data)=>{\n                const allValues = data.data.map((item)=>parseFloat(item.priceUsd));\n                setAssestMin(Math.min(...allValues));\n                setAssestMax(Math.max(...allValues));\n                const currentPrice = allValues.pop();\n                setCurrentPrice(currentPrice);\n                setPriceChange(currentPrice - allValues[0]);\n                setPriceChangePercent((1 - allValues[0] / currentPrice) * 100);\n            });\n        }\n    }, [\n        name\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        style: {\n            background: priceChange >= 0 ? \"Green\" : \"Red\",\n            padding: 20\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: ticker\n            }, void 0, false, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Min: \",\n                    assetMin\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Max: \",\n                    assetMax\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Curr: \",\n                    currentPrice\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Cha: \",\n                    priceChange\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Cha%: \",\n                    priceChangePercent,\n                    \"%\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Col: \",\n                    priceChange >= 0 ? \"Green\" : \"Red\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rashawnevans/Documents/GitHub/CryptoDashboard/src/app/ui/list-item.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(ListItem, \"qrTGG4iTNE+lo/TBbPN/YOTNOeg=\");\n_c = ListItem;\nvar _c;\n$RefreshReg$(_c, \"ListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvbGlzdC1pdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBRVg7QUFFekIsU0FBU0ksU0FBU0MsS0FBYTs7SUFDNUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtJQUN6QixNQUFNLENBQUNHLFVBQVVDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDMUMsTUFBTSxDQUFDUSxVQUFVQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzFDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNjLG9CQUFvQkMsc0JBQXNCLEdBQUdmLCtDQUFRQSxDQUFDO0lBRTdERCxnREFBU0EsQ0FBQztRQUNSLElBQUlLLE1BQU07WUFDUkgscURBQWFBLEdBQUdlLElBQUksQ0FBQyxDQUFDQztnQkFDcEIsTUFBTUMsWUFBWUQsS0FBS0EsSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsT0FDL0JDLFdBQVdELEtBQUtFLFFBQVE7Z0JBRTFCZixhQUFhZ0IsS0FBS0MsR0FBRyxJQUFJTjtnQkFDekJULGFBQWFjLEtBQUtFLEdBQUcsSUFBSVA7Z0JBQ3pCLE1BQU1SLGVBQWVRLFVBQVVRLEdBQUc7Z0JBQ2xDZixnQkFBZ0JEO2dCQUNoQkcsZUFBZUgsZUFBZVEsU0FBUyxDQUFDLEVBQUU7Z0JBQzFDSCxzQkFBc0IsQ0FBQyxJQUFJRyxTQUFTLENBQUMsRUFBRSxHQUFHUixZQUFXLElBQUs7WUFDNUQ7UUFDRjtJQUNGLEdBQUc7UUFBQ047S0FBSztJQUVULHFCQUNFLDhEQUFDdUI7UUFDQ0MsT0FBTztZQUFFQyxZQUFZakIsZUFBZSxJQUFJLFVBQVU7WUFBT2tCLFNBQVM7UUFBRzs7MEJBRXJFLDhEQUFDQzswQkFBRzNCOzs7Ozs7MEJBQ0osOERBQUMyQjswQkFBRzFCOzs7Ozs7MEJBQ0osOERBQUMwQjs7b0JBQUU7b0JBQU16Qjs7Ozs7OzswQkFDVCw4REFBQ3lCOztvQkFBRTtvQkFBTXZCOzs7Ozs7OzBCQUNULDhEQUFDdUI7O29CQUFFO29CQUFPckI7Ozs7Ozs7MEJBQ1YsOERBQUNxQjs7b0JBQUU7b0JBQU1uQjs7Ozs7OzswQkFDVCw4REFBQ21COztvQkFBRTtvQkFBT2pCO29CQUFtQjs7Ozs7OzswQkFDN0IsOERBQUNpQjs7b0JBQUU7b0JBQU1uQixlQUFlLElBQUksVUFBVTs7Ozs7Ozs7Ozs7OztBQUc1QztHQXRDd0JWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvbGlzdC1pdGVtLnRzeD9hYzY2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ3J5cHRvIH0gZnJvbSBcIi4uL2xpYi9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IGdldENyeXB0b0RhdGEgZnJvbSBcIi4uL2FwaS9wYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RJdGVtKHByb3BzOiBDcnlwdG8pIHtcbiAgY29uc3QgeyBuYW1lLCB0aWNrZXIgfSA9IHByb3BzO1xuICBjb25zdCBbYXNzZXRNaW4sIHNldEFzc2VzdE1pbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2Fzc2V0TWF4LCBzZXRBc3Nlc3RNYXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjdXJyZW50UHJpY2UsIHNldEN1cnJlbnRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3ByaWNlQ2hhbmdlLCBzZXRQcmljZUNoYW5nZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3ByaWNlQ2hhbmdlUGVyY2VudCwgc2V0UHJpY2VDaGFuZ2VQZXJjZW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGdldENyeXB0b0RhdGEoKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgYWxsVmFsdWVzID0gZGF0YS5kYXRhLm1hcCgoaXRlbTogYW55KSA9PlxuICAgICAgICAgIHBhcnNlRmxvYXQoaXRlbS5wcmljZVVzZClcbiAgICAgICAgKTtcbiAgICAgICAgc2V0QXNzZXN0TWluKE1hdGgubWluKC4uLmFsbFZhbHVlcykpO1xuICAgICAgICBzZXRBc3Nlc3RNYXgoTWF0aC5tYXgoLi4uYWxsVmFsdWVzKSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcmljZSA9IGFsbFZhbHVlcy5wb3AoKTtcbiAgICAgICAgc2V0Q3VycmVudFByaWNlKGN1cnJlbnRQcmljZSk7XG4gICAgICAgIHNldFByaWNlQ2hhbmdlKGN1cnJlbnRQcmljZSAtIGFsbFZhbHVlc1swXSk7XG4gICAgICAgIHNldFByaWNlQ2hhbmdlUGVyY2VudCgoMSAtIGFsbFZhbHVlc1swXSAvIGN1cnJlbnRQcmljZSkgKiAxMDApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbbmFtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IHByaWNlQ2hhbmdlID49IDAgPyBcIkdyZWVuXCIgOiBcIlJlZFwiLCBwYWRkaW5nOiAyMCB9fVxuICAgID5cbiAgICAgIDxwPntuYW1lfTwvcD5cbiAgICAgIDxwPnt0aWNrZXJ9PC9wPlxuICAgICAgPHA+TWluOiB7YXNzZXRNaW59PC9wPlxuICAgICAgPHA+TWF4OiB7YXNzZXRNYXh9PC9wPlxuICAgICAgPHA+Q3Vycjoge2N1cnJlbnRQcmljZX08L3A+XG4gICAgICA8cD5DaGE6IHtwcmljZUNoYW5nZX08L3A+XG4gICAgICA8cD5DaGElOiB7cHJpY2VDaGFuZ2VQZXJjZW50fSU8L3A+XG4gICAgICA8cD5Db2w6IHtwcmljZUNoYW5nZSA+PSAwID8gXCJHcmVlblwiIDogXCJSZWRcIn08L3A+XG4gICAgPC9zcGFuPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRDcnlwdG9EYXRhIiwiTGlzdEl0ZW0iLCJwcm9wcyIsIm5hbWUiLCJ0aWNrZXIiLCJhc3NldE1pbiIsInNldEFzc2VzdE1pbiIsImFzc2V0TWF4Iiwic2V0QXNzZXN0TWF4IiwiY3VycmVudFByaWNlIiwic2V0Q3VycmVudFByaWNlIiwicHJpY2VDaGFuZ2UiLCJzZXRQcmljZUNoYW5nZSIsInByaWNlQ2hhbmdlUGVyY2VudCIsInNldFByaWNlQ2hhbmdlUGVyY2VudCIsInRoZW4iLCJkYXRhIiwiYWxsVmFsdWVzIiwibWFwIiwiaXRlbSIsInBhcnNlRmxvYXQiLCJwcmljZVVzZCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJwb3AiLCJzcGFuIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/list-item.tsx\n"));

/***/ })

});