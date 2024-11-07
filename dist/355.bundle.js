"use strict";
(self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || []).push([[355],{

/***/ 355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var NavlinkInitiator = {
  init: function init(_ref) {
    var _this = this;
    var navlinks = _ref.navlinks,
      drawer = _ref.drawer,
      backdrop = _ref.backdrop;
    navlinks.forEach(function (navlink) {
      navlink.addEventListener('click', function (event) {
        _this._toggleNavlink(event, drawer, backdrop);
      });
    });
  },
  _toggleNavlink: function _toggleNavlink(event, drawer, backdrop) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    if (drawer.classList.contains('open')) {
      backdrop.classList.add('active');
    } else {
      backdrop.classList.remove('active');
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavlinkInitiator);

/***/ })

}]);
//# sourceMappingURL=355.bundle.js.map