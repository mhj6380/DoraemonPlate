module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/providers/authProvider.tsx":
/*!****************************************!*\
  !*** ./lib/providers/authProvider.tsx ***!
  \****************************************/
/*! exports provided: AuthProvider, useAuthState, useAuthDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuthState\", function() { return useAuthState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuthDispatch\", function() { return useAuthDispatch; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/munhagju/DoraemonPlateV1/frontend/lib/providers/authProvider.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // import Cookies from \"js-cookie\";\n// import Axios from \"axios\";\n// 필요한 타입들을 미리 선언\n// 상태를 위한 타입\n\n// Context 만들기\nconst AuthStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nconst AuthDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null); // 리듀서\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"UPDATE_USER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        userInfo: action.userInfo // text가 자동완성되며, string 타입인걸 알 수 있습니다.\n\n      });\n\n    case \"UPDATE_LANGUAGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        language: action.language\n      });\n\n    case \"UPDATE_NOTICOUNT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        notiCount: action.notiCount\n      });\n\n    default:\n      throw new Error(\"Unhandled action\");\n  }\n} // AuthProvider 에서 useReduer를 사용하고\n// AuthStateContext.Provider 와 SampleDispatchContext.Provider 로 children 을 감싸서 반환합니다.\n\n\nconst AuthProvider = ({\n  children\n}) => {\n  // const accessToken = Cookies.get(\"accessToken\"); // => 'value'\n  var userInfo = {};\n  var language = \"ko\";\n  var notiCount = 0;\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(reducer, {\n    userInfo,\n    language,\n    notiCount\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthStateContext.Provider, {\n    value: state,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthDispatchContext.Provider, {\n      value: dispatch,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, undefined);\n}; // state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks\n\nfunction useAuthState() {\n  const state = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(AuthStateContext);\n  if (!state) throw new Error(\"Cannot find AuthProvider\"); // 유효하지 않을땐 에러를 발생\n\n  return state;\n}\nfunction useAuthDispatch() {\n  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(AuthDispatchContext);\n  if (!dispatch) throw new Error(\"Cannot find AuthProvider\"); // 유효하지 않을땐 에러를 발생\n\n  return dispatch;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcHJvdmlkZXJzL2F1dGhQcm92aWRlci50c3g/MmFlZiJdLCJuYW1lcyI6WyJBdXRoU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhEaXNwYXRjaENvbnRleHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidXNlckluZm8iLCJsYW5ndWFnZSIsIm5vdGlDb3VudCIsIkVycm9yIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ1c2VBdXRoU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlQXV0aERpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztDQUNBO0FBQ0E7QUFDQTtBQUVBOztBQWdCQTtBQUNBLE1BQU1BLGdCQUFnQixnQkFBR0MsMkRBQWEsQ0FBYSxJQUFiLENBQXRDO0FBQ0EsTUFBTUMsbUJBQW1CLGdCQUFHRCwyREFBYSxDQUFzQixJQUF0QixDQUF6QyxDLENBRUE7O0FBQ0EsU0FBU0UsT0FBVCxDQUFpQkMsS0FBakIsRUFBK0JDLE1BQS9CLEVBQXNEO0FBQ3BELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssYUFBTDtBQUNFLDZDQUNLRixLQURMO0FBRUVHLGdCQUFRLEVBQUVGLE1BQU0sQ0FBQ0UsUUFGbkIsQ0FFNkI7O0FBRjdCOztBQU1GLFNBQUssaUJBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFSSxnQkFBUSxFQUFFSCxNQUFNLENBQUNHO0FBRm5COztBQUtGLFNBQUssa0JBQUw7QUFDRSw2Q0FDS0osS0FETDtBQUVFSyxpQkFBUyxFQUFFSixNQUFNLENBQUNJO0FBRnBCOztBQUlGO0FBQ0UsWUFBTSxJQUFJQyxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQXBCSjtBQXNCRCxDLENBRUQ7QUFDQTs7O0FBQ08sTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlEO0FBQzNFO0FBRUEsTUFBSUwsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJQyxRQUFRLEdBQUcsSUFBZjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUVBLFFBQU07QUFBQSxPQUFDTCxLQUFEO0FBQUEsT0FBUVM7QUFBUixNQUFvQkMsd0RBQVUsQ0FBQ1gsT0FBRCxFQUFVO0FBQzVDSSxZQUQ0QztBQUU1Q0MsWUFGNEM7QUFHNUNDO0FBSDRDLEdBQVYsQ0FBcEM7QUFNQSxzQkFDRSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUEyQixTQUFLLEVBQUVMLEtBQWxDO0FBQUEsMkJBQ0UscUVBQUMsbUJBQUQsQ0FBcUIsUUFBckI7QUFBOEIsV0FBSyxFQUFFUyxRQUFyQztBQUFBLGdCQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQXBCTSxDLENBc0JQOztBQUNPLFNBQVNHLFlBQVQsR0FBd0I7QUFDN0IsUUFBTVgsS0FBSyxHQUFHWSx3REFBVSxDQUFDaEIsZ0JBQUQsQ0FBeEI7QUFDQSxNQUFJLENBQUNJLEtBQUwsRUFBWSxNQUFNLElBQUlNLEtBQUosQ0FBVSwwQkFBVixDQUFOLENBRmlCLENBRTRCOztBQUN6RCxTQUFPTixLQUFQO0FBQ0Q7QUFFTSxTQUFTYSxlQUFULEdBQTJCO0FBQ2hDLFFBQU1KLFFBQVEsR0FBR0csd0RBQVUsQ0FBQ2QsbUJBQUQsQ0FBM0I7QUFDQSxNQUFJLENBQUNXLFFBQUwsRUFBZSxNQUFNLElBQUlILEtBQUosQ0FBVSwwQkFBVixDQUFOLENBRmlCLENBRTRCOztBQUM1RCxTQUFPRyxRQUFQO0FBQ0QiLCJmaWxlIjoiLi9saWIvcHJvdmlkZXJzL2F1dGhQcm92aWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbi8vIGltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIO2VhOyalO2VnCDtg4DsnoXrk6TsnYQg66+466asIOyEoOyWuFxuIFxuLy8g7IOB7YOc66W8IOychO2VnCDtg4DsnoVcbnR5cGUgU3RhdGUgPSB7XG4gIHVzZXJJbmZvOiBhbnk7XG4gIGxhbmd1YWdlOiBzdHJpbmc7XG4gIG5vdGlDb3VudDogbnVtYmVyO1xufTtcblxuLy8g66qo65OgIOyVoeyFmOuTpOydhCDsnITtlZwg7YOA7J6FXG50eXBlIEFjdGlvbiA9IFxuICB8IHsgdHlwZTogXCJVUERBVEVfVVNFUlwiOyB1c2VySW5mbzogYW55IH1cbiAgfCB7IHR5cGU6IFwiVVBEQVRFX0xBTkdVQUdFXCI7IGxhbmd1YWdlOiBzdHJpbmcgfVxuICB8IHsgdHlwZTogXCJVUERBVEVfTk9USUNPVU5UXCI7IG5vdGlDb3VudDogbnVtYmVyIH07XG4gXG4vLyDrlJTsiqTtjKjsuZjrpbwg7JyE7ZWcIO2DgOyehSAoRGlzcGF0Y2gg66W8IOumrOyVoe2KuOyXkOyEnCDrtojrn6zsmKwg7IiYIOyeiOydjCksIOyVoeyFmOuTpOydmCDtg4DsnoXsnYQgRGlzcGF0Y2gg7J2YIEdlbmVyaWNz66GcIOyEpOyglVxudHlwZSBBdXRoRGlzcGF0Y2ggPSBEaXNwYXRjaDxBY3Rpb24+O1xuXG4vLyBDb250ZXh0IOunjOuTpOq4sFxuY29uc3QgQXV0aFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55IHwgbnVsbD4obnVsbCk7XG5jb25zdCBBdXRoRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoRGlzcGF0Y2ggfCBudWxsPihudWxsKTtcblxuLy8g66as65OA7IScXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pOiBTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiVVBEQVRFX1VTRVJcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VySW5mbzogYWN0aW9uLnVzZXJJbmZvLCAvLyB0ZXh06rCAIOyekOuPmeyZhOyEseuQmOupsCwgc3RyaW5nIO2DgOyeheyduOqxuCDslYwg7IiYIOyeiOyKteuLiOuLpC5cbiAgICAgIH07XG5cbiAgICBcbiAgICBjYXNlIFwiVVBEQVRFX0xBTkdVQUdFXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbGFuZ3VhZ2U6IGFjdGlvbi5sYW5ndWFnZSxcbiAgICAgIH07XG5cbiAgICBjYXNlIFwiVVBEQVRFX05PVElDT1VOVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5vdGlDb3VudDogYWN0aW9uLm5vdGlDb3VudCwgIFxuICAgICAgfTsgXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuaGFuZGxlZCBhY3Rpb25cIik7XG4gIH1cbn1cblxuLy8gQXV0aFByb3ZpZGVyIOyXkOyEnCB1c2VSZWR1ZXLrpbwg7IKs7Jqp7ZWY6rOgXG4vLyBBdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyIOyZgCBTYW1wbGVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIg66GcIGNoaWxkcmVuIOydhCDqsJDsi7jshJwg67CY7ZmY7ZWp64uI64ukLlxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIC8vIGNvbnN0IGFjY2Vzc1Rva2VuID0gQ29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTsgLy8gPT4gJ3ZhbHVlJ1xuXG4gIHZhciB1c2VySW5mbyA9IHt9O1xuICB2YXIgbGFuZ3VhZ2UgPSBcImtvXCI7XG4gIHZhciBub3RpQ291bnQgPSAwO1xuXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7XG4gICAgdXNlckluZm8sXG4gICAgbGFuZ3VhZ2UsIFxuICAgIG5vdGlDb3VudFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICA8QXV0aERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0F1dGhEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9BdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuLy8gc3RhdGUg7JmAIGRpc3BhdGNoIOulvCDsib3qsowg7IKs7Jqp7ZWY6riwIOychO2VnCDsu6TsiqTthYAgSG9va3NcbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoU3RhdGUoKSB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChBdXRoU3RhdGVDb250ZXh0KTtcbiAgaWYgKCFzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgQXV0aFByb3ZpZGVyXCIpOyAvLyDsnKDtmqjtlZjsp4Ag7JWK7J2E65WQIOyXkOufrOulvCDrsJzsg51cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aERpc3BhdGNoKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoQXV0aERpc3BhdGNoQ29udGV4dCk7XG4gIGlmICghZGlzcGF0Y2gpIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIEF1dGhQcm92aWRlclwiKTsgLy8g7Jyg7Zqo7ZWY7KeAIOyViuydhOuVkCDsl5Drn6zrpbwg67Cc7IOdXG4gIHJldHVybiBkaXNwYXRjaDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/providers/authProvider.tsx\n");

/***/ }),

/***/ "./lib/providers/chatProvider.tsx":
/*!****************************************!*\
  !*** ./lib/providers/chatProvider.tsx ***!
  \****************************************/
/*! exports provided: ChatProvider, useChatState, useChatDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatProvider\", function() { return ChatProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useChatState\", function() { return useChatState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useChatDispatch\", function() { return useChatDispatch; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _socketContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socketContext */ \"./lib/providers/socketContext.tsx\");\n\nvar _jsxFileName = \"/Users/munhagju/DoraemonPlateV1/frontend/lib/providers/chatProvider.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // 필요한 타입들을 미리 선언 \n// 상태를 위한 타입\n\n// Context 만들기\nconst ChatStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nconst ChatDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null); // 리듀서\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"SET_ROOM_LIST\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        roomList: action.payload // text가 자동완성되며, string 타입인걸 알 수 있습니다.\n\n      });\n\n    case \"SET_CHAT_LIST\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        inRoomKey: action.inRoomKey,\n        chatList: action.payload\n      });\n\n    case \"PUSH_CHAT_LIST\":\n      const newChats = [...state.chatList, action.payload];\n      return _objectSpread(_objectSpread({}, state), {}, {\n        chatList: newChats\n      });\n\n    default:\n      throw new Error(\"Unhandled action\");\n  }\n} // AuthProvider 에서 useReduer를 사용하고\n// AuthStateContext.Provider 와 SampleDispatchContext.Provider 로 children 을 감싸서 반환합니다.\n\n\nconst ChatProvider = ({\n  children\n}) => {\n  // const accessToken = Cookies.get(\"accessToken\"); // => 'value'\n  const socket = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_socketContext__WEBPACK_IMPORTED_MODULE_2__[\"SocketContext\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (!socket) return;\n    socket.on('msgToClient', payload => {\n      // 채팅 메세지 수신   \n      dispatch({\n        type: 'PUSH_CHAT_LIST',\n        payload\n      });\n    });\n  }, []);\n  var inRoomKey = null;\n  var roomList = [];\n  var chatList = [];\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(reducer, {\n    inRoomKey,\n    roomList,\n    chatList\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChatStateContext.Provider, {\n    value: state,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChatDispatchContext.Provider, {\n      value: dispatch,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }, undefined);\n}; // state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks\n\nfunction useChatState() {\n  const state = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(ChatStateContext);\n  if (!state) throw new Error(\"Cannot find AuthProvider\"); // 유효하지 않을땐 에러를 발생\n\n  return state;\n}\nfunction useChatDispatch() {\n  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(ChatDispatchContext);\n  if (!dispatch) throw new Error(\"Cannot find AuthProvider\"); // 유효하지 않을땐 에러를 발생\n\n  return dispatch;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcHJvdmlkZXJzL2NoYXRQcm92aWRlci50c3g/Y2Y3MiJdLCJuYW1lcyI6WyJDaGF0U3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYXREaXNwYXRjaENvbnRleHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicm9vbUxpc3QiLCJwYXlsb2FkIiwiaW5Sb29tS2V5IiwiY2hhdExpc3QiLCJuZXdDaGF0cyIsIkVycm9yIiwiQ2hhdFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzb2NrZXQiLCJ1c2VDb250ZXh0IiwiU29ja2V0Q29udGV4dCIsInVzZUVmZmVjdCIsIm9uIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwidXNlQ2hhdFN0YXRlIiwidXNlQ2hhdERpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUlBO0FBRUE7O0FBZ0JBO0FBQ0EsTUFBTUEsZ0JBQWdCLGdCQUFHQywyREFBYSxDQUFhLElBQWIsQ0FBdEM7QUFDQSxNQUFNQyxtQkFBbUIsZ0JBQUdELDJEQUFhLENBQXNCLElBQXRCLENBQXpDLEMsQ0FFQTs7QUFDQSxTQUFTRSxPQUFULENBQWlCQyxLQUFqQixFQUErQkMsTUFBL0IsRUFBc0Q7QUFDcEQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxlQUFMO0FBQ0UsNkNBQ0tGLEtBREw7QUFFRUcsZ0JBQVEsRUFBRUYsTUFBTSxDQUFDRyxPQUZuQixDQUU0Qjs7QUFGNUI7O0FBTUYsU0FBSyxlQUFMO0FBQ0UsNkNBQ0tKLEtBREw7QUFFRUssaUJBQVMsRUFBRUosTUFBTSxDQUFDSSxTQUZwQjtBQUdFQyxnQkFBUSxFQUFFTCxNQUFNLENBQUNHO0FBSG5COztBQU1BLFNBQUssZ0JBQUw7QUFDQSxZQUFNRyxRQUFRLEdBQUcsQ0FBQyxHQUFHUCxLQUFLLENBQUNNLFFBQVYsRUFBb0JMLE1BQU0sQ0FBQ0csT0FBM0IsQ0FBakI7QUFFQSw2Q0FDS0osS0FETDtBQUVFTSxnQkFBUSxFQUFFQztBQUZaOztBQUtGO0FBQ0UsWUFBTSxJQUFJQyxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQXhCSjtBQTBCRCxDLENBRUQ7QUFDQTs7O0FBQ08sTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlEO0FBQzNFO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyx3REFBVSxDQUFDQyw0REFBRCxDQUF6QjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUNILE1BQUwsRUFBYTtBQUViQSxVQUFNLENBQUNJLEVBQVAsQ0FBVSxhQUFWLEVBQTBCWCxPQUFELElBQTBCO0FBQ2pEO0FBQ0FZLGNBQVEsQ0FBQztBQUFDZCxZQUFJLEVBQUMsZ0JBQU47QUFBdUJFO0FBQXZCLE9BQUQsQ0FBUjtBQUNELEtBSEQ7QUFJRCxHQVBRLEVBT1AsRUFQTyxDQUFUO0FBU0EsTUFBSUMsU0FBUyxHQUFHLElBQWhCO0FBQ0EsTUFBSUYsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJRyxRQUFRLEdBQUcsRUFBZjtBQUVBLFFBQU07QUFBQSxPQUFDTixLQUFEO0FBQUEsT0FBUWdCO0FBQVIsTUFBb0JDLHdEQUFVLENBQUNsQixPQUFELEVBQVU7QUFDNUNNLGFBRDRDO0FBRTVDRixZQUY0QztBQUc1Q0c7QUFINEMsR0FBVixDQUFwQztBQU1BLHNCQUNFLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBRU4sS0FBbEM7QUFBQSwyQkFDRSxxRUFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixXQUFLLEVBQUVnQixRQUFyQztBQUFBLGdCQUNHTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQTlCTSxDLENBZ0NQOztBQUNPLFNBQVNRLFlBQVQsR0FBd0I7QUFDN0IsUUFBTWxCLEtBQUssR0FBR1ksd0RBQVUsQ0FBQ2hCLGdCQUFELENBQXhCO0FBQ0EsTUFBSSxDQUFDSSxLQUFMLEVBQVksTUFBTSxJQUFJUSxLQUFKLENBQVUsMEJBQVYsQ0FBTixDQUZpQixDQUU0Qjs7QUFDekQsU0FBT1IsS0FBUDtBQUNEO0FBRU0sU0FBU21CLGVBQVQsR0FBMkI7QUFDaEMsUUFBTUgsUUFBUSxHQUFHSix3REFBVSxDQUFDZCxtQkFBRCxDQUEzQjtBQUNBLE1BQUksQ0FBQ2tCLFFBQUwsRUFBZSxNQUFNLElBQUlSLEtBQUosQ0FBVSwwQkFBVixDQUFOLENBRmlCLENBRTRCOztBQUM1RCxTQUFPUSxRQUFQO0FBQ0QiLCJmaWxlIjoiLi9saWIvcHJvdmlkZXJzL2NoYXRQcm92aWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgRGlzcGF0Y2gsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVFJvb20sIFRDaGF0TWVzc2FnZSB9IGZyb20gXCIuLi8uLi90eXBlcy9jaGF0XCI7IFxuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4vc29ja2V0Q29udGV4dCc7ICBcblxuLy8g7ZWE7JqU7ZWcIO2DgOyeheuTpOydhCDrr7jrpqwg7ISg7Ja4IFxuXG4vLyDsg4Htg5zrpbwg7JyE7ZWcIO2DgOyehVxudHlwZSBTdGF0ZSA9IHsgXG4gIGluUm9vbUtleTogc3RyaW5nO1xuICByb29tTGlzdDogVFJvb21bXTtcbiAgY2hhdExpc3Q6IFRDaGF0TWVzc2FnZVtdOyBcbn07XG5cbi8vIOuqqOuToCDslaHshZjrk6TsnYQg7JyE7ZWcIO2DgOyehVxudHlwZSBBY3Rpb24gPVxuICB8IHsgdHlwZTogXCJTRVRfUk9PTV9MSVNUXCI7IHBheWxvYWQ6IFRSb29tW10gfVxuICB8IHsgdHlwZTogXCJTRVRfQ0hBVF9MSVNUXCI7IHBheWxvYWQ6IFRDaGF0TWVzc2FnZVtdOyBpblJvb21LZXk6IHN0cmluZyB9XG4gIHwgeyB0eXBlOiBcIlBVU0hfQ0hBVF9MSVNUXCI7IHBheWxvYWQ6IFRDaGF0TWVzc2FnZTt9OyAgXG4gXG4vLyDrlJTsiqTtjKjsuZjrpbwg7JyE7ZWcIO2DgOyehSAoRGlzcGF0Y2gg66W8IOumrOyVoe2KuOyXkOyEnCDrtojrn6zsmKwg7IiYIOyeiOydjCksIOyVoeyFmOuTpOydmCDtg4DsnoXsnYQgRGlzcGF0Y2gg7J2YIEdlbmVyaWNz66GcIOyEpOyglVxudHlwZSBBdXRoRGlzcGF0Y2ggPSBEaXNwYXRjaDxBY3Rpb24+O1xuXG4vLyBDb250ZXh0IOunjOuTpOq4sFxuY29uc3QgQ2hhdFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55IHwgbnVsbD4obnVsbCk7XG5jb25zdCBDaGF0RGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoRGlzcGF0Y2ggfCBudWxsPihudWxsKTtcblxuLy8g66as65OA7IScXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pOiBTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUX1JPT01fTElTVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJvb21MaXN0OiBhY3Rpb24ucGF5bG9hZCwgLy8gdGV4dOqwgCDsnpDrj5nsmYTshLHrkJjrqbAsIHN0cmluZyDtg4DsnoXsnbjqsbgg7JWMIOyImCDsnojsirXri4jri6QuXG4gICAgICB9O1xuXG4gICAgXG4gICAgY2FzZSBcIlNFVF9DSEFUX0xJU1RcIjogIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluUm9vbUtleTogYWN0aW9uLmluUm9vbUtleSxcbiAgICAgICAgY2hhdExpc3Q6IGFjdGlvbi5wYXlsb2FkLCAgXG4gICAgICB9O1xuXG4gICAgICBjYXNlIFwiUFVTSF9DSEFUX0xJU1RcIjogIFxuICAgICAgY29uc3QgbmV3Q2hhdHMgPSBbLi4uc3RhdGUuY2hhdExpc3QsIGFjdGlvbi5wYXlsb2FkXTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNoYXRMaXN0OiBuZXdDaGF0cywgIFxuICAgICAgfTtcbiAgICBcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5oYW5kbGVkIGFjdGlvblwiKTtcbiAgfVxufVxuXG4vLyBBdXRoUHJvdmlkZXIg7JeQ7IScIHVzZVJlZHVlcuulvCDsgqzsmqntlZjqs6Bcbi8vIEF1dGhTdGF0ZUNvbnRleHQuUHJvdmlkZXIg7JmAIFNhbXBsZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlciDroZwgY2hpbGRyZW4g7J2EIOqwkOyLuOyEnCDrsJjtmZjtlanri4jri6QuXG5leHBvcnQgY29uc3QgQ2hhdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHsgXG4gIC8vIGNvbnN0IGFjY2Vzc1Rva2VuID0gQ29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKTsgLy8gPT4gJ3ZhbHVlJ1xuICBjb25zdCBzb2NrZXQgPSB1c2VDb250ZXh0KFNvY2tldENvbnRleHQpO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHsgXG4gICAgaWYgKCFzb2NrZXQpIHJldHVybjtcblxuICAgIHNvY2tldC5vbignbXNnVG9DbGllbnQnLCAocGF5bG9hZDpUQ2hhdE1lc3NhZ2UpID0+IHsgXG4gICAgICAvLyDssYTtjIUg66mU7IS47KeAIOyImOyLoCAgIFxuICAgICAgZGlzcGF0Y2goe3R5cGU6J1BVU0hfQ0hBVF9MSVNUJyxwYXlsb2FkfSkgXG4gICAgfSlcbiAgfSxbXSlcblxuICB2YXIgaW5Sb29tS2V5ID0gbnVsbDtcbiAgdmFyIHJvb21MaXN0ID0gW107XG4gIHZhciBjaGF0TGlzdCA9IFtdOyBcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgIGluUm9vbUtleSxcbiAgICByb29tTGlzdCwgIFxuICAgIGNoYXRMaXN0XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENoYXRTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgIDxDaGF0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+IFxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NoYXREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9DaGF0U3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuLy8gc3RhdGUg7JmAIGRpc3BhdGNoIOulvCDsib3qsowg7IKs7Jqp7ZWY6riwIOychO2VnCDsu6TsiqTthYAgSG9va3NcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGF0U3RhdGUoKSB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChDaGF0U3RhdGVDb250ZXh0KTtcbiAgaWYgKCFzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgQXV0aFByb3ZpZGVyXCIpOyAvLyDsnKDtmqjtlZjsp4Ag7JWK7J2E65WQIOyXkOufrOulvCDrsJzsg51cbiAgcmV0dXJuIHN0YXRlO1xufSBcbiBcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGF0RGlzcGF0Y2goKSB7IFxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoQ2hhdERpc3BhdGNoQ29udGV4dCk7IFxuICBpZiAoIWRpc3BhdGNoKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBBdXRoUHJvdmlkZXJcIik7IC8vIOycoO2aqO2VmOyngCDslYrsnYTrlZAg7JeQ65+s66W8IOuwnOyDnVxuICByZXR1cm4gZGlzcGF0Y2g7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/providers/chatProvider.tsx\n");

/***/ }),

/***/ "./lib/providers/socketContext.tsx":
/*!*****************************************!*\
  !*** ./lib/providers/socketContext.tsx ***!
  \*****************************************/
/*! exports provided: SocketContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocketContext\", function() { return SocketContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()('http://localhost:8080', {\n  transports: ['websocket']\n});\nconst SocketContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(socket);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcHJvdmlkZXJzL3NvY2tldENvbnRleHQudHN4P2E5YjYiXSwibmFtZXMiOlsic29ja2V0Iiwic29ja2V0SU9DbGllbnQiLCJ0cmFuc3BvcnRzIiwiU29ja2V0Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0MsdURBQWMsQ0FBQyx1QkFBRCxFQUF5QjtBQUFDQyxZQUFVLEVBQUMsQ0FBQyxXQUFEO0FBQVosQ0FBekIsQ0FBN0I7QUFHTyxNQUFNQyxhQUFhLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CTCxNQUFwQixDQUF0QiIsImZpbGUiOiIuL2xpYi9wcm92aWRlcnMvc29ja2V0Q29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcblxuY29uc3Qgc29ja2V0ID0gc29ja2V0SU9DbGllbnQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcse3RyYW5zcG9ydHM6Wyd3ZWJzb2NrZXQnXX0pOyAgIFxuXG5cbmV4cG9ydCBjb25zdCBTb2NrZXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChzb2NrZXQpO1xuICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/providers/socketContext.tsx\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.css\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var scss_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scss/global.scss */ \"./scss/global.scss\");\n/* harmony import */ var scss_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scss_global_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lib_providers_authProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/providers/authProvider */ \"./lib/providers/authProvider.tsx\");\n/* harmony import */ var lib_providers_chatProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/providers/chatProvider */ \"./lib/providers/chatProvider.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/munhagju/DoraemonPlateV1/frontend/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nconst AppProvider = ({\n  contexts,\n  children\n}) => contexts.reduce((prev, context) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(context, {\n  children: prev\n}), children);\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AppProvider, {\n      contexts: [lib_providers_authProvider__WEBPACK_IMPORTED_MODULE_3__[\"AuthProvider\"], lib_providers_chatProvider__WEBPACK_IMPORTED_MODULE_4__[\"ChatProvider\"]],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_6__[\"SwitchTransition\"], {\n        mode: \"out-in\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_6__[\"CSSTransition\"], {\n          classNames: \"page\",\n          timeout: 300,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, undefined)\n        }, router.pathname, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcFByb3ZpZGVyIiwiY29udGV4dHMiLCJjaGlsZHJlbiIsInJlZHVjZSIsInByZXYiLCJjb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiQXV0aFByb3ZpZGVyIiwiQ2hhdFByb3ZpZGVyIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE0QkQsUUFBUSxDQUFDRSxNQUFULENBQzlDLENBQUNDLElBQUQsRUFBV0MsT0FBWCxrQkFBMkJDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JGLE9BQXBCLEVBQTZCO0FBQ3RESCxVQUFRLEVBQUVFO0FBRDRDLENBQTdCLENBRG1CLEVBSTlDRixRQUo4QyxDQUFoRDs7QUFPQSxNQUFNTSxHQUFHLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUN4QyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxXQUFEO0FBQWEsY0FBUSxFQUFFLENBQUNDLHVFQUFELEVBQWNDLHVFQUFkLENBQXZCO0FBQUEsNkJBQ0UscUVBQUMsdUVBQUQ7QUFBa0IsWUFBSSxFQUFDLFFBQXZCO0FBQUEsK0JBQ0UscUVBQUMsb0VBQUQ7QUFBcUMsb0JBQVUsRUFBQyxNQUFoRDtBQUF1RCxpQkFBTyxFQUFFLEdBQWhFO0FBQUEsaUNBQ0UscUVBQUMsU0FBRCxvQkFBZ0JKLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFvQkMsTUFBTSxDQUFDSSxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVdELENBYkQ7O0FBZWVQLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuaW1wb3J0ICdzY3NzL2dsb2JhbC5zY3NzJzsgIFxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcImxpYi9wcm92aWRlcnMvYXV0aFByb3ZpZGVyXCI7IFxuaW1wb3J0IHsgQ2hhdFByb3ZpZGVyIH0gZnJvbSBcImxpYi9wcm92aWRlcnMvY2hhdFByb3ZpZGVyXCI7ICAgIFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaFRyYW5zaXRpb24sIENTU1RyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IEFwcFByb3ZpZGVyID0gKHsgY29udGV4dHMsIGNoaWxkcmVuIH0pID0+IGNvbnRleHRzLnJlZHVjZShcbiAgKHByZXY6YW55LCBjb250ZXh0OmFueSkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LCB7XG4gICAgY2hpbGRyZW46IHByZXYgXG4gIH0pLCBcbiAgY2hpbGRyZW5cbik7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPD4gXG4gICAgICA8QXBwUHJvdmlkZXIgY29udGV4dHM9e1tBdXRoUHJvdmlkZXIsQ2hhdFByb3ZpZGVyXX0+ICBcbiAgICAgICAgPFN3aXRjaFRyYW5zaXRpb24gbW9kZT0nb3V0LWluJz5cbiAgICAgICAgICA8Q1NTVHJhbnNpdGlvbiBrZXk9e3JvdXRlci5wYXRobmFtZX0gY2xhc3NOYW1lcz0ncGFnZScgdGltZW91dD17MzAwfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgIHsuLi5wYWdlUHJvcHN9IC8+IFxuICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgPC9Td2l0Y2hUcmFuc2l0aW9uPlxuICAgICAgIDwvQXBwUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7IFxuICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./scss/global.scss":
/*!**************************!*\
  !*** ./scss/global.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Njc3MvZ2xvYmFsLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./scss/global.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-transition-group\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI/ZGRlMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC10cmFuc2l0aW9uLWdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-transition-group\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCI/OGJjNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzb2NrZXQuaW8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///socket.io-client\n");

/***/ })

/******/ });