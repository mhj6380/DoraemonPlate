exports.ids = [0];
exports.modules = {

/***/ "./components/form/QuilTest.tsx":
/*!**************************************!*\
  !*** ./components/form/QuilTest.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var quill_emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-emoji */ \"quill-emoji\");\n/* harmony import */ var quill_emoji__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_emoji__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill */ \"react-quill\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/munhagju/DoraemonPlateV1/frontend/components/form/QuilTest.tsx\";\n\n\n\n\nreact_quill__WEBPACK_IMPORTED_MODULE_4__[\"Quill\"].register('modules/emoji', quill_emoji__WEBPACK_IMPORTED_MODULE_3__);\n\nconst CustomHeart = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n  children: \"\\u2665\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 7,\n  columnNumber: 27\n}, undefined);\n\nfunction insertHeart() {\n  console.log('THIS-QUILL', this.quill);\n  const cursorPosition = this.quill.getSelection().index;\n  this.quill.insertText(cursorPosition, '♥');\n  this.quill.setSelection(cursorPosition + 1);\n}\n\nfunction insertEmoji(emoji) {\n  console.log('THIS-QUILL', this.quill);\n  const cursorPosition = this.quill.getSelection().index;\n  this.quill.insertText(cursorPosition, `${emoji}`);\n  this.quill.setSelection(cursorPosition + 1);\n}\n\nconst CustomToolbar = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  id: \"toolbarr\",\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n    className: \"ql-font\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n      value: \"arial\",\n      selected: true,\n      children: \"Arial\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n      value: \"comic-sans\",\n      children: \"Comic Sans\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n      value: \"courier-new\",\n      children: \"Courier New\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n      value: \"georgia\",\n      children: \"Georgia\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n      value: \"helvetica\",\n      children: \"Helvetica\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n      value: \"lucida\",\n      children: \"Lucida\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n    className: \"ql-size\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n      value: \"small\",\n      children: \"Size 1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n      value: \"\",\n      children: \"Size 2\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n      value: \"large\",\n      selected: true,\n      children: \"Size 3\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n      value: \"huge\",\n      children: \"Size 4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n    className: \"ql-align\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n    className: \"ql-color\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n    className: \"ql-background\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: \"ql-image\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: \"ql-video\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: \"ql-clean\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: \"ql-emoji\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: \"ql-insertHeart\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CustomHeart, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 24,\n  columnNumber: 3\n}, undefined);\n\nconst Editor2 = ({\n  val,\n  setVal,\n  handleWriteSubmit\n}) => {\n  // const [content, setContent] = React.useState('');\n  const [openEmoji, setOpenEmoji] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);\n  const emojiList = ['😀', '😀']; // MDI emojicon instead of default icon\n\n  const emojiIcon = '<svg class=\"i\" viewBox=\"0 0 24 24\"><use href=\"#emoticon-happy\"></use></svg>';\n\n  function toggleEmojiBox() {\n    setOpenEmoji(true);\n  }\n\n  const handleChange = html => {\n    setVal(html);\n  };\n\n  const modules = {\n    'toolbar': {\n      container: '#toolbarr',\n      handlers: {\n        insertHeart: insertHeart\n      }\n    },\n    'emoji-toolbar': true,\n    'emoji-textarea': true,\n    'emoji-shortname': true\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"text-editor\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CustomToolbar, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_quill__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      value: val,\n      onChange: handleChange,\n      modules: modules\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vUXVpbFRlc3QudHN4P2YyOGEiXSwibmFtZXMiOlsiUXVpbGwiLCJyZWdpc3RlciIsIkVtb2ppIiwiQ3VzdG9tSGVhcnQiLCJpbnNlcnRIZWFydCIsImNvbnNvbGUiLCJsb2ciLCJxdWlsbCIsImN1cnNvclBvc2l0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiaW5kZXgiLCJpbnNlcnRUZXh0Iiwic2V0U2VsZWN0aW9uIiwiaW5zZXJ0RW1vamkiLCJlbW9qaSIsIkN1c3RvbVRvb2xiYXIiLCJFZGl0b3IyIiwidmFsIiwic2V0VmFsIiwiaGFuZGxlV3JpdGVTdWJtaXQiLCJvcGVuRW1vamkiLCJzZXRPcGVuRW1vamkiLCJSZWFjdCIsInVzZVN0YXRlIiwiZW1vamlMaXN0IiwiZW1vamlJY29uIiwidG9nZ2xlRW1vamlCb3giLCJoYW5kbGVDaGFuZ2UiLCJodG1sIiwibW9kdWxlcyIsImNvbnRhaW5lciIsImhhbmRsZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsaURBQUssQ0FBQ0MsUUFBTixDQUFlLGVBQWYsRUFBZ0NDLHdDQUFoQzs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsbUJBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMUI7O0FBRUEsU0FBU0MsV0FBVCxHQUF1QjtBQUNyQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixLQUFLQyxLQUEvQjtBQUNBLFFBQU1DLGNBQWMsR0FBRyxLQUFLRCxLQUFMLENBQVdFLFlBQVgsR0FBMEJDLEtBQWpEO0FBQ0EsT0FBS0gsS0FBTCxDQUFXSSxVQUFYLENBQXNCSCxjQUF0QixFQUFzQyxHQUF0QztBQUNBLE9BQUtELEtBQUwsQ0FBV0ssWUFBWCxDQUF3QkosY0FBYyxHQUFHLENBQXpDO0FBQ0Q7O0FBRUQsU0FBU0ssV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDMUJULFNBQU8sQ0FB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TCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEOztBQUVELFFBQU1NLFlBQVksR0FBSUMsSUFBRCxJQUFlO0FBQ2xDVixVQUFNLENBQUNVLElBQUQsQ0FBTjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsT0FBTyxHQUFHO0FBQ2QsZUFBVztBQUNUQyxlQUFTLEVBQUUsV0FERjtBQUVUQyxjQUFRLEVBQUU7QUFDUjNCLG1CQUFXLEVBQUVBO0FBREw7QUFGRCxLQURHO0FBT2QscUJBQWlCLElBUEg7QUFRZCxzQkFBa0IsSUFSSjtBQVNkLHVCQUFtQjtBQVRMLEdBQWhCO0FBWUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLDRCQUNFLHFFQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLGtEQUFEO0FBQVksV0FBSyxFQUFFYSxHQUFuQjtBQUF3QixjQUFRLEVBQUVVLFlBQWxDO0FBQWdELGFBQU8sRUFBRUU7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBcENEOztBQXNDZWIsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm0vUXVpbFRlc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAncmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XG5pbXBvcnQgKiBhcyBFbW9qaSBmcm9tICdxdWlsbC1lbW9qaSc7XG5pbXBvcnQgUmVhY3RRdWlsbCwgeyBRdWlsbCB9IGZyb20gJ3JlYWN0LXF1aWxsJztcblF1aWxsLnJlZ2lzdGVyKCdtb2R1bGVzL2Vtb2ppJywgRW1vamkpO1xuXG5jb25zdCBDdXN0b21IZWFydCA9ICgpID0+IDxzcGFuPuKZpTwvc3Bhbj47XG5cbmZ1bmN0aW9uIGluc2VydEhlYXJ0KCkge1xuICBjb25zb2xlLmxvZygnVEhJUy1RVUlMTCcsIHRoaXMucXVpbGwpO1xuICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMucXVpbGwuZ2V0U2VsZWN0aW9uKCkuaW5kZXg7XG4gIHRoaXMucXVpbGwuaW5zZXJ0VGV4dChjdXJzb3JQb3NpdGlvbiwgJ+KZpScpO1xuICB0aGlzLnF1aWxsLnNldFNlbGVjdGlvbihjdXJzb3JQb3NpdGlvbiArIDEpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRFbW9qaShlbW9qaSkge1xuICBjb25zb2xlLmxvZygnVEhJUy1RVUlMTCcsIHRoaXMucXVpbGwpO1xuICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMucXVpbGwuZ2V0U2VsZWN0aW9uKCkuaW5kZXg7XG4gIHRoaXMucXVpbGwuaW5zZXJ0VGV4dChjdXJzb3JQb3NpdGlvbiwgYCR7ZW1vaml9YCk7XG4gIHRoaXMucXVpbGwuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uICsgMSk7XG59XG5cbmNvbnN0IEN1c3RvbVRvb2xiYXIgPSAoKSA9PiAoXG4gIDxkaXYgaWQ9XCJ0b29sYmFyclwiPlxuICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtZm9udFwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImFyaWFsXCIgc2VsZWN0ZWQ+XG4gICAgICAgIEFyaWFsXG4gICAgICA8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJjb21pYy1zYW5zXCI+Q29taWMgU2Fuczwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvdXJpZXItbmV3XCI+Q291cmllciBOZXc8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJnZW9yZ2lhXCI+R2VvcmdpYTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImhlbHZldGljYVwiPkhlbHZldGljYTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImx1Y2lkYVwiPkx1Y2lkYTwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtc2l6ZVwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInNtYWxsXCI+U2l6ZSAxPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2l6ZSAyPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibGFyZ2VcIiBzZWxlY3RlZD5cbiAgICAgICAgU2l6ZSAzXG4gICAgICA8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJodWdlXCI+U2l6ZSA0PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG5cbiAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLWFsaWduXCIgLz5cbiAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLWNvbG9yXCIgLz5cbiAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLWJhY2tncm91bmRcIiAvPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaW1hZ2VcIiAvPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtdmlkZW9cIiAvPlxuXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1jbGVhblwiIC8+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1lbW9qaVwiIC8+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1pbnNlcnRIZWFydFwiPlxuICAgICAgPEN1c3RvbUhlYXJ0IC8+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRWRpdG9yMiA9ICh7IHZhbCwgc2V0VmFsLCBoYW5kbGVXcml0ZVN1Ym1pdCB9OiBhbnkpID0+IHtcbiAgLy8gY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICBjb25zdCBbb3BlbkVtb2ppLCBzZXRPcGVuRW1vamldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGVtb2ppTGlzdCA9IFsn8J+YgCcsICfwn5iAJ107XG5cbiAgLy8gTURJIGVtb2ppY29uIGluc3RlYWQgb2YgZGVmYXVsdCBpY29uXG4gIGNvbnN0IGVtb2ppSWNvbiA9XG4gICAgJzxzdmcgY2xhc3M9XCJpXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx1c2UgaHJlZj1cIiNlbW90aWNvbi1oYXBweVwiPjwvdXNlPjwvc3ZnPic7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRW1vamlCb3goKSB7XG4gICAgc2V0T3BlbkVtb2ppKHRydWUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGh0bWw6IGFueSkgPT4ge1xuICAgIHNldFZhbChodG1sKTtcbiAgfTtcblxuICBjb25zdCBtb2R1bGVzID0ge1xuICAgICd0b29sYmFyJzoge1xuICAgICAgY29udGFpbmVyOiAnI3Rvb2xiYXJyJyxcbiAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgIGluc2VydEhlYXJ0OiBpbnNlcnRIZWFydCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnZW1vamktdG9vbGJhcic6IHRydWUsXG4gICAgJ2Vtb2ppLXRleHRhcmVhJzogdHJ1ZSxcbiAgICAnZW1vamktc2hvcnRuYW1lJzogdHJ1ZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1lZGl0b3JcIj5cbiAgICAgIDxDdXN0b21Ub29sYmFyIC8+XG4gICAgICA8UmVhY3RRdWlsbCB2YWx1ZT17dmFsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBtb2R1bGVzPXttb2R1bGVzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yMjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/form/QuilTest.tsx\n");

/***/ }),

/***/ "./node_modules/react-quill/dist/quill.snow.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.snow.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-quill/dist/quill.snow.css\n");

/***/ })

};;