webpackHotUpdate_N_E(1,{

/***/ "./components/form/QuilEditor.tsx":
/*!****************************************!*\
  !*** ./components/form/QuilEditor.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var quill_emoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill-emoji */ \"./node_modules/quill-emoji/dist/quill-emoji.js\");\n/* harmony import */ var quill_emoji__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill_emoji__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/munhagju/DoraemonPlateV1/frontend/components/form/QuilEditor.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar SizeStyle = react_quill__WEBPACK_IMPORTED_MODULE_5__[\"Quill\"][\"import\"]('attributors/style/size');\nSizeStyle.whitelist = ['14pt', '16pt', '18px'];\nreact_quill__WEBPACK_IMPORTED_MODULE_5__[\"Quill\"].register('modules/emoji', quill_emoji__WEBPACK_IMPORTED_MODULE_4__);\nreact_quill__WEBPACK_IMPORTED_MODULE_5__[\"Quill\"].register(SizeStyle, true); // function insertHeart() {\n//   console.log('THIS-QUILL', this.quill);\n//   const cursorPosition = this.quill.getSelection().index;\n//   this.quill.insertText(cursorPosition, '♥');\n//   this.quill.setSelection(cursorPosition + 1);\n// }\n\nvar CustomToolbar = function CustomToolbar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    id: \"toolbarr\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"select\", {\n      className: \"ql-font\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n        value: \"arial\",\n        selected: true,\n        children: \"Arial\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n        value: \"comic-sans\",\n        children: \"Comic Sans\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n        value: \"courier-new\",\n        children: \"Courier New\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n        value: \"georgia\",\n        children: \"Georgia\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n        value: \"helvetica\",\n        children: \"Helvetica\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n        value: \"lucida\",\n        children: \"Lucida\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"select\", {\n      className: \"ql-size\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n        value: \"14pt\",\n        children: \"Size 1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n        value: \"16pt\",\n        children: \"Size 2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n        value: \"large\",\n        selected: true,\n        children: \"Size 3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n        value: \"huge\",\n        children: \"Size 4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"select\", {\n      className: \"ql-align\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"select\", {\n      className: \"ql-color\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"select\", {\n      className: \"ql-background\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      className: \"ql-image\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      className: \"ql-video\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      className: \"ql-clean\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      className: \"ql-emoji\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = CustomToolbar;\n\nvar Editor2 = function Editor2(_ref) {\n  _s();\n\n  var val = _ref.val,\n      setVal = _ref.setVal,\n      handleWriteSubmit = _ref.handleWriteSubmit;\n\n  // const [content, setContent] = React.useState('');\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      openEmoji = _React$useState2[0],\n      setOpenEmoji = _React$useState2[1];\n\n  var emojiList = ['😀', '😀']; // MDI emojicon instead of default icon\n\n  var emojiIcon = '<svg class=\"i\" viewBox=\"0 0 24 24\"><use href=\"#emoticon-happy\"></use></svg>';\n\n  function toggleEmojiBox() {\n    setOpenEmoji(true);\n  }\n\n  var handleChange = function handleChange(html) {\n    setVal(html);\n  };\n\n  var modules = {\n    'toolbar': {\n      container: '#toolbarr' // handlers: {\n      //   insertHeart: insertHeart,\n      // },\n\n    },\n    'emoji-toolbar': true,\n    'emoji-textarea': true,\n    'emoji-shortname': true\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"text-editor\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CustomToolbar, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_quill__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      value: val,\n      onChange: handleChange,\n      modules: modules\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Editor2, \"qlPpCBIBIJTXBNS/WvsGZH4ApqE=\");\n\n_c2 = Editor2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor2);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CustomToolbar\");\n$RefreshReg$(_c2, \"Editor2\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL1F1aWxFZGl0b3IudHN4P2UwMTAiXSwibmFtZXMiOlsiU2l6ZVN0eWxlIiwiUXVpbGwiLCJ3aGl0ZWxpc3QiLCJyZWdpc3RlciIsIkVtb2ppIiwiQ3VzdG9tVG9vbGJhciIsIkVkaXRvcjIiLCJ2YWwiLCJzZXRWYWwiLCJoYW5kbGVXcml0ZVN1Ym1pdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuRW1vamkiLCJzZXRPcGVuRW1vamkiLCJlbW9qaUxpc3QiLCJlbW9qaUljb24iLCJ0b2dnbGVFbW9qaUJveCIsImhhbmRsZUNoYW5nZSIsImh0bWwiLCJtb2R1bGVzIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxTQUFTLEdBQUdDLGlEQUFLLFVBQUwsQ0FBYSx3QkFBYixDQUFoQjtBQUNBRCxTQUFTLENBQUNFLFNBQVYsR0FBc0IsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixDQUF0QjtBQUVBRCxpREFBSyxDQUFDRSxRQUFOLENBQWUsZUFBZixFQUFnQ0Msd0NBQWhDO0FBQ0FILGlEQUFLLENBQUNFLFFBQU4sQ0FBZUgsU0FBZixFQUEwQixJQUExQixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxzQkFDcEI7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFBLDRCQUNFO0FBQVEsZUFBUyxFQUFDLFNBQWxCO0FBQUEsOEJBQ0U7QUFBUSxhQUFLLEVBQUMsT0FBZDtBQUFzQixnQkFBUSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBUSxhQUFLLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0U7QUFBUSxhQUFLLEVBQUMsYUFBZDtBQUFBO0FB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RjtBQU1ELENBcENEOztHQUFNYixPOztNQUFBQSxPO0FBc0NTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9ybS9RdWlsRWRpdG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnO1xuaW1wb3J0ICogYXMgRW1vamkgZnJvbSAncXVpbGwtZW1vamknO1xuaW1wb3J0IFJlYWN0UXVpbGwsIHsgUXVpbGwgfSBmcm9tICdyZWFjdC1xdWlsbCc7XG5cbnZhciBTaXplU3R5bGUgPSBRdWlsbC5pbXBvcnQoJ2F0dHJpYnV0b3JzL3N0eWxlL3NpemUnKTtcblNpemVTdHlsZS53aGl0ZWxpc3QgPSBbJzE0cHQnLCAnMTZwdCcsICcxOHB4J107XG5cblF1aWxsLnJlZ2lzdGVyKCdtb2R1bGVzL2Vtb2ppJywgRW1vamkpO1xuUXVpbGwucmVnaXN0ZXIoU2l6ZVN0eWxlLCB0cnVlKTtcblxuLy8gZnVuY3Rpb24gaW5zZXJ0SGVhcnQoKSB7XG4vLyAgIGNvbnNvbGUubG9nKCdUSElTLVFVSUxMJywgdGhpcy5xdWlsbCk7XG4vLyAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5xdWlsbC5nZXRTZWxlY3Rpb24oKS5pbmRleDtcbi8vICAgdGhpcy5xdWlsbC5pbnNlcnRUZXh0KGN1cnNvclBvc2l0aW9uLCAn4pmlJyk7XG4vLyAgIHRoaXMucXVpbGwuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uICsgMSk7XG4vLyB9XG5cbmNvbnN0IEN1c3RvbVRvb2xiYXIgPSAoKSA9PiAoXG4gIDxkaXYgaWQ9XCJ0b29sYmFyclwiPlxuICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtZm9udFwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImFyaWFsXCIgc2VsZWN0ZWQ+XG4gICAgICAgIEFyaWFsXG4gICAgICA8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJjb21pYy1zYW5zXCI+Q29taWMgU2Fuczwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvdXJpZXItbmV3XCI+Q291cmllciBOZXc8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJnZW9yZ2lhXCI+R2VvcmdpYTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImhlbHZldGljYVwiPkhlbHZldGljYTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImx1Y2lkYVwiPkx1Y2lkYTwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtc2l6ZVwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE0cHRcIj5TaXplIDE8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIxNnB0XCI+U2l6ZSAyPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibGFyZ2VcIiBzZWxlY3RlZD5cbiAgICAgICAgU2l6ZSAzXG4gICAgICA8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJodWdlXCI+U2l6ZSA0PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG5cbiAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLWFsaWduXCIgLz5cbiAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLWNvbG9yXCIgLz5cbiAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLWJhY2tncm91bmRcIiAvPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaW1hZ2VcIiAvPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtdmlkZW9cIiAvPlxuXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1jbGVhblwiIC8+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1lbW9qaVwiIC8+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRWRpdG9yMiA9ICh7IHZhbCwgc2V0VmFsLCBoYW5kbGVXcml0ZVN1Ym1pdCB9OiBhbnkpID0+IHtcbiAgLy8gY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICBjb25zdCBbb3BlbkVtb2ppLCBzZXRPcGVuRW1vamldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGVtb2ppTGlzdCA9IFsn8J+YgCcsICfwn5iAJ107XG5cbiAgLy8gTURJIGVtb2ppY29uIGluc3RlYWQgb2YgZGVmYXVsdCBpY29uXG4gIGNvbnN0IGVtb2ppSWNvbiA9XG4gICAgJzxzdmcgY2xhc3M9XCJpXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx1c2UgaHJlZj1cIiNlbW90aWNvbi1oYXBweVwiPjwvdXNlPjwvc3ZnPic7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRW1vamlCb3goKSB7XG4gICAgc2V0T3BlbkVtb2ppKHRydWUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGh0bWw6IGFueSkgPT4ge1xuICAgIHNldFZhbChodG1sKTtcbiAgfTtcblxuICBjb25zdCBtb2R1bGVzID0ge1xuICAgICd0b29sYmFyJzoge1xuICAgICAgY29udGFpbmVyOiAnI3Rvb2xiYXJyJyxcbiAgICAgIC8vIGhhbmRsZXJzOiB7XG4gICAgICAvLyAgIGluc2VydEhlYXJ0OiBpbnNlcnRIZWFydCxcbiAgICAgIC8vIH0sXG4gICAgfSxcbiAgICAnZW1vamktdG9vbGJhcic6IHRydWUsXG4gICAgJ2Vtb2ppLXRleHRhcmVhJzogdHJ1ZSxcbiAgICAnZW1vamktc2hvcnRuYW1lJzogdHJ1ZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1lZGl0b3JcIj5cbiAgICAgIDxDdXN0b21Ub29sYmFyIC8+XG4gICAgICA8UmVhY3RRdWlsbCB2YWx1ZT17dmFsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBtb2R1bGVzPXttb2R1bGVzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yMjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/form/QuilEditor.tsx\n");

/***/ })

})