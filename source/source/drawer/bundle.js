(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsDrawer */ "./src/jsDrawer.js");
/* harmony import */ var _jsDrawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jsDrawer__WEBPACK_IMPORTED_MODULE_0__);

var drawer = new _jsDrawer__WEBPACK_IMPORTED_MODULE_0___default.a({
  container: document.body,
  width: document.body.clientWidth,
  height: document.body.clientHeight,
  loop: 3000,
  size: 1,
  speed: 20,
  color: '#000000',
  toolBar: true
}); // drawer.setColor('red');
// drawer.setSize('20');
// drawer.setState('pencil');
// setTimeout(() => {
//     drawer.animate();
// }, 5000);

/***/ }),

/***/ "./src/jsDrawer.js":
/*!*************************!*\
  !*** ./src/jsDrawer.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./style.css */ "./src/style.css");

Drawer.prototype.setStyles = function (target, styles) {
  for (var key in styles) {
    if (styles.hasOwnProperty(key)) {
      target.style[key] = styles[key];
    }
  }
};

Drawer.prototype.createToolBar = function () {
  var self = this;
  var con = this.container;
  var btnStyles = {
    border: 'none',
    height: '30px',
    padding: '0 5px',
    margin: '5px',
    borderRadius: '5px',
    boxShadow: '0 0 4px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    outline: 'none'
  };
  var inputStyles = {
    height: '30px',
    borderRadius: '5px',
    margin: '5px',
    border: 'none',
    boxShadow: 'inset 0 0 4px rgba(0,0,0,0.5)',
    paddingLeft: '5px',
    width: '50px',
    outline: 'none'
  };
  var btnHoverStyles = "\n            #tools button:hover{\n                background: #c7c1c1;\n            }\n            #tools .active{\n                background: #c7c1c1;\n            }\n        ";
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(btnHoverStyles));
  document.getElementsByTagName('head')[0].appendChild(style); // tools

  var tools = document.createElement('div');
  tools.setAttribute('id', 'tools');
  con.appendChild(tools);
  this.setStyles(tools, {
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }); // pencil

  var pencil = document.createElement('button');
  pencil.setAttribute('id', 'pencil');
  pencil.setAttribute('class', 'active');
  tools.appendChild(pencil);
  pencil.innerText = 'Pencil';
  this.setStyles(pencil, btnStyles); // pen

  var pen = document.createElement('button');
  pen.setAttribute('id', 'pen');
  tools.appendChild(pen);
  pen.innerText = 'Pen';
  this.setStyles(pen, btnStyles); // rect

  var rect = document.createElement('button');
  rect.setAttribute('id', 'rect');
  tools.appendChild(rect);
  rect.innerText = 'Rect';
  this.setStyles(rect, btnStyles); // clear

  var clear = document.createElement('button');
  clear.setAttribute('id', 'clear');
  tools.appendChild(clear);
  clear.innerText = 'Clear';
  this.setStyles(clear, btnStyles); // clear

  var preview = document.createElement('button');
  preview.setAttribute('id', 'preview');
  tools.appendChild(preview);
  preview.innerText = 'Run';
  this.setStyles(preview, btnStyles); // color

  var color = document.createElement('input');
  color.setAttribute('id', 'color');
  color.setAttribute('type', 'color');
  tools.appendChild(color);
  color.innerText = 'Color';
  this.setStyles(color, btnStyles); // size

  var sizeText = document.createTextNode('Size ');
  tools.appendChild(sizeText);
  var size = document.createElement('input');
  size.setAttribute('id', 'size');
  size.setAttribute('placeholder', 'Size');
  size.setAttribute('value', this.size);
  tools.appendChild(size);
  size.innerText = 'Size';
  this.setStyles(size, inputStyles); // speed

  var speedText = document.createTextNode('Speed ');
  tools.appendChild(speedText);
  var speed = document.createElement('input');
  speed.setAttribute('id', 'speed');
  speed.setAttribute('placeholder', 'Speed');
  speed.setAttribute('value', this.speed);
  tools.appendChild(speed);
  speed.innerText = 'Speed';
  this.setStyles(speed, inputStyles); // loop

  var loopText = document.createTextNode('Loop ');
  tools.appendChild(loopText);
  var loop = document.createElement('input');
  loop.setAttribute('id', 'loop');
  loop.setAttribute('placeholder', 'loop');
  loop.setAttribute('value', this.loop);
  tools.appendChild(loop);
  loop.innerText = 'Loop';
  this.setStyles(loop, inputStyles);
  size.addEventListener('change', function (e) {
    self.sizeHandler.call(self, e);
  });
  speed.addEventListener('change', function (e) {
    self.speedHandler.call(self, e);
  });
  loop.addEventListener('change', function (e) {
    self.loopHandler.call(self, e);
  });
  color.addEventListener('change', function (e) {
    self.colorHandler.call(self, e);
  });
  clear.addEventListener('click', function (e) {
    self.clearAll.call(self, e);
  });
  pen.addEventListener('click', function (e) {
    self.penClickHandler.call(self, e);
    pencil.classList.remove('active');
    rect.classList.remove('active');
    pen.classList.add('active');
  });
  pencil.addEventListener('click', function (e) {
    self.pencilClickHandler.call(self, e);
    pen.classList.remove('active');
    rect.classList.remove('active');
    pencil.classList.add('active');
  });
  rect.addEventListener('click', function (e) {
    self.rectClickHandler.call(self, e);
    pen.classList.remove('active');
    pencil.classList.remove('active');
    rect.classList.add('active');
  });
  preview.addEventListener('click', function (e) {
    self.animate.call(self, e);
  });
};

Drawer.prototype.rectClickHandler = function (e) {
  this.state = 'rect';
  console.log(this.state);
};

Drawer.prototype.typeHandler = function (e) {
  this.type = e.target.value;
};

Drawer.prototype.animate = function () {
  this.drawRun(this.preCtx);
};

Drawer.prototype.colorHandler = function (e) {
  this.color = e.target.value;
};

Drawer.prototype.sizeHandler = function (e) {
  this.size = e.target.value;
};

Drawer.prototype.speedHandler = function (e) {
  this.speed = e.target.value;
};

Drawer.prototype.loopHandler = function (e) {
  this.loop = e.target.value;
};

Drawer.prototype.clearAll = function () {
  this.stop = true;
  this.clearTimer();
  this.dataStore = [];
  this.fontStore = [];
  this.colorStore = [];
  this.drawing = false;
  this.lastPoint = true;
  this.ctx.clearRect(0, 0, this.width, this.height);
};

Drawer.prototype.clearCanvas = function (ctx) {
  ctx.clearRect(0, 0, this.width, this.height);
};

Drawer.prototype.setStrokeStyles = function (ctx, i, colorStore, fontStore) {
  ctx.strokeStyle = colorStore[i];
};

Drawer.prototype.getNumber = function (str) {
  return Number.parseInt(str);
};

Drawer.prototype.clickHandler = function (e) {
  this.stop = true;
  this.clearTimer();

  if (this.state === 'pen') {
    if (this.lastPoint) {
      this.dataStore.push([]);
      this.typeStore.push('line');
      this.lastPoint = false;
      this.colorStore.push(this.color);
      this.fontStore.push(this.size);
    }

    var currentPath = this.dataStore[this.dataStore.length - 1];

    if (currentPath.length > 0) {
      var fromPoint = currentPath[currentPath.length - 1];
      var points = this.createPoints(10, fromPoint, [e.offsetX, e.offsetY]);
      this.dataStore[this.dataStore.length - 1] = currentPath.concat(points);
    }

    currentPath.push([e.offsetX, e.offsetY]);
    this.draw(this.ctx);
  } else if (this.state === 'pencil') {}
};

Drawer.prototype.createPoints = function (n, from, to) {
  var offX = (to[0] - from[0]) / n;
  var offY = (to[1] - from[1]) / n;
  var points = [];

  for (var i = 1; i < n; i++) {
    points.push([from[0] + offX * i, from[1] + offY * i]);
  }

  return points;
};

Drawer.prototype.dblClickHandler = function (e) {
  if (this.state === 'pen') {
    if (this.lastPoint) {
      this.dataStore.push([]);
    }

    this.dataStore[this.dataStore.length - 1].push([e.offsetX, e.offsetY]);
    this.lastPoint = true;
    this.tempPoint = [];
    this.draw(this.ctx);
  } else if (this.state === 'pencil') {}
};

Drawer.prototype.draw = function (ctx) {
  var self = this;
  this.clearCanvas(ctx);
  var lastDrawPoint = [];
  var lastIndex = 0;
  this.dataStore.forEach(function (path, i) {
    lastIndex = i;
    self.setStrokeStyles(ctx, i, self.colorStore, self.fontStore);
    path.forEach(function (point, index) {
      ctx.beginPath();

      if (path.length - 1 === index) {
        lastDrawPoint = point;
      }

      if (0 === index) {
        if (self.state === 'rect') {
          ctx.moveTo(point[0], point[1]);
          self.drawByType(point, ctx, i);
          ctx.stroke();
        } else {
          ctx.moveTo(point[0], point[1]);
        }
      } else {
        var beforePoint = path[index - 1];
        self.drawByType(point, ctx, i, beforePoint);
        ctx.stroke();
      }
    });
    ctx.stroke();
    ctx.closePath();
  });
  ctx.beginPath();
  self.drawByType(this.tempPoint, ctx, lastIndex, lastDrawPoint);
  ctx.stroke();
};

Drawer.prototype.mouseDownHandler = function (e) {
  this.stop = true;
  this.clearTimer();

  if (this.state === 'pen') {} else if (this.state === 'pencil') {
    this.dataStore.push([]);
    this.colorStore.push(this.color);
    this.fontStore.push(this.size);
    this.typeStore.push('line');
    this.dataStore[this.dataStore.length - 1].push([e.offsetX, e.offsetY]);
    this.drawing = true;
  } else if (this.state === 'rect') {
    this.dataStore.push([]);
    this.colorStore.push(this.color);
    this.fontStore.push(this.size);
    this.typeStore.push('rect');
    this.dataStore[this.dataStore.length - 1].push([e.offsetX, e.offsetY]);
    this.drawing = true;
  }
};

Drawer.prototype.mouseUpHandler = function (e) {
  this.drawing = false;
};

Drawer.prototype.throttling = function (func, delay) {
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) {
      return;
    }

    timer = setTimeout(function () {
      func.apply(this, args);
      timer = null;
    }, delay);
  };
};

Drawer.prototype.mouseMoveHandler = function (e) {
  if (this.state === 'pen') {
    if (!this.lastPoint) {
      this.tempPoint = [e.offsetX, e.offsetY];
      this.draw(this.ctx);
    }
  } else if (this.state === 'pencil') {
    if (this.drawing) {
      this.dataStore[this.dataStore.length - 1].push([e.offsetX, e.offsetY]);
      this.draw(this.ctx);
    }
  } else if (this.state === 'rect') {
    if (this.drawing) {
      var size = this.fontStore[this.fontStore.length - 1];

      if (typeof size !== 'string') {
        size = size[2];
      }

      this.fontStore[this.fontStore.length - 1] = [e.offsetX - this.dataStore[this.dataStore.length - 1][0][0], e.offsetY - this.dataStore[this.dataStore.length - 1][0][1], size];
      this.draw(this.ctx);
    }
  }
};

Drawer.prototype.run = function (i, ctx) {
  var _this = this;

  var self = this;

  if (i >= this.dataStore.length) {
    if (this.loop && !this.stop) {
      setTimeout(function () {
        _this.animate();
      }, this.loop);
    }

    return;
  }

  if (this.typeStore[i] === 'rect') {
    var timer = setTimeout(function () {
      ctx.beginPath();
      self.setStrokeStyles(ctx, i, self.colorStore, self.fontStore);
      self.drawByType(self.dataStore[i][0], ctx, i);
      ctx.stroke();
      self.run(i + 1, ctx);
    }, this.speed * 10);
    this.timerStore.push(timer);
  } else {
    var _loop = function _loop(j) {
      var point = _this.dataStore[i][j];
      var lineDelay = j * _this.speed;
      var timer = setTimeout(function () {
        var beforePoint = self.dataStore[i][j - 1];
        ctx.beginPath();
        self.setStrokeStyles(ctx, i, self.colorStore, self.fontStore);
        self.drawByType(point, ctx, i, beforePoint);
        ctx.stroke();

        if (j === self.dataStore[i].length - 1) {
          self.run(i + 1, ctx);
        }
      }, lineDelay);

      _this.timerStore.push(timer);
    };

    for (var j = 1; j < this.dataStore[i].length; j++) {
      _loop(j);
    }
  }
};

Drawer.prototype.drawByType = function (point, ctx, i, beforePoint) {
  var type = this.typeStore[i];

  if (type === 'rect') {
    ctx.lineWidth = this.fontStore[i][2];
    ctx.rect(point[0], point[1], this.fontStore[i][0], this.fontStore[i][1]);
  } else if (type === 'line') {
    ctx.lineWidth = this.fontStore[i];

    if (beforePoint) {
      ctx.moveTo(beforePoint[0], beforePoint[1]);
    }

    ctx.lineTo(point[0], point[1]);
  } else if (type === 'circle') {
    ctx.arc(point[0], point[1], this.fontStore[i], 0, 2 * Math.PI);
  }
};

Drawer.prototype.clearTimer = function () {
  this.timerStore.forEach(function (timer) {
    clearTimeout(timer);
  });
};

Drawer.prototype.drawRun = function (ctx) {
  this.clearCanvas(ctx);

  if (this.dataStore.length === 0) {
    return;
  }

  this.stop = false;
  this.run(0, ctx);
};

Drawer.prototype.penClickHandler = function () {
  console.log('pen');
  this.state = 'pen';
};

Drawer.prototype.setState = function (state) {
  this.state = state;
};

Drawer.prototype.setColor = function (color) {
  this.color = color;
};

Drawer.prototype.setSize = function (size) {
  this.size = size;
};

Drawer.prototype.setLoop = function (loop) {
  this.loop = loop;
};

Drawer.prototype.setSpeed = function (speed) {
  this.speed = speed;
};

Drawer.prototype.pencilClickHandler = function () {
  console.log('pencil');
  this.state = 'pencil';
};

function Drawer(options) {
  var self = this;
  this.container = options.container || document.body;
  this.c = document.createElement('canvas');
  this.ctx = this.c.getContext('2d');
  this.preCtx = this.c.getContext('2d');
  this.width = options.width || 400;
  this.height = options.height || 400;
  this.drawing = false;
  this.lastPoint = true;
  this.dataStore = [];
  this.colorStore = [];
  this.fontStore = [];
  this.timerStore = [];
  this.typeStore = [];
  this.stop = true;
  this.state = 'pencil';
  this.tempPoint = [];
  this.reverse = false;
  this.size = options.size || 1;
  this.speed = options.speed || 20;
  this.loop = options.loop || 3000;
  this.color = options.color || '#000000';

  if (options.toolBar) {
    this.createToolBar();
  }

  this.container.appendChild(this.c);
  this.c.setAttribute('width', this.width);
  this.c.setAttribute('height', this.height);
  this.c.addEventListener('mousedown', function (e) {
    self.mouseDownHandler.call(self, e);
  });
  this.c.addEventListener('mouseup', function (e) {
    self.mouseUpHandler.call(self, e);
  });
  this.c.addEventListener('mousemove', function (e) {
    self.mouseMoveHandler.call(self, e);
  });
  this.c.addEventListener('click', function (e) {
    self.clickHandler.call(self, e);
  });
  this.c.addEventListener('dblclick', function (e) {
    self.dblClickHandler.call(self, e);
  });
}

module.exports = Drawer;

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanNEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sIm5hbWVzIjpbImRyYXdlciIsIkRyYXdlciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiYm9keSIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJsb29wIiwic2l6ZSIsInNwZWVkIiwiY29sb3IiLCJ0b29sQmFyIiwicmVxdWlyZSIsInByb3RvdHlwZSIsInNldFN0eWxlcyIsInRhcmdldCIsInN0eWxlcyIsImtleSIsImhhc093blByb3BlcnR5Iiwic3R5bGUiLCJjcmVhdGVUb29sQmFyIiwic2VsZiIsImNvbiIsImJ0blN0eWxlcyIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJjdXJzb3IiLCJvdXRsaW5lIiwiaW5wdXRTdHlsZXMiLCJwYWRkaW5nTGVmdCIsImJ0bkhvdmVyU3R5bGVzIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRvb2xzIiwic2V0QXR0cmlidXRlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBlbmNpbCIsImlubmVyVGV4dCIsInBlbiIsInJlY3QiLCJjbGVhciIsInByZXZpZXciLCJzaXplVGV4dCIsInNwZWVkVGV4dCIsImxvb3BUZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzaXplSGFuZGxlciIsImNhbGwiLCJzcGVlZEhhbmRsZXIiLCJsb29wSGFuZGxlciIsImNvbG9ySGFuZGxlciIsImNsZWFyQWxsIiwicGVuQ2xpY2tIYW5kbGVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGVuY2lsQ2xpY2tIYW5kbGVyIiwicmVjdENsaWNrSGFuZGxlciIsImFuaW1hdGUiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlSGFuZGxlciIsInR5cGUiLCJ2YWx1ZSIsImRyYXdSdW4iLCJwcmVDdHgiLCJzdG9wIiwiY2xlYXJUaW1lciIsImRhdGFTdG9yZSIsImZvbnRTdG9yZSIsImNvbG9yU3RvcmUiLCJkcmF3aW5nIiwibGFzdFBvaW50IiwiY3R4IiwiY2xlYXJSZWN0IiwiY2xlYXJDYW52YXMiLCJzZXRTdHJva2VTdHlsZXMiLCJpIiwic3Ryb2tlU3R5bGUiLCJnZXROdW1iZXIiLCJzdHIiLCJOdW1iZXIiLCJwYXJzZUludCIsImNsaWNrSGFuZGxlciIsInB1c2giLCJ0eXBlU3RvcmUiLCJjdXJyZW50UGF0aCIsImxlbmd0aCIsImZyb21Qb2ludCIsInBvaW50cyIsImNyZWF0ZVBvaW50cyIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY29uY2F0IiwiZHJhdyIsIm4iLCJmcm9tIiwidG8iLCJvZmZYIiwib2ZmWSIsImRibENsaWNrSGFuZGxlciIsInRlbXBQb2ludCIsImxhc3REcmF3UG9pbnQiLCJsYXN0SW5kZXgiLCJmb3JFYWNoIiwicGF0aCIsInBvaW50IiwiaW5kZXgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJkcmF3QnlUeXBlIiwic3Ryb2tlIiwiYmVmb3JlUG9pbnQiLCJjbG9zZVBhdGgiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VVcEhhbmRsZXIiLCJ0aHJvdHRsaW5nIiwiZnVuYyIsImRlbGF5IiwidGltZXIiLCJhcmdzIiwic2V0VGltZW91dCIsImFwcGx5IiwibW91c2VNb3ZlSGFuZGxlciIsInJ1biIsInRpbWVyU3RvcmUiLCJqIiwibGluZURlbGF5IiwibGluZVdpZHRoIiwibGluZVRvIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xlYXJUaW1lb3V0Iiwic2V0U3RhdGUiLCJzZXRDb2xvciIsInNldFNpemUiLCJzZXRMb29wIiwic2V0U3BlZWQiLCJvcHRpb25zIiwiYyIsImdldENvbnRleHQiLCJyZXZlcnNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUMxUUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsZ0RBQUosQ0FBVztBQUN0QkMsV0FBUyxFQUFFQyxRQUFRLENBQUNDLElBREU7QUFFdEJDLE9BQUssRUFBRUYsUUFBUSxDQUFDQyxJQUFULENBQWNFLFdBRkM7QUFHdEJDLFFBQU0sRUFBRUosUUFBUSxDQUFDQyxJQUFULENBQWNJLFlBSEE7QUFJdEJDLE1BQUksRUFBRSxJQUpnQjtBQUt0QkMsTUFBSSxFQUFFLENBTGdCO0FBTXRCQyxPQUFLLEVBQUUsRUFOZTtBQU90QkMsT0FBSyxFQUFFLFNBUGU7QUFRdEJDLFNBQU8sRUFBRTtBQVJhLENBQVgsQ0FBZixDLENBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFk7Ozs7Ozs7Ozs7O0FDZkFDLG1CQUFPLENBQUMsb0NBQUQsQ0FBUDs7QUFFQWIsTUFBTSxDQUFDYyxTQUFQLENBQWlCQyxTQUFqQixHQUE2QixVQUFVQyxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQjtBQUNuRCxPQUFLLElBQUlDLEdBQVQsSUFBZ0JELE1BQWhCLEVBQXdCO0FBQ3BCLFFBQUlBLE1BQU0sQ0FBQ0UsY0FBUCxDQUFzQkQsR0FBdEIsQ0FBSixFQUFnQztBQUM1QkYsWUFBTSxDQUFDSSxLQUFQLENBQWFGLEdBQWIsSUFBb0JELE1BQU0sQ0FBQ0MsR0FBRCxDQUExQjtBQUNIO0FBQ0o7QUFDSixDQU5EOztBQVFBbEIsTUFBTSxDQUFDYyxTQUFQLENBQWlCTyxhQUFqQixHQUFpQyxZQUFZO0FBQ3pDLE1BQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLEtBQUt0QixTQUFmO0FBQ0EsTUFBSXVCLFNBQVMsR0FBRztBQUNaQyxVQUFNLEVBQUUsTUFESTtBQUVabkIsVUFBTSxFQUFFLE1BRkk7QUFHWm9CLFdBQU8sRUFBRSxPQUhHO0FBSVpDLFVBQU0sRUFBRSxLQUpJO0FBS1pDLGdCQUFZLEVBQUUsS0FMRjtBQU1aQyxhQUFTLEVBQUUseUJBTkM7QUFPWkMsVUFBTSxFQUFFLFNBUEk7QUFRWkMsV0FBTyxFQUFFO0FBUkcsR0FBaEI7QUFXQSxNQUFJQyxXQUFXLEdBQUc7QUFDZDFCLFVBQU0sRUFBRSxNQURNO0FBRWRzQixnQkFBWSxFQUFFLEtBRkE7QUFHZEQsVUFBTSxFQUFFLEtBSE07QUFJZEYsVUFBTSxFQUFFLE1BSk07QUFLZEksYUFBUyxFQUFFLCtCQUxHO0FBTWRJLGVBQVcsRUFBRSxLQU5DO0FBT2Q3QixTQUFLLEVBQUUsTUFQTztBQVFkMkIsV0FBTyxFQUFFO0FBUkssR0FBbEI7QUFXQSxNQUFJRyxjQUFjLHdMQUFsQjtBQVNBLE1BQUlkLEtBQUssR0FBR2xCLFFBQVEsQ0FBQ2lDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBZixPQUFLLENBQUNnQixXQUFOLENBQWtCbEMsUUFBUSxDQUFDbUMsY0FBVCxDQUF3QkgsY0FBeEIsQ0FBbEI7QUFDQWhDLFVBQVEsQ0FBQ29DLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDRixXQUF6QyxDQUFxRGhCLEtBQXJELEVBcEN5QyxDQXNDekM7O0FBQ0EsTUFBSW1CLEtBQUssR0FBR3JDLFFBQVEsQ0FBQ2lDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBSSxPQUFLLENBQUNDLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUIsT0FBekI7QUFDQWpCLEtBQUcsQ0FBQ2EsV0FBSixDQUFnQkcsS0FBaEI7QUFDQSxPQUFLeEIsU0FBTCxDQUFld0IsS0FBZixFQUFzQjtBQUNsQmpDLFVBQU0sRUFBRSxNQURVO0FBRWxCbUMsV0FBTyxFQUFFLE1BRlM7QUFHbEJDLGtCQUFjLEVBQUUsUUFIRTtBQUlsQkMsY0FBVSxFQUFFO0FBSk0sR0FBdEIsRUExQ3lDLENBaUR6Qzs7QUFDQSxNQUFJQyxNQUFNLEdBQUcxQyxRQUFRLENBQUNpQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQVMsUUFBTSxDQUFDSixZQUFQLENBQW9CLElBQXBCLEVBQTBCLFFBQTFCO0FBQ0FJLFFBQU0sQ0FBQ0osWUFBUCxDQUFvQixPQUFwQixFQUE2QixRQUE3QjtBQUNBRCxPQUFLLENBQUNILFdBQU4sQ0FBa0JRLE1BQWxCO0FBQ0FBLFFBQU0sQ0FBQ0MsU0FBUCxHQUFtQixRQUFuQjtBQUNBLE9BQUs5QixTQUFMLENBQWU2QixNQUFmLEVBQXVCcEIsU0FBdkIsRUF2RHlDLENBeUR6Qzs7QUFDQSxNQUFJc0IsR0FBRyxHQUFHNUMsUUFBUSxDQUFDaUMsYUFBVCxDQUF1QixRQUF2QixDQUFWO0FBQ0FXLEtBQUcsQ0FBQ04sWUFBSixDQUFpQixJQUFqQixFQUF1QixLQUF2QjtBQUNBRCxPQUFLLENBQUNILFdBQU4sQ0FBa0JVLEdBQWxCO0FBQ0FBLEtBQUcsQ0FBQ0QsU0FBSixHQUFnQixLQUFoQjtBQUNBLE9BQUs5QixTQUFMLENBQWUrQixHQUFmLEVBQW9CdEIsU0FBcEIsRUE5RHlDLENBZ0V6Qzs7QUFDQSxNQUFJdUIsSUFBSSxHQUFHN0MsUUFBUSxDQUFDaUMsYUFBVCxDQUF1QixRQUF2QixDQUFYO0FBQ0FZLE1BQUksQ0FBQ1AsWUFBTCxDQUFrQixJQUFsQixFQUF3QixNQUF4QjtBQUNBRCxPQUFLLENBQUNILFdBQU4sQ0FBa0JXLElBQWxCO0FBQ0FBLE1BQUksQ0FBQ0YsU0FBTCxHQUFpQixNQUFqQjtBQUNBLE9BQUs5QixTQUFMLENBQWVnQyxJQUFmLEVBQXFCdkIsU0FBckIsRUFyRXlDLENBdUV6Qzs7QUFDQSxNQUFJd0IsS0FBSyxHQUFHOUMsUUFBUSxDQUFDaUMsYUFBVCxDQUF1QixRQUF2QixDQUFaO0FBQ0FhLE9BQUssQ0FBQ1IsWUFBTixDQUFtQixJQUFuQixFQUF5QixPQUF6QjtBQUNBRCxPQUFLLENBQUNILFdBQU4sQ0FBa0JZLEtBQWxCO0FBQ0FBLE9BQUssQ0FBQ0gsU0FBTixHQUFrQixPQUFsQjtBQUNBLE9BQUs5QixTQUFMLENBQWVpQyxLQUFmLEVBQXNCeEIsU0FBdEIsRUE1RXlDLENBOEV6Qzs7QUFDQSxNQUFJeUIsT0FBTyxHQUFHL0MsUUFBUSxDQUFDaUMsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0FjLFNBQU8sQ0FBQ1QsWUFBUixDQUFxQixJQUFyQixFQUEyQixTQUEzQjtBQUNBRCxPQUFLLENBQUNILFdBQU4sQ0FBa0JhLE9BQWxCO0FBQ0FBLFNBQU8sQ0FBQ0osU0FBUixHQUFvQixLQUFwQjtBQUNBLE9BQUs5QixTQUFMLENBQWVrQyxPQUFmLEVBQXdCekIsU0FBeEIsRUFuRnlDLENBcUZ6Qzs7QUFDQSxNQUFJYixLQUFLLEdBQUdULFFBQVEsQ0FBQ2lDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBeEIsT0FBSyxDQUFDNkIsWUFBTixDQUFtQixJQUFuQixFQUF5QixPQUF6QjtBQUNBN0IsT0FBSyxDQUFDNkIsWUFBTixDQUFtQixNQUFuQixFQUEyQixPQUEzQjtBQUNBRCxPQUFLLENBQUNILFdBQU4sQ0FBa0J6QixLQUFsQjtBQUNBQSxPQUFLLENBQUNrQyxTQUFOLEdBQWtCLE9BQWxCO0FBQ0EsT0FBSzlCLFNBQUwsQ0FBZUosS0FBZixFQUFzQmEsU0FBdEIsRUEzRnlDLENBNkZ6Qzs7QUFDQSxNQUFJMEIsUUFBUSxHQUFHaEQsUUFBUSxDQUFDbUMsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0FFLE9BQUssQ0FBQ0gsV0FBTixDQUFrQmMsUUFBbEI7QUFDQSxNQUFJekMsSUFBSSxHQUFHUCxRQUFRLENBQUNpQyxhQUFULENBQXVCLE9BQXZCLENBQVg7QUFDQTFCLE1BQUksQ0FBQytCLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsTUFBeEI7QUFDQS9CLE1BQUksQ0FBQytCLFlBQUwsQ0FBa0IsYUFBbEIsRUFBaUMsTUFBakM7QUFDQS9CLE1BQUksQ0FBQytCLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsS0FBSy9CLElBQWhDO0FBQ0E4QixPQUFLLENBQUNILFdBQU4sQ0FBa0IzQixJQUFsQjtBQUNBQSxNQUFJLENBQUNvQyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsT0FBSzlCLFNBQUwsQ0FBZU4sSUFBZixFQUFxQnVCLFdBQXJCLEVBdEd5QyxDQXdHekM7O0FBQ0EsTUFBSW1CLFNBQVMsR0FBR2pELFFBQVEsQ0FBQ21DLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBaEI7QUFDQUUsT0FBSyxDQUFDSCxXQUFOLENBQWtCZSxTQUFsQjtBQUNBLE1BQUl6QyxLQUFLLEdBQUdSLFFBQVEsQ0FBQ2lDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBekIsT0FBSyxDQUFDOEIsWUFBTixDQUFtQixJQUFuQixFQUF5QixPQUF6QjtBQUNBOUIsT0FBSyxDQUFDOEIsWUFBTixDQUFtQixhQUFuQixFQUFrQyxPQUFsQztBQUNBOUIsT0FBSyxDQUFDOEIsWUFBTixDQUFtQixPQUFuQixFQUE0QixLQUFLOUIsS0FBakM7QUFDQTZCLE9BQUssQ0FBQ0gsV0FBTixDQUFrQjFCLEtBQWxCO0FBQ0FBLE9BQUssQ0FBQ21DLFNBQU4sR0FBa0IsT0FBbEI7QUFDQSxPQUFLOUIsU0FBTCxDQUFlTCxLQUFmLEVBQXNCc0IsV0FBdEIsRUFqSHlDLENBbUh6Qzs7QUFDQSxNQUFJb0IsUUFBUSxHQUFHbEQsUUFBUSxDQUFDbUMsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0FFLE9BQUssQ0FBQ0gsV0FBTixDQUFrQmdCLFFBQWxCO0FBQ0EsTUFBSTVDLElBQUksR0FBR04sUUFBUSxDQUFDaUMsYUFBVCxDQUF1QixPQUF2QixDQUFYO0FBQ0EzQixNQUFJLENBQUNnQyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLE1BQXhCO0FBQ0FoQyxNQUFJLENBQUNnQyxZQUFMLENBQWtCLGFBQWxCLEVBQWlDLE1BQWpDO0FBQ0FoQyxNQUFJLENBQUNnQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLEtBQUtoQyxJQUFoQztBQUNBK0IsT0FBSyxDQUFDSCxXQUFOLENBQWtCNUIsSUFBbEI7QUFDQUEsTUFBSSxDQUFDcUMsU0FBTCxHQUFpQixNQUFqQjtBQUNBLE9BQUs5QixTQUFMLENBQWVQLElBQWYsRUFBcUJ3QixXQUFyQjtBQUVBdkIsTUFBSSxDQUFDNEMsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBVUMsQ0FBVixFQUFhO0FBQ3pDaEMsUUFBSSxDQUFDaUMsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0JsQyxJQUF0QixFQUE0QmdDLENBQTVCO0FBQ0gsR0FGRDtBQUdBNUMsT0FBSyxDQUFDMkMsZ0JBQU4sQ0FBdUIsUUFBdkIsRUFBaUMsVUFBVUMsQ0FBVixFQUFhO0FBQzFDaEMsUUFBSSxDQUFDbUMsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUJsQyxJQUF2QixFQUE2QmdDLENBQTdCO0FBQ0gsR0FGRDtBQUdBOUMsTUFBSSxDQUFDNkMsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBVUMsQ0FBVixFQUFhO0FBQ3pDaEMsUUFBSSxDQUFDb0MsV0FBTCxDQUFpQkYsSUFBakIsQ0FBc0JsQyxJQUF0QixFQUE0QmdDLENBQTVCO0FBQ0gsR0FGRDtBQUdBM0MsT0FBSyxDQUFDMEMsZ0JBQU4sQ0FBdUIsUUFBdkIsRUFBaUMsVUFBVUMsQ0FBVixFQUFhO0FBQzFDaEMsUUFBSSxDQUFDcUMsWUFBTCxDQUFrQkgsSUFBbEIsQ0FBdUJsQyxJQUF2QixFQUE2QmdDLENBQTdCO0FBQ0gsR0FGRDtBQUdBTixPQUFLLENBQUNLLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQVVDLENBQVYsRUFBYTtBQUN6Q2hDLFFBQUksQ0FBQ3NDLFFBQUwsQ0FBY0osSUFBZCxDQUFtQmxDLElBQW5CLEVBQXlCZ0MsQ0FBekI7QUFDSCxHQUZEO0FBR0FSLEtBQUcsQ0FBQ08sZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBVUMsQ0FBVixFQUFhO0FBQ3ZDaEMsUUFBSSxDQUFDdUMsZUFBTCxDQUFxQkwsSUFBckIsQ0FBMEJsQyxJQUExQixFQUFnQ2dDLENBQWhDO0FBQ0FWLFVBQU0sQ0FBQ2tCLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0FoQixRQUFJLENBQUNlLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixRQUF0QjtBQUNBakIsT0FBRyxDQUFDZ0IsU0FBSixDQUFjRSxHQUFkLENBQWtCLFFBQWxCO0FBQ0gsR0FMRDtBQU1BcEIsUUFBTSxDQUFDUyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFVQyxDQUFWLEVBQWE7QUFDMUNoQyxRQUFJLENBQUMyQyxrQkFBTCxDQUF3QlQsSUFBeEIsQ0FBNkJsQyxJQUE3QixFQUFtQ2dDLENBQW5DO0FBQ0FSLE9BQUcsQ0FBQ2dCLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixRQUFyQjtBQUNBaEIsUUFBSSxDQUFDZSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsUUFBdEI7QUFDQW5CLFVBQU0sQ0FBQ2tCLFNBQVAsQ0FBaUJFLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0gsR0FMRDtBQU1BakIsTUFBSSxDQUFDTSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFVQyxDQUFWLEVBQWE7QUFDeENoQyxRQUFJLENBQUM0QyxnQkFBTCxDQUFzQlYsSUFBdEIsQ0FBMkJsQyxJQUEzQixFQUFpQ2dDLENBQWpDO0FBQ0FSLE9BQUcsQ0FBQ2dCLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixRQUFyQjtBQUNBbkIsVUFBTSxDQUFDa0IsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsUUFBeEI7QUFDQWhCLFFBQUksQ0FBQ2UsU0FBTCxDQUFlRSxHQUFmLENBQW1CLFFBQW5CO0FBQ0gsR0FMRDtBQU1BZixTQUFPLENBQUNJLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQVVDLENBQVYsRUFBYTtBQUMzQ2hDLFFBQUksQ0FBQzZDLE9BQUwsQ0FBYVgsSUFBYixDQUFrQmxDLElBQWxCLEVBQXdCZ0MsQ0FBeEI7QUFDSCxHQUZEO0FBSUgsQ0FuS0Q7O0FBcUtBdEQsTUFBTSxDQUFDYyxTQUFQLENBQWlCb0QsZ0JBQWpCLEdBQW9DLFVBQVVaLENBQVYsRUFBYTtBQUM3QyxPQUFLYyxLQUFMLEdBQWEsTUFBYjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLRixLQUFqQjtBQUNILENBSEQ7O0FBS0FwRSxNQUFNLENBQUNjLFNBQVAsQ0FBaUJ5RCxXQUFqQixHQUErQixVQUFVakIsQ0FBVixFQUFhO0FBQ3hDLE9BQUtrQixJQUFMLEdBQVlsQixDQUFDLENBQUN0QyxNQUFGLENBQVN5RCxLQUFyQjtBQUNILENBRkQ7O0FBSUF6RSxNQUFNLENBQUNjLFNBQVAsQ0FBaUJxRCxPQUFqQixHQUEyQixZQUFZO0FBQ25DLE9BQUtPLE9BQUwsQ0FBYSxLQUFLQyxNQUFsQjtBQUNILENBRkQ7O0FBR0EzRSxNQUFNLENBQUNjLFNBQVAsQ0FBaUI2QyxZQUFqQixHQUFnQyxVQUFVTCxDQUFWLEVBQWE7QUFDekMsT0FBSzNDLEtBQUwsR0FBYTJDLENBQUMsQ0FBQ3RDLE1BQUYsQ0FBU3lELEtBQXRCO0FBQ0gsQ0FGRDs7QUFHQXpFLE1BQU0sQ0FBQ2MsU0FBUCxDQUFpQnlDLFdBQWpCLEdBQStCLFVBQVVELENBQVYsRUFBYTtBQUN4QyxPQUFLN0MsSUFBTCxHQUFZNkMsQ0FBQyxDQUFDdEMsTUFBRixDQUFTeUQsS0FBckI7QUFDSCxDQUZEOztBQUdBekUsTUFBTSxDQUFDYyxTQUFQLENBQWlCMkMsWUFBakIsR0FBZ0MsVUFBVUgsQ0FBVixFQUFhO0FBQ3pDLE9BQUs1QyxLQUFMLEdBQWE0QyxDQUFDLENBQUN0QyxNQUFGLENBQVN5RCxLQUF0QjtBQUNILENBRkQ7O0FBSUF6RSxNQUFNLENBQUNjLFNBQVAsQ0FBaUI0QyxXQUFqQixHQUErQixVQUFVSixDQUFWLEVBQWE7QUFDeEMsT0FBSzlDLElBQUwsR0FBWThDLENBQUMsQ0FBQ3RDLE1BQUYsQ0FBU3lELEtBQXJCO0FBQ0gsQ0FGRDs7QUFJQXpFLE1BQU0sQ0FBQ2MsU0FBUCxDQUFpQjhDLFFBQWpCLEdBQTRCLFlBQVk7QUFDcEMsT0FBS2dCLElBQUwsR0FBWSxJQUFaO0FBQ0EsT0FBS0MsVUFBTDtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLE9BQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBLE9BQUtDLEdBQUwsQ0FBU0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLaEYsS0FBOUIsRUFBcUMsS0FBS0UsTUFBMUM7QUFDSCxDQVREOztBQVdBTixNQUFNLENBQUNjLFNBQVAsQ0FBaUJ1RSxXQUFqQixHQUErQixVQUFVRixHQUFWLEVBQWU7QUFDMUNBLEtBQUcsQ0FBQ0MsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsS0FBS2hGLEtBQXpCLEVBQWdDLEtBQUtFLE1BQXJDO0FBQ0gsQ0FGRDs7QUFJQU4sTUFBTSxDQUFDYyxTQUFQLENBQWlCd0UsZUFBakIsR0FBbUMsVUFBVUgsR0FBVixFQUFlSSxDQUFmLEVBQWtCUCxVQUFsQixFQUE4QkQsU0FBOUIsRUFBeUM7QUFDeEVJLEtBQUcsQ0FBQ0ssV0FBSixHQUFrQlIsVUFBVSxDQUFDTyxDQUFELENBQTVCO0FBQ0gsQ0FGRDs7QUFJQXZGLE1BQU0sQ0FBQ2MsU0FBUCxDQUFpQjJFLFNBQWpCLEdBQTZCLFVBQVVDLEdBQVYsRUFBZTtBQUN4QyxTQUFPQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JGLEdBQWhCLENBQVA7QUFDSCxDQUZEOztBQUlBMUYsTUFBTSxDQUFDYyxTQUFQLENBQWlCK0UsWUFBakIsR0FBZ0MsVUFBVXZDLENBQVYsRUFBYTtBQUN6QyxPQUFLc0IsSUFBTCxHQUFZLElBQVo7QUFDQSxPQUFLQyxVQUFMOztBQUNBLE1BQUksS0FBS1QsS0FBTCxLQUFlLEtBQW5CLEVBQTBCO0FBQ3RCLFFBQUksS0FBS2MsU0FBVCxFQUFvQjtBQUNoQixXQUFLSixTQUFMLENBQWVnQixJQUFmLENBQW9CLEVBQXBCO0FBQ0EsV0FBS0MsU0FBTCxDQUFlRCxJQUFmLENBQW9CLE1BQXBCO0FBQ0EsV0FBS1osU0FBTCxHQUFpQixLQUFqQjtBQUNBLFdBQUtGLFVBQUwsQ0FBZ0JjLElBQWhCLENBQXFCLEtBQUtuRixLQUExQjtBQUNBLFdBQUtvRSxTQUFMLENBQWVlLElBQWYsQ0FBb0IsS0FBS3JGLElBQXpCO0FBQ0g7O0FBQ0QsUUFBSXVGLFdBQVcsR0FBRyxLQUFLbEIsU0FBTCxDQUFlLEtBQUtBLFNBQUwsQ0FBZW1CLE1BQWYsR0FBd0IsQ0FBdkMsQ0FBbEI7O0FBQ0EsUUFBSUQsV0FBVyxDQUFDQyxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLFVBQUlDLFNBQVMsR0FBR0YsV0FBVyxDQUFDQSxXQUFXLENBQUNDLE1BQVosR0FBcUIsQ0FBdEIsQ0FBM0I7QUFDQSxVQUFJRSxNQUFNLEdBQUcsS0FBS0MsWUFBTCxDQUFrQixFQUFsQixFQUFzQkYsU0FBdEIsRUFBaUMsQ0FBQzVDLENBQUMsQ0FBQytDLE9BQUgsRUFBWS9DLENBQUMsQ0FBQ2dELE9BQWQsQ0FBakMsQ0FBYjtBQUNBLFdBQUt4QixTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlbUIsTUFBZixHQUF3QixDQUF2QyxJQUE0Q0QsV0FBVyxDQUFDTyxNQUFaLENBQW1CSixNQUFuQixDQUE1QztBQUNIOztBQUNESCxlQUFXLENBQUNGLElBQVosQ0FBaUIsQ0FBQ3hDLENBQUMsQ0FBQytDLE9BQUgsRUFBWS9DLENBQUMsQ0FBQ2dELE9BQWQsQ0FBakI7QUFDQSxTQUFLRSxJQUFMLENBQVUsS0FBS3JCLEdBQWY7QUFDSCxHQWhCRCxNQWdCTyxJQUFJLEtBQUtmLEtBQUwsS0FBZSxRQUFuQixFQUE2QixDQUVuQztBQUNKLENBdEJEOztBQXdCQXBFLE1BQU0sQ0FBQ2MsU0FBUCxDQUFpQnNGLFlBQWpCLEdBQWdDLFVBQVVLLENBQVYsRUFBYUMsSUFBYixFQUFtQkMsRUFBbkIsRUFBdUI7QUFDbkQsTUFBSUMsSUFBSSxHQUFHLENBQUNELEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUQsSUFBSSxDQUFDLENBQUQsQ0FBYixJQUFvQkQsQ0FBL0I7QUFDQSxNQUFJSSxJQUFJLEdBQUcsQ0FBQ0YsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRRCxJQUFJLENBQUMsQ0FBRCxDQUFiLElBQW9CRCxDQUEvQjtBQUNBLE1BQUlOLE1BQU0sR0FBRyxFQUFiOztBQUNBLE9BQUssSUFBSVosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2tCLENBQXBCLEVBQXVCbEIsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QlksVUFBTSxDQUFDTCxJQUFQLENBQVksQ0FBQ1ksSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFXRSxJQUFJLEdBQUdyQixDQUFuQixFQUF1Qm1CLElBQUksQ0FBQyxDQUFELENBQUosR0FBV0csSUFBSSxHQUFHdEIsQ0FBekMsQ0FBWjtBQUNIOztBQUNELFNBQU9ZLE1BQVA7QUFDSCxDQVJEOztBQVVBbkcsTUFBTSxDQUFDYyxTQUFQLENBQWlCZ0csZUFBakIsR0FBbUMsVUFBVXhELENBQVYsRUFBYTtBQUM1QyxNQUFJLEtBQUtjLEtBQUwsS0FBZSxLQUFuQixFQUEwQjtBQUN0QixRQUFJLEtBQUtjLFNBQVQsRUFBb0I7QUFDaEIsV0FBS0osU0FBTCxDQUFlZ0IsSUFBZixDQUFvQixFQUFwQjtBQUNIOztBQUNELFNBQUtoQixTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlbUIsTUFBZixHQUF3QixDQUF2QyxFQUEwQ0gsSUFBMUMsQ0FBK0MsQ0FBQ3hDLENBQUMsQ0FBQytDLE9BQUgsRUFBWS9DLENBQUMsQ0FBQ2dELE9BQWQsQ0FBL0M7QUFDQSxTQUFLcEIsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFNBQUs2QixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLEtBQUtyQixHQUFmO0FBQ0gsR0FSRCxNQVFPLElBQUksS0FBS2YsS0FBTCxLQUFlLFFBQW5CLEVBQTZCLENBRW5DO0FBQ0osQ0FaRDs7QUFjQXBFLE1BQU0sQ0FBQ2MsU0FBUCxDQUFpQjBGLElBQWpCLEdBQXdCLFVBQVVyQixHQUFWLEVBQWU7QUFDbkMsTUFBSTdELElBQUksR0FBRyxJQUFYO0FBQ0EsT0FBSytELFdBQUwsQ0FBaUJGLEdBQWpCO0FBQ0EsTUFBSTZCLGFBQWEsR0FBRyxFQUFwQjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLE9BQUtuQyxTQUFMLENBQWVvQyxPQUFmLENBQXVCLFVBQUNDLElBQUQsRUFBTzVCLENBQVAsRUFBYTtBQUNoQzBCLGFBQVMsR0FBRzFCLENBQVo7QUFDQWpFLFFBQUksQ0FBQ2dFLGVBQUwsQ0FBcUJILEdBQXJCLEVBQTBCSSxDQUExQixFQUE2QmpFLElBQUksQ0FBQzBELFVBQWxDLEVBQThDMUQsSUFBSSxDQUFDeUQsU0FBbkQ7QUFDQW9DLFFBQUksQ0FBQ0QsT0FBTCxDQUFhLFVBQUNFLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMzQmxDLFNBQUcsQ0FBQ21DLFNBQUo7O0FBQ0EsVUFBSUgsSUFBSSxDQUFDbEIsTUFBTCxHQUFjLENBQWQsS0FBb0JvQixLQUF4QixFQUErQjtBQUMzQkwscUJBQWEsR0FBR0ksS0FBaEI7QUFDSDs7QUFDRCxVQUFJLE1BQU1DLEtBQVYsRUFBaUI7QUFDYixZQUFJL0YsSUFBSSxDQUFDOEMsS0FBTCxLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCZSxhQUFHLENBQUNvQyxNQUFKLENBQVdILEtBQUssQ0FBQyxDQUFELENBQWhCLEVBQXFCQSxLQUFLLENBQUMsQ0FBRCxDQUExQjtBQUNBOUYsY0FBSSxDQUFDa0csVUFBTCxDQUFnQkosS0FBaEIsRUFBdUJqQyxHQUF2QixFQUE0QkksQ0FBNUI7QUFDQUosYUFBRyxDQUFDc0MsTUFBSjtBQUNILFNBSkQsTUFJTztBQUNIdEMsYUFBRyxDQUFDb0MsTUFBSixDQUFXSCxLQUFLLENBQUMsQ0FBRCxDQUFoQixFQUFxQkEsS0FBSyxDQUFDLENBQUQsQ0FBMUI7QUFDSDtBQUNKLE9BUkQsTUFRTztBQUNILFlBQUlNLFdBQVcsR0FBR1AsSUFBSSxDQUFDRSxLQUFLLEdBQUcsQ0FBVCxDQUF0QjtBQUNBL0YsWUFBSSxDQUFDa0csVUFBTCxDQUFnQkosS0FBaEIsRUFBdUJqQyxHQUF2QixFQUE0QkksQ0FBNUIsRUFBK0JtQyxXQUEvQjtBQUNBdkMsV0FBRyxDQUFDc0MsTUFBSjtBQUNIO0FBQ0osS0FsQkQ7QUFtQkF0QyxPQUFHLENBQUNzQyxNQUFKO0FBQ0F0QyxPQUFHLENBQUN3QyxTQUFKO0FBQ0gsR0F4QkQ7QUF5QkF4QyxLQUFHLENBQUNtQyxTQUFKO0FBQ0FoRyxNQUFJLENBQUNrRyxVQUFMLENBQWdCLEtBQUtULFNBQXJCLEVBQWdDNUIsR0FBaEMsRUFBcUM4QixTQUFyQyxFQUFnREQsYUFBaEQ7QUFDQTdCLEtBQUcsQ0FBQ3NDLE1BQUo7QUFDSCxDQWpDRDs7QUFtQ0F6SCxNQUFNLENBQUNjLFNBQVAsQ0FBaUI4RyxnQkFBakIsR0FBb0MsVUFBVXRFLENBQVYsRUFBYTtBQUM3QyxPQUFLc0IsSUFBTCxHQUFZLElBQVo7QUFDQSxPQUFLQyxVQUFMOztBQUNBLE1BQUksS0FBS1QsS0FBTCxLQUFlLEtBQW5CLEVBQTBCLENBRXpCLENBRkQsTUFFTyxJQUFJLEtBQUtBLEtBQUwsS0FBZSxRQUFuQixFQUE2QjtBQUNoQyxTQUFLVSxTQUFMLENBQWVnQixJQUFmLENBQW9CLEVBQXBCO0FBQ0EsU0FBS2QsVUFBTCxDQUFnQmMsSUFBaEIsQ0FBcUIsS0FBS25GLEtBQTFCO0FBQ0EsU0FBS29FLFNBQUwsQ0FBZWUsSUFBZixDQUFvQixLQUFLckYsSUFBekI7QUFDQSxTQUFLc0YsU0FBTCxDQUFlRCxJQUFmLENBQW9CLE1BQXBCO0FBQ0EsU0FBS2hCLFNBQUwsQ0FBZSxLQUFLQSxTQUFMLENBQWVtQixNQUFmLEdBQXdCLENBQXZDLEVBQTBDSCxJQUExQyxDQUErQyxDQUFDeEMsQ0FBQyxDQUFDK0MsT0FBSCxFQUFZL0MsQ0FBQyxDQUFDZ0QsT0FBZCxDQUEvQztBQUNBLFNBQUtyQixPQUFMLEdBQWUsSUFBZjtBQUNILEdBUE0sTUFPQSxJQUFJLEtBQUtiLEtBQUwsS0FBZSxNQUFuQixFQUEyQjtBQUM5QixTQUFLVSxTQUFMLENBQWVnQixJQUFmLENBQW9CLEVBQXBCO0FBQ0EsU0FBS2QsVUFBTCxDQUFnQmMsSUFBaEIsQ0FBcUIsS0FBS25GLEtBQTFCO0FBQ0EsU0FBS29FLFNBQUwsQ0FBZWUsSUFBZixDQUFvQixLQUFLckYsSUFBekI7QUFDQSxTQUFLc0YsU0FBTCxDQUFlRCxJQUFmLENBQW9CLE1BQXBCO0FBQ0EsU0FBS2hCLFNBQUwsQ0FBZSxLQUFLQSxTQUFMLENBQWVtQixNQUFmLEdBQXdCLENBQXZDLEVBQTBDSCxJQUExQyxDQUErQyxDQUFDeEMsQ0FBQyxDQUFDK0MsT0FBSCxFQUFZL0MsQ0FBQyxDQUFDZ0QsT0FBZCxDQUEvQztBQUNBLFNBQUtyQixPQUFMLEdBQWUsSUFBZjtBQUNIO0FBQ0osQ0FwQkQ7O0FBc0JBakYsTUFBTSxDQUFDYyxTQUFQLENBQWlCK0csY0FBakIsR0FBa0MsVUFBVXZFLENBQVYsRUFBYTtBQUMzQyxPQUFLMkIsT0FBTCxHQUFlLEtBQWY7QUFDSCxDQUZEOztBQUlBakYsTUFBTSxDQUFDYyxTQUFQLENBQWlCZ0gsVUFBakIsR0FBOEIsVUFBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUI7QUFDakQsTUFBSUMsS0FBSjtBQUNBLFNBQU8sWUFBbUI7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQ3RCLFFBQUlELEtBQUosRUFBVztBQUNQO0FBQ0g7O0FBQ0RBLFNBQUssR0FBR0UsVUFBVSxDQUFDLFlBQVk7QUFDM0JKLFVBQUksQ0FBQ0ssS0FBTCxDQUFXLElBQVgsRUFBaUJGLElBQWpCO0FBQ0FELFdBQUssR0FBRyxJQUFSO0FBQ0gsS0FIaUIsRUFHZkQsS0FIZSxDQUFsQjtBQUlILEdBUkQ7QUFTSCxDQVhEOztBQWFBaEksTUFBTSxDQUFDYyxTQUFQLENBQWlCdUgsZ0JBQWpCLEdBQW9DLFVBQVUvRSxDQUFWLEVBQWE7QUFDN0MsTUFBSSxLQUFLYyxLQUFMLEtBQWUsS0FBbkIsRUFBMEI7QUFDdEIsUUFBSSxDQUFDLEtBQUtjLFNBQVYsRUFBcUI7QUFDakIsV0FBSzZCLFNBQUwsR0FBaUIsQ0FBQ3pELENBQUMsQ0FBQytDLE9BQUgsRUFBWS9DLENBQUMsQ0FBQ2dELE9BQWQsQ0FBakI7QUFDQSxXQUFLRSxJQUFMLENBQVUsS0FBS3JCLEdBQWY7QUFDSDtBQUNKLEdBTEQsTUFLTyxJQUFJLEtBQUtmLEtBQUwsS0FBZSxRQUFuQixFQUE2QjtBQUNoQyxRQUFJLEtBQUthLE9BQVQsRUFBa0I7QUFDZCxXQUFLSCxTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlbUIsTUFBZixHQUF3QixDQUF2QyxFQUEwQ0gsSUFBMUMsQ0FBK0MsQ0FBQ3hDLENBQUMsQ0FBQytDLE9BQUgsRUFBWS9DLENBQUMsQ0FBQ2dELE9BQWQsQ0FBL0M7QUFDQSxXQUFLRSxJQUFMLENBQVUsS0FBS3JCLEdBQWY7QUFDSDtBQUNKLEdBTE0sTUFLQSxJQUFJLEtBQUtmLEtBQUwsS0FBZSxNQUFuQixFQUEyQjtBQUM5QixRQUFJLEtBQUthLE9BQVQsRUFBa0I7QUFDZCxVQUFJeEUsSUFBSSxHQUFHLEtBQUtzRSxTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFla0IsTUFBZixHQUF3QixDQUF2QyxDQUFYOztBQUNBLFVBQUksT0FBT3hGLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUJBLFlBQUksR0FBR0EsSUFBSSxDQUFDLENBQUQsQ0FBWDtBQUNIOztBQUNELFdBQUtzRSxTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFla0IsTUFBZixHQUF3QixDQUF2QyxJQUE0QyxDQUFDM0MsQ0FBQyxDQUFDK0MsT0FBRixHQUFZLEtBQUt2QixTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlbUIsTUFBZixHQUF3QixDQUF2QyxFQUEwQyxDQUExQyxFQUE2QyxDQUE3QyxDQUFiLEVBQThEM0MsQ0FBQyxDQUFDZ0QsT0FBRixHQUFZLEtBQUt4QixTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlbUIsTUFBZixHQUF3QixDQUF2QyxFQUEwQyxDQUExQyxFQUE2QyxDQUE3QyxDQUExRSxFQUEySHhGLElBQTNILENBQTVDO0FBQ0EsV0FBSytGLElBQUwsQ0FBVSxLQUFLckIsR0FBZjtBQUNIO0FBQ0o7QUFDSixDQXJCRDs7QUF1QkFuRixNQUFNLENBQUNjLFNBQVAsQ0FBaUJ3SCxHQUFqQixHQUF1QixVQUFVL0MsQ0FBVixFQUFhSixHQUFiLEVBQWtCO0FBQUE7O0FBQ3JDLE1BQUk3RCxJQUFJLEdBQUcsSUFBWDs7QUFDQSxNQUFJaUUsQ0FBQyxJQUFJLEtBQUtULFNBQUwsQ0FBZW1CLE1BQXhCLEVBQWdDO0FBQzVCLFFBQUksS0FBS3pGLElBQUwsSUFBYSxDQUFDLEtBQUtvRSxJQUF2QixFQUE2QjtBQUN6QnVELGdCQUFVLENBQUMsWUFBTTtBQUNiLGFBQUksQ0FBQ2hFLE9BQUw7QUFDSCxPQUZTLEVBRVAsS0FBSzNELElBRkUsQ0FBVjtBQUdIOztBQUNEO0FBQ0g7O0FBQ0QsTUFBSSxLQUFLdUYsU0FBTCxDQUFlUixDQUFmLE1BQXNCLE1BQTFCLEVBQWtDO0FBQzlCLFFBQUkwQyxLQUFLLEdBQUdFLFVBQVUsQ0FBQyxZQUFZO0FBQy9CaEQsU0FBRyxDQUFDbUMsU0FBSjtBQUNBaEcsVUFBSSxDQUFDZ0UsZUFBTCxDQUFxQkgsR0FBckIsRUFBMEJJLENBQTFCLEVBQTZCakUsSUFBSSxDQUFDMEQsVUFBbEMsRUFBOEMxRCxJQUFJLENBQUN5RCxTQUFuRDtBQUNBekQsVUFBSSxDQUFDa0csVUFBTCxDQUFnQmxHLElBQUksQ0FBQ3dELFNBQUwsQ0FBZVMsQ0FBZixFQUFrQixDQUFsQixDQUFoQixFQUFzQ0osR0FBdEMsRUFBMkNJLENBQTNDO0FBQ0FKLFNBQUcsQ0FBQ3NDLE1BQUo7QUFDQW5HLFVBQUksQ0FBQ2dILEdBQUwsQ0FBUy9DLENBQUMsR0FBRyxDQUFiLEVBQWdCSixHQUFoQjtBQUNILEtBTnFCLEVBTW5CLEtBQUt6RSxLQUFMLEdBQWEsRUFOTSxDQUF0QjtBQU9BLFNBQUs2SCxVQUFMLENBQWdCekMsSUFBaEIsQ0FBcUJtQyxLQUFyQjtBQUNILEdBVEQsTUFTTztBQUFBLCtCQUNNTyxDQUROO0FBRUMsVUFBSXBCLEtBQUssR0FBRyxLQUFJLENBQUN0QyxTQUFMLENBQWVTLENBQWYsRUFBa0JpRCxDQUFsQixDQUFaO0FBQ0EsVUFBSUMsU0FBUyxHQUFHRCxDQUFDLEdBQUcsS0FBSSxDQUFDOUgsS0FBekI7QUFDQSxVQUFJdUgsS0FBSyxHQUFHRSxVQUFVLENBQUMsWUFBWTtBQUMvQixZQUFJVCxXQUFXLEdBQUdwRyxJQUFJLENBQUN3RCxTQUFMLENBQWVTLENBQWYsRUFBa0JpRCxDQUFDLEdBQUcsQ0FBdEIsQ0FBbEI7QUFDQXJELFdBQUcsQ0FBQ21DLFNBQUo7QUFDQWhHLFlBQUksQ0FBQ2dFLGVBQUwsQ0FBcUJILEdBQXJCLEVBQTBCSSxDQUExQixFQUE2QmpFLElBQUksQ0FBQzBELFVBQWxDLEVBQThDMUQsSUFBSSxDQUFDeUQsU0FBbkQ7QUFDQXpELFlBQUksQ0FBQ2tHLFVBQUwsQ0FBZ0JKLEtBQWhCLEVBQXVCakMsR0FBdkIsRUFBNEJJLENBQTVCLEVBQStCbUMsV0FBL0I7QUFDQXZDLFdBQUcsQ0FBQ3NDLE1BQUo7O0FBQ0EsWUFBSWUsQ0FBQyxLQUFLbEgsSUFBSSxDQUFDd0QsU0FBTCxDQUFlUyxDQUFmLEVBQWtCVSxNQUFsQixHQUEyQixDQUFyQyxFQUF3QztBQUNwQzNFLGNBQUksQ0FBQ2dILEdBQUwsQ0FBUy9DLENBQUMsR0FBRyxDQUFiLEVBQWdCSixHQUFoQjtBQUNIO0FBQ0osT0FUcUIsRUFTbkJzRCxTQVRtQixDQUF0Qjs7QUFVQSxXQUFJLENBQUNGLFVBQUwsQ0FBZ0J6QyxJQUFoQixDQUFxQm1DLEtBQXJCO0FBZEQ7O0FBQ0gsU0FBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUsxRCxTQUFMLENBQWVTLENBQWYsRUFBa0JVLE1BQXRDLEVBQThDdUMsQ0FBQyxFQUEvQyxFQUFtRDtBQUFBLFlBQTFDQSxDQUEwQztBQWNsRDtBQUNKO0FBQ0osQ0FwQ0Q7O0FBc0NBeEksTUFBTSxDQUFDYyxTQUFQLENBQWlCMEcsVUFBakIsR0FBOEIsVUFBVUosS0FBVixFQUFpQmpDLEdBQWpCLEVBQXNCSSxDQUF0QixFQUF5Qm1DLFdBQXpCLEVBQXNDO0FBQ2hFLE1BQUlsRCxJQUFJLEdBQUcsS0FBS3VCLFNBQUwsQ0FBZVIsQ0FBZixDQUFYOztBQUNBLE1BQUlmLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ2pCVyxPQUFHLENBQUN1RCxTQUFKLEdBQWdCLEtBQUszRCxTQUFMLENBQWVRLENBQWYsRUFBa0IsQ0FBbEIsQ0FBaEI7QUFDQUosT0FBRyxDQUFDcEMsSUFBSixDQUFTcUUsS0FBSyxDQUFDLENBQUQsQ0FBZCxFQUFtQkEsS0FBSyxDQUFDLENBQUQsQ0FBeEIsRUFBNkIsS0FBS3JDLFNBQUwsQ0FBZVEsQ0FBZixFQUFrQixDQUFsQixDQUE3QixFQUFtRCxLQUFLUixTQUFMLENBQWVRLENBQWYsRUFBa0IsQ0FBbEIsQ0FBbkQ7QUFDSCxHQUhELE1BR08sSUFBSWYsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDeEJXLE9BQUcsQ0FBQ3VELFNBQUosR0FBZ0IsS0FBSzNELFNBQUwsQ0FBZVEsQ0FBZixDQUFoQjs7QUFDQSxRQUFJbUMsV0FBSixFQUFpQjtBQUNidkMsU0FBRyxDQUFDb0MsTUFBSixDQUFXRyxXQUFXLENBQUMsQ0FBRCxDQUF0QixFQUEyQkEsV0FBVyxDQUFDLENBQUQsQ0FBdEM7QUFDSDs7QUFDRHZDLE9BQUcsQ0FBQ3dELE1BQUosQ0FBV3ZCLEtBQUssQ0FBQyxDQUFELENBQWhCLEVBQXFCQSxLQUFLLENBQUMsQ0FBRCxDQUExQjtBQUNILEdBTk0sTUFNQSxJQUFJNUMsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDMUJXLE9BQUcsQ0FBQ3lELEdBQUosQ0FBUXhCLEtBQUssQ0FBQyxDQUFELENBQWIsRUFBa0JBLEtBQUssQ0FBQyxDQUFELENBQXZCLEVBQTRCLEtBQUtyQyxTQUFMLENBQWVRLENBQWYsQ0FBNUIsRUFBK0MsQ0FBL0MsRUFBa0QsSUFBSXNELElBQUksQ0FBQ0MsRUFBM0Q7QUFDSDtBQUNKLENBZEQ7O0FBZ0JBOUksTUFBTSxDQUFDYyxTQUFQLENBQWlCK0QsVUFBakIsR0FBOEIsWUFBWTtBQUN0QyxPQUFLMEQsVUFBTCxDQUFnQnJCLE9BQWhCLENBQXdCLFVBQVVlLEtBQVYsRUFBaUI7QUFDckNjLGdCQUFZLENBQUNkLEtBQUQsQ0FBWjtBQUNILEdBRkQ7QUFHSCxDQUpEOztBQU1BakksTUFBTSxDQUFDYyxTQUFQLENBQWlCNEQsT0FBakIsR0FBMkIsVUFBVVMsR0FBVixFQUFlO0FBQ3RDLE9BQUtFLFdBQUwsQ0FBaUJGLEdBQWpCOztBQUNBLE1BQUksS0FBS0wsU0FBTCxDQUFlbUIsTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUM3QjtBQUNIOztBQUNELE9BQUtyQixJQUFMLEdBQVksS0FBWjtBQUNBLE9BQUswRCxHQUFMLENBQVMsQ0FBVCxFQUFZbkQsR0FBWjtBQUNILENBUEQ7O0FBU0FuRixNQUFNLENBQUNjLFNBQVAsQ0FBaUIrQyxlQUFqQixHQUFtQyxZQUFZO0FBQzNDUSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsT0FBS0YsS0FBTCxHQUFhLEtBQWI7QUFDSCxDQUhEOztBQUtBcEUsTUFBTSxDQUFDYyxTQUFQLENBQWlCa0ksUUFBakIsR0FBNEIsVUFBVTVFLEtBQVYsRUFBaUI7QUFDekMsT0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0gsQ0FGRDs7QUFJQXBFLE1BQU0sQ0FBQ2MsU0FBUCxDQUFpQm1JLFFBQWpCLEdBQTRCLFVBQVV0SSxLQUFWLEVBQWlCO0FBQ3pDLE9BQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNILENBRkQ7O0FBSUFYLE1BQU0sQ0FBQ2MsU0FBUCxDQUFpQm9JLE9BQWpCLEdBQTJCLFVBQVV6SSxJQUFWLEVBQWdCO0FBQ3ZDLE9BQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNILENBRkQ7O0FBSUFULE1BQU0sQ0FBQ2MsU0FBUCxDQUFpQnFJLE9BQWpCLEdBQTJCLFVBQVMzSSxJQUFULEVBQWU7QUFDdEMsT0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0gsQ0FGRDs7QUFJQVIsTUFBTSxDQUFDYyxTQUFQLENBQWlCc0ksUUFBakIsR0FBNEIsVUFBUzFJLEtBQVQsRUFBZ0I7QUFDeEMsT0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0gsQ0FGRDs7QUFJQVYsTUFBTSxDQUFDYyxTQUFQLENBQWlCbUQsa0JBQWpCLEdBQXNDLFlBQVk7QUFDOUNJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSxPQUFLRixLQUFMLEdBQWEsUUFBYjtBQUNILENBSEQ7O0FBS0EsU0FBU3BFLE1BQVQsQ0FBZ0JxSixPQUFoQixFQUF5QjtBQUNyQixNQUFJL0gsSUFBSSxHQUFHLElBQVg7QUFDQSxPQUFLckIsU0FBTCxHQUFpQm9KLE9BQU8sQ0FBQ3BKLFNBQVIsSUFBcUJDLFFBQVEsQ0FBQ0MsSUFBL0M7QUFFQSxPQUFLbUosQ0FBTCxHQUFTcEosUUFBUSxDQUFDaUMsYUFBVCxDQUF1QixRQUF2QixDQUFUO0FBRUEsT0FBS2dELEdBQUwsR0FBVyxLQUFLbUUsQ0FBTCxDQUFPQyxVQUFQLENBQWtCLElBQWxCLENBQVg7QUFDQSxPQUFLNUUsTUFBTCxHQUFjLEtBQUsyRSxDQUFMLENBQU9DLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBZDtBQUVBLE9BQUtuSixLQUFMLEdBQWFpSixPQUFPLENBQUNqSixLQUFSLElBQWlCLEdBQTlCO0FBQ0EsT0FBS0UsTUFBTCxHQUFjK0ksT0FBTyxDQUFDL0ksTUFBUixJQUFrQixHQUFoQztBQUNBLE9BQUsyRSxPQUFMLEdBQWUsS0FBZjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxPQUFLSixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBS0UsVUFBTCxHQUFrQixFQUFsQjtBQUNBLE9BQUtELFNBQUwsR0FBaUIsRUFBakI7QUFDQSxPQUFLd0QsVUFBTCxHQUFrQixFQUFsQjtBQUNBLE9BQUt4QyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBS25CLElBQUwsR0FBWSxJQUFaO0FBQ0EsT0FBS1IsS0FBTCxHQUFhLFFBQWI7QUFDQSxPQUFLMkMsU0FBTCxHQUFpQixFQUFqQjtBQUNBLE9BQUt5QyxPQUFMLEdBQWUsS0FBZjtBQUNBLE9BQUsvSSxJQUFMLEdBQVk0SSxPQUFPLENBQUM1SSxJQUFSLElBQWdCLENBQTVCO0FBQ0EsT0FBS0MsS0FBTCxHQUFhMkksT0FBTyxDQUFDM0ksS0FBUixJQUFpQixFQUE5QjtBQUNBLE9BQUtGLElBQUwsR0FBWTZJLE9BQU8sQ0FBQzdJLElBQVIsSUFBZ0IsSUFBNUI7QUFDQSxPQUFLRyxLQUFMLEdBQWEwSSxPQUFPLENBQUMxSSxLQUFSLElBQWlCLFNBQTlCOztBQUVBLE1BQUkwSSxPQUFPLENBQUN6SSxPQUFaLEVBQXFCO0FBQ2pCLFNBQUtTLGFBQUw7QUFDSDs7QUFFRCxPQUFLcEIsU0FBTCxDQUFlbUMsV0FBZixDQUEyQixLQUFLa0gsQ0FBaEM7QUFFQSxPQUFLQSxDQUFMLENBQU85RyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLEtBQUtwQyxLQUFsQztBQUNBLE9BQUtrSixDQUFMLENBQU85RyxZQUFQLENBQW9CLFFBQXBCLEVBQThCLEtBQUtsQyxNQUFuQztBQUVBLE9BQUtnSixDQUFMLENBQU9qRyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFVQyxDQUFWLEVBQWE7QUFDOUNoQyxRQUFJLENBQUNzRyxnQkFBTCxDQUFzQnBFLElBQXRCLENBQTJCbEMsSUFBM0IsRUFBaUNnQyxDQUFqQztBQUNILEdBRkQ7QUFHQSxPQUFLZ0csQ0FBTCxDQUFPakcsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVUMsQ0FBVixFQUFhO0FBQzVDaEMsUUFBSSxDQUFDdUcsY0FBTCxDQUFvQnJFLElBQXBCLENBQXlCbEMsSUFBekIsRUFBK0JnQyxDQUEvQjtBQUNILEdBRkQ7QUFHQSxPQUFLZ0csQ0FBTCxDQUFPakcsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBVUMsQ0FBVixFQUFhO0FBQzlDaEMsUUFBSSxDQUFDK0csZ0JBQUwsQ0FBc0I3RSxJQUF0QixDQUEyQmxDLElBQTNCLEVBQWlDZ0MsQ0FBakM7QUFDSCxHQUZEO0FBR0EsT0FBS2dHLENBQUwsQ0FBT2pHLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVVDLENBQVYsRUFBYTtBQUMxQ2hDLFFBQUksQ0FBQ3VFLFlBQUwsQ0FBa0JyQyxJQUFsQixDQUF1QmxDLElBQXZCLEVBQTZCZ0MsQ0FBN0I7QUFDSCxHQUZEO0FBR0EsT0FBS2dHLENBQUwsQ0FBT2pHLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLFVBQVVDLENBQVYsRUFBYTtBQUM3Q2hDLFFBQUksQ0FBQ3dGLGVBQUwsQ0FBcUJ0RCxJQUFyQixDQUEwQmxDLElBQTFCLEVBQWdDZ0MsQ0FBaEM7QUFDSCxHQUZEO0FBR0g7O0FBRURtRyxNQUFNLENBQUNDLE9BQVAsR0FBaUIxSixNQUFqQixDOzs7Ozs7Ozs7OztBQzdnQkEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRXhGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcclxuXHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi9qc0RyYXdlcic7XHJcblxyXG5jb25zdCBkcmF3ZXIgPSBuZXcgRHJhd2VyKHtcclxuICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcclxuICAgIHdpZHRoOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxyXG4gICAgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCxcclxuICAgIGxvb3A6IDMwMDAsXHJcbiAgICBzaXplOiAxLFxyXG4gICAgc3BlZWQ6IDIwLFxyXG4gICAgY29sb3I6ICcjMDAwMDAwJyxcclxuICAgIHRvb2xCYXI6IHRydWUsXHJcbn0pO1xyXG4vLyBkcmF3ZXIuc2V0Q29sb3IoJ3JlZCcpO1xyXG4vLyBkcmF3ZXIuc2V0U2l6ZSgnMjAnKTtcclxuLy8gZHJhd2VyLnNldFN0YXRlKCdwZW5jaWwnKTtcclxuLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICBkcmF3ZXIuYW5pbWF0ZSgpO1xyXG4vLyB9LCA1MDAwKTsiLCJcclxuXHJcblxyXG5cclxucmVxdWlyZSgnLi9zdHlsZS5jc3MnKTtcclxuXHJcbkRyYXdlci5wcm90b3R5cGUuc2V0U3R5bGVzID0gZnVuY3Rpb24gKHRhcmdldCwgc3R5bGVzKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gc3R5bGVzKSB7XHJcbiAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZVtrZXldID0gc3R5bGVzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5EcmF3ZXIucHJvdG90eXBlLmNyZWF0ZVRvb2xCYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgY29uID0gdGhpcy5jb250YWluZXI7XHJcbiAgICBsZXQgYnRuU3R5bGVzID0ge1xyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwIDVweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnNXB4JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgIGJveFNoYWRvdzogJzAgMCA0cHggcmdiYSgwLDAsMCwwLjIpJyxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBpbnB1dFN0eWxlcyA9IHtcclxuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzVweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgYm94U2hhZG93OiAnaW5zZXQgMCAwIDRweCByZ2JhKDAsMCwwLDAuNSknLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAnNXB4JyxcclxuICAgICAgICB3aWR0aDogJzUwcHgnLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGJ0bkhvdmVyU3R5bGVzID0gYFxyXG4gICAgICAgICAgICAjdG9vbHMgYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2M3YzFjMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdG9vbHMgLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjN2MxYzE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgO1xyXG5cclxuICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShidG5Ib3ZlclN0eWxlcykpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblxyXG4gICAgLy8gdG9vbHNcclxuICAgIGxldCB0b29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9vbHMuc2V0QXR0cmlidXRlKCdpZCcsICd0b29scycpO1xyXG4gICAgY29uLmFwcGVuZENoaWxkKHRvb2xzKTtcclxuICAgIHRoaXMuc2V0U3R5bGVzKHRvb2xzLCB7XHJcbiAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHBlbmNpbFxyXG4gICAgbGV0IHBlbmNpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcGVuY2lsLnNldEF0dHJpYnV0ZSgnaWQnLCAncGVuY2lsJyk7XHJcbiAgICBwZW5jaWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcclxuICAgIHRvb2xzLmFwcGVuZENoaWxkKHBlbmNpbCk7XHJcbiAgICBwZW5jaWwuaW5uZXJUZXh0ID0gJ1BlbmNpbCc7XHJcbiAgICB0aGlzLnNldFN0eWxlcyhwZW5jaWwsIGJ0blN0eWxlcyk7XHJcblxyXG4gICAgLy8gcGVuXHJcbiAgICBsZXQgcGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwZW4uc2V0QXR0cmlidXRlKCdpZCcsICdwZW4nKTtcclxuICAgIHRvb2xzLmFwcGVuZENoaWxkKHBlbik7XHJcbiAgICBwZW4uaW5uZXJUZXh0ID0gJ1Blbic7XHJcbiAgICB0aGlzLnNldFN0eWxlcyhwZW4sIGJ0blN0eWxlcyk7XHJcblxyXG4gICAgLy8gcmVjdFxyXG4gICAgbGV0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdyZWN0Jyk7XHJcbiAgICB0b29scy5hcHBlbmRDaGlsZChyZWN0KTtcclxuICAgIHJlY3QuaW5uZXJUZXh0ID0gJ1JlY3QnO1xyXG4gICAgdGhpcy5zZXRTdHlsZXMocmVjdCwgYnRuU3R5bGVzKTtcclxuXHJcbiAgICAvLyBjbGVhclxyXG4gICAgbGV0IGNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjbGVhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NsZWFyJyk7XHJcbiAgICB0b29scy5hcHBlbmRDaGlsZChjbGVhcik7XHJcbiAgICBjbGVhci5pbm5lclRleHQgPSAnQ2xlYXInO1xyXG4gICAgdGhpcy5zZXRTdHlsZXMoY2xlYXIsIGJ0blN0eWxlcyk7XHJcblxyXG4gICAgLy8gY2xlYXJcclxuICAgIGxldCBwcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwcmV2aWV3LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJldmlldycpO1xyXG4gICAgdG9vbHMuYXBwZW5kQ2hpbGQocHJldmlldyk7XHJcbiAgICBwcmV2aWV3LmlubmVyVGV4dCA9ICdSdW4nO1xyXG4gICAgdGhpcy5zZXRTdHlsZXMocHJldmlldywgYnRuU3R5bGVzKTtcclxuXHJcbiAgICAvLyBjb2xvclxyXG4gICAgbGV0IGNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbG9yLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29sb3InKTtcclxuICAgIGNvbG9yLnNldEF0dHJpYnV0ZSgndHlwZScsICdjb2xvcicpO1xyXG4gICAgdG9vbHMuYXBwZW5kQ2hpbGQoY29sb3IpO1xyXG4gICAgY29sb3IuaW5uZXJUZXh0ID0gJ0NvbG9yJztcclxuICAgIHRoaXMuc2V0U3R5bGVzKGNvbG9yLCBidG5TdHlsZXMpO1xyXG5cclxuICAgIC8vIHNpemVcclxuICAgIGxldCBzaXplVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTaXplICcpO1xyXG4gICAgdG9vbHMuYXBwZW5kQ2hpbGQoc2l6ZVRleHQpO1xyXG4gICAgbGV0IHNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgc2l6ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NpemUnKTtcclxuICAgIHNpemUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTaXplJyk7XHJcbiAgICBzaXplLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLnNpemUpO1xyXG4gICAgdG9vbHMuYXBwZW5kQ2hpbGQoc2l6ZSk7XHJcbiAgICBzaXplLmlubmVyVGV4dCA9ICdTaXplJztcclxuICAgIHRoaXMuc2V0U3R5bGVzKHNpemUsIGlucHV0U3R5bGVzKTtcclxuXHJcbiAgICAvLyBzcGVlZFxyXG4gICAgbGV0IHNwZWVkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTcGVlZCAnKTtcclxuICAgIHRvb2xzLmFwcGVuZENoaWxkKHNwZWVkVGV4dCk7XHJcbiAgICBsZXQgc3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgc3BlZWQuc2V0QXR0cmlidXRlKCdpZCcsICdzcGVlZCcpO1xyXG4gICAgc3BlZWQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTcGVlZCcpO1xyXG4gICAgc3BlZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuc3BlZWQpO1xyXG4gICAgdG9vbHMuYXBwZW5kQ2hpbGQoc3BlZWQpO1xyXG4gICAgc3BlZWQuaW5uZXJUZXh0ID0gJ1NwZWVkJztcclxuICAgIHRoaXMuc2V0U3R5bGVzKHNwZWVkLCBpbnB1dFN0eWxlcyk7XHJcblxyXG4gICAgLy8gbG9vcFxyXG4gICAgbGV0IGxvb3BUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0xvb3AgJyk7XHJcbiAgICB0b29scy5hcHBlbmRDaGlsZChsb29wVGV4dCk7XHJcbiAgICBsZXQgbG9vcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBsb29wLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9vcCcpO1xyXG4gICAgbG9vcC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2xvb3AnKTtcclxuICAgIGxvb3Auc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMubG9vcCk7XHJcbiAgICB0b29scy5hcHBlbmRDaGlsZChsb29wKTtcclxuICAgIGxvb3AuaW5uZXJUZXh0ID0gJ0xvb3AnO1xyXG4gICAgdGhpcy5zZXRTdHlsZXMobG9vcCwgaW5wdXRTdHlsZXMpO1xyXG5cclxuICAgIHNpemUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBzZWxmLnNpemVIYW5kbGVyLmNhbGwoc2VsZiwgZSk7XHJcbiAgICB9KTtcclxuICAgIHNwZWVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgc2VsZi5zcGVlZEhhbmRsZXIuY2FsbChzZWxmLCBlKTtcclxuICAgIH0pO1xyXG4gICAgbG9vcC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHNlbGYubG9vcEhhbmRsZXIuY2FsbChzZWxmLCBlKTtcclxuICAgIH0pO1xyXG4gICAgY29sb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBzZWxmLmNvbG9ySGFuZGxlci5jYWxsKHNlbGYsIGUpO1xyXG4gICAgfSk7XHJcbiAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgc2VsZi5jbGVhckFsbC5jYWxsKHNlbGYsIGUpO1xyXG4gICAgfSk7XHJcbiAgICBwZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHNlbGYucGVuQ2xpY2tIYW5kbGVyLmNhbGwoc2VsZiwgZSk7XHJcbiAgICAgICAgcGVuY2lsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHJlY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgcGVuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICBwZW5jaWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHNlbGYucGVuY2lsQ2xpY2tIYW5kbGVyLmNhbGwoc2VsZiwgZSk7XHJcbiAgICAgICAgcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHJlY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgcGVuY2lsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICByZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBzZWxmLnJlY3RDbGlja0hhbmRsZXIuY2FsbChzZWxmLCBlKTtcclxuICAgICAgICBwZW4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgcGVuY2lsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHJlY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIHByZXZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHNlbGYuYW5pbWF0ZS5jYWxsKHNlbGYsIGUpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5EcmF3ZXIucHJvdG90eXBlLnJlY3RDbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdyZWN0JztcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG59XHJcblxyXG5EcmF3ZXIucHJvdG90eXBlLnR5cGVIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHRoaXMudHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG59XHJcblxyXG5EcmF3ZXIucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmRyYXdSdW4odGhpcy5wcmVDdHgpO1xyXG59XHJcbkRyYXdlci5wcm90b3R5cGUuY29sb3JIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHRoaXMuY29sb3IgPSBlLnRhcmdldC52YWx1ZTtcclxufVxyXG5EcmF3ZXIucHJvdG90eXBlLnNpemVIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHRoaXMuc2l6ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG59XHJcbkRyYXdlci5wcm90b3R5cGUuc3BlZWRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHRoaXMuc3BlZWQgPSBlLnRhcmdldC52YWx1ZTtcclxufVxyXG5cclxuRHJhd2VyLnByb3RvdHlwZS5sb29wSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0aGlzLmxvb3AgPSBlLnRhcmdldC52YWx1ZTtcclxufVxyXG5cclxuRHJhd2VyLnByb3RvdHlwZS5jbGVhckFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc3RvcCA9IHRydWU7XHJcbiAgICB0aGlzLmNsZWFyVGltZXIoKTtcclxuICAgIHRoaXMuZGF0YVN0b3JlID0gW107XHJcbiAgICB0aGlzLmZvbnRTdG9yZSA9IFtdO1xyXG4gICAgdGhpcy5jb2xvclN0b3JlID0gW107XHJcbiAgICB0aGlzLmRyYXdpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubGFzdFBvaW50ID0gdHJ1ZTtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUuY2xlYXJDYW52YXMgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxufVxyXG5cclxuRHJhd2VyLnByb3RvdHlwZS5zZXRTdHJva2VTdHlsZXMgPSBmdW5jdGlvbiAoY3R4LCBpLCBjb2xvclN0b3JlLCBmb250U3RvcmUpIHtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yU3RvcmVbaV07XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUuZ2V0TnVtYmVyID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUludChzdHIpO1xyXG59XHJcblxyXG5EcmF3ZXIucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0aGlzLnN0b3AgPSB0cnVlO1xyXG4gICAgdGhpcy5jbGVhclRpbWVyKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3BlbicpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXN0UG9pbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU3RvcmUucHVzaChbXSk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZVN0b3JlLnB1c2goJ2xpbmUnKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0UG9pbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvclN0b3JlLnB1c2godGhpcy5jb2xvcik7XHJcbiAgICAgICAgICAgIHRoaXMuZm9udFN0b3JlLnB1c2godGhpcy5zaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQYXRoID0gdGhpcy5kYXRhU3RvcmVbdGhpcy5kYXRhU3RvcmUubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYXRoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGZyb21Qb2ludCA9IGN1cnJlbnRQYXRoW2N1cnJlbnRQYXRoLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBsZXQgcG9pbnRzID0gdGhpcy5jcmVhdGVQb2ludHMoMTAsIGZyb21Qb2ludCwgW2Uub2Zmc2V0WCwgZS5vZmZzZXRZXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVN0b3JlW3RoaXMuZGF0YVN0b3JlLmxlbmd0aCAtIDFdID0gY3VycmVudFBhdGguY29uY2F0KHBvaW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRQYXRoLnB1c2goW2Uub2Zmc2V0WCwgZS5vZmZzZXRZXSk7XHJcbiAgICAgICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ3BlbmNpbCcpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUuY3JlYXRlUG9pbnRzID0gZnVuY3Rpb24gKG4sIGZyb20sIHRvKSB7XHJcbiAgICBsZXQgb2ZmWCA9ICh0b1swXSAtIGZyb21bMF0pIC8gbjtcclxuICAgIGxldCBvZmZZID0gKHRvWzFdIC0gZnJvbVsxXSkgLyBuO1xyXG4gICAgbGV0IHBvaW50cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBwb2ludHMucHVzaChbZnJvbVswXSArIChvZmZYICogaSksIGZyb21bMV0gKyAob2ZmWSAqIGkpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9pbnRzO1xyXG59XHJcblxyXG5EcmF3ZXIucHJvdG90eXBlLmRibENsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3BlbicpIHtcclxuICAgICAgICBpZiAodGhpcy5sYXN0UG9pbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU3RvcmUucHVzaChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YVN0b3JlW3RoaXMuZGF0YVN0b3JlLmxlbmd0aCAtIDFdLnB1c2goW2Uub2Zmc2V0WCwgZS5vZmZzZXRZXSk7XHJcbiAgICAgICAgdGhpcy5sYXN0UG9pbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGVtcFBvaW50ID0gW107XHJcbiAgICAgICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ3BlbmNpbCcpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuY2xlYXJDYW52YXMoY3R4KTtcclxuICAgIGxldCBsYXN0RHJhd1BvaW50ID0gW107XHJcbiAgICBsZXQgbGFzdEluZGV4ID0gMDtcclxuICAgIHRoaXMuZGF0YVN0b3JlLmZvckVhY2goKHBhdGgsIGkpID0+IHtcclxuICAgICAgICBsYXN0SW5kZXggPSBpO1xyXG4gICAgICAgIHNlbGYuc2V0U3Ryb2tlU3R5bGVzKGN0eCwgaSwgc2VsZi5jb2xvclN0b3JlLCBzZWxmLmZvbnRTdG9yZSk7XHJcbiAgICAgICAgcGF0aC5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggLSAxID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbGFzdERyYXdQb2ludCA9IHBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgwID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc3RhdGUgPT09ICdyZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRbMF0sIHBvaW50WzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXdCeVR5cGUocG9pbnQsIGN0eCwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHBvaW50WzBdLCBwb2ludFsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmVmb3JlUG9pbnQgPSBwYXRoW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXdCeVR5cGUocG9pbnQsIGN0eCwgaSwgYmVmb3JlUG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH0pO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgc2VsZi5kcmF3QnlUeXBlKHRoaXMudGVtcFBvaW50LCBjdHgsIGxhc3RJbmRleCwgbGFzdERyYXdQb2ludCk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUubW91c2VEb3duSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0aGlzLnN0b3AgPSB0cnVlO1xyXG4gICAgdGhpcy5jbGVhclRpbWVyKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3BlbicpIHtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdwZW5jaWwnKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU3RvcmUucHVzaChbXSk7XHJcbiAgICAgICAgdGhpcy5jb2xvclN0b3JlLnB1c2godGhpcy5jb2xvcik7XHJcbiAgICAgICAgdGhpcy5mb250U3RvcmUucHVzaCh0aGlzLnNpemUpO1xyXG4gICAgICAgIHRoaXMudHlwZVN0b3JlLnB1c2goJ2xpbmUnKTtcclxuICAgICAgICB0aGlzLmRhdGFTdG9yZVt0aGlzLmRhdGFTdG9yZS5sZW5ndGggLSAxXS5wdXNoKFtlLm9mZnNldFgsIGUub2Zmc2V0WV0pO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdyZWN0Jykge1xyXG4gICAgICAgIHRoaXMuZGF0YVN0b3JlLnB1c2goW10pO1xyXG4gICAgICAgIHRoaXMuY29sb3JTdG9yZS5wdXNoKHRoaXMuY29sb3IpO1xyXG4gICAgICAgIHRoaXMuZm9udFN0b3JlLnB1c2godGhpcy5zaXplKTtcclxuICAgICAgICB0aGlzLnR5cGVTdG9yZS5wdXNoKCdyZWN0Jyk7XHJcbiAgICAgICAgdGhpcy5kYXRhU3RvcmVbdGhpcy5kYXRhU3RvcmUubGVuZ3RoIC0gMV0ucHVzaChbZS5vZmZzZXRYLCBlLm9mZnNldFldKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5EcmF3ZXIucHJvdG90eXBlLm1vdXNlVXBIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHRoaXMuZHJhd2luZyA9IGZhbHNlO1xyXG59XHJcblxyXG5EcmF3ZXIucHJvdG90eXBlLnRocm90dGxpbmcgPSBmdW5jdGlvbiAoZnVuYywgZGVsYXkpIHtcclxuICAgIGxldCB0aW1lcjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGlmICh0aW1lcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcclxuICAgICAgICB9LCBkZWxheSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUubW91c2VNb3ZlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3BlbicpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGFzdFBvaW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcFBvaW50ID0gW2Uub2Zmc2V0WCwgZS5vZmZzZXRZXTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdwZW5jaWwnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhd2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTdG9yZVt0aGlzLmRhdGFTdG9yZS5sZW5ndGggLSAxXS5wdXNoKFtlLm9mZnNldFgsIGUub2Zmc2V0WV0pO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlY3QnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhd2luZykge1xyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuZm9udFN0b3JlW3RoaXMuZm9udFN0b3JlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNpemUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBzaXplID0gc2l6ZVsyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZvbnRTdG9yZVt0aGlzLmZvbnRTdG9yZS5sZW5ndGggLSAxXSA9IFtlLm9mZnNldFggLSB0aGlzLmRhdGFTdG9yZVt0aGlzLmRhdGFTdG9yZS5sZW5ndGggLSAxXVswXVswXSwgZS5vZmZzZXRZIC0gdGhpcy5kYXRhU3RvcmVbdGhpcy5kYXRhU3RvcmUubGVuZ3RoIC0gMV1bMF1bMV0sIHNpemVdO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuRHJhd2VyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoaSwgY3R4KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoaSA+PSB0aGlzLmRhdGFTdG9yZS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAodGhpcy5sb29wICYmICF0aGlzLnN0b3ApIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5sb29wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZVN0b3JlW2ldID09PSAncmVjdCcpIHtcclxuICAgICAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0cm9rZVN0eWxlcyhjdHgsIGksIHNlbGYuY29sb3JTdG9yZSwgc2VsZi5mb250U3RvcmUpO1xyXG4gICAgICAgICAgICBzZWxmLmRyYXdCeVR5cGUoc2VsZi5kYXRhU3RvcmVbaV1bMF0sIGN0eCwgaSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgc2VsZi5ydW4oaSArIDEsIGN0eCk7XHJcbiAgICAgICAgfSwgdGhpcy5zcGVlZCAqIDEwKTtcclxuICAgICAgICB0aGlzLnRpbWVyU3RvcmUucHVzaCh0aW1lcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgdGhpcy5kYXRhU3RvcmVbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5kYXRhU3RvcmVbaV1bal07XHJcbiAgICAgICAgICAgIGxldCBsaW5lRGVsYXkgPSBqICogdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmVmb3JlUG9pbnQgPSBzZWxmLmRhdGFTdG9yZVtpXVtqIC0gMV07XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0cm9rZVN0eWxlcyhjdHgsIGksIHNlbGYuY29sb3JTdG9yZSwgc2VsZi5mb250U3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3QnlUeXBlKHBvaW50LCBjdHgsIGksIGJlZm9yZVBvaW50KTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChqID09PSBzZWxmLmRhdGFTdG9yZVtpXS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ydW4oaSArIDEsIGN0eCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGxpbmVEZWxheSk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJTdG9yZS5wdXNoKHRpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUuZHJhd0J5VHlwZSA9IGZ1bmN0aW9uIChwb2ludCwgY3R4LCBpLCBiZWZvcmVQb2ludCkge1xyXG4gICAgbGV0IHR5cGUgPSB0aGlzLnR5cGVTdG9yZVtpXTtcclxuICAgIGlmICh0eXBlID09PSAncmVjdCcpIHtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5mb250U3RvcmVbaV1bMl07XHJcbiAgICAgICAgY3R4LnJlY3QocG9pbnRbMF0sIHBvaW50WzFdLCB0aGlzLmZvbnRTdG9yZVtpXVswXSwgdGhpcy5mb250U3RvcmVbaV1bMV0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluZScpIHtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5mb250U3RvcmVbaV07XHJcbiAgICAgICAgaWYgKGJlZm9yZVBvaW50KSB7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oYmVmb3JlUG9pbnRbMF0sIGJlZm9yZVBvaW50WzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LmxpbmVUbyhwb2ludFswXSwgcG9pbnRbMV0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xyXG4gICAgICAgIGN0eC5hcmMocG9pbnRbMF0sIHBvaW50WzFdLCB0aGlzLmZvbnRTdG9yZVtpXSwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5EcmF3ZXIucHJvdG90eXBlLmNsZWFyVGltZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnRpbWVyU3RvcmUuZm9yRWFjaChmdW5jdGlvbiAodGltZXIpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUuZHJhd1J1biA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgIHRoaXMuY2xlYXJDYW52YXMoY3R4KTtcclxuICAgIGlmICh0aGlzLmRhdGFTdG9yZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0b3AgPSBmYWxzZTtcclxuICAgIHRoaXMucnVuKDAsIGN0eCk7XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUucGVuQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3BlbicpO1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdwZW4nO1xyXG59XHJcblxyXG5EcmF3ZXIucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUuc2V0Q29sb3IgPSBmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxufVxyXG5cclxuRHJhd2VyLnByb3RvdHlwZS5zZXRTaXplID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUuc2V0TG9vcCA9IGZ1bmN0aW9uKGxvb3ApIHtcclxuICAgIHRoaXMubG9vcCA9IGxvb3A7XHJcbn1cclxuXHJcbkRyYXdlci5wcm90b3R5cGUuc2V0U3BlZWQgPSBmdW5jdGlvbihzcGVlZCkge1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG59XHJcblxyXG5EcmF3ZXIucHJvdG90eXBlLnBlbmNpbENsaWNrSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdwZW5jaWwnKTtcclxuICAgIHRoaXMuc3RhdGUgPSAncGVuY2lsJztcclxufVxyXG5cclxuZnVuY3Rpb24gRHJhd2VyKG9wdGlvbnMpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICB0aGlzLmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuYy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5wcmVDdHggPSB0aGlzLmMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCB8fCA0MDA7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDQwMDtcclxuICAgIHRoaXMuZHJhd2luZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5sYXN0UG9pbnQgPSB0cnVlO1xyXG4gICAgdGhpcy5kYXRhU3RvcmUgPSBbXTtcclxuICAgIHRoaXMuY29sb3JTdG9yZSA9IFtdO1xyXG4gICAgdGhpcy5mb250U3RvcmUgPSBbXTtcclxuICAgIHRoaXMudGltZXJTdG9yZSA9IFtdO1xyXG4gICAgdGhpcy50eXBlU3RvcmUgPSBbXTtcclxuICAgIHRoaXMuc3RvcCA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXRlID0gJ3BlbmNpbCc7XHJcbiAgICB0aGlzLnRlbXBQb2ludCA9IFtdO1xyXG4gICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNpemUgPSBvcHRpb25zLnNpemUgfHwgMTtcclxuICAgIHRoaXMuc3BlZWQgPSBvcHRpb25zLnNwZWVkIHx8IDIwO1xyXG4gICAgdGhpcy5sb29wID0gb3B0aW9ucy5sb29wIHx8IDMwMDA7XHJcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvciB8fCAnIzAwMDAwMCc7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMudG9vbEJhcikge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVG9vbEJhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYyk7XHJcblxyXG4gICAgdGhpcy5jLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLndpZHRoKTtcclxuICAgIHRoaXMuYy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBzZWxmLm1vdXNlRG93bkhhbmRsZXIuY2FsbChzZWxmLCBlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHNlbGYubW91c2VVcEhhbmRsZXIuY2FsbChzZWxmLCBlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgc2VsZi5tb3VzZU1vdmVIYW5kbGVyLmNhbGwoc2VsZiwgZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgc2VsZi5jbGlja0hhbmRsZXIuY2FsbChzZWxmLCBlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBzZWxmLmRibENsaWNrSGFuZGxlci5jYWxsKHNlbGYsIGUpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRHJhd2VyO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=