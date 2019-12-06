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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
//
//
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
			type: String || Number,
			default: "auto"
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
			return Math.max.apply(null, this.computedLabel);
		}
	}
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib?sourceMap!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-48ad3e66","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/grid/grid.vue
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "si-grid" }, [_c('div', { staticClass: "si-grid-header" }, [_vm._t("header")], 2), _vm._v(" "), _c('div', { staticClass: "si-grid-body" }, [_vm._t("default")], 2), _vm._v(" "), _c('div', { staticClass: "si-grid-footer" }, [_vm._t("footer")], 2)]);
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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/grid/sub-grid.vue
//
//
//
//
//
//

/* harmony default export */ var sub_grid = ({
	name: "SiSubGrid",
	props: {
		data: {
			type: Object,
			default: function _default() {
				return {};
			}
		}
	}
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib?sourceMap!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-41100960","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/grid/sub-grid.vue
var sub_grid_render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "si-sub-grid" }, [_vm._t("default")], 2);
};
var sub_grid_staticRenderFns = [];
var sub_grid_esExports = { render: sub_grid_render, staticRenderFns: sub_grid_staticRenderFns };
/* harmony default export */ var grid_sub_grid = (sub_grid_esExports);
// CONCATENATED MODULE: ./src/components/grid/sub-grid.vue
var sub_grid_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var sub_grid___vue_template_functional__ = false
/* styles */
var sub_grid___vue_styles__ = null
/* scopeId */
var sub_grid___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var sub_grid___vue_module_identifier__ = null
var sub_grid_Component = sub_grid_normalizeComponent(
  sub_grid,
  grid_sub_grid,
  sub_grid___vue_template_functional__,
  sub_grid___vue_styles__,
  sub_grid___vue_scopeId__,
  sub_grid___vue_module_identifier__
)

/* harmony default export */ var components_grid_sub_grid = (sub_grid_Component.exports);

// CONCATENATED MODULE: ./src/components/sub-grid/index.js

/* harmony default export */ var components_sub_grid = (components_grid_sub_grid);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/grid/grid-item.vue
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

/* harmony default export */ var grid_item = ({
	name: "SiGridItem",
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
			    labelWidth = _grid.labelWidth,
			    computedLabelWidth = _grid.computedLabelWidth;

			var obj = {
				width: (labelWidth === "auto" ? computedLabelWidth : labelWidth) + "px",
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
			    labelWidth = _grid2.labelWidth,
			    computedLabelWidth = _grid2.computedLabelWidth;

			var obj = {
				textAlign: contentPosition,
				marginLeft: (labelWidth === "auto" ? computedLabelWidth : labelWidth) + "px",
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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib?sourceMap!./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0351b1ef","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/grid/grid-item.vue
var grid_item_render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "si-grid-item" }, [_c('div', { staticClass: "si-grid-item-title", style: _vm.labelStyle }, [_c('span', [_vm._v(_vm._s(_vm.label))])]), _vm._v(" "), _c('div', { staticClass: "si-grid-item-text", style: _vm.textStyle }, [_c('span', [_vm._v(_vm._s(_vm.grid.tempData[_vm.prop]))])])]);
};
var grid_item_staticRenderFns = [];
var grid_item_esExports = { render: grid_item_render, staticRenderFns: grid_item_staticRenderFns };
/* harmony default export */ var grid_grid_item = (grid_item_esExports);
// CONCATENATED MODULE: ./src/components/grid/grid-item.vue
var grid_item_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var grid_item___vue_template_functional__ = false
/* styles */
var grid_item___vue_styles__ = null
/* scopeId */
var grid_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var grid_item___vue_module_identifier__ = null
var grid_item_Component = grid_item_normalizeComponent(
  grid_item,
  grid_grid_item,
  grid_item___vue_template_functional__,
  grid_item___vue_styles__,
  grid_item___vue_scopeId__,
  grid_item___vue_module_identifier__
)

/* harmony default export */ var components_grid_grid_item = (grid_item_Component.exports);

// CONCATENATED MODULE: ./src/components/grid-item/index.js

/* harmony default export */ var components_grid_item = (components_grid_grid_item);
// CONCATENATED MODULE: ./src/index.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var components = [components_grid, components_sub_grid, components_grid_item];

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=siriusGrid.js.map