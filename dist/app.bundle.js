/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(602);
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(733);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* eslint-disable no-prototype-builtins */



var DATABASE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.DATABASE_NAME,
  DATABASE_VERSION = _globals_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.DATABASE_VERSION,
  OBJECT_STORE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.OBJECT_STORE_NAME;
var dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_0__/* .openDB */ .P2)(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});
var FavoriteRestaurantIdb = {
  getRestaurant: function getRestaurant(id) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (id) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.next = 4;
            return dbPromise;
          case 4:
            return _context.abrupt("return", _context.sent.get(OBJECT_STORE_NAME, id));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  getAllRestaurants: function getAllRestaurants() {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return dbPromise;
          case 2:
            return _context2.abrupt("return", _context2.sent.getAll(OBJECT_STORE_NAME));
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  putRestaurant: function putRestaurant(restaurant) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (restaurant.hasOwnProperty('id')) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.next = 4;
            return dbPromise;
          case 4:
            return _context3.abrupt("return", _context3.sent.put(OBJECT_STORE_NAME, restaurant));
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  deleteRestaurant: function deleteRestaurant(id) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return dbPromise;
          case 2:
            return _context4.abrupt("return", _context4.sent["delete"](OBJECT_STORE_NAME, id));
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  searchRestaurants: function searchRestaurants(query) {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _this.getAllRestaurants();
          case 2:
            return _context5.abrupt("return", _context5.sent.filter(function (restaurant) {
              var loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
              var jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');
              var loweredCaseQuery = query.toLowerCase();
              var jammedQuery = loweredCaseQuery.replace(/\s/g, '');
              return jammedRestaurantName.indexOf(jammedQuery) !== -1;
            }));
          case 3:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteRestaurantIdb);

/***/ }),

/***/ 733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CONFIG = {
  // KEY: 'YOUR_API_KEY',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL_LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  BASE_IMAGE_URL_MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/',
  BASE_IMAGE_URL_SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMAGE_URL_MOVIE: 'https://image.tmdb.org/t/p/w500/',
  // DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
  PUSH_MSG_VAPID_PUBLIC_KEY: 'BN7-r0Svv7CsTi18-OPYtJLVW0bfuZ1x1UtrygczKjennA_qs7OWmgOewcuYSYF3Gc_mPbqsDh2YoGCDPL0RxDQ',
  PUSH_MSG_SUBSCRIBE_URL: 'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/subscribe',
  PUSH_MSG_UNSUBSCRIBE_URL: 'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/unsubscribe'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);

/***/ }),

/***/ 293:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(452);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css
var style = __webpack_require__(919);
;// ./src/styles/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const styles_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css
var responsive = __webpack_require__(936);
;// ./src/styles/responsive.css

      
      
      
      
      
      
      
      
      

var responsive_options = {};

responsive_options.styleTagTransform = (styleTagTransform_default());
responsive_options.setAttributes = (setAttributesWithoutAttributes_default());

      responsive_options.insert = insertBySelector_default().bind(null, "head");
    
responsive_options.domAPI = (styleDomAPI_default());
responsive_options.insertStyleElement = (insertStyleElement_default());

var responsive_update = injectStylesIntoStyleTag_default()(responsive/* default */.A, responsive_options);




       /* harmony default export */ const styles_responsive = (responsive/* default */.A && responsive/* default */.A.locals ? responsive/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/workbox-window/build/workbox-window.prod.es5.mjs
var workbox_window_prod_es5 = __webpack_require__(730);
;// ./src/scripts/utils/sw-register.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var swRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var wb;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if ('serviceWorker' in navigator) {
            _context.next = 3;
            break;
          }
          console.log('Service Worker not supported in the browser');
          return _context.abrupt("return");
        case 3:
          wb = new workbox_window_prod_es5/* Workbox */.JK('./sw.bundle.js');
          _context.prev = 4;
          _context.next = 7;
          return wb.register();
        case 7:
          console.log('Service worker registered');
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](4);
          console.log('Failed to register service worker', _context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 10]]);
  }));
  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const sw_register = (swRegister);
// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(879);
// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(552);
;// ./src/scripts/routes/url-parser.js
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    var splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "/".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ const url_parser = (UrlParser);
;// ./src/scripts/views/pages/home.js
function home_typeof(o) { "@babel/helpers - typeof"; return home_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, home_typeof(o); }
function home_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ home_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == home_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(home_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function home_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function home_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { home_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { home_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Home = {
  render: function render() {
    return home_asyncToGenerator(/*#__PURE__*/home_regeneratorRuntime().mark(function _callee() {
      return home_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", "\n      <div class=\"content\">\n        <section class=\"hero\" id=\"main-content\">\n          <div class=\"hero-content\">\n            <h1>Welcome to Resto Apps</h1>\n            <p>Discover the best restaurants around you.</p>\n          </div>\n        </section>\n        <section class=\"restaurant_container\" id=\"restaurant_container\">\n          <h2>Explore Restaurant</h2>\n          <div class=\"restaurants\" id=\"restaurants\"></div>\n        </section>\n        <div class=\"container-testi-tips\">\n          <section class=\"testimonials\">\n            <h2>What Our Users Say</h2>\n            <div class=\"testimonial-list\">\n              <div class=\"testimonial-item\">\n                <p>\"Resto Apps has made finding great places to eat easier than ever. Highly recommend!\"</p>\n                <p>- Sarah L.</p>\n              </div>\n              <div class=\"testimonial-item\">\n                <p>\"The restaurant recommendations are spot on. I discovered my new favorite place thanks to this app!\"</p>\n                <p>- John D.</p>\n              </div>\n            </div>\n          </section>\n          <section class=\"tips\">\n            <h2>Restaurant Tips</h2>\n            <div class=\"tip-list\">\n              <article class=\"tip-item\">\n                <h3>How to Choose the Best Restaurant for a Special Occasion</h3>\n                <p>Looking for a place to celebrate an important event?</p>\n                <a href=\"https://www.thehandbook.com/special-occasion-restaurants/\">Read More</a>\n              </article>\n              <article class=\"tip-item\">\n                <h3>5 Hidden Gem Restaurants You Must Try</h3>\n                <p>Discover some of the best-kept secrets in the city...</p>\n                <a href=\"https://www.socialexpat.net/5-unique-restaurants-in-jakarta-you-must-try/\">Read More</a>\n              </article>\n            </div>\n          </section>\n        </div>\n      </div>\n    ");
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return home_asyncToGenerator(/*#__PURE__*/home_regeneratorRuntime().mark(function _callee2() {
      var restaurantsContainer, _yield$import, RestaurantDbSource, _yield$import2, createRestaurantItemTemplate, restaurants;
      return home_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            restaurantsContainer = document.querySelector('#restaurants');
            restaurantsContainer.innerHTML = "\n      <div class=\"skeleton skeleton-image\"></div>\n      <div class=\"skeleton skeleton-text\"></div>\n      <div class=\"skeleton skeleton-text\"></div>\n    ";
            _context2.prev = 2;
            _context2.next = 5;
            return __webpack_require__.e(/* import() */ 551).then(__webpack_require__.bind(__webpack_require__, 551));
          case 5:
            _yield$import = _context2.sent;
            RestaurantDbSource = _yield$import["default"];
            _context2.next = 9;
            return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 538));
          case 9:
            _yield$import2 = _context2.sent;
            createRestaurantItemTemplate = _yield$import2.createRestaurantItemTemplate;
            _context2.next = 13;
            return RestaurantDbSource.homeRestaurants();
          case 13:
            restaurants = _context2.sent;
            restaurantsContainer.innerHTML = restaurants.map(createRestaurantItemTemplate).join('');
            _context2.next = 20;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](2);
            restaurantsContainer.innerHTML = '<p class="error-message">Failed to load restaurants. Please try again later.</p>';
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 17]]);
    }))();
  }
};
/* harmony default export */ const home = (Home);
// EXTERNAL MODULE: ./src/scripts/data/favorite-restaurant-idb.js
var favorite_restaurant_idb = __webpack_require__(793);
// EXTERNAL MODULE: ./src/scripts/views/templates/template-creator.js
var template_creator = __webpack_require__(538);
;// ./src/scripts/views/pages/favorited-restaurants/favorite-restaurant-view.js
function favorite_restaurant_view_typeof(o) { "@babel/helpers - typeof"; return favorite_restaurant_view_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, favorite_restaurant_view_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == favorite_restaurant_view_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != favorite_restaurant_view_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != favorite_restaurant_view_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var FavoriteRestaurantView = /*#__PURE__*/function () {
  function FavoriteRestaurantView() {
    _classCallCheck(this, FavoriteRestaurantView);
  }
  return _createClass(FavoriteRestaurantView, [{
    key: "getTemplate",
    value: function getTemplate() {
      return "\n      <section class=\"restaurant_container\">\n        <input id=\"query\" type=\"text\" placeholder=\"Search restaurants...\">\n        <h2 class=\"restaurant__heading\">Your Favorited Restaurant</h2>\n  \n        <div id=\"restaurants\" class=\"restaurants\">\n        </div>\n      </section>\n    ";
    }
  }, {
    key: "runWhenUserIsSearching",
    value: function runWhenUserIsSearching(callback) {
      document.getElementById('query').addEventListener('change', function (event) {
        callback(event.target.value);
      });
    }
  }, {
    key: "showFavoriteRestaurants",
    value: function showFavoriteRestaurants(restaurants) {
      var html;
      if (restaurants.length) {
        html = restaurants.reduce(function (carry, restaurant) {
          var restaurantName = restaurant.name || '-';
          return carry.concat((0,template_creator.createRestaurantItemTemplate)(_objectSpread(_objectSpread({}, restaurant), {}, {
            name: restaurantName
          })));
        }, '');
      } else {
        html = this._getEmptyRestaurantTemplate();
      }
      document.getElementById('restaurants').innerHTML = html;
      document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
    }
  }, {
    key: "_getEmptyRestaurantTemplate",
    value: function _getEmptyRestaurantTemplate() {
      return "\n      <div class=\"restaurant-item__not__found\">\n        Tidak ada restaurant untuk ditampilkan\n      </div>\n    ";
    }
  }]);
}();
/* harmony default export */ const favorite_restaurant_view = (FavoriteRestaurantView);
;// ./src/scripts/views/pages/favorite.js
function favorite_typeof(o) { "@babel/helpers - typeof"; return favorite_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, favorite_typeof(o); }
function favorite_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ favorite_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == favorite_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(favorite_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function favorite_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function favorite_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { favorite_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { favorite_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var view = new favorite_restaurant_view();
var Favorite = {
  render: function render() {
    return favorite_asyncToGenerator(/*#__PURE__*/favorite_regeneratorRuntime().mark(function _callee() {
      return favorite_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", view.getTemplate());
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return favorite_asyncToGenerator(/*#__PURE__*/favorite_regeneratorRuntime().mark(function _callee2() {
      var _yield$import, FavoriteRestaurantShowPresenter, _yield$import2, FavoriteRestaurantSearchPresenter;
      return favorite_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __webpack_require__.e(/* import() */ 57).then(__webpack_require__.bind(__webpack_require__, 57));
          case 2:
            _yield$import = _context2.sent;
            FavoriteRestaurantShowPresenter = _yield$import["default"];
            _context2.next = 6;
            return __webpack_require__.e(/* import() */ 596).then(__webpack_require__.bind(__webpack_require__, 596));
          case 6:
            _yield$import2 = _context2.sent;
            FavoriteRestaurantSearchPresenter = _yield$import2["default"];
            new FavoriteRestaurantShowPresenter({
              view: view,
              favoriteRestaurants: favorite_restaurant_idb/* default */.A
            });
            new FavoriteRestaurantSearchPresenter({
              view: view,
              favoriteRestaurants: favorite_restaurant_idb/* default */.A
            });
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ const favorite = (Favorite);
;// ./src/scripts/views/pages/detail.js
function detail_typeof(o) { "@babel/helpers - typeof"; return detail_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, detail_typeof(o); }
function detail_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ detail_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == detail_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(detail_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function detail_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function detail_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { detail_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { detail_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var Detail = {
  render: function render() {
    return detail_asyncToGenerator(/*#__PURE__*/detail_regeneratorRuntime().mark(function _callee() {
      return detail_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", "\n      <div id=\"restaurant-detail\" class=\"restaurant-detail\">\n        <div id=\"restaurant-content\" class=\"restaurant-content\">\n          <div class=\"skeleton-image skeleton\"></div>\n          <div class=\"skeleton-text skeleton\" style=\"width: 60%;\"></div>\n          <div class=\"skeleton-text skeleton\" style=\"width: 40%;\"></div>\n          <div class=\"skeleton-text skeleton\" style=\"width: 50%;\"></div>\n          <h3 class=\"skeleton-text skeleton\" style=\"width: 30%;\"></h3>\n          <ul>\n            <li class=\"skeleton-text skeleton\" style=\"width: 30%;\"></li>\n            <li class=\"skeleton-text skeleton\" style=\"width: 25%;\"></li>\n            <li class=\"skeleton-text skeleton\" style=\"width: 40%;\"></li>\n          </ul>\n          <h4 class=\"skeleton-text skeleton\" style=\"width: 20%;\"></h4>\n          <ul>\n            <li class=\"skeleton-text skeleton\" style=\"width: 50%;\"></li>\n            <li class=\"skeleton-text skeleton\" style=\"width: 45%;\"></li>\n            <li class=\"skeleton-text skeleton\" style=\"width: 35%;\"></li>\n          </ul>\n        </div>\n        <div id=\"favorite-button-container\" class=\"favorite-button-container\"></div>\n        <div id=\"review-container\" class=\"review-container\"></div>\n      </div>\n    ");
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return detail_asyncToGenerator(/*#__PURE__*/detail_regeneratorRuntime().mark(function _callee2() {
      var url, restaurantContainer, _yield$import, RestaurantDbSource, restaurant, _yield$import2, ReviewFormInitiator, _yield$import3, FavoriteButtonInitiator;
      return detail_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            url = url_parser.parseActiveUrlWithoutCombiner();
            restaurantContainer = document.querySelector('#restaurant-content');
            _context2.prev = 2;
            _context2.next = 5;
            return __webpack_require__.e(/* import() */ 551).then(__webpack_require__.bind(__webpack_require__, 551));
          case 5:
            _yield$import = _context2.sent;
            RestaurantDbSource = _yield$import["default"];
            _context2.next = 9;
            return RestaurantDbSource.detailRestaurant(url.id);
          case 9:
            restaurant = _context2.sent;
            restaurantContainer.innerHTML = (0,template_creator.createRestaurantDetailTemplate)(restaurant);
            _context2.next = 13;
            return __webpack_require__.e(/* import() */ 485).then(__webpack_require__.bind(__webpack_require__, 485));
          case 13:
            _yield$import2 = _context2.sent;
            ReviewFormInitiator = _yield$import2["default"];
            _context2.next = 17;
            return ReviewFormInitiator.init({
              reviewFormContainer: document.querySelector('#review-container'),
              restaurantId: url.id
            });
          case 17:
            _context2.next = 19;
            return __webpack_require__.e(/* import() */ 33).then(__webpack_require__.bind(__webpack_require__, 33));
          case 19:
            _yield$import3 = _context2.sent;
            FavoriteButtonInitiator = _yield$import3["default"];
            FavoriteButtonInitiator.init({
              favoriteButtonContainer: document.querySelector('#favorite-button-container'),
              restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                pictureId: restaurant.pictureId,
                city: restaurant.city,
                rating: restaurant.rating,
                description: restaurant.description
              }
            });
            _context2.next = 27;
            break;
          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](2);
            restaurantContainer.innerHTML = '<p class="error-message">Failed to load restaurant details. Please try again later.</p>';
          case 27:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 24]]);
    }))();
  }
};
/* harmony default export */ const detail = (Detail);
;// ./src/scripts/routes/routes.js



var routes = {
  '/': home,
  // default page
  '/home': home,
  '/favorite': favorite,
  '/detail/:id': detail
};
/* harmony default export */ const routes_routes = (routes);
;// ./src/scripts/utils/drawer-initiator.js
var DrawerInitiator = {
  init: function init(_ref) {
    var _this = this;
    var button = _ref.button,
      drawer = _ref.drawer,
      backdrop = _ref.backdrop;
    button.addEventListener('click', function (event) {
      _this._toggleDrawer(event, drawer, backdrop);
    });
    backdrop.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer, backdrop);
    });
  },
  _toggleDrawer: function _toggleDrawer(event, drawer, backdrop) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    if (drawer.classList.contains('open')) {
      backdrop.classList.add('active');
    } else {
      backdrop.classList.remove('active');
    }
  },
  _closeDrawer: function _closeDrawer(event, drawer, backdrop) {
    event.stopPropagation();
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
  }
};
/* harmony default export */ const drawer_initiator = (DrawerInitiator);
;// ./src/scripts/views/app.js
function app_typeof(o) { "@babel/helpers - typeof"; return app_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, app_typeof(o); }
function app_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ app_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == app_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(app_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function app_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function app_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { app_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { app_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function app_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function app_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, app_toPropertyKey(o.key), o); } }
function app_createClass(e, r, t) { return r && app_defineProperties(e.prototype, r), t && app_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function app_toPropertyKey(t) { var i = app_toPrimitive(t, "string"); return "symbol" == app_typeof(i) ? i : i + ""; }
function app_toPrimitive(t, r) { if ("object" != app_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != app_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var App = /*#__PURE__*/function () {
  function App(_ref) {
    var navlinks = _ref.navlinks,
      button = _ref.button,
      drawer = _ref.drawer,
      content = _ref.content,
      backdrop = _ref.backdrop,
      footerCopyright = _ref.footerCopyright,
      footerSubscribeButton = _ref.footerSubscribeButton,
      footerUnsubscribeButton = _ref.footerUnsubscribeButton,
      skipToContentLink = _ref.skipToContentLink;
    app_classCallCheck(this, App);
    this._navlinks = navlinks;
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._backdrop = backdrop;
    this._footerCopyright = footerCopyright;
    this._footerSubscribeButton = footerSubscribeButton;
    this._footerUnsubscribeButton = footerUnsubscribeButton;
    this._skipToContentLink = skipToContentLink;
    this._initialAppShell();
    this._initializeRouting();
    this._initializeSkipToContent();
  }
  return app_createClass(App, [{
    key: "_initialAppShell",
    value: function () {
      var _initialAppShell2 = app_asyncToGenerator(/*#__PURE__*/app_regeneratorRuntime().mark(function _callee() {
        var _yield$import, NavlinkInitiator, _yield$import2, FooterInitiator;
        return app_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // const { default: DrawerInitiator } = await import('../utils/drawer-initiator');

              drawer_initiator.init({
                button: this._button,
                drawer: this._drawer,
                backdrop: this._backdrop
              });
              _context.next = 3;
              return __webpack_require__.e(/* import() */ 355).then(__webpack_require__.bind(__webpack_require__, 355));
            case 3:
              _yield$import = _context.sent;
              NavlinkInitiator = _yield$import["default"];
              NavlinkInitiator.init({
                navlinks: this._navlinks,
                drawer: this._drawer,
                backdrop: this._backdrop
              });
              _context.next = 8;
              return __webpack_require__.e(/* import() */ 102).then(__webpack_require__.bind(__webpack_require__, 102));
            case 8:
              _yield$import2 = _context.sent;
              FooterInitiator = _yield$import2["default"];
              FooterInitiator.init({
                copyright: this._footerCopyright
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _initialAppShell() {
        return _initialAppShell2.apply(this, arguments);
      }
      return _initialAppShell;
    }()
  }, {
    key: "_initializeRouting",
    value: function _initializeRouting() {
      var _this = this;
      window.addEventListener('hashchange', function () {
        _this.renderPage();
      });
      this.renderPage();
    }
  }, {
    key: "_initializeSkipToContent",
    value: function _initializeSkipToContent() {
      var _this2 = this;
      this._skipToContentLink.addEventListener('click', function (event) {
        event.preventDefault();
        _this2.scrollToMainContent();
      });
    }
  }, {
    key: "scrollToMainContent",
    value: function scrollToMainContent() {
      this._content.scrollIntoView({
        behavior: 'smooth'
      });
      this._content.setAttribute('tabindex', '-1');
      this._content.focus();
    }
  }, {
    key: "renderPage",
    value: function () {
      var _renderPage = app_asyncToGenerator(/*#__PURE__*/app_regeneratorRuntime().mark(function _callee2() {
        var url, page;
        return app_regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              url = url_parser.parseActiveUrlWithCombiner();
              page = routes_routes[url];
              if (!page) {
                _context2.next = 10;
                break;
              }
              _context2.next = 5;
              return page.render();
            case 5:
              this._content.innerHTML = _context2.sent;
              _context2.next = 8;
              return page.afterRender();
            case 8:
              _context2.next = 11;
              break;
            case 10:
              this._content.innerHTML = '<h1>Page Not Found</h1>';
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function renderPage() {
        return _renderPage.apply(this, arguments);
      }
      return renderPage;
    }()
  }]);
}();
/* harmony default export */ const views_app = (App);
;// ./src/scripts/index.js
function scripts_typeof(o) { "@babel/helpers - typeof"; return scripts_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, scripts_typeof(o); }
function scripts_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ scripts_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == scripts_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(scripts_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function scripts_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function scripts_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { scripts_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { scripts_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








// import WebSocketInitiator from './utils/websocket-initiator';
// import CONFIG from './globals/config';

var loadComponents = /*#__PURE__*/function () {
  var _ref = scripts_asyncToGenerator(/*#__PURE__*/scripts_regeneratorRuntime().mark(function _callee() {
    return scripts_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/* import() */ 23).then(__webpack_require__.t.bind(__webpack_require__, 23, 23));
        case 2:
          _context.next = 4;
          return __webpack_require__.e(/* import() */ 407).then(__webpack_require__.t.bind(__webpack_require__, 407, 23));
        case 4:
          _context.next = 6;
          return __webpack_require__.e(/* import() */ 453).then(__webpack_require__.t.bind(__webpack_require__, 453, 23));
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function loadComponents() {
    return _ref.apply(this, arguments);
  };
}();
document.addEventListener('DOMContentLoaded', /*#__PURE__*/scripts_asyncToGenerator(/*#__PURE__*/scripts_regeneratorRuntime().mark(function _callee3() {
  var app;
  return scripts_regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.next = 2;
        return loadComponents();
      case 2:
        app = new views_app({
          navlinks: document.querySelectorAll('#navigationDrawer ul li a'),
          button: document.querySelector('#hamburgerButton'),
          drawer: document.querySelector('#navigationDrawer'),
          content: document.querySelector('#mainContent'),
          backdrop: document.querySelector('#backdrop'),
          footerCopyright: document.querySelector('.footer__copyright'),
          footerSubscribeButton: document.querySelector('#subscribePushNotification'),
          footerUnsubscribeButton: document.querySelector('#unsubscribePushNotification'),
          skipToContentLink: document.querySelector('#skip-to-content')
        });
        window.addEventListener('hashchange', function () {
          app.renderPage();
        });
        window.addEventListener('load', /*#__PURE__*/scripts_asyncToGenerator(/*#__PURE__*/scripts_regeneratorRuntime().mark(function _callee2() {
          return scripts_regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                app.renderPage();
                _context2.next = 3;
                return sw_register();
              case 3:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })));
      case 5:
      case "end":
        return _context3.stop();
    }
  }, _callee3);
})));

/***/ }),

/***/ 538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFavoriteButtonTemplate: () => (/* binding */ createFavoriteButtonTemplate),
/* harmony export */   createFavoritedButtonTemplate: () => (/* binding */ createFavoritedButtonTemplate),
/* harmony export */   createRestaurantDetailTemplate: () => (/* binding */ createRestaurantDetailTemplate),
/* harmony export */   createRestaurantItemTemplate: () => (/* binding */ createRestaurantItemTemplate),
/* harmony export */   createReviewTemplate: () => (/* binding */ createReviewTemplate)
/* harmony export */ });
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);

var createRestaurantDetailTemplate = function createRestaurantDetailTemplate(restaurant) {
  return "\n  <h2 class=\"restaurant__title\">".concat(restaurant.name, "</h2>\n    <picture>\n       <source media=\"(max-width: 600px)\" srcset=\"").concat(_globals_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.BASE_IMAGE_URL_SMALL).concat(restaurant.pictureId, "\">\n       <source media=\"(max-width: 1024px)\" srcset=\"").concat(_globals_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.BASE_IMAGE_URL_MEDIUM).concat(restaurant.pictureId, "\">\n  \n      <img src=\"").concat(_globals_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.BASE_IMAGE_URL_LARGE).concat(restaurant.pictureId, "-large.jpg\" alt=\"").concat(restaurant.name, "\" crossorigin=\"anonymous\" class=\"lazyload\" />\n    </picture>\n    \n    <p><strong>Address:</strong> ").concat(restaurant.address, "</p>\n    <p><strong>City:</strong> ").concat(restaurant.city, "</p>\n    <p><strong>Rating:</strong> ").concat(restaurant.rating, " \u2B50</p>\n    <p><strong>Description:</strong> ").concat(restaurant.description, "</p>\n    \n    <h3>Categories</h3>\n    <ul>\n      ").concat(restaurant.categories.map(function (category) {
    return "<li>".concat(category.name, "</li>");
  }).join(''), "\n    </ul>\n    \n    <h3>Menu</h3>\n    \n    <h4>Food</h4>\n    <ul>\n      ").concat(restaurant.menus.foods.map(function (food) {
    return "<li>".concat(food.name, "</li>");
  }).join(''), "\n    </ul>\n    \n    <h4>Drinks</h4>\n    <ul>\n      ").concat(restaurant.menus.drinks.map(function (drink) {
    return "<li>".concat(drink.name, "</li>");
  }).join(''), "\n    </ul>\n    \n    <h3>Customer Reviews</h3>\n    <ul id=\"customer-reviews\">\n      ").concat(restaurant.customerReviews.map(function (review) {
    return "\n        <li>\n          <strong>".concat(review.name, "</strong> <br>\n          <em>Date: ").concat(review.date, "</em> <br>\n          ").concat(review.review, "\n        </li>\n      ");
  }).join(''), "\n    </ul>\n");
};
var createRestaurantItemTemplate = function createRestaurantItemTemplate(restaurant) {
  var _restaurant$descripti;
  return "\n  <div class=\"restaurant\">\n     <picture>\n       <source media=\"(max-width: 600px)\" srcset=\"".concat(_globals_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.BASE_IMAGE_URL_SMALL).concat(restaurant.pictureId, "\">\n       <source media=\"(max-width: 1024px)\" srcset=\"").concat(_globals_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.BASE_IMAGE_URL_MEDIUM).concat(restaurant.pictureId, "\">\n       \n       <img src=\"").concat(_globals_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.BASE_IMAGE_URL_LARGE).concat(restaurant.pictureId, "\" alt=\"").concat(restaurant.name, "\" crossorigin=\"anonymous\" class=\"lazyload\" />\n     </picture>\n\n     <div>\n       <h3 class=\"restaurant__title\">\n          <a href=\"/#/detail/").concat(restaurant.id, "\" >").concat(restaurant.name, "</a>\n       </h3>\n       <p>Location: ").concat(restaurant.city, "</p>\n       <p>Rating: ").concat(restaurant.rating, "</p>\n       <p>").concat((restaurant === null || restaurant === void 0 || (_restaurant$descripti = restaurant.description) === null || _restaurant$descripti === void 0 ? void 0 : _restaurant$descripti.length) > 200 ? "".concat(restaurant.description.slice(0, 200), "...") : restaurant === null || restaurant === void 0 ? void 0 : restaurant.description, "</p>\n       <a href=\"/#/detail/").concat(restaurant.id, "\" class=\"btn-details\">See Details</a>\n     </div>\n  </div>\n");
};
var createFavoriteButtonTemplate = function createFavoriteButtonTemplate() {
  return "\n  <button aria-label=\"favorite this restaurant\" id=\"favoriteButton\" class=\"favorite\">\n     <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> Add to Favorite\n  </button>\n";
};
var createFavoritedButtonTemplate = function createFavoritedButtonTemplate() {
  return "\n  <button aria-label=\"unfavorite this restaurant\" id=\"favoriteButton\" class=\"favorite\">\n    <i class=\"fa fa-heart\" aria-hidden=\"true\"></i> Remove From Favorite\n  </button>\n";
};
var createReviewTemplate = function createReviewTemplate() {
  return "\n   <h3>Add Review</h3>\n   <form id=\"review-form\">\n      <input type=\"text\" id=\"reviewer-name\" placeholder=\"Your Name\" required />\n      <textarea id=\"review-text\" placeholder=\"Your Review\" required></textarea>\n      <div class=\"button-container\">\n        <button type=\"submit\">Submit Review</button>\n      </div>\n   </form>\n";
};


/***/ }),

/***/ 936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(680), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(76), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (max-width: 799px) {
  .hero {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  }
}

@media screen and (min-width: 650px) {
  .backdrop.active {
    display: none;
  }

 .app-bar {
   grid-template-columns: 1fr auto;
   padding: 8px 32px;
 }

 .app-bar .app-bar__brand h1 {
   font-size: 1.2em;
 }

 .app-bar .app-bar__menu {
   display: none;
 }

 .app-bar .app-bar__navigation {
   position: static;
   width: 100%;
   top: 50px;
   min-height: max-content;
   height: max-content;
 }

 .app-bar .app-bar__navigation ul li {
   display: inline-block;
 }

 .app-bar .app-bar__navigation ul li a {
   width: 80px;
   text-align: center;
   margin: 0;
 }

 .restaurants {
  grid-template-columns: 1fr 1fr;
  }

  .container-testi-tips {
    grid-template-columns: 1fr 1fr;
  }

  .testimonials,
  .tips {
    padding: 2rem;
  }

  /* Detail Page */
  #restaurant-detail {
    padding: 30px;
    padding-top: 100px;
    min-height: 100vh;
  }

  #restaurant-content h2 {
    font-size: 2.5rem;
  }

  #restaurant-content p {
    font-size: 1.1rem;
  }

  #restaurant-content h3,
  #restaurant-content h4 {
    font-size: 1.6rem;
  }

  footer #footerTools {
    flex-direction: row;
  }
}

@media screen and (min-width: 800px) {
 .app-bar .app-bar__brand h1 {
   font-size: 2em;
 }

 .hero {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
}

@media screen and (min-width: 850px) {
  .restaurants {
    grid-template-columns: 1fr 1fr 1fr;
  }

  /* Detail Page */
  #restaurant-detail {
    padding: 40px;
  }

  #restaurant-content p {
    font-size: 1.2rem;
    line-height: 1.7;
  }

  #restaurant-content h3,
  #restaurant-content h4 {
    font-size: 1.8rem;
  }

  #favoriteButton {
    margin-left: 0;
    margin-top: 20px;
  }
}

@media screen and (min-width: 1200px) {
  main {
    padding: 32px;
  }
  
 .restaurants {
   grid-template-columns: repeat(4, 1fr);
 }
}

@media screen and (min-width: 1600px) {
 .restaurants {
     grid-template-columns: repeat(5, 1fr);
 }
}`, "",{"version":3,"sources":["webpack://./src/styles/responsive.css"],"names":[],"mappings":"AAAA;EACE;IACE,yDAAsE;EACxE;AACF;;AAEA;EACE;IACE,aAAa;EACf;;CAED;GACE,+BAA+B;GAC/B,iBAAiB;CACnB;;CAEA;GACE,gBAAgB;CAClB;;CAEA;GACE,aAAa;CACf;;CAEA;GACE,gBAAgB;GAChB,WAAW;GACX,SAAS;GACT,uBAAuB;GACvB,mBAAmB;CACrB;;CAEA;GACE,qBAAqB;CACvB;;CAEA;GACE,WAAW;GACX,kBAAkB;GAClB,SAAS;CACX;;CAEA;EACC,8BAA8B;EAC9B;;EAEA;IACE,8BAA8B;EAChC;;EAEA;;IAEE,aAAa;EACf;;EAEA,gBAAgB;EAChB;IACE,aAAa;IACb,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,iBAAiB;EACnB;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;CACC;GACE,cAAc;CAChB;;CAEA;EACC,yDAAsE;AACxE;AACA;;AAEA;EACE;IACE,kCAAkC;EACpC;;EAEA,gBAAgB;EAChB;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;;IAEE,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,aAAa;EACf;;CAED;GACE,qCAAqC;CACvC;AACD;;AAEA;CACC;KACI,qCAAqC;CACzC;AACD","sourcesContent":["@media screen and (max-width: 799px) {\r\n  .hero {\r\n    background-image: url('../public/images/heros/hero-image_1-small.jpg');\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .backdrop.active {\r\n    display: none;\r\n  }\r\n\r\n .app-bar {\r\n   grid-template-columns: 1fr auto;\r\n   padding: 8px 32px;\r\n }\r\n\r\n .app-bar .app-bar__brand h1 {\r\n   font-size: 1.2em;\r\n }\r\n\r\n .app-bar .app-bar__menu {\r\n   display: none;\r\n }\r\n\r\n .app-bar .app-bar__navigation {\r\n   position: static;\r\n   width: 100%;\r\n   top: 50px;\r\n   min-height: max-content;\r\n   height: max-content;\r\n }\r\n\r\n .app-bar .app-bar__navigation ul li {\r\n   display: inline-block;\r\n }\r\n\r\n .app-bar .app-bar__navigation ul li a {\r\n   width: 80px;\r\n   text-align: center;\r\n   margin: 0;\r\n }\r\n\r\n .restaurants {\r\n  grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .container-testi-tips {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .testimonials,\r\n  .tips {\r\n    padding: 2rem;\r\n  }\r\n\r\n  /* Detail Page */\r\n  #restaurant-detail {\r\n    padding: 30px;\r\n    padding-top: 100px;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  #restaurant-content h2 {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  #restaurant-content p {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  #restaurant-content h3,\r\n  #restaurant-content h4 {\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  footer #footerTools {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n .app-bar .app-bar__brand h1 {\r\n   font-size: 2em;\r\n }\r\n\r\n .hero {\r\n  background-image: url('../public/images/heros/hero-image_1-large.jpg');\r\n}\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n  .restaurants {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n\r\n  /* Detail Page */\r\n  #restaurant-detail {\r\n    padding: 40px;\r\n  }\r\n\r\n  #restaurant-content p {\r\n    font-size: 1.2rem;\r\n    line-height: 1.7;\r\n  }\r\n\r\n  #restaurant-content h3,\r\n  #restaurant-content h4 {\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  #favoriteButton {\r\n    margin-left: 0;\r\n    margin-top: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  main {\r\n    padding: 32px;\r\n  }\r\n  \r\n .restaurants {\r\n   grid-template-columns: repeat(4, 1fr);\r\n }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n .restaurants {\r\n     grid-template-columns: repeat(5, 1fr);\r\n }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 919:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
	padding: 0;
	margin: 0;
}

body {
	font-family: 'Poppins', sans-serif;
	background-color: white;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

/* Skeleton */
.skeleton {
  background: #e0e0e0;
  background-image: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton-text {
  width: 100%;
  height: 20px;
  margin: 10px 0;
}

.skeleton-image {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
}

/* Skip to Content */
.skip-to-content {
	position: absolute;
	top: -1000px;
	left: 0;
	background-color: #333;
	color: white;
	padding: 10px;
	z-index: 100;
	font-size: 1rem;
	text-decoration: none;
	opacity: 0;
}

.skip-to-content:focus {
	top: 0;
	opacity: 1;
}

/* Backdrop */
.backdrop {
	position: fixed;
	top: 57px;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: none;
	z-index: 19;
}

.backdrop.active {
	display: block;
}

/*
  AppBar
*/

.app-bar {
	padding: 8px 16px;
	background-color: white;
	display: grid;
	grid-template-columns: auto 1fr auto;
	gap: 10px;
	position: fixed;
	top: 0;
	z-index: 99;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	width: 100%;
}

.app-bar .app-bar__menu {
	display: flex;
	align-items: center;
}

.app-bar .app-bar__menu button {
	background-color: transparent;
	border: none;
	font-size: 18px;
	padding: 8px;
	cursor: pointer;
	min-height: 44px;
	min-width: 44px;
}

.app-bar .app-bar__brand {
	display: flex;
	align-items: center;
}

.app-bar .app-bar__brand h1 {
	color: #db0000;
	text-transform: uppercase;
	font-size: 22px;
	user-select: none;
}

.app-bar .app-bar__navigation {
	position: fixed;
	top: 57px;
	left: -180px;
	width: 150px;
	min-height: calc(100vh - 73px);
	height: 100%;
	transition: all 0.3s;
	padding: 8px;
	background-color: white;
	overflow: hidden;
}

.app-bar .app-bar__navigation.open {
	left: 0;
}

.app-bar .app-bar__navigation ul li a {
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: black;
	padding: 8px;
	margin-bottom: 5px;
	width: 100%;
	min-height: 44px;
}

/*
  Main Content
*/

main {
	flex: 1;
	padding: 0px;
}

.content {
	margin: 0 auto;
	min-height: 100%;
}

/* Hero Section */
.hero {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-size: cover;
	background-position: center;
	color: white;
	text-align: center;
	padding: 5rem 0;
	width: 100%;
	min-height: 400px;
}

.hero::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
}

.hero-content {
	position: relative;
	z-index: 2;
}

.hero h1 {
	font-size: 3rem;
	margin-bottom: 1rem;
	text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.hero p {
	font-size: 1.5rem;
	text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

/* Restaurant Section */
.restaurant_container {
	padding: 2rem;
}

.restaurant_container h2 {
	font-size: 2rem;
	margin-bottom: 1rem;
	text-align: center;
}

.restaurant_container #query {
	min-width: 200px;
	padding: 12px 16px;
	margin-bottom: 16px;
	font-size: 20px;
}

.restaurants {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
	justify-content: center;
	text-align: center;
}

.restaurant_container#favorites h2 {
	padding-top: 80px;
}

.restaurant {
	border: 1px solid #ddd;
	padding: 1rem;
}

.restaurant a {
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: inherit;
	font-size: 1.2rem;
	font-weight: bold;
	width: 100%;
	height: 100%;
	min-height: 44px;
	min-width: 44px;
}

.restaurant img {
	max-width: 100%;
	height: auto;
	max-height: 200px;
	alt: 'Image of Restaurant';
}

.restaurant .btn-details {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4px 8px;
	background-color: #00796b;
	color: white;
	border: none;
	border-radius: 5px;
	text-align: center;
	font-size: 1.2rem;
	cursor: pointer;
	margin: 20px 0;
	min-height: 44px;
	min-width: 44px;
	transition: background-color 0.3s;
}

.container-testi-tips {
	display: grid;
	grid-template-columns: 1fr;
}

/* Testimonial, Tips, FAQ Sections */
.testimonials,
.tips {
	padding: 2rem;
	text-align: center;
}

.testimonials h2,
.tips h2 {
	font-size: 2rem;
	margin-bottom: 1rem;
}

.testimonial-list,
.tip-list {
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
}

.testimonial-item,
.tip-item {
	border: 1px solid #ddd;
	padding: 15px;
	border-radius: 5px;
	width: 100%;
}

.testimonial-item p,
.tip-item p {
	margin: 10px 0;
}

.testimonial-item {
	font-style: italic;
}

.tip-item a {
	color: #00796b;
	text-decoration: none;
	min-height: 44px;
	min-width: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
}

/* Detail Page */
#restaurant-detail {
	padding: 20px;
	margin: 0 auto;
	background-color: #f9f9f9;
	border-radius: 8px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

#restaurant-content h2 {
	font-size: 2.2rem;
	text-align: center;
	margin-bottom: 40px;
	color: #333;
}

#restaurant-content img {
	width: 100%;
	max-width: 100%;
	border-radius: 8px;
	margin-bottom: 20px;
}

#restaurant-content p {
	font-size: 1rem;
	line-height: 1.5;
	margin-bottom: 15px;
	color: #555;
}

#restaurant-content h3,
#restaurant-content h4,
#review-container h3 {
	font-size: 1.5rem;
	margin-top: 20px;
	margin-bottom: 10px;
	color: #444;
	border-bottom: 2px solid #eee;
	padding-bottom: 5px;
}

#restaurant-content ul {
	list-style-type: disc;
	padding-left: 20px;
	margin-top: 10px;
}

#restaurant-content ul li {
	margin-bottom: 10px;
	color: #333;
}

#favoriteButton {
	display: block;
	width: 100%;
	padding: 15px;
	background-color: #ff5722;
	color: white;
	border: none;
	border-radius: 5px;
	text-align: center;
	font-size: 1.2rem;
	cursor: pointer;
	margin: 20px 0;
	transition: background-color 0.3s;
	min-height: 44px;
	min-width: 44px;
}

#favoriteButton:hover {
	background-color: #e64a19;
}

/* Gaya untuk form review */
#review-form {
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-top: 20px;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: #f9f9f9;
}

#review-form input[type='text'],
#review-form textarea {
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
}

#review-form input[type='text']:focus,
#review-form textarea:focus {
	outline: none;
	border-color: #4caf50;
}

#review-form input[type='text'] {
	min-height: 44px;
}

#review-form textarea {
	resize: none;
	height: 100px;
}

#review-form .button-container {
	display: flex;
	justify-content: flex-end;
}

#review-form button {
	background-color: #4caf50;
	min-height: 44px;
	min-width: 44px;
	color: white;
	padding: 10px 15px;
	margin-top: 12px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
}

#review-form button:hover {
	background-color: #45a049;
}

/* Gaya untuk alert */
#alert-container {
	position: fixed;
	top: 20px;
	right: 20px;
	z-index: 1000;
}

.alert {
	padding: 10px;
	margin-bottom: 10px;
	border-radius: 5px;
	color: white;
}

.alert-success {
	background-color: green;
}

.alert-error {
	background-color: red;
}

/*
  Footer
*/

footer {
	padding: 32px;
	padding-top: 0;
}

footer .footer__copyright {
	margin-top: 16px;
	text-align: center;
	color: #aaaaaa;
}

footer .footer__copyright .footer__name {
	color: #db0000;
	font-weight: 600;
}

footer #footerTools {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
}

footer .btn {
	display: inline-block;
	padding: 12px 24px;
	background-color: #db0000;
	border: 1px solid #770000;
	border-radius: 4px;

	font-weight: 500;
	font-size: 16px;
	color: #ffffff;

	cursor: pointer;
	transition: 0.15s ease-in-out;
}

footer .btn:hover {
	background-color: #db0000bb;
}
footer .btn:active {
	background-color: #db0000dd;
}
footer .btn:focus-visible {
	outline: 3px solid #db000055;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,SAAS;AACV;;AAEA;CACC,kCAAkC;CAClC,uBAAuB;CACvB,iBAAiB;CACjB,aAAa;CACb,sBAAsB;AACvB;;AAEA,aAAa;AACb;EACE,mBAAmB;EACnB,+EAA+E;EAC/E,0BAA0B;EAC1B,gCAAgC;AAClC;;AAEA;EACE,KAAK,4BAA4B,EAAE;EACnC,OAAO,2BAA2B,EAAE;AACtC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA,oBAAoB;AACpB;CACC,kBAAkB;CAClB,YAAY;CACZ,OAAO;CACP,sBAAsB;CACtB,YAAY;CACZ,aAAa;CACb,YAAY;CACZ,eAAe;CACf,qBAAqB;CACrB,UAAU;AACX;;AAEA;CACC,MAAM;CACN,UAAU;AACX;;AAEA,aAAa;AACb;CACC,eAAe;CACf,SAAS;CACT,OAAO;CACP,WAAW;CACX,YAAY;CACZ,oCAAoC;CACpC,aAAa;CACb,WAAW;AACZ;;AAEA;CACC,cAAc;AACf;;AAEA;;CAEC;;AAED;CACC,iBAAiB;CACjB,uBAAuB;CACvB,aAAa;CACb,oCAAoC;CACpC,SAAS;CACT,eAAe;CACf,MAAM;CACN,WAAW;CACX,0CAA0C;CAC1C,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,6BAA6B;CAC7B,YAAY;CACZ,eAAe;CACf,YAAY;CACZ,eAAe;CACf,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,cAAc;CACd,yBAAyB;CACzB,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,SAAS;CACT,YAAY;CACZ,YAAY;CACZ,8BAA8B;CAC9B,YAAY;CACZ,oBAAoB;CACpB,YAAY;CACZ,uBAAuB;CACvB,gBAAgB;AACjB;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,qBAAqB;CACrB,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,WAAW;CACX,gBAAgB;AACjB;;AAEA;;CAEC;;AAED;CACC,OAAO;CACP,YAAY;AACb;;AAEA;CACC,cAAc;CACd,gBAAgB;AACjB;;AAEA,iBAAiB;AACjB;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,sBAAsB;CACtB,2BAA2B;CAC3B,YAAY;CACZ,kBAAkB;CAClB,eAAe;CACf,WAAW;CACX,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,WAAW;CACX,YAAY;CACZ,oCAAoC;CACpC,UAAU;AACX;;AAEA;CACC,kBAAkB;CAClB,UAAU;AACX;;AAEA;CACC,eAAe;CACf,mBAAmB;CACnB,2CAA2C;AAC5C;;AAEA;CACC,iBAAiB;CACjB,2CAA2C;AAC5C;;AAEA,uBAAuB;AACvB;CACC,aAAa;AACd;;AAEA;CACC,eAAe;CACf,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,0BAA0B;CAC1B,WAAW;CACX,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,sBAAsB;CACtB,aAAa;AACd;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,qBAAqB;CACrB,cAAc;CACd,iBAAiB;CACjB,iBAAiB;CACjB,WAAW;CACX,YAAY;CACZ,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,YAAY;CACZ,iBAAiB;CACjB,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,gBAAgB;CAChB,yBAAyB;CACzB,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,kBAAkB;CAClB,iBAAiB;CACjB,eAAe;CACf,cAAc;CACd,gBAAgB;CAChB,eAAe;CACf,iCAAiC;AAClC;;AAEA;CACC,aAAa;CACb,0BAA0B;AAC3B;;AAEA,oCAAoC;AACpC;;CAEC,aAAa;CACb,kBAAkB;AACnB;;AAEA;;CAEC,eAAe;CACf,mBAAmB;AACpB;;AAEA;;CAEC,gBAAgB;CAChB,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,WAAW;AACZ;;AAEA;;CAEC,sBAAsB;CACtB,aAAa;CACb,kBAAkB;CAClB,WAAW;AACZ;;AAEA;;CAEC,cAAc;AACf;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,cAAc;CACd,qBAAqB;CACrB,gBAAgB;CAChB,eAAe;CACf,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA,gBAAgB;AAChB;CACC,aAAa;CACb,cAAc;CACd,yBAAyB;CACzB,kBAAkB;CAClB,yCAAyC;AAC1C;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB,WAAW;AACZ;;AAEA;CACC,WAAW;CACX,eAAe;CACf,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,mBAAmB;CACnB,WAAW;AACZ;;AAEA;;;CAGC,iBAAiB;CACjB,gBAAgB;CAChB,mBAAmB;CACnB,WAAW;CACX,6BAA6B;CAC7B,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,mBAAmB;CACnB,WAAW;AACZ;;AAEA;CACC,cAAc;CACd,WAAW;CACX,aAAa;CACb,yBAAyB;CACzB,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,kBAAkB;CAClB,iBAAiB;CACjB,eAAe;CACf,cAAc;CACd,iCAAiC;CACjC,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA,2BAA2B;AAC3B;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,gBAAgB;CAChB,aAAa;CACb,sBAAsB;CACtB,kBAAkB;CAClB,yBAAyB;AAC1B;;AAEA;;CAEC,aAAa;CACb,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;;CAEC,aAAa;CACb,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,aAAa;CACb,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;CACzB,gBAAgB;CAChB,eAAe;CACf,YAAY;CACZ,kBAAkB;CAClB,gBAAgB;CAChB,YAAY;CACZ,kBAAkB;CAClB,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA,qBAAqB;AACrB;CACC,eAAe;CACf,SAAS;CACT,WAAW;CACX,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;;CAEC;;AAED;CACC,aAAa;CACb,cAAc;AACf;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,cAAc;AACf;;AAEA;CACC,cAAc;CACd,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,QAAQ;AACT;;AAEA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,yBAAyB;CACzB,yBAAyB;CACzB,kBAAkB;;CAElB,gBAAgB;CAChB,eAAe;CACf,cAAc;;CAEd,eAAe;CACf,6BAA6B;AAC9B;;AAEA;CACC,2BAA2B;AAC5B;AACA;CACC,2BAA2B;AAC5B;AACA;CACC,4BAA4B;AAC7B","sourcesContent":["* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\nbody {\n\tfont-family: 'Poppins', sans-serif;\n\tbackground-color: white;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n/* Skeleton */\n.skeleton {\n  background: #e0e0e0;\n  background-image: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n}\n\n@keyframes loading {\n  0% { background-position: -200% 0; }\n  100% { background-position: 200% 0; }\n}\n\n.skeleton-text {\n  width: 100%;\n  height: 20px;\n  margin: 10px 0;\n}\n\n.skeleton-image {\n  width: 100%;\n  height: 200px;\n  margin-bottom: 20px;\n}\n\n/* Skip to Content */\n.skip-to-content {\n\tposition: absolute;\n\ttop: -1000px;\n\tleft: 0;\n\tbackground-color: #333;\n\tcolor: white;\n\tpadding: 10px;\n\tz-index: 100;\n\tfont-size: 1rem;\n\ttext-decoration: none;\n\topacity: 0;\n}\n\n.skip-to-content:focus {\n\ttop: 0;\n\topacity: 1;\n}\n\n/* Backdrop */\n.backdrop {\n\tposition: fixed;\n\ttop: 57px;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\tdisplay: none;\n\tz-index: 19;\n}\n\n.backdrop.active {\n\tdisplay: block;\n}\n\n/*\n  AppBar\n*/\n\n.app-bar {\n\tpadding: 8px 16px;\n\tbackground-color: white;\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr auto;\n\tgap: 10px;\n\tposition: fixed;\n\ttop: 0;\n\tz-index: 99;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n\twidth: 100%;\n}\n\n.app-bar .app-bar__menu {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.app-bar .app-bar__menu button {\n\tbackground-color: transparent;\n\tborder: none;\n\tfont-size: 18px;\n\tpadding: 8px;\n\tcursor: pointer;\n\tmin-height: 44px;\n\tmin-width: 44px;\n}\n\n.app-bar .app-bar__brand {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.app-bar .app-bar__brand h1 {\n\tcolor: #db0000;\n\ttext-transform: uppercase;\n\tfont-size: 22px;\n\tuser-select: none;\n}\n\n.app-bar .app-bar__navigation {\n\tposition: fixed;\n\ttop: 57px;\n\tleft: -180px;\n\twidth: 150px;\n\tmin-height: calc(100vh - 73px);\n\theight: 100%;\n\ttransition: all 0.3s;\n\tpadding: 8px;\n\tbackground-color: white;\n\toverflow: hidden;\n}\n\n.app-bar .app-bar__navigation.open {\n\tleft: 0;\n}\n\n.app-bar .app-bar__navigation ul li a {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-decoration: none;\n\tcolor: black;\n\tpadding: 8px;\n\tmargin-bottom: 5px;\n\twidth: 100%;\n\tmin-height: 44px;\n}\n\n/*\n  Main Content\n*/\n\nmain {\n\tflex: 1;\n\tpadding: 0px;\n}\n\n.content {\n\tmargin: 0 auto;\n\tmin-height: 100%;\n}\n\n/* Hero Section */\n.hero {\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-size: cover;\n\tbackground-position: center;\n\tcolor: white;\n\ttext-align: center;\n\tpadding: 5rem 0;\n\twidth: 100%;\n\tmin-height: 400px;\n}\n\n.hero::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\tz-index: 1;\n}\n\n.hero-content {\n\tposition: relative;\n\tz-index: 2;\n}\n\n.hero h1 {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n\ttext-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);\n}\n\n.hero p {\n\tfont-size: 1.5rem;\n\ttext-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);\n}\n\n/* Restaurant Section */\n.restaurant_container {\n\tpadding: 2rem;\n}\n\n.restaurant_container h2 {\n\tfont-size: 2rem;\n\tmargin-bottom: 1rem;\n\ttext-align: center;\n}\n\n.restaurant_container #query {\n\tmin-width: 200px;\n\tpadding: 12px 16px;\n\tmargin-bottom: 16px;\n\tfont-size: 20px;\n}\n\n.restaurants {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 1.5rem;\n\tjustify-content: center;\n\ttext-align: center;\n}\n\n.restaurant_container#favorites h2 {\n\tpadding-top: 80px;\n}\n\n.restaurant {\n\tborder: 1px solid #ddd;\n\tpadding: 1rem;\n}\n\n.restaurant a {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-decoration: none;\n\tcolor: inherit;\n\tfont-size: 1.2rem;\n\tfont-weight: bold;\n\twidth: 100%;\n\theight: 100%;\n\tmin-height: 44px;\n\tmin-width: 44px;\n}\n\n.restaurant img {\n\tmax-width: 100%;\n\theight: auto;\n\tmax-height: 200px;\n\talt: 'Image of Restaurant';\n}\n\n.restaurant .btn-details {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 4px 8px;\n\tbackground-color: #00796b;\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 5px;\n\ttext-align: center;\n\tfont-size: 1.2rem;\n\tcursor: pointer;\n\tmargin: 20px 0;\n\tmin-height: 44px;\n\tmin-width: 44px;\n\ttransition: background-color 0.3s;\n}\n\n.container-testi-tips {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n}\n\n/* Testimonial, Tips, FAQ Sections */\n.testimonials,\n.tips {\n\tpadding: 2rem;\n\ttext-align: center;\n}\n\n.testimonials h2,\n.tips h2 {\n\tfont-size: 2rem;\n\tmargin-bottom: 1rem;\n}\n\n.testimonial-list,\n.tip-list {\n\tmargin-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 1.5rem;\n}\n\n.testimonial-item,\n.tip-item {\n\tborder: 1px solid #ddd;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\twidth: 100%;\n}\n\n.testimonial-item p,\n.tip-item p {\n\tmargin: 10px 0;\n}\n\n.testimonial-item {\n\tfont-style: italic;\n}\n\n.tip-item a {\n\tcolor: #00796b;\n\ttext-decoration: none;\n\tmin-height: 44px;\n\tmin-width: 44px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n/* Detail Page */\n#restaurant-detail {\n\tpadding: 20px;\n\tmargin: 0 auto;\n\tbackground-color: #f9f9f9;\n\tborder-radius: 8px;\n\tbox-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n#restaurant-content h2 {\n\tfont-size: 2.2rem;\n\ttext-align: center;\n\tmargin-bottom: 40px;\n\tcolor: #333;\n}\n\n#restaurant-content img {\n\twidth: 100%;\n\tmax-width: 100%;\n\tborder-radius: 8px;\n\tmargin-bottom: 20px;\n}\n\n#restaurant-content p {\n\tfont-size: 1rem;\n\tline-height: 1.5;\n\tmargin-bottom: 15px;\n\tcolor: #555;\n}\n\n#restaurant-content h3,\n#restaurant-content h4,\n#review-container h3 {\n\tfont-size: 1.5rem;\n\tmargin-top: 20px;\n\tmargin-bottom: 10px;\n\tcolor: #444;\n\tborder-bottom: 2px solid #eee;\n\tpadding-bottom: 5px;\n}\n\n#restaurant-content ul {\n\tlist-style-type: disc;\n\tpadding-left: 20px;\n\tmargin-top: 10px;\n}\n\n#restaurant-content ul li {\n\tmargin-bottom: 10px;\n\tcolor: #333;\n}\n\n#favoriteButton {\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 15px;\n\tbackground-color: #ff5722;\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 5px;\n\ttext-align: center;\n\tfont-size: 1.2rem;\n\tcursor: pointer;\n\tmargin: 20px 0;\n\ttransition: background-color 0.3s;\n\tmin-height: 44px;\n\tmin-width: 44px;\n}\n\n#favoriteButton:hover {\n\tbackground-color: #e64a19;\n}\n\n/* Gaya untuk form review */\n#review-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 12px;\n\tmargin-top: 20px;\n\tpadding: 20px;\n\tborder: 1px solid #ccc;\n\tborder-radius: 5px;\n\tbackground-color: #f9f9f9;\n}\n\n#review-form input[type='text'],\n#review-form textarea {\n\tpadding: 10px;\n\tborder: 1px solid #ccc;\n\tborder-radius: 4px;\n}\n\n#review-form input[type='text']:focus,\n#review-form textarea:focus {\n\toutline: none;\n\tborder-color: #4caf50;\n}\n\n#review-form input[type='text'] {\n\tmin-height: 44px;\n}\n\n#review-form textarea {\n\tresize: none;\n\theight: 100px;\n}\n\n#review-form .button-container {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n\n#review-form button {\n\tbackground-color: #4caf50;\n\tmin-height: 44px;\n\tmin-width: 44px;\n\tcolor: white;\n\tpadding: 10px 15px;\n\tmargin-top: 12px;\n\tborder: none;\n\tborder-radius: 4px;\n\tcursor: pointer;\n\tfont-size: 16px;\n}\n\n#review-form button:hover {\n\tbackground-color: #45a049;\n}\n\n/* Gaya untuk alert */\n#alert-container {\n\tposition: fixed;\n\ttop: 20px;\n\tright: 20px;\n\tz-index: 1000;\n}\n\n.alert {\n\tpadding: 10px;\n\tmargin-bottom: 10px;\n\tborder-radius: 5px;\n\tcolor: white;\n}\n\n.alert-success {\n\tbackground-color: green;\n}\n\n.alert-error {\n\tbackground-color: red;\n}\n\n/*\n  Footer\n*/\n\nfooter {\n\tpadding: 32px;\n\tpadding-top: 0;\n}\n\nfooter .footer__copyright {\n\tmargin-top: 16px;\n\ttext-align: center;\n\tcolor: #aaaaaa;\n}\n\nfooter .footer__copyright .footer__name {\n\tcolor: #db0000;\n\tfont-weight: 600;\n}\n\nfooter #footerTools {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 8px;\n}\n\nfooter .btn {\n\tdisplay: inline-block;\n\tpadding: 12px 24px;\n\tbackground-color: #db0000;\n\tborder: 1px solid #770000;\n\tborder-radius: 4px;\n\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tcolor: #ffffff;\n\n\tcursor: pointer;\n\ttransition: 0.15s ease-in-out;\n}\n\nfooter .btn:hover {\n\tbackground-color: #db0000bb;\n}\nfooter .btn:active {\n\tbackground-color: #db0000dd;\n}\nfooter .btn:focus-visible {\n\toutline: 3px solid #db000055;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 76:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91bf5c4a50c73e706c25.jpg";

/***/ }),

/***/ 680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9241ee2eeff1068e8fe1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "restaurant-apps:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			524: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [96], () => (__webpack_require__(293)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map