/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/also/also.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/also/also.js ***!
  \*****************************************/
/***/ (() => {

var swiper = new Swiper('.js-also-swiper', {
  slidesPerView: 1.2,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/article/article.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/article/article.js ***!
  \***********************************************/
/***/ (() => {

var swiper = new Swiper('.js-article-swiper', {
  hashNavigation: true,
  slidesPerView: 1.2,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  history: {
    replaceState: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2
    },
    992: {
      slidesPerView: 3.2
    },
    1240: {
      slidesPerView: 4.2
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/benefits/benefits.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/benefits/benefits.js ***!
  \*************************************************/
/***/ (() => {

var swiper = new Swiper('.js-benefits-swiper', {
  slidesPerView: 1.2,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  }
});

/***/ }),

/***/ "./src/blocks/modules/filter/filter.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/filter/filter.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var $flTab = $('.js-filter-head');
  $flTab.on('click', function () {
    var $this = $(this);
    $this.toggleClass('is-active').next().fadeToggle();
  });
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var $accordionFooter = $('.js-footer-accordion');
  if (!$accordionFooter.length) return;
  $accordionFooter.on("click", function () {
    var that = $(this);
    var nextEl = that.next();
    var nextHeight = nextEl[0].scrollHeight;
    that.toggleClass("footer__col-head_active");
    if (that.hasClass("footer__col-head_active")) {
      return nextEl.css({
        "max-height": nextHeight,
        overflow: "visible",
        opacity: 1
      });
    }
    nextEl.css({
      "max-height": 0,
      overflow: "hidden",
      opacity: 0
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var $headerBurger = $(".js-header-burger");
  var $body = $("body");
  var $headerMenu = $(".js-header-menu");
  $headerBurger.on("click", function () {
    var that = $(this);
    that.toggleClass("is-active").parents('.header').toggleClass('is-show');
    $headerMenu.toggleClass("is-show");
    if ($body.css("overflow") === "hidden") {
      $body.css("overflow", "visible");
    } else {
      $body.css("overflow", "hidden");
    }
  });
  $headerMenu.on("click", "a", function () {
    $headerBurger.removeClass("is-active").parents('.header').removeClass('is-show');
    $headerMenu.removeClass("is-show");
    $body.css("overflow", "visible");
    $body.removeClass("is-active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/***/ (() => {

var $jsFancy = $('.js-fancy');
$jsFancy.on('click', function (e) {
  e.preventDefault();
  Fancybox.show([{
    src: e.currentTarget.dataset.src || e.currentTarget.getAttribute('data-src'),
    type: "inline"
  }]);
});

/***/ }),

/***/ "./src/blocks/modules/personal/personal.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/personal/personal.js ***!
  \*************************************************/
/***/ (() => {

$(function () {
  var $accordionPersonal = $('.js-personal-accordion');
  if (!$accordionPersonal.length) return;
  $accordionPersonal.on("click", function () {
    var that = $(this);
    var nextEl = that.next();
    var nextHeight = nextEl[0].scrollHeight;
    that.toggleClass("personal__head_active");
    if (that.hasClass("personal__head_active")) {
      return nextEl.css({
        "max-height": nextHeight,
        overflow: "visible",
        opacity: 1
      });
    }
    nextEl.css({
      "max-height": 0,
      overflow: "hidden",
      opacity: 0
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/select/select.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/select/select.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var $select = $('.js-select');
  if (!$select.length) return;
  $select.each(function (_, select) {
    var $that = $(select);
    var _$that$data = $that.data(),
      placeholder = _$that$data.placeholder;
    $that.select2({
      placeholder: placeholder,
      width: null
    });
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_benefits_benefits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/benefits/benefits */ "./src/blocks/modules/benefits/benefits.js");
/* harmony import */ var _modules_benefits_benefits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_benefits_benefits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_article_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/article/article */ "./src/blocks/modules/article/article.js");
/* harmony import */ var _modules_article_article__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_article_article__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/select/select */ "./src/blocks/modules/select/select.js");
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_select_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_also_also__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/also/also */ "./src/blocks/modules/also/also.js");
/* harmony import */ var _modules_also_also__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_also_also__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_personal_personal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/personal/personal */ "./src/blocks/modules/personal/personal.js");
/* harmony import */ var _modules_personal_personal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_personal_personal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_filter_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/filter/filter */ "./src/blocks/modules/filter/filter.js");
/* harmony import */ var _modules_filter_filter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_filter_filter__WEBPACK_IMPORTED_MODULE_8__);










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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map