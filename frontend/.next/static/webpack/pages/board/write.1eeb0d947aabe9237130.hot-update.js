webpackHotUpdate_N_E("pages/board/write",{

/***/ "./pages/board/write.tsx":
/*!*******************************!*\
  !*** ./pages/board/write.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var components_layout_TransitionLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/layout/TransitionLayout */ \"./components/layout/TransitionLayout.tsx\");\n/* harmony import */ var components_form_material_BasicTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/form/material/BasicTextField */ \"./components/form/material/BasicTextField.tsx\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var util_axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util/axios */ \"./util/axios.ts\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! config */ \"./config.ts\");\n/* harmony import */ var components_tools_BasicSubmitBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/tools/BasicSubmitBtn */ \"./components/tools/BasicSubmitBtn.tsx\");\n/* harmony import */ var lib_providers_authProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/providers/authProvider */ \"./lib/providers/authProvider.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var globalFunction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! globalFunction */ \"./globalFunction.ts\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/munhagju/DoraemonPlateV1/frontend/pages/board/write.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar QuillEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_15___default()(_c = function _c() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"styles\"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! components/form/QuilEditor */ \"./components/form/QuilEditor.tsx\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! components/form/QuilEditor */ \"./components/form/QuilEditor.tsx\")];\n    },\n    modules: ['components/form/QuilEditor']\n  }\n});\n_c2 = QuillEditor;\nvar BoardWriteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"write__BoardWriteWrapper\",\n  componentId: \"iq95sf-0\"\n})([\"width:100%;height:100%;display:flex;flex-flow:row wrap;.ql-picker-options{span[data-value='8pt']{font-size:8pt;}span[data-value='9pt']{font-size:9pt;}span[data-value='10pt']{font-size:10pt;}span[data-value='11pt']{font-size:11pt;}span[data-value='12pt']{font-size:12pt;}span[data-value='14pt']{font-size:14pt;}span[data-value='16pt']{font-size:16pt;}span[data-value='18pt']{font-size:18pt;}span[data-value='20pt']{font-size:20pt;}span[data-value='22pt']{font-size:22pt;}span[data-value='24pt']{font-size:24pt;}span[data-value='26pt']{font-size:26pt;}span[data-value='28pt']{font-size:28pt;}}.ql-editor{min-height:200px !important;}#tab-panel{width:200px;height:160px;overflow-y:scroll;background:#ededed;position:absolute;top:0;right:0;text-align:center;padding:5px;border:1px solid lightgrey;span{font-size:23px;cursor:pointer;}}\"]);\n_c3 = BoardWriteWrapper;\n\nvar BoardWritePage = function BoardWritePage(_ref) {\n  _s();\n\n  Object(_Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var me = Object(lib_providers_authProvider__WEBPACK_IMPORTED_MODULE_12__[\"useAuthState\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var Router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__[\"useRouter\"])();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      content = _useState2[0],\n      setContent = _useState2[1];\n\n  var contentTemp = '';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(components_layout_TransitionLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(BoardWriteWrapper, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_8__[\"Formik\"], {\n          initialValues: {\n            title: '',\n            content: ''\n          },\n          validate: /*#__PURE__*/function () {\n            var _ref2 = Object(_Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n              var errors;\n              return _Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                while (1) {\n                  switch (_context.prev = _context.next) {\n                    case 0:\n                      errors = {};\n\n                      if (values.title === '') {\n                        errors.title = '제목을 입력해주세요.';\n                      } // if (values.content === '') {\n                      //   errors.content = '내용을 입력해주세요.';\n                      // }\n\n\n                      return _context.abrupt(\"return\", errors);\n\n                    case 3:\n                    case \"end\":\n                      return _context.stop();\n                  }\n                }\n              }, _callee);\n            }));\n\n            return function (_x) {\n              return _ref2.apply(this, arguments);\n            };\n          }(),\n          onSubmit: /*#__PURE__*/function () {\n            var _ref4 = Object(_Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data, _ref3) {\n              var setSubmitting, images, i, original, generate, base64ImageUrl, uploadedImgURL, changeContent;\n              return _Users_munhagju_DoraemonPlateV1_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                while (1) {\n                  switch (_context2.prev = _context2.next) {\n                    case 0:\n                      setSubmitting = _ref3.setSubmitting;\n                      setSubmitting(true);\n                      setLoading(true); // base64 형태로 되어있는 content state의 <img /> 들을 일괄적으로 업로드 해주고, 업로드된 이미지 URL로 치환해준다\n\n                      contentTemp = content;\n                      images = contentTemp.match(/<img[^>]*src=[\\\"']?([^>\\\"']+)[\\\"']?[^>]*>/g);\n\n                      if (!images) {\n                        _context2.next = 20;\n                        break;\n                      }\n\n                      if (!(images.length > 0)) {\n                        _context2.next = 20;\n                        break;\n                      }\n\n                      i = 0;\n\n                    case 8:\n                      if (!(i < images.length)) {\n                        _context2.next = 20;\n                        break;\n                      }\n\n                      original = images[i];\n                      generate = original.replace('<img src=\"', '');\n                      base64ImageUrl = generate.replace('\">', ''); // console.log('GEN', base64ImageUrl);\n\n                      _context2.next = 14;\n                      return Object(globalFunction__WEBPACK_IMPORTED_MODULE_14__[\"base64ImageUpload\"])(base64ImageUrl);\n\n                    case 14:\n                      uploadedImgURL = _context2.sent;\n                      changeContent = contentTemp.replace(base64ImageUrl, uploadedImgURL.toString());\n                      contentTemp = changeContent;\n\n                    case 17:\n                      i++;\n                      _context2.next = 8;\n                      break;\n\n                    case 20:\n                      // 게시물 업로드\n                      util_axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].post(\"\".concat(config__WEBPACK_IMPORTED_MODULE_10__[\"BACKEND_URL\"], \"/board\"), {\n                        title: data.title,\n                        content: contentTemp,\n                        author: me.userInfo.user_id,\n                        thumbnail: '',\n                        tags: '',\n                        topic: 'default'\n                      }).then(function (res) {\n                        Router.push(\"/board/\".concat(res.data.id));\n                      });\n                      setSubmitting(false);\n\n                    case 22:\n                    case \"end\":\n                      return _context2.stop();\n                  }\n                }\n              }, _callee2);\n            }));\n\n            return function (_x2, _x3) {\n              return _ref4.apply(this, arguments);\n            };\n          }(),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_8__[\"Form\"], {\n            style: {\n              width: '100%'\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(components_form_material_BasicTextField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              name: \"title\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 167,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(QuillEditor, {\n              val: content,\n              setVal: setContent\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 168,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(components_tools_BasicSubmitBtn__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              text: \"\\uC791\\uC131\\uC644\\uB8CC\",\n              loading: loading\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 170,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 166,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(BoardWritePage, \"Rlcxko6WG9c35w3Veqqve/vFC6U=\", false, function () {\n  return [lib_providers_authProvider__WEBPACK_IMPORTED_MODULE_12__[\"useAuthState\"], next_router__WEBPACK_IMPORTED_MODULE_13__[\"useRouter\"]];\n});\n\n_c4 = BoardWritePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardWritePage);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"QuillEditor$dynamic\");\n$RefreshReg$(_c2, \"QuillEditor\");\n$RefreshReg$(_c3, \"BoardWriteWrapper\");\n$RefreshReg$(_c4, \"BoardWritePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvd3JpdGUudHN4PzU1YTYiXSwibmFtZXMiOlsiUXVpbGxFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiQm9hcmRXcml0ZVdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJCb2FyZFdyaXRlUGFnZSIsIm1lIiwidXNlQXV0aFN0YXRlIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIlJvdXRlciIsInVzZVJvdXRlciIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiY29udGVudFRlbXAiLCJ0aXRsZSIsInZhbHVlcyIsImVycm9ycyIsImRhdGEiLCJzZXRTdWJtaXR0aW5nIiwiaW1hZ2VzIiwibWF0Y2giLCJsZW5ndGgiLCJpIiwib3JpZ2luYWwiLCJnZW5lcmF0ZSIsInJlcGxhY2UiLCJiYXNlNjRJbWFnZVVybCIsImJhc2U2NEltYWdlVXBsb2FkIiwidXBsb2FkZWRJbWdVUkwiLCJjaGFuZ2VDb250ZW50IiwidG9TdHJpbmciLCJheGlvcyIsInBvc3QiLCJCQUNLRU5EX1VSTCIsImF1dGhvciIsInVzZXJJbmZvIiwidXNlcl9pZCIsInRodW1ibmFpbCIsInRhZ3MiLCJ0b3BpYyIsInRoZW4iLCJyZXMiLCJwdXNoIiwiaWQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLG9EQUFPLE1BQUM7QUFBQSxTQUFNLGtNQUFOO0FBQUEsQ0FBRCxFQUE2QztBQUN0RUMsS0FBRyxFQUFFLEtBRGlFO0FBQUE7QUFBQTtBQUFBLGtDQUEvQixvRUFBK0I7QUFBQTtBQUFBLGNBQS9CLDRCQUErQjtBQUFBO0FBQUEsQ0FBN0MsQ0FBM0I7TUFBTUYsVztBQUlOLElBQU1HLGlCQUFpQixHQUFHQyx5REFBTSxDQUFDQyxHQUFW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QyxHQUFELEVBQWM7QUFDbEJoQyw4QkFBTSxDQUFDaUMsSUFBUCxrQkFBc0JELEdBQUcsQ0FBQ3hCLElBQUosQ0FBUzBCLEVBQS9CO0FBQ0QsdUJBWEg7QUFhQXpCLG1DQUFhLENBQUMsS0FBRCxDQUFiOztBQTNDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJWO0FBQUEsaUNBZ0VFLHFFQUFDLDJDQUFEO0FBQU0saUJBQUssRUFBRTtBQUFFMEIsbUJBQUssRUFBRTtBQUFULGFBQWI7QUFBQSxvQ0FDRSxxRUFBQywrRUFBRDtBQUFnQixrQkFBSSxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyxXQUFEO0FBQWEsaUJBQUcsRUFBRWpDLE9BQWxCO0FBQTJCLG9CQUFNLEVBQUVDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFJRSxxRUFBQyx3RUFBRDtBQUFnQixrQkFBSSxFQUFDLDBCQUFyQjtBQUE0QixxQkFBTyxFQUFFTDtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0VELENBeEZEOztHQUFNSixjO1VBQ09FLHdFLEVBR0lLLHNEOzs7TUFKWFAsYztBQTBGU0EsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ib2FyZC93cml0ZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFRyYW5zaXRpb25MYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQvVHJhbnNpdGlvbkxheW91dCc7XG5pbXBvcnQgQmFzaWNUZXh0RmllbGQgZnJvbSAnY29tcG9uZW50cy9mb3JtL21hdGVyaWFsL0Jhc2ljVGV4dEZpZWxkJztcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgYXhpb3MgZnJvbSAndXRpbC9heGlvcyc7XG5pbXBvcnQgeyBCQUNLRU5EX1VSTCB9IGZyb20gJ2NvbmZpZyc7XG5pbXBvcnQgQmFzaWNTdWJtaXRCdG4gZnJvbSAnY29tcG9uZW50cy90b29scy9CYXNpY1N1Ym1pdEJ0bic7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdsaWIvcHJvdmlkZXJzL2F1dGhQcm92aWRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBiYXNlNjRJbWFnZVVwbG9hZCB9IGZyb20gJ2dsb2JhbEZ1bmN0aW9uJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cbmNvbnN0IFF1aWxsRWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2NvbXBvbmVudHMvZm9ybS9RdWlsRWRpdG9yJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBCb2FyZFdyaXRlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG5cbiAgLnFsLXBpY2tlci1vcHRpb25zIHtcbiAgICBzcGFuW2RhdGEtdmFsdWU9JzhwdCddIHtcbiAgICAgIGZvbnQtc2l6ZTogOHB0O1xuICAgIH1cbiAgICBzcGFuW2RhdGEtdmFsdWU9JzlwdCddIHtcbiAgICAgIGZvbnQtc2l6ZTogOXB0O1xuICAgIH1cbiAgICBzcGFuW2RhdGEtdmFsdWU9JzEwcHQnXSB7XG4gICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgfVxuICAgIHNwYW5bZGF0YS12YWx1ZT0nMTFwdCddIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICB9XG4gICAgc3BhbltkYXRhLXZhbHVlPScxMnB0J10ge1xuICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgIH1cbiAgICBzcGFuW2RhdGEtdmFsdWU9JzE0cHQnXSB7XG4gICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgfVxuICAgIHNwYW5bZGF0YS12YWx1ZT0nMTZwdCddIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICB9XG4gICAgc3BhbltkYXRhLXZhbHVlPScxOHB0J10ge1xuICAgICAgZm9udC1zaXplOiAxOHB0O1xuICAgIH1cbiAgICBzcGFuW2RhdGEtdmFsdWU9JzIwcHQnXSB7XG4gICAgICBmb250LXNpemU6IDIwcHQ7XG4gICAgfVxuICAgIHNwYW5bZGF0YS12YWx1ZT0nMjJwdCddIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJwdDtcbiAgICB9XG4gICAgc3BhbltkYXRhLXZhbHVlPScyNHB0J10ge1xuICAgICAgZm9udC1zaXplOiAyNHB0O1xuICAgIH1cbiAgICBzcGFuW2RhdGEtdmFsdWU9JzI2cHQnXSB7XG4gICAgICBmb250LXNpemU6IDI2cHQ7XG4gICAgfVxuICAgIHNwYW5bZGF0YS12YWx1ZT0nMjhwdCddIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhwdDtcbiAgICB9XG4gIH1cbiAgLnFsLWVkaXRvciB7XG4gICAgbWluLWhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gICN0YWItcGFuZWwge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge31cblxuY29uc3QgQm9hcmRXcml0ZVBhZ2UgPSAoe306IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBtZSA9IHVzZUF1dGhTdGF0ZSgpO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgUm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcblxuICBsZXQgY29udGVudFRlbXAgPSAnJztcblxuICByZXR1cm4gKFxuICAgIDxUcmFuc2l0aW9uTGF5b3V0PlxuICAgICAgPEJvYXJkV3JpdGVXcmFwcGVyPlxuICAgICAgICA8PlxuICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWxpZGF0ZT17YXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICAgICAgICAgICAgICBpZiAodmFsdWVzLnRpdGxlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGVycm9ycy50aXRsZSA9ICfsoJzrqqnsnYQg7J6F66Cl7ZW07KO87IS47JqULic7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBpZiAodmFsdWVzLmNvbnRlbnQgPT09ICcnKSB7XG4gICAgICAgICAgICAgIC8vICAgZXJyb3JzLmNvbnRlbnQgPSAn64K07Jqp7J2EIOyeheugpe2VtOyjvOyEuOyalC4nO1xuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGVycm9ycztcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGRhdGEsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgLy8gYmFzZTY0IO2Yle2DnOuhnCDrkJjslrTsnojripQgY29udGVudCBzdGF0ZeydmCA8aW1nIC8+IOuTpOydhCDsnbzqtITsoIHsnLzroZwg7JeF66Gc65OcIO2VtOyjvOqzoCwg7JeF66Gc65Oc65CcIOydtOuvuOyngCBVUkzroZwg7LmY7ZmY7ZW07KSA64ukXG4gICAgICAgICAgICAgIGNvbnRlbnRUZW1wID0gY29udGVudDtcbiAgICAgICAgICAgICAgY29uc3QgaW1hZ2VzID0gY29udGVudFRlbXAubWF0Y2goXG4gICAgICAgICAgICAgICAgLzxpbWdbXj5dKnNyYz1bXFxcIiddPyhbXj5cXFwiJ10rKVtcXFwiJ10/W14+XSo+L2dcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKGltYWdlcykge1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWwgPSBpbWFnZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBnZW5lcmF0ZSA9IG9yaWdpbmFsLnJlcGxhY2UoJzxpbWcgc3JjPVwiJywgJycpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZTY0SW1hZ2VVcmwgPSBnZW5lcmF0ZS5yZXBsYWNlKCdcIj4nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdHRU4nLCBiYXNlNjRJbWFnZVVybCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZGVkSW1nVVJMID0gYXdhaXQgYmFzZTY0SW1hZ2VVcGxvYWQoXG4gICAgICAgICAgICAgICAgICAgICAgYmFzZTY0SW1hZ2VVcmxcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VDb250ZW50ID0gY29udGVudFRlbXAucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICBiYXNlNjRJbWFnZVVybCxcbiAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRlZEltZ1VSTC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUZW1wID0gY2hhbmdlQ29udGVudDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyDqsozsi5zrrLwg7JeF66Gc65OcXG4gICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLnBvc3QoYCR7QkFDS0VORF9VUkx9L2JvYXJkYCwge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50VGVtcCxcbiAgICAgICAgICAgICAgICAgIGF1dGhvcjogbWUudXNlckluZm8udXNlcl9pZCxcbiAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDogJycsXG4gICAgICAgICAgICAgICAgICB0YWdzOiAnJyxcbiAgICAgICAgICAgICAgICAgIHRvcGljOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvYm9hcmQvJHtyZXMuZGF0YS5pZH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgPEJhc2ljVGV4dEZpZWxkIG5hbWU9XCJ0aXRsZVwiIC8+XG4gICAgICAgICAgICAgIDxRdWlsbEVkaXRvciB2YWw9e2NvbnRlbnR9IHNldFZhbD17c2V0Q29udGVudH0gLz5cbiAgICAgICAgICAgICAgey8qIOyImOygleuqqOuTnOydvOuVjOunjCAgKi99XG4gICAgICAgICAgICAgIDxCYXNpY1N1Ym1pdEJ0biB0ZXh0PVwi7J6R7ISx7JmE66OMXCIgbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L0Zvcm1paz5cbiAgICAgICAgPC8+XG4gICAgICA8L0JvYXJkV3JpdGVXcmFwcGVyPlxuICAgIDwvVHJhbnNpdGlvbkxheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkV3JpdGVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/board/write.tsx\n");

/***/ })

})