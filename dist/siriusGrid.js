(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("siriusGrid", [], factory);
	else if(typeof exports === 'object')
		exports["siriusGrid"] = factory();
	else
		root["siriusGrid"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/grid/grid.vue
//
//
//
//
//
//

/* harmony default export */ var grid = ({
	name: "SiGrid",
	provide: function provide() {
		return {
			grid: this
		};
	},

	props: {
		tempData: {
			type: Object,
			default: function _default() {
				return {};
			}
		},
		labelWidth: {
			type: Number
		},
		labelBackground: {
			type: String,
			default: "#eee"
		},
		labelPosition: {
			type: String,
			default: "right",
			validator: function validator(val) {
				return !val || ["left", "center", "right"].includes(val);
			}
		},
		labelColor: {
			type: String
		},
		contentBackground: {
			type: String,
			default: "#fff"
		},
		contentPosition: {
			type: String,
			default: "left",
			validator: function validator(val) {
				return !val || ["left", "center", "right"].includes(val);
			}
		},
		contentColor: {
			type: String
		}
	},
	data: function data() {
		return {
			computedLabel: []
		};
	},

	methods: {
		setLabelWidth: function setLabelWidth(val) {
			this.computedLabel.push(val);
		},
		registerLabelWidth: function registerLabelWidth(val) {
			var index = this.computedLabel.indexOf(val);
			this.computedLabel.splice(index, 1);
		}
	},
	computed: {
		computedLabelWidth: function computedLabelWidth() {
			return this.labelWidth ? this.labelWidth : Math.max.apply(null, this.computedLabel);
		}
	}
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib?sourceMap!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-51272de2","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/grid/grid.vue
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "si-grid" }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ var grid_grid = (esExports);
// CONCATENATED MODULE: ./src/components/grid/grid.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  grid,
  grid_grid,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_grid_grid = (Component.exports);

// CONCATENATED MODULE: ./src/components/grid/index.js

/* harmony default export */ var components_grid = (components_grid_grid);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/grid/grid-row.vue
//
//
//
//
//
//

/* harmony default export */ var grid_row = ({
    name: "SiGridRow"
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib?sourceMap!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f6849c66","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/grid/grid-row.vue
var grid_row_render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "gridRow", staticClass: "si-grid-row" }, [_vm._t("default")], 2);
};
var grid_row_staticRenderFns = [];
var grid_row_esExports = { render: grid_row_render, staticRenderFns: grid_row_staticRenderFns };
/* harmony default export */ var grid_grid_row = (grid_row_esExports);
// CONCATENATED MODULE: ./src/components/grid/grid-row.vue
function injectStyle (ssrContext) {
  __webpack_require__(4)
}
var grid_row_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var grid_row___vue_template_functional__ = false
/* styles */
var grid_row___vue_styles__ = injectStyle
/* scopeId */
var grid_row___vue_scopeId__ = "data-v-f6849c66"
/* moduleIdentifier (server only) */
var grid_row___vue_module_identifier__ = null
var grid_row_Component = grid_row_normalizeComponent(
  grid_row,
  grid_grid_row,
  grid_row___vue_template_functional__,
  grid_row___vue_styles__,
  grid_row___vue_scopeId__,
  grid_row___vue_module_identifier__
)

/* harmony default export */ var components_grid_grid_row = (grid_row_Component.exports);

// CONCATENATED MODULE: ./src/components/grid-row/index.js

/* harmony default export */ var components_grid_row = (components_grid_grid_row);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/grid/grid-col.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var grid_col = ({
	name: "SiGridCol",
	inject: ["grid"],
	props: {
		prop: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		}
	},
	computed: {
		labelStyle: function labelStyle() {
			var _grid = this.grid,
			    labelBackground = _grid.labelBackground,
			    labelPosition = _grid.labelPosition,
			    labelColor = _grid.labelColor,
			    computedLabelWidth = _grid.computedLabelWidth;

			var obj = {
				width: computedLabelWidth + "px",
				background: labelBackground,
				textAlign: labelPosition,
				color: labelColor
			};
			return obj;
		},
		textStyle: function textStyle() {
			var _grid2 = this.grid,
			    contentBackground = _grid2.contentBackground,
			    contentPosition = _grid2.contentPosition,
			    contentColor = _grid2.contentColor,
			    computedLabelWidth = _grid2.computedLabelWidth;

			var obj = {
				textAlign: contentPosition,
				marginLeft: computedLabelWidth + "px",
				background: contentBackground,
				color: contentColor
			};
			return obj;
		}
	},
	methods: {
		getLabelWidth: function getLabelWidth() {
			var width = window.getComputedStyle(this.$el.firstElementChild).width;
			return Math.ceil(parseFloat(width));
		},
		updateLabelWidth: function updateLabelWidth() {
			var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "update";

			if (action === "update") {
				this.grid.setLabelWidth(this.getLabelWidth());
			} else if (action === "remove") {
				this.grid.registerLabelWidth(this.getLabelWidth());
			}
		}
	},
	mounted: function mounted() {
		this.updateLabelWidth("update");
	},
	beforeDestroy: function beforeDestroy() {
		this.updateLabelWidth("remove");
	}
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib?sourceMap!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c1edcb52","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/grid/grid-col.vue
var grid_col_render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "si-grid-col" }, [_c('div', { staticClass: "si-grid-col-title", style: _vm.labelStyle }, [_vm._v("\n\t\t" + _vm._s(_vm.label) + "\n\t")]), _vm._v(" "), _c('div', { staticClass: "si-grid-col-text", style: _vm.textStyle }, [_c('span', [_vm._v(_vm._s(_vm.grid.tempData[_vm.prop]))])])]);
};
var grid_col_staticRenderFns = [];
var grid_col_esExports = { render: grid_col_render, staticRenderFns: grid_col_staticRenderFns };
/* harmony default export */ var grid_grid_col = (grid_col_esExports);
// CONCATENATED MODULE: ./src/components/grid/grid-col.vue
function grid_col_injectStyle (ssrContext) {
  __webpack_require__(7)
}
var grid_col_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var grid_col___vue_template_functional__ = false
/* styles */
var grid_col___vue_styles__ = grid_col_injectStyle
/* scopeId */
var grid_col___vue_scopeId__ = "data-v-c1edcb52"
/* moduleIdentifier (server only) */
var grid_col___vue_module_identifier__ = null
var grid_col_Component = grid_col_normalizeComponent(
  grid_col,
  grid_grid_col,
  grid_col___vue_template_functional__,
  grid_col___vue_styles__,
  grid_col___vue_scopeId__,
  grid_col___vue_module_identifier__
)

/* harmony default export */ var components_grid_grid_col = (grid_col_Component.exports);

// CONCATENATED MODULE: ./src/components/grid-col/index.js

/* harmony default export */ var components_grid_col = (components_grid_grid_col);
// CONCATENATED MODULE: ./src/index.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var components = [components_grid, components_grid_row, components_grid_col];

var install = function install() {
	var Vue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (install.installed) {
		return;
	}
	components.forEach(function (component) {
		Vue.component(component.name, component);
	});
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue);
}

var API = _extends({
	version: '0.1.0',
	install: install
}, components);

/* harmony default export */ var src = __webpack_exports__["default"] = (API);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0c058b18", content, true, {});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".si-grid-row[data-v-f6849c66]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap}.si-grid-row>.si-grid-col[data-v-f6849c66]{-webkit-box-flex:1;-ms-flex:1;flex:1}.si-grid-row+.si-grid-row[data-v-f6849c66]{margin-top:-1px}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1a68fc67", content, true, {});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".si-grid-col[data-v-c1edcb52]{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #dcdfe6}.si-grid-col .si-grid-col-title[data-v-c1edcb52]{float:left;border-right:1px solid #dcdfe6}.si-grid-col .si-grid-col-text[data-v-c1edcb52],.si-grid-col .si-grid-col-title[data-v-c1edcb52]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px}.si-grid-col+.si-grid-col[data-v-c1edcb52]{margin-left:-1px}", ""]);

// exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=siriusGrid.js.map