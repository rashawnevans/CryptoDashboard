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

/***/ "(app-pages-browser)/./src/app/lib/constants.ts":
/*!**********************************!*\
  !*** ./src/app/lib/constants.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ONE_DAY: function() { return /* binding */ ONE_DAY; },\n/* harmony export */   cryptos: function() { return /* binding */ cryptos; }\n/* harmony export */ });\nconst ONE_DAY = 1000 * 60 * 60 * 24;\nconst cryptos = [\n    {\n        name: \"bitcoin\",\n        ticker: \"BTC\"\n    },\n    {\n        name: \"ethereum\",\n        ticker: \"ETH\"\n    },\n    {\n        name: \"solana\",\n        ticker: \"SOL\"\n    },\n    {\n        name: \"xrp\",\n        ticker: \"XRP\"\n    },\n    {\n        name: \"cardano\",\n        ticker: \"ADA\"\n    },\n    {\n        name: \"polkadot\",\n        ticker: \"DOT\"\n    },\n    {\n        name: \"avalanche\",\n        ticker: \"AVAX\"\n    },\n    //   { name: \"dogecoin\", ticker: \"DOGE\" },\n    //   { name: \"bnb\", ticker: \"BNB\" },\n    //   { name: \"tron\", ticker: \"TRX\" },\n    {\n        name: \"polygon\",\n        ticker: \"MATIC\"\n    },\n    {\n        name: \"chainlink\",\n        ticker: \"LINK\"\n    },\n    {\n        name: \"shiba inu\",\n        ticker: \"SHIB\"\n    },\n    {\n        name: \"toncoin\",\n        ticker: \"TON\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGliL2NvbnN0YW50cy50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUVPLE1BQU1BLFVBQWtCLE9BQU8sS0FBSyxLQUFLLEdBQUc7QUFDNUMsTUFBTUMsVUFBb0I7SUFDL0I7UUFBRUMsTUFBTTtRQUFXQyxRQUFRO0lBQU07SUFDakM7UUFBRUQsTUFBTTtRQUFZQyxRQUFRO0lBQU07SUFDbEM7UUFBRUQsTUFBTTtRQUFVQyxRQUFRO0lBQU07SUFDaEM7UUFBRUQsTUFBTTtRQUFPQyxRQUFRO0lBQU07SUFDN0I7UUFBRUQsTUFBTTtRQUFXQyxRQUFRO0lBQU07SUFDakM7UUFBRUQsTUFBTTtRQUFZQyxRQUFRO0lBQU07SUFDbEM7UUFBRUQsTUFBTTtRQUFhQyxRQUFRO0lBQU87SUFDcEMsMENBQTBDO0lBQzFDLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckM7UUFBRUQsTUFBTTtRQUFXQyxRQUFRO0lBQVE7SUFDbkM7UUFBRUQsTUFBTTtRQUFhQyxRQUFRO0lBQU87SUFFcEM7UUFBRUQsTUFBTTtRQUFhQyxRQUFRO0lBQU87SUFDcEM7UUFBRUQsTUFBTTtRQUFXQyxRQUFRO0lBQU07Q0FDbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xpYi9jb25zdGFudHMudHM/NTA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcnlwdG8gfSBmcm9tIFwiLi9kZWZpbml0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgT05FX0RBWTogbnVtYmVyID0gMTAwMCAqIDYwICogNjAgKiAyNDtcbmV4cG9ydCBjb25zdCBjcnlwdG9zOiBDcnlwdG9bXSA9IFtcbiAgeyBuYW1lOiBcImJpdGNvaW5cIiwgdGlja2VyOiBcIkJUQ1wiIH0sXG4gIHsgbmFtZTogXCJldGhlcmV1bVwiLCB0aWNrZXI6IFwiRVRIXCIgfSxcbiAgeyBuYW1lOiBcInNvbGFuYVwiLCB0aWNrZXI6IFwiU09MXCIgfSxcbiAgeyBuYW1lOiBcInhycFwiLCB0aWNrZXI6IFwiWFJQXCIgfSxcbiAgeyBuYW1lOiBcImNhcmRhbm9cIiwgdGlja2VyOiBcIkFEQVwiIH0sXG4gIHsgbmFtZTogXCJwb2xrYWRvdFwiLCB0aWNrZXI6IFwiRE9UXCIgfSxcbiAgeyBuYW1lOiBcImF2YWxhbmNoZVwiLCB0aWNrZXI6IFwiQVZBWFwiIH0sXG4gIC8vICAgeyBuYW1lOiBcImRvZ2Vjb2luXCIsIHRpY2tlcjogXCJET0dFXCIgfSxcbiAgLy8gICB7IG5hbWU6IFwiYm5iXCIsIHRpY2tlcjogXCJCTkJcIiB9LFxuICAvLyAgIHsgbmFtZTogXCJ0cm9uXCIsIHRpY2tlcjogXCJUUlhcIiB9LFxuICB7IG5hbWU6IFwicG9seWdvblwiLCB0aWNrZXI6IFwiTUFUSUNcIiB9LFxuICB7IG5hbWU6IFwiY2hhaW5saW5rXCIsIHRpY2tlcjogXCJMSU5LXCIgfSxcblxuICB7IG5hbWU6IFwic2hpYmEgaW51XCIsIHRpY2tlcjogXCJTSElCXCIgfSxcbiAgeyBuYW1lOiBcInRvbmNvaW5cIiwgdGlja2VyOiBcIlRPTlwiIH0sXG5dO1xuIl0sIm5hbWVzIjpbIk9ORV9EQVkiLCJjcnlwdG9zIiwibmFtZSIsInRpY2tlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/lib/constants.ts\n"));

/***/ })

});