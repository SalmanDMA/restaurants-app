"use strict";
(self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || []).push([[102],{

/***/ 102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ footer_initiator)
});

;// ./src/scripts/utils/notification-helper.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var NotificationHelper = {
  sendNotification: function sendNotification(_ref) {
    var title = _ref.title,
      options = _ref.options;
    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }
    if (!this._checkPermission()) {
      console.log('User did not yet granted permission');
      this._requestPermission();
      return;
    }
    this._showNotification({
      title: title,
      options: options
    });
  },
  _checkAvailability: function _checkAvailability() {
    return 'Notification' in window;
  },
  _checkPermission: function _checkPermission() {
    return Notification.permission === 'granted';
  },
  _requestPermission: function _requestPermission() {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var status;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Notification.requestPermission();
          case 2:
            status = _context.sent;
            if (status === 'denied') {
              console.log('Notification Denied');
            }
            if (status === 'default') {
              console.log('Permission closed');
            }
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  _showNotification: function _showNotification(_ref2) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var title, options, serviceWorkerRegistration;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            title = _ref2.title, options = _ref2.options;
            _context2.next = 3;
            return navigator.serviceWorker.ready;
          case 3:
            serviceWorkerRegistration = _context2.sent;
            serviceWorkerRegistration.showNotification(title, options);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ const notification_helper = (NotificationHelper);
// EXTERNAL MODULE: ./src/scripts/globals/config.js
var config = __webpack_require__(733);
;// ./src/scripts/utils/footer-initiator.js
function footer_initiator_typeof(o) { "@babel/helpers - typeof"; return footer_initiator_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, footer_initiator_typeof(o); }
function footer_initiator_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ footer_initiator_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == footer_initiator_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(footer_initiator_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function footer_initiator_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function footer_initiator_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { footer_initiator_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { footer_initiator_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var FooterInitiator = {
  init: function init(_ref) {
    var _this = this;
    return footer_initiator_asyncToGenerator(/*#__PURE__*/footer_initiator_regeneratorRuntime().mark(function _callee() {
      var copyright, subscribeButton, unsubscribeButton, currentYear;
      return footer_initiator_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            copyright = _ref.copyright, subscribeButton = _ref.subscribeButton, unsubscribeButton = _ref.unsubscribeButton;
            currentYear = new Date().getFullYear();
            copyright.innerHTML = "\n      <p class=\"footer__copyright\">Copyright &copy; ".concat(currentYear, " <span class=\"footer__name\">Restaurant Catalogue</span></p>\n    ");
            _this._subscribeButton = subscribeButton;
            _this._unsubscribeButton = unsubscribeButton;
            _this._registrationServiceWorker = null;

            // if ('serviceWorker' in navigator) {
            //   this._registrationServiceWorker = await navigator.serviceWorker.getRegistration();
            // }

            // await this._initialListener();
            // await this._initialState();
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  _initialListener: function _initialListener() {
    var _this2 = this;
    return footer_initiator_asyncToGenerator(/*#__PURE__*/footer_initiator_regeneratorRuntime().mark(function _callee2() {
      return footer_initiator_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _this2._subscribeButton.addEventListener('click', function (event) {
              _this2._subscribePushMessage(event);
            });
            _this2._unsubscribeButton.addEventListener('click', function (event) {
              _this2._unsubscribePushMessage(event);
            });
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  _initialState: function _initialState() {
    var _this3 = this;
    return footer_initiator_asyncToGenerator(/*#__PURE__*/footer_initiator_regeneratorRuntime().mark(function _callee3() {
      return footer_initiator_regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _this3._showSubscribeButton();
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  _subscribePushMessage: function _subscribePushMessage(event) {
    var _this4 = this;
    return footer_initiator_asyncToGenerator(/*#__PURE__*/footer_initiator_regeneratorRuntime().mark(function _callee4() {
      var _this4$_registrationS;
      var pushSubscription;
      return footer_initiator_regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            event.stopPropagation();
            _context4.next = 3;
            return _this4._isCurrentSubscriptionAvailable();
          case 3:
            if (!_context4.sent) {
              _context4.next = 6;
              break;
            }
            window.alert('Already subscribe to push message');
            return _context4.abrupt("return");
          case 6:
            _context4.next = 8;
            return _this4._isNotificationReady();
          case 8:
            if (_context4.sent) {
              _context4.next = 11;
              break;
            }
            console.log('Notification isn\'t available');
            return _context4.abrupt("return");
          case 11:
            console.log('_subscribePushMessage: Subscribing to push message...');
            _context4.next = 14;
            return (_this4$_registrationS = _this4._registrationServiceWorker) === null || _this4$_registrationS === void 0 ? void 0 : _this4$_registrationS.pushManager.subscribe(_this4._generateSubscribeOptions());
          case 14:
            pushSubscription = _context4.sent;
            if (pushSubscription) {
              _context4.next = 18;
              break;
            }
            console.log('Failed to subscribe push message');
            return _context4.abrupt("return");
          case 18:
            _context4.prev = 18;
            _context4.next = 21;
            return _this4._sendPostToServer(config/* default */.A.PUSH_MSG_SUBSCRIBE_URL, pushSubscription);
          case 21:
            console.log('Push message has been subscribed');
            _context4.next = 29;
            break;
          case 24:
            _context4.prev = 24;
            _context4.t0 = _context4["catch"](18);
            console.error('Failed to store push notification data to server:', _context4.t0.message);

            // Undo subscribing push notification
            _context4.next = 29;
            return pushSubscription === null || pushSubscription === void 0 ? void 0 : pushSubscription.unsubscribe();
          case 29:
            _this4._showSubscribeButton();
          case 30:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[18, 24]]);
    }))();
  },
  _unsubscribePushMessage: function _unsubscribePushMessage(event) {
    var _this5 = this;
    return footer_initiator_asyncToGenerator(/*#__PURE__*/footer_initiator_regeneratorRuntime().mark(function _callee5() {
      var _this5$_registrationS;
      var pushSubscription, isHasBeenUnsubscribed;
      return footer_initiator_regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            event.stopPropagation();
            _context5.next = 3;
            return (_this5$_registrationS = _this5._registrationServiceWorker) === null || _this5$_registrationS === void 0 ? void 0 : _this5$_registrationS.pushManager.getSubscription();
          case 3:
            pushSubscription = _context5.sent;
            if (pushSubscription) {
              _context5.next = 7;
              break;
            }
            window.alert('Haven\'t subscribing to push message');
            return _context5.abrupt("return");
          case 7:
            _context5.prev = 7;
            _context5.next = 10;
            return _this5._sendPostToServer(config/* default */.A.PUSH_MSG_UNSUBSCRIBE_URL, pushSubscription);
          case 10:
            _context5.next = 12;
            return pushSubscription.unsubscribe();
          case 12:
            isHasBeenUnsubscribed = _context5.sent;
            console.log('isHasBeenUnsubscribed: ', isHasBeenUnsubscribed);
            if (isHasBeenUnsubscribed) {
              _context5.next = 19;
              break;
            }
            console.log('Failed to unsubscribe push message');
            _context5.next = 18;
            return _this5._sendPostToServer(config/* default */.A.PUSH_MSG_SUBSCRIBE_URL, pushSubscription);
          case 18:
            return _context5.abrupt("return");
          case 19:
            console.log('Push message has been unsubscribed');
            _context5.next = 25;
            break;
          case 22:
            _context5.prev = 22;
            _context5.t0 = _context5["catch"](7);
            console.error('Failed to erase push notification data from server:', _context5.t0.message);
          case 25:
            _this5._showSubscribeButton();
          case 26:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[7, 22]]);
    }))();
  },
  _urlB64ToUint8Array: function _urlB64ToUint8Array(base64String) {
    // eslint-disable-next-line no-mixed-operators
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    // eslint-disable-next-line no-plusplus
    for (var i = 0; i < rawData.length; i++) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  },
  _generateSubscribeOptions: function _generateSubscribeOptions() {
    return {
      userVisibleOnly: true,
      applicationServerKey: this._urlB64ToUint8Array(config/* default */.A.PUSH_MSG_VAPID_PUBLIC_KEY)
    };
  },
  _sendPostToServer: function _sendPostToServer(url, data) {
    return footer_initiator_asyncToGenerator(/*#__PURE__*/footer_initiator_regeneratorRuntime().mark(function _callee6() {
      var response;
      return footer_initiator_regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
          case 2:
            response = _context6.sent;
            return _context6.abrupt("return", response.json());
          case 4:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  },
  _isSubscribedToServerForHiddenSubscribeButton: function _isSubscribedToServerForHiddenSubscribeButton() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (state) {
      this._subscribeButton.style.display = 'none';
      this._unsubscribeButton.style.display = 'inline-block';
    } else {
      this._subscribeButton.style.display = 'inline-block';
      this._unsubscribeButton.style.display = 'none';
    }
  },
  _isCurrentSubscriptionAvailable: function _isCurrentSubscriptionAvailable() {
    var _this6 = this;
    return footer_initiator_asyncToGenerator(/*#__PURE__*/footer_initiator_regeneratorRuntime().mark(function _callee7() {
      var _this6$_registrationS;
      var checkSubscription;
      return footer_initiator_regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (_this6$_registrationS = _this6._registrationServiceWorker) === null || _this6$_registrationS === void 0 ? void 0 : _this6$_registrationS.pushManager.getSubscription();
          case 2:
            checkSubscription = _context7.sent;
            return _context7.abrupt("return", Boolean(checkSubscription));
          case 4:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))();
  },
  _isNotificationReady: function _isNotificationReady() {
    return footer_initiator_asyncToGenerator(/*#__PURE__*/footer_initiator_regeneratorRuntime().mark(function _callee8() {
      var status;
      return footer_initiator_regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if (notification_helper._checkAvailability()) {
              _context8.next = 3;
              break;
            }
            console.log('Notification not supported in this browser');
            return _context8.abrupt("return", false);
          case 3:
            if (notification_helper._checkPermission()) {
              _context8.next = 14;
              break;
            }
            console.log('User did not granted the notification permission yet');
            _context8.next = 7;
            return Notification.requestPermission();
          case 7:
            status = _context8.sent;
            if (!(status === 'denied')) {
              _context8.next = 11;
              break;
            }
            window.alert('Cannot subscribe to push message because the status of notification permission is denied');
            return _context8.abrupt("return", false);
          case 11:
            if (!(status === 'default')) {
              _context8.next = 14;
              break;
            }
            window.alert('Cannot subscribe to push message because the status of notification permission is ignored');
            return _context8.abrupt("return", false);
          case 14:
            return _context8.abrupt("return", true);
          case 15:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }))();
  },
  _showSubscribeButton: function _showSubscribeButton() {
    var _this7 = this;
    return footer_initiator_asyncToGenerator(/*#__PURE__*/footer_initiator_regeneratorRuntime().mark(function _callee9() {
      return footer_initiator_regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.t0 = _this7;
            _context9.next = 3;
            return _this7._isCurrentSubscriptionAvailable();
          case 3:
            _context9.t1 = _context9.sent;
            _context9.t0._isSubscribedToServerForHiddenSubscribeButton.call(_context9.t0, _context9.t1);
          case 5:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }))();
  }
};
/* harmony default export */ const footer_initiator = (FooterInitiator);

/***/ })

}]);
//# sourceMappingURL=102.bundle.js.map