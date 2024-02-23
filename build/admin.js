/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);








const OptionsPage = () => {
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [CustomSettings, setCustomSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isSuccess, setIsSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [provider, setProvider] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [lists, setLists] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [apiSettings, setApiSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    api_key: '',
    secret_key: ''
  });
  const handleKeyChange = (key, newValue) => {
    console.log(newValue);
    setApiSettings({
      ...apiSettings,
      [key]: newValue
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchSettings = async () => {
      const results = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: 'plugin-name/v1/settings'
      });
      console.log(results);
      const lists = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: 'plugin-name/v1/lists'
      });
      setLists(lists);
      setApiSettings(results);
      setIsLoading(false);
    };
    fetchSettings().catch(error => {
      console.error(error);
    });
  }, []);
  const handleSubmit = async event => {
    setIsSubmitting(true);
    event.preventDefault();
    console.log(apiSettings);
    const results = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: 'plugin-name/v1/settings',
      method: 'POST',
      data: {
        apiSettings
      }
    });
    console.log(results.apiSettings);
    setApiSettings(results.apiSettings);
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };
  let buttonText = 'Save';
  if (isSubmitting) {
    buttonText = 'Saving...';
  } else if (isSuccess) {
    buttonText = 'Options Saved!';
  }
  const defaultOption = {
    label: "- Choose List -",
    value: ""
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Options Page', 'wop')), isLoading ? 'Loading..' : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    style: {
      maxWidth: '500px'
    },
    onSubmit: handleSubmit
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Mailing List Provider",
    value: apiSettings.provider,
    options: [{
      label: 'Mailchimp',
      value: 'mc'
    }, {
      label: 'ConvertKit',
      value: 'ck'
    }, {
      label: 'MailerLite',
      value: 'ml'
    }],
    onChange: newValue => handleKeyChange('provider', newValue)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('API Key', 'wop'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This is a custom field.', 'wop'),
    value: apiSettings.api_key,
    onChange: newValue => handleKeyChange('api_key', newValue),
    disabled: isLoading
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Secret Key', 'wop'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This is a custom field.', 'wop'),
    value: apiSettings.secret_key,
    onChange: newValue => handleKeyChange('secret_key', newValue),
    disabled: isLoading
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Mailing List",
    value: apiSettings.list_id,
    options: [defaultOption, ...lists.map(option => ({
      label: option.name,
      value: option.id
    }))],
    onChange: newValue => handleKeyChange('list_id', newValue)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    type: "submit",
    isBusy: isSubmitting,
    isPressed: isSubmitting,
    disabled: isLoading
  }, buttonText))))));
};
const rootElement = document.getElementById('wop-admin-page');
if (rootElement) {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(rootElement).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(OptionsPage, null));
}
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map