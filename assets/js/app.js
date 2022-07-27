/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/circle.js":
/*!*********************************!*\
  !*** ./src/assets/js/circle.js ***!
  \*********************************/
/***/ (function() {

eval("let options = {\n    startAngle: -1.55,\n    size: 150,\n    value: 0.85,\n    fill: {gradient: [\"#004389\", \"#eb0918\"]}\n}\n$(\".circle .bar\").circleProgress(options).on('circle-animation-progress', function(event, progress, stepValue){\n    // $(this).parent().find(\"span\").text(String(stepValue.toFixed(2).substr(1)))\n});\n$(\".opit .bar\").circleProgress({\n    value: 0.4\n});\n$(\".instr .bar\").circleProgress({\n    value: 0.8\n});\n$(\".proj .bar\").circleProgress({\n    value: 0.6\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/circle.js?");

/***/ }),

/***/ "./src/assets/js/coll.js":
/*!*******************************!*\
  !*** ./src/assets/js/coll.js ***!
  \*******************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/coll.js?");

/***/ }),

/***/ "./src/assets/js/faq.js":
/*!******************************!*\
  !*** ./src/assets/js/faq.js ***!
  \******************************/
/***/ (function() {

eval("document.querySelectorAll('.faq__item').forEach(icon => {\n    console.log('faq item');\n    icon.onmouseenter = () => {\n       \n        var childElement = icon.querySelector(\".fas\");\n        var subMen = icon.querySelector('.faq-reply');\n       \n        subMen.classList.toggle('active');\n        childElement.classList.toggle('fa-chevron-down');\n        childElement.classList.toggle('fa-chevron-up');\n        \n    }\n    icon.onmouseleave = () => {\n       \n        var childElement = icon.querySelector(\".fas\");\n        var subMen = icon.querySelector('.faq-reply');\n       \n        subMen.classList.toggle('active');\n        childElement.classList.toggle('fa-chevron-down');\n        childElement.classList.toggle('fa-chevron-up');\n        \n    }\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/faq.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/nav.js":
/*!******************************!*\
  !*** ./src/assets/js/nav.js ***!
  \******************************/
/***/ (function() {

eval("/*   NAV Toggle  on mobile   */\n    \nlet navToggle = $(\"#navToggle\");\nlet nav = $(\"#nav\");\n\nnavToggle.on(\"click\", function(event){\n    event.preventDefault();\n    $(this).toggleClass('active');\n    // console.log(nav);\n    nav.toggleClass('show');\n});\n\n$(window).on(\"resize, scroll\", function(){\n    navToggle.removeClass('active');\n    nav.removeClass('show');\n    // console.log(nav);\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/nav.js?");

/***/ }),

/***/ "./src/assets/js/owl.js":
/*!******************************!*\
  !*** ./src/assets/js/owl.js ***!
  \******************************/
/***/ (function() {

eval("console.log('HELLO OWWWL');\nconst owl = $('.owl-carousel');\nowl.owlCarousel({\n    center:true,\n    loop:true,\n    margin:10,\n    startPosition:1,\n    items: 5,\n    responsive:{\n        0:{\n            margin:30,\n            items: 1\n        },\n      \n        850:{\n            \n            items: 2,\n            \n        },\n        1000:{\n           items: 3,\n           \n        },\n        1269:{\n            items: 5,\n        }\n    }\n\n});\n// Go to the previous item\n$('.slider__btn--prev').click(function() {\n    // With optional speed parameter\n    // Parameters has to be in square bracket '[]'\n    owl.trigger('prev.owl.carousel', [300]);\n})\n// Go to the next item\n$('.slider__btn--next').click(function() {\n    owl.trigger('next.owl.carousel');\n})\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/owl.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/circle.js"]();
/******/ 	__webpack_modules__["./src/assets/js/coll.js"]();
/******/ 	__webpack_modules__["./src/assets/js/faq.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	__webpack_modules__["./src/assets/js/nav.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/owl.js"]();
/******/ 	
/******/ })()
;