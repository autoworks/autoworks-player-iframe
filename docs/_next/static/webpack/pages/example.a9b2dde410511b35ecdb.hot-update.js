webpackHotUpdate_N_E("pages/example",{

/***/ "./pages/example.js":
/*!**************************!*\
  !*** ./pages/example.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IFrameDemo; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fixtures_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fixtures/config */ \"./fixtures/config.js\");\n/* harmony import */ var _fixtures_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fixtures/items */ \"./fixtures/items.js\");\n\n\n\n\nvar _jsxFileName = \"/home/murthick/Work/autoworks-player-iframe/pages/example.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar options = _objectSpread({\n  items: _fixtures_items__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, _fixtures_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nfunction IFrameDemo() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var iframe = document.getElementById(\"demo\");\n\n    function onMsg(e) {\n      if (!e.data.type) return;\n\n      if (e.data.type === \"ready\") {\n        iframe.contentWindow.postMessage(options, \"*\");\n      }\n\n      iframe.height = e.data.height;\n    }\n\n    window.addEventListener(\"message\", onMsg);\n    return function () {\n      window.removeEventListener(\"message\", onMsg);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n      children: \"IFrame Embed Demo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"iframe\", {\n      id: \"demo\",\n      width: \"100%\",\n      height: 600,\n      src: \"/\",\n      title: \"demo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(IFrameDemo, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = IFrameDemo;\n\nvar _c;\n\n$RefreshReg$(_c, \"IFrameDemo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhhbXBsZS5qcz83NTY1Il0sIm5hbWVzIjpbIm9wdGlvbnMiLCJpdGVtcyIsImNvbmZpZyIsIklGcmFtZURlbW8iLCJ1c2VFZmZlY3QiLCJpZnJhbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25Nc2ciLCJlIiwiZGF0YSIsInR5cGUiLCJjb250ZW50V2luZG93IiwicG9zdE1lc3NhZ2UiLCJoZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTztBQUNYQyxPQUFLLEVBQUxBLHVEQUFLQTtBQURNLEdBRVJDLHdEQUZRLENBQWI7O0FBS2UsU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUNuQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZjs7QUFFQSxhQUFTQyxLQUFULENBQWVDLENBQWYsRUFBa0I7QUFDaEIsVUFBSSxDQUFDQSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsSUFBWixFQUFrQjs7QUFDbEIsVUFBSUYsQ0FBQyxDQUFDQyxJQUFGLENBQU9DLElBQVAsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDM0JOLGNBQU0sQ0FBQ08sYUFBUCxDQUFxQkMsV0FBckIsQ0FBaUNiLE9BQWpDLEVBQTBDLEdBQTFDO0FBQ0Q7O0FBRURLLFlBQU0sQ0FBQ1MsTUFBUCxHQUFnQkwsQ0FBQyxDQUFDQyxJQUFGLENBQU9JLE1BQXZCO0FBQ0Q7O0FBRURDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNSLEtBQW5DO0FBRUEsV0FBTyxZQUFNO0FBQ1hPLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NULEtBQXRDO0FBQ0QsS0FGRDtBQUdELEdBakJRLEVBaUJOLEVBakJNLENBQVQ7QUFtQkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBUSxRQUFFLEVBQUMsTUFBWDtBQUFrQixXQUFLLEVBQUMsTUFBeEI7QUFBK0IsWUFBTSxFQUFFLEdBQXZDO0FBQTRDLFNBQUcsRUFBQyxHQUFoRDtBQUFvRCxXQUFLLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFNRDs7R0ExQnVCTCxVOztLQUFBQSxVIiwiZmlsZSI6Ii4vcGFnZXMvZXhhbXBsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vZml4dHVyZXMvY29uZmlnXCI7XG5pbXBvcnQgaXRlbXMgZnJvbSBcIi4uL2ZpeHR1cmVzL2l0ZW1zXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGl0ZW1zLFxuICAuLi5jb25maWcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJRnJhbWVEZW1vKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKTtcblxuICAgIGZ1bmN0aW9uIG9uTXNnKGUpIHtcbiAgICAgIGlmICghZS5kYXRhLnR5cGUpIHJldHVybjtcbiAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gXCJyZWFkeVwiKSB7XG4gICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKG9wdGlvbnMsIFwiKlwiKTtcbiAgICAgIH1cblxuICAgICAgaWZyYW1lLmhlaWdodCA9IGUuZGF0YS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uTXNnKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25Nc2cpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+SUZyYW1lIEVtYmVkIERlbW88L2gxPlxuICAgICAgPGlmcmFtZSBpZD1cImRlbW9cIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9ezYwMH0gc3JjPVwiL1wiIHRpdGxlPVwiZGVtb1wiIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/example.js\n");

/***/ })

})