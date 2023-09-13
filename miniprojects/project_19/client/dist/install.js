/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById(\"buttonInstall\");\n\nwindow.addEventListener('beforeinstallprompt', (event) => {\n    window.deferredPrompt = event;\n    butInstall.classList.toggle('hidden', false);\n  });\n\nbutInstall.addEventListener('click', async () => {\n  \n  const promptEvent = window.deferredPrompt;\n\n  if (!promptEvent) {\n   return;\n  }\n\n  promptEvent.prompt();\n  \n  window.deferredPrompt = null;\n  \n  butInstall.classList.toggle('hidden', true);\n});\n\nwindow.addEventListener('appinstalled', (event) => {\n  \n  window.deferredPrompt = null;\n}); \n\n\n//# sourceURL=webpack://Contact/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;