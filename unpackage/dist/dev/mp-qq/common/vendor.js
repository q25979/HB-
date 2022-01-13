(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-qq/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


var oName = 'getUserInfo';
var nName = 'getUserProfile';

var getUserProfile = {
  name: wx.canIUse(nName) ? nName : oName };


var protocols = {
  navigateTo: navigateTo,
  redirectTo: redirectTo,
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  getUserProfile: getUserProfile };

var todos = [
'preloadPage',
'unPreloadPage',
'loadSubPackage'
// 'startBeaconDiscovery',
// 'stopBeaconDiscovery',
// 'getBeacons',
// 'onBeaconUpdate',
// 'onBeaconServiceChange',
// 'addPhoneContact',
// 'getHCEState',
// 'startHCE',
// 'stopHCE',
// 'onHCEMessage',
// 'sendHCEMessage',
// 'startWifi',
// 'stopWifi',
// 'connectWifi',
// 'getWifiList',
// 'onGetWifiList',
// 'setWifiList',
// 'onWifiConnected',
// 'getConnectedWifi',
// 'setTopBarText',
// 'getPhoneNumber',
// 'chooseAddress',
// 'addCard',
// 'openCard',
// 'getWeRunData',
// 'launchApp',
// 'chooseInvoiceTitle',
// 'checkIsSupportSoterAuthentication',
// 'startSoterAuthentication',
// 'checkIsSoterEnrolledInDevice',
// 'vibrate',
// 'loadFontFace',
// 'getExtConfig',
// 'getExtConfigSync'
];
var canIUses = [
'scanCode',
'startAccelerometer',
'stopAccelerometer',
'onAccelerometerChange',
'startCompass',
'onCompassChange',
'setScreenBrightness',
'getScreenBrightness',
'setKeepScreenOn',
'onUserCaptureScreen',
'vibrateLong',
'vibrateShort',
'createWorker',
'connectSocket',
'onSocketOpen',
'onSocketError',
'sendSocketMessage',
'onSocketMessage',
'closeSocket',
'onSocketClose',
'openDocument',
'updateShareMenu',
'getShareInfo',
'createLivePlayerContext',
'createLivePusherContext',
'setNavigationBarColor',
'onMemoryWarning',
'onNetworkStatusChange',
'reportMonitor',
'getLogManager',
'reportAnalytics'];


var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform 'QQ\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform 'QQ\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['qq'],
  share: ['qq'],
  payment: ['qqpay'],
  push: ['qq'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


function createMediaQueryObserver() {
  var mediaQueryObserver = {};var _wx$getSystemInfoSync2 =



  wx.getSystemInfoSync(),windowWidth = _wx$getSystemInfoSync2.windowWidth,windowHeight = _wx$getSystemInfoSync2.windowHeight;

  var orientation = windowWidth < windowHeight ? 'portrait' : 'landscape';

  mediaQueryObserver.observe = function (options, callback) {
    var matches = true;
    for (var item in options) {
      var itemValue = item === 'orientation' ? options[item] : Number(options[item]);
      if (options[item] !== '') {
        if (item === 'width') {
          if (itemValue === windowWidth) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minWidth') {
          if (windowWidth >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxWidth') {
          if (windowWidth <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'height') {
          if (itemValue === windowHeight) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minHeight') {
          if (windowHeight >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxHeight') {
          if (windowHeight <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'orientation') {
          if (options[item] === orientation) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
      }
    }
    callback(matches);

    return matches;
  };

  mediaQueryObserver.disconnect = function () {
  };

  return mediaQueryObserver;
}

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createMediaQueryObserver: createMediaQueryObserver });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"671的HB开源","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this3 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this3.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel$1() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel$1();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-qq";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function parseApp$1(vm) {
  return parseApp(vm);
}

function createApp(vm) {
  App(parseApp$1(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function parseComponent$1(vueComponentOptions) {
  return parseComponent(vueComponentOptions);
}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent$1(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function parsePage$1(vuePageOptions) {
  return parsePage(vuePageOptions);
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage$1(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent$1(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp$1(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp$1(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {args[_key9] = arguments[_key9];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-qq" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"671的HB开源","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"671的HB开源","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"671的HB开源","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"671的HB开源","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!**************************************************!*\
  !*** /Src/HbuildProject/开源插件开发UNIAPP/pages.json ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1tcC1xcS9kaXN0L2luZGV4LmpzP2E4MjEiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcz9jZDAwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL21wLXZ1ZS9kaXN0L21wLnJ1bnRpbWUuZXNtLmpzPzY2ZmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby91bmktaTE4bi9kaXN0L3VuaS1pMThuLmVzLmpzPzM3ZGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiXSwibmFtZXMiOlsicmVhbEF0b2IiLCJiNjQiLCJiNjRyZSIsImF0b2IiLCJzdHIiLCJTdHJpbmciLCJyZXBsYWNlIiwidGVzdCIsIkVycm9yIiwic2xpY2UiLCJsZW5ndGgiLCJiaXRtYXAiLCJyZXN1bHQiLCJyMSIsInIyIiwiaSIsImluZGV4T2YiLCJjaGFyQXQiLCJmcm9tQ2hhckNvZGUiLCJiNjREZWNvZGVVbmljb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic3BsaXQiLCJtYXAiLCJjIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwiam9pbiIsImdldEN1cnJlbnRVc2VySW5mbyIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsInRva2VuQXJyIiwidWlkIiwicm9sZSIsInBlcm1pc3Npb24iLCJ0b2tlbkV4cGlyZWQiLCJ1c2VySW5mbyIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwibWVzc2FnZSIsImV4cCIsImlhdCIsInVuaUlkTWl4aW4iLCJWdWUiLCJwcm90b3R5cGUiLCJ1bmlJREhhc1JvbGUiLCJyb2xlSWQiLCJ1bmlJREhhc1Blcm1pc3Npb24iLCJwZXJtaXNzaW9uSWQiLCJ1bmlJRFRva2VuVmFsaWQiLCJEYXRlIiwibm93IiwiX3RvU3RyaW5nIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJpc0ZuIiwiZm4iLCJpc1N0ciIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCJjYWxsIiwiaGFzT3duIiwia2V5Iiwibm9vcCIsImNhY2hlZCIsImNhY2hlIiwiY3JlYXRlIiwiY2FjaGVkRm4iLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJfIiwidG9VcHBlckNhc2UiLCJIT09LUyIsImdsb2JhbEludGVyY2VwdG9ycyIsInNjb3BlZEludGVyY2VwdG9ycyIsIm1lcmdlSG9vayIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwicmVzIiwiY29uY2F0IiwiQXJyYXkiLCJpc0FycmF5IiwiZGVkdXBlSG9va3MiLCJob29rcyIsInB1c2giLCJyZW1vdmVIb29rIiwiaG9vayIsImluZGV4Iiwic3BsaWNlIiwibWVyZ2VJbnRlcmNlcHRvckhvb2siLCJpbnRlcmNlcHRvciIsIm9wdGlvbiIsImtleXMiLCJmb3JFYWNoIiwicmVtb3ZlSW50ZXJjZXB0b3JIb29rIiwiYWRkSW50ZXJjZXB0b3IiLCJtZXRob2QiLCJyZW1vdmVJbnRlcmNlcHRvciIsIndyYXBwZXJIb29rIiwiZGF0YSIsImlzUHJvbWlzZSIsInRoZW4iLCJxdWV1ZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhbGxiYWNrIiwid3JhcHBlck9wdGlvbnMiLCJvcHRpb25zIiwibmFtZSIsIm9sZENhbGxiYWNrIiwiY2FsbGJhY2tJbnRlcmNlcHRvciIsIndyYXBwZXJSZXR1cm5WYWx1ZSIsInJldHVyblZhbHVlIiwicmV0dXJuVmFsdWVIb29rcyIsImdldEFwaUludGVyY2VwdG9ySG9va3MiLCJzY29wZWRJbnRlcmNlcHRvciIsImludm9rZUFwaSIsImFwaSIsInBhcmFtcyIsImludm9rZSIsInByb21pc2VJbnRlcmNlcHRvciIsInJlamVjdCIsIlNZTkNfQVBJX1JFIiwiQ09OVEVYVF9BUElfUkUiLCJDT05URVhUX0FQSV9SRV9FWEMiLCJBU1lOQ19BUEkiLCJDQUxMQkFDS19BUElfUkUiLCJpc0NvbnRleHRBcGkiLCJpc1N5bmNBcGkiLCJpc0NhbGxiYWNrQXBpIiwiaGFuZGxlUHJvbWlzZSIsImNhdGNoIiwiZXJyIiwic2hvdWxkUHJvbWlzZSIsImZpbmFsbHkiLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwicmVhc29uIiwicHJvbWlzaWZ5IiwicHJvbWlzZUFwaSIsInN1Y2Nlc3MiLCJmYWlsIiwiY29tcGxldGUiLCJhc3NpZ24iLCJFUFMiLCJCQVNFX0RFVklDRV9XSURUSCIsImlzSU9TIiwiZGV2aWNlV2lkdGgiLCJkZXZpY2VEUFIiLCJjaGVja0RldmljZVdpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJwbGF0Zm9ybSIsInBpeGVsUmF0aW8iLCJ3aW5kb3dXaWR0aCIsInVweDJweCIsIm51bWJlciIsIm5ld0RldmljZVdpZHRoIiwiTnVtYmVyIiwiTWF0aCIsImZsb29yIiwiZ2V0TG9jYWxlIiwiYXBwIiwiZ2V0QXBwIiwiYWxsb3dEZWZhdWx0IiwiJHZtIiwiJGxvY2FsZSIsImxhbmd1YWdlIiwic2V0TG9jYWxlIiwibG9jYWxlIiwib2xkTG9jYWxlIiwib25Mb2NhbGVDaGFuZ2VDYWxsYmFja3MiLCJvbkxvY2FsZUNoYW5nZSIsImdsb2JhbCIsImludGVyY2VwdG9ycyIsImJhc2VBcGkiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJFdmVudENoYW5uZWwiLCJpZCIsImV2ZW50cyIsImxpc3RlbmVyIiwiZW1pdENhY2hlIiwib24iLCJldmVudE5hbWUiLCJhcmdzIiwiZm5zIiwib3B0IiwiYXBwbHkiLCJmaWx0ZXIiLCJ0eXBlIiwiX2FkZExpc3RlbmVyIiwiX2NsZWFyQ2FjaGUiLCJjYWNoZUFyZ3MiLCJlbWl0Iiwic2hpZnQiLCJldmVudENoYW5uZWxzIiwiZXZlbnRDaGFubmVsU3RhY2siLCJpbml0RXZlbnRDaGFubmVsIiwiZXZlbnRDaGFubmVsIiwiZ2V0RXZlbnRDaGFubmVsIiwibmF2aWdhdGVUbyIsImZyb21BcmdzIiwidG9BcmdzIiwidXJsIiwiZnJvbVJlcyIsInRvUmVzIiwiZmluZEV4aXN0c1BhZ2VJbmRleCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuIiwicGFnZSIsIiRwYWdlIiwiZnVsbFBhdGgiLCJyZWRpcmVjdFRvIiwiZXhpc3RzIiwiZGVsdGEiLCJleGlzdHNQYWdlSW5kZXgiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50SW5kZXgiLCJwYXJzZUludCIsImN1cnJlbnQiLCJpc05hTiIsInVybHMiLCJpdGVtIiwiaW5kaWNhdG9yIiwibG9vcCIsIlVVSURfS0VZIiwiZGV2aWNlSWQiLCJhZGRVdWlkIiwicmFuZG9tIiwic2V0U3RvcmFnZSIsImFkZFNhZmVBcmVhSW5zZXRzIiwic2FmZUFyZWEiLCJzYWZlQXJlYUluc2V0cyIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIndpbmRvd0hlaWdodCIsImdldFN5c3RlbUluZm8iLCJvTmFtZSIsIm5OYW1lIiwiZ2V0VXNlclByb2ZpbGUiLCJjYW5JVXNlIiwicHJvdG9jb2xzIiwidG9kb3MiLCJjYW5JVXNlcyIsIkNBTExCQUNLUyIsInByb2Nlc3NDYWxsYmFjayIsIm1ldGhvZE5hbWUiLCJwcm9jZXNzUmV0dXJuVmFsdWUiLCJwcm9jZXNzQXJncyIsImFyZ3NPcHRpb24iLCJrZWVwRnJvbUFyZ3MiLCJrZXlPcHRpb24iLCJjb25zb2xlIiwid2FybiIsImtlZXBSZXR1cm5WYWx1ZSIsIndyYXBwZXIiLCJwcm90b2NvbCIsImFyZzEiLCJhcmcyIiwidG9kb0FwaXMiLCJUT0RPUyIsImNyZWF0ZVRvZG9BcGkiLCJ0b2RvQXBpIiwiZXJyTXNnIiwicHJvdmlkZXJzIiwib2F1dGgiLCJzaGFyZSIsInBheW1lbnQiLCJnZXRQcm92aWRlciIsInNlcnZpY2UiLCJwcm92aWRlciIsImV4dHJhQXBpIiwiZ2V0RW1pdHRlciIsIkVtaXR0ZXIiLCJnZXRVbmlFbWl0dGVyIiwiY3R4IiwiJG9uIiwiYXJndW1lbnRzIiwiJG9mZiIsIiRvbmNlIiwiJGVtaXQiLCJldmVudEFwaSIsImNyZWF0ZU1lZGlhUXVlcnlPYnNlcnZlciIsIm1lZGlhUXVlcnlPYnNlcnZlciIsIm9yaWVudGF0aW9uIiwib2JzZXJ2ZSIsIm1hdGNoZXMiLCJpdGVtVmFsdWUiLCJkaXNjb25uZWN0IiwiTVBQYWdlIiwiUGFnZSIsIk1QQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiY3VzdG9taXplUkUiLCJjdXN0b21pemUiLCJpbml0VHJpZ2dlckV2ZW50IiwibXBJbnN0YW5jZSIsIm9sZFRyaWdnZXJFdmVudCIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwiaW5pdEhvb2siLCJpc0NvbXBvbmVudCIsIm9sZEhvb2siLCJfXyR3cmFwcGVyZWQiLCJhZnRlciIsIlBBR0VfRVZFTlRfSE9PS1MiLCJpbml0TW9ja3MiLCJ2bSIsIm1vY2tzIiwiJG1wIiwibXBUeXBlIiwibW9jayIsImhhc0hvb2siLCJ2dWVPcHRpb25zIiwiZGVmYXVsdCIsImV4dGVuZE9wdGlvbnMiLCJzdXBlciIsIm1peGlucyIsImZpbmQiLCJtaXhpbiIsImluaXRIb29rcyIsIm1wT3B0aW9ucyIsIl9fY2FsbF9ob29rIiwiaW5pdFZ1ZUNvbXBvbmVudCIsIlZ1ZUNvbXBvbmVudCIsImV4dGVuZCIsImluaXRTbG90cyIsInZ1ZVNsb3RzIiwiJHNsb3RzIiwic2xvdE5hbWUiLCIkc2NvcGVkU2xvdHMiLCJpbml0VnVlSWRzIiwidnVlSWRzIiwiXyR2dWVJZCIsIl8kdnVlUGlkIiwiaW5pdERhdGEiLCJjb250ZXh0IiwibWV0aG9kcyIsImUiLCJwcm9jZXNzIiwiVlVFX0FQUF9ERUJVRyIsInN0cmluZ2lmeSIsIl9fbGlmZWN5Y2xlX2hvb2tzX18iLCJQUk9QX1RZUEVTIiwiQm9vbGVhbiIsImNyZWF0ZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJuZXdWYWwiLCJvbGRWYWwiLCJpbml0QmVoYXZpb3JzIiwiaW5pdEJlaGF2aW9yIiwidnVlQmVoYXZpb3JzIiwiYmVoYXZpb3JzIiwidnVlRXh0ZW5kcyIsImV4dGVuZHMiLCJ2dWVNaXhpbnMiLCJ2dWVQcm9wcyIsInByb3BzIiwiYmVoYXZpb3IiLCJwcm9wZXJ0aWVzIiwiaW5pdFByb3BlcnRpZXMiLCJ2dWVNaXhpbiIsInBhcnNlUHJvcFR5cGUiLCJkZWZhdWx0VmFsdWUiLCJmaWxlIiwiaXNCZWhhdmlvciIsInZ1ZUlkIiwiZ2VuZXJpYyIsInNjb3BlZFNsb3RzQ29tcGlsZXIiLCJzZXREYXRhIiwib3B0cyIsIndyYXBwZXIkMSIsIm1wIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkZXRhaWwiLCJtYXJrZXJJZCIsImdldEV4dHJhVmFsdWUiLCJkYXRhUGF0aHNBcnJheSIsImRhdGFQYXRoQXJyYXkiLCJkYXRhUGF0aCIsInByb3BQYXRoIiwidmFsdWVQYXRoIiwidkZvciIsImlzSW50ZWdlciIsInN1YnN0ciIsIl9fZ2V0X3ZhbHVlIiwidkZvckl0ZW0iLCJ2Rm9yS2V5IiwicHJvY2Vzc0V2ZW50RXh0cmEiLCJleHRyYSIsImV4dHJhT2JqIiwiX19hcmdzX18iLCJnZXRPYmpCeUFycmF5IiwiYXJyIiwiZWxlbWVudCIsInByb2Nlc3NFdmVudEFyZ3MiLCJpc0N1c3RvbSIsImlzQ3VzdG9tTVBFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29tVHlwZSIsInJldCIsImFyZyIsIk9OQ0UiLCJDVVNUT00iLCJpc01hdGNoRXZlbnRUeXBlIiwiZXZlbnRUeXBlIiwib3B0VHlwZSIsImdldENvbnRleHRWbSIsIiRwYXJlbnQiLCIkb3B0aW9ucyIsIiRzY29wZSIsImhhbmRsZUV2ZW50IiwiZXZlbnRPcHRzIiwiZXZlbnRPcHQiLCJldmVudHNBcnJheSIsImlzT25jZSIsImV2ZW50QXJyYXkiLCJoYW5kbGVyQ3R4IiwiaGFuZGxlciIsIm9uY2UiLCJtZXNzYWdlcyIsImluaXRJMThuTWVzc2FnZXMiLCJpc0VuYWJsZUxvY2FsZSIsImxvY2FsZUtleXMiLCJfX3VuaUNvbmZpZyIsImxvY2FsZXMiLCJjdXJNZXNzYWdlcyIsInVzZXJNZXNzYWdlcyIsImkxOG4iLCJ0IiwiaTE4bk1peGluIiwiYmVmb3JlQ3JlYXRlIiwidW53YXRjaCIsIndhdGNoTG9jYWxlIiwiJGZvcmNlVXBkYXRlIiwiJCR0IiwidmFsdWVzIiwic2V0TG9jYWxlJDEiLCJnZXRMb2NhbGUkMSIsImluaXRBcHBMb2NhbGUiLCJhcHBWbSIsInN0YXRlIiwib2JzZXJ2YWJsZSIsImxvY2FsZVdhdGNoZXJzIiwiJHdhdGNoTG9jYWxlIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJ2Iiwid2F0Y2giLCJpbml0RXZlbnRDaGFubmVsJDEiLCJnZXRPcGVuZXJFdmVudENoYW5uZWwiLCJfX2V2ZW50Q2hhbm5lbF9fIiwiY2FsbEhvb2siLCJfX2lkX18iLCJpbml0U2NvcGVkU2xvdHNQYXJhbXMiLCJjZW50ZXIiLCJwYXJlbnRzIiwiJGhhc1Njb3BlZFNsb3RzUGFyYW1zIiwiaGFzIiwiJGdldFNjb3BlZFNsb3RzUGFyYW1zIiwib2JqZWN0IiwiJHNldFNjb3BlZFNsb3RzUGFyYW1zIiwicHJvcHNEYXRhIiwiZGVzdHJveWVkIiwicGFyc2VCYXNlQXBwIiwiaW5pdFJlZnMiLCJzdG9yZSIsIiRzdG9yZSIsIm1wSG9zdCIsIiRpMThuIiwiX2kxOG4iLCJhcHBPcHRpb25zIiwib25MYXVuY2giLCJnbG9iYWxEYXRhIiwiX2lzTW91bnRlZCIsImZpbmRWbUJ5VnVlSWQiLCJ2dWVQaWQiLCIkY2hpbGRyZW4iLCJjaGlsZFZtIiwicGFyZW50Vm0iLCJCZWhhdmlvciIsImlzUGFnZSIsInJvdXRlIiwiaW5pdFJlbGF0aW9uIiwic2VsZWN0QWxsQ29tcG9uZW50cyIsInNlbGVjdG9yIiwiJHJlZnMiLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwicmVmIiwiZm9yQ29tcG9uZW50cyIsImhhbmRsZUxpbmsiLCJwYXJlbnQiLCJwYXJzZUFwcCIsInBhcnNlQXBwJDEiLCJjcmVhdGVBcHAiLCJBcHAiLCJlbmNvZGVSZXNlcnZlUkUiLCJlbmNvZGVSZXNlcnZlUmVwbGFjZXIiLCJjb21tYVJFIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3RyaW5naWZ5UXVlcnkiLCJlbmNvZGVTdHIiLCJ2YWwiLCJ1bmRlZmluZWQiLCJ2YWwyIiwieCIsInBhcnNlQmFzZUNvbXBvbmVudCIsInZ1ZUNvbXBvbmVudE9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwiYWRkR2xvYmFsQ2xhc3MiLCJjb21wb25lbnRPcHRpb25zIiwiX19maWxlIiwibGlmZXRpbWVzIiwiYXR0YWNoZWQiLCIkbW91bnQiLCJyZWFkeSIsImRldGFjaGVkIiwiJGRlc3Ryb3kiLCJwYWdlTGlmZXRpbWVzIiwic2hvdyIsImhpZGUiLCJyZXNpemUiLCJzaXplIiwiX19sIiwiX19lIiwiZXh0ZXJuYWxDbGFzc2VzIiwid3hzQ2FsbE1ldGhvZHMiLCJjYWxsTWV0aG9kIiwicGFyc2VDb21wb25lbnQiLCJwYXJzZUNvbXBvbmVudCQxIiwiaG9va3MkMSIsInBhcnNlQmFzZVBhZ2UiLCJ2dWVQYWdlT3B0aW9ucyIsInBhZ2VPcHRpb25zIiwib25Mb2FkIiwicXVlcnkiLCJjb3B5UXVlcnkiLCJpcyIsInBhcnNlUGFnZSIsInBhcnNlUGFnZSQxIiwiY3JlYXRlUGFnZSIsImNyZWF0ZUNvbXBvbmVudCIsImNyZWF0ZVN1YnBhY2thZ2VBcHAiLCJvblNob3ciLCJvbkFwcFNob3ciLCJvbkhpZGUiLCJvbkFwcEhpZGUiLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsImNyZWF0ZVBsdWdpbiIsImNhbklVc2VBcGkiLCJhcGlOYW1lIiwidW5pIiwiUHJveHkiLCJ1bmkkMSIsImlzT2JqZWN0IiwiZGVmYXVsdERlbGltaXRlcnMiLCJCYXNlRm9ybWF0dGVyIiwiX2NhY2hlcyIsImRlbGltaXRlcnMiLCJ0b2tlbnMiLCJjb21waWxlIiwiUkVfVE9LRU5fTElTVF9WQUxVRSIsIlJFX1RPS0VOX05BTUVEX1ZBTFVFIiwiZm9ybWF0Iiwic3RhcnREZWxpbWl0ZXIiLCJlbmREZWxpbWl0ZXIiLCJwb3NpdGlvbiIsInRleHQiLCJjaGFyIiwic3ViIiwiaXNDbG9zZWQiLCJjb21waWxlZCIsIm1vZGUiLCJMT0NBTEVfWkhfSEFOUyIsIkxPQ0FMRV9aSF9IQU5UIiwiTE9DQUxFX0VOIiwiTE9DQUxFX0ZSIiwiTE9DQUxFX0VTIiwiZGVmYXVsdEZvcm1hdHRlciIsImluY2x1ZGUiLCJwYXJ0cyIsInBhcnQiLCJzdGFydHNXaXRoIiwibm9ybWFsaXplTG9jYWxlIiwidHJpbSIsInRvTG93ZXJDYXNlIiwibGFuZyIsIkkxOG4iLCJmYWxsYmFja0xvY2FsZSIsIndhdGNoZXIiLCJmb3JtYXRlciIsIndhdGNoZXJzIiwib3ZlcnJpZGUiLCJpbnRlcnBvbGF0ZSIsIndhdGNoQXBwTG9jYWxlIiwibmV3TG9jYWxlIiwiJHdhdGNoIiwiZ2V0RGVmYXVsdExvY2FsZSIsImluaXRWdWVJMThuIiwiaXNXYXRjaGVkQXBwTG9jYWxlIiwiZiIsImFkZCIsImlzU3RyaW5nIiwiaGFzSTE4bkpzb24iLCJqc29uT2JqIiwid2Fsa0pzb25PYmoiLCJpc0kxOG5TdHIiLCJwYXJzZUkxOG5Kc29uIiwiY29tcGlsZVN0ciIsImNvbXBpbGVJMThuSnNvblN0ciIsImpzb25TdHIiLCJsb2NhbGVWYWx1ZXMiLCJ1bnNoaWZ0IiwiY29tcGlsZUpzb25PYmoiLCJjb21waWxlVmFsdWUiLCJ2YWx1ZUxvY2FsZXMiLCJsb2NhbFZhbHVlIiwid2FsayIsInJlc29sdmVMb2NhbGUiLCJyZXNvbHZlTG9jYWxlQ2hhaW4iLCJjaGFpbiIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzttVUFBQTtBQUNBLGdFOztBQUVBLElBQUlBLFFBQUo7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLG1FQUFaO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLHNFQUFkOztBQUVBLElBQUksT0FBT0MsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM5QkgsVUFBUSxHQUFHLGtCQUFVSSxHQUFWLEVBQWU7QUFDeEJBLE9BQUcsR0FBR0Ms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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLHFDQUFxQyxFQUFF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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUZBQXVGO0FBQzVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0JBQW9CLEVBQUU7O0FBRXBEO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFxQztBQUN6RDtBQUNBLE1BQU0sU0FBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QyxxQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseUJBQXlCO0FBQ3pCO0FBQ0Esc0JBQXNCLGlDQUFpQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLLE1BQU0sRUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxVQUFVLElBQXFDO0FBQ3BEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw4QkFBOEI7QUFDOUIsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBLEtBQUssTUFBTSxFQUVOO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsWUFBWSxLQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLDJCQUEyQixFQUFFO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyw0QkFBNEIsRUFBRTtBQUN4RSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUMsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLHNHQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsZ0NBQWdDLEVBQUU7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNHQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsV0FBVyxzR0FBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QiwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsVUFBVSxzR0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxxREFBcUQsRUFBRSxTQUFTO0FBQ3RIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRWUsa0VBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs0bkZDLzVMbkIsSUFBTWxlLE9BQU8sR0FBR0QsS0FBSyxDQUFDQyxPQUF0QjtBQUNBLElBQU1tZSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDcEQsR0FBRCxVQUFTQSxHQUFHLEtBQUssSUFBUixJQUFnQixPQUFPQSxHQUFQLEtBQWUsUUFBeEMsRUFBakI7QUFDQSxJQUFNcUQsaUJBQWlCLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUExQixDO0FBQ01DLGE7QUFDRiwyQkFBYztBQUNWLFNBQUtDLE9BQUwsR0FBZW5nQixNQUFNLENBQUNhLE1BQVAsQ0FBYyxJQUFkLENBQWY7QUFDSCxHO0FBQ1czQixXLEVBQVNxWixNLEVBQXdDLEtBQWhDNkgsVUFBZ0MsdUVBQW5CSCxpQkFBbUI7QUFDekQsVUFBSSxDQUFDMUgsTUFBTCxFQUFhO0FBQ1QsZUFBTyxDQUFDclosT0FBRCxDQUFQO0FBQ0g7QUFDRCxVQUFJbWhCLE1BQU0sR0FBRyxLQUFLRixPQUFMLENBQWFqaEIsT0FBYixDQUFiO0FBQ0EsVUFBSSxDQUFDbWhCLE1BQUwsRUFBYTtBQUNUQSxjQUFNLEdBQUdyaEIsS0FBSyxDQUFDRSxPQUFELEVBQVVraEIsVUFBVixDQUFkO0FBQ0EsYUFBS0QsT0FBTCxDQUFhamhCLE9BQWIsSUFBd0JtaEIsTUFBeEI7QUFDSDtBQUNELGFBQU9DLE9BQU8sQ0FBQ0QsTUFBRCxFQUFTOUgsTUFBVCxDQUFkO0FBQ0gsSzs7QUFFTCxJQUFNZ0ksbUJBQW1CLEdBQUcsVUFBNUI7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxVQUE3QjtBQUNBLFNBQVN4aEIsS0FBVCxDQUFleWhCLE1BQWYsUUFBdUQscUNBQS9CQyxjQUErQixZQUFmQyxZQUFlO0FBQ25ELE1BQU1OLE1BQU0sR0FBRyxFQUFmO0FBQ0EsTUFBSU8sUUFBUSxHQUFHLENBQWY7QUFDQSxNQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBLFNBQU9ELFFBQVEsR0FBR0gsTUFBTSxDQUFDcmpCLE1BQXpCLEVBQWlDO0FBQzdCLFFBQUkwakIsSUFBSSxHQUFHTCxNQUFNLENBQUNHLFFBQVEsRUFBVCxDQUFqQjtBQUNBLFFBQUlFLElBQUksS0FBS0osY0FBYixFQUE2QjtBQUN6QixVQUFJRyxJQUFKLEVBQVU7QUFDTlIsY0FBTSxDQUFDcmUsSUFBUCxDQUFZLEVBQUUwRyxJQUFJLEVBQUUsTUFBUixFQUFnQnJELEtBQUssRUFBRXdiLElBQXZCLEVBQVo7QUFDSDtBQUNEQSxVQUFJLEdBQUcsRUFBUDtBQUNBLFVBQUlFLEdBQUcsR0FBRyxFQUFWO0FBQ0FELFVBQUksR0FBR0wsTUFBTSxDQUFDRyxRQUFRLEVBQVQsQ0FBYjtBQUNBLGFBQU9FLElBQUksS0FBS2pFLFNBQVQsSUFBc0JpRSxJQUFJLEtBQUtILFlBQXRDLEVBQW9EO0FBQ2hESSxXQUFHLElBQUlELElBQVA7QUFDQUEsWUFBSSxHQUFHTCxNQUFNLENBQUNHLFFBQVEsRUFBVCxDQUFiO0FBQ0g7QUFDRCxVQUFNSSxRQUFRLEdBQUdGLElBQUksS0FBS0gsWUFBMUI7QUFDQSxVQUFNalksSUFBSSxHQUFHNlgsbUJBQW1CLENBQUN0akIsSUFBcEIsQ0FBeUI4akIsR0FBekI7QUFDUCxZQURPO0FBRVBDLGNBQVEsSUFBSVIsb0JBQW9CLENBQUN2akIsSUFBckIsQ0FBMEI4akIsR0FBMUIsQ0FBWjtBQUNJLGFBREo7QUFFSSxlQUpWO0FBS0FWLFlBQU0sQ0FBQ3JlLElBQVAsQ0FBWSxFQUFFcUQsS0FBSyxFQUFFMGIsR0FBVCxFQUFjclksSUFBSSxFQUFKQSxJQUFkLEVBQVo7QUFDSDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQSxTQXlCSztBQUNEbVksWUFBSSxJQUFJQyxJQUFSO0FBQ0g7QUFDSjtBQUNERCxNQUFJLElBQUlSLE1BQU0sQ0FBQ3JlLElBQVAsQ0FBWSxFQUFFMEcsSUFBSSxFQUFFLE1BQVIsRUFBZ0JyRCxLQUFLLEVBQUV3YixJQUF2QixFQUFaLENBQVI7QUFDQSxTQUFPUixNQUFQO0FBQ0g7QUFDRCxTQUFTQyxPQUFULENBQWlCRCxNQUFqQixFQUF5QjlILE1BQXpCLEVBQWlDO0FBQzdCLE1BQU0wSSxRQUFRLEdBQUcsRUFBakI7QUFDQSxNQUFJOWUsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFNK2UsSUFBSSxHQUFHcmYsT0FBTyxDQUFDMFcsTUFBRCxDQUFQO0FBQ1AsUUFETztBQUVQeUgsVUFBUSxDQUFDekgsTUFBRCxDQUFSO0FBQ0ksU0FESjtBQUVJLFdBSlY7QUFLQSxNQUFJMkksSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDcEIsV0FBT0QsUUFBUDtBQUNIO0FBQ0QsU0FBTzllLEtBQUssR0FBR2tlLE1BQU0sQ0FBQ2pqQixNQUF0QixFQUE4QjtBQUMxQixRQUFNa0IsS0FBSyxHQUFHK2hCLE1BQU0sQ0FBQ2xlLEtBQUQsQ0FBcEI7QUFDQSxZQUFRN0QsS0FBSyxDQUFDb0ssSUFBZDtBQUNJLFdBQUssTUFBTDtBQUNJdVksZ0JBQVEsQ0FBQ2pmLElBQVQsQ0FBYzFELEtBQUssQ0FBQytHLEtBQXBCO0FBQ0E7QUFDSixXQUFLLE1BQUw7QUFDSTRiLGdCQUFRLENBQUNqZixJQUFULENBQWN1VyxNQUFNLENBQUMvTixRQUFRLENBQUNsTSxLQUFLLENBQUMrRyxLQUFQLEVBQWMsRUFBZCxDQUFULENBQXBCO0FBQ0E7QUFDSixXQUFLLE9BQUw7QUFDSSxZQUFJNmIsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDbEJELGtCQUFRLENBQUNqZixJQUFULENBQWN1VyxNQUFNLENBQUNqYSxLQUFLLENBQUMrRyxLQUFQLENBQXBCO0FBQ0gsU0FGRDtBQUdLO0FBQ0QsY0FBSThNLElBQUosRUFBMkM7QUFDdkN2RixtQkFBTyxDQUFDQyxJQUFSLDBCQUErQnZPLEtBQUssQ0FBQ29LLElBQXJDLG9DQUFtRXdZLElBQW5FO0FBQ0g7QUFDSjtBQUNEO0FBQ0osV0FBSyxTQUFMO0FBQ0ksWUFBSS9PLElBQUosRUFBMkM7QUFDdkN2RixpQkFBTyxDQUFDQyxJQUFSO0FBQ0g7QUFDRCxjQXJCUjs7QUF1QkExSyxTQUFLO0FBQ1I7QUFDRCxTQUFPOGUsUUFBUDtBQUNIOztBQUVELElBQU1FLGNBQWMsR0FBRyxTQUF2QixDO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFNBQXZCLEM7QUFDQSxJQUFNQyxTQUFTLEdBQUcsSUFBbEIsQztBQUNBLElBQU1DLFNBQVMsR0FBRyxJQUFsQixDO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLElBQWxCLEM7QUFDQSxJQUFNdGhCLGNBQWMsR0FBR0QsTUFBTSxDQUFDVCxTQUFQLENBQWlCVSxjQUF4QztBQUNBLElBQU1PLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNvYyxHQUFELEVBQU1uYyxHQUFOLFVBQWNSLGNBQWMsQ0FBQ00sSUFBZixDQUFvQnFjLEdBQXBCLEVBQXlCbmMsR0FBekIsQ0FBZCxFQUFmO0FBQ0EsSUFBTStnQixnQkFBZ0IsR0FBRyxJQUFJdEIsYUFBSixFQUF6QjtBQUNBLFNBQVN1QixPQUFULENBQWlCM2tCLEdBQWpCLEVBQXNCNGtCLEtBQXRCLEVBQTZCO0FBQ3pCLFNBQU8sQ0FBQyxDQUFDQSxLQUFLLENBQUM1USxJQUFOLENBQVcsVUFBQzZRLElBQUQsVUFBVTdrQixHQUFHLENBQUNZLE9BQUosQ0FBWWlrQixJQUFaLE1BQXNCLENBQUMsQ0FBakMsRUFBWCxDQUFUO0FBQ0g7QUFDRCxTQUFTQyxVQUFULENBQW9COWtCLEdBQXBCLEVBQXlCNGtCLEtBQXpCLEVBQWdDO0FBQzVCLFNBQU9BLEtBQUssQ0FBQzVRLElBQU4sQ0FBVyxVQUFDNlEsSUFBRCxVQUFVN2tCLEdBQUcsQ0FBQ1ksT0FBSixDQUFZaWtCLElBQVosTUFBc0IsQ0FBaEMsRUFBWCxDQUFQO0FBQ0g7QUFDRCxTQUFTRSxlQUFULENBQXlCeGEsTUFBekIsRUFBaUNrUSxRQUFqQyxFQUEyQztBQUN2QyxNQUFJLENBQUNsUSxNQUFMLEVBQWE7QUFDVDtBQUNIO0FBQ0RBLFFBQU0sR0FBR0EsTUFBTSxDQUFDeWEsSUFBUCxHQUFjOWtCLE9BQWQsQ0FBc0IsSUFBdEIsRUFBNEIsR0FBNUIsQ0FBVDtBQUNBLE1BQUl1YSxRQUFRLElBQUlBLFFBQVEsQ0FBQ2xRLE1BQUQsQ0FBeEIsRUFBa0M7QUFDOUIsV0FBT0EsTUFBUDtBQUNIO0FBQ0RBLFFBQU0sR0FBR0EsTUFBTSxDQUFDMGEsV0FBUCxFQUFUO0FBQ0EsTUFBSTFhLE1BQU0sQ0FBQzNKLE9BQVAsQ0FBZSxJQUFmLE1BQXlCLENBQTdCLEVBQWdDO0FBQzVCLFFBQUkySixNQUFNLENBQUMzSixPQUFQLENBQWUsT0FBZixJQUEwQixDQUFDLENBQS9CLEVBQWtDO0FBQzlCLGFBQU95akIsY0FBUDtBQUNIO0FBQ0QsUUFBSTlaLE1BQU0sQ0FBQzNKLE9BQVAsQ0FBZSxPQUFmLElBQTBCLENBQUMsQ0FBL0IsRUFBa0M7QUFDOUIsYUFBTzBqQixjQUFQO0FBQ0g7QUFDRCxRQUFJSyxPQUFPLENBQUNwYSxNQUFELEVBQVMsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsTUFBdEIsQ0FBVCxDQUFYLEVBQW9EO0FBQ2hELGFBQU8rWixjQUFQO0FBQ0g7QUFDRCxXQUFPRCxjQUFQO0FBQ0g7QUFDRCxNQUFNYSxJQUFJLEdBQUdKLFVBQVUsQ0FBQ3ZhLE1BQUQsRUFBUyxDQUFDZ2EsU0FBRCxFQUFZQyxTQUFaLEVBQXVCQyxTQUF2QixDQUFULENBQXZCO0FBQ0EsTUFBSVMsSUFBSixFQUFVO0FBQ04sV0FBT0EsSUFBUDtBQUNIO0FBQ0osQztBQUNLQyxJO0FBQ0YsdUJBQXNFLEtBQXhENWEsTUFBd0QsU0FBeERBLE1BQXdELENBQWhENmEsY0FBZ0QsU0FBaERBLGNBQWdELENBQWhDM0ssUUFBZ0MsU0FBaENBLFFBQWdDLENBQXRCNEssT0FBc0IsU0FBdEJBLE9BQXNCLENBQWJDLFFBQWEsU0FBYkEsUUFBYTtBQUNsRSxTQUFLL2EsTUFBTCxHQUFjZ2EsU0FBZDtBQUNBLFNBQUthLGNBQUwsR0FBc0JiLFNBQXRCO0FBQ0EsU0FBS25pQixPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtxWSxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBSzhLLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxRQUFJSCxjQUFKLEVBQW9CO0FBQ2hCLFdBQUtBLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0g7QUFDRCxTQUFLRSxRQUFMLEdBQWdCQSxRQUFRLElBQUlaLGdCQUE1QjtBQUNBLFNBQUtqSyxRQUFMLEdBQWdCQSxRQUFRLElBQUksRUFBNUI7QUFDQSxTQUFLblEsU0FBTCxDQUFlQyxNQUFNLElBQUlnYSxTQUF6QjtBQUNBLFFBQUljLE9BQUosRUFBYTtBQUNULFdBQUsvSixXQUFMLENBQWlCK0osT0FBakI7QUFDSDtBQUNKLEc7QUFDUzlhLFUsRUFBUTtBQUNkLFVBQU1DLFNBQVMsR0FBRyxLQUFLRCxNQUF2QjtBQUNBLFdBQUtBLE1BQUwsR0FBY3dhLGVBQWUsQ0FBQ3hhLE1BQUQsRUFBUyxLQUFLa1EsUUFBZCxDQUFmLElBQTBDLEtBQUsySyxjQUE3RDtBQUNBLFVBQUksQ0FBQyxLQUFLM0ssUUFBTCxDQUFjLEtBQUtsUSxNQUFuQixDQUFMLEVBQWlDO0FBQzdCO0FBQ0EsYUFBS2tRLFFBQUwsQ0FBYyxLQUFLbFEsTUFBbkIsSUFBNkIsRUFBN0I7QUFDSDtBQUNELFdBQUtuSSxPQUFMLEdBQWUsS0FBS3FZLFFBQUwsQ0FBYyxLQUFLbFEsTUFBbkIsQ0FBZjtBQUNBO0FBQ0EsVUFBSUMsU0FBUyxLQUFLLEtBQUtELE1BQXZCLEVBQStCO0FBQzNCLGFBQUtnYixRQUFMLENBQWM1ZixPQUFkLENBQXNCLFVBQUMwZixPQUFELEVBQWE7QUFDL0JBLGlCQUFPLENBQUMsS0FBSSxDQUFDOWEsTUFBTixFQUFjQyxTQUFkLENBQVA7QUFDSCxTQUZEO0FBR0g7QUFDSixLO0FBQ1c7QUFDUixhQUFPLEtBQUtELE1BQVo7QUFDSCxLO0FBQ1dsSCxNLEVBQUk7QUFDWixVQUFNZ0MsS0FBSyxHQUFHLEtBQUtrZ0IsUUFBTCxDQUFjcmdCLElBQWQsQ0FBbUI3QixFQUFuQixJQUF5QixDQUF2QztBQUNBLGFBQU8sWUFBTTtBQUNULGNBQUksQ0FBQ2tpQixRQUFMLENBQWNqZ0IsTUFBZCxDQUFxQkQsS0FBckIsRUFBNEIsQ0FBNUI7QUFDSCxPQUZEO0FBR0gsSztBQUNHa0YsVSxFQUFRbkksTyxFQUEwQixLQUFqQm9qQixRQUFpQix1RUFBTixJQUFNO0FBQ2xDLFVBQU16SyxXQUFXLEdBQUcsS0FBS04sUUFBTCxDQUFjbFEsTUFBZCxDQUFwQjtBQUNBLFVBQUl3USxXQUFKLEVBQWlCO0FBQ2IsWUFBSXlLLFFBQUosRUFBYztBQUNWdGlCLGdCQUFNLENBQUM0RixNQUFQLENBQWNpUyxXQUFkLEVBQTJCM1ksT0FBM0I7QUFDSCxTQUZEO0FBR0s7QUFDRGMsZ0JBQU0sQ0FBQ3dDLElBQVAsQ0FBWXRELE9BQVosRUFBcUJ1RCxPQUFyQixDQUE2QixVQUFDaEMsR0FBRCxFQUFTO0FBQ2xDLGdCQUFJLENBQUNELE1BQU0sQ0FBQ3FYLFdBQUQsRUFBY3BYLEdBQWQsQ0FBWCxFQUErQjtBQUMzQm9YLHlCQUFXLENBQUNwWCxHQUFELENBQVgsR0FBbUJ2QixPQUFPLENBQUN1QixHQUFELENBQTFCO0FBQ0g7QUFDSixXQUpEO0FBS0g7QUFDSixPQVhEO0FBWUs7QUFDRCxhQUFLOFcsUUFBTCxDQUFjbFEsTUFBZCxJQUF3Qm5JLE9BQXhCO0FBQ0g7QUFDSixLO0FBQ0NBLFcsRUFBU3FaLE0sRUFBUTZILFUsRUFBWTtBQUMzQixhQUFPLEtBQUtnQyxRQUFMLENBQWNHLFdBQWQsQ0FBMEJyakIsT0FBMUIsRUFBbUNxWixNQUFuQyxFQUEyQzZILFVBQTNDLEVBQXVEaGlCLElBQXZELENBQTRELEVBQTVELENBQVA7QUFDSCxLO0FBQ0NxQyxPLEVBQUs0RyxNLEVBQVFrUixNLEVBQVE7QUFDbkIsVUFBSXJaLE9BQU8sR0FBRyxLQUFLQSxPQUFuQjtBQUNBLFVBQUksT0FBT21JLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDNUJBLGNBQU0sR0FBR3dhLGVBQWUsQ0FBQ3hhLE1BQUQsRUFBUyxLQUFLa1EsUUFBZCxDQUF4QjtBQUNBbFEsY0FBTSxLQUFLbkksT0FBTyxHQUFHLEtBQUtxWSxRQUFMLENBQWNsUSxNQUFkLENBQWYsQ0FBTjtBQUNILE9BSEQ7QUFJSztBQUNEa1IsY0FBTSxHQUFHbFIsTUFBVDtBQUNIO0FBQ0QsVUFBSSxDQUFDN0csTUFBTSxDQUFDdEIsT0FBRCxFQUFVdUIsR0FBVixDQUFYLEVBQTJCO0FBQ3ZCbU0sZUFBTyxDQUFDQyxJQUFSLGlEQUFzRHBNLEdBQXREO0FBQ0EsZUFBT0EsR0FBUDtBQUNIO0FBQ0QsYUFBTyxLQUFLMmhCLFFBQUwsQ0FBY0csV0FBZCxDQUEwQnJqQixPQUFPLENBQUN1QixHQUFELENBQWpDLEVBQXdDOFgsTUFBeEMsRUFBZ0RuYSxJQUFoRCxDQUFxRCxFQUFyRCxDQUFQO0FBQ0gsSzs7O0FBR0wsU0FBU29rQixjQUFULENBQXdCN0osS0FBeEIsRUFBK0JaLElBQS9CLEVBQXFDO0FBQ2pDO0FBQ0EsTUFBSVksS0FBSyxDQUFDSSxZQUFWLEVBQXdCO0FBQ3BCO0FBQ0FKLFNBQUssQ0FBQ0ksWUFBTixDQUFtQixVQUFDMEosU0FBRCxFQUFlO0FBQzlCMUssVUFBSSxDQUFDM1EsU0FBTCxDQUFlcWIsU0FBZjtBQUNILEtBRkQ7QUFHSCxHQUxEO0FBTUs7QUFDRDlKLFNBQUssQ0FBQytKLE1BQU4sQ0FBYSxvQkFBTS9KLEtBQUssQ0FBQ3pSLE9BQVosRUFBYixFQUFrQyxVQUFDdWIsU0FBRCxFQUFlO0FBQzdDMUssVUFBSSxDQUFDM1EsU0FBTCxDQUFlcWIsU0FBZjtBQUNILEtBRkQ7QUFHSDtBQUNKO0FBQ0QsU0FBU0UsZ0JBQVQsR0FBNEI7QUFDeEIsTUFBSSxPQUFPOUMsR0FBUCxLQUFlLFdBQWYsSUFBOEJBLEdBQUcsQ0FBQ2haLFNBQXRDLEVBQWlEO0FBQzdDLFdBQU9nWixHQUFHLENBQUNoWixTQUFKLEVBQVA7QUFDSDtBQUNEO0FBQ0EsTUFBSSxPQUFPWSxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxNQUFNLENBQUNaLFNBQTVDLEVBQXVEO0FBQ25ELFdBQU9ZLE1BQU0sQ0FBQ1osU0FBUCxFQUFQO0FBQ0g7QUFDRCxTQUFPd2EsU0FBUDtBQUNIO0FBQ0QsU0FBU3VCLFdBQVQsQ0FBcUJ2YixNQUFyQixFQUFxRSxLQUF4Q2tRLFFBQXdDLHVFQUE3QixFQUE2QixLQUF6QjJLLGNBQXlCLHVEQUFUQyxPQUFTO0FBQ2pFO0FBQ0EsTUFBSSxPQUFPOWEsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUNQO0FBQ2pCa1EsWUFEaUI7QUFFakJsUSxVQUZpQixDQURPLENBQzNCQSxNQUQyQixZQUNuQmtRLFFBRG1COztBQUsvQjtBQUNELE1BQUksT0FBT2xRLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDNUI7QUFDQUEsVUFBTSxHQUFHc2IsZ0JBQWdCLEVBQXpCO0FBQ0g7QUFDRCxNQUFJLE9BQU9ULGNBQVAsS0FBMEIsUUFBOUIsRUFBd0M7QUFDcENBLGtCQUFjO0FBQ1QsV0FBT3ZLLFdBQVAsS0FBdUIsV0FBdkIsSUFBc0NBLFdBQVcsQ0FBQ3VLLGNBQW5EO0FBQ0liLGFBRlI7QUFHSDtBQUNELE1BQU10SixJQUFJLEdBQUcsSUFBSWtLLElBQUosQ0FBUztBQUNsQjVhLFVBQU0sRUFBTkEsTUFEa0I7QUFFbEI2YSxrQkFBYyxFQUFkQSxjQUZrQjtBQUdsQjNLLFlBQVEsRUFBUkEsUUFIa0I7QUFJbEI0SyxXQUFPLEVBQVBBLE9BSmtCLEVBQVQsQ0FBYjs7QUFNQSxNQUFJbkssRUFBQyxHQUFHLFdBQUN2WCxHQUFELEVBQU04WCxNQUFOLEVBQWlCO0FBQ3JCLFFBQUksT0FBT3hSLE1BQVAsS0FBa0IsVUFBdEIsRUFBa0M7QUFDOUI7QUFDQTtBQUNBaVIsUUFBQyxHQUFHLFdBQVV2WCxHQUFWLEVBQWU4WCxNQUFmLEVBQXVCO0FBQ3ZCLGVBQU9SLElBQUksQ0FBQ0MsQ0FBTCxDQUFPdlgsR0FBUCxFQUFZOFgsTUFBWixDQUFQO0FBQ0gsT0FGRDtBQUdILEtBTkQ7QUFPSztBQUNELFVBQUlzSyxrQkFBa0IsR0FBRyxLQUF6QjtBQUNBN0ssUUFBQyxHQUFHLFdBQVV2WCxHQUFWLEVBQWU4WCxNQUFmLEVBQXVCO0FBQ3ZCLFlBQU1JLEtBQUssR0FBRzVSLE1BQU0sR0FBR0UsR0FBdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUkwUixLQUFKLEVBQVc7QUFDUDtBQUNBQSxlQUFLLENBQUN6UixPQUFOO0FBQ0EsY0FBSSxDQUFDMmIsa0JBQUwsRUFBeUI7QUFDckJBLDhCQUFrQixHQUFHLElBQXJCO0FBQ0FMLDBCQUFjLENBQUM3SixLQUFELEVBQVFaLElBQVIsQ0FBZDtBQUNIO0FBQ0o7QUFDRCxlQUFPQSxJQUFJLENBQUNDLENBQUwsQ0FBT3ZYLEdBQVAsRUFBWThYLE1BQVosQ0FBUDtBQUNILE9BeEJEO0FBeUJIO0FBQ0QsV0FBT1AsRUFBQyxDQUFDdlgsR0FBRCxFQUFNOFgsTUFBTixDQUFSO0FBQ0gsR0FyQ0Q7QUFzQ0EsU0FBTztBQUNIUixRQUFJLEVBQUpBLElBREc7QUFFSCtLLEtBRkcsYUFFRDVqQixPQUZDLEVBRVFxWixNQUZSLEVBRWdCNkgsVUFGaEIsRUFFNEI7QUFDM0IsYUFBT3JJLElBQUksQ0FBQytLLENBQUwsQ0FBTzVqQixPQUFQLEVBQWdCcVosTUFBaEIsRUFBd0I2SCxVQUF4QixDQUFQO0FBQ0gsS0FKRTtBQUtIcEksS0FMRyxhQUtEdlgsR0FMQyxFQUtJOFgsTUFMSixFQUtZO0FBQ1gsYUFBT1AsRUFBQyxDQUFDdlgsR0FBRCxFQUFNOFgsTUFBTixDQUFSO0FBQ0gsS0FQRTtBQVFId0ssT0FSRyxlQVFDMWIsTUFSRCxFQVFTbkksT0FSVCxFQVFtQyxLQUFqQm9qQixRQUFpQix1RUFBTixJQUFNO0FBQ2xDLGFBQU92SyxJQUFJLENBQUNnTCxHQUFMLENBQVMxYixNQUFULEVBQWlCbkksT0FBakIsRUFBMEJvakIsUUFBMUIsQ0FBUDtBQUNILEtBVkU7QUFXSGxKLFNBWEcsaUJBV0dqWixFQVhILEVBV087QUFDTixhQUFPNFgsSUFBSSxDQUFDSyxXQUFMLENBQWlCalksRUFBakIsQ0FBUDtBQUNILEtBYkU7QUFjSDBHLGFBZEcsdUJBY1M7QUFDUixhQUFPa1IsSUFBSSxDQUFDbFIsU0FBTCxFQUFQO0FBQ0gsS0FoQkU7QUFpQkhPLGFBakJHLHFCQWlCT3FiLFNBakJQLEVBaUJrQjtBQUNqQixhQUFPMUssSUFBSSxDQUFDM1EsU0FBTCxDQUFlcWIsU0FBZixDQUFQO0FBQ0gsS0FuQkUsRUFBUDs7QUFxQkg7O0FBRUQsSUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3BHLEdBQUQsVUFBUyxPQUFPQSxHQUFQLEtBQWUsUUFBeEIsRUFBakIsQztBQUNBLElBQUl3RixRQUFKO0FBQ0EsU0FBU2EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI5QyxVQUE5QixFQUEwQztBQUN0QyxNQUFJLENBQUNnQyxRQUFMLEVBQWU7QUFDWEEsWUFBUSxHQUFHLElBQUlsQyxhQUFKLEVBQVg7QUFDSDtBQUNELFNBQU9pRCxXQUFXLENBQUNELE9BQUQsRUFBVSxVQUFDQSxPQUFELEVBQVV6aUIsR0FBVixFQUFrQjtBQUMxQyxRQUFNNEUsS0FBSyxHQUFHNmQsT0FBTyxDQUFDemlCLEdBQUQsQ0FBckI7QUFDQSxRQUFJdWlCLFFBQVEsQ0FBQzNkLEtBQUQsQ0FBWixFQUFxQjtBQUNqQixVQUFJK2QsU0FBUyxDQUFDL2QsS0FBRCxFQUFRK2EsVUFBUixDQUFiLEVBQWtDO0FBQzlCLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FKRDtBQUtLO0FBQ0QsYUFBTzZDLFdBQVcsQ0FBQzVkLEtBQUQsRUFBUSthLFVBQVIsQ0FBbEI7QUFDSDtBQUNKLEdBVmlCLENBQWxCO0FBV0g7QUFDRCxTQUFTaUQsYUFBVCxDQUF1QkgsT0FBdkIsRUFBZ0MzSyxNQUFoQyxFQUF3QzZILFVBQXhDLEVBQW9EO0FBQ2hELE1BQUksQ0FBQ2dDLFFBQUwsRUFBZTtBQUNYQSxZQUFRLEdBQUcsSUFBSWxDLGFBQUosRUFBWDtBQUNIO0FBQ0RpRCxhQUFXLENBQUNELE9BQUQsRUFBVSxVQUFDQSxPQUFELEVBQVV6aUIsR0FBVixFQUFrQjtBQUNuQyxRQUFNNEUsS0FBSyxHQUFHNmQsT0FBTyxDQUFDemlCLEdBQUQsQ0FBckI7QUFDQSxRQUFJdWlCLFFBQVEsQ0FBQzNkLEtBQUQsQ0FBWixFQUFxQjtBQUNqQixVQUFJK2QsU0FBUyxDQUFDL2QsS0FBRCxFQUFRK2EsVUFBUixDQUFiLEVBQWtDO0FBQzlCOEMsZUFBTyxDQUFDemlCLEdBQUQsQ0FBUCxHQUFlNmlCLFVBQVUsQ0FBQ2plLEtBQUQsRUFBUWtULE1BQVIsRUFBZ0I2SCxVQUFoQixDQUF6QjtBQUNIO0FBQ0osS0FKRDtBQUtLO0FBQ0RpRCxtQkFBYSxDQUFDaGUsS0FBRCxFQUFRa1QsTUFBUixFQUFnQjZILFVBQWhCLENBQWI7QUFDSDtBQUNKLEdBVlUsQ0FBWDtBQVdBLFNBQU84QyxPQUFQO0FBQ0g7QUFDRCxTQUFTSyxrQkFBVCxDQUE0QkMsT0FBNUIsU0FBdUUsS0FBaENuYyxNQUFnQyxTQUFoQ0EsTUFBZ0MsQ0FBeEJ1USxPQUF3QixTQUF4QkEsT0FBd0IsQ0FBZndJLFVBQWUsU0FBZkEsVUFBZTtBQUNuRSxNQUFJLENBQUNnRCxTQUFTLENBQUNJLE9BQUQsRUFBVXBELFVBQVYsQ0FBZCxFQUFxQztBQUNqQyxXQUFPb0QsT0FBUDtBQUNIO0FBQ0QsTUFBSSxDQUFDcEIsUUFBTCxFQUFlO0FBQ1hBLFlBQVEsR0FBRyxJQUFJbEMsYUFBSixFQUFYO0FBQ0g7QUFDRCxNQUFNdUQsWUFBWSxHQUFHLEVBQXJCO0FBQ0F6akIsUUFBTSxDQUFDd0MsSUFBUCxDQUFZb1YsT0FBWixFQUFxQm5WLE9BQXJCLENBQTZCLFVBQUNnQixJQUFELEVBQVU7QUFDbkMsUUFBSUEsSUFBSSxLQUFLNEQsTUFBYixFQUFxQjtBQUNqQm9jLGtCQUFZLENBQUN6aEIsSUFBYixDQUFrQjtBQUNkcUYsY0FBTSxFQUFFNUQsSUFETTtBQUVkOFUsY0FBTSxFQUFFWCxPQUFPLENBQUNuVSxJQUFELENBRkQsRUFBbEI7O0FBSUg7QUFDSixHQVBEO0FBUUFnZ0IsY0FBWSxDQUFDQyxPQUFiLENBQXFCLEVBQUVyYyxNQUFNLEVBQU5BLE1BQUYsRUFBVWtSLE1BQU0sRUFBRVgsT0FBTyxDQUFDdlEsTUFBRCxDQUF6QixFQUFyQjtBQUNBLE1BQUk7QUFDQSxXQUFPdEksSUFBSSxDQUFDc1QsU0FBTCxDQUFlc1IsY0FBYyxDQUFDNWtCLElBQUksQ0FBQ0MsS0FBTCxDQUFXd2tCLE9BQVgsQ0FBRCxFQUFzQkMsWUFBdEIsRUFBb0NyRCxVQUFwQyxDQUE3QixFQUE4RSxJQUE5RSxFQUFvRixDQUFwRixDQUFQO0FBQ0g7QUFDRCxTQUFPbE8sQ0FBUCxFQUFVLENBQUc7QUFDYixTQUFPc1IsT0FBUDtBQUNIO0FBQ0QsU0FBU0osU0FBVCxDQUFtQi9kLEtBQW5CLEVBQTBCK2EsVUFBMUIsRUFBc0M7QUFDbEMsU0FBTy9hLEtBQUssQ0FBQzNILE9BQU4sQ0FBYzBpQixVQUFVLENBQUMsQ0FBRCxDQUF4QixJQUErQixDQUFDLENBQXZDO0FBQ0g7QUFDRCxTQUFTa0QsVUFBVCxDQUFvQmplLEtBQXBCLEVBQTJCa1QsTUFBM0IsRUFBbUM2SCxVQUFuQyxFQUErQztBQUMzQyxTQUFPZ0MsUUFBUSxDQUFDRyxXQUFULENBQXFCbGQsS0FBckIsRUFBNEJrVCxNQUE1QixFQUFvQzZILFVBQXBDLEVBQWdEaGlCLElBQWhELENBQXFELEVBQXJELENBQVA7QUFDSDtBQUNELFNBQVN3bEIsWUFBVCxDQUFzQlYsT0FBdEIsRUFBK0J6aUIsR0FBL0IsRUFBb0NnakIsWUFBcEMsRUFBa0RyRCxVQUFsRCxFQUE4RDtBQUMxRCxNQUFNL2EsS0FBSyxHQUFHNmQsT0FBTyxDQUFDemlCLEdBQUQsQ0FBckI7QUFDQSxNQUFJdWlCLFFBQVEsQ0FBQzNkLEtBQUQsQ0FBWixFQUFxQjtBQUNqQjtBQUNBLFFBQUkrZCxTQUFTLENBQUMvZCxLQUFELEVBQVErYSxVQUFSLENBQWIsRUFBa0M7QUFDOUI4QyxhQUFPLENBQUN6aUIsR0FBRCxDQUFQLEdBQWU2aUIsVUFBVSxDQUFDamUsS0FBRCxFQUFRb2UsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmxMLE1BQXhCLEVBQWdDNkgsVUFBaEMsQ0FBekI7QUFDQSxVQUFJcUQsWUFBWSxDQUFDcm1CLE1BQWIsR0FBc0IsQ0FBMUIsRUFBNkI7QUFDekI7QUFDQSxZQUFNeW1CLFlBQVksR0FBSVgsT0FBTyxDQUFDemlCLEdBQUcsR0FBRyxTQUFQLENBQVAsR0FBMkIsRUFBakQ7QUFDQWdqQixvQkFBWSxDQUFDaGhCLE9BQWIsQ0FBcUIsVUFBQ3FoQixVQUFELEVBQWdCO0FBQ2pDRCxzQkFBWSxDQUFDQyxVQUFVLENBQUN6YyxNQUFaLENBQVosR0FBa0NpYyxVQUFVLENBQUNqZSxLQUFELEVBQVF5ZSxVQUFVLENBQUN2TCxNQUFuQixFQUEyQjZILFVBQTNCLENBQTVDO0FBQ0gsU0FGRDtBQUdIO0FBQ0o7QUFDSixHQVpEO0FBYUs7QUFDRHVELGtCQUFjLENBQUN0ZSxLQUFELEVBQVFvZSxZQUFSLEVBQXNCckQsVUFBdEIsQ0FBZDtBQUNIO0FBQ0o7QUFDRCxTQUFTdUQsY0FBVCxDQUF3QlQsT0FBeEIsRUFBaUNPLFlBQWpDLEVBQStDckQsVUFBL0MsRUFBMkQ7QUFDdkQrQyxhQUFXLENBQUNELE9BQUQsRUFBVSxVQUFDQSxPQUFELEVBQVV6aUIsR0FBVixFQUFrQjtBQUNuQ21qQixnQkFBWSxDQUFDVixPQUFELEVBQVV6aUIsR0FBVixFQUFlZ2pCLFlBQWYsRUFBNkJyRCxVQUE3QixDQUFaO0FBQ0gsR0FGVSxDQUFYO0FBR0EsU0FBTzhDLE9BQVA7QUFDSDtBQUNELFNBQVNDLFdBQVQsQ0FBcUJELE9BQXJCLEVBQThCYSxJQUE5QixFQUFvQztBQUNoQyxNQUFJbGlCLE9BQU8sQ0FBQ3FoQixPQUFELENBQVgsRUFBc0I7QUFDbEIsU0FBSyxJQUFJemxCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5bEIsT0FBTyxDQUFDOWxCLE1BQTVCLEVBQW9DSyxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLFVBQUlzbUIsSUFBSSxDQUFDYixPQUFELEVBQVV6bEIsQ0FBVixDQUFSLEVBQXNCO0FBQ2xCLGVBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSixHQU5EO0FBT0ssTUFBSXVpQixRQUFRLENBQUNrRCxPQUFELENBQVosRUFBdUI7QUFDeEIsU0FBSyxJQUFNemlCLEdBQVgsSUFBa0J5aUIsT0FBbEIsRUFBMkI7QUFDdkIsVUFBSWEsSUFBSSxDQUFDYixPQUFELEVBQVV6aUIsR0FBVixDQUFSLEVBQXdCO0FBQ3BCLGVBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSjtBQUNELFNBQU8sS0FBUDtBQUNIOztBQUVELFNBQVN1akIsYUFBVCxDQUF1QnBNLE9BQXZCLEVBQWdDO0FBQzVCLFNBQU8sVUFBQ3ZRLE1BQUQsRUFBWTtBQUNmLFFBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1QsYUFBT0EsTUFBUDtBQUNIO0FBQ0RBLFVBQU0sR0FBR3dhLGVBQWUsQ0FBQ3hhLE1BQUQsQ0FBZixJQUEyQkEsTUFBcEM7QUFDQSxXQUFPNGMsa0JBQWtCLENBQUM1YyxNQUFELENBQWxCLENBQTJCeUosSUFBM0IsQ0FBZ0MsVUFBQ3pKLE1BQUQsVUFBWXVRLE9BQU8sQ0FBQ2xhLE9BQVIsQ0FBZ0IySixNQUFoQixJQUEwQixDQUFDLENBQXZDLEVBQWhDLENBQVA7QUFDSCxHQU5EO0FBT0g7QUFDRCxTQUFTNGMsa0JBQVQsQ0FBNEI1YyxNQUE1QixFQUFvQztBQUNoQyxNQUFNNmMsS0FBSyxHQUFHLEVBQWQ7QUFDQSxNQUFNN0QsTUFBTSxHQUFHaFosTUFBTSxDQUFDdEosS0FBUCxDQUFhLEdBQWIsQ0FBZjtBQUNBLFNBQU9zaUIsTUFBTSxDQUFDampCLE1BQWQsRUFBc0I7QUFDbEI4bUIsU0FBSyxDQUFDbGlCLElBQU4sQ0FBV3FlLE1BQU0sQ0FBQ2ppQixJQUFQLENBQVksR0FBWixDQUFYO0FBQ0FpaUIsVUFBTSxDQUFDOEQsR0FBUDtBQUNIO0FBQ0QsU0FBT0QsS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25jRDtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbi92ZW5kb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBpbml0VnVlSTE4biB9IGZyb20gJ0BkY2xvdWRpby91bmktaTE4bic7XG5cbmxldCByZWFsQXRvYjtcblxuY29uc3QgYjY0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbmNvbnN0IGI2NHJlID0gL14oPzpbQS1aYS16XFxkKy9dezR9KSo/KD86W0EtWmEtelxcZCsvXXsyfSg/Oj09KT98W0EtWmEtelxcZCsvXXszfT0/KT8kLztcblxuaWYgKHR5cGVvZiBhdG9iICE9PSAnZnVuY3Rpb24nKSB7XG4gIHJlYWxBdG9iID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHN0ciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL1tcXHRcXG5cXGZcXHIgXSsvZywgJycpO1xuICAgIGlmICghYjY0cmUudGVzdChzdHIpKSB7IHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdhdG9iJyBvbiAnV2luZG93JzogVGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC5cIikgfVxuXG4gICAgLy8gQWRkaW5nIHRoZSBwYWRkaW5nIGlmIG1pc3NpbmcsIGZvciBzZW1wbGljaXR5XG4gICAgc3RyICs9ICc9PScuc2xpY2UoMiAtIChzdHIubGVuZ3RoICYgMykpO1xuICAgIHZhciBiaXRtYXA7IHZhciByZXN1bHQgPSAnJzsgdmFyIHIxOyB2YXIgcjI7IHZhciBpID0gMDtcbiAgICBmb3IgKDsgaSA8IHN0ci5sZW5ndGg7KSB7XG4gICAgICBiaXRtYXAgPSBiNjQuaW5kZXhPZihzdHIuY2hhckF0KGkrKykpIDw8IDE4IHwgYjY0LmluZGV4T2Yoc3RyLmNoYXJBdChpKyspKSA8PCAxMiB8XG4gICAgICAgICAgICAgICAgICAgIChyMSA9IGI2NC5pbmRleE9mKHN0ci5jaGFyQXQoaSsrKSkpIDw8IDYgfCAocjIgPSBiNjQuaW5kZXhPZihzdHIuY2hhckF0KGkrKykpKTtcblxuICAgICAgcmVzdWx0ICs9IHIxID09PSA2NCA/IFN0cmluZy5mcm9tQ2hhckNvZGUoYml0bWFwID4+IDE2ICYgMjU1KVxuICAgICAgICA6IHIyID09PSA2NCA/IFN0cmluZy5mcm9tQ2hhckNvZGUoYml0bWFwID4+IDE2ICYgMjU1LCBiaXRtYXAgPj4gOCAmIDI1NSlcbiAgICAgICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoYml0bWFwID4+IDE2ICYgMjU1LCBiaXRtYXAgPj4gOCAmIDI1NSwgYml0bWFwICYgMjU1KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9O1xufSBlbHNlIHtcbiAgLy8g5rOo5oSPYXRvYuWPquiDveWcqOWFqOWxgOWvueixoeS4iuiwg+eUqO+8jOS+i+Wmgu+8mmBjb25zdCBCYXNlNjQgPSB7YXRvYn07QmFzZTY0LmF0b2IoJ3h4eHgnKWDmmK/plJnor6/nmoTnlKjms5VcbiAgcmVhbEF0b2IgPSBhdG9iO1xufVxuXG5mdW5jdGlvbiBiNjREZWNvZGVVbmljb2RlIChzdHIpIHtcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZWFsQXRvYihzdHIpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMilcbiAgfSkuam9pbignJykpXG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRVc2VySW5mbyAoKSB7XG4gIGNvbnN0IHRva2VuID0gKCB3eCkuZ2V0U3RvcmFnZVN5bmMoJ3VuaV9pZF90b2tlbicpIHx8ICcnO1xuICBjb25zdCB0b2tlbkFyciA9IHRva2VuLnNwbGl0KCcuJyk7XG4gIGlmICghdG9rZW4gfHwgdG9rZW5BcnIubGVuZ3RoICE9PSAzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogbnVsbCxcbiAgICAgIHJvbGU6IFtdLFxuICAgICAgcGVybWlzc2lvbjogW10sXG4gICAgICB0b2tlbkV4cGlyZWQ6IDBcbiAgICB9XG4gIH1cbiAgbGV0IHVzZXJJbmZvO1xuICB0cnkge1xuICAgIHVzZXJJbmZvID0gSlNPTi5wYXJzZShiNjREZWNvZGVVbmljb2RlKHRva2VuQXJyWzFdKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCfojrflj5blvZPliY3nlKjmiLfkv6Hmga/lh7rplJnvvIzor6bnu4bplJnor6/kv6Hmga/kuLrvvJonICsgZXJyb3IubWVzc2FnZSlcbiAgfVxuICB1c2VySW5mby50b2tlbkV4cGlyZWQgPSB1c2VySW5mby5leHAgKiAxMDAwO1xuICBkZWxldGUgdXNlckluZm8uZXhwO1xuICBkZWxldGUgdXNlckluZm8uaWF0O1xuICByZXR1cm4gdXNlckluZm9cbn1cblxuZnVuY3Rpb24gdW5pSWRNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUudW5pSURIYXNSb2xlID0gZnVuY3Rpb24gKHJvbGVJZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJvbGVcbiAgICB9ID0gZ2V0Q3VycmVudFVzZXJJbmZvKCk7XG4gICAgcmV0dXJuIHJvbGUuaW5kZXhPZihyb2xlSWQpID4gLTFcbiAgfTtcbiAgVnVlLnByb3RvdHlwZS51bmlJREhhc1Blcm1pc3Npb24gPSBmdW5jdGlvbiAocGVybWlzc2lvbklkKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGVybWlzc2lvblxuICAgIH0gPSBnZXRDdXJyZW50VXNlckluZm8oKTtcbiAgICByZXR1cm4gdGhpcy51bmlJREhhc1JvbGUoJ2FkbWluJykgfHwgcGVybWlzc2lvbi5pbmRleE9mKHBlcm1pc3Npb25JZCkgPiAtMVxuICB9O1xuICBWdWUucHJvdG90eXBlLnVuaUlEVG9rZW5WYWxpZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7XG4gICAgICB0b2tlbkV4cGlyZWRcbiAgICB9ID0gZ2V0Q3VycmVudFVzZXJJbmZvKCk7XG4gICAgcmV0dXJuIHRva2VuRXhwaXJlZCA+IERhdGUubm93KClcbiAgfTtcbn1cblxuY29uc3QgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gaXNGbiAoZm4pIHtcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG5mdW5jdGlvbiBpc1N0ciAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xufVxuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nXG59XG5cbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH1cbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxpbWl0ZWQgc3RyaW5nLlxuICovXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xuY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgKF8sIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJylcbn0pO1xuXG5jb25zdCBIT09LUyA9IFtcbiAgJ2ludm9rZScsXG4gICdzdWNjZXNzJyxcbiAgJ2ZhaWwnLFxuICAnY29tcGxldGUnLFxuICAncmV0dXJuVmFsdWUnXG5dO1xuXG5jb25zdCBnbG9iYWxJbnRlcmNlcHRvcnMgPSB7fTtcbmNvbnN0IHNjb3BlZEludGVyY2VwdG9ycyA9IHt9O1xuXG5mdW5jdGlvbiBtZXJnZUhvb2sgKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgY29uc3QgcmVzID0gY2hpbGRWYWxcbiAgICA/IHBhcmVudFZhbFxuICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICA/IGNoaWxkVmFsIDogW2NoaWxkVmFsXVxuICAgIDogcGFyZW50VmFsO1xuICByZXR1cm4gcmVzXG4gICAgPyBkZWR1cGVIb29rcyhyZXMpXG4gICAgOiByZXNcbn1cblxuZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlcy5pbmRleE9mKGhvb2tzW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlcy5wdXNoKGhvb2tzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiByZW1vdmVIb29rIChob29rcywgaG9vaykge1xuICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoaG9vayk7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlSW50ZXJjZXB0b3JIb29rIChpbnRlcmNlcHRvciwgb3B0aW9uKSB7XG4gIE9iamVjdC5rZXlzKG9wdGlvbikuZm9yRWFjaChob29rID0+IHtcbiAgICBpZiAoSE9PS1MuaW5kZXhPZihob29rKSAhPT0gLTEgJiYgaXNGbihvcHRpb25baG9va10pKSB7XG4gICAgICBpbnRlcmNlcHRvcltob29rXSA9IG1lcmdlSG9vayhpbnRlcmNlcHRvcltob29rXSwgb3B0aW9uW2hvb2tdKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJbnRlcmNlcHRvckhvb2sgKGludGVyY2VwdG9yLCBvcHRpb24pIHtcbiAgaWYgKCFpbnRlcmNlcHRvciB8fCAhb3B0aW9uKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgT2JqZWN0LmtleXMob3B0aW9uKS5mb3JFYWNoKGhvb2sgPT4ge1xuICAgIGlmIChIT09LUy5pbmRleE9mKGhvb2spICE9PSAtMSAmJiBpc0ZuKG9wdGlvbltob29rXSkpIHtcbiAgICAgIHJlbW92ZUhvb2soaW50ZXJjZXB0b3JbaG9va10sIG9wdGlvbltob29rXSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSW50ZXJjZXB0b3IgKG1ldGhvZCwgb3B0aW9uKSB7XG4gIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJyAmJiBpc1BsYWluT2JqZWN0KG9wdGlvbikpIHtcbiAgICBtZXJnZUludGVyY2VwdG9ySG9vayhzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXSB8fCAoc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0gPSB7fSksIG9wdGlvbik7XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChtZXRob2QpKSB7XG4gICAgbWVyZ2VJbnRlcmNlcHRvckhvb2soZ2xvYmFsSW50ZXJjZXB0b3JzLCBtZXRob2QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUludGVyY2VwdG9yIChtZXRob2QsIG9wdGlvbikge1xuICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChvcHRpb24pKSB7XG4gICAgICByZW1vdmVJbnRlcmNlcHRvckhvb2soc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0sIG9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChtZXRob2QpKSB7XG4gICAgcmVtb3ZlSW50ZXJjZXB0b3JIb29rKGdsb2JhbEludGVyY2VwdG9ycywgbWV0aG9kKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwcGVySG9vayAoaG9vaykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4gaG9vayhkYXRhKSB8fCBkYXRhXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlIChvYmopIHtcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbidcbn1cblxuZnVuY3Rpb24gcXVldWUgKGhvb2tzLCBkYXRhKSB7XG4gIGxldCBwcm9taXNlID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBob29rID0gaG9va3NbaV07XG4gICAgaWYgKHByb21pc2UpIHtcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUod3JhcHBlckhvb2soaG9vaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXMgPSBob29rKGRhdGEpO1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXMgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGhlbiAoKSB7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvbWlzZSB8fCB7XG4gICAgdGhlbiAoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwcGVyT3B0aW9ucyAoaW50ZXJjZXB0b3IsIG9wdGlvbnMgPSB7fSkge1xuICBbJ3N1Y2Nlc3MnLCAnZmFpbCcsICdjb21wbGV0ZSddLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3JbbmFtZV0pKSB7XG4gICAgICBjb25zdCBvbGRDYWxsYmFjayA9IG9wdGlvbnNbbmFtZV07XG4gICAgICBvcHRpb25zW25hbWVdID0gZnVuY3Rpb24gY2FsbGJhY2tJbnRlcmNlcHRvciAocmVzKSB7XG4gICAgICAgIHF1ZXVlKGludGVyY2VwdG9yW25hbWVdLCByZXMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuICAgICAgICAgIHJldHVybiBpc0ZuKG9sZENhbGxiYWNrKSAmJiBvbGRDYWxsYmFjayhyZXMpIHx8IHJlc1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZnVuY3Rpb24gd3JhcHBlclJldHVyblZhbHVlIChtZXRob2QsIHJldHVyblZhbHVlKSB7XG4gIGNvbnN0IHJldHVyblZhbHVlSG9va3MgPSBbXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZ2xvYmFsSW50ZXJjZXB0b3JzLnJldHVyblZhbHVlKSkge1xuICAgIHJldHVyblZhbHVlSG9va3MucHVzaCguLi5nbG9iYWxJbnRlcmNlcHRvcnMucmV0dXJuVmFsdWUpO1xuICB9XG4gIGNvbnN0IGludGVyY2VwdG9yID0gc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XG4gIGlmIChpbnRlcmNlcHRvciAmJiBBcnJheS5pc0FycmF5KGludGVyY2VwdG9yLnJldHVyblZhbHVlKSkge1xuICAgIHJldHVyblZhbHVlSG9va3MucHVzaCguLi5pbnRlcmNlcHRvci5yZXR1cm5WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuVmFsdWVIb29rcy5mb3JFYWNoKGhvb2sgPT4ge1xuICAgIHJldHVyblZhbHVlID0gaG9vayhyZXR1cm5WYWx1ZSkgfHwgcmV0dXJuVmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmV0dXJuVmFsdWVcbn1cblxuZnVuY3Rpb24gZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyAobWV0aG9kKSB7XG4gIGNvbnN0IGludGVyY2VwdG9yID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgT2JqZWN0LmtleXMoZ2xvYmFsSW50ZXJjZXB0b3JzKS5mb3JFYWNoKGhvb2sgPT4ge1xuICAgIGlmIChob29rICE9PSAncmV0dXJuVmFsdWUnKSB7XG4gICAgICBpbnRlcmNlcHRvcltob29rXSA9IGdsb2JhbEludGVyY2VwdG9yc1tob29rXS5zbGljZSgpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHNjb3BlZEludGVyY2VwdG9yID0gc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XG4gIGlmIChzY29wZWRJbnRlcmNlcHRvcikge1xuICAgIE9iamVjdC5rZXlzKHNjb3BlZEludGVyY2VwdG9yKS5mb3JFYWNoKGhvb2sgPT4ge1xuICAgICAgaWYgKGhvb2sgIT09ICdyZXR1cm5WYWx1ZScpIHtcbiAgICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSAoaW50ZXJjZXB0b3JbaG9va10gfHwgW10pLmNvbmNhdChzY29wZWRJbnRlcmNlcHRvcltob29rXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGludGVyY2VwdG9yXG59XG5cbmZ1bmN0aW9uIGludm9rZUFwaSAobWV0aG9kLCBhcGksIG9wdGlvbnMsIC4uLnBhcmFtcykge1xuICBjb25zdCBpbnRlcmNlcHRvciA9IGdldEFwaUludGVyY2VwdG9ySG9va3MobWV0aG9kKTtcbiAgaWYgKGludGVyY2VwdG9yICYmIE9iamVjdC5rZXlzKGludGVyY2VwdG9yKS5sZW5ndGgpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvci5pbnZva2UpKSB7XG4gICAgICBjb25zdCByZXMgPSBxdWV1ZShpbnRlcmNlcHRvci5pbnZva2UsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHJlcy50aGVuKChvcHRpb25zKSA9PiB7XG4gICAgICAgIHJldHVybiBhcGkod3JhcHBlck9wdGlvbnMoaW50ZXJjZXB0b3IsIG9wdGlvbnMpLCAuLi5wYXJhbXMpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXBpKHdyYXBwZXJPcHRpb25zKGludGVyY2VwdG9yLCBvcHRpb25zKSwgLi4ucGFyYW1zKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXBpKG9wdGlvbnMsIC4uLnBhcmFtcylcbn1cblxuY29uc3QgcHJvbWlzZUludGVyY2VwdG9yID0ge1xuICByZXR1cm5WYWx1ZSAocmVzKSB7XG4gICAgaWYgKCFpc1Byb21pc2UocmVzKSkge1xuICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlc1swXSkge1xuICAgICAgICAgIHJlamVjdChyZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVzWzFdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxufTtcblxuY29uc3QgU1lOQ19BUElfUkUgPVxuICAvXlxcJHxXaW5kb3ckfFdpbmRvd1N0eWxlJHxzZW5kSG9zdEV2ZW50fHNlbmROYXRpdmVFdmVudHxyZXN0b3JlR2xvYmFsfGdldEN1cnJlbnRTdWJOVnVlfGdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3R8XnJlcG9ydHxpbnRlcmNlcHRvcnN8SW50ZXJjZXB0b3IkfGdldFN1Yk5WdWVCeUlkfHJlcXVpcmVOYXRpdmVQbHVnaW58dXB4MnB4fGhpZGVLZXlib2FyZHxjYW5JVXNlfF5jcmVhdGV8U3luYyR8TWFuYWdlciR8YmFzZTY0VG9BcnJheUJ1ZmZlcnxhcnJheUJ1ZmZlclRvQmFzZTY0fGdldExvY2FsZXxzZXRMb2NhbGUvO1xuXG5jb25zdCBDT05URVhUX0FQSV9SRSA9IC9eY3JlYXRlfE1hbmFnZXIkLztcblxuLy8gQ29udGV4dOS+i+WkluaDheWGtVxuY29uc3QgQ09OVEVYVF9BUElfUkVfRVhDID0gWydjcmVhdGVCTEVDb25uZWN0aW9uJ107XG5cbi8vIOWQjOatpeS+i+WkluaDheWGtVxuY29uc3QgQVNZTkNfQVBJID0gWydjcmVhdGVCTEVDb25uZWN0aW9uJ107XG5cbmNvbnN0IENBTExCQUNLX0FQSV9SRSA9IC9eb258Xm9mZi87XG5cbmZ1bmN0aW9uIGlzQ29udGV4dEFwaSAobmFtZSkge1xuICByZXR1cm4gQ09OVEVYVF9BUElfUkUudGVzdChuYW1lKSAmJiBDT05URVhUX0FQSV9SRV9FWEMuaW5kZXhPZihuYW1lKSA9PT0gLTFcbn1cbmZ1bmN0aW9uIGlzU3luY0FwaSAobmFtZSkge1xuICByZXR1cm4gU1lOQ19BUElfUkUudGVzdChuYW1lKSAmJiBBU1lOQ19BUEkuaW5kZXhPZihuYW1lKSA9PT0gLTFcbn1cblxuZnVuY3Rpb24gaXNDYWxsYmFja0FwaSAobmFtZSkge1xuICByZXR1cm4gQ0FMTEJBQ0tfQVBJX1JFLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ29uUHVzaCdcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvbWlzZSAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS50aGVuKGRhdGEgPT4ge1xuICAgIHJldHVybiBbbnVsbCwgZGF0YV1cbiAgfSlcbiAgICAuY2F0Y2goZXJyID0+IFtlcnJdKVxufVxuXG5mdW5jdGlvbiBzaG91bGRQcm9taXNlIChuYW1lKSB7XG4gIGlmIChcbiAgICBpc0NvbnRleHRBcGkobmFtZSkgfHxcbiAgICBpc1N5bmNBcGkobmFtZSkgfHxcbiAgICBpc0NhbGxiYWNrQXBpKG5hbWUpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cbmlmICghUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgIHZhbHVlID0+IHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHZhbHVlKSxcbiAgICAgIHJlYXNvbiA9PiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRocm93IHJlYXNvblxuICAgICAgfSlcbiAgICApXG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb21pc2lmeSAobmFtZSwgYXBpKSB7XG4gIGlmICghc2hvdWxkUHJvbWlzZShuYW1lKSkge1xuICAgIHJldHVybiBhcGlcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gcHJvbWlzZUFwaSAob3B0aW9ucyA9IHt9LCAuLi5wYXJhbXMpIHtcbiAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XG4gICAgICByZXR1cm4gd3JhcHBlclJldHVyblZhbHVlKG5hbWUsIGludm9rZUFwaShuYW1lLCBhcGksIG9wdGlvbnMsIC4uLnBhcmFtcykpXG4gICAgfVxuICAgIHJldHVybiB3cmFwcGVyUmV0dXJuVmFsdWUobmFtZSwgaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpbnZva2VBcGkobmFtZSwgYXBpLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgfSksIC4uLnBhcmFtcyk7XG4gICAgfSkpKVxuICB9XG59XG5cbmNvbnN0IEVQUyA9IDFlLTQ7XG5jb25zdCBCQVNFX0RFVklDRV9XSURUSCA9IDc1MDtcbmxldCBpc0lPUyA9IGZhbHNlO1xubGV0IGRldmljZVdpZHRoID0gMDtcbmxldCBkZXZpY2VEUFIgPSAwO1xuXG5mdW5jdGlvbiBjaGVja0RldmljZVdpZHRoICgpIHtcbiAgY29uc3Qge1xuICAgIHBsYXRmb3JtLFxuICAgIHBpeGVsUmF0aW8sXG4gICAgd2luZG93V2lkdGhcbiAgfSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7IC8vIHVuaT0+d3ggcnVudGltZSDnvJbor5Hnm67moIfmmK8gdW5pIOWvueixoe+8jOWGhemDqOS4jeWFgeiuuOebtOaOpeS9v+eUqCB1bmlcblxuICBkZXZpY2VXaWR0aCA9IHdpbmRvd1dpZHRoO1xuICBkZXZpY2VEUFIgPSBwaXhlbFJhdGlvO1xuICBpc0lPUyA9IHBsYXRmb3JtID09PSAnaW9zJztcbn1cblxuZnVuY3Rpb24gdXB4MnB4IChudW1iZXIsIG5ld0RldmljZVdpZHRoKSB7XG4gIGlmIChkZXZpY2VXaWR0aCA9PT0gMCkge1xuICAgIGNoZWNrRGV2aWNlV2lkdGgoKTtcbiAgfVxuXG4gIG51bWJlciA9IE51bWJlcihudW1iZXIpO1xuICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBsZXQgcmVzdWx0ID0gKG51bWJlciAvIEJBU0VfREVWSUNFX1dJRFRIKSAqIChuZXdEZXZpY2VXaWR0aCB8fCBkZXZpY2VXaWR0aCk7XG4gIGlmIChyZXN1bHQgPCAwKSB7XG4gICAgcmVzdWx0ID0gLXJlc3VsdDtcbiAgfVxuICByZXN1bHQgPSBNYXRoLmZsb29yKHJlc3VsdCArIEVQUyk7XG4gIGlmIChyZXN1bHQgPT09IDApIHtcbiAgICBpZiAoZGV2aWNlRFBSID09PSAxIHx8ICFpc0lPUykge1xuICAgICAgcmVzdWx0ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gMC41O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IC1yZXN1bHQgOiByZXN1bHRcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWxlICgpIHtcbiAgLy8g5LyY5YWI5L2/55SoICRsb2NhbGVcbiAgY29uc3QgYXBwID0gZ2V0QXBwKHtcbiAgICBhbGxvd0RlZmF1bHQ6IHRydWVcbiAgfSk7XG4gIGlmIChhcHAgJiYgYXBwLiR2bSkge1xuICAgIHJldHVybiBhcHAuJHZtLiRsb2NhbGVcbiAgfVxuICByZXR1cm4gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5sYW5ndWFnZSB8fCAnemgtSGFucydcbn1cblxuZnVuY3Rpb24gc2V0TG9jYWxlIChsb2NhbGUpIHtcbiAgY29uc3QgYXBwID0gZ2V0QXBwKCk7XG4gIGlmICghYXBwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3Qgb2xkTG9jYWxlID0gYXBwLiR2bS4kbG9jYWxlO1xuICBpZiAob2xkTG9jYWxlICE9PSBsb2NhbGUpIHtcbiAgICBhcHAuJHZtLiRsb2NhbGUgPSBsb2NhbGU7XG4gICAgb25Mb2NhbGVDaGFuZ2VDYWxsYmFja3MuZm9yRWFjaCgoZm4pID0+IGZuKHtcbiAgICAgIGxvY2FsZVxuICAgIH0pKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCBvbkxvY2FsZUNoYW5nZUNhbGxiYWNrcyA9IFtdO1xuZnVuY3Rpb24gb25Mb2NhbGVDaGFuZ2UgKGZuKSB7XG4gIGlmIChvbkxvY2FsZUNoYW5nZUNhbGxiYWNrcy5pbmRleE9mKGZuKSA9PT0gLTEpIHtcbiAgICBvbkxvY2FsZUNoYW5nZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgfVxufVxuXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZ2xvYmFsLmdldExvY2FsZSA9IGdldExvY2FsZTtcbn1cblxuY29uc3QgaW50ZXJjZXB0b3JzID0ge1xuICBwcm9taXNlSW50ZXJjZXB0b3Jcbn07XG5cbnZhciBiYXNlQXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIHVweDJweDogdXB4MnB4LFxuICBnZXRMb2NhbGU6IGdldExvY2FsZSxcbiAgc2V0TG9jYWxlOiBzZXRMb2NhbGUsXG4gIG9uTG9jYWxlQ2hhbmdlOiBvbkxvY2FsZUNoYW5nZSxcbiAgYWRkSW50ZXJjZXB0b3I6IGFkZEludGVyY2VwdG9yLFxuICByZW1vdmVJbnRlcmNlcHRvcjogcmVtb3ZlSW50ZXJjZXB0b3IsXG4gIGludGVyY2VwdG9yczogaW50ZXJjZXB0b3JzXG59KTtcblxuY2xhc3MgRXZlbnRDaGFubmVsIHtcbiAgY29uc3RydWN0b3IgKGlkLCBldmVudHMpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5saXN0ZW5lciA9IHt9O1xuICAgIHRoaXMuZW1pdENhY2hlID0ge307XG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICB0aGlzLm9uKG5hbWUsIGV2ZW50c1tuYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBlbWl0IChldmVudE5hbWUsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCBmbnMgPSB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV07XG4gICAgaWYgKCFmbnMpIHtcbiAgICAgIHJldHVybiAodGhpcy5lbWl0Q2FjaGVbZXZlbnROYW1lXSB8fCAodGhpcy5lbWl0Q2FjaGVbZXZlbnROYW1lXSA9IFtdKSkucHVzaChhcmdzKVxuICAgIH1cbiAgICBmbnMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgb3B0LmZuLmFwcGx5KG9wdC5mbiwgYXJncyk7XG4gICAgfSk7XG4gICAgdGhpcy5saXN0ZW5lcltldmVudE5hbWVdID0gZm5zLmZpbHRlcihvcHQgPT4gb3B0LnR5cGUgIT09ICdvbmNlJyk7XG4gIH1cblxuICBvbiAoZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMuX2FkZExpc3RlbmVyKGV2ZW50TmFtZSwgJ29uJywgZm4pO1xuICAgIHRoaXMuX2NsZWFyQ2FjaGUoZXZlbnROYW1lKTtcbiAgfVxuXG4gIG9uY2UgKGV2ZW50TmFtZSwgZm4pIHtcbiAgICB0aGlzLl9hZGRMaXN0ZW5lcihldmVudE5hbWUsICdvbmNlJywgZm4pO1xuICAgIHRoaXMuX2NsZWFyQ2FjaGUoZXZlbnROYW1lKTtcbiAgfVxuXG4gIG9mZiAoZXZlbnROYW1lLCBmbikge1xuICAgIGNvbnN0IGZucyA9IHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXTtcbiAgICBpZiAoIWZucykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChmbikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOykge1xuICAgICAgICBpZiAoZm5zW2ldLmZuID09PSBmbikge1xuICAgICAgICAgIGZucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXJDYWNoZSAoZXZlbnROYW1lKSB7XG4gICAgY29uc3QgY2FjaGVBcmdzID0gdGhpcy5lbWl0Q2FjaGVbZXZlbnROYW1lXTtcbiAgICBpZiAoY2FjaGVBcmdzKSB7XG4gICAgICBmb3IgKDsgY2FjaGVBcmdzLmxlbmd0aCA+IDA7KSB7XG4gICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBbZXZlbnROYW1lXS5jb25jYXQoY2FjaGVBcmdzLnNoaWZ0KCkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYWRkTGlzdGVuZXIgKGV2ZW50TmFtZSwgdHlwZSwgZm4pIHtcbiAgICAodGhpcy5saXN0ZW5lcltldmVudE5hbWVdIHx8ICh0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm4sXG4gICAgICB0eXBlXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgZXZlbnRDaGFubmVscyA9IHt9O1xuXG5jb25zdCBldmVudENoYW5uZWxTdGFjayA9IFtdO1xuXG5sZXQgaWQgPSAwO1xuXG5mdW5jdGlvbiBpbml0RXZlbnRDaGFubmVsIChldmVudHMsIGNhY2hlID0gdHJ1ZSkge1xuICBpZCsrO1xuICBjb25zdCBldmVudENoYW5uZWwgPSBuZXcgRXZlbnRDaGFubmVsKGlkLCBldmVudHMpO1xuICBpZiAoY2FjaGUpIHtcbiAgICBldmVudENoYW5uZWxzW2lkXSA9IGV2ZW50Q2hhbm5lbDtcbiAgICBldmVudENoYW5uZWxTdGFjay5wdXNoKGV2ZW50Q2hhbm5lbCk7XG4gIH1cbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbFxufVxuXG5mdW5jdGlvbiBnZXRFdmVudENoYW5uZWwgKGlkKSB7XG4gIGlmIChpZCkge1xuICAgIGNvbnN0IGV2ZW50Q2hhbm5lbCA9IGV2ZW50Q2hhbm5lbHNbaWRdO1xuICAgIGRlbGV0ZSBldmVudENoYW5uZWxzW2lkXTtcbiAgICByZXR1cm4gZXZlbnRDaGFubmVsXG4gIH1cbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbFN0YWNrLnNoaWZ0KClcbn1cblxudmFyIG5hdmlnYXRlVG8gPSB7XG4gIGFyZ3MgKGZyb21BcmdzLCB0b0FyZ3MpIHtcbiAgICBjb25zdCBpZCA9IGluaXRFdmVudENoYW5uZWwoZnJvbUFyZ3MuZXZlbnRzKS5pZDtcbiAgICBpZiAoZnJvbUFyZ3MudXJsKSB7XG4gICAgICBmcm9tQXJncy51cmwgPSBmcm9tQXJncy51cmwgKyAoZnJvbUFyZ3MudXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgJ19faWRfXz0nICsgaWQ7XG4gICAgfVxuICB9LFxuICByZXR1cm5WYWx1ZSAoZnJvbVJlcywgdG9SZXMpIHtcbiAgICBmcm9tUmVzLmV2ZW50Q2hhbm5lbCA9IGdldEV2ZW50Q2hhbm5lbCgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmaW5kRXhpc3RzUGFnZUluZGV4ICh1cmwpIHtcbiAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgbGV0IGxlbiA9IHBhZ2VzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbi0tKSB7XG4gICAgY29uc3QgcGFnZSA9IHBhZ2VzW2xlbl07XG4gICAgaWYgKHBhZ2UuJHBhZ2UgJiYgcGFnZS4kcGFnZS5mdWxsUGF0aCA9PT0gdXJsKSB7XG4gICAgICByZXR1cm4gbGVuXG4gICAgfVxuICB9XG4gIHJldHVybiAtMVxufVxuXG52YXIgcmVkaXJlY3RUbyA9IHtcbiAgbmFtZSAoZnJvbUFyZ3MpIHtcbiAgICBpZiAoZnJvbUFyZ3MuZXhpc3RzID09PSAnYmFjaycgJiYgZnJvbUFyZ3MuZGVsdGEpIHtcbiAgICAgIHJldHVybiAnbmF2aWdhdGVCYWNrJ1xuICAgIH1cbiAgICByZXR1cm4gJ3JlZGlyZWN0VG8nXG4gIH0sXG4gIGFyZ3MgKGZyb21BcmdzKSB7XG4gICAgaWYgKGZyb21BcmdzLmV4aXN0cyA9PT0gJ2JhY2snICYmIGZyb21BcmdzLnVybCkge1xuICAgICAgY29uc3QgZXhpc3RzUGFnZUluZGV4ID0gZmluZEV4aXN0c1BhZ2VJbmRleChmcm9tQXJncy51cmwpO1xuICAgICAgaWYgKGV4aXN0c1BhZ2VJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBnZXRDdXJyZW50UGFnZXMoKS5sZW5ndGggLSAxIC0gZXhpc3RzUGFnZUluZGV4O1xuICAgICAgICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICAgICAgZnJvbUFyZ3MuZGVsdGEgPSBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIHByZXZpZXdJbWFnZSA9IHtcbiAgYXJncyAoZnJvbUFyZ3MpIHtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gcGFyc2VJbnQoZnJvbUFyZ3MuY3VycmVudCk7XG4gICAgaWYgKGlzTmFOKGN1cnJlbnRJbmRleCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB1cmxzID0gZnJvbUFyZ3MudXJscztcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodXJscykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBsZW4gPSB1cmxzLmxlbmd0aDtcbiAgICBpZiAoIWxlbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICBjdXJyZW50SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID49IGxlbikge1xuICAgICAgY3VycmVudEluZGV4ID0gbGVuIC0gMTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgIGZyb21BcmdzLmN1cnJlbnQgPSB1cmxzW2N1cnJlbnRJbmRleF07XG4gICAgICBmcm9tQXJncy51cmxzID0gdXJscy5maWx0ZXIoXG4gICAgICAgIChpdGVtLCBpbmRleCkgPT4gaW5kZXggPCBjdXJyZW50SW5kZXggPyBpdGVtICE9PSB1cmxzW2N1cnJlbnRJbmRleF0gOiB0cnVlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcm9tQXJncy5jdXJyZW50ID0gdXJsc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZGljYXRvcjogZmFsc2UsXG4gICAgICBsb29wOiBmYWxzZVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xubGV0IGRldmljZUlkO1xuZnVuY3Rpb24gYWRkVXVpZCAocmVzdWx0KSB7XG4gIGRldmljZUlkID0gZGV2aWNlSWQgfHwgd3guZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xuICBpZiAoIWRldmljZUlkKSB7XG4gICAgZGV2aWNlSWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xuICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAga2V5OiBVVUlEX0tFWSxcbiAgICAgIGRhdGE6IGRldmljZUlkXG4gICAgfSk7XG4gIH1cbiAgcmVzdWx0LmRldmljZUlkID0gZGV2aWNlSWQ7XG59XG5cbmZ1bmN0aW9uIGFkZFNhZmVBcmVhSW5zZXRzIChyZXN1bHQpIHtcbiAgaWYgKHJlc3VsdC5zYWZlQXJlYSkge1xuICAgIGNvbnN0IHNhZmVBcmVhID0gcmVzdWx0LnNhZmVBcmVhO1xuICAgIHJlc3VsdC5zYWZlQXJlYUluc2V0cyA9IHtcbiAgICAgIHRvcDogc2FmZUFyZWEudG9wLFxuICAgICAgbGVmdDogc2FmZUFyZWEubGVmdCxcbiAgICAgIHJpZ2h0OiByZXN1bHQud2luZG93V2lkdGggLSBzYWZlQXJlYS5yaWdodCxcbiAgICAgIGJvdHRvbTogcmVzdWx0LndpbmRvd0hlaWdodCAtIHNhZmVBcmVhLmJvdHRvbVxuICAgIH07XG4gIH1cbn1cblxudmFyIGdldFN5c3RlbUluZm8gPSB7XG4gIHJldHVyblZhbHVlOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgYWRkVXVpZChyZXN1bHQpO1xuICAgIGFkZFNhZmVBcmVhSW5zZXRzKHJlc3VsdCk7XG4gIH1cbn07XG5cbmNvbnN0IG9OYW1lID0gJ2dldFVzZXJJbmZvJztcbmNvbnN0IG5OYW1lID0gJ2dldFVzZXJQcm9maWxlJztcblxudmFyIGdldFVzZXJQcm9maWxlID0ge1xuICBuYW1lOiB3eC5jYW5JVXNlKG5OYW1lKSA/IG5OYW1lIDogb05hbWVcbn07XG5cbmNvbnN0IHByb3RvY29scyA9IHtcbiAgbmF2aWdhdGVUbyxcbiAgcmVkaXJlY3RUbyxcbiAgcHJldmlld0ltYWdlLFxuICBnZXRTeXN0ZW1JbmZvLFxuICBnZXRTeXN0ZW1JbmZvU3luYzogZ2V0U3lzdGVtSW5mbyxcbiAgZ2V0VXNlclByb2ZpbGVcbn07XG5jb25zdCB0b2RvcyA9IFtcbiAgJ3ByZWxvYWRQYWdlJyxcbiAgJ3VuUHJlbG9hZFBhZ2UnLFxuICAnbG9hZFN1YlBhY2thZ2UnXG4gIC8vICdzdGFydEJlYWNvbkRpc2NvdmVyeScsXG4gIC8vICdzdG9wQmVhY29uRGlzY292ZXJ5JyxcbiAgLy8gJ2dldEJlYWNvbnMnLFxuICAvLyAnb25CZWFjb25VcGRhdGUnLFxuICAvLyAnb25CZWFjb25TZXJ2aWNlQ2hhbmdlJyxcbiAgLy8gJ2FkZFBob25lQ29udGFjdCcsXG4gIC8vICdnZXRIQ0VTdGF0ZScsXG4gIC8vICdzdGFydEhDRScsXG4gIC8vICdzdG9wSENFJyxcbiAgLy8gJ29uSENFTWVzc2FnZScsXG4gIC8vICdzZW5kSENFTWVzc2FnZScsXG4gIC8vICdzdGFydFdpZmknLFxuICAvLyAnc3RvcFdpZmknLFxuICAvLyAnY29ubmVjdFdpZmknLFxuICAvLyAnZ2V0V2lmaUxpc3QnLFxuICAvLyAnb25HZXRXaWZpTGlzdCcsXG4gIC8vICdzZXRXaWZpTGlzdCcsXG4gIC8vICdvbldpZmlDb25uZWN0ZWQnLFxuICAvLyAnZ2V0Q29ubmVjdGVkV2lmaScsXG4gIC8vICdzZXRUb3BCYXJUZXh0JyxcbiAgLy8gJ2dldFBob25lTnVtYmVyJyxcbiAgLy8gJ2Nob29zZUFkZHJlc3MnLFxuICAvLyAnYWRkQ2FyZCcsXG4gIC8vICdvcGVuQ2FyZCcsXG4gIC8vICdnZXRXZVJ1bkRhdGEnLFxuICAvLyAnbGF1bmNoQXBwJyxcbiAgLy8gJ2Nob29zZUludm9pY2VUaXRsZScsXG4gIC8vICdjaGVja0lzU3VwcG9ydFNvdGVyQXV0aGVudGljYXRpb24nLFxuICAvLyAnc3RhcnRTb3RlckF1dGhlbnRpY2F0aW9uJyxcbiAgLy8gJ2NoZWNrSXNTb3RlckVucm9sbGVkSW5EZXZpY2UnLFxuICAvLyAndmlicmF0ZScsXG4gIC8vICdsb2FkRm9udEZhY2UnLFxuICAvLyAnZ2V0RXh0Q29uZmlnJyxcbiAgLy8gJ2dldEV4dENvbmZpZ1N5bmMnXG5dO1xuY29uc3QgY2FuSVVzZXMgPSBbXG4gICdzY2FuQ29kZScsXG4gICdzdGFydEFjY2VsZXJvbWV0ZXInLFxuICAnc3RvcEFjY2VsZXJvbWV0ZXInLFxuICAnb25BY2NlbGVyb21ldGVyQ2hhbmdlJyxcbiAgJ3N0YXJ0Q29tcGFzcycsXG4gICdvbkNvbXBhc3NDaGFuZ2UnLFxuICAnc2V0U2NyZWVuQnJpZ2h0bmVzcycsXG4gICdnZXRTY3JlZW5CcmlnaHRuZXNzJyxcbiAgJ3NldEtlZXBTY3JlZW5PbicsXG4gICdvblVzZXJDYXB0dXJlU2NyZWVuJyxcbiAgJ3ZpYnJhdGVMb25nJyxcbiAgJ3ZpYnJhdGVTaG9ydCcsXG4gICdjcmVhdGVXb3JrZXInLFxuICAnY29ubmVjdFNvY2tldCcsXG4gICdvblNvY2tldE9wZW4nLFxuICAnb25Tb2NrZXRFcnJvcicsXG4gICdzZW5kU29ja2V0TWVzc2FnZScsXG4gICdvblNvY2tldE1lc3NhZ2UnLFxuICAnY2xvc2VTb2NrZXQnLFxuICAnb25Tb2NrZXRDbG9zZScsXG4gICdvcGVuRG9jdW1lbnQnLFxuICAndXBkYXRlU2hhcmVNZW51JyxcbiAgJ2dldFNoYXJlSW5mbycsXG4gICdjcmVhdGVMaXZlUGxheWVyQ29udGV4dCcsXG4gICdjcmVhdGVMaXZlUHVzaGVyQ29udGV4dCcsXG4gICdzZXROYXZpZ2F0aW9uQmFyQ29sb3InLFxuICAnb25NZW1vcnlXYXJuaW5nJyxcbiAgJ29uTmV0d29ya1N0YXR1c0NoYW5nZScsXG4gICdyZXBvcnRNb25pdG9yJyxcbiAgJ2dldExvZ01hbmFnZXInLFxuICAncmVwb3J0QW5hbHl0aWNzJ1xuXTtcblxuY29uc3QgQ0FMTEJBQ0tTID0gWydzdWNjZXNzJywgJ2ZhaWwnLCAnY2FuY2VsJywgJ2NvbXBsZXRlJ107XG5cbmZ1bmN0aW9uIHByb2Nlc3NDYWxsYmFjayAobWV0aG9kTmFtZSwgbWV0aG9kLCByZXR1cm5WYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHJlcykge1xuICAgIHJldHVybiBtZXRob2QocHJvY2Vzc1JldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NBcmdzIChtZXRob2ROYW1lLCBmcm9tQXJncywgYXJnc09wdGlvbiA9IHt9LCByZXR1cm5WYWx1ZSA9IHt9LCBrZWVwRnJvbUFyZ3MgPSBmYWxzZSkge1xuICBpZiAoaXNQbGFpbk9iamVjdChmcm9tQXJncykpIHsgLy8g5LiA6IisIGFwaSDnmoTlj4LmlbDop6PmnpBcbiAgICBjb25zdCB0b0FyZ3MgPSBrZWVwRnJvbUFyZ3MgPT09IHRydWUgPyBmcm9tQXJncyA6IHt9OyAvLyByZXR1cm5WYWx1ZSDkuLogZmFsc2Ug5pe277yM6K+05piO5piv5qC85byP5YyW6L+U5Zue5YC877yM55u05o6l5Zyo6L+U5Zue5YC85a+56LGh5LiK5L+u5pS56LWL5YC8XG4gICAgaWYgKGlzRm4oYXJnc09wdGlvbikpIHtcbiAgICAgIGFyZ3NPcHRpb24gPSBhcmdzT3B0aW9uKGZyb21BcmdzLCB0b0FyZ3MpIHx8IHt9O1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tQXJncykge1xuICAgICAgaWYgKGhhc093bihhcmdzT3B0aW9uLCBrZXkpKSB7XG4gICAgICAgIGxldCBrZXlPcHRpb24gPSBhcmdzT3B0aW9uW2tleV07XG4gICAgICAgIGlmIChpc0ZuKGtleU9wdGlvbikpIHtcbiAgICAgICAgICBrZXlPcHRpb24gPSBrZXlPcHRpb24oZnJvbUFyZ3Nba2V5XSwgZnJvbUFyZ3MsIHRvQXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFrZXlPcHRpb24pIHsgLy8g5LiN5pSv5oyB55qE5Y+C5pWwXG4gICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgJyR7bWV0aG9kTmFtZX0nIG1ldGhvZCBvZiBwbGF0Zm9ybSAnUVHlsI/nqIvluo8nIGRvZXMgbm90IHN1cHBvcnQgb3B0aW9uICcke2tleX0nYCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNTdHIoa2V5T3B0aW9uKSkgeyAvLyDph43lhpnlj4LmlbAga2V5XG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbl0gPSBmcm9tQXJnc1trZXldO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoa2V5T3B0aW9uKSkgeyAvLyB7bmFtZTpuZXdOYW1lLHZhbHVlOnZhbHVlfeWPr+mHjeaWsOaMh+WumuWPguaVsCBrZXk6dmFsdWVcbiAgICAgICAgICB0b0FyZ3Nba2V5T3B0aW9uLm5hbWUgPyBrZXlPcHRpb24ubmFtZSA6IGtleV0gPSBrZXlPcHRpb24udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoQ0FMTEJBQ0tTLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGlzRm4oZnJvbUFyZ3Nba2V5XSkpIHtcbiAgICAgICAgICB0b0FyZ3Nba2V5XSA9IHByb2Nlc3NDYWxsYmFjayhtZXRob2ROYW1lLCBmcm9tQXJnc1trZXldLCByZXR1cm5WYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgha2VlcEZyb21BcmdzKSB7XG4gICAgICAgICAgdG9BcmdzW2tleV0gPSBmcm9tQXJnc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b0FyZ3NcbiAgfSBlbHNlIGlmIChpc0ZuKGZyb21BcmdzKSkge1xuICAgIGZyb21BcmdzID0gcHJvY2Vzc0NhbGxiYWNrKG1ldGhvZE5hbWUsIGZyb21BcmdzLCByZXR1cm5WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZyb21BcmdzXG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NSZXR1cm5WYWx1ZSAobWV0aG9kTmFtZSwgcmVzLCByZXR1cm5WYWx1ZSwga2VlcFJldHVyblZhbHVlID0gZmFsc2UpIHtcbiAgaWYgKGlzRm4ocHJvdG9jb2xzLnJldHVyblZhbHVlKSkgeyAvLyDlpITnkIbpgJrnlKggcmV0dXJuVmFsdWVcbiAgICByZXMgPSBwcm90b2NvbHMucmV0dXJuVmFsdWUobWV0aG9kTmFtZSwgcmVzKTtcbiAgfVxuICByZXR1cm4gcHJvY2Vzc0FyZ3MobWV0aG9kTmFtZSwgcmVzLCByZXR1cm5WYWx1ZSwge30sIGtlZXBSZXR1cm5WYWx1ZSlcbn1cblxuZnVuY3Rpb24gd3JhcHBlciAobWV0aG9kTmFtZSwgbWV0aG9kKSB7XG4gIGlmIChoYXNPd24ocHJvdG9jb2xzLCBtZXRob2ROYW1lKSkge1xuICAgIGNvbnN0IHByb3RvY29sID0gcHJvdG9jb2xzW21ldGhvZE5hbWVdO1xuICAgIGlmICghcHJvdG9jb2wpIHsgLy8g5pqC5LiN5pSv5oyB55qEIGFwaVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgUGxhdGZvcm0gJ1FR5bCP56iL5bqPJyBkb2VzIG5vdCBzdXBwb3J0ICcke21ldGhvZE5hbWV9Jy5gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcxLCBhcmcyKSB7IC8vIOebruWJjSBhcGkg5pyA5aSa5Lik5Liq5Y+C5pWwXG4gICAgICBsZXQgb3B0aW9ucyA9IHByb3RvY29sO1xuICAgICAgaWYgKGlzRm4ocHJvdG9jb2wpKSB7XG4gICAgICAgIG9wdGlvbnMgPSBwcm90b2NvbChhcmcxKTtcbiAgICAgIH1cblxuICAgICAgYXJnMSA9IHByb2Nlc3NBcmdzKG1ldGhvZE5hbWUsIGFyZzEsIG9wdGlvbnMuYXJncywgb3B0aW9ucy5yZXR1cm5WYWx1ZSk7XG5cbiAgICAgIGNvbnN0IGFyZ3MgPSBbYXJnMV07XG4gICAgICBpZiAodHlwZW9mIGFyZzIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGFyZ3MucHVzaChhcmcyKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0ZuKG9wdGlvbnMubmFtZSkpIHtcbiAgICAgICAgbWV0aG9kTmFtZSA9IG9wdGlvbnMubmFtZShhcmcxKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTdHIob3B0aW9ucy5uYW1lKSkge1xuICAgICAgICBtZXRob2ROYW1lID0gb3B0aW9ucy5uYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB3eFttZXRob2ROYW1lXS5hcHBseSh3eCwgYXJncyk7XG4gICAgICBpZiAoaXNTeW5jQXBpKG1ldGhvZE5hbWUpKSB7IC8vIOWQjOatpSBhcGlcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXR1cm5WYWx1ZSwgb3B0aW9ucy5yZXR1cm5WYWx1ZSwgaXNDb250ZXh0QXBpKG1ldGhvZE5hbWUpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVyblZhbHVlXG4gICAgfVxuICB9XG4gIHJldHVybiBtZXRob2Rcbn1cblxuY29uc3QgdG9kb0FwaXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5jb25zdCBUT0RPUyA9IFtcbiAgJ29uVGFiQmFyTWlkQnV0dG9uVGFwJyxcbiAgJ3N1YnNjcmliZVB1c2gnLFxuICAndW5zdWJzY3JpYmVQdXNoJyxcbiAgJ29uUHVzaCcsXG4gICdvZmZQdXNoJyxcbiAgJ3NoYXJlJ1xuXTtcblxuZnVuY3Rpb24gY3JlYXRlVG9kb0FwaSAobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gdG9kb0FwaSAoe1xuICAgIGZhaWwsXG4gICAgY29tcGxldGVcbiAgfSkge1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIGVyck1zZzogYCR7bmFtZX06ZmFpbCBtZXRob2QgJyR7bmFtZX0nIG5vdCBzdXBwb3J0ZWRgXG4gICAgfTtcbiAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcbiAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xuICB9XG59XG5cblRPRE9TLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgdG9kb0FwaXNbbmFtZV0gPSBjcmVhdGVUb2RvQXBpKG5hbWUpO1xufSk7XG5cbnZhciBwcm92aWRlcnMgPSB7XG4gIG9hdXRoOiBbJ3FxJ10sXG4gIHNoYXJlOiBbJ3FxJ10sXG4gIHBheW1lbnQ6IFsncXFwYXknXSxcbiAgcHVzaDogWydxcSddXG59O1xuXG5mdW5jdGlvbiBnZXRQcm92aWRlciAoe1xuICBzZXJ2aWNlLFxuICBzdWNjZXNzLFxuICBmYWlsLFxuICBjb21wbGV0ZVxufSkge1xuICBsZXQgcmVzID0gZmFsc2U7XG4gIGlmIChwcm92aWRlcnNbc2VydmljZV0pIHtcbiAgICByZXMgPSB7XG4gICAgICBlcnJNc2c6ICdnZXRQcm92aWRlcjpvaycsXG4gICAgICBzZXJ2aWNlLFxuICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyc1tzZXJ2aWNlXVxuICAgIH07XG4gICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmVzID0ge1xuICAgICAgZXJyTXNnOiAnZ2V0UHJvdmlkZXI6ZmFpbCBzZXJ2aWNlIG5vdCBmb3VuZCdcbiAgICB9O1xuICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xuICB9XG4gIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XG59XG5cbnZhciBleHRyYUFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBnZXRQcm92aWRlcjogZ2V0UHJvdmlkZXJcbn0pO1xuXG5jb25zdCBnZXRFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IEVtaXR0ZXI7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyICgpIHtcbiAgICBpZiAoIUVtaXR0ZXIpIHtcbiAgICAgIEVtaXR0ZXIgPSBuZXcgVnVlKCk7XG4gICAgfVxuICAgIHJldHVybiBFbWl0dGVyXG4gIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5IChjdHgsIG1ldGhvZCwgYXJncykge1xuICByZXR1cm4gY3R4W21ldGhvZF0uYXBwbHkoY3R4LCBhcmdzKVxufVxuXG5mdW5jdGlvbiAkb24gKCkge1xuICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgWy4uLmFyZ3VtZW50c10pXG59XG5mdW5jdGlvbiAkb2ZmICgpIHtcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbLi4uYXJndW1lbnRzXSlcbn1cbmZ1bmN0aW9uICRvbmNlICgpIHtcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbmNlJywgWy4uLmFyZ3VtZW50c10pXG59XG5mdW5jdGlvbiAkZW1pdCAoKSB7XG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFsuLi5hcmd1bWVudHNdKVxufVxuXG52YXIgZXZlbnRBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgJG9uOiAkb24sXG4gICRvZmY6ICRvZmYsXG4gICRvbmNlOiAkb25jZSxcbiAgJGVtaXQ6ICRlbWl0XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlTWVkaWFRdWVyeU9ic2VydmVyICgpIHtcbiAgY29uc3QgbWVkaWFRdWVyeU9ic2VydmVyID0ge307XG4gIGNvbnN0IHtcbiAgICB3aW5kb3dXaWR0aCxcbiAgICB3aW5kb3dIZWlnaHRcbiAgfSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG5cbiAgY29uc3Qgb3JpZW50YXRpb24gPSB3aW5kb3dXaWR0aCA8IHdpbmRvd0hlaWdodCA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcblxuICBtZWRpYVF1ZXJ5T2JzZXJ2ZXIub2JzZXJ2ZSA9IChvcHRpb25zLCBjYWxsYmFjaykgPT4ge1xuICAgIGxldCBtYXRjaGVzID0gdHJ1ZTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gb3B0aW9ucykge1xuICAgICAgY29uc3QgaXRlbVZhbHVlID0gaXRlbSA9PT0gJ29yaWVudGF0aW9uJyA/IG9wdGlvbnNbaXRlbV0gOiBOdW1iZXIob3B0aW9uc1tpdGVtXSk7XG4gICAgICBpZiAob3B0aW9uc1tpdGVtXSAhPT0gJycpIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09ICd3aWR0aCcpIHtcbiAgICAgICAgICBpZiAoaXRlbVZhbHVlID09PSB3aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0gPT09ICdtaW5XaWR0aCcpIHtcbiAgICAgICAgICBpZiAod2luZG93V2lkdGggPj0gaXRlbVZhbHVlKSB7XG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbSA9PT0gJ21heFdpZHRoJykge1xuICAgICAgICAgIGlmICh3aW5kb3dXaWR0aCA8PSBpdGVtVmFsdWUpIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0gPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgaWYgKGl0ZW1WYWx1ZSA9PT0gd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbSA9PT0gJ21pbkhlaWdodCcpIHtcbiAgICAgICAgICBpZiAod2luZG93SGVpZ2h0ID49IGl0ZW1WYWx1ZSkge1xuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0gPT09ICdtYXhIZWlnaHQnKSB7XG4gICAgICAgICAgaWYgKHdpbmRvd0hlaWdodCA8PSBpdGVtVmFsdWUpIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0gPT09ICdvcmllbnRhdGlvbicpIHtcbiAgICAgICAgICBpZiAob3B0aW9uc1tpdGVtXSA9PT0gb3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNcbiAgfTtcblxuICBtZWRpYVF1ZXJ5T2JzZXJ2ZXIuZGlzY29ubmVjdCA9ICgpID0+IHtcbiAgfTtcblxuICByZXR1cm4gbWVkaWFRdWVyeU9ic2VydmVyXG59XG5cbnZhciBhcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgY3JlYXRlTWVkaWFRdWVyeU9ic2VydmVyOiBjcmVhdGVNZWRpYVF1ZXJ5T2JzZXJ2ZXJcbn0pO1xuXG5jb25zdCBNUFBhZ2UgPSBQYWdlO1xuY29uc3QgTVBDb21wb25lbnQgPSBDb21wb25lbnQ7XG5cbmNvbnN0IGN1c3RvbWl6ZVJFID0gLzovZztcblxuY29uc3QgY3VzdG9taXplID0gY2FjaGVkKChzdHIpID0+IHtcbiAgcmV0dXJuIGNhbWVsaXplKHN0ci5yZXBsYWNlKGN1c3RvbWl6ZVJFLCAnLScpKVxufSk7XG5cbmZ1bmN0aW9uIGluaXRUcmlnZ2VyRXZlbnQgKG1wSW5zdGFuY2UpIHtcbiAgY29uc3Qgb2xkVHJpZ2dlckV2ZW50ID0gbXBJbnN0YW5jZS50cmlnZ2VyRXZlbnQ7XG4gIG1wSW5zdGFuY2UudHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgcmV0dXJuIG9sZFRyaWdnZXJFdmVudC5hcHBseShtcEluc3RhbmNlLCBbY3VzdG9taXplKGV2ZW50KSwgLi4uYXJnc10pXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRIb29rIChuYW1lLCBvcHRpb25zLCBpc0NvbXBvbmVudCkge1xuICBjb25zdCBvbGRIb29rID0gb3B0aW9uc1tuYW1lXTtcbiAgaWYgKCFvbGRIb29rKSB7XG4gICAgb3B0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGluaXRUcmlnZ2VyRXZlbnQodGhpcyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zW25hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIGluaXRUcmlnZ2VyRXZlbnQodGhpcyk7XG4gICAgICByZXR1cm4gb2xkSG9vay5hcHBseSh0aGlzLCBhcmdzKVxuICAgIH07XG4gIH1cbn1cbmlmICghTVBQYWdlLl9fJHdyYXBwZXJlZCkge1xuICBNUFBhZ2UuX18kd3JhcHBlcmVkID0gdHJ1ZTtcbiAgUGFnZSA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcbiAgICBpbml0SG9vaygnb25Mb2FkJywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIE1QUGFnZShvcHRpb25zKVxuICB9O1xuICBQYWdlLmFmdGVyID0gTVBQYWdlLmFmdGVyO1xuXG4gIENvbXBvbmVudCA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcbiAgICBpbml0SG9vaygnY3JlYXRlZCcsIG9wdGlvbnMpO1xuICAgIHJldHVybiBNUENvbXBvbmVudChvcHRpb25zKVxuICB9O1xufVxuXG5jb25zdCBQQUdFX0VWRU5UX0hPT0tTID0gW1xuICAnb25QdWxsRG93blJlZnJlc2gnLFxuICAnb25SZWFjaEJvdHRvbScsXG4gICdvbkFkZFRvRmF2b3JpdGVzJyxcbiAgJ29uU2hhcmVUaW1lbGluZScsXG4gICdvblNoYXJlQXBwTWVzc2FnZScsXG4gICdvblBhZ2VTY3JvbGwnLFxuICAnb25SZXNpemUnLFxuICAnb25UYWJJdGVtVGFwJ1xuXTtcblxuZnVuY3Rpb24gaW5pdE1vY2tzICh2bSwgbW9ja3MpIHtcbiAgY29uc3QgbXBJbnN0YW5jZSA9IHZtLiRtcFt2bS5tcFR5cGVdO1xuICBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4ge1xuICAgIGlmIChoYXNPd24obXBJbnN0YW5jZSwgbW9jaykpIHtcbiAgICAgIHZtW21vY2tdID0gbXBJbnN0YW5jZVttb2NrXTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYXNIb29rIChob29rLCB2dWVPcHRpb25zKSB7XG4gIGlmICghdnVlT3B0aW9ucykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoVnVlLm9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheShWdWUub3B0aW9uc1tob29rXSkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgdnVlT3B0aW9ucyA9IHZ1ZU9wdGlvbnMuZGVmYXVsdCB8fCB2dWVPcHRpb25zO1xuXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnMpKSB7XG4gICAgaWYgKGlzRm4odnVlT3B0aW9ucy5leHRlbmRPcHRpb25zW2hvb2tdKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgaWYgKHZ1ZU9wdGlvbnMuc3VwZXIgJiZcbiAgICAgIHZ1ZU9wdGlvbnMuc3VwZXIub3B0aW9ucyAmJlxuICAgICAgQXJyYXkuaXNBcnJheSh2dWVPcHRpb25zLnN1cGVyLm9wdGlvbnNbaG9va10pKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnNbaG9va10pKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBtaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcbiAgaWYgKEFycmF5LmlzQXJyYXkobWl4aW5zKSkge1xuICAgIHJldHVybiAhIW1peGlucy5maW5kKG1peGluID0+IGhhc0hvb2soaG9vaywgbWl4aW4pKVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRIb29rcyAobXBPcHRpb25zLCBob29rcywgdnVlT3B0aW9ucykge1xuICBob29rcy5mb3JFYWNoKGhvb2sgPT4ge1xuICAgIGlmIChoYXNIb29rKGhvb2ssIHZ1ZU9wdGlvbnMpKSB7XG4gICAgICBtcE9wdGlvbnNbaG9va10gPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soaG9vaywgYXJncylcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdFZ1ZUNvbXBvbmVudCAoVnVlLCB2dWVPcHRpb25zKSB7XG4gIHZ1ZU9wdGlvbnMgPSB2dWVPcHRpb25zLmRlZmF1bHQgfHwgdnVlT3B0aW9ucztcbiAgbGV0IFZ1ZUNvbXBvbmVudDtcbiAgaWYgKGlzRm4odnVlT3B0aW9ucykpIHtcbiAgICBWdWVDb21wb25lbnQgPSB2dWVPcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIFZ1ZUNvbXBvbmVudCA9IFZ1ZS5leHRlbmQodnVlT3B0aW9ucyk7XG4gIH1cbiAgdnVlT3B0aW9ucyA9IFZ1ZUNvbXBvbmVudC5vcHRpb25zO1xuICByZXR1cm4gW1Z1ZUNvbXBvbmVudCwgdnVlT3B0aW9uc11cbn1cblxuZnVuY3Rpb24gaW5pdFNsb3RzICh2bSwgdnVlU2xvdHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodnVlU2xvdHMpICYmIHZ1ZVNsb3RzLmxlbmd0aCkge1xuICAgIGNvbnN0ICRzbG90cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdnVlU2xvdHMuZm9yRWFjaChzbG90TmFtZSA9PiB7XG4gICAgICAkc2xvdHNbc2xvdE5hbWVdID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB2bS4kc2NvcGVkU2xvdHMgPSB2bS4kc2xvdHMgPSAkc2xvdHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFZ1ZUlkcyAodnVlSWRzLCBtcEluc3RhbmNlKSB7XG4gIHZ1ZUlkcyA9ICh2dWVJZHMgfHwgJycpLnNwbGl0KCcsJyk7XG4gIGNvbnN0IGxlbiA9IHZ1ZUlkcy5sZW5ndGg7XG5cbiAgaWYgKGxlbiA9PT0gMSkge1xuICAgIG1wSW5zdGFuY2UuXyR2dWVJZCA9IHZ1ZUlkc1swXTtcbiAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcbiAgICBtcEluc3RhbmNlLl8kdnVlSWQgPSB2dWVJZHNbMF07XG4gICAgbXBJbnN0YW5jZS5fJHZ1ZVBpZCA9IHZ1ZUlkc1sxXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0RGF0YSAodnVlT3B0aW9ucywgY29udGV4dCkge1xuICBsZXQgZGF0YSA9IHZ1ZU9wdGlvbnMuZGF0YSB8fCB7fTtcbiAgY29uc3QgbWV0aG9kcyA9IHZ1ZU9wdGlvbnMubWV0aG9kcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgZGF0YSA9IGRhdGEuY2FsbChjb250ZXh0KTsgLy8g5pSv5oyBIFZ1ZS5wcm90b3R5cGUg5LiK5oyC55qE5pWw5o2uXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCfmoLnmja4gVnVlIOeahCBkYXRhIOWHveaVsOWIneWni+WMluWwj+eoi+W6jyBkYXRhIOWksei0pe+8jOivt+WwvemHj+ehruS/nSBkYXRhIOWHveaVsOS4reS4jeiuv+mXriB2bSDlr7nosaHvvIzlkKbliJnlj6/og73lvbHlk43pppbmrKHmlbDmja7muLLmn5PpgJ/luqbjgIInLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIOWvuSBkYXRhIOagvOW8j+WMllxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge307XG4gIH1cblxuICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgIGlmIChjb250ZXh0Ll9fbGlmZWN5Y2xlX2hvb2tzX18uaW5kZXhPZihtZXRob2ROYW1lKSA9PT0gLTEgJiYgIWhhc093bihkYXRhLCBtZXRob2ROYW1lKSkge1xuICAgICAgZGF0YVttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGF0YVxufVxuXG5jb25zdCBQUk9QX1RZUEVTID0gW1N0cmluZywgTnVtYmVyLCBCb29sZWFuLCBPYmplY3QsIEFycmF5LCBudWxsXTtcblxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIgKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG9ic2VydmVyIChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmICh0aGlzLiR2bSkge1xuICAgICAgdGhpcy4kdm1bbmFtZV0gPSBuZXdWYWw7IC8vIOS4uuS6huinpuWPkeWFtuS7lumdniByZW5kZXIgd2F0Y2hlclxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0QmVoYXZpb3JzICh2dWVPcHRpb25zLCBpbml0QmVoYXZpb3IpIHtcbiAgY29uc3QgdnVlQmVoYXZpb3JzID0gdnVlT3B0aW9ucy5iZWhhdmlvcnM7XG4gIGNvbnN0IHZ1ZUV4dGVuZHMgPSB2dWVPcHRpb25zLmV4dGVuZHM7XG4gIGNvbnN0IHZ1ZU1peGlucyA9IHZ1ZU9wdGlvbnMubWl4aW5zO1xuXG4gIGxldCB2dWVQcm9wcyA9IHZ1ZU9wdGlvbnMucHJvcHM7XG5cbiAgaWYgKCF2dWVQcm9wcykge1xuICAgIHZ1ZU9wdGlvbnMucHJvcHMgPSB2dWVQcm9wcyA9IFtdO1xuICB9XG5cbiAgY29uc3QgYmVoYXZpb3JzID0gW107XG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZUJlaGF2aW9ycykpIHtcbiAgICB2dWVCZWhhdmlvcnMuZm9yRWFjaChiZWhhdmlvciA9PiB7XG4gICAgICBiZWhhdmlvcnMucHVzaChiZWhhdmlvci5yZXBsYWNlKCd1bmk6Ly8nLCBgJHtcInd4XCJ9Oi8vYCkpO1xuICAgICAgaWYgKGJlaGF2aW9yID09PSAndW5pOi8vZm9ybS1maWVsZCcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodnVlUHJvcHMpKSB7XG4gICAgICAgICAgdnVlUHJvcHMucHVzaCgnbmFtZScpO1xuICAgICAgICAgIHZ1ZVByb3BzLnB1c2goJ3ZhbHVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdnVlUHJvcHMubmFtZSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgfTtcbiAgICAgICAgICB2dWVQcm9wcy52YWx1ZSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlciwgQm9vbGVhbiwgQXJyYXksIE9iamVjdCwgRGF0ZV0sXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpZiAoaXNQbGFpbk9iamVjdCh2dWVFeHRlbmRzKSAmJiB2dWVFeHRlbmRzLnByb3BzKSB7XG4gICAgYmVoYXZpb3JzLnB1c2goXG4gICAgICBpbml0QmVoYXZpb3Ioe1xuICAgICAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVFeHRlbmRzLnByb3BzLCB0cnVlKVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZU1peGlucykpIHtcbiAgICB2dWVNaXhpbnMuZm9yRWFjaCh2dWVNaXhpbiA9PiB7XG4gICAgICBpZiAoaXNQbGFpbk9iamVjdCh2dWVNaXhpbikgJiYgdnVlTWl4aW4ucHJvcHMpIHtcbiAgICAgICAgYmVoYXZpb3JzLnB1c2goXG4gICAgICAgICAgaW5pdEJlaGF2aW9yKHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGluaXRQcm9wZXJ0aWVzKHZ1ZU1peGluLnByb3BzLCB0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGJlaGF2aW9yc1xufVxuXG5mdW5jdGlvbiBwYXJzZVByb3BUeXBlIChrZXksIHR5cGUsIGRlZmF1bHRWYWx1ZSwgZmlsZSkge1xuICAvLyBbU3RyaW5nXT0+U3RyaW5nXG4gIGlmIChBcnJheS5pc0FycmF5KHR5cGUpICYmIHR5cGUubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHR5cGVbMF1cbiAgfVxuICByZXR1cm4gdHlwZVxufVxuXG5mdW5jdGlvbiBpbml0UHJvcGVydGllcyAocHJvcHMsIGlzQmVoYXZpb3IgPSBmYWxzZSwgZmlsZSA9ICcnKSB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcbiAgaWYgKCFpc0JlaGF2aW9yKSB7XG4gICAgcHJvcGVydGllcy52dWVJZCA9IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gICAgLy8g55So5LqO5a2X6IqC6Lez5Yqo5bCP56iL5bqP5qih5ouf5oq96LGh6IqC54K5XG4gICAgcHJvcGVydGllcy5nZW5lcmljID0ge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICAgIC8vIHNjb3BlZFNsb3RzQ29tcGlsZXIgYXV0b1xuICAgIHByb3BlcnRpZXMuc2NvcGVkU2xvdHNDb21waWxlciA9IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gICAgcHJvcGVydGllcy52dWVTbG90cyA9IHsgLy8g5bCP56iL5bqP5LiN6IO955u05o6l5a6a5LmJICRzbG90cyDnmoQgcHJvcHPvvIzmiYDku6XpgJrov4cgdnVlU2xvdHMg6L2s5o2i5YiwICRzbG90c1xuICAgICAgdHlwZTogbnVsbCxcbiAgICAgIHZhbHVlOiBbXSxcbiAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgY29uc3QgJHNsb3RzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbmV3VmFsLmZvckVhY2goc2xvdE5hbWUgPT4ge1xuICAgICAgICAgICRzbG90c1tzbG90TmFtZV0gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAkc2xvdHNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHsgLy8gWyd0aXRsZSddXG4gICAgcHJvcHMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgcHJvcGVydGllc1trZXldID0ge1xuICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkgeyAvLyB7dGl0bGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6Jyd9LGNvbnRlbnQ6U3RyaW5nfVxuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvcHRzID0gcHJvcHNba2V5XTtcbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdHMpKSB7IC8vIHRpdGxlOnt0eXBlOlN0cmluZyxkZWZhdWx0OicnfVxuICAgICAgICBsZXQgdmFsdWUgPSBvcHRzLmRlZmF1bHQ7XG4gICAgICAgIGlmIChpc0ZuKHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdHMudHlwZSA9IHBhcnNlUHJvcFR5cGUoa2V5LCBvcHRzLnR5cGUpO1xuXG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IHtcbiAgICAgICAgICB0eXBlOiBQUk9QX1RZUEVTLmluZGV4T2Yob3B0cy50eXBlKSAhPT0gLTEgPyBvcHRzLnR5cGUgOiBudWxsLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIG9ic2VydmVyOiBjcmVhdGVPYnNlcnZlcihrZXkpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgeyAvLyBjb250ZW50OlN0cmluZ1xuICAgICAgICBjb25zdCB0eXBlID0gcGFyc2VQcm9wVHlwZShrZXksIG9wdHMpO1xuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XG4gICAgICAgICAgdHlwZTogUFJPUF9UWVBFUy5pbmRleE9mKHR5cGUpICE9PSAtMSA/IHR5cGUgOiBudWxsLFxuICAgICAgICAgIG9ic2VydmVyOiBjcmVhdGVPYnNlcnZlcihrZXkpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnRpZXNcbn1cblxuZnVuY3Rpb24gd3JhcHBlciQxIChldmVudCkge1xuICAvLyBUT0RPIOWPiOW+l+WFvOWuuSBtcHZ1ZSDnmoQgbXAg5a+56LGhXG4gIHRyeSB7XG4gICAgZXZlbnQubXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID0gbm9vcDtcbiAgZXZlbnQucHJldmVudERlZmF1bHQgPSBub29wO1xuXG4gIGV2ZW50LnRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCB7fTtcblxuICBpZiAoIWhhc093bihldmVudCwgJ2RldGFpbCcpKSB7XG4gICAgZXZlbnQuZGV0YWlsID0ge307XG4gIH1cblxuICBpZiAoaGFzT3duKGV2ZW50LCAnbWFya2VySWQnKSkge1xuICAgIGV2ZW50LmRldGFpbCA9IHR5cGVvZiBldmVudC5kZXRhaWwgPT09ICdvYmplY3QnID8gZXZlbnQuZGV0YWlsIDoge307XG4gICAgZXZlbnQuZGV0YWlsLm1hcmtlcklkID0gZXZlbnQubWFya2VySWQ7XG4gIH1cblxuICBpZiAoaXNQbGFpbk9iamVjdChldmVudC5kZXRhaWwpKSB7XG4gICAgZXZlbnQudGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQudGFyZ2V0LCBldmVudC5kZXRhaWwpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50XG59XG5cbmZ1bmN0aW9uIGdldEV4dHJhVmFsdWUgKHZtLCBkYXRhUGF0aHNBcnJheSkge1xuICBsZXQgY29udGV4dCA9IHZtO1xuICBkYXRhUGF0aHNBcnJheS5mb3JFYWNoKGRhdGFQYXRoQXJyYXkgPT4ge1xuICAgIGNvbnN0IGRhdGFQYXRoID0gZGF0YVBhdGhBcnJheVswXTtcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFQYXRoQXJyYXlbMl07XG4gICAgaWYgKGRhdGFQYXRoIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gWycnLCcnLGluZGV4LCdkaXNhYmxlJ11cbiAgICAgIGNvbnN0IHByb3BQYXRoID0gZGF0YVBhdGhBcnJheVsxXTtcbiAgICAgIGNvbnN0IHZhbHVlUGF0aCA9IGRhdGFQYXRoQXJyYXlbM107XG5cbiAgICAgIGxldCB2Rm9yO1xuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIoZGF0YVBhdGgpKSB7XG4gICAgICAgIHZGb3IgPSBkYXRhUGF0aDtcbiAgICAgIH0gZWxzZSBpZiAoIWRhdGFQYXRoKSB7XG4gICAgICAgIHZGb3IgPSBjb250ZXh0O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YVBhdGggPT09ICdzdHJpbmcnICYmIGRhdGFQYXRoKSB7XG4gICAgICAgIGlmIChkYXRhUGF0aC5pbmRleE9mKCcjcyMnKSA9PT0gMCkge1xuICAgICAgICAgIHZGb3IgPSBkYXRhUGF0aC5zdWJzdHIoMyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdkZvciA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih2Rm9yKSkge1xuICAgICAgICBjb250ZXh0ID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9wUGF0aCkge1xuICAgICAgICBjb250ZXh0ID0gdkZvclt2YWx1ZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2Rm9yKSkge1xuICAgICAgICAgIGNvbnRleHQgPSB2Rm9yLmZpbmQodkZvckl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLl9fZ2V0X3ZhbHVlKHByb3BQYXRoLCB2Rm9ySXRlbSkgPT09IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2Rm9yKSkge1xuICAgICAgICAgIGNvbnRleHQgPSBPYmplY3Qua2V5cyh2Rm9yKS5maW5kKHZGb3JLZXkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLl9fZ2V0X3ZhbHVlKHByb3BQYXRoLCB2Rm9yW3ZGb3JLZXldKSA9PT0gdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCd2LWZvciDmmoLkuI3mlK/mjIHlvqrnjq/mlbDmja7vvJonLCB2Rm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVQYXRoKSB7XG4gICAgICAgIGNvbnRleHQgPSB2bS5fX2dldF92YWx1ZSh2YWx1ZVBhdGgsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb250ZXh0XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NFdmVudEV4dHJhICh2bSwgZXh0cmEsIGV2ZW50KSB7XG4gIGNvbnN0IGV4dHJhT2JqID0ge307XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZXh0cmEpICYmIGV4dHJhLmxlbmd0aCkge1xuICAgIC8qKlxuICAgICAqW1xuICAgICAqICAgIFsnZGF0YS5pdGVtcycsICdkYXRhLmlkJywgaXRlbS5kYXRhLmlkXSxcbiAgICAgKiAgICBbJ21ldGFzJywgJ2lkJywgbWV0YS5pZF1cbiAgICAgKl0sXG4gICAgICpbXG4gICAgICogICAgWydkYXRhLml0ZW1zJywgJ2RhdGEuaWQnLCBpdGVtLmRhdGEuaWRdLFxuICAgICAqICAgIFsnbWV0YXMnLCAnaWQnLCBtZXRhLmlkXVxuICAgICAqXSxcbiAgICAgKid0ZXN0J1xuICAgICAqL1xuICAgIGV4dHJhLmZvckVhY2goKGRhdGFQYXRoLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhUGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKCFkYXRhUGF0aCkgeyAvLyBtb2RlbCxwcm9wLnN5bmNcbiAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSB2bTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoZGF0YVBhdGggPT09ICckZXZlbnQnKSB7IC8vICRldmVudFxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZXZlbnQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhUGF0aCA9PT0gJ2FyZ3VtZW50cycpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLl9fYXJnc19fKSB7XG4gICAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IGV2ZW50LmRldGFpbC5fX2FyZ3NfXztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IFtldmVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhUGF0aC5pbmRleE9mKCckZXZlbnQuJykgPT09IDApIHsgLy8gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgucmVwbGFjZSgnJGV2ZW50LicsICcnKSwgZXZlbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSB2bS5fX2dldF92YWx1ZShkYXRhUGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBnZXRFeHRyYVZhbHVlKHZtLCBkYXRhUGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZXh0cmFPYmpcbn1cblxuZnVuY3Rpb24gZ2V0T2JqQnlBcnJheSAoYXJyKSB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJbaV07XG4gICAgb2JqW2VsZW1lbnRbMF1dID0gZWxlbWVudFsxXTtcbiAgfVxuICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NFdmVudEFyZ3MgKHZtLCBldmVudCwgYXJncyA9IFtdLCBleHRyYSA9IFtdLCBpc0N1c3RvbSwgbWV0aG9kTmFtZSkge1xuICBsZXQgaXNDdXN0b21NUEV2ZW50ID0gZmFsc2U7IC8vIHd4Y29tcG9uZW50IOe7hOS7tu+8jOS8oOmAkuWOn+WniyBldmVudCDlr7nosaFcbiAgaWYgKGlzQ3VzdG9tKSB7IC8vIOiHquWumuS5ieS6i+S7tlxuICAgIGlzQ3VzdG9tTVBFdmVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgJiZcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCAmJlxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbVR5cGUgPT09ICd3eCc7XG4gICAgaWYgKCFhcmdzLmxlbmd0aCkgeyAvLyDml6Dlj4LmlbDvvIznm7TmjqXkvKDlhaUgZXZlbnQg5oiWIGRldGFpbCDmlbDnu4RcbiAgICAgIGlmIChpc0N1c3RvbU1QRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIFtldmVudF1cbiAgICAgIH1cbiAgICAgIHJldHVybiBldmVudC5kZXRhaWwuX19hcmdzX18gfHwgZXZlbnQuZGV0YWlsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZXh0cmFPYmogPSBwcm9jZXNzRXZlbnRFeHRyYSh2bSwgZXh0cmEsIGV2ZW50KTtcblxuICBjb25zdCByZXQgPSBbXTtcbiAgYXJncy5mb3JFYWNoKGFyZyA9PiB7XG4gICAgaWYgKGFyZyA9PT0gJyRldmVudCcpIHtcbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnX19zZXRfbW9kZWwnICYmICFpc0N1c3RvbSkgeyAvLyBpbnB1dCB2LW1vZGVsIHZhbHVlXG4gICAgICAgIHJldC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNDdXN0b20gJiYgIWlzQ3VzdG9tTVBFdmVudCkge1xuICAgICAgICAgIHJldC5wdXNoKGV2ZW50LmRldGFpbC5fX2FyZ3NfX1swXSk7XG4gICAgICAgIH0gZWxzZSB7IC8vIHd4Y29tcG9uZW50IOe7hOS7tuaIluWGhee9rue7hOS7tlxuICAgICAgICAgIHJldC5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZ1swXSA9PT0gJ28nKSB7XG4gICAgICAgIHJldC5wdXNoKGdldE9iakJ5QXJyYXkoYXJnKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGhhc093bihleHRyYU9iaiwgYXJnKSkge1xuICAgICAgICByZXQucHVzaChleHRyYU9ialthcmddKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldC5wdXNoKGFyZyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmV0XG59XG5cbmNvbnN0IE9OQ0UgPSAnfic7XG5jb25zdCBDVVNUT00gPSAnXic7XG5cbmZ1bmN0aW9uIGlzTWF0Y2hFdmVudFR5cGUgKGV2ZW50VHlwZSwgb3B0VHlwZSkge1xuICByZXR1cm4gKGV2ZW50VHlwZSA9PT0gb3B0VHlwZSkgfHxcbiAgICAoXG4gICAgICBvcHRUeXBlID09PSAncmVnaW9uY2hhbmdlJyAmJlxuICAgICAgKFxuICAgICAgICBldmVudFR5cGUgPT09ICdiZWdpbicgfHxcbiAgICAgICAgZXZlbnRUeXBlID09PSAnZW5kJ1xuICAgICAgKVxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dFZtICh2bSkge1xuICBsZXQgJHBhcmVudCA9IHZtLiRwYXJlbnQ7XG4gIC8vIOeItue7hOS7tuaYryBzY29wZWQgc2xvdHMg5oiW6ICF5YW25LuW6Ieq5a6a5LmJ57uE5Lu25pe257un57ut5p+l5om+XG4gIHdoaWxlICgkcGFyZW50ICYmICRwYXJlbnQuJHBhcmVudCAmJiAoJHBhcmVudC4kb3B0aW9ucy5nZW5lcmljIHx8ICRwYXJlbnQuJHBhcmVudC4kb3B0aW9ucy5nZW5lcmljIHx8ICRwYXJlbnQuJHNjb3BlLl8kdnVlUGlkKSkge1xuICAgICRwYXJlbnQgPSAkcGFyZW50LiRwYXJlbnQ7XG4gIH1cbiAgcmV0dXJuICRwYXJlbnQgJiYgJHBhcmVudC4kcGFyZW50XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV2ZW50IChldmVudCkge1xuICBldmVudCA9IHdyYXBwZXIkMShldmVudCk7XG5cbiAgLy8gW1sndGFwJyxbWydoYW5kbGUnLFsxLDIsYV1dLFsnaGFuZGxlMScsWzEsMixhXV1dXV1cbiAgY29uc3QgZGF0YXNldCA9IChldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnRhcmdldCkuZGF0YXNldDtcbiAgaWYgKCFkYXRhc2V0KSB7XG4gICAgcmV0dXJuIGNvbnNvbGUud2Fybign5LqL5Lu25L+h5oGv5LiN5a2Y5ZyoJylcbiAgfVxuICBjb25zdCBldmVudE9wdHMgPSBkYXRhc2V0LmV2ZW50T3B0cyB8fCBkYXRhc2V0WydldmVudC1vcHRzJ107IC8vIOaUr+S7mOWunSB3ZWItdmlldyDnu4Tku7YgZGF0YXNldCDpnZ7pqbzls7BcbiAgaWYgKCFldmVudE9wdHMpIHtcbiAgICByZXR1cm4gY29uc29sZS53YXJuKCfkuovku7bkv6Hmga/kuI3lrZjlnKgnKVxuICB9XG5cbiAgLy8gW1snaGFuZGxlJyxbMSwyLGFdXSxbJ2hhbmRsZTEnLFsxLDIsYV1dXVxuICBjb25zdCBldmVudFR5cGUgPSBldmVudC50eXBlO1xuXG4gIGNvbnN0IHJldCA9IFtdO1xuXG4gIGV2ZW50T3B0cy5mb3JFYWNoKGV2ZW50T3B0ID0+IHtcbiAgICBsZXQgdHlwZSA9IGV2ZW50T3B0WzBdO1xuICAgIGNvbnN0IGV2ZW50c0FycmF5ID0gZXZlbnRPcHRbMV07XG5cbiAgICBjb25zdCBpc0N1c3RvbSA9IHR5cGUuY2hhckF0KDApID09PSBDVVNUT007XG4gICAgdHlwZSA9IGlzQ3VzdG9tID8gdHlwZS5zbGljZSgxKSA6IHR5cGU7XG4gICAgY29uc3QgaXNPbmNlID0gdHlwZS5jaGFyQXQoMCkgPT09IE9OQ0U7XG4gICAgdHlwZSA9IGlzT25jZSA/IHR5cGUuc2xpY2UoMSkgOiB0eXBlO1xuXG4gICAgaWYgKGV2ZW50c0FycmF5ICYmIGlzTWF0Y2hFdmVudFR5cGUoZXZlbnRUeXBlLCB0eXBlKSkge1xuICAgICAgZXZlbnRzQXJyYXkuZm9yRWFjaChldmVudEFycmF5ID0+IHtcbiAgICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IGV2ZW50QXJyYXlbMF07XG4gICAgICAgIGlmIChtZXRob2ROYW1lKSB7XG4gICAgICAgICAgbGV0IGhhbmRsZXJDdHggPSB0aGlzLiR2bTtcbiAgICAgICAgICBpZiAoaGFuZGxlckN0eC4kb3B0aW9ucy5nZW5lcmljKSB7IC8vIG1wLXdlaXhpbixtcC10b3V0aWFvIOaKveixoeiKgueCueaooeaLnyBzY29wZWQgc2xvdHNcbiAgICAgICAgICAgIGhhbmRsZXJDdHggPSBnZXRDb250ZXh0Vm0oaGFuZGxlckN0eCkgfHwgaGFuZGxlckN0eDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICckZW1pdCcpIHtcbiAgICAgICAgICAgIGhhbmRsZXJDdHguJGVtaXQuYXBwbHkoaGFuZGxlckN0eCxcbiAgICAgICAgICAgICAgcHJvY2Vzc0V2ZW50QXJncyhcbiAgICAgICAgICAgICAgICB0aGlzLiR2bSxcbiAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgICBldmVudEFycmF5WzFdLFxuICAgICAgICAgICAgICAgIGV2ZW50QXJyYXlbMl0sXG4gICAgICAgICAgICAgICAgaXNDdXN0b20sXG4gICAgICAgICAgICAgICAgbWV0aG9kTmFtZVxuICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlckN0eFttZXRob2ROYW1lXTtcbiAgICAgICAgICBpZiAoIWlzRm4oaGFuZGxlcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgIF92bS4ke21ldGhvZE5hbWV9IGlzIG5vdCBhIGZ1bmN0aW9uYClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzT25jZSkge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXIub25jZSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIub25jZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBwYXJhbXMgPSBwcm9jZXNzRXZlbnRBcmdzKFxuICAgICAgICAgICAgdGhpcy4kdm0sXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGV2ZW50QXJyYXlbMV0sXG4gICAgICAgICAgICBldmVudEFycmF5WzJdLFxuICAgICAgICAgICAgaXNDdXN0b20sXG4gICAgICAgICAgICBtZXRob2ROYW1lXG4gICAgICAgICAgKTtcbiAgICAgICAgICBwYXJhbXMgPSBBcnJheS5pc0FycmF5KHBhcmFtcykgPyBwYXJhbXMgOiBbXTtcbiAgICAgICAgICAvLyDlj4LmlbDlsL7pg6jlop7liqDljp/lp4vkuovku7blr7nosaHnlKjkuo7lpI3mnYLooajovr7lvI/lhoXojrflj5bpop3lpJbmlbDmja5cbiAgICAgICAgICBpZiAoLz1cXHMqXFxTK1xcLmV2ZW50UGFyYW1zXFxzKlxcfFxcfFxccypcXFMrXFxbWydcIl1ldmVudC1wYXJhbXNbJ1wiXVxcXS8udGVzdChoYW5kbGVyLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc3BhcnNlLWFycmF5c1xuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmNvbmNhdChbLCAsICwgLCAsICwgLCAsICwgLCBldmVudF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXQucHVzaChoYW5kbGVyLmFwcGx5KGhhbmRsZXJDdHgsIHBhcmFtcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChcbiAgICBldmVudFR5cGUgPT09ICdpbnB1dCcgJiZcbiAgICByZXQubGVuZ3RoID09PSAxICYmXG4gICAgdHlwZW9mIHJldFswXSAhPT0gJ3VuZGVmaW5lZCdcbiAgKSB7XG4gICAgcmV0dXJuIHJldFswXVxuICB9XG59XG5cbmNvbnN0IG1lc3NhZ2VzID0ge307XG5cbmxldCBsb2NhbGU7XG5cbntcbiAgbG9jYWxlID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5sYW5ndWFnZTtcbn1cblxuZnVuY3Rpb24gaW5pdEkxOG5NZXNzYWdlcyAoKSB7XG4gIGlmICghaXNFbmFibGVMb2NhbGUoKSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGxvY2FsZUtleXMgPSBPYmplY3Qua2V5cyhfX3VuaUNvbmZpZy5sb2NhbGVzKTtcbiAgaWYgKGxvY2FsZUtleXMubGVuZ3RoKSB7XG4gICAgbG9jYWxlS2V5cy5mb3JFYWNoKChsb2NhbGUpID0+IHtcbiAgICAgIGNvbnN0IGN1ck1lc3NhZ2VzID0gbWVzc2FnZXNbbG9jYWxlXTtcbiAgICAgIGNvbnN0IHVzZXJNZXNzYWdlcyA9IF9fdW5pQ29uZmlnLmxvY2FsZXNbbG9jYWxlXTtcbiAgICAgIGlmIChjdXJNZXNzYWdlcykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGN1ck1lc3NhZ2VzLCB1c2VyTWVzc2FnZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZXNbbG9jYWxlXSA9IHVzZXJNZXNzYWdlcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5pbml0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGkxOG4gPSBpbml0VnVlSTE4bihcbiAgbG9jYWxlLFxuICAge31cbik7XG5jb25zdCB0ID0gaTE4bi50O1xuY29uc3QgaTE4bk1peGluID0gKGkxOG4ubWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgY29uc3QgdW53YXRjaCA9IGkxOG4uaTE4bi53YXRjaExvY2FsZSgoKSA9PiB7XG4gICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuJG9uY2UoJ2hvb2s6YmVmb3JlRGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVud2F0Y2goKTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgICQkdCAoa2V5LCB2YWx1ZXMpIHtcbiAgICAgIHJldHVybiB0KGtleSwgdmFsdWVzKVxuICAgIH1cbiAgfVxufSk7XG5jb25zdCBzZXRMb2NhbGUkMSA9IGkxOG4uc2V0TG9jYWxlO1xuY29uc3QgZ2V0TG9jYWxlJDEgPSBpMThuLmdldExvY2FsZTtcblxuZnVuY3Rpb24gaW5pdEFwcExvY2FsZSAoVnVlLCBhcHBWbSwgbG9jYWxlKSB7XG4gIGNvbnN0IHN0YXRlID0gVnVlLm9ic2VydmFibGUoe1xuICAgIGxvY2FsZTogbG9jYWxlIHx8IGkxOG4uZ2V0TG9jYWxlKClcbiAgfSk7XG4gIGNvbnN0IGxvY2FsZVdhdGNoZXJzID0gW107XG4gIGFwcFZtLiR3YXRjaExvY2FsZSA9IGZuID0+IHtcbiAgICBsb2NhbGVXYXRjaGVycy5wdXNoKGZuKTtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFwcFZtLCAnJGxvY2FsZScsIHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmxvY2FsZVxuICAgIH0sXG4gICAgc2V0ICh2KSB7XG4gICAgICBzdGF0ZS5sb2NhbGUgPSB2O1xuICAgICAgbG9jYWxlV2F0Y2hlcnMuZm9yRWFjaCh3YXRjaCA9PiB3YXRjaCh2KSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNFbmFibGVMb2NhbGUgKCkge1xuICByZXR1cm4gdHlwZW9mIF9fdW5pQ29uZmlnICE9PSAndW5kZWZpbmVkJyAmJiBfX3VuaUNvbmZpZy5sb2NhbGVzICYmICEhT2JqZWN0LmtleXMoX191bmlDb25maWcubG9jYWxlcykubGVuZ3RoXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBpbml0STE4bigpIHtcbi8vICAgY29uc3QgbG9jYWxlS2V5cyA9IE9iamVjdC5rZXlzKF9fdW5pQ29uZmlnLmxvY2FsZXMgfHwge30pXG4vLyAgIGlmIChsb2NhbGVLZXlzLmxlbmd0aCkge1xuLy8gICAgIGxvY2FsZUtleXMuZm9yRWFjaCgobG9jYWxlKSA9PlxuLy8gICAgICAgaTE4bi5hZGQobG9jYWxlLCBfX3VuaUNvbmZpZy5sb2NhbGVzW2xvY2FsZV0pXG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5cbmNvbnN0IGhvb2tzID0gW1xuICAnb25TaG93JyxcbiAgJ29uSGlkZScsXG4gICdvbkVycm9yJyxcbiAgJ29uUGFnZU5vdEZvdW5kJyxcbiAgJ29uVGhlbWVDaGFuZ2UnLFxuICAnb25VbmhhbmRsZWRSZWplY3Rpb24nXG5dO1xuXG5mdW5jdGlvbiBpbml0RXZlbnRDaGFubmVsJDEgKCkge1xuICBWdWUucHJvdG90eXBlLmdldE9wZW5lckV2ZW50Q2hhbm5lbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX19ldmVudENoYW5uZWxfXykge1xuICAgICAgdGhpcy5fX2V2ZW50Q2hhbm5lbF9fID0gbmV3IEV2ZW50Q2hhbm5lbCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX2V2ZW50Q2hhbm5lbF9fXG4gIH07XG4gIGNvbnN0IGNhbGxIb29rID0gVnVlLnByb3RvdHlwZS5fX2NhbGxfaG9vaztcbiAgVnVlLnByb3RvdHlwZS5fX2NhbGxfaG9vayA9IGZ1bmN0aW9uIChob29rLCBhcmdzKSB7XG4gICAgaWYgKGhvb2sgPT09ICdvbkxvYWQnICYmIGFyZ3MgJiYgYXJncy5fX2lkX18pIHtcbiAgICAgIHRoaXMuX19ldmVudENoYW5uZWxfXyA9IGdldEV2ZW50Q2hhbm5lbChhcmdzLl9faWRfXyk7XG4gICAgICBkZWxldGUgYXJncy5fX2lkX187XG4gICAgfVxuICAgIHJldHVybiBjYWxsSG9vay5jYWxsKHRoaXMsIGhvb2ssIGFyZ3MpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRTY29wZWRTbG90c1BhcmFtcyAoKSB7XG4gIGNvbnN0IGNlbnRlciA9IHt9O1xuICBjb25zdCBwYXJlbnRzID0ge307XG5cbiAgVnVlLnByb3RvdHlwZS4kaGFzU2NvcGVkU2xvdHNQYXJhbXMgPSBmdW5jdGlvbiAodnVlSWQpIHtcbiAgICBjb25zdCBoYXMgPSBjZW50ZXJbdnVlSWRdO1xuICAgIGlmICghaGFzKSB7XG4gICAgICBwYXJlbnRzW3Z1ZUlkXSA9IHRoaXM7XG4gICAgICB0aGlzLiRvbignaG9vazpkZXN0cm95ZWQnLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRzW3Z1ZUlkXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaGFzXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZ2V0U2NvcGVkU2xvdHNQYXJhbXMgPSBmdW5jdGlvbiAodnVlSWQsIG5hbWUsIGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBjZW50ZXJbdnVlSWRdO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBjb25zdCBvYmplY3QgPSBkYXRhW25hbWVdIHx8IHt9O1xuICAgICAgcmV0dXJuIGtleSA/IG9iamVjdFtrZXldIDogb2JqZWN0XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudHNbdnVlSWRdID0gdGhpcztcbiAgICAgIHRoaXMuJG9uKCdob29rOmRlc3Ryb3llZCcsICgpID0+IHtcbiAgICAgICAgZGVsZXRlIHBhcmVudHNbdnVlSWRdO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHNldFNjb3BlZFNsb3RzUGFyYW1zID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdnVlSWRzID0gdGhpcy4kb3B0aW9ucy5wcm9wc0RhdGEudnVlSWQ7XG4gICAgaWYgKHZ1ZUlkcykge1xuICAgICAgY29uc3QgdnVlSWQgPSB2dWVJZHMuc3BsaXQoJywnKVswXTtcbiAgICAgIGNvbnN0IG9iamVjdCA9IGNlbnRlclt2dWVJZF0gPSBjZW50ZXJbdnVlSWRdIHx8IHt9O1xuICAgICAgb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgICBpZiAocGFyZW50c1t2dWVJZF0pIHtcbiAgICAgICAgcGFyZW50c1t2dWVJZF0uJGZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5taXhpbih7XG4gICAgZGVzdHJveWVkICgpIHtcbiAgICAgIGNvbnN0IHByb3BzRGF0YSA9IHRoaXMuJG9wdGlvbnMucHJvcHNEYXRhO1xuICAgICAgY29uc3QgdnVlSWQgPSBwcm9wc0RhdGEgJiYgcHJvcHNEYXRhLnZ1ZUlkO1xuICAgICAgaWYgKHZ1ZUlkKSB7XG4gICAgICAgIGRlbGV0ZSBjZW50ZXJbdnVlSWRdO1xuICAgICAgICBkZWxldGUgcGFyZW50c1t2dWVJZF07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VCYXNlQXBwICh2bSwge1xuICBtb2NrcyxcbiAgaW5pdFJlZnNcbn0pIHtcbiAgaW5pdEV2ZW50Q2hhbm5lbCQxKCk7XG4gIHtcbiAgICBpbml0U2NvcGVkU2xvdHNQYXJhbXMoKTtcbiAgfVxuICBpZiAodm0uJG9wdGlvbnMuc3RvcmUpIHtcbiAgICBWdWUucHJvdG90eXBlLiRzdG9yZSA9IHZtLiRvcHRpb25zLnN0b3JlO1xuICB9XG4gIHVuaUlkTWl4aW4oVnVlKTtcblxuICBWdWUucHJvdG90eXBlLm1wSG9zdCA9IFwibXAtcXFcIjtcblxuICBWdWUubWl4aW4oe1xuICAgIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgICBpZiAoIXRoaXMuJG9wdGlvbnMubXBUeXBlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLm1wVHlwZSA9IHRoaXMuJG9wdGlvbnMubXBUeXBlO1xuXG4gICAgICB0aGlzLiRtcCA9IHtcbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIFt0aGlzLm1wVHlwZV06IHRoaXMuJG9wdGlvbnMubXBJbnN0YW5jZVxuICAgICAgfTtcblxuICAgICAgdGhpcy4kc2NvcGUgPSB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2U7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLiRvcHRpb25zLm1wVHlwZTtcbiAgICAgIGRlbGV0ZSB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2U7XG4gICAgICBpZiAodGhpcy5tcFR5cGUgPT09ICdwYWdlJyAmJiB0eXBlb2YgZ2V0QXBwID09PSAnZnVuY3Rpb24nKSB7IC8vIGhhY2sgdnVlLWkxOG5cbiAgICAgICAgY29uc3QgYXBwID0gZ2V0QXBwKCk7XG4gICAgICAgIGlmIChhcHAuJHZtICYmIGFwcC4kdm0uJGkxOG4pIHtcbiAgICAgICAgICB0aGlzLl9pMThuID0gYXBwLiR2bS4kaTE4bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMubXBUeXBlICE9PSAnYXBwJykge1xuICAgICAgICBpbml0UmVmcyh0aGlzKTtcbiAgICAgICAgaW5pdE1vY2tzKHRoaXMsIG1vY2tzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGFwcE9wdGlvbnMgPSB7XG4gICAgb25MYXVuY2ggKGFyZ3MpIHtcbiAgICAgIGlmICh0aGlzLiR2bSkgeyAvLyDlt7Lnu4/liJ3lp4vljJbov4fkuobvvIzkuLvopoHmmK/kuLrkuobnmb7luqbvvIznmb7luqYgb25TaG93IOWcqCBvbkxhdW5jaCDkuYvliY1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlmICh3eC5jYW5JVXNlICYmICF3eC5jYW5JVXNlKCduZXh0VGljaycpKSB7IC8vIOS6i+WuniDkuIoyLjIuMyDljbPlj6/vvIznroDljZXkvb/nlKggMi4zLjAg55qEIG5leHRUaWNrIOWIpOaWrVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W9k+WJjeW+ruS/oeWfuuehgOW6k+eJiOacrOi/h+S9ju+8jOivt+WwhiDlvq7kv6HlvIDlj5HogIXlt6Xlhbct6K+m5oOFLemhueebruiuvue9ri3osIPor5Xln7rnoYDlupPniYjmnKwg5pu05o2i5Li6YDIuMy4wYOS7peS4iicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHZtID0gdm07XG5cbiAgICAgIHRoaXMuJHZtLiRtcCA9IHtcbiAgICAgICAgYXBwOiB0aGlzXG4gICAgICB9O1xuXG4gICAgICB0aGlzLiR2bS4kc2NvcGUgPSB0aGlzO1xuICAgICAgLy8gdm0g5LiK5Lmf5oyC6L29IGdsb2JhbERhdGFcbiAgICAgIHRoaXMuJHZtLmdsb2JhbERhdGEgPSB0aGlzLmdsb2JhbERhdGE7XG5cbiAgICAgIHRoaXMuJHZtLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnLCBhcmdzKTtcblxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uTGF1bmNoJywgYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIOWFvOWuueaXp+eJiOacrCBnbG9iYWxEYXRhXG4gIGFwcE9wdGlvbnMuZ2xvYmFsRGF0YSA9IHZtLiRvcHRpb25zLmdsb2JhbERhdGEgfHwge307XG4gIC8vIOWwhiBtZXRob2RzIOS4reeahOaWueazleaMguWcqCBnZXRBcHAoKSDkuK1cbiAgY29uc3QgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gIGlmIChtZXRob2RzKSB7XG4gICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGFwcE9wdGlvbnNbbmFtZV0gPSBtZXRob2RzW25hbWVdO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdEFwcExvY2FsZShWdWUsIHZtLCB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLmxhbmd1YWdlIHx8ICd6aC1IYW5zJyk7XG5cbiAgaW5pdEhvb2tzKGFwcE9wdGlvbnMsIGhvb2tzKTtcblxuICByZXR1cm4gYXBwT3B0aW9uc1xufVxuXG5jb25zdCBtb2NrcyA9IFsnX19yb3V0ZV9fJywgJ19fd3hFeHBhcnNlck5vZGVJZF9fJywgJ19fd3hXZWJ2aWV3SWRfXyddO1xuXG5mdW5jdGlvbiBmaW5kVm1CeVZ1ZUlkICh2bSwgdnVlUGlkKSB7XG4gIGNvbnN0ICRjaGlsZHJlbiA9IHZtLiRjaGlsZHJlbjtcbiAgLy8g5LyY5YWI5p+l5om+55u05bGeKOWPjeWQkeafpeaJvjpodHRwczovL2dpdGh1Yi5jb20vZGNsb3VkaW8vdW5pLWFwcC9pc3N1ZXMvMTIwMClcbiAgZm9yIChsZXQgaSA9ICRjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IGNoaWxkVm0gPSAkY2hpbGRyZW5baV07XG4gICAgaWYgKGNoaWxkVm0uJHNjb3BlLl8kdnVlSWQgPT09IHZ1ZVBpZCkge1xuICAgICAgcmV0dXJuIGNoaWxkVm1cbiAgICB9XG4gIH1cbiAgLy8g5Y+N5ZCR6YCS5b2S5p+l5om+XG4gIGxldCBwYXJlbnRWbTtcbiAgZm9yIChsZXQgaSA9ICRjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHBhcmVudFZtID0gZmluZFZtQnlWdWVJZCgkY2hpbGRyZW5baV0sIHZ1ZVBpZCk7XG4gICAgaWYgKHBhcmVudFZtKSB7XG4gICAgICByZXR1cm4gcGFyZW50Vm1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdEJlaGF2aW9yIChvcHRpb25zKSB7XG4gIHJldHVybiBCZWhhdmlvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpc1BhZ2UgKCkge1xuICByZXR1cm4gISF0aGlzLnJvdXRlXG59XG5cbmZ1bmN0aW9uIGluaXRSZWxhdGlvbiAoZGV0YWlsKSB7XG4gIHRoaXMudHJpZ2dlckV2ZW50KCdfX2wnLCBkZXRhaWwpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RBbGxDb21wb25lbnRzIChtcEluc3RhbmNlLCBzZWxlY3RvciwgJHJlZnMpIHtcbiAgY29uc3QgY29tcG9uZW50cyA9IG1wSW5zdGFuY2Uuc2VsZWN0QWxsQ29tcG9uZW50cyhzZWxlY3Rvcik7XG4gIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcbiAgICAkcmVmc1tyZWZdID0gY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0UmVmcyAodm0pIHtcbiAgY29uc3QgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCAnJHJlZnMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIGNvbnN0ICRyZWZzID0ge307XG4gICAgICBzZWxlY3RBbGxDb21wb25lbnRzKG1wSW5zdGFuY2UsICcudnVlLXJlZicsICRyZWZzKTtcbiAgICAgIC8vIFRPRE8g5pqC5LiN6ICD6JmRIGZvciDkuK3nmoQgc2NvcGVkXG4gICAgICBjb25zdCBmb3JDb21wb25lbnRzID0gbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZi1pbi1mb3InKTtcbiAgICAgIGZvckNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjb25zdCByZWYgPSBjb21wb25lbnQuZGF0YXNldC5yZWY7XG4gICAgICAgIGlmICghJHJlZnNbcmVmXSkge1xuICAgICAgICAgICRyZWZzW3JlZl0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICAkcmVmc1tyZWZdLnB1c2goY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gJHJlZnNcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVMaW5rIChldmVudCkge1xuICBjb25zdCB7XG4gICAgdnVlUGlkLFxuICAgIHZ1ZU9wdGlvbnNcbiAgfSA9IGV2ZW50LmRldGFpbCB8fCBldmVudC52YWx1ZTsgLy8gZGV0YWlsIOaYr+W+ruS/oSx2YWx1ZSDmmK/nmb7luqYoZGlwYXRjaClcblxuICBsZXQgcGFyZW50Vm07XG5cbiAgaWYgKHZ1ZVBpZCkge1xuICAgIHBhcmVudFZtID0gZmluZFZtQnlWdWVJZCh0aGlzLiR2bSwgdnVlUGlkKTtcbiAgfVxuXG4gIGlmICghcGFyZW50Vm0pIHtcbiAgICBwYXJlbnRWbSA9IHRoaXMuJHZtO1xuICB9XG5cbiAgdnVlT3B0aW9ucy5wYXJlbnQgPSBwYXJlbnRWbTtcbn1cblxuZnVuY3Rpb24gcGFyc2VBcHAgKHZtKSB7XG4gIHJldHVybiBwYXJzZUJhc2VBcHAodm0sIHtcbiAgICBtb2NrcyxcbiAgICBpbml0UmVmc1xuICB9KVxufVxuXG5mdW5jdGlvbiBwYXJzZUFwcCQxICh2bSkge1xuICByZXR1cm4gcGFyc2VBcHAodm0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwcCAodm0pIHtcbiAgQXBwKHBhcnNlQXBwJDEodm0pKTtcbiAgcmV0dXJuIHZtXG59XG5cbmNvbnN0IGVuY29kZVJlc2VydmVSRSA9IC9bIScoKSpdL2c7XG5jb25zdCBlbmNvZGVSZXNlcnZlUmVwbGFjZXIgPSBjID0+ICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNik7XG5jb25zdCBjb21tYVJFID0gLyUyQy9nO1xuXG4vLyBmaXhlZCBlbmNvZGVVUklDb21wb25lbnQgd2hpY2ggaXMgbW9yZSBjb25mb3JtYW50IHRvIFJGQzM5ODY6XG4vLyAtIGVzY2FwZXMgWyEnKCkqXVxuLy8gLSBwcmVzZXJ2ZSBjb21tYXNcbmNvbnN0IGVuY29kZSA9IHN0ciA9PiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAucmVwbGFjZShlbmNvZGVSZXNlcnZlUkUsIGVuY29kZVJlc2VydmVSZXBsYWNlcilcbiAgLnJlcGxhY2UoY29tbWFSRSwgJywnKTtcblxuZnVuY3Rpb24gc3RyaW5naWZ5UXVlcnkgKG9iaiwgZW5jb2RlU3RyID0gZW5jb2RlKSB7XG4gIGNvbnN0IHJlcyA9IG9iaiA/IE9iamVjdC5rZXlzKG9iaikubWFwKGtleSA9PiB7XG4gICAgY29uc3QgdmFsID0gb2JqW2tleV07XG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cblxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbmNvZGVTdHIoa2V5KVxuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgdmFsLmZvckVhY2godmFsMiA9PiB7XG4gICAgICAgIGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsMiA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVN0cihrZXkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVTdHIoa2V5KSArICc9JyArIGVuY29kZVN0cih2YWwyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcmJylcbiAgICB9XG5cbiAgICByZXR1cm4gZW5jb2RlU3RyKGtleSkgKyAnPScgKyBlbmNvZGVTdHIodmFsKVxuICB9KS5maWx0ZXIoeCA9PiB4Lmxlbmd0aCA+IDApLmpvaW4oJyYnKSA6IG51bGw7XG4gIHJldHVybiByZXMgPyBgPyR7cmVzfWAgOiAnJ1xufVxuXG5mdW5jdGlvbiBwYXJzZUJhc2VDb21wb25lbnQgKHZ1ZUNvbXBvbmVudE9wdGlvbnMsIHtcbiAgaXNQYWdlLFxuICBpbml0UmVsYXRpb25cbn0gPSB7fSkge1xuICBjb25zdCBbVnVlQ29tcG9uZW50LCB2dWVPcHRpb25zXSA9IGluaXRWdWVDb21wb25lbnQoVnVlLCB2dWVDb21wb25lbnRPcHRpb25zKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG11bHRpcGxlU2xvdHM6IHRydWUsXG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWUsXG4gICAgLi4uKHZ1ZU9wdGlvbnMub3B0aW9ucyB8fCB7fSlcbiAgfTtcblxuICB7XG4gICAgLy8g5b6u5L+hIG11bHRpcGxlU2xvdHMg6YOo5YiG5oOF5Ya15pyJIGJ1Z++8jOWvvOiHtOWGheWuuemhuuW6j+mUmeS5sSDlpoIgdS1saXN077yM5o+Q5L6b6KaG55uW6YCJ6aG5XG4gICAgaWYgKHZ1ZU9wdGlvbnNbJ21wLXdlaXhpbiddICYmIHZ1ZU9wdGlvbnNbJ21wLXdlaXhpbiddLm9wdGlvbnMpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgdnVlT3B0aW9uc1snbXAtd2VpeGluJ10ub3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY29tcG9uZW50T3B0aW9ucyA9IHtcbiAgICBvcHRpb25zLFxuICAgIGRhdGE6IGluaXREYXRhKHZ1ZU9wdGlvbnMsIFZ1ZS5wcm90b3R5cGUpLFxuICAgIGJlaGF2aW9yczogaW5pdEJlaGF2aW9ycyh2dWVPcHRpb25zLCBpbml0QmVoYXZpb3IpLFxuICAgIHByb3BlcnRpZXM6IGluaXRQcm9wZXJ0aWVzKHZ1ZU9wdGlvbnMucHJvcHMsIGZhbHNlLCB2dWVPcHRpb25zLl9fZmlsZSksXG4gICAgbGlmZXRpbWVzOiB7XG4gICAgICBhdHRhY2hlZCAoKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBtcFR5cGU6IGlzUGFnZS5jYWxsKHRoaXMpID8gJ3BhZ2UnIDogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgbXBJbnN0YW5jZTogdGhpcyxcbiAgICAgICAgICBwcm9wc0RhdGE6IHByb3BlcnRpZXNcbiAgICAgICAgfTtcblxuICAgICAgICBpbml0VnVlSWRzKHByb3BlcnRpZXMudnVlSWQsIHRoaXMpO1xuXG4gICAgICAgIC8vIOWkhOeQhueItuWtkOWFs+ezu1xuICAgICAgICBpbml0UmVsYXRpb24uY2FsbCh0aGlzLCB7XG4gICAgICAgICAgdnVlUGlkOiB0aGlzLl8kdnVlUGlkLFxuICAgICAgICAgIHZ1ZU9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyWIHZ1ZSDlrp7kvotcbiAgICAgICAgdGhpcy4kdm0gPSBuZXcgVnVlQ29tcG9uZW50KG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIOWkhOeQhiRzbG90cywkc2NvcGVkU2xvdHPvvIjmmoLkuI3mlK/mjIHliqjmgIHlj5jljJYkc2xvdHPvvIlcbiAgICAgICAgaW5pdFNsb3RzKHRoaXMuJHZtLCBwcm9wZXJ0aWVzLnZ1ZVNsb3RzKTtcblxuICAgICAgICAvLyDop6blj5HpppbmrKEgc2V0RGF0YVxuICAgICAgICB0aGlzLiR2bS4kbW91bnQoKTtcbiAgICAgIH0sXG4gICAgICByZWFkeSAoKSB7XG4gICAgICAgIC8vIOW9k+e7hOS7tiBwcm9wcyDpu5jorqTlgLzkuLogdHJ1Ze+8jOWIneWni+WMluaXtuS8oOWFpSBmYWxzZSDkvJrlr7zoh7QgY3JlYXRlZCxyZWFkeSDop6blj5EsIOS9hiBhdHRhY2hlZCDkuI3op6blj5FcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vY29tbXVuaXR5L2RldmVsb3AvZG9jLzAwMDY2YWUyODQ0Y2MwZjhlYjg4M2UyYTU1NzgwMFxuICAgICAgICBpZiAodGhpcy4kdm0pIHtcbiAgICAgICAgICB0aGlzLiR2bS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnbW91bnRlZCcpO1xuICAgICAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZXRhY2hlZCAoKSB7XG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLiRkZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBwYWdlTGlmZXRpbWVzOiB7XG4gICAgICBzaG93IChhcmdzKSB7XG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VTaG93JywgYXJncyk7XG4gICAgICB9LFxuICAgICAgaGlkZSAoKSB7XG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VIaWRlJyk7XG4gICAgICB9LFxuICAgICAgcmVzaXplIChzaXplKSB7XG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VSZXNpemUnLCBzaXplKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIF9fbDogaGFuZGxlTGluayxcbiAgICAgIF9fZTogaGFuZGxlRXZlbnRcbiAgICB9XG4gIH07XG4gIC8vIGV4dGVybmFsQ2xhc3Nlc1xuICBpZiAodnVlT3B0aW9ucy5leHRlcm5hbENsYXNzZXMpIHtcbiAgICBjb21wb25lbnRPcHRpb25zLmV4dGVybmFsQ2xhc3NlcyA9IHZ1ZU9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodnVlT3B0aW9ucy53eHNDYWxsTWV0aG9kcykpIHtcbiAgICB2dWVPcHRpb25zLnd4c0NhbGxNZXRob2RzLmZvckVhY2goY2FsbE1ldGhvZCA9PiB7XG4gICAgICBjb21wb25lbnRPcHRpb25zLm1ldGhvZHNbY2FsbE1ldGhvZF0gPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy4kdm1bY2FsbE1ldGhvZF0oYXJncylcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaXNQYWdlKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudE9wdGlvbnNcbiAgfVxuICByZXR1cm4gW2NvbXBvbmVudE9wdGlvbnMsIFZ1ZUNvbXBvbmVudF1cbn1cblxuZnVuY3Rpb24gcGFyc2VDb21wb25lbnQgKHZ1ZUNvbXBvbmVudE9wdGlvbnMpIHtcbiAgcmV0dXJuIHBhcnNlQmFzZUNvbXBvbmVudCh2dWVDb21wb25lbnRPcHRpb25zLCB7XG4gICAgaXNQYWdlLFxuICAgIGluaXRSZWxhdGlvblxuICB9KVxufVxuXG5mdW5jdGlvbiBwYXJzZUNvbXBvbmVudCQxICh2dWVDb21wb25lbnRPcHRpb25zKSB7XG4gIHJldHVybiBwYXJzZUNvbXBvbmVudCh2dWVDb21wb25lbnRPcHRpb25zKVxufVxuXG5jb25zdCBob29rcyQxID0gW1xuICAnb25TaG93JyxcbiAgJ29uSGlkZScsXG4gICdvblVubG9hZCdcbl07XG5cbmhvb2tzJDEucHVzaCguLi5QQUdFX0VWRU5UX0hPT0tTKTtcblxuZnVuY3Rpb24gcGFyc2VCYXNlUGFnZSAodnVlUGFnZU9wdGlvbnMsIHtcbiAgaXNQYWdlLFxuICBpbml0UmVsYXRpb25cbn0pIHtcbiAgY29uc3QgcGFnZU9wdGlvbnMgPSBwYXJzZUNvbXBvbmVudCQxKHZ1ZVBhZ2VPcHRpb25zKTtcblxuICBpbml0SG9va3MocGFnZU9wdGlvbnMubWV0aG9kcywgaG9va3MkMSwgdnVlUGFnZU9wdGlvbnMpO1xuXG4gIHBhZ2VPcHRpb25zLm1ldGhvZHMub25Mb2FkID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdGhpcy5vcHRpb25zID0gcXVlcnk7XG4gICAgY29uc3QgY29weVF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpO1xuICAgIGRlbGV0ZSBjb3B5UXVlcnkuX19pZF9fO1xuICAgIHRoaXMuJHBhZ2UgPSB7XG4gICAgICBmdWxsUGF0aDogJy8nICsgKHRoaXMucm91dGUgfHwgdGhpcy5pcykgKyBzdHJpbmdpZnlRdWVyeShjb3B5UXVlcnkpXG4gICAgfTtcbiAgICB0aGlzLiR2bS4kbXAucXVlcnkgPSBxdWVyeTsgLy8g5YW85a65IG1wdnVlXG4gICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uTG9hZCcsIHF1ZXJ5KTtcbiAgfTtcblxuICByZXR1cm4gcGFnZU9wdGlvbnNcbn1cblxuZnVuY3Rpb24gcGFyc2VQYWdlICh2dWVQYWdlT3B0aW9ucykge1xuICByZXR1cm4gcGFyc2VCYXNlUGFnZSh2dWVQYWdlT3B0aW9ucywge1xuICAgIGlzUGFnZSxcbiAgICBpbml0UmVsYXRpb25cbiAgfSlcbn1cblxuZnVuY3Rpb24gcGFyc2VQYWdlJDEgKHZ1ZVBhZ2VPcHRpb25zKSB7XG4gIHJldHVybiBwYXJzZVBhZ2UodnVlUGFnZU9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UgKHZ1ZVBhZ2VPcHRpb25zKSB7XG4gIHtcbiAgICByZXR1cm4gQ29tcG9uZW50KHBhcnNlUGFnZSQxKHZ1ZVBhZ2VPcHRpb25zKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZ1ZU9wdGlvbnMpIHtcbiAge1xuICAgIHJldHVybiBDb21wb25lbnQocGFyc2VDb21wb25lbnQkMSh2dWVPcHRpb25zKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJwYWNrYWdlQXBwICh2bSkge1xuICBjb25zdCBhcHBPcHRpb25zID0gcGFyc2VBcHAkMSh2bSk7XG4gIGNvbnN0IGFwcCA9IGdldEFwcCh7XG4gICAgYWxsb3dEZWZhdWx0OiB0cnVlXG4gIH0pO1xuICB2bS4kc2NvcGUgPSBhcHA7XG4gIGNvbnN0IGdsb2JhbERhdGEgPSBhcHAuZ2xvYmFsRGF0YTtcbiAgaWYgKGdsb2JhbERhdGEpIHtcbiAgICBPYmplY3Qua2V5cyhhcHBPcHRpb25zLmdsb2JhbERhdGEpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBpZiAoIWhhc093bihnbG9iYWxEYXRhLCBuYW1lKSkge1xuICAgICAgICBnbG9iYWxEYXRhW25hbWVdID0gYXBwT3B0aW9ucy5nbG9iYWxEYXRhW25hbWVdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIE9iamVjdC5rZXlzKGFwcE9wdGlvbnMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKCFoYXNPd24oYXBwLCBuYW1lKSkge1xuICAgICAgYXBwW25hbWVdID0gYXBwT3B0aW9uc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uU2hvdykgJiYgd3gub25BcHBTaG93KSB7XG4gICAgd3gub25BcHBTaG93KCguLi5hcmdzKSA9PiB7XG4gICAgICB2bS5fX2NhbGxfaG9vaygnb25TaG93JywgYXJncyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vbkhpZGUpICYmIHd4Lm9uQXBwSGlkZSkge1xuICAgIHd4Lm9uQXBwSGlkZSgoLi4uYXJncykgPT4ge1xuICAgICAgdm0uX19jYWxsX2hvb2soJ29uSGlkZScsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25MYXVuY2gpKSB7XG4gICAgY29uc3QgYXJncyA9IHd4LmdldExhdW5jaE9wdGlvbnNTeW5jICYmIHd4LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XG4gICAgdm0uX19jYWxsX2hvb2soJ29uTGF1bmNoJywgYXJncyk7XG4gIH1cbiAgcmV0dXJuIHZtXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsdWdpbiAodm0pIHtcbiAgY29uc3QgYXBwT3B0aW9ucyA9IHBhcnNlQXBwJDEodm0pO1xuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uU2hvdykgJiYgd3gub25BcHBTaG93KSB7XG4gICAgd3gub25BcHBTaG93KCguLi5hcmdzKSA9PiB7XG4gICAgICBhcHBPcHRpb25zLm9uU2hvdy5hcHBseSh2bSwgYXJncyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vbkhpZGUpICYmIHd4Lm9uQXBwSGlkZSkge1xuICAgIHd4Lm9uQXBwSGlkZSgoLi4uYXJncykgPT4ge1xuICAgICAgYXBwT3B0aW9ucy5vbkhpZGUuYXBwbHkodm0sIGFyZ3MpO1xuICAgIH0pO1xuICB9XG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25MYXVuY2gpKSB7XG4gICAgY29uc3QgYXJncyA9IHd4LmdldExhdW5jaE9wdGlvbnNTeW5jICYmIHd4LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XG4gICAgYXBwT3B0aW9ucy5vbkxhdW5jaC5jYWxsKHZtLCBhcmdzKTtcbiAgfVxuICByZXR1cm4gdm1cbn1cblxudG9kb3MuZm9yRWFjaCh0b2RvQXBpID0+IHtcbiAgcHJvdG9jb2xzW3RvZG9BcGldID0gZmFsc2U7XG59KTtcblxuY2FuSVVzZXMuZm9yRWFjaChjYW5JVXNlQXBpID0+IHtcbiAgY29uc3QgYXBpTmFtZSA9IHByb3RvY29sc1tjYW5JVXNlQXBpXSAmJiBwcm90b2NvbHNbY2FuSVVzZUFwaV0ubmFtZSA/IHByb3RvY29sc1tjYW5JVXNlQXBpXS5uYW1lXG4gICAgOiBjYW5JVXNlQXBpO1xuICBpZiAoIXd4LmNhbklVc2UoYXBpTmFtZSkpIHtcbiAgICBwcm90b2NvbHNbY2FuSVVzZUFwaV0gPSBmYWxzZTtcbiAgfVxufSk7XG5cbmxldCB1bmkgPSB7fTtcblxuaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgXCJtcC1xcVwiICE9PSAnYXBwLXBsdXMnKSB7XG4gIHVuaSA9IG5ldyBQcm94eSh7fSwge1xuICAgIGdldCAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICBpZiAoaGFzT3duKHRhcmdldCwgbmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXVxuICAgICAgfVxuICAgICAgaWYgKGJhc2VBcGlbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIGJhc2VBcGlbbmFtZV1cbiAgICAgIH1cbiAgICAgIGlmIChhcGlbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeShuYW1lLCBhcGlbbmFtZV0pXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlmIChleHRyYUFwaVtuYW1lXSkge1xuICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgZXh0cmFBcGlbbmFtZV0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvZG9BcGlzW25hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50QXBpW25hbWVdKSB7XG4gICAgICAgIHJldHVybiBldmVudEFwaVtuYW1lXVxuICAgICAgfVxuICAgICAgaWYgKCFoYXNPd24od3gsIG5hbWUpICYmICFoYXNPd24ocHJvdG9jb2xzLCBuYW1lKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgd3JhcHBlcihuYW1lLCB3eFtuYW1lXSkpXG4gICAgfSxcbiAgICBzZXQgKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pO1xufSBlbHNlIHtcbiAgT2JqZWN0LmtleXMoYmFzZUFwaSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICB1bmlbbmFtZV0gPSBiYXNlQXBpW25hbWVdO1xuICB9KTtcblxuICB7XG4gICAgT2JqZWN0LmtleXModG9kb0FwaXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgdG9kb0FwaXNbbmFtZV0pO1xuICAgIH0pO1xuICAgIE9iamVjdC5rZXlzKGV4dHJhQXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG5hbWUsIHRvZG9BcGlzW25hbWVdKTtcbiAgICB9KTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKGV2ZW50QXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIHVuaVtuYW1lXSA9IGV2ZW50QXBpW25hbWVdO1xuICB9KTtcblxuICBPYmplY3Qua2V5cyhhcGkpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG5hbWUsIGFwaVtuYW1lXSk7XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKHd4KS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChoYXNPd24od3gsIG5hbWUpIHx8IGhhc093bihwcm90b2NvbHMsIG5hbWUpKSB7XG4gICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgd3JhcHBlcihuYW1lLCB3eFtuYW1lXSkpO1xuICAgIH1cbiAgfSk7XG59XG5cbnd4LmNyZWF0ZUFwcCA9IGNyZWF0ZUFwcDtcbnd4LmNyZWF0ZVBhZ2UgPSBjcmVhdGVQYWdlO1xud3guY3JlYXRlQ29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50O1xud3guY3JlYXRlU3VicGFja2FnZUFwcCA9IGNyZWF0ZVN1YnBhY2thZ2VBcHA7XG53eC5jcmVhdGVQbHVnaW4gPSBjcmVhdGVQbHVnaW47XG5cbnZhciB1bmkkMSA9IHVuaTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pJDE7XG5leHBvcnQgeyBjcmVhdGVBcHAsIGNyZWF0ZUNvbXBvbmVudCwgY3JlYXRlUGFnZSwgY3JlYXRlUGx1Z2luLCBjcmVhdGVTdWJwYWNrYWdlQXBwIH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKiFcbiAqIFZ1ZS5qcyB2Mi42LjExXG4gKiAoYykgMjAxNC0yMDIxIEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbi8qICAqL1xuXG52YXIgZW1wdHlPYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuLy8gVGhlc2UgaGVscGVycyBwcm9kdWNlIGJldHRlciBWTSBjb2RlIGluIEpTIGVuZ2luZXMgZHVlIHRvIHRoZWlyXG4vLyBleHBsaWNpdG5lc3MgYW5kIGZ1bmN0aW9uIGlubGluaW5nLlxuZnVuY3Rpb24gaXNVbmRlZiAodikge1xuICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNEZWYgKHYpIHtcbiAgcmV0dXJuIHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzVHJ1ZSAodikge1xuICByZXR1cm4gdiA9PT0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc0ZhbHNlICh2KSB7XG4gIHJldHVybiB2ID09PSBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIHByaW1pdGl2ZS5cbiAqL1xuZnVuY3Rpb24gaXNQcmltaXRpdmUgKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnIHx8XG4gICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgKVxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbnZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiB0b1Jhd1R5cGUgKHZhbHVlKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJ1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCAodikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsIGlzIGEgdmFsaWQgYXJyYXkgaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRBcnJheUluZGV4ICh2YWwpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KFN0cmluZyh2YWwpKTtcbiAgcmV0dXJuIG4gPj0gMCAmJiBNYXRoLmZsb29yKG4pID09PSBuICYmIGlzRmluaXRlKHZhbClcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIChcbiAgICBpc0RlZih2YWwpICYmXG4gICAgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHZhbC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuICApXG59XG5cbi8qKlxuICogQ29udmVydCBhIHZhbHVlIHRvIGEgc3RyaW5nIHRoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWwpIHx8IChpc1BsYWluT2JqZWN0KHZhbCkgJiYgdmFsLnRvU3RyaW5nID09PSBfdG9TdHJpbmcpXG4gICAgICA/IEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMilcbiAgICAgIDogU3RyaW5nKHZhbClcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGlucHV0IHZhbHVlIHRvIGEgbnVtYmVyIGZvciBwZXJzaXN0ZW5jZS5cbiAqIElmIHRoZSBjb252ZXJzaW9uIGZhaWxzLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nLlxuICovXG5mdW5jdGlvbiB0b051bWJlciAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuXG59XG5cbi8qKlxuICogTWFrZSBhIG1hcCBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGEga2V5XG4gKiBpcyBpbiB0aGF0IG1hcC5cbiAqL1xuZnVuY3Rpb24gbWFrZU1hcCAoXG4gIHN0cixcbiAgZXhwZWN0c0xvd2VyQ2FzZVxuKSB7XG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBleHBlY3RzTG93ZXJDYXNlXG4gICAgPyBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9XG4gICAgOiBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGFnIGlzIGEgYnVpbHQtaW4gdGFnLlxuICovXG52YXIgaXNCdWlsdEluVGFnID0gbWFrZU1hcCgnc2xvdCxjb21wb25lbnQnLCB0cnVlKTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4gKi9cbnZhciBpc1Jlc2VydmVkQXR0cmlidXRlID0gbWFrZU1hcCgna2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXMnKTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5LlxuICovXG5mdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH0pXG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cbiAqL1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJzsgfSlcbn0pO1xuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbnZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxufSk7XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG59KTtcblxuLyoqXG4gKiBTaW1wbGUgYmluZCBwb2x5ZmlsbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXQsXG4gKiBlLmcuLCBQaGFudG9tSlMgMS54LiBUZWNobmljYWxseSwgd2UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmVcbiAqIHNpbmNlIG5hdGl2ZSBiaW5kIGlzIG5vdyBwZXJmb3JtYW50IGVub3VnaCBpbiBtb3N0IGJyb3dzZXJzLlxuICogQnV0IHJlbW92aW5nIGl0IHdvdWxkIG1lYW4gYnJlYWtpbmcgY29kZSB0aGF0IHdhcyBhYmxlIHRvIHJ1biBpblxuICogUGhhbnRvbUpTIDEueCwgc28gdGhpcyBtdXN0IGJlIGtlcHQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHBvbHlmaWxsQmluZCAoZm4sIGN0eCkge1xuICBmdW5jdGlvbiBib3VuZEZuIChhKSB7XG4gICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG5cbiAgYm91bmRGbi5fbGVuZ3RoID0gZm4ubGVuZ3RoO1xuICByZXR1cm4gYm91bmRGblxufVxuXG5mdW5jdGlvbiBuYXRpdmVCaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmbi5iaW5kKGN0eClcbn1cblxudmFyIGJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICA/IG5hdGl2ZUJpbmRcbiAgOiBwb2x5ZmlsbEJpbmQ7XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCAodG8sIF9mcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBfZnJvbSkge1xuICAgIHRvW2tleV0gPSBfZnJvbVtrZXldO1xuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0IChhcnIpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0pIHtcbiAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBQZXJmb3JtIG5vIG9wZXJhdGlvbi5cbiAqIFN0dWJiaW5nIGFyZ3MgdG8gbWFrZSBGbG93IGhhcHB5IHdpdGhvdXQgbGVhdmluZyB1c2VsZXNzIHRyYW5zcGlsZWQgY29kZVxuICogd2l0aCAuLi5yZXN0IChodHRwczovL2Zsb3cub3JnL2Jsb2cvMjAxNy8wNS8wNy9TdHJpY3QtRnVuY3Rpb24tQ2FsbC1Bcml0eS8pLlxuICovXG5mdW5jdGlvbiBub29wIChhLCBiLCBjKSB7fVxuXG4vKipcbiAqIEFsd2F5cyByZXR1cm4gZmFsc2UuXG4gKi9cbnZhciBubyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7IHJldHVybiBmYWxzZTsgfTtcblxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFJldHVybiB0aGUgc2FtZSB2YWx1ZS5cbiAqL1xudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF87IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXG4gKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gKi9cbmZ1bmN0aW9uIGxvb3NlRXF1YWwgKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHsgcmV0dXJuIHRydWUgfVxuICB2YXIgaXNPYmplY3RBID0gaXNPYmplY3QoYSk7XG4gIHZhciBpc09iamVjdEIgPSBpc09iamVjdChiKTtcbiAgaWYgKGlzT2JqZWN0QSAmJiBpc09iamVjdEIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGlzQXJyYXlBID0gQXJyYXkuaXNBcnJheShhKTtcbiAgICAgIHZhciBpc0FycmF5QiA9IEFycmF5LmlzQXJyYXkoYik7XG4gICAgICBpZiAoaXNBcnJheUEgJiYgaXNBcnJheUIpIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoZSwgYltpXSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKVxuICAgICAgfSBlbHNlIGlmICghaXNBcnJheUEgJiYgIWlzQXJyYXlCKSB7XG4gICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuICAgICAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICAgICAgcmV0dXJuIGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoICYmIGtleXNBLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChhW2tleV0sIGJba2V5XSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWlzT2JqZWN0QSAmJiAhaXNPYmplY3RCKSB7XG4gICAgcmV0dXJuIFN0cmluZyhhKSA9PT0gU3RyaW5nKGIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgbG9vc2VseSBlcXVhbCB2YWx1ZSBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBhcnJheSAoaWYgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QsIHRoZSBhcnJheSBtdXN0XG4gKiBjb250YWluIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzaGFwZSksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICovXG5mdW5jdGlvbiBsb29zZUluZGV4T2YgKGFyciwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7IHJldHVybiBpIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuLyoqXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgQVNTRVRfVFlQRVMgPSBbXG4gICdjb21wb25lbnQnLFxuICAnZGlyZWN0aXZlJyxcbiAgJ2ZpbHRlcidcbl07XG5cbnZhciBMSUZFQ1lDTEVfSE9PS1MgPSBbXG4gICdiZWZvcmVDcmVhdGUnLFxuICAnY3JlYXRlZCcsXG4gICdiZWZvcmVNb3VudCcsXG4gICdtb3VudGVkJyxcbiAgJ2JlZm9yZVVwZGF0ZScsXG4gICd1cGRhdGVkJyxcbiAgJ2JlZm9yZURlc3Ryb3knLFxuICAnZGVzdHJveWVkJyxcbiAgJ2FjdGl2YXRlZCcsXG4gICdkZWFjdGl2YXRlZCcsXG4gICdlcnJvckNhcHR1cmVkJyxcbiAgJ3NlcnZlclByZWZldGNoJ1xuXTtcblxuLyogICovXG5cblxuXG52YXIgY29uZmlnID0gKHtcbiAgLyoqXG4gICAqIE9wdGlvbiBtZXJnZSBzdHJhdGVnaWVzICh1c2VkIGluIGNvcmUvdXRpbC9vcHRpb25zKVxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIG9wdGlvbk1lcmdlU3RyYXRlZ2llczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICovXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3cgcHJvZHVjdGlvbiBtb2RlIHRpcCBtZXNzYWdlIG9uIGJvb3Q/XG4gICAqL1xuICBwcm9kdWN0aW9uVGlwOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBkZXZ0b29sc1xuICAgKi9cbiAgZGV2dG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVjb3JkIHBlcmZcbiAgICovXG4gIHBlcmZvcm1hbmNlOiBmYWxzZSxcblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxlciBmb3Igd2F0Y2hlciBlcnJvcnNcbiAgICovXG4gIGVycm9ySGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogV2FybiBoYW5kbGVyIGZvciB3YXRjaGVyIHdhcm5zXG4gICAqL1xuICB3YXJuSGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogSWdub3JlIGNlcnRhaW4gY3VzdG9tIGVsZW1lbnRzXG4gICAqL1xuICBpZ25vcmVkRWxlbWVudHM6IFtdLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gdXNlciBrZXkgYWxpYXNlcyBmb3Igdi1vblxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGtleUNvZGVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSByZWdpc3RlcmVkIGFzIGFcbiAgICogY29tcG9uZW50LiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZFRhZzogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSB1c2VkIGFzIGEgY29tcG9uZW50XG4gICAqIHByb3AuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAqL1xuICBpc1Jlc2VydmVkQXR0cjogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIGFuIHVua25vd24gZWxlbWVudC5cbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgaXNVbmtub3duRWxlbWVudDogbm8sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXNwYWNlIG9mIGFuIGVsZW1lbnRcbiAgICovXG4gIGdldFRhZ05hbWVzcGFjZTogbm9vcCxcblxuICAvKipcbiAgICogUGFyc2UgdGhlIHJlYWwgdGFnIG5hbWUgZm9yIHRoZSBzcGVjaWZpYyBwbGF0Zm9ybS5cbiAgICovXG4gIHBhcnNlUGxhdGZvcm1UYWdOYW1lOiBpZGVudGl0eSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgbXVzdFVzZVByb3A6IG5vLFxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHVwZGF0ZXMgYXN5bmNocm9ub3VzbHkuIEludGVuZGVkIHRvIGJlIHVzZWQgYnkgVnVlIFRlc3QgVXRpbHNcbiAgICogVGhpcyB3aWxsIHNpZ25pZmljYW50bHkgcmVkdWNlIHBlcmZvcm1hbmNlIGlmIHNldCB0byBmYWxzZS5cbiAgICovXG4gIGFzeW5jOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VkIGZvciBsZWdhY3kgcmVhc29uc1xuICAgKi9cbiAgX2xpZmVjeWNsZUhvb2tzOiBMSUZFQ1lDTEVfSE9PS1Ncbn0pO1xuXG4vKiAgKi9cblxuLyoqXG4gKiB1bmljb2RlIGxldHRlcnMgdXNlZCBmb3IgcGFyc2luZyBodG1sIHRhZ3MsIGNvbXBvbmVudCBuYW1lcyBhbmQgcHJvcGVydHkgcGF0aHMuXG4gKiB1c2luZyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUzL3NlbWFudGljcy1zY3JpcHRpbmcuaHRtbCNwb3RlbnRpYWxjdXN0b21lbGVtZW50bmFtZVxuICogc2tpcHBpbmcgXFx1MTAwMDAtXFx1RUZGRkYgZHVlIHRvIGl0IGZyZWV6aW5nIHVwIFBoYW50b21KU1xuICovXG52YXIgdW5pY29kZVJlZ0V4cCA9IC9hLXpBLVpcXHUwMEI3XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjAzRi1cXHUyMDQwXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZELztcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqL1xuZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIHZhciBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGRlZiAob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2Ugc2ltcGxlIHBhdGguXG4gKi9cbnZhciBiYWlsUkUgPSBuZXcgUmVnRXhwKChcIlteXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCIuJF9cXFxcZF1cIikpO1xuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIGlmIChiYWlsUkUudGVzdChwYXRoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iaikgeyByZXR1cm4gfVxuICAgICAgb2JqID0gb2JqW3NlZ21lbnRzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG9ialxuICB9XG59XG5cbi8qICAqL1xuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbnZhciBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9O1xuXG4vLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaW5XZWV4ID0gdHlwZW9mIFdYRW52aXJvbm1lbnQgIT09ICd1bmRlZmluZWQnICYmICEhV1hFbnZpcm9ubWVudC5wbGF0Zm9ybTtcbnZhciB3ZWV4UGxhdGZvcm0gPSBpbldlZXggJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpO1xudmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgaXNJRSA9IFVBICYmIC9tc2llfHRyaWRlbnQvLnRlc3QoVUEpO1xudmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XG52YXIgaXNFZGdlID0gVUEgJiYgVUEuaW5kZXhPZignZWRnZS8nKSA+IDA7XG52YXIgaXNBbmRyb2lkID0gKFVBICYmIFVBLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDApIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdhbmRyb2lkJyk7XG52YXIgaXNJT1MgPSAoVUEgJiYgL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFVBKSkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2lvcycpO1xudmFyIGlzQ2hyb21lID0gVUEgJiYgL2Nocm9tZVxcL1xcZCsvLnRlc3QoVUEpICYmICFpc0VkZ2U7XG52YXIgaXNQaGFudG9tSlMgPSBVQSAmJiAvcGhhbnRvbWpzLy50ZXN0KFVBKTtcbnZhciBpc0ZGID0gVUEgJiYgVUEubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKTtcblxuLy8gRmlyZWZveCBoYXMgYSBcIndhdGNoXCIgZnVuY3Rpb24gb24gT2JqZWN0LnByb3RvdHlwZS4uLlxudmFyIG5hdGl2ZVdhdGNoID0gKHt9KS53YXRjaDtcbmlmIChpbkJyb3dzZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcHRzLCAncGFzc2l2ZScsICh7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICB9XG4gICAgfSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QtcGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG4vLyB0aGlzIG5lZWRzIHRvIGJlIGxhenktZXZhbGVkIGJlY2F1c2UgdnVlIG1heSBiZSByZXF1aXJlZCBiZWZvcmVcbi8vIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgY2FuIHNldCBWVUVfRU5WXG52YXIgX2lzU2VydmVyO1xudmFyIGlzU2VydmVyUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWluQnJvd3NlciAmJiAhaW5XZWV4ICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcbiAgICAgIC8vIFdlYnBhY2sgc2hpbW1pbmcgdGhlIHByb2Nlc3NcbiAgICAgIF9pc1NlcnZlciA9IGdsb2JhbFsncHJvY2VzcyddICYmIGdsb2JhbFsncHJvY2VzcyddLmVudi5WVUVfRU5WID09PSAnc2VydmVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgX2lzU2VydmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBfaXNTZXJ2ZXJcbn07XG5cbi8vIGRldGVjdCBkZXZ0b29sc1xudmFyIGRldnRvb2xzID0gaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gaXNOYXRpdmUgKEN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpXG59XG5cbnZhciBoYXNTeW1ib2wgPVxuICB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTeW1ib2wpICYmXG4gIHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShSZWZsZWN0Lm93bktleXMpO1xuXG52YXIgX1NldDtcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTZXQpKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0O1xufSBlbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0ICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChrZXkpIHtcbiAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNldDtcbiAgfSgpKTtcbn1cblxuLyogICovXG5cbnZhciB3YXJuID0gbm9vcDtcbnZhciB0aXAgPSBub29wO1xudmFyIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSAobm9vcCk7IC8vIHdvcmsgYXJvdW5kIGZsb3cgY2hlY2tcbnZhciBmb3JtYXRDb21wb25lbnROYW1lID0gKG5vb3ApO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG4gIHZhciBjbGFzc2lmeSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGNsYXNzaWZ5UkUsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pXG4gICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xuXG4gIHdhcm4gPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcblxuICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgIGNvbmZpZy53YXJuSGFuZGxlci5jYWxsKG51bGwsIG1zZywgdm0sIHRyYWNlKTtcbiAgICB9IGVsc2UgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKSk7XG4gICAgfVxuICB9O1xuXG4gIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFwiW1Z1ZSB0aXBdOiBcIiArIG1zZyArIChcbiAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXG4gICAgICApKTtcbiAgICB9XG4gIH07XG5cbiAgZm9ybWF0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICh2bSwgaW5jbHVkZUZpbGUpIHtcbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICBpZiAodm0uJG9wdGlvbnMgJiYgdm0uJG9wdGlvbnMuX19maWxlKSB7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICByZXR1cm4gKCcnKSArIHZtLiRvcHRpb25zLl9fZmlsZVxuICAgICAgfVxuICAgICAgcmV0dXJuICc8Um9vdD4nXG4gICAgfVxuICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHZtID09PSAnZnVuY3Rpb24nICYmIHZtLmNpZCAhPSBudWxsXG4gICAgICA/IHZtLm9wdGlvbnNcbiAgICAgIDogdm0uX2lzVnVlXG4gICAgICAgID8gdm0uJG9wdGlvbnMgfHwgdm0uY29uc3RydWN0b3Iub3B0aW9uc1xuICAgICAgICA6IHZtO1xuICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lIHx8IG9wdGlvbnMuX2NvbXBvbmVudFRhZztcbiAgICB2YXIgZmlsZSA9IG9wdGlvbnMuX19maWxlO1xuICAgIGlmICghbmFtZSAmJiBmaWxlKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBmaWxlLm1hdGNoKC8oW14vXFxcXF0rKVxcLnZ1ZSQvKTtcbiAgICAgIG5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKG5hbWUgPyAoXCI8XCIgKyAoY2xhc3NpZnkobmFtZSkpICsgXCI+XCIpIDogXCI8QW5vbnltb3VzPlwiKSArXG4gICAgICAoZmlsZSAmJiBpbmNsdWRlRmlsZSAhPT0gZmFsc2UgPyAoXCIgYXQgXCIgKyBmaWxlKSA6ICcnKVxuICAgIClcbiAgfTtcblxuICB2YXIgcmVwZWF0ID0gZnVuY3Rpb24gKHN0ciwgbikge1xuICAgIHZhciByZXMgPSAnJztcbiAgICB3aGlsZSAobikge1xuICAgICAgaWYgKG4gJSAyID09PSAxKSB7IHJlcyArPSBzdHI7IH1cbiAgICAgIGlmIChuID4gMSkgeyBzdHIgKz0gc3RyOyB9XG4gICAgICBuID4+PSAxO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH07XG5cbiAgZ2VuZXJhdGVDb21wb25lbnRUcmFjZSA9IGZ1bmN0aW9uICh2bSkge1xuICAgIGlmICh2bS5faXNWdWUgJiYgdm0uJHBhcmVudCkge1xuICAgICAgdmFyIHRyZWUgPSBbXTtcbiAgICAgIHZhciBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgd2hpbGUgKHZtICYmIHZtLiRvcHRpb25zLm5hbWUgIT09ICdQYWdlQm9keScpIHtcbiAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBsYXN0ID0gdHJlZVt0cmVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChsYXN0LmNvbnN0cnVjdG9yID09PSB2bS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xuICAgICAgICAgICAgdHJlZVt0cmVlLmxlbmd0aCAtIDFdID0gW2xhc3QsIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZV07XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAhdm0uJG9wdGlvbnMuaXNSZXNlcnZlZCAmJiB0cmVlLnB1c2godm0pO1xuICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1xcblxcbmZvdW5kIGluXFxuXFxuJyArIHRyZWVcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcbiAgICAgICAgICAgID8gKChmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSkgKyBcIi4uLiAoXCIgKyAodm1bMV0pICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiKVxuICAgICAgICAgICAgOiBmb3JtYXRDb21wb25lbnROYW1lKHZtKSkpOyB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlxcblxcbihmb3VuZCBpbiBcIiArIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIilcIilcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkID0gMDtcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbnZhciBEZXAgPSBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKys7XG4gIHRoaXMuc3VicyA9IFtdO1xufTtcblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiBhZGRTdWIgKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiByZW1vdmVTdWIgKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICBpZiAoRGVwLlNoYXJlZE9iamVjdC50YXJnZXQpIHtcbiAgICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldC5hZGREZXAodGhpcyk7XG4gIH1cbn07XG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5ICgpIHtcbiAgLy8gc3RhYmlsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgdmFyIHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmZpZy5hc3luYykge1xuICAgIC8vIHN1YnMgYXJlbid0IHNvcnRlZCBpbiBzY2hlZHVsZXIgaWYgbm90IHJ1bm5pbmcgYXN5bmNcbiAgICAvLyB3ZSBuZWVkIHRvIHNvcnQgdGhlbSBub3cgdG8gbWFrZSBzdXJlIHRoZXkgZmlyZSBpbiBjb3JyZWN0XG4gICAgLy8gb3JkZXJcbiAgICBzdWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKTtcbiAgfVxufTtcblxuLy8gVGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gVGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSBvbmx5IG9uZSB3YXRjaGVyXG4vLyBjYW4gYmUgZXZhbHVhdGVkIGF0IGEgdGltZS5cbi8vIGZpeGVkIGJ5IHh4eHh4eCAobnZ1ZSBzaGFyZWQgdnVleClcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5EZXAuU2hhcmVkT2JqZWN0ID0ge307XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IG51bGw7XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrID0gW107XG5cbmZ1bmN0aW9uIHB1c2hUYXJnZXQgKHRhcmdldCkge1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLnB1c2godGFyZ2V0KTtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQgPSB0YXJnZXQ7XG4gIERlcC50YXJnZXQgPSB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBvcFRhcmdldCAoKSB7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sucG9wKCk7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0ID0gRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFja1tEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLmxlbmd0aCAtIDFdO1xuICBEZXAudGFyZ2V0ID0gRGVwLlNoYXJlZE9iamVjdC50YXJnZXQ7XG59XG5cbi8qICAqL1xuXG52YXIgVk5vZGUgPSBmdW5jdGlvbiBWTm9kZSAoXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIHRleHQsXG4gIGVsbSxcbiAgY29udGV4dCxcbiAgY29tcG9uZW50T3B0aW9ucyxcbiAgYXN5bmNGYWN0b3J5XG4pIHtcbiAgdGhpcy50YWcgPSB0YWc7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgdGhpcy5lbG0gPSBlbG07XG4gIHRoaXMubnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuZm5Db250ZXh0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmZuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mblNjb3BlSWQgPSB1bmRlZmluZWQ7XG4gIHRoaXMua2V5ID0gZGF0YSAmJiBkYXRhLmtleTtcbiAgdGhpcy5jb21wb25lbnRPcHRpb25zID0gY29tcG9uZW50T3B0aW9ucztcbiAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gIHRoaXMucmF3ID0gZmFsc2U7XG4gIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgdGhpcy5pc1Jvb3RJbnNlcnQgPSB0cnVlO1xuICB0aGlzLmlzQ29tbWVudCA9IGZhbHNlO1xuICB0aGlzLmlzQ2xvbmVkID0gZmFsc2U7XG4gIHRoaXMuaXNPbmNlID0gZmFsc2U7XG4gIHRoaXMuYXN5bmNGYWN0b3J5ID0gYXN5bmNGYWN0b3J5O1xuICB0aGlzLmFzeW5jTWV0YSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXIgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGNoaWxkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbi8vIERFUFJFQ0FURUQ6IGFsaWFzIGZvciBjb21wb25lbnRJbnN0YW5jZSBmb3IgYmFja3dhcmRzIGNvbXBhdC5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5wcm90b3R5cGVBY2Nlc3NvcnMuY2hpbGQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZOb2RlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBjcmVhdGVFbXB0eVZOb2RlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgaWYgKCB0ZXh0ID09PSB2b2lkIDAgKSB0ZXh0ID0gJyc7XG5cbiAgdmFyIG5vZGUgPSBuZXcgVk5vZGUoKTtcbiAgbm9kZS50ZXh0ID0gdGV4dDtcbiAgbm9kZS5pc0NvbW1lbnQgPSB0cnVlO1xuICByZXR1cm4gbm9kZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBWTm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcodmFsKSlcbn1cblxuLy8gb3B0aW1pemVkIHNoYWxsb3cgY2xvbmVcbi8vIHVzZWQgZm9yIHN0YXRpYyBub2RlcyBhbmQgc2xvdCBub2RlcyBiZWNhdXNlIHRoZXkgbWF5IGJlIHJldXNlZCBhY3Jvc3Ncbi8vIG11bHRpcGxlIHJlbmRlcnMsIGNsb25pbmcgdGhlbSBhdm9pZHMgZXJyb3JzIHdoZW4gRE9NIG1hbmlwdWxhdGlvbnMgcmVseVxuLy8gb24gdGhlaXIgZWxtIHJlZmVyZW5jZS5cbmZ1bmN0aW9uIGNsb25lVk5vZGUgKHZub2RlKSB7XG4gIHZhciBjbG9uZWQgPSBuZXcgVk5vZGUoXG4gICAgdm5vZGUudGFnLFxuICAgIHZub2RlLmRhdGEsXG4gICAgLy8gIzc5NzVcbiAgICAvLyBjbG9uZSBjaGlsZHJlbiBhcnJheSB0byBhdm9pZCBtdXRhdGluZyBvcmlnaW5hbCBpbiBjYXNlIG9mIGNsb25pbmdcbiAgICAvLyBhIGNoaWxkLlxuICAgIHZub2RlLmNoaWxkcmVuICYmIHZub2RlLmNoaWxkcmVuLnNsaWNlKCksXG4gICAgdm5vZGUudGV4dCxcbiAgICB2bm9kZS5lbG0sXG4gICAgdm5vZGUuY29udGV4dCxcbiAgICB2bm9kZS5jb21wb25lbnRPcHRpb25zLFxuICAgIHZub2RlLmFzeW5jRmFjdG9yeVxuICApO1xuICBjbG9uZWQubnMgPSB2bm9kZS5ucztcbiAgY2xvbmVkLmlzU3RhdGljID0gdm5vZGUuaXNTdGF0aWM7XG4gIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XG4gIGNsb25lZC5pc0NvbW1lbnQgPSB2bm9kZS5pc0NvbW1lbnQ7XG4gIGNsb25lZC5mbkNvbnRleHQgPSB2bm9kZS5mbkNvbnRleHQ7XG4gIGNsb25lZC5mbk9wdGlvbnMgPSB2bm9kZS5mbk9wdGlvbnM7XG4gIGNsb25lZC5mblNjb3BlSWQgPSB2bm9kZS5mblNjb3BlSWQ7XG4gIGNsb25lZC5hc3luY01ldGEgPSB2bm9kZS5hc3luY01ldGE7XG4gIGNsb25lZC5pc0Nsb25lZCA9IHRydWU7XG4gIHJldHVybiBjbG9uZWRcbn1cblxuLypcbiAqIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aFxuICogZHluYW1pY2FsbHkgYWNjZXNzaW5nIG1ldGhvZHMgb24gQXJyYXkgcHJvdG90eXBlXG4gKi9cblxudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxudmFyIG1ldGhvZHNUb1BhdGNoID0gW1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF07XG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHZhciBvYiA9IHRoaXMuX19vYl9fO1xuICAgIHZhciBpbnNlcnRlZDtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIHsgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTsgfVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KTtcbn0pO1xuXG4vKiAgKi9cblxudmFyIGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcyk7XG5cbi8qKlxuICogSW4gc29tZSBjYXNlcyB3ZSBtYXkgd2FudCB0byBkaXNhYmxlIG9ic2VydmF0aW9uIGluc2lkZSBhIGNvbXBvbmVudCdzXG4gKiB1cGRhdGUgY29tcHV0YXRpb24uXG4gKi9cbnZhciBzaG91bGRPYnNlcnZlID0gdHJ1ZTtcblxuZnVuY3Rpb24gdG9nZ2xlT2JzZXJ2aW5nICh2YWx1ZSkge1xuICBzaG91bGRPYnNlcnZlID0gdmFsdWU7XG59XG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBpcyBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0aGUgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoIHVwZGF0ZXMuXG4gKi9cbnZhciBPYnNlcnZlciA9IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICB0aGlzLnZtQ291bnQgPSAwO1xuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgaWYgKGhhc1Byb3RvKSB7XG4gICAgICB7Ly8gZml4ZWQgYnkgeHh4eHh4IOW+ruS/oeWwj+eoi+W6j+S9v+eUqCBwbHVnaW5zIOS5i+WQju+8jOaVsOe7hOaWueazleiiq+ebtOaOpeaMgui9veWIsOS6huaVsOe7hOWvueixoeS4iu+8jOmcgOimgeaJp+ihjCBjb3B5QXVnbWVudCDpgLvovpFcbiAgICAgICAgaWYodmFsdWUucHVzaCAhPT0gdmFsdWUuX19wcm90b19fLnB1c2gpe1xuICAgICAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvdG9BdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpO1xuICB9XG59O1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gd2FsayAob2JqKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEob2JqLCBrZXlzW2ldKTtcbiAgfVxufTtcblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIG9ic2VydmVBcnJheSAoaXRlbXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKTtcbiAgfVxufTtcblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqL1xuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICovXG5mdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgYXNSb290RGF0YSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iO1xuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcbiAgfSBlbHNlIGlmIChcbiAgICBzaG91bGRPYnNlcnZlICYmXG4gICAgIWlzU2VydmVyUmVuZGVyaW5nKCkgJiZcbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKTtcbiAgfVxuICBpZiAoYXNSb290RGF0YSAmJiBvYikge1xuICAgIG9iLnZtQ291bnQrKztcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlJCQxIChcbiAgb2JqLFxuICBrZXksXG4gIHZhbCxcbiAgY3VzdG9tU2V0dGVyLFxuICBzaGFsbG93XG4pIHtcbiAgdmFyIGRlcCA9IG5ldyBEZXAoKTtcblxuICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICB2YXIgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICB2YXIgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuICBpZiAoKCFnZXR0ZXIgfHwgc2V0dGVyKSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgdmFsID0gb2JqW2tleV07XG4gIH1cblxuICB2YXIgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUodmFsKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgaWYgKERlcC5TaGFyZWRPYmplY3QudGFyZ2V0KSB7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICBkZXAuZGVwZW5kKCk7XG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKCk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBkZXBlbmRBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIgKG5ld1ZhbCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUgfHwgKG5ld1ZhbCAhPT0gbmV3VmFsICYmIHZhbHVlICE9PSB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY3VzdG9tU2V0dGVyKSB7XG4gICAgICAgIGN1c3RvbVNldHRlcigpO1xuICAgICAgfVxuICAgICAgLy8gIzc5ODE6IGZvciBhY2Nlc3NvciBwcm9wZXJ0aWVzIHdpdGhvdXQgc2V0dGVyXG4gICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHsgcmV0dXJuIH1cbiAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgfVxuICAgICAgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUobmV3VmFsKTtcbiAgICAgIGRlcC5ub3RpZnkoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqL1xuZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBzZXQgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5sZW5ndGggPSBNYXRoLm1heCh0YXJnZXQubGVuZ3RoLCBrZXkpO1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxLCB2YWwpO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBpZiAoa2V5IGluIHRhcmdldCAmJiAhKGtleSBpbiBPYmplY3QucHJvdG90eXBlKSkge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBhZGRpbmcgcmVhY3RpdmUgcHJvcGVydGllcyB0byBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICdhdCBydW50aW1lIC0gZGVjbGFyZSBpdCB1cGZyb250IGluIHRoZSBkYXRhIG9wdGlvbi4nXG4gICAgKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKCFvYikge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBkZWZpbmVSZWFjdGl2ZSQkMShvYi52YWx1ZSwga2V5LCB2YWwpO1xuICBvYi5kZXAubm90aWZ5KCk7XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICovXG5mdW5jdGlvbiBkZWwgKHRhcmdldCwga2V5KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBkZWxldGUgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxKTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBkZWxldGluZyBwcm9wZXJ0aWVzIG9uIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgJy0ganVzdCBzZXQgaXQgdG8gbnVsbC4nXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBkZWxldGUgdGFyZ2V0W2tleV07XG4gIGlmICghb2IpIHtcbiAgICByZXR1cm5cbiAgfVxuICBvYi5kZXAubm90aWZ5KCk7XG59XG5cbi8qKlxuICogQ29sbGVjdCBkZXBlbmRlbmNpZXMgb24gYXJyYXkgZWxlbWVudHMgd2hlbiB0aGUgYXJyYXkgaXMgdG91Y2hlZCwgc2luY2VcbiAqIHdlIGNhbm5vdCBpbnRlcmNlcHQgYXJyYXkgZWxlbWVudCBhY2Nlc3MgbGlrZSBwcm9wZXJ0eSBnZXR0ZXJzLlxuICovXG5mdW5jdGlvbiBkZXBlbmRBcnJheSAodmFsdWUpIHtcbiAgZm9yICh2YXIgZSA9ICh2b2lkIDApLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGUgPSB2YWx1ZVtpXTtcbiAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZGVwZW5kQXJyYXkoZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIE9wdGlvbiBvdmVyd3JpdGluZyBzdHJhdGVnaWVzIGFyZSBmdW5jdGlvbnMgdGhhdCBoYW5kbGVcbiAqIGhvdyB0byBtZXJnZSBhIHBhcmVudCBvcHRpb24gdmFsdWUgYW5kIGEgY2hpbGQgb3B0aW9uXG4gKiB2YWx1ZSBpbnRvIHRoZSBmaW5hbCB2YWx1ZS5cbiAqL1xudmFyIHN0cmF0cyA9IGNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG5cbi8qKlxuICogT3B0aW9ucyB3aXRoIHJlc3RyaWN0aW9uc1xuICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzdHJhdHMuZWwgPSBzdHJhdHMucHJvcHNEYXRhID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQsIHZtLCBrZXkpIHtcbiAgICBpZiAoIXZtKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIm9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgaW5zdGFuY2UgXCIgK1xuICAgICAgICAnY3JlYXRpb24gd2l0aCB0aGUgYG5ld2Aga2V5d29yZC4nXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFN0cmF0KHBhcmVudCwgY2hpbGQpXG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIHRoYXQgcmVjdXJzaXZlbHkgbWVyZ2VzIHR3byBkYXRhIG9iamVjdHMgdG9nZXRoZXIuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YSAodG8sIGZyb20pIHtcbiAgaWYgKCFmcm9tKSB7IHJldHVybiB0byB9XG4gIHZhciBrZXksIHRvVmFsLCBmcm9tVmFsO1xuXG4gIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgPyBSZWZsZWN0Lm93bktleXMoZnJvbSlcbiAgICA6IE9iamVjdC5rZXlzKGZyb20pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgLy8gaW4gY2FzZSB0aGUgb2JqZWN0IGlzIGFscmVhZHkgb2JzZXJ2ZWQuLi5cbiAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgdG9WYWwgPSB0b1trZXldO1xuICAgIGZyb21WYWwgPSBmcm9tW2tleV07XG4gICAgaWYgKCFoYXNPd24odG8sIGtleSkpIHtcbiAgICAgIHNldCh0bywga2V5LCBmcm9tVmFsKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdG9WYWwgIT09IGZyb21WYWwgJiZcbiAgICAgIGlzUGxhaW5PYmplY3QodG9WYWwpICYmXG4gICAgICBpc1BsYWluT2JqZWN0KGZyb21WYWwpXG4gICAgKSB7XG4gICAgICBtZXJnZURhdGEodG9WYWwsIGZyb21WYWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBEYXRhXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YU9yRm4gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICAvLyBpbiBhIFZ1ZS5leHRlbmQgbWVyZ2UsIGJvdGggc2hvdWxkIGJlIGZ1bmN0aW9uc1xuICAgIGlmICghY2hpbGRWYWwpIHtcbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHtcbiAgICAgIHJldHVybiBjaGlsZFZhbFxuICAgIH1cbiAgICAvLyB3aGVuIHBhcmVudFZhbCAmIGNoaWxkVmFsIGFyZSBib3RoIHByZXNlbnQsXG4gICAgLy8gd2UgbmVlZCB0byByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gICAgLy8gbWVyZ2VkIHJlc3VsdCBvZiBib3RoIGZ1bmN0aW9ucy4uLiBubyBuZWVkIHRvXG4gICAgLy8gY2hlY2sgaWYgcGFyZW50VmFsIGlzIGEgZnVuY3Rpb24gaGVyZSBiZWNhdXNlXG4gICAgLy8gaXQgaGFzIHRvIGJlIGEgZnVuY3Rpb24gdG8gcGFzcyBwcmV2aW91cyBtZXJnZXMuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbiAoKSB7XG4gICAgICByZXR1cm4gbWVyZ2VEYXRhKFxuICAgICAgICB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbicgPyBjaGlsZFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogY2hpbGRWYWwsXG4gICAgICAgIHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbicgPyBwYXJlbnRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IHBhcmVudFZhbFxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkSW5zdGFuY2VEYXRhRm4gKCkge1xuICAgICAgLy8gaW5zdGFuY2UgbWVyZ2VcbiAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBjaGlsZFZhbC5jYWxsKHZtLCB2bSlcbiAgICAgICAgOiBjaGlsZFZhbDtcbiAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwYXJlbnRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogcGFyZW50VmFsO1xuICAgICAgaWYgKGluc3RhbmNlRGF0YSkge1xuICAgICAgICByZXR1cm4gbWVyZ2VEYXRhKGluc3RhbmNlRGF0YSwgZGVmYXVsdERhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtXG4pIHtcbiAgaWYgKCF2bSkge1xuICAgIGlmIChjaGlsZFZhbCAmJiB0eXBlb2YgY2hpbGRWYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ1RoZSBcImRhdGFcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArXG4gICAgICAgICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgK1xuICAgICAgICAnZGVmaW5pdGlvbnMuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbClcbiAgfVxuXG4gIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtKVxufTtcblxuLyoqXG4gKiBIb29rcyBhbmQgcHJvcHMgYXJlIG1lcmdlZCBhcyBhcnJheXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlSG9vayAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWxcbikge1xuICB2YXIgcmVzID0gY2hpbGRWYWxcbiAgICA/IHBhcmVudFZhbFxuICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgIDogW2NoaWxkVmFsXVxuICAgIDogcGFyZW50VmFsO1xuICByZXR1cm4gcmVzXG4gICAgPyBkZWR1cGVIb29rcyhyZXMpXG4gICAgOiByZXNcbn1cblxuZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZXMuaW5kZXhPZihob29rc1tpXSkgPT09IC0xKSB7XG4gICAgICByZXMucHVzaChob29rc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuTElGRUNZQ0xFX0hPT0tTLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgc3RyYXRzW2hvb2tdID0gbWVyZ2VIb29rO1xufSk7XG5cbi8qKlxuICogQXNzZXRzXG4gKlxuICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICogb3B0aW9ucyBhbmQgcGFyZW50IG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQXNzZXRzIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKTtcbiAgaWYgKGNoaWxkVmFsKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgICByZXR1cm4gZXh0ZW5kKHJlcywgY2hpbGRWYWwpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG5cbkFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgc3RyYXRzW3R5cGUgKyAncyddID0gbWVyZ2VBc3NldHM7XG59KTtcblxuLyoqXG4gKiBXYXRjaGVycy5cbiAqXG4gKiBXYXRjaGVycyBoYXNoZXMgc2hvdWxkIG5vdCBvdmVyd3JpdGUgb25lXG4gKiBhbm90aGVyLCBzbyB3ZSBtZXJnZSB0aGVtIGFzIGFycmF5cy5cbiAqL1xuc3RyYXRzLndhdGNoID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgLy8gd29yayBhcm91bmQgRmlyZWZveCdzIE9iamVjdC5wcm90b3R5cGUud2F0Y2guLi5cbiAgaWYgKHBhcmVudFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgcGFyZW50VmFsID0gdW5kZWZpbmVkOyB9XG4gIGlmIChjaGlsZFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgY2hpbGRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghY2hpbGRWYWwpIHsgcmV0dXJuIE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0ge307XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGZvciAodmFyIGtleSQxIGluIGNoaWxkVmFsKSB7XG4gICAgdmFyIHBhcmVudCA9IHJldFtrZXkkMV07XG4gICAgdmFyIGNoaWxkID0gY2hpbGRWYWxba2V5JDFdO1xuICAgIGlmIChwYXJlbnQgJiYgIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gW3BhcmVudF07XG4gICAgfVxuICAgIHJldFtrZXkkMV0gPSBwYXJlbnRcbiAgICAgID8gcGFyZW50LmNvbmNhdChjaGlsZClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZCkgPyBjaGlsZCA6IFtjaGlsZF07XG4gIH1cbiAgcmV0dXJuIHJldFxufTtcblxuLyoqXG4gKiBPdGhlciBvYmplY3QgaGFzaGVzLlxuICovXG5zdHJhdHMucHJvcHMgPVxuc3RyYXRzLm1ldGhvZHMgPVxuc3RyYXRzLmluamVjdCA9XG5zdHJhdHMuY29tcHV0ZWQgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICBpZiAoY2hpbGRWYWwgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICB9XG4gIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBpZiAoY2hpbGRWYWwpIHsgZXh0ZW5kKHJldCwgY2hpbGRWYWwpOyB9XG4gIHJldHVybiByZXRcbn07XG5zdHJhdHMucHJvdmlkZSA9IG1lcmdlRGF0YU9yRm47XG5cbi8qKlxuICogRGVmYXVsdCBzdHJhdGVneS5cbiAqL1xudmFyIGRlZmF1bHRTdHJhdCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkXG4gICAgPyBwYXJlbnRWYWxcbiAgICA6IGNoaWxkVmFsXG59O1xuXG4vKipcbiAqIFZhbGlkYXRlIGNvbXBvbmVudCBuYW1lc1xuICovXG5mdW5jdGlvbiBjaGVja0NvbXBvbmVudHMgKG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29tcG9uZW50TmFtZSAobmFtZSkge1xuICBpZiAoIW5ldyBSZWdFeHAoKFwiXlthLXpBLVpdW1xcXFwtXFxcXC4wLTlfXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCJdKiRcIikpLnRlc3QobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgY29tcG9uZW50IG5hbWU6IFwiJyArIG5hbWUgKyAnXCIuIENvbXBvbmVudCBuYW1lcyAnICtcbiAgICAgICdzaG91bGQgY29uZm9ybSB0byB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lIGluIGh0bWw1IHNwZWNpZmljYXRpb24uJ1xuICAgICk7XG4gIH1cbiAgaWYgKGlzQnVpbHRJblRhZyhuYW1lKSB8fCBjb25maWcuaXNSZXNlcnZlZFRhZyhuYW1lKSkge1xuICAgIHdhcm4oXG4gICAgICAnRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICtcbiAgICAgICdpZDogJyArIG5hbWVcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogRW5zdXJlIGFsbCBwcm9wcyBvcHRpb24gc3ludGF4IGFyZSBub3JtYWxpemVkIGludG8gdGhlXG4gKiBPYmplY3QtYmFzZWQgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wcyAob3B0aW9ucywgdm0pIHtcbiAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wcztcbiAgaWYgKCFwcm9wcykgeyByZXR1cm4gfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBpLCB2YWwsIG5hbWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFsID0gcHJvcHNbaV07XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmFtZSA9IGNhbWVsaXplKHZhbCk7XG4gICAgICAgIHJlc1tuYW1lXSA9IHsgdHlwZTogbnVsbCB9O1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oJ3Byb3BzIG11c3QgYmUgc3RyaW5ncyB3aGVuIHVzaW5nIGFycmF5IHN5bnRheC4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIHZhbCA9IHByb3BzW2tleV07XG4gICAgICBuYW1lID0gY2FtZWxpemUoa2V5KTtcbiAgICAgIHJlc1tuYW1lXSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICA/IHZhbFxuICAgICAgICA6IHsgdHlwZTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcInByb3BzXFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHByb3BzKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICBvcHRpb25zLnByb3BzID0gcmVzO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhbGwgaW5qZWN0aW9ucyBpbnRvIE9iamVjdC1iYXNlZCBmb3JtYXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplSW5qZWN0IChvcHRpb25zLCB2bSkge1xuICB2YXIgaW5qZWN0ID0gb3B0aW9ucy5pbmplY3Q7XG4gIGlmICghaW5qZWN0KSB7IHJldHVybiB9XG4gIHZhciBub3JtYWxpemVkID0gb3B0aW9ucy5pbmplY3QgPSB7fTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5qZWN0KSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBub3JtYWxpemVkW2luamVjdFtpXV0gPSB7IGZyb206IGluamVjdFtpXSB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gaW5qZWN0KSB7XG4gICAgICB2YXIgdmFsID0gaW5qZWN0W2tleV07XG4gICAgICBub3JtYWxpemVkW2tleV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyBleHRlbmQoeyBmcm9tOiBrZXkgfSwgdmFsKVxuICAgICAgICA6IHsgZnJvbTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImluamVjdFxcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShpbmplY3QpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTm9ybWFsaXplIHJhdyBmdW5jdGlvbiBkaXJlY3RpdmVzIGludG8gb2JqZWN0IGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyAob3B0aW9ucykge1xuICB2YXIgZGlycyA9IG9wdGlvbnMuZGlyZWN0aXZlcztcbiAgaWYgKGRpcnMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGlycykge1xuICAgICAgdmFyIGRlZiQkMSA9IGRpcnNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZGVmJCQxID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpcnNba2V5XSA9IHsgYmluZDogZGVmJCQxLCB1cGRhdGU6IGRlZiQkMSB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRPYmplY3RUeXBlIChuYW1lLCB2YWx1ZSwgdm0pIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiOiBleHBlY3RlZCBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUodmFsdWUpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgdHdvIG9wdGlvbiBvYmplY3RzIGludG8gYSBuZXcgb25lLlxuICogQ29yZSB1dGlsaXR5IHVzZWQgaW4gYm90aCBpbnN0YW50aWF0aW9uIGFuZCBpbmhlcml0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VPcHRpb25zIChcbiAgcGFyZW50LFxuICBjaGlsZCxcbiAgdm1cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrQ29tcG9uZW50cyhjaGlsZCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2hpbGQgPSBjaGlsZC5vcHRpb25zO1xuICB9XG5cbiAgbm9ybWFsaXplUHJvcHMoY2hpbGQsIHZtKTtcbiAgbm9ybWFsaXplSW5qZWN0KGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZURpcmVjdGl2ZXMoY2hpbGQpO1xuXG4gIC8vIEFwcGx5IGV4dGVuZHMgYW5kIG1peGlucyBvbiB0aGUgY2hpbGQgb3B0aW9ucyxcbiAgLy8gYnV0IG9ubHkgaWYgaXQgaXMgYSByYXcgb3B0aW9ucyBvYmplY3QgdGhhdCBpc24ndFxuICAvLyB0aGUgcmVzdWx0IG9mIGFub3RoZXIgbWVyZ2VPcHRpb25zIGNhbGwuXG4gIC8vIE9ubHkgbWVyZ2VkIG9wdGlvbnMgaGFzIHRoZSBfYmFzZSBwcm9wZXJ0eS5cbiAgaWYgKCFjaGlsZC5fYmFzZSkge1xuICAgIGlmIChjaGlsZC5leHRlbmRzKSB7XG4gICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5leHRlbmRzLCB2bSk7XG4gICAgfVxuICAgIGlmIChjaGlsZC5taXhpbnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGQubWl4aW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5taXhpbnNbaV0sIHZtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBwYXJlbnQpIHtcbiAgICBtZXJnZUZpZWxkKGtleSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gY2hpbGQpIHtcbiAgICBpZiAoIWhhc093bihwYXJlbnQsIGtleSkpIHtcbiAgICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2VGaWVsZCAoa2V5KSB7XG4gICAgdmFyIHN0cmF0ID0gc3RyYXRzW2tleV0gfHwgZGVmYXVsdFN0cmF0O1xuICAgIG9wdGlvbnNba2V5XSA9IHN0cmF0KHBhcmVudFtrZXldLCBjaGlsZFtrZXldLCB2bSwga2V5KTtcbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG4vKipcbiAqIFJlc29sdmUgYW4gYXNzZXQuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYmVjYXVzZSBjaGlsZCBpbnN0YW5jZXMgbmVlZCBhY2Nlc3NcbiAqIHRvIGFzc2V0cyBkZWZpbmVkIGluIGl0cyBhbmNlc3RvciBjaGFpbi5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUFzc2V0IChcbiAgb3B0aW9ucyxcbiAgdHlwZSxcbiAgaWQsXG4gIHdhcm5NaXNzaW5nXG4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGFzc2V0cyA9IG9wdGlvbnNbdHlwZV07XG4gIC8vIGNoZWNrIGxvY2FsIHJlZ2lzdHJhdGlvbiB2YXJpYXRpb25zIGZpcnN0XG4gIGlmIChoYXNPd24oYXNzZXRzLCBpZCkpIHsgcmV0dXJuIGFzc2V0c1tpZF0gfVxuICB2YXIgY2FtZWxpemVkSWQgPSBjYW1lbGl6ZShpZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBjYW1lbGl6ZWRJZCkpIHsgcmV0dXJuIGFzc2V0c1tjYW1lbGl6ZWRJZF0gfVxuICB2YXIgUGFzY2FsQ2FzZUlkID0gY2FwaXRhbGl6ZShjYW1lbGl6ZWRJZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBQYXNjYWxDYXNlSWQpKSB7IHJldHVybiBhc3NldHNbUGFzY2FsQ2FzZUlkXSB9XG4gIC8vIGZhbGxiYWNrIHRvIHByb3RvdHlwZSBjaGFpblxuICB2YXIgcmVzID0gYXNzZXRzW2lkXSB8fCBhc3NldHNbY2FtZWxpemVkSWRdIHx8IGFzc2V0c1tQYXNjYWxDYXNlSWRdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuTWlzc2luZyAmJiAhcmVzKSB7XG4gICAgd2FybihcbiAgICAgICdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgdHlwZS5zbGljZSgwLCAtMSkgKyAnOiAnICsgaWQsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wIChcbiAga2V5LFxuICBwcm9wT3B0aW9ucyxcbiAgcHJvcHNEYXRhLFxuICB2bVxuKSB7XG4gIHZhciBwcm9wID0gcHJvcE9wdGlvbnNba2V5XTtcbiAgdmFyIGFic2VudCA9ICFoYXNPd24ocHJvcHNEYXRhLCBrZXkpO1xuICB2YXIgdmFsdWUgPSBwcm9wc0RhdGFba2V5XTtcbiAgLy8gYm9vbGVhbiBjYXN0aW5nXG4gIHZhciBib29sZWFuSW5kZXggPSBnZXRUeXBlSW5kZXgoQm9vbGVhbiwgcHJvcC50eXBlKTtcbiAgaWYgKGJvb2xlYW5JbmRleCA+IC0xKSB7XG4gICAgaWYgKGFic2VudCAmJiAhaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IGh5cGhlbmF0ZShrZXkpKSB7XG4gICAgICAvLyBvbmx5IGNhc3QgZW1wdHkgc3RyaW5nIC8gc2FtZSBuYW1lIHRvIGJvb2xlYW4gaWZcbiAgICAgIC8vIGJvb2xlYW4gaGFzIGhpZ2hlciBwcmlvcml0eVxuICAgICAgdmFyIHN0cmluZ0luZGV4ID0gZ2V0VHlwZUluZGV4KFN0cmluZywgcHJvcC50eXBlKTtcbiAgICAgIGlmIChzdHJpbmdJbmRleCA8IDAgfHwgYm9vbGVhbkluZGV4IDwgc3RyaW5nSW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjaGVjayBkZWZhdWx0IHZhbHVlXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsdWUgPSBnZXRQcm9wRGVmYXVsdFZhbHVlKHZtLCBwcm9wLCBrZXkpO1xuICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGEgZnJlc2ggY29weSxcbiAgICAvLyBtYWtlIHN1cmUgdG8gb2JzZXJ2ZSBpdC5cbiAgICB2YXIgcHJldlNob3VsZE9ic2VydmUgPSBzaG91bGRPYnNlcnZlO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICBvYnNlcnZlKHZhbHVlKTtcbiAgICB0b2dnbGVPYnNlcnZpbmcocHJldlNob3VsZE9ic2VydmUpO1xuICB9XG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgLy8gc2tpcCB2YWxpZGF0aW9uIGZvciB3ZWV4IHJlY3ljbGUtbGlzdCBjaGlsZCBjb21wb25lbnQgcHJvcHNcbiAgICAhKGZhbHNlKVxuICApIHtcbiAgICBhc3NlcnRQcm9wKHByb3AsIGtleSwgdmFsdWUsIHZtLCBhYnNlbnQpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhIHByb3AuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BEZWZhdWx0VmFsdWUgKHZtLCBwcm9wLCBrZXkpIHtcbiAgLy8gbm8gZGVmYXVsdCwgcmV0dXJuIHVuZGVmaW5lZFxuICBpZiAoIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHZhciBkZWYgPSBwcm9wLmRlZmF1bHQ7XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tZmFjdG9yeSBkZWZhdWx0cyBmb3IgT2JqZWN0ICYgQXJyYXlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNPYmplY3QoZGVmKSkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBkZWZhdWx0IHZhbHVlIGZvciBwcm9wIFwiJyArIGtleSArICdcIjogJyArXG4gICAgICAnUHJvcHMgd2l0aCB0eXBlIE9iamVjdC9BcnJheSBtdXN0IHVzZSBhIGZhY3RvcnkgZnVuY3Rpb24gJyArXG4gICAgICAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlLicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gdGhlIHJhdyBwcm9wIHZhbHVlIHdhcyBhbHNvIHVuZGVmaW5lZCBmcm9tIHByZXZpb3VzIHJlbmRlcixcbiAgLy8gcmV0dXJuIHByZXZpb3VzIGRlZmF1bHQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd2F0Y2hlciB0cmlnZ2VyXG4gIGlmICh2bSAmJiB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgJiZcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGFba2V5XSA9PT0gdW5kZWZpbmVkICYmXG4gICAgdm0uX3Byb3BzW2tleV0gIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXR1cm4gdm0uX3Byb3BzW2tleV1cbiAgfVxuICAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xuICAvLyBhIHZhbHVlIGlzIEZ1bmN0aW9uIGlmIGl0cyBwcm90b3R5cGUgaXMgZnVuY3Rpb24gZXZlbiBhY3Jvc3MgZGlmZmVyZW50IGV4ZWN1dGlvbiBjb250ZXh0XG4gIHJldHVybiB0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIGdldFR5cGUocHJvcC50eXBlKSAhPT0gJ0Z1bmN0aW9uJ1xuICAgID8gZGVmLmNhbGwodm0pXG4gICAgOiBkZWZcbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBhIHByb3AgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByb3AgKFxuICBwcm9wLFxuICBuYW1lLFxuICB2YWx1ZSxcbiAgdm0sXG4gIGFic2VudFxuKSB7XG4gIGlmIChwcm9wLnJlcXVpcmVkICYmIGFic2VudCkge1xuICAgIHdhcm4oXG4gICAgICAnTWlzc2luZyByZXF1aXJlZCBwcm9wOiBcIicgKyBuYW1lICsgJ1wiJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhcHJvcC5yZXF1aXJlZCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciB0eXBlID0gcHJvcC50eXBlO1xuICB2YXIgdmFsaWQgPSAhdHlwZSB8fCB0eXBlID09PSB0cnVlO1xuICB2YXIgZXhwZWN0ZWRUeXBlcyA9IFtdO1xuICBpZiAodHlwZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZSA9IFt0eXBlXTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aCAmJiAhdmFsaWQ7IGkrKykge1xuICAgICAgdmFyIGFzc2VydGVkVHlwZSA9IGFzc2VydFR5cGUodmFsdWUsIHR5cGVbaV0pO1xuICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGFzc2VydGVkVHlwZS5leHBlY3RlZFR5cGUgfHwgJycpO1xuICAgICAgdmFsaWQgPSBhc3NlcnRlZFR5cGUudmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF2YWxpZCkge1xuICAgIHdhcm4oXG4gICAgICBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciB2YWxpZGF0b3IgPSBwcm9wLnZhbGlkYXRvcjtcbiAgaWYgKHZhbGlkYXRvcikge1xuICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHNpbXBsZUNoZWNrUkUgPSAvXihTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258U3ltYm9sKSQvO1xuXG5mdW5jdGlvbiBhc3NlcnRUeXBlICh2YWx1ZSwgdHlwZSkge1xuICB2YXIgdmFsaWQ7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBnZXRUeXBlKHR5cGUpO1xuICBpZiAoc2ltcGxlQ2hlY2tSRS50ZXN0KGV4cGVjdGVkVHlwZSkpIHtcbiAgICB2YXIgdCA9IHR5cGVvZiB2YWx1ZTtcbiAgICB2YWxpZCA9IHQgPT09IGV4cGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGZvciBwcmltaXRpdmUgd3JhcHBlciBvYmplY3RzXG4gICAgaWYgKCF2YWxpZCAmJiB0ID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ09iamVjdCcpIHtcbiAgICB2YWxpZCA9IGlzUGxhaW5PYmplY3QodmFsdWUpO1xuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ0FycmF5Jykge1xuICAgIHZhbGlkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2YWxpZDogdmFsaWQsXG4gICAgZXhwZWN0ZWRUeXBlOiBleHBlY3RlZFR5cGVcbiAgfVxufVxuXG4vKipcbiAqIFVzZSBmdW5jdGlvbiBzdHJpbmcgbmFtZSB0byBjaGVjayBidWlsdC1pbiB0eXBlcyxcbiAqIGJlY2F1c2UgYSBzaW1wbGUgZXF1YWxpdHkgY2hlY2sgd2lsbCBmYWlsIHdoZW4gcnVubmluZ1xuICogYWNyb3NzIGRpZmZlcmVudCB2bXMgLyBpZnJhbWVzLlxuICovXG5mdW5jdGlvbiBnZXRUeXBlIChmbikge1xuICB2YXIgbWF0Y2ggPSBmbiAmJiBmbi50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVR5cGUgKGEsIGIpIHtcbiAgcmV0dXJuIGdldFR5cGUoYSkgPT09IGdldFR5cGUoYilcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUluZGV4ICh0eXBlLCBleHBlY3RlZFR5cGVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFR5cGVzKSkge1xuICAgIHJldHVybiBpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXMsIHR5cGUpID8gMCA6IC0xXG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkVHlwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzW2ldLCB0eXBlKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbmZ1bmN0aW9uIGdldEludmFsaWRUeXBlTWVzc2FnZSAobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgdmFyIG1lc3NhZ2UgPSBcIkludmFsaWQgcHJvcDogdHlwZSBjaGVjayBmYWlsZWQgZm9yIHByb3AgXFxcIlwiICsgbmFtZSArIFwiXFxcIi5cIiArXG4gICAgXCIgRXhwZWN0ZWQgXCIgKyAoZXhwZWN0ZWRUeXBlcy5tYXAoY2FwaXRhbGl6ZSkuam9pbignLCAnKSk7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGVzWzBdO1xuICB2YXIgcmVjZWl2ZWRUeXBlID0gdG9SYXdUeXBlKHZhbHVlKTtcbiAgdmFyIGV4cGVjdGVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCBleHBlY3RlZFR5cGUpO1xuICB2YXIgcmVjZWl2ZWRWYWx1ZSA9IHN0eWxlVmFsdWUodmFsdWUsIHJlY2VpdmVkVHlwZSk7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSBleHBlY3RlZCB2YWx1ZVxuICBpZiAoZXhwZWN0ZWRUeXBlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgIGlzRXhwbGljYWJsZShleHBlY3RlZFR5cGUpICYmXG4gICAgICAhaXNCb29sZWFuKGV4cGVjdGVkVHlwZSwgcmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSBcIiArIGV4cGVjdGVkVmFsdWU7XG4gIH1cbiAgbWVzc2FnZSArPSBcIiwgZ290IFwiICsgcmVjZWl2ZWRUeXBlICsgXCIgXCI7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSByZWNlaXZlZCB2YWx1ZVxuICBpZiAoaXNFeHBsaWNhYmxlKHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwid2l0aCB2YWx1ZSBcIiArIHJlY2VpdmVkVmFsdWUgKyBcIi5cIjtcbiAgfVxuICByZXR1cm4gbWVzc2FnZVxufVxuXG5mdW5jdGlvbiBzdHlsZVZhbHVlICh2YWx1ZSwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gJ1N0cmluZycpIHtcbiAgICByZXR1cm4gKFwiXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIilcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnTnVtYmVyJykge1xuICAgIHJldHVybiAoXCJcIiArIChOdW1iZXIodmFsdWUpKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFwiXCIgKyB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0V4cGxpY2FibGUgKHZhbHVlKSB7XG4gIHZhciBleHBsaWNpdFR5cGVzID0gWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXTtcbiAgcmV0dXJuIGV4cGxpY2l0VHlwZXMuc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZWxlbTsgfSlcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuICgpIHtcbiAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICByZXR1cm4gYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnRvTG93ZXJDYXNlKCkgPT09ICdib29sZWFuJzsgfSlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIC8vIERlYWN0aXZhdGUgZGVwcyB0cmFja2luZyB3aGlsZSBwcm9jZXNzaW5nIGVycm9yIGhhbmRsZXIgdG8gYXZvaWQgcG9zc2libGUgaW5maW5pdGUgcmVuZGVyaW5nLlxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWV4L2lzc3Vlcy8xNTA1XG4gIHB1c2hUYXJnZXQoKTtcbiAgdHJ5IHtcbiAgICBpZiAodm0pIHtcbiAgICAgIHZhciBjdXIgPSB2bTtcbiAgICAgIHdoaWxlICgoY3VyID0gY3VyLiRwYXJlbnQpKSB7XG4gICAgICAgIHZhciBob29rcyA9IGN1ci4kb3B0aW9ucy5lcnJvckNhcHR1cmVkO1xuICAgICAgICBpZiAoaG9va3MpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgY2FwdHVyZSA9IGhvb2tzW2ldLmNhbGwoY3VyLCBlcnIsIHZtLCBpbmZvKSA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChjYXB0dXJlKSB7IHJldHVybiB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGdsb2JhbEhhbmRsZUVycm9yKGUsIGN1ciwgJ2Vycm9yQ2FwdHVyZWQgaG9vaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnbG9iYWxIYW5kbGVFcnJvcihlcnIsIHZtLCBpbmZvKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyAoXG4gIGhhbmRsZXIsXG4gIGNvbnRleHQsXG4gIGFyZ3MsXG4gIHZtLFxuICBpbmZvXG4pIHtcbiAgdmFyIHJlcztcbiAgdHJ5IHtcbiAgICByZXMgPSBhcmdzID8gaGFuZGxlci5hcHBseShjb250ZXh0LCBhcmdzKSA6IGhhbmRsZXIuY2FsbChjb250ZXh0KTtcbiAgICBpZiAocmVzICYmICFyZXMuX2lzVnVlICYmIGlzUHJvbWlzZShyZXMpICYmICFyZXMuX2hhbmRsZWQpIHtcbiAgICAgIHJlcy5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8gKyBcIiAoUHJvbWlzZS9hc3luYylcIik7IH0pO1xuICAgICAgLy8gaXNzdWUgIzk1MTFcbiAgICAgIC8vIGF2b2lkIGNhdGNoIHRyaWdnZXJpbmcgbXVsdGlwbGUgdGltZXMgd2hlbiBuZXN0ZWQgY2FsbHNcbiAgICAgIHJlcy5faGFuZGxlZCA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8pO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2xvYmFsSGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKGNvbmZpZy5lcnJvckhhbmRsZXIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5lcnJvckhhbmRsZXIuY2FsbChudWxsLCBlcnIsIHZtLCBpbmZvKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGlmIHRoZSB1c2VyIGludGVudGlvbmFsbHkgdGhyb3dzIHRoZSBvcmlnaW5hbCBlcnJvciBpbiB0aGUgaGFuZGxlcixcbiAgICAgIC8vIGRvIG5vdCBsb2cgaXQgdHdpY2VcbiAgICAgIGlmIChlICE9PSBlcnIpIHtcbiAgICAgICAgbG9nRXJyb3IoZSwgbnVsbCwgJ2NvbmZpZy5lcnJvckhhbmRsZXInKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9nRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybigoXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgKGVyci50b1N0cmluZygpKSArIFwiXFxcIlwiKSwgdm0pO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICgoaW5Ccm93c2VyIHx8IGluV2VleCkgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IGVyclxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgY2FsbGJhY2tzID0gW107XG52YXIgcGVuZGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyAoKSB7XG4gIHBlbmRpbmcgPSBmYWxzZTtcbiAgdmFyIGNvcGllcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29waWVzW2ldKCk7XG4gIH1cbn1cblxuLy8gSGVyZSB3ZSBoYXZlIGFzeW5jIGRlZmVycmluZyB3cmFwcGVycyB1c2luZyBtaWNyb3Rhc2tzLlxuLy8gSW4gMi41IHdlIHVzZWQgKG1hY3JvKSB0YXNrcyAoaW4gY29tYmluYXRpb24gd2l0aCBtaWNyb3Rhc2tzKS5cbi8vIEhvd2V2ZXIsIGl0IGhhcyBzdWJ0bGUgcHJvYmxlbXMgd2hlbiBzdGF0ZSBpcyBjaGFuZ2VkIHJpZ2h0IGJlZm9yZSByZXBhaW50XG4vLyAoZS5nLiAjNjgxMywgb3V0LWluIHRyYW5zaXRpb25zKS5cbi8vIEFsc28sIHVzaW5nIChtYWNybykgdGFza3MgaW4gZXZlbnQgaGFuZGxlciB3b3VsZCBjYXVzZSBzb21lIHdlaXJkIGJlaGF2aW9yc1xuLy8gdGhhdCBjYW5ub3QgYmUgY2lyY3VtdmVudGVkIChlLmcuICM3MTA5LCAjNzE1MywgIzc1NDYsICM3ODM0LCAjODEwOSkuXG4vLyBTbyB3ZSBub3cgdXNlIG1pY3JvdGFza3MgZXZlcnl3aGVyZSwgYWdhaW4uXG4vLyBBIG1ham9yIGRyYXdiYWNrIG9mIHRoaXMgdHJhZGVvZmYgaXMgdGhhdCB0aGVyZSBhcmUgc29tZSBzY2VuYXJpb3Ncbi8vIHdoZXJlIG1pY3JvdGFza3MgaGF2ZSB0b28gaGlnaCBhIHByaW9yaXR5IGFuZCBmaXJlIGluIGJldHdlZW4gc3VwcG9zZWRseVxuLy8gc2VxdWVudGlhbCBldmVudHMgKGUuZy4gIzQ1MjEsICM2NjkwLCB3aGljaCBoYXZlIHdvcmthcm91bmRzKVxuLy8gb3IgZXZlbiBiZXR3ZWVuIGJ1YmJsaW5nIG9mIHRoZSBzYW1lIGV2ZW50ICgjNjU2NikuXG52YXIgdGltZXJGdW5jO1xuXG4vLyBUaGUgbmV4dFRpY2sgYmVoYXZpb3IgbGV2ZXJhZ2VzIHRoZSBtaWNyb3Rhc2sgcXVldWUsIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZFxuLy8gdmlhIGVpdGhlciBuYXRpdmUgUHJvbWlzZS50aGVuIG9yIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXRhdGlvbk9ic2VydmVyIGhhcyB3aWRlciBzdXBwb3J0LCBob3dldmVyIGl0IGlzIHNlcmlvdXNseSBidWdnZWQgaW5cbi8vIFVJV2ViVmlldyBpbiBpT1MgPj0gOS4zLjMgd2hlbiB0cmlnZ2VyZWQgaW4gdG91Y2ggZXZlbnQgaGFuZGxlcnMuIEl0XG4vLyBjb21wbGV0ZWx5IHN0b3BzIHdvcmtpbmcgYWZ0ZXIgdHJpZ2dlcmluZyBhIGZldyB0aW1lcy4uLiBzbywgaWYgbmF0aXZlXG4vLyBQcm9taXNlIGlzIGF2YWlsYWJsZSwgd2Ugd2lsbCB1c2UgaXQ6XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCwgJGZsb3ctZGlzYWJsZS1saW5lICovXG5pZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb21pc2UpKSB7XG4gIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBwLnRoZW4oZmx1c2hDYWxsYmFja3MpO1xuICAgIC8vIEluIHByb2JsZW1hdGljIFVJV2ViVmlld3MsIFByb21pc2UudGhlbiBkb2Vzbid0IGNvbXBsZXRlbHkgYnJlYWssIGJ1dFxuICAgIC8vIGl0IGNhbiBnZXQgc3R1Y2sgaW4gYSB3ZWlyZCBzdGF0ZSB3aGVyZSBjYWxsYmFja3MgYXJlIHB1c2hlZCBpbnRvIHRoZVxuICAgIC8vIG1pY3JvdGFzayBxdWV1ZSBidXQgdGhlIHF1ZXVlIGlzbid0IGJlaW5nIGZsdXNoZWQsIHVudGlsIHRoZSBicm93c2VyXG4gICAgLy8gbmVlZHMgdG8gZG8gc29tZSBvdGhlciB3b3JrLCBlLmcuIGhhbmRsZSBhIHRpbWVyLiBUaGVyZWZvcmUgd2UgY2FuXG4gICAgLy8gXCJmb3JjZVwiIHRoZSBtaWNyb3Rhc2sgcXVldWUgdG8gYmUgZmx1c2hlZCBieSBhZGRpbmcgYW4gZW1wdHkgdGltZXIuXG4gICAgaWYgKGlzSU9TKSB7IHNldFRpbWVvdXQobm9vcCk7IH1cbiAgfTtcbn0gZWxzZSBpZiAoIWlzSUUgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIChcbiAgaXNOYXRpdmUoTXV0YXRpb25PYnNlcnZlcikgfHxcbiAgLy8gUGhhbnRvbUpTIGFuZCBpT1MgNy54XG4gIE11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTXV0YXRpb25PYnNlcnZlckNvbnN0cnVjdG9yXSdcbikpIHtcbiAgLy8gVXNlIE11dGF0aW9uT2JzZXJ2ZXIgd2hlcmUgbmF0aXZlIFByb21pc2UgaXMgbm90IGF2YWlsYWJsZSxcbiAgLy8gZS5nLiBQaGFudG9tSlMsIGlPUzcsIEFuZHJvaWQgNC40XG4gIC8vICgjNjQ2NiBNdXRhdGlvbk9ic2VydmVyIGlzIHVucmVsaWFibGUgaW4gSUUxMSlcbiAgdmFyIGNvdW50ZXIgPSAxO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaENhbGxiYWNrcyk7XG4gIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjb3VudGVyKSk7XG4gIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gIH0pO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSAyO1xuICAgIHRleHROb2RlLmRhdGEgPSBTdHJpbmcoY291bnRlcik7XG4gIH07XG59IGVsc2UgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKHNldEltbWVkaWF0ZSkpIHtcbiAgLy8gRmFsbGJhY2sgdG8gc2V0SW1tZWRpYXRlLlxuICAvLyBUZWNobmljYWxseSBpdCBsZXZlcmFnZXMgdGhlIChtYWNybykgdGFzayBxdWV1ZSxcbiAgLy8gYnV0IGl0IGlzIHN0aWxsIGEgYmV0dGVyIGNob2ljZSB0aGFuIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRJbW1lZGlhdGUoZmx1c2hDYWxsYmFja3MpO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gRmFsbGJhY2sgdG8gc2V0VGltZW91dC5cbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHNldFRpbWVvdXQoZmx1c2hDYWxsYmFja3MsIDApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayAoY2IsIGN0eCkge1xuICB2YXIgX3Jlc29sdmU7XG4gIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiLmNhbGwoY3R4KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZSwgY3R4LCAnbmV4dFRpY2snKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF9yZXNvbHZlKSB7XG4gICAgICBfcmVzb2x2ZShjdHgpO1xuICAgIH1cbiAgfSk7XG4gIGlmICghcGVuZGluZykge1xuICAgIHBlbmRpbmcgPSB0cnVlO1xuICAgIHRpbWVyRnVuYygpO1xuICB9XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBpZiAoIWNiICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pXG4gIH1cbn1cblxuLyogICovXG5cbi8qIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aCBQcm94eSAqL1xuXG52YXIgaW5pdFByb3h5O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgYWxsb3dlZEdsb2JhbHMgPSBtYWtlTWFwKFxuICAgICdJbmZpbml0eSx1bmRlZmluZWQsTmFOLGlzRmluaXRlLGlzTmFOLCcgK1xuICAgICdwYXJzZUZsb2F0LHBhcnNlSW50LGRlY29kZVVSSSxkZWNvZGVVUklDb21wb25lbnQsZW5jb2RlVVJJLGVuY29kZVVSSUNvbXBvbmVudCwnICtcbiAgICAnTWF0aCxOdW1iZXIsRGF0ZSxBcnJheSxPYmplY3QsQm9vbGVhbixTdHJpbmcsUmVnRXhwLE1hcCxTZXQsSlNPTixJbnRsLCcgK1xuICAgICdyZXF1aXJlJyAvLyBmb3IgV2VicGFjay9Ccm93c2VyaWZ5XG4gICk7XG5cbiAgdmFyIHdhcm5Ob25QcmVzZW50ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgb3IgbWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBub3QgZGVmaW5lZCBvbiB0aGUgaW5zdGFuY2UgYnV0IFwiICtcbiAgICAgICdyZWZlcmVuY2VkIGR1cmluZyByZW5kZXIuIE1ha2Ugc3VyZSB0aGF0IHRoaXMgcHJvcGVydHkgaXMgcmVhY3RpdmUsICcgK1xuICAgICAgJ2VpdGhlciBpbiB0aGUgZGF0YSBvcHRpb24sIG9yIGZvciBjbGFzcy1iYXNlZCBjb21wb25lbnRzLCBieSAnICtcbiAgICAgICdpbml0aWFsaXppbmcgdGhlIHByb3BlcnR5LiAnICtcbiAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL3JlYWN0aXZpdHkuaHRtbCNEZWNsYXJpbmctUmVhY3RpdmUtUHJvcGVydGllcy4nLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgd2FyblJlc2VydmVkUHJlZml4ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIG11c3QgYmUgYWNjZXNzZWQgd2l0aCBcXFwiJGRhdGEuXCIgKyBrZXkgKyBcIlxcXCIgYmVjYXVzZSBcIiArXG4gICAgICAncHJvcGVydGllcyBzdGFydGluZyB3aXRoIFwiJFwiIG9yIFwiX1wiIGFyZSBub3QgcHJveGllZCBpbiB0aGUgVnVlIGluc3RhbmNlIHRvICcgK1xuICAgICAgJ3ByZXZlbnQgY29uZmxpY3RzIHdpdGggVnVlIGludGVybmFscy4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9hcGkvI2RhdGEnLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgaGFzUHJveHkgPVxuICAgIHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJveHkpO1xuXG4gIGlmIChoYXNQcm94eSkge1xuICAgIHZhciBpc0J1aWx0SW5Nb2RpZmllciA9IG1ha2VNYXAoJ3N0b3AscHJldmVudCxzZWxmLGN0cmwsc2hpZnQsYWx0LG1ldGEsZXhhY3QnKTtcbiAgICBjb25maWcua2V5Q29kZXMgPSBuZXcgUHJveHkoY29uZmlnLmtleUNvZGVzLCB7XG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpc0J1aWx0SW5Nb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgd2FybigoXCJBdm9pZCBvdmVyd3JpdGluZyBidWlsdC1pbiBtb2RpZmllciBpbiBjb25maWcua2V5Q29kZXM6IC5cIiArIGtleSkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGhhc0hhbmRsZXIgPSB7XG4gICAgaGFzOiBmdW5jdGlvbiBoYXMgKHRhcmdldCwga2V5KSB7XG4gICAgICB2YXIgaGFzID0ga2V5IGluIHRhcmdldDtcbiAgICAgIHZhciBpc0FsbG93ZWQgPSBhbGxvd2VkR2xvYmFscyhrZXkpIHx8XG4gICAgICAgICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkuY2hhckF0KDApID09PSAnXycgJiYgIShrZXkgaW4gdGFyZ2V0LiRkYXRhKSk7XG4gICAgICBpZiAoIWhhcyAmJiAhaXNBbGxvd2VkKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhcyB8fCAhaXNBbGxvd2VkXG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRIYW5kbGVyID0ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICh0YXJnZXQsIGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmICEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0W2tleV1cbiAgICB9XG4gIH07XG5cbiAgaW5pdFByb3h5ID0gZnVuY3Rpb24gaW5pdFByb3h5ICh2bSkge1xuICAgIGlmIChoYXNQcm94eSkge1xuICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3h5IGhhbmRsZXIgdG8gdXNlXG4gICAgICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICAgICAgdmFyIGhhbmRsZXJzID0gb3B0aW9ucy5yZW5kZXIgJiYgb3B0aW9ucy5yZW5kZXIuX3dpdGhTdHJpcHBlZFxuICAgICAgICA/IGdldEhhbmRsZXJcbiAgICAgICAgOiBoYXNIYW5kbGVyO1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gbmV3IFByb3h5KHZtLCBoYW5kbGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsKSB7XG4gIF90cmF2ZXJzZSh2YWwsIHNlZW5PYmplY3RzKTtcbiAgc2Vlbk9iamVjdHMuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gX3RyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgdmFyIGksIGtleXM7XG4gIHZhciBpc0EgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gIGlmICgoIWlzQSAmJiAhaXNPYmplY3QodmFsKSkgfHwgT2JqZWN0LmlzRnJvemVuKHZhbCkgfHwgdmFsIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsLl9fb2JfXykge1xuICAgIHZhciBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkO1xuICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWVuLmFkZChkZXBJZCk7XG4gIH1cbiAgaWYgKGlzQSkge1xuICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtpXSwgc2Vlbik7IH1cbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKTsgfVxuICB9XG59XG5cbnZhciBtYXJrO1xudmFyIG1lYXN1cmU7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwZXJmID0gaW5Ccm93c2VyICYmIHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChcbiAgICBwZXJmICYmXG4gICAgcGVyZi5tYXJrICYmXG4gICAgcGVyZi5tZWFzdXJlICYmXG4gICAgcGVyZi5jbGVhck1hcmtzICYmXG4gICAgcGVyZi5jbGVhck1lYXN1cmVzXG4gICkge1xuICAgIG1hcmsgPSBmdW5jdGlvbiAodGFnKSB7IHJldHVybiBwZXJmLm1hcmsodGFnKTsgfTtcbiAgICBtZWFzdXJlID0gZnVuY3Rpb24gKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpIHtcbiAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhzdGFydFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3MoZW5kVGFnKTtcbiAgICAgIC8vIHBlcmYuY2xlYXJNZWFzdXJlcyhuYW1lKVxuICAgIH07XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBub3JtYWxpemVFdmVudCA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgcGFzc2l2ZSA9IG5hbWUuY2hhckF0KDApID09PSAnJic7XG4gIG5hbWUgPSBwYXNzaXZlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBvbmNlJCQxID0gbmFtZS5jaGFyQXQoMCkgPT09ICd+JzsgLy8gUHJlZml4ZWQgbGFzdCwgY2hlY2tlZCBmaXJzdFxuICBuYW1lID0gb25jZSQkMSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgY2FwdHVyZSA9IG5hbWUuY2hhckF0KDApID09PSAnISc7XG4gIG5hbWUgPSBjYXB0dXJlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBvbmNlOiBvbmNlJCQxLFxuICAgIGNhcHR1cmU6IGNhcHR1cmUsXG4gICAgcGFzc2l2ZTogcGFzc2l2ZVxuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlRm5JbnZva2VyIChmbnMsIHZtKSB7XG4gIGZ1bmN0aW9uIGludm9rZXIgKCkge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmbnMgPSBpbnZva2VyLmZucztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbnMpKSB7XG4gICAgICB2YXIgY2xvbmVkID0gZm5zLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjbG9uZWRbaV0sIG51bGwsIGFyZ3VtZW50cyQxLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJldHVybiBoYW5kbGVyIHJldHVybiB2YWx1ZSBmb3Igc2luZ2xlIGhhbmRsZXJzXG4gICAgICByZXR1cm4gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoZm5zLCBudWxsLCBhcmd1bWVudHMsIHZtLCBcInYtb24gaGFuZGxlclwiKVxuICAgIH1cbiAgfVxuICBpbnZva2VyLmZucyA9IGZucztcbiAgcmV0dXJuIGludm9rZXJcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGlzdGVuZXJzIChcbiAgb24sXG4gIG9sZE9uLFxuICBhZGQsXG4gIHJlbW92ZSQkMSxcbiAgY3JlYXRlT25jZUhhbmRsZXIsXG4gIHZtXG4pIHtcbiAgdmFyIG5hbWUsIGRlZiQkMSwgY3VyLCBvbGQsIGV2ZW50O1xuICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICBkZWYkJDEgPSBjdXIgPSBvbltuYW1lXTtcbiAgICBvbGQgPSBvbGRPbltuYW1lXTtcbiAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgIGlmIChpc1VuZGVmKGN1cikpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJJbnZhbGlkIGhhbmRsZXIgZm9yIGV2ZW50IFxcXCJcIiArIChldmVudC5uYW1lKSArIFwiXFxcIjogZ290IFwiICsgU3RyaW5nKGN1ciksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNVbmRlZihvbGQpKSB7XG4gICAgICBpZiAoaXNVbmRlZihjdXIuZm5zKSkge1xuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZUZuSW52b2tlcihjdXIsIHZtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1RydWUoZXZlbnQub25jZSkpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVPbmNlSGFuZGxlcihldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUpO1xuICAgICAgfVxuICAgICAgYWRkKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSwgZXZlbnQucGFzc2l2ZSwgZXZlbnQucGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKGN1ciAhPT0gb2xkKSB7XG4gICAgICBvbGQuZm5zID0gY3VyO1xuICAgICAgb25bbmFtZV0gPSBvbGQ7XG4gICAgfVxuICB9XG4gIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgIGlmIChpc1VuZGVmKG9uW25hbWVdKSkge1xuICAgICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICAgIHJlbW92ZSQkMShldmVudC5uYW1lLCBvbGRPbltuYW1lXSwgZXZlbnQuY2FwdHVyZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLy8gZml4ZWQgYnkgeHh4eHh4IChtcCBwcm9wZXJ0aWVzKVxuZnVuY3Rpb24gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dCkge1xuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMubXBPcHRpb25zICYmIEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMucHJvcGVydGllcztcbiAgaWYgKGlzVW5kZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG4gIHZhciBleHRlcm5hbENsYXNzZXMgPSBDdG9yLm9wdGlvbnMubXBPcHRpb25zLmV4dGVybmFsQ2xhc3NlcyB8fCBbXTtcbiAgdmFyIGF0dHJzID0gZGF0YS5hdHRycztcbiAgdmFyIHByb3BzID0gZGF0YS5wcm9wcztcbiAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIHZhciByZXN1bHQgPSBjaGVja1Byb3AocmVzLCBwcm9wcywga2V5LCBhbHRLZXksIHRydWUpIHx8XG4gICAgICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgICAvLyBleHRlcm5hbENsYXNzXG4gICAgICBpZiAoXG4gICAgICAgIHJlc3VsdCAmJlxuICAgICAgICByZXNba2V5XSAmJlxuICAgICAgICBleHRlcm5hbENsYXNzZXMuaW5kZXhPZihhbHRLZXkpICE9PSAtMSAmJlxuICAgICAgICBjb250ZXh0W2NhbWVsaXplKHJlc1trZXldKV1cbiAgICAgICkge1xuICAgICAgICAvLyDotYvlgLwgZXh0ZXJuYWxDbGFzcyDnnJ/mraPnmoTlgLwo5qih5p2/6YeMIGV4dGVybmFsQ2xhc3Mg55qE5YC85Y+v6IO95piv5a2X56ym5LiyKVxuICAgICAgICByZXNba2V5XSA9IGNvbnRleHRbY2FtZWxpemUocmVzW2tleV0pXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIChcbiAgZGF0YSxcbiAgQ3RvcixcbiAgdGFnLFxuICBjb250ZXh0Ly8gZml4ZWQgYnkgeHh4eHh4XG4pIHtcbiAgLy8gd2UgYXJlIG9ubHkgZXh0cmFjdGluZyByYXcgdmFsdWVzIGhlcmUuXG4gIC8vIHZhbGlkYXRpb24gYW5kIGRlZmF1bHQgdmFsdWVzIGFyZSBoYW5kbGVkIGluIHRoZSBjaGlsZFxuICAvLyBjb21wb25lbnQgaXRzZWxmLlxuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMucHJvcHM7XG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xuICAgIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIHJldHVybiBleHRyYWN0UHJvcGVydGllc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3Rvciwge30sIGNvbnRleHQpXG4gIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICB2YXIgcHJvcHMgPSBkYXRhLnByb3BzO1xuICBpZiAoaXNEZWYoYXR0cnMpIHx8IGlzRGVmKHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgdmFyIGFsdEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGtleUluTG93ZXJDYXNlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgIT09IGtleUluTG93ZXJDYXNlICYmXG4gICAgICAgICAgYXR0cnMgJiYgaGFzT3duKGF0dHJzLCBrZXlJbkxvd2VyQ2FzZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGlwKFxuICAgICAgICAgICAgXCJQcm9wIFxcXCJcIiArIGtleUluTG93ZXJDYXNlICsgXCJcXFwiIGlzIHBhc3NlZCB0byBjb21wb25lbnQgXCIgK1xuICAgICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodGFnIHx8IEN0b3IpKSArIFwiLCBidXQgdGhlIGRlY2xhcmVkIHByb3AgbmFtZSBpc1wiICtcbiAgICAgICAgICAgIFwiIFxcXCJcIiArIGtleSArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCBjYW1lbENhc2VkIFwiICtcbiAgICAgICAgICAgIFwicHJvcHMgbmVlZCB0byB1c2UgdGhlaXIga2ViYWItY2FzZSBlcXVpdmFsZW50cyB3aGVuIHVzaW5nIGluLURPTSBcIiArXG4gICAgICAgICAgICBcInRlbXBsYXRlcy4gWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgYWx0S2V5ICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICByZXR1cm4gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dClcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wIChcbiAgcmVzLFxuICBoYXNoLFxuICBrZXksXG4gIGFsdEtleSxcbiAgcHJlc2VydmVcbikge1xuICBpZiAoaXNEZWYoaGFzaCkpIHtcbiAgICBpZiAoaGFzT3duKGhhc2gsIGtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFtrZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFtrZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKGhhc093bihoYXNoLCBhbHRLZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hbYWx0S2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hbYWx0S2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiAgKi9cblxuLy8gVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGF0dGVtcHRzIHRvIG1pbmltaXplIHRoZSBuZWVkIGZvciBub3JtYWxpemF0aW9uIGJ5XG4vLyBzdGF0aWNhbGx5IGFuYWx5emluZyB0aGUgdGVtcGxhdGUgYXQgY29tcGlsZSB0aW1lLlxuLy9cbi8vIEZvciBwbGFpbiBIVE1MIG1hcmt1cCwgbm9ybWFsaXphdGlvbiBjYW4gYmUgY29tcGxldGVseSBza2lwcGVkIGJlY2F1c2UgdGhlXG4vLyBnZW5lcmF0ZWQgcmVuZGVyIGZ1bmN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gcmV0dXJuIEFycmF5PFZOb2RlPi4gVGhlcmUgYXJlXG4vLyB0d28gY2FzZXMgd2hlcmUgZXh0cmEgbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQ6XG5cbi8vIDEuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbXBvbmVudHMgLSBiZWNhdXNlIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbi8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcbi8vIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkIC0gaWYgYW55IGNoaWxkIGlzIGFuIEFycmF5LCB3ZSBmbGF0dGVuIHRoZSB3aG9sZVxuLy8gdGhpbmcgd2l0aCBBcnJheS5wcm90b3R5cGUuY29uY2F0LiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIG9ubHkgMS1sZXZlbCBkZWVwXG4vLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXG5mdW5jdGlvbiBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuLy8gMi4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29uc3RydWN0cyB0aGF0IGFsd2F5cyBnZW5lcmF0ZWQgbmVzdGVkIEFycmF5cyxcbi8vIGUuZy4gPHRlbXBsYXRlPiwgPHNsb3Q+LCB2LWZvciwgb3Igd2hlbiB0aGUgY2hpbGRyZW4gaXMgcHJvdmlkZWQgYnkgdXNlclxuLy8gd2l0aCBoYW5kLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucyAvIEpTWC4gSW4gc3VjaCBjYXNlcyBhIGZ1bGwgbm9ybWFsaXphdGlvblxuLy8gaXMgbmVlZGVkIHRvIGNhdGVyIHRvIGFsbCBwb3NzaWJsZSB0eXBlcyBvZiBjaGlsZHJlbiB2YWx1ZXMuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGlzUHJpbWl0aXZlKGNoaWxkcmVuKVxuICAgID8gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildXG4gICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKVxuICAgICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNUZXh0Tm9kZSAobm9kZSkge1xuICByZXR1cm4gaXNEZWYobm9kZSkgJiYgaXNEZWYobm9kZS50ZXh0KSAmJiBpc0ZhbHNlKG5vZGUuaXNDb21tZW50KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheUNoaWxkcmVuIChjaGlsZHJlbiwgbmVzdGVkSW5kZXgpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgaSwgYywgbGFzdEluZGV4LCBsYXN0O1xuICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGlzVW5kZWYoYykgfHwgdHlwZW9mIGMgPT09ICdib29sZWFuJykgeyBjb250aW51ZSB9XG4gICAgbGFzdEluZGV4ID0gcmVzLmxlbmd0aCAtIDE7XG4gICAgbGFzdCA9IHJlc1tsYXN0SW5kZXhdO1xuICAgIC8vICBuZXN0ZWRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgaWYgKGMubGVuZ3RoID4gMCkge1xuICAgICAgICBjID0gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjLCAoKG5lc3RlZEluZGV4IHx8ICcnKSArIFwiX1wiICsgaSkpO1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIGlmIChpc1RleHROb2RlKGNbMF0pICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyAoY1swXSkudGV4dCk7XG4gICAgICAgICAgYy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoLmFwcGx5KHJlcywgYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xuICAgICAgaWYgKGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgU1NSIGh5ZHJhdGlvbiBiZWNhdXNlIHRleHQgbm9kZXMgYXJlXG4gICAgICAgIC8vIGVzc2VudGlhbGx5IG1lcmdlZCB3aGVuIHJlbmRlcmVkIHRvIEhUTUwgc3RyaW5nc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjKTtcbiAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJycpIHtcbiAgICAgICAgLy8gY29udmVydCBwcmltaXRpdmUgdG8gdm5vZGVcbiAgICAgICAgcmVzLnB1c2goY3JlYXRlVGV4dFZOb2RlKGMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzVGV4dE5vZGUoYykgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMudGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWZhdWx0IGtleSBmb3IgbmVzdGVkIGFycmF5IGNoaWxkcmVuIChsaWtlbHkgZ2VuZXJhdGVkIGJ5IHYtZm9yKVxuICAgICAgICBpZiAoaXNUcnVlKGNoaWxkcmVuLl9pc1ZMaXN0KSAmJlxuICAgICAgICAgIGlzRGVmKGMudGFnKSAmJlxuICAgICAgICAgIGlzVW5kZWYoYy5rZXkpICYmXG4gICAgICAgICAgaXNEZWYobmVzdGVkSW5kZXgpKSB7XG4gICAgICAgICAgYy5rZXkgPSBcIl9fdmxpc3RcIiArIG5lc3RlZEluZGV4ICsgXCJfXCIgKyBpICsgXCJfX1wiO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UHJvdmlkZSAodm0pIHtcbiAgdmFyIHByb3ZpZGUgPSB2bS4kb3B0aW9ucy5wcm92aWRlO1xuICBpZiAocHJvdmlkZSkge1xuICAgIHZtLl9wcm92aWRlZCA9IHR5cGVvZiBwcm92aWRlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHByb3ZpZGUuY2FsbCh2bSlcbiAgICAgIDogcHJvdmlkZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0SW5qZWN0aW9ucyAodm0pIHtcbiAgdmFyIHJlc3VsdCA9IHJlc29sdmVJbmplY3Qodm0uJG9wdGlvbnMuaW5qZWN0LCB2bSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhbiBpbmplY3RlZCB2YWx1ZSBkaXJlY3RseSBzaW5jZSB0aGUgY2hhbmdlcyB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcImluamVjdGlvbiBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbmplY3QgKGluamVjdCwgdm0pIHtcbiAgaWYgKGluamVjdCkge1xuICAgIC8vIGluamVjdCBpcyA6YW55IGJlY2F1c2UgZmxvdyBpcyBub3Qgc21hcnQgZW5vdWdoIHRvIGZpZ3VyZSBvdXQgY2FjaGVkXG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICAgID8gUmVmbGVjdC5vd25LZXlzKGluamVjdClcbiAgICAgIDogT2JqZWN0LmtleXMoaW5qZWN0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAvLyAjNjU3NCBpbiBjYXNlIHRoZSBpbmplY3Qgb2JqZWN0IGlzIG9ic2VydmVkLi4uXG4gICAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgICB2YXIgcHJvdmlkZUtleSA9IGluamVjdFtrZXldLmZyb207XG4gICAgICB2YXIgc291cmNlID0gdm07XG4gICAgICB3aGlsZSAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuX3Byb3ZpZGVkICYmIGhhc093bihzb3VyY2UuX3Byb3ZpZGVkLCBwcm92aWRlS2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlLl9wcm92aWRlZFtwcm92aWRlS2V5XTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBpbmplY3Rba2V5XSkge1xuICAgICAgICAgIHZhciBwcm92aWRlRGVmYXVsdCA9IGluamVjdFtrZXldLmRlZmF1bHQ7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB0eXBlb2YgcHJvdmlkZURlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gcHJvdmlkZURlZmF1bHQuY2FsbCh2bSlcbiAgICAgICAgICAgIDogcHJvdmlkZURlZmF1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm4oKFwiSW5qZWN0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBub3QgZm91bmRcIiksIHZtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuLyogICovXG5cblxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgcmF3IGNoaWxkcmVuIFZOb2RlcyBpbnRvIGEgc2xvdCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVTbG90cyAoXG4gIGNoaWxkcmVuLFxuICBjb250ZXh0XG4pIHtcbiAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgdmFyIHNsb3RzID0ge307XG4gIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgdmFyIGRhdGEgPSBjaGlsZC5kYXRhO1xuICAgIC8vIHJlbW92ZSBzbG90IGF0dHJpYnV0ZSBpZiB0aGUgbm9kZSBpcyByZXNvbHZlZCBhcyBhIFZ1ZSBzbG90IG5vZGVcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMuc2xvdCkge1xuICAgICAgZGVsZXRlIGRhdGEuYXR0cnMuc2xvdDtcbiAgICB9XG4gICAgLy8gbmFtZWQgc2xvdHMgc2hvdWxkIG9ubHkgYmUgcmVzcGVjdGVkIGlmIHRoZSB2bm9kZSB3YXMgcmVuZGVyZWQgaW4gdGhlXG4gICAgLy8gc2FtZSBjb250ZXh0LlxuICAgIGlmICgoY2hpbGQuY29udGV4dCA9PT0gY29udGV4dCB8fCBjaGlsZC5mbkNvbnRleHQgPT09IGNvbnRleHQpICYmXG4gICAgICBkYXRhICYmIGRhdGEuc2xvdCAhPSBudWxsXG4gICAgKSB7XG4gICAgICB2YXIgbmFtZSA9IGRhdGEuc2xvdDtcbiAgICAgIHZhciBzbG90ID0gKHNsb3RzW25hbWVdIHx8IChzbG90c1tuYW1lXSA9IFtdKSk7XG4gICAgICBpZiAoY2hpbGQudGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgIHNsb3QucHVzaC5hcHBseShzbG90LCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbG90LnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaXhlZCBieSB4eHh4eHgg5Li05pe2IGhhY2sg5o6JIHVuaS1hcHAg5Lit55qE5byC5q2lIG5hbWUgc2xvdCBwYWdlXG4gICAgICBpZihjaGlsZC5hc3luY01ldGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEuc2xvdCA9PT0gJ3BhZ2UnKXtcbiAgICAgICAgKHNsb3RzWydwYWdlJ10gfHwgKHNsb3RzWydwYWdlJ10gPSBbXSkpLnB1c2goY2hpbGQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIChzbG90cy5kZWZhdWx0IHx8IChzbG90cy5kZWZhdWx0ID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gaWdub3JlIHNsb3RzIHRoYXQgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlXG4gIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgIGlmIChzbG90c1tuYW1lJDFdLmV2ZXJ5KGlzV2hpdGVzcGFjZSkpIHtcbiAgICAgIGRlbGV0ZSBzbG90c1tuYW1lJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2xvdHNcbn1cblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChub2RlKSB7XG4gIHJldHVybiAobm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5KSB8fCBub2RlLnRleHQgPT09ICcgJ1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdHMgKFxuICBzbG90cyxcbiAgbm9ybWFsU2xvdHMsXG4gIHByZXZTbG90c1xuKSB7XG4gIHZhciByZXM7XG4gIHZhciBoYXNOb3JtYWxTbG90cyA9IE9iamVjdC5rZXlzKG5vcm1hbFNsb3RzKS5sZW5ndGggPiAwO1xuICB2YXIgaXNTdGFibGUgPSBzbG90cyA/ICEhc2xvdHMuJHN0YWJsZSA6ICFoYXNOb3JtYWxTbG90cztcbiAgdmFyIGtleSA9IHNsb3RzICYmIHNsb3RzLiRrZXk7XG4gIGlmICghc2xvdHMpIHtcbiAgICByZXMgPSB7fTtcbiAgfSBlbHNlIGlmIChzbG90cy5fbm9ybWFsaXplZCkge1xuICAgIC8vIGZhc3QgcGF0aCAxOiBjaGlsZCBjb21wb25lbnQgcmUtcmVuZGVyIG9ubHksIHBhcmVudCBkaWQgbm90IGNoYW5nZVxuICAgIHJldHVybiBzbG90cy5fbm9ybWFsaXplZFxuICB9IGVsc2UgaWYgKFxuICAgIGlzU3RhYmxlICYmXG4gICAgcHJldlNsb3RzICYmXG4gICAgcHJldlNsb3RzICE9PSBlbXB0eU9iamVjdCAmJlxuICAgIGtleSA9PT0gcHJldlNsb3RzLiRrZXkgJiZcbiAgICAhaGFzTm9ybWFsU2xvdHMgJiZcbiAgICAhcHJldlNsb3RzLiRoYXNOb3JtYWxcbiAgKSB7XG4gICAgLy8gZmFzdCBwYXRoIDI6IHN0YWJsZSBzY29wZWQgc2xvdHMgdy8gbm8gbm9ybWFsIHNsb3RzIHRvIHByb3h5LFxuICAgIC8vIG9ubHkgbmVlZCB0byBub3JtYWxpemUgb25jZVxuICAgIHJldHVybiBwcmV2U2xvdHNcbiAgfSBlbHNlIHtcbiAgICByZXMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkkMSBpbiBzbG90cykge1xuICAgICAgaWYgKHNsb3RzW2tleSQxXSAmJiBrZXkkMVswXSAhPT0gJyQnKSB7XG4gICAgICAgIHJlc1trZXkkMV0gPSBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXkkMSwgc2xvdHNba2V5JDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZXhwb3NlIG5vcm1hbCBzbG90cyBvbiBzY29wZWRTbG90c1xuICBmb3IgKHZhciBrZXkkMiBpbiBub3JtYWxTbG90cykge1xuICAgIGlmICghKGtleSQyIGluIHJlcykpIHtcbiAgICAgIHJlc1trZXkkMl0gPSBwcm94eU5vcm1hbFNsb3Qobm9ybWFsU2xvdHMsIGtleSQyKTtcbiAgICB9XG4gIH1cbiAgLy8gYXZvcmlheiBzZWVtcyB0byBtb2NrIGEgbm9uLWV4dGVuc2libGUgJHNjb3BlZFNsb3RzIG9iamVjdFxuICAvLyBhbmQgd2hlbiB0aGF0IGlzIHBhc3NlZCBkb3duIHRoaXMgd291bGQgY2F1c2UgYW4gZXJyb3JcbiAgaWYgKHNsb3RzICYmIE9iamVjdC5pc0V4dGVuc2libGUoc2xvdHMpKSB7XG4gICAgKHNsb3RzKS5fbm9ybWFsaXplZCA9IHJlcztcbiAgfVxuICBkZWYocmVzLCAnJHN0YWJsZScsIGlzU3RhYmxlKTtcbiAgZGVmKHJlcywgJyRrZXknLCBrZXkpO1xuICBkZWYocmVzLCAnJGhhc05vcm1hbCcsIGhhc05vcm1hbFNsb3RzKTtcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXksIGZuKSB7XG4gIHZhciBub3JtYWxpemVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXMgPSBhcmd1bWVudHMubGVuZ3RoID8gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IGZuKHt9KTtcbiAgICByZXMgPSByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzKVxuICAgICAgPyBbcmVzXSAvLyBzaW5nbGUgdm5vZGVcbiAgICAgIDogbm9ybWFsaXplQ2hpbGRyZW4ocmVzKTtcbiAgICByZXR1cm4gcmVzICYmIChcbiAgICAgIHJlcy5sZW5ndGggPT09IDAgfHxcbiAgICAgIChyZXMubGVuZ3RoID09PSAxICYmIHJlc1swXS5pc0NvbW1lbnQpIC8vICM5NjU4XG4gICAgKSA/IHVuZGVmaW5lZFxuICAgICAgOiByZXNcbiAgfTtcbiAgLy8gdGhpcyBpcyBhIHNsb3QgdXNpbmcgdGhlIG5ldyB2LXNsb3Qgc3ludGF4IHdpdGhvdXQgc2NvcGUuIGFsdGhvdWdoIGl0IGlzXG4gIC8vIGNvbXBpbGVkIGFzIGEgc2NvcGVkIHNsb3QsIHJlbmRlciBmbiB1c2VycyB3b3VsZCBleHBlY3QgaXQgdG8gYmUgcHJlc2VudFxuICAvLyBvbiB0aGlzLiRzbG90cyBiZWNhdXNlIHRoZSB1c2FnZSBpcyBzZW1hbnRpY2FsbHkgYSBub3JtYWwgc2xvdC5cbiAgaWYgKGZuLnByb3h5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbFNsb3RzLCBrZXksIHtcbiAgICAgIGdldDogbm9ybWFsaXplZCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZFxufVxuXG5mdW5jdGlvbiBwcm94eU5vcm1hbFNsb3Qoc2xvdHMsIGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2xvdHNba2V5XTsgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgdmFsLFxuICByZW5kZXJcbikge1xuICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGksIGksIGkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcihpICsgMSwgaSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgaWYgKGhhc1N5bWJvbCAmJiB2YWxbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgcmV0ID0gW107XG4gICAgICB2YXIgaXRlcmF0b3IgPSB2YWxbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgcmV0LnB1c2gocmVuZGVyKHJlc3VsdC52YWx1ZSwgcmV0Lmxlbmd0aCwgaSwgaSsrKSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRbaV0gPSByZW5kZXIodmFsW2tleV0sIGtleSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWlzRGVmKHJldCkpIHtcbiAgICByZXQgPSBbXTtcbiAgfVxuICAocmV0KS5faXNWTGlzdCA9IHRydWU7XG4gIHJldHVybiByZXRcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyA8c2xvdD5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2xvdCAoXG4gIG5hbWUsXG4gIGZhbGxiYWNrLFxuICBwcm9wcyxcbiAgYmluZE9iamVjdFxuKSB7XG4gIHZhciBzY29wZWRTbG90Rm4gPSB0aGlzLiRzY29wZWRTbG90c1tuYW1lXTtcbiAgdmFyIG5vZGVzO1xuICBpZiAoc2NvcGVkU2xvdEZuKSB7IC8vIHNjb3BlZCBzbG90XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICBpZiAoYmluZE9iamVjdCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzT2JqZWN0KGJpbmRPYmplY3QpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ3Nsb3Qgdi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QnLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHByb3BzID0gZXh0ZW5kKGV4dGVuZCh7fSwgYmluZE9iamVjdCksIHByb3BzKTtcbiAgICB9XG4gICAgLy8gZml4ZWQgYnkgeHh4eHh4IGFwcC1wbHVzIHNjb3BlZFNsb3RcbiAgICBub2RlcyA9IHNjb3BlZFNsb3RGbihwcm9wcywgdGhpcywgcHJvcHMuX2kpIHx8IGZhbGxiYWNrO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzID0gdGhpcy4kc2xvdHNbbmFtZV0gfHwgZmFsbGJhY2s7XG4gIH1cblxuICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScsIHsgc2xvdDogdGFyZ2V0IH0sIG5vZGVzKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2Rlc1xuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgZmlsdGVyc1xuICovXG5mdW5jdGlvbiByZXNvbHZlRmlsdGVyIChpZCkge1xuICByZXR1cm4gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgaWQsIHRydWUpIHx8IGlkZW50aXR5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0tleU5vdE1hdGNoIChleHBlY3QsIGFjdHVhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3QpKSB7XG4gICAgcmV0dXJuIGV4cGVjdC5pbmRleE9mKGFjdHVhbCkgPT09IC0xXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4cGVjdCAhPT0gYWN0dWFsXG4gIH1cbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgY2hlY2tpbmcga2V5Q29kZXMgZnJvbSBjb25maWcuXG4gKiBleHBvc2VkIGFzIFZ1ZS5wcm90b3R5cGUuX2tcbiAqIHBhc3NpbmcgaW4gZXZlbnRLZXlOYW1lIGFzIGxhc3QgYXJndW1lbnQgc2VwYXJhdGVseSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICovXG5mdW5jdGlvbiBjaGVja0tleUNvZGVzIChcbiAgZXZlbnRLZXlDb2RlLFxuICBrZXksXG4gIGJ1aWx0SW5LZXlDb2RlLFxuICBldmVudEtleU5hbWUsXG4gIGJ1aWx0SW5LZXlOYW1lXG4pIHtcbiAgdmFyIG1hcHBlZEtleUNvZGUgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluS2V5Q29kZTtcbiAgaWYgKGJ1aWx0SW5LZXlOYW1lICYmIGV2ZW50S2V5TmFtZSAmJiAhY29uZmlnLmtleUNvZGVzW2tleV0pIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChidWlsdEluS2V5TmFtZSwgZXZlbnRLZXlOYW1lKVxuICB9IGVsc2UgaWYgKG1hcHBlZEtleUNvZGUpIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChtYXBwZWRLZXlDb2RlLCBldmVudEtleUNvZGUpXG4gIH0gZWxzZSBpZiAoZXZlbnRLZXlOYW1lKSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgbWVyZ2luZyB2LWJpbmQ9XCJvYmplY3RcIiBpbnRvIGEgVk5vZGUncyBkYXRhLlxuICovXG5mdW5jdGlvbiBiaW5kT2JqZWN0UHJvcHMgKFxuICBkYXRhLFxuICB0YWcsXG4gIHZhbHVlLFxuICBhc1Byb3AsXG4gIGlzU3luY1xuKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCBvciBBcnJheSB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNoO1xuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSA9PT0gJ2NsYXNzJyB8fFxuICAgICAgICAgIGtleSA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoa2V5KVxuICAgICAgICApIHtcbiAgICAgICAgICBoYXNoID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy50eXBlO1xuICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxuICAgICAgICAgICAgPyBkYXRhLmRvbVByb3BzIHx8IChkYXRhLmRvbVByb3BzID0ge30pXG4gICAgICAgICAgICA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbWVsaXplZEtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIGlmICghKGNhbWVsaXplZEtleSBpbiBoYXNoKSAmJiAhKGh5cGhlbmF0ZWRLZXkgaW4gaGFzaCkpIHtcbiAgICAgICAgICBoYXNoW2tleV0gPSB2YWx1ZVtrZXldO1xuXG4gICAgICAgICAgaWYgKGlzU3luYykge1xuICAgICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgICAgICAgICAgIG9uWyhcInVwZGF0ZTpcIiArIGtleSldID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICB2YWx1ZVtrZXldID0gJGV2ZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgbG9vcCgga2V5ICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgc3RhdGljIHRyZWVzLlxuICovXG5mdW5jdGlvbiByZW5kZXJTdGF0aWMgKFxuICBpbmRleCxcbiAgaXNJbkZvclxuKSB7XG4gIHZhciBjYWNoZWQgPSB0aGlzLl9zdGF0aWNUcmVlcyB8fCAodGhpcy5fc3RhdGljVHJlZXMgPSBbXSk7XG4gIHZhciB0cmVlID0gY2FjaGVkW2luZGV4XTtcbiAgLy8gaWYgaGFzIGFscmVhZHktcmVuZGVyZWQgc3RhdGljIHRyZWUgYW5kIG5vdCBpbnNpZGUgdi1mb3IsXG4gIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlLlxuICBpZiAodHJlZSAmJiAhaXNJbkZvcikge1xuICAgIHJldHVybiB0cmVlXG4gIH1cbiAgLy8gb3RoZXJ3aXNlLCByZW5kZXIgYSBmcmVzaCB0cmVlLlxuICB0cmVlID0gY2FjaGVkW2luZGV4XSA9IHRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2luZGV4XS5jYWxsKFxuICAgIHRoaXMuX3JlbmRlclByb3h5LFxuICAgIG51bGwsXG4gICAgdGhpcyAvLyBmb3IgcmVuZGVyIGZucyBnZW5lcmF0ZWQgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IHRlbXBsYXRlc1xuICApO1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fc3RhdGljX19cIiArIGluZGV4KSwgZmFsc2UpO1xuICByZXR1cm4gdHJlZVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciB2LW9uY2UuXG4gKiBFZmZlY3RpdmVseSBpdCBtZWFucyBtYXJraW5nIHRoZSBub2RlIGFzIHN0YXRpYyB3aXRoIGEgdW5pcXVlIGtleS5cbiAqL1xuZnVuY3Rpb24gbWFya09uY2UgKFxuICB0cmVlLFxuICBpbmRleCxcbiAga2V5XG4pIHtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX29uY2VfX1wiICsgaW5kZXggKyAoa2V5ID8gKFwiX1wiICsga2V5KSA6IFwiXCIpKSwgdHJ1ZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWMgKFxuICB0cmVlLFxuICBrZXksXG4gIGlzT25jZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHJlZVtpXSAmJiB0eXBlb2YgdHJlZVtpXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZVtpXSwgKGtleSArIFwiX1wiICsgaSksIGlzT25jZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hcmtTdGF0aWNOb2RlKHRyZWUsIGtleSwgaXNPbmNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljTm9kZSAobm9kZSwga2V5LCBpc09uY2UpIHtcbiAgbm9kZS5pc1N0YXRpYyA9IHRydWU7XG4gIG5vZGUua2V5ID0ga2V5O1xuICBub2RlLmlzT25jZSA9IGlzT25jZTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmRPYmplY3RMaXN0ZW5lcnMgKGRhdGEsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3Ytb24gd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvbiA9IGRhdGEub24gPSBkYXRhLm9uID8gZXh0ZW5kKHt9LCBkYXRhLm9uKSA6IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgIHZhciBleGlzdGluZyA9IG9uW2tleV07XG4gICAgICAgIHZhciBvdXJzID0gdmFsdWVba2V5XTtcbiAgICAgICAgb25ba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBvdXJzKSA6IG91cnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxuICBmbnMsIC8vIHNlZSBmbG93L3Zub2RlXG4gIHJlcyxcbiAgLy8gdGhlIGZvbGxvd2luZyBhcmUgYWRkZWQgaW4gMi42XG4gIGhhc0R5bmFtaWNLZXlzLFxuICBjb250ZW50SGFzaEtleVxuKSB7XG4gIHJlcyA9IHJlcyB8fCB7ICRzdGFibGU6ICFoYXNEeW5hbWljS2V5cyB9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzbG90ID0gZm5zW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3QpKSB7XG4gICAgICByZXNvbHZlU2NvcGVkU2xvdHMoc2xvdCwgcmVzLCBoYXNEeW5hbWljS2V5cyk7XG4gICAgfSBlbHNlIGlmIChzbG90KSB7XG4gICAgICAvLyBtYXJrZXIgZm9yIHJldmVyc2UgcHJveHlpbmcgdi1zbG90IHdpdGhvdXQgc2NvcGUgb24gdGhpcy4kc2xvdHNcbiAgICAgIGlmIChzbG90LnByb3h5KSB7XG4gICAgICAgIHNsb3QuZm4ucHJveHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVzW3Nsb3Qua2V5XSA9IHNsb3QuZm47XG4gICAgfVxuICB9XG4gIGlmIChjb250ZW50SGFzaEtleSkge1xuICAgIChyZXMpLiRrZXkgPSBjb250ZW50SGFzaEtleTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kRHluYW1pY0tleXMgKGJhc2VPYmosIHZhbHVlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciBrZXkgPSB2YWx1ZXNbaV07XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSkge1xuICAgICAgYmFzZU9ialt2YWx1ZXNbaV1dID0gdmFsdWVzW2kgKyAxXTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYga2V5ICE9PSAnJyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgIC8vIG51bGwgaXMgYSBzcGVjaWFsIHZhbHVlIGZvciBleHBsaWNpdGx5IHJlbW92aW5nIGEgYmluZGluZ1xuICAgICAgd2FybihcbiAgICAgICAgKFwiSW52YWxpZCB2YWx1ZSBmb3IgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgKGV4cGVjdGVkIHN0cmluZyBvciBudWxsKTogXCIgKyBrZXkpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYmFzZU9ialxufVxuXG4vLyBoZWxwZXIgdG8gZHluYW1pY2FsbHkgYXBwZW5kIG1vZGlmaWVyIHJ1bnRpbWUgbWFya2VycyB0byBldmVudCBuYW1lcy5cbi8vIGVuc3VyZSBvbmx5IGFwcGVuZCB3aGVuIHZhbHVlIGlzIGFscmVhZHkgc3RyaW5nLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBjYXN0XG4vLyB0byBzdHJpbmcgYW5kIGNhdXNlIHRoZSB0eXBlIGNoZWNrIHRvIG1pc3MuXG5mdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIgKHZhbHVlLCBzeW1ib2wpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzeW1ib2wgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyAodGFyZ2V0KSB7XG4gIHRhcmdldC5fbyA9IG1hcmtPbmNlO1xuICB0YXJnZXQuX24gPSB0b051bWJlcjtcbiAgdGFyZ2V0Ll9zID0gdG9TdHJpbmc7XG4gIHRhcmdldC5fbCA9IHJlbmRlckxpc3Q7XG4gIHRhcmdldC5fdCA9IHJlbmRlclNsb3Q7XG4gIHRhcmdldC5fcSA9IGxvb3NlRXF1YWw7XG4gIHRhcmdldC5faSA9IGxvb3NlSW5kZXhPZjtcbiAgdGFyZ2V0Ll9tID0gcmVuZGVyU3RhdGljO1xuICB0YXJnZXQuX2YgPSByZXNvbHZlRmlsdGVyO1xuICB0YXJnZXQuX2sgPSBjaGVja0tleUNvZGVzO1xuICB0YXJnZXQuX2IgPSBiaW5kT2JqZWN0UHJvcHM7XG4gIHRhcmdldC5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcbiAgdGFyZ2V0Ll9lID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgdGFyZ2V0Ll91ID0gcmVzb2x2ZVNjb3BlZFNsb3RzO1xuICB0YXJnZXQuX2cgPSBiaW5kT2JqZWN0TGlzdGVuZXJzO1xuICB0YXJnZXQuX2QgPSBiaW5kRHluYW1pY0tleXM7XG4gIHRhcmdldC5fcCA9IHByZXBlbmRNb2RpZmllcjtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IChcbiAgZGF0YSxcbiAgcHJvcHMsXG4gIGNoaWxkcmVuLFxuICBwYXJlbnQsXG4gIEN0b3Jcbikge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgLy8gZW5zdXJlIHRoZSBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICAvLyBnZXRzIGEgdW5pcXVlIGNvbnRleHQgLSB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdCBuYW1lZCBzbG90IGNoZWNrXG4gIHZhciBjb250ZXh0Vm07XG4gIGlmIChoYXNPd24ocGFyZW50LCAnX3VpZCcpKSB7XG4gICAgY29udGV4dFZtID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQpO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGNvbnRleHRWbS5fb3JpZ2luYWwgPSBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNvbnRleHQgdm0gcGFzc2VkIGluIGlzIGEgZnVuY3Rpb25hbCBjb250ZXh0IGFzIHdlbGwuXG4gICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGFyZSBhYmxlIHRvIGdldCBhIGhvbGQgdG8gdGhlXG4gICAgLy8gcmVhbCBjb250ZXh0IGluc3RhbmNlLlxuICAgIGNvbnRleHRWbSA9IHBhcmVudDtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xuICB9XG4gIHZhciBpc0NvbXBpbGVkID0gaXNUcnVlKG9wdGlvbnMuX2NvbXBpbGVkKTtcbiAgdmFyIG5lZWROb3JtYWxpemF0aW9uID0gIWlzQ29tcGlsZWQ7XG5cbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLmxpc3RlbmVycyA9IGRhdGEub24gfHwgZW1wdHlPYmplY3Q7XG4gIHRoaXMuaW5qZWN0aW9ucyA9IHJlc29sdmVJbmplY3Qob3B0aW9ucy5pbmplY3QsIHBhcmVudCk7XG4gIHRoaXMuc2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzJDEuJHNsb3RzKSB7XG4gICAgICBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdGhpcyQxLiRzbG90cyA9IHJlc29sdmVTbG90cyhjaGlsZHJlbiwgcGFyZW50KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMkMS4kc2xvdHNcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Njb3BlZFNsb3RzJywgKHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLnNsb3RzKCkpXG4gICAgfVxuICB9KSk7XG5cbiAgLy8gc3VwcG9ydCBmb3IgY29tcGlsZWQgZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoaXNDb21waWxlZCkge1xuICAgIC8vIGV4cG9zaW5nICRvcHRpb25zIGZvciByZW5kZXJTdGF0aWMoKVxuICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIHByZS1yZXNvbHZlIHNsb3RzIGZvciByZW5kZXJTbG90KClcbiAgICB0aGlzLiRzbG90cyA9IHRoaXMuc2xvdHMoKTtcbiAgICB0aGlzLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuJHNsb3RzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLl9zY29wZUlkKSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pO1xuICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB2bm9kZS5mblNjb3BlSWQgPSBvcHRpb25zLl9zY29wZUlkO1xuICAgICAgICB2bm9kZS5mbkNvbnRleHQgPSBwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTsgfTtcbiAgfVxufVxuXG5pbnN0YWxsUmVuZGVySGVscGVycyhGdW5jdGlvbmFsUmVuZGVyQ29udGV4dC5wcm90b3R5cGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgcHJvcHNEYXRhLFxuICBkYXRhLFxuICBjb250ZXh0Vm0sXG4gIGNoaWxkcmVuXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgcHJvcE9wdGlvbnMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoaXNEZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSB8fCBlbXB0eU9iamVjdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0RlZihkYXRhLmF0dHJzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLmF0dHJzKTsgfVxuICAgIGlmIChpc0RlZihkYXRhLnByb3BzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLnByb3BzKTsgfVxuICB9XG5cbiAgdmFyIHJlbmRlckNvbnRleHQgPSBuZXcgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQoXG4gICAgZGF0YSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBjb250ZXh0Vm0sXG4gICAgQ3RvclxuICApO1xuXG4gIHZhciB2bm9kZSA9IG9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCwgcmVuZGVyQ29udGV4dC5fYywgcmVuZGVyQ29udGV4dCk7XG5cbiAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm4gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xuICAgIHZhciByZXMgPSBuZXcgQXJyYXkodm5vZGVzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc1tpXSA9IGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGVzW2ldLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0ICh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zLCByZW5kZXJDb250ZXh0KSB7XG4gIC8vICM3ODE3IGNsb25lIG5vZGUgYmVmb3JlIHNldHRpbmcgZm5Db250ZXh0LCBvdGhlcndpc2UgaWYgdGhlIG5vZGUgaXMgcmV1c2VkXG4gIC8vIChlLmcuIGl0IHdhcyBmcm9tIGEgY2FjaGVkIG5vcm1hbCBzbG90KSB0aGUgZm5Db250ZXh0IGNhdXNlcyBuYW1lZCBzbG90c1xuICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cbiAgdmFyIGNsb25lID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gIGNsb25lLmZuQ29udGV4dCA9IGNvbnRleHRWbTtcbiAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAoY2xvbmUuZGV2dG9vbHNNZXRhID0gY2xvbmUuZGV2dG9vbHNNZXRhIHx8IHt9KS5yZW5kZXJDb250ZXh0ID0gcmVuZGVyQ29udGV4dDtcbiAgfVxuICBpZiAoZGF0YS5zbG90KSB7XG4gICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gIH1cbiAgcmV0dXJuIGNsb25lXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgdG9bY2FtZWxpemUoa2V5KV0gPSBmcm9tW2tleV07XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGlubGluZSBob29rcyB0byBiZSBpbnZva2VkIG9uIGNvbXBvbmVudCBWTm9kZXMgZHVyaW5nIHBhdGNoXG52YXIgY29tcG9uZW50Vk5vZGVIb29rcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIGlmIChcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmXG4gICAgICAhdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkICYmXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZVxuICAgICkge1xuICAgICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICAgIHZub2RlLFxuICAgICAgICBhY3RpdmVJbnN0YW5jZVxuICAgICAgKTtcbiAgICAgIGNoaWxkLiRtb3VudChoeWRyYXRpbmcgPyB2bm9kZS5lbG0gOiB1bmRlZmluZWQsIGh5ZHJhdGluZyk7XG4gICAgfVxuICB9LFxuXG4gIHByZXBhdGNoOiBmdW5jdGlvbiBwcmVwYXRjaCAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgdXBkYXRlQ2hpbGRDb21wb25lbnQoXG4gICAgICBjaGlsZCxcbiAgICAgIG9wdGlvbnMucHJvcHNEYXRhLCAvLyB1cGRhdGVkIHByb3BzXG4gICAgICBvcHRpb25zLmxpc3RlbmVycywgLy8gdXBkYXRlZCBsaXN0ZW5lcnNcbiAgICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gICAgICBvcHRpb25zLmNoaWxkcmVuIC8vIG5ldyBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQgKHZub2RlKSB7XG4gICAgdmFyIGNvbnRleHQgPSB2bm9kZS5jb250ZXh0O1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCkge1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdvblNlcnZpY2VDcmVhdGVkJyk7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ29uU2VydmljZUF0dGFjaGVkJyk7XG4gICAgICBjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnbW91bnRlZCcpO1xuICAgIH1cbiAgICBpZiAodm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgIGlmIChjb250ZXh0Ll9pc01vdW50ZWQpIHtcbiAgICAgICAgLy8gdnVlLXJvdXRlciMxMjEyXG4gICAgICAgIC8vIER1cmluZyB1cGRhdGVzLCBhIGtlcHQtYWxpdmUgY29tcG9uZW50J3MgY2hpbGQgY29tcG9uZW50cyBtYXlcbiAgICAgICAgLy8gY2hhbmdlLCBzbyBkaXJlY3RseSB3YWxraW5nIHRoZSB0cmVlIGhlcmUgbWF5IGNhbGwgYWN0aXZhdGVkIGhvb2tzXG4gICAgICAgIC8vIG9uIGluY29ycmVjdCBjaGlsZHJlbi4gSW5zdGVhZCB3ZSBwdXNoIHRoZW0gaW50byBhIHF1ZXVlIHdoaWNoIHdpbGxcbiAgICAgICAgLy8gYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSB3aG9sZSBwYXRjaCBwcm9jZXNzIGVuZGVkLlxuICAgICAgICBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcbiAgICAgIGlmICghdm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGhvb2tzVG9NZXJnZSA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFZOb2RlSG9va3MpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKFxuICBDdG9yLFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgdGFnXG4pIHtcbiAgaWYgKGlzVW5kZWYoQ3RvcikpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBiYXNlQ3RvciA9IGNvbnRleHQuJG9wdGlvbnMuX2Jhc2U7XG5cbiAgLy8gcGxhaW4gb3B0aW9ucyBvYmplY3Q6IHR1cm4gaXQgaW50byBhIGNvbnN0cnVjdG9yXG4gIGlmIChpc09iamVjdChDdG9yKSkge1xuICAgIEN0b3IgPSBiYXNlQ3Rvci5leHRlbmQoQ3Rvcik7XG4gIH1cblxuICAvLyBpZiBhdCB0aGlzIHN0YWdlIGl0J3Mgbm90IGEgY29uc3RydWN0b3Igb3IgYW4gYXN5bmMgY29tcG9uZW50IGZhY3RvcnksXG4gIC8vIHJlamVjdC5cbiAgaWYgKHR5cGVvZiBDdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oKFwiSW52YWxpZCBDb21wb25lbnQgZGVmaW5pdGlvbjogXCIgKyAoU3RyaW5nKEN0b3IpKSksIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGFzeW5jIGNvbXBvbmVudFxuICB2YXIgYXN5bmNGYWN0b3J5O1xuICBpZiAoaXNVbmRlZihDdG9yLmNpZCkpIHtcbiAgICBhc3luY0ZhY3RvcnkgPSBDdG9yO1xuICAgIEN0b3IgPSByZXNvbHZlQXN5bmNDb21wb25lbnQoYXN5bmNGYWN0b3J5LCBiYXNlQ3Rvcik7XG4gICAgaWYgKEN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgbm9kZSBmb3IgYXN5bmMgY29tcG9uZW50LCB3aGljaCBpcyByZW5kZXJlZFxuICAgICAgLy8gYXMgYSBjb21tZW50IG5vZGUgYnV0IHByZXNlcnZlcyBhbGwgdGhlIHJhdyBpbmZvcm1hdGlvbiBmb3IgdGhlIG5vZGUuXG4gICAgICAvLyB0aGUgaW5mb3JtYXRpb24gd2lsbCBiZSB1c2VkIGZvciBhc3luYyBzZXJ2ZXItcmVuZGVyaW5nIGFuZCBoeWRyYXRpb24uXG4gICAgICByZXR1cm4gY3JlYXRlQXN5bmNQbGFjZWhvbGRlcihcbiAgICAgICAgYXN5bmNGYWN0b3J5LFxuICAgICAgICBkYXRhLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdGFnXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZGF0YSA9IGRhdGEgfHwge307XG5cbiAgLy8gcmVzb2x2ZSBjb25zdHJ1Y3RvciBvcHRpb25zIGluIGNhc2UgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZCBhZnRlclxuICAvLyBjb21wb25lbnQgY29uc3RydWN0b3IgY3JlYXRpb25cbiAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yKTtcblxuICAvLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgZGF0YSBpbnRvIHByb3BzICYgZXZlbnRzXG4gIGlmIChpc0RlZihkYXRhLm1vZGVsKSkge1xuICAgIHRyYW5zZm9ybU1vZGVsKEN0b3Iub3B0aW9ucywgZGF0YSk7XG4gIH1cblxuICAvLyBleHRyYWN0IHByb3BzXG4gIHZhciBwcm9wc0RhdGEgPSBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHRhZywgY29udGV4dCk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuXG4gIC8vIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmZ1bmN0aW9uYWwpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQoQ3RvciwgcHJvcHNEYXRhLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbilcbiAgfVxuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzLCBzaW5jZSB0aGVzZSBuZWVkcyB0byBiZSB0cmVhdGVkIGFzXG4gIC8vIGNoaWxkIGNvbXBvbmVudCBsaXN0ZW5lcnMgaW5zdGVhZCBvZiBET00gbGlzdGVuZXJzXG4gIHZhciBsaXN0ZW5lcnMgPSBkYXRhLm9uO1xuICAvLyByZXBsYWNlIHdpdGggbGlzdGVuZXJzIHdpdGggLm5hdGl2ZSBtb2RpZmllclxuICAvLyBzbyBpdCBnZXRzIHByb2Nlc3NlZCBkdXJpbmcgcGFyZW50IGNvbXBvbmVudCBwYXRjaC5cbiAgZGF0YS5vbiA9IGRhdGEubmF0aXZlT247XG5cbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuYWJzdHJhY3QpKSB7XG4gICAgLy8gYWJzdHJhY3QgY29tcG9uZW50cyBkbyBub3Qga2VlcCBhbnl0aGluZ1xuICAgIC8vIG90aGVyIHRoYW4gcHJvcHMgJiBsaXN0ZW5lcnMgJiBzbG90XG5cbiAgICAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgdmFyIHNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgZGF0YSA9IHt9O1xuICAgIGlmIChzbG90KSB7XG4gICAgICBkYXRhLnNsb3QgPSBzbG90O1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbGwgY29tcG9uZW50IG1hbmFnZW1lbnQgaG9va3Mgb250byB0aGUgcGxhY2Vob2xkZXIgbm9kZVxuICBpbnN0YWxsQ29tcG9uZW50SG9va3MoZGF0YSk7XG5cbiAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgdm5vZGVcbiAgdmFyIG5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCB0YWc7XG4gIHZhciB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAoXCJ2dWUtY29tcG9uZW50LVwiICsgKEN0b3IuY2lkKSArIChuYW1lID8gKFwiLVwiICsgbmFtZSkgOiAnJykpLFxuICAgIGRhdGEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsXG4gICAgeyBDdG9yOiBDdG9yLCBwcm9wc0RhdGE6IHByb3BzRGF0YSwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHRhZzogdGFnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSxcbiAgICBhc3luY0ZhY3RvcnlcbiAgKTtcblxuICByZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSAoXG4gIHZub2RlLCAvLyB3ZSBrbm93IGl0J3MgTW91bnRlZENvbXBvbmVudFZOb2RlIGJ1dCBmbG93IGRvZXNuJ3RcbiAgcGFyZW50IC8vIGFjdGl2ZUluc3RhbmNlIGluIGxpZmVjeWNsZSBzdGF0ZVxuKSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIF9pc0NvbXBvbmVudDogdHJ1ZSxcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgIHBhcmVudDogcGFyZW50XG4gIH07XG4gIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gIGlmIChpc0RlZihpbmxpbmVUZW1wbGF0ZSkpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGlubGluZVRlbXBsYXRlLnJlbmRlcjtcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgfVxuICByZXR1cm4gbmV3IHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsQ29tcG9uZW50SG9va3MgKGRhdGEpIHtcbiAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGhvb2tzVG9NZXJnZVtpXTtcbiAgICB2YXIgZXhpc3RpbmcgPSBob29rc1trZXldO1xuICAgIHZhciB0b01lcmdlID0gY29tcG9uZW50Vk5vZGVIb29rc1trZXldO1xuICAgIGlmIChleGlzdGluZyAhPT0gdG9NZXJnZSAmJiAhKGV4aXN0aW5nICYmIGV4aXN0aW5nLl9tZXJnZWQpKSB7XG4gICAgICBob29rc1trZXldID0gZXhpc3RpbmcgPyBtZXJnZUhvb2skMSh0b01lcmdlLCBleGlzdGluZykgOiB0b01lcmdlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUhvb2skMSAoZjEsIGYyKSB7XG4gIHZhciBtZXJnZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vIGZsb3cgY29tcGxhaW5zIGFib3V0IGV4dHJhIGFyZ3Mgd2hpY2ggaXMgd2h5IHdlIHVzZSBhbnlcbiAgICBmMShhLCBiKTtcbiAgICBmMihhLCBiKTtcbiAgfTtcbiAgbWVyZ2VkLl9tZXJnZWQgPSB0cnVlO1xuICByZXR1cm4gbWVyZ2VkXG59XG5cbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbi8vIHByb3AgYW5kIGV2ZW50IGhhbmRsZXIgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gIHZhciBldmVudCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgOyhkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pKVtwcm9wXSA9IGRhdGEubW9kZWwudmFsdWU7XG4gIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gIHZhciBleGlzdGluZyA9IG9uW2V2ZW50XTtcbiAgdmFyIGNhbGxiYWNrID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcbiAgaWYgKGlzRGVmKGV4aXN0aW5nKSkge1xuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICAgID8gZXhpc3RpbmcuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xXG4gICAgICAgIDogZXhpc3RpbmcgIT09IGNhbGxiYWNrXG4gICAgKSB7XG4gICAgICBvbltldmVudF0gPSBbY2FsbGJhY2tdLmNvbmNhdChleGlzdGluZyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9uW2V2ZW50XSA9IGNhbGxiYWNrO1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgU0lNUExFX05PUk1BTElaRSA9IDE7XG52YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XG5cbi8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhIG1vcmUgZmxleGlibGUgaW50ZXJmYWNlXG4vLyB3aXRob3V0IGdldHRpbmcgeWVsbGVkIGF0IGJ5IGZsb3dcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZSxcbiAgYWx3YXlzTm9ybWFsaXplXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNQcmltaXRpdmUoZGF0YSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgIGNoaWxkcmVuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChpc1RydWUoYWx3YXlzTm9ybWFsaXplKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gQUxXQVlTX05PUk1BTElaRTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQoY29udGV4dCwgdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGVcbikge1xuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoKGRhdGEpLl9fb2JfXykpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIkF2b2lkIHVzaW5nIG9ic2VydmVkIGRhdGEgb2JqZWN0IGFzIHZub2RlIGRhdGE6IFwiICsgKEpTT04uc3RyaW5naWZ5KGRhdGEpKSArIFwiXFxuXCIgK1xuICAgICAgJ0Fsd2F5cyBjcmVhdGUgZnJlc2ggdm5vZGUgZGF0YSBvYmplY3RzIGluIGVhY2ggcmVuZGVyIScsXG4gICAgICBjb250ZXh0XG4gICAgKTtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gb2JqZWN0IHN5bnRheCBpbiB2LWJpbmRcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XG4gICAgdGFnID0gZGF0YS5pcztcbiAgfVxuICBpZiAoIXRhZykge1xuICAgIC8vIGluIGNhc2Ugb2YgY29tcG9uZW50IDppcyBzZXQgdG8gZmFsc3kgdmFsdWVcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1wcmltaXRpdmUga2V5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSlcbiAgKSB7XG4gICAge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHVzaW5nIG5vbi1wcmltaXRpdmUgdmFsdWUgYXMga2V5LCAnICtcbiAgICAgICAgJ3VzZSBzdHJpbmcvbnVtYmVyIHZhbHVlIGluc3RlYWQuJyxcbiAgICAgICAgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gc3VwcG9ydCBzaW5nbGUgZnVuY3Rpb24gY2hpbGRyZW4gYXMgZGVmYXVsdCBzY29wZWQgc2xvdFxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiZcbiAgICB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcbiAgICBjaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBTSU1QTEVfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH1cbiAgdmFyIHZub2RlLCBucztcbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIEN0b3I7XG4gICAgbnMgPSAoY29udGV4dC4kdm5vZGUgJiYgY29udGV4dC4kdm5vZGUubnMpIHx8IGNvbmZpZy5nZXRUYWdOYW1lc3BhY2UodGFnKTtcbiAgICBpZiAoY29uZmlnLmlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgICAgLy8gcGxhdGZvcm0gYnVpbHQtaW4gZWxlbWVudHNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEubmF0aXZlT24pKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiVGhlIC5uYXRpdmUgbW9kaWZpZXIgZm9yIHYtb24gaXMgb25seSB2YWxpZCBvbiBjb21wb25lbnRzIGJ1dCBpdCB3YXMgdXNlZCBvbiA8XCIgKyB0YWcgKyBcIj4uXCIpLFxuICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICBjb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUodGFnKSwgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoKCFkYXRhIHx8ICFkYXRhLnByZSkgJiYgaXNEZWYoQ3RvciA9IHJlc29sdmVBc3NldChjb250ZXh0LiRvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykpKSB7XG4gICAgICAvLyBjb21wb25lbnRcbiAgICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KEN0b3IsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuLCB0YWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1bmtub3duIG9yIHVubGlzdGVkIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAgICAgIC8vIGNoZWNrIGF0IHJ1bnRpbWUgYmVjYXVzZSBpdCBtYXkgZ2V0IGFzc2lnbmVkIGEgbmFtZXNwYWNlIHdoZW4gaXRzXG4gICAgICAvLyBwYXJlbnQgbm9ybWFsaXplcyBjaGlsZHJlblxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIHRhZywgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBkaXJlY3QgY29tcG9uZW50IG9wdGlvbnMgLyBjb25zdHJ1Y3RvclxuICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KHRhZywgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2UgaWYgKGlzRGVmKHZub2RlKSkge1xuICAgIGlmIChpc0RlZihucykpIHsgYXBwbHlOUyh2bm9kZSwgbnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7IHJlZ2lzdGVyRGVlcEJpbmRpbmdzKGRhdGEpOyB9XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TlMgKHZub2RlLCBucywgZm9yY2UpIHtcbiAgdm5vZGUubnMgPSBucztcbiAgaWYgKHZub2RlLnRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgLy8gdXNlIGRlZmF1bHQgbmFtZXNwYWNlIGluc2lkZSBmb3JlaWduT2JqZWN0XG4gICAgbnMgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2UgPSB0cnVlO1xuICB9XG4gIGlmIChpc0RlZih2bm9kZS5jaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoY2hpbGQudGFnKSAmJiAoXG4gICAgICAgIGlzVW5kZWYoY2hpbGQubnMpIHx8IChpc1RydWUoZm9yY2UpICYmIGNoaWxkLnRhZyAhPT0gJ3N2ZycpKSkge1xuICAgICAgICBhcHBseU5TKGNoaWxkLCBucywgZm9yY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyByZWYgIzUzMThcbi8vIG5lY2Vzc2FyeSB0byBlbnN1cmUgcGFyZW50IHJlLXJlbmRlciB3aGVuIGRlZXAgYmluZGluZ3MgbGlrZSA6c3R5bGUgYW5kXG4vLyA6Y2xhc3MgYXJlIHVzZWQgb24gc2xvdCBub2Rlc1xuZnVuY3Rpb24gcmVnaXN0ZXJEZWVwQmluZGluZ3MgKGRhdGEpIHtcbiAgaWYgKGlzT2JqZWN0KGRhdGEuc3R5bGUpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5zdHlsZSk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KGRhdGEuY2xhc3MpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5jbGFzcyk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRSZW5kZXIgKHZtKSB7XG4gIHZtLl92bm9kZSA9IG51bGw7IC8vIHRoZSByb290IG9mIHRoZSBjaGlsZCB0cmVlXG4gIHZtLl9zdGF0aWNUcmVlcyA9IG51bGw7IC8vIHYtb25jZSBjYWNoZWQgdHJlZXNcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgdmFyIHBhcmVudFZub2RlID0gdm0uJHZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7IC8vIHRoZSBwbGFjZWhvbGRlciBub2RlIGluIHBhcmVudCB0cmVlXG4gIHZhciByZW5kZXJDb250ZXh0ID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuY29udGV4dDtcbiAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLCByZW5kZXJDb250ZXh0KTtcbiAgdm0uJHNjb3BlZFNsb3RzID0gZW1wdHlPYmplY3Q7XG4gIC8vIGJpbmQgdGhlIGNyZWF0ZUVsZW1lbnQgZm4gdG8gdGhpcyBpbnN0YW5jZVxuICAvLyBzbyB0aGF0IHdlIGdldCBwcm9wZXIgcmVuZGVyIGNvbnRleHQgaW5zaWRlIGl0LlxuICAvLyBhcmdzIG9yZGVyOiB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSwgYWx3YXlzTm9ybWFsaXplXG4gIC8vIGludGVybmFsIHZlcnNpb24gaXMgdXNlZCBieSByZW5kZXIgZnVuY3Rpb25zIGNvbXBpbGVkIGZyb20gdGVtcGxhdGVzXG4gIHZtLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIGZhbHNlKTsgfTtcbiAgLy8gbm9ybWFsaXphdGlvbiBpcyBhbHdheXMgYXBwbGllZCBmb3IgdGhlIHB1YmxpYyB2ZXJzaW9uLCB1c2VkIGluXG4gIC8vIHVzZXItd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zLlxuICB2bS4kY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCB0cnVlKTsgfTtcblxuICAvLyAkYXR0cnMgJiAkbGlzdGVuZXJzIGFyZSBleHBvc2VkIGZvciBlYXNpZXIgSE9DIGNyZWF0aW9uLlxuICAvLyB0aGV5IG5lZWQgdG8gYmUgcmVhY3RpdmUgc28gdGhhdCBIT0NzIHVzaW5nIHRoZW0gYXJlIGFsd2F5cyB1cGRhdGVkXG4gIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkYXR0cnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRsaXN0ZW5lcnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVyTWl4aW4gKFZ1ZSkge1xuICAvLyBpbnN0YWxsIHJ1bnRpbWUgY29udmVuaWVuY2UgaGVscGVyc1xuICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBuZXh0VGljayhmbiwgdGhpcylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XG4gICAgdmFyIHJlbmRlciA9IHJlZi5yZW5kZXI7XG4gICAgdmFyIF9wYXJlbnRWbm9kZSA9IHJlZi5fcGFyZW50Vm5vZGU7XG5cbiAgICBpZiAoX3BhcmVudFZub2RlKSB7XG4gICAgICB2bS4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgX3BhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHZtLiRzbG90cyxcbiAgICAgICAgdm0uJHNjb3BlZFNsb3RzXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHNldCBwYXJlbnQgdm5vZGUuIHRoaXMgYWxsb3dzIHJlbmRlciBmdW5jdGlvbnMgdG8gaGF2ZSBhY2Nlc3NcbiAgICAvLyB0byB0aGUgZGF0YSBvbiB0aGUgcGxhY2Vob2xkZXIgbm9kZS5cbiAgICB2bS4kdm5vZGUgPSBfcGFyZW50Vm5vZGU7XG4gICAgLy8gcmVuZGVyIHNlbGZcbiAgICB2YXIgdm5vZGU7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRoZXJlJ3Mgbm8gbmVlZCB0byBtYWludGFpbiBhIHN0YWNrIGJlY2F1c2UgYWxsIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gc2VwYXJhdGVseSBmcm9tIG9uZSBhbm90aGVyLiBOZXN0ZWQgY29tcG9uZW50J3MgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyB3aGVuIHBhcmVudCBjb21wb25lbnQgaXMgcGF0Y2hlZC5cbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IHZtO1xuICAgICAgdm5vZGUgPSByZW5kZXIuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJcIik7XG4gICAgICAvLyByZXR1cm4gZXJyb3IgcmVuZGVyIHJlc3VsdCxcbiAgICAgIC8vIG9yIHByZXZpb3VzIHZub2RlIHRvIHByZXZlbnQgcmVuZGVyIGVycm9yIGNhdXNpbmcgYmxhbmsgY29tcG9uZW50XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCwgZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJFcnJvclwiKTtcbiAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICAgIC8vIGlmIHRoZSByZXR1cm5lZCBhcnJheSBjb250YWlucyBvbmx5IGEgc2luZ2xlIG5vZGUsIGFsbG93IGl0XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpICYmIHZub2RlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdm5vZGUgPSB2bm9kZVswXTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgIGlmICghKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArXG4gICAgICAgICAgJ3Nob3VsZCByZXR1cm4gYSBzaW5nbGUgcm9vdCBub2RlLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICAgIH1cbiAgICAvLyBzZXQgcGFyZW50XG4gICAgdm5vZGUucGFyZW50ID0gX3BhcmVudFZub2RlO1xuICAgIHJldHVybiB2bm9kZVxuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW5zdXJlQ3RvciAoY29tcCwgYmFzZSkge1xuICBpZiAoXG4gICAgY29tcC5fX2VzTW9kdWxlIHx8XG4gICAgKGhhc1N5bWJvbCAmJiBjb21wW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdNb2R1bGUnKVxuICApIHtcbiAgICBjb21wID0gY29tcC5kZWZhdWx0O1xuICB9XG4gIHJldHVybiBpc09iamVjdChjb21wKVxuICAgID8gYmFzZS5leHRlbmQoY29tcClcbiAgICA6IGNvbXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlciAoXG4gIGZhY3RvcnksXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICB2YXIgbm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgbm9kZS5hc3luY0ZhY3RvcnkgPSBmYWN0b3J5O1xuICBub2RlLmFzeW5jTWV0YSA9IHsgZGF0YTogZGF0YSwgY29udGV4dDogY29udGV4dCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0YWc6IHRhZyB9O1xuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxuICBmYWN0b3J5LFxuICBiYXNlQ3RvclxuKSB7XG4gIGlmIChpc1RydWUoZmFjdG9yeS5lcnJvcikgJiYgaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkuZXJyb3JDb21wXG4gIH1cblxuICBpZiAoaXNEZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5yZXNvbHZlZFxuICB9XG5cbiAgdmFyIG93bmVyID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuICBpZiAob3duZXIgJiYgaXNEZWYoZmFjdG9yeS5vd25lcnMpICYmIGZhY3Rvcnkub3duZXJzLmluZGV4T2Yob3duZXIpID09PSAtMSkge1xuICAgIC8vIGFscmVhZHkgcGVuZGluZ1xuICAgIGZhY3Rvcnkub3duZXJzLnB1c2gob3duZXIpO1xuICB9XG5cbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmxvYWRpbmcpICYmIGlzRGVmKGZhY3RvcnkubG9hZGluZ0NvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgfVxuXG4gIGlmIChvd25lciAmJiAhaXNEZWYoZmFjdG9yeS5vd25lcnMpKSB7XG4gICAgdmFyIG93bmVycyA9IGZhY3Rvcnkub3duZXJzID0gW293bmVyXTtcbiAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgdmFyIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgdmFyIHRpbWVyVGltZW91dCA9IG51bGxcblxuICAgIDsob3duZXIpLiRvbignaG9vazpkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmUob3duZXJzLCBvd25lcik7IH0pO1xuXG4gICAgdmFyIGZvcmNlUmVuZGVyID0gZnVuY3Rpb24gKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvd25lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIChvd25lcnNbaV0pLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgICBpZiAodGltZXJMb2FkaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTG9hZGluZyk7XG4gICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXJUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlcykge1xuICAgICAgLy8gY2FjaGUgcmVzb2x2ZWRcbiAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSBlbnN1cmVDdG9yKHJlcywgYmFzZUN0b3IpO1xuICAgICAgLy8gaW52b2tlIGNhbGxiYWNrcyBvbmx5IGlmIHRoaXMgaXMgbm90IGEgc3luY2hyb25vdXMgcmVzb2x2ZVxuICAgICAgLy8gKGFzeW5jIHJlc29sdmVzIGFyZSBzaGltbWVkIGFzIHN5bmNocm9ub3VzIGR1cmluZyBTU1IpXG4gICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6IFwiICsgKFN0cmluZyhmYWN0b3J5KSkgK1xuICAgICAgICAocmVhc29uID8gKFwiXFxuUmVhc29uOiBcIiArIHJlYXNvbikgOiAnJylcbiAgICAgICk7XG4gICAgICBpZiAoaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgICAgIGZhY3RvcnkuZXJyb3IgPSB0cnVlO1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZXMgPSBmYWN0b3J5KHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIC8vICgpID0+IFByb21pc2VcbiAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXMuY29tcG9uZW50KSkge1xuICAgICAgICByZXMuY29tcG9uZW50LnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgICBpZiAoaXNEZWYocmVzLmVycm9yKSkge1xuICAgICAgICAgIGZhY3RvcnkuZXJyb3JDb21wID0gZW5zdXJlQ3RvcihyZXMuZXJyb3IsIGJhc2VDdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMubG9hZGluZykpIHtcbiAgICAgICAgICBmYWN0b3J5LmxvYWRpbmdDb21wID0gZW5zdXJlQ3RvcihyZXMubG9hZGluZywgYmFzZUN0b3IpO1xuICAgICAgICAgIGlmIChyZXMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSAmJiBpc1VuZGVmKGZhY3RvcnkuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlcy5kZWxheSB8fCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMudGltZW91dCkpIHtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgPyAoXCJ0aW1lb3V0IChcIiArIChyZXMudGltZW91dCkgKyBcIm1zKVwiKVxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3luYyA9IGZhbHNlO1xuICAgIC8vIHJldHVybiBpbiBjYXNlIHJlc29sdmVkIHN5bmNocm9ub3VzbHlcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nXG4gICAgICA/IGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgICAgIDogZmFjdG9yeS5yZXNvbHZlZFxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0FzeW5jUGxhY2Vob2xkZXIgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuaXNDb21tZW50ICYmIG5vZGUuYXN5bmNGYWN0b3J5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBnZXRGaXJzdENvbXBvbmVudENoaWxkIChjaGlsZHJlbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGMpICYmIChpc0RlZihjLmNvbXBvbmVudE9wdGlvbnMpIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKSkpIHtcbiAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXZlbnRzICh2bSkge1xuICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdm0uX2hhc0hvb2tFdmVudCA9IGZhbHNlO1xuICAvLyBpbml0IHBhcmVudCBhdHRhY2hlZCBldmVudHNcbiAgdmFyIGxpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycyk7XG4gIH1cbn1cblxudmFyIHRhcmdldDtcblxuZnVuY3Rpb24gYWRkIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvbihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMSAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb2ZmKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyIChldmVudCwgZm4pIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQ7XG4gIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgX3RhcmdldC4kb2ZmKGV2ZW50LCBvbmNlSGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyAoXG4gIHZtLFxuICBsaXN0ZW5lcnMsXG4gIG9sZExpc3RlbmVyc1xuKSB7XG4gIHRhcmdldCA9IHZtO1xuICB1cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMgfHwge30sIGFkZCwgcmVtb3ZlJDEsIGNyZWF0ZU9uY2VIYW5kbGVyLCB2bSk7XG4gIHRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXZlbnRzTWl4aW4gKFZ1ZSkge1xuICB2YXIgaG9va1JFID0gL15ob29rOi87XG4gIFZ1ZS5wcm90b3R5cGUuJG9uID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2bS4kb24oZXZlbnRbaV0sIGZuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgICAvLyBvcHRpbWl6ZSBob29rOmV2ZW50IGNvc3QgYnkgdXNpbmcgYSBib29sZWFuIGZsYWcgbWFya2VkIGF0IHJlZ2lzdHJhdGlvblxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGhhc2ggbG9va3VwXG4gICAgICBpZiAoaG9va1JFLnRlc3QoZXZlbnQpKSB7XG4gICAgICAgIHZtLl9oYXNIb29rRXZlbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gb24gKCkge1xuICAgICAgdm0uJG9mZihldmVudCwgb24pO1xuICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIG9uLmZuID0gZm47XG4gICAgdm0uJG9uKGV2ZW50LCBvbik7XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYWxsXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBhcnJheSBvZiBldmVudHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkkMSA8IGw7IGkkMSsrKSB7XG4gICAgICAgIHZtLiRvZmYoZXZlbnRbaSQxXSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghY2JzKSB7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgICB2YXIgY2I7XG4gICAgdmFyIGkgPSBjYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNiID0gY2JzW2ldO1xuICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBsb3dlckNhc2VFdmVudCA9IGV2ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAobG93ZXJDYXNlRXZlbnQgIT09IGV2ZW50ICYmIHZtLl9ldmVudHNbbG93ZXJDYXNlRXZlbnRdKSB7XG4gICAgICAgIHRpcChcbiAgICAgICAgICBcIkV2ZW50IFxcXCJcIiArIGxvd2VyQ2FzZUV2ZW50ICsgXCJcXFwiIGlzIGVtaXR0ZWQgaW4gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIgYnV0IHRoZSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWQgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSBcIiArXG4gICAgICAgICAgXCJ2LW9uIHRvIGxpc3RlbiB0byBjYW1lbENhc2UgZXZlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIHRlbXBsYXRlcy4gXCIgK1xuICAgICAgICAgIFwiWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgKGh5cGhlbmF0ZShldmVudCkpICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmIChjYnMpIHtcbiAgICAgIGNicyA9IGNicy5sZW5ndGggPiAxID8gdG9BcnJheShjYnMpIDogY2JzO1xuICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgaW5mbyA9IFwiZXZlbnQgaGFuZGxlciBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjYnNbaV0sIHZtLCBhcmdzLCB2bSwgaW5mbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIGFjdGl2ZUluc3RhbmNlID0gbnVsbDtcbnZhciBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0QWN0aXZlSW5zdGFuY2Uodm0pIHtcbiAgdmFyIHByZXZBY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlO1xuICBhY3RpdmVJbnN0YW5jZSA9IHZtO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGFjdGl2ZUluc3RhbmNlID0gcHJldkFjdGl2ZUluc3RhbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRMaWZlY3ljbGUgKHZtKSB7XG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG5cbiAgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcbiAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBpZiAocGFyZW50ICYmICFvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5hYnN0cmFjdCAmJiBwYXJlbnQuJHBhcmVudCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgfVxuICAgIHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gIH1cblxuICB2bS4kcGFyZW50ID0gcGFyZW50O1xuICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xuXG4gIHZtLiRjaGlsZHJlbiA9IFtdO1xuICB2bS4kcmVmcyA9IHt9O1xuXG4gIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgdm0uX2luYWN0aXZlID0gbnVsbDtcbiAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgdm0uX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciBwcmV2RWwgPSB2bS4kZWw7XG4gICAgdmFyIHByZXZWbm9kZSA9IHZtLl92bm9kZTtcbiAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2Uodm0pO1xuICAgIHZtLl92bm9kZSA9IHZub2RlO1xuICAgIC8vIFZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fIGlzIGluamVjdGVkIGluIGVudHJ5IHBvaW50c1xuICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgIGlmICghcHJldlZub2RlKSB7XG4gICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZywgZmFsc2UgLyogcmVtb3ZlT25seSAqLyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZXNcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgcmVzdG9yZUFjdGl2ZUluc3RhbmNlKCk7XG4gICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IHZtO1xuICAgIH1cbiAgICAvLyBpZiBwYXJlbnQgaXMgYW4gSE9DLCB1cGRhdGUgaXRzICRlbCBhcyB3ZWxsXG4gICAgaWYgKHZtLiR2bm9kZSAmJiB2bS4kcGFyZW50ICYmIHZtLiR2bm9kZSA9PT0gdm0uJHBhcmVudC5fdm5vZGUpIHtcbiAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgIH1cbiAgICAvLyB1cGRhdGVkIGhvb2sgaXMgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIgdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gYXJlXG4gICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZURlc3Ryb3knKTtcbiAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnRcbiAgICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICBpZiAocGFyZW50ICYmICFwYXJlbnQuX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXZtLiRvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgICByZW1vdmUocGFyZW50LiRjaGlsZHJlbiwgdm0pO1xuICAgIH1cbiAgICAvLyB0ZWFyZG93biB3YXRjaGVyc1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gICAgdmFyIGkgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZtLl93YXRjaGVyc1tpXS50ZWFyZG93bigpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgcmVmZXJlbmNlIGZyb20gZGF0YSBvYlxuICAgIC8vIGZyb3plbiBvYmplY3QgbWF5IG5vdCBoYXZlIG9ic2VydmVyLlxuICAgIGlmICh2bS5fZGF0YS5fX29iX18pIHtcbiAgICAgIHZtLl9kYXRhLl9fb2JfXy52bUNvdW50LS07XG4gICAgfVxuICAgIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICAgIHZtLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gaW52b2tlIGRlc3Ryb3kgaG9va3Mgb24gY3VycmVudCByZW5kZXJlZCB0cmVlXG4gICAgdm0uX19wYXRjaF9fKHZtLl92bm9kZSwgbnVsbCk7XG4gICAgLy8gZmlyZSBkZXN0cm95ZWQgaG9va1xuICAgIGNhbGxIb29rKHZtLCAnZGVzdHJveWVkJyk7XG4gICAgLy8gdHVybiBvZmYgYWxsIGluc3RhbmNlIGxpc3RlbmVycy5cbiAgICB2bS4kb2ZmKCk7XG4gICAgLy8gcmVtb3ZlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICAvLyByZWxlYXNlIGNpcmN1bGFyIHJlZmVyZW5jZSAoIzY3NTkpXG4gICAgaWYgKHZtLiR2bm9kZSkge1xuICAgICAgdm0uJHZub2RlLnBhcmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDaGlsZENvbXBvbmVudCAoXG4gIHZtLFxuICBwcm9wc0RhdGEsXG4gIGxpc3RlbmVycyxcbiAgcGFyZW50Vm5vZGUsXG4gIHJlbmRlckNoaWxkcmVuXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgY29tcG9uZW50IGhhcyBzbG90IGNoaWxkcmVuXG4gIC8vIHdlIG5lZWQgdG8gZG8gdGhpcyBiZWZvcmUgb3ZlcndyaXRpbmcgJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLlxuXG4gIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBkeW5hbWljIHNjb3BlZFNsb3RzIChoYW5kLXdyaXR0ZW4gb3IgY29tcGlsZWQgYnV0IHdpdGhcbiAgLy8gZHluYW1pYyBzbG90IG5hbWVzKS4gU3RhdGljIHNjb3BlZCBzbG90cyBjb21waWxlZCBmcm9tIHRlbXBsYXRlIGhhcyB0aGVcbiAgLy8gXCIkc3RhYmxlXCIgbWFya2VyLlxuICB2YXIgbmV3U2NvcGVkU2xvdHMgPSBwYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzO1xuICB2YXIgb2xkU2NvcGVkU2xvdHMgPSB2bS4kc2NvcGVkU2xvdHM7XG4gIHZhciBoYXNEeW5hbWljU2NvcGVkU2xvdCA9ICEhKFxuICAgIChuZXdTY29wZWRTbG90cyAmJiAhbmV3U2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAob2xkU2NvcGVkU2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmICFvbGRTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChuZXdTY29wZWRTbG90cyAmJiB2bS4kc2NvcGVkU2xvdHMuJGtleSAhPT0gbmV3U2NvcGVkU2xvdHMuJGtleSlcbiAgKTtcblxuICAvLyBBbnkgc3RhdGljIHNsb3QgY2hpbGRyZW4gZnJvbSB0aGUgcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgZHVyaW5nIHBhcmVudCdzXG4gIC8vIHVwZGF0ZS4gRHluYW1pYyBzY29wZWQgc2xvdHMgbWF5IGFsc28gaGF2ZSBjaGFuZ2VkLiBJbiBzdWNoIGNhc2VzLCBhIGZvcmNlZFxuICAvLyB1cGRhdGUgaXMgbmVjZXNzYXJ5IHRvIGVuc3VyZSBjb3JyZWN0bmVzcy5cbiAgdmFyIG5lZWRzRm9yY2VVcGRhdGUgPSAhIShcbiAgICByZW5kZXJDaGlsZHJlbiB8fCAgICAgICAgICAgICAgIC8vIGhhcyBuZXcgc3RhdGljIHNsb3RzXG4gICAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuIHx8ICAvLyBoYXMgb2xkIHN0YXRpYyBzbG90c1xuICAgIGhhc0R5bmFtaWNTY29wZWRTbG90XG4gICk7XG5cbiAgdm0uJG9wdGlvbnMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XG4gIHZtLiR2bm9kZSA9IHBhcmVudFZub2RlOyAvLyB1cGRhdGUgdm0ncyBwbGFjZWhvbGRlciBub2RlIHdpdGhvdXQgcmUtcmVuZGVyXG5cbiAgaWYgKHZtLl92bm9kZSkgeyAvLyB1cGRhdGUgY2hpbGQgdHJlZSdzIHBhcmVudFxuICAgIHZtLl92bm9kZS5wYXJlbnQgPSBwYXJlbnRWbm9kZTtcbiAgfVxuICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gPSByZW5kZXJDaGlsZHJlbjtcblxuICAvLyB1cGRhdGUgJGF0dHJzIGFuZCAkbGlzdGVuZXJzIGhhc2hcbiAgLy8gdGhlc2UgYXJlIGFsc28gcmVhY3RpdmUgc28gdGhleSBtYXkgdHJpZ2dlciBjaGlsZCB1cGRhdGUgaWYgdGhlIGNoaWxkXG4gIC8vIHVzZWQgdGhlbSBkdXJpbmcgcmVuZGVyXG4gIHZtLiRhdHRycyA9IHBhcmVudFZub2RlLmRhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZtLiRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG5cbiAgLy8gdXBkYXRlIHByb3BzXG4gIGlmIChwcm9wc0RhdGEgJiYgdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIHZhciBwcm9wcyA9IHZtLl9wcm9wcztcbiAgICB2YXIgcHJvcEtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHByb3BLZXlzW2ldO1xuICAgICAgdmFyIHByb3BPcHRpb25zID0gdm0uJG9wdGlvbnMucHJvcHM7IC8vIHd0ZiBmbG93P1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICB9XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIC8vIGtlZXAgYSBjb3B5IG9mIHJhdyBwcm9wc0RhdGFcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgPSBwcm9wc0RhdGE7XG4gIH1cblxuICAvLyBmaXhlZCBieSB4eHh4eHggdXBkYXRlIHByb3BlcnRpZXMobXAgcnVudGltZSlcbiAgdm0uXyR1cGRhdGVQcm9wZXJ0aWVzICYmIHZtLl8kdXBkYXRlUHJvcGVydGllcyh2bSk7XG5cbiAgLy8gdXBkYXRlIGxpc3RlbmVyc1xuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZhciBvbGRMaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycywgb2xkTGlzdGVuZXJzKTtcblxuICAvLyByZXNvbHZlIHNsb3RzICsgZm9yY2UgdXBkYXRlIGlmIGhhcyBjaGlsZHJlblxuICBpZiAobmVlZHNGb3JjZVVwZGF0ZSkge1xuICAgIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhyZW5kZXJDaGlsZHJlbiwgcGFyZW50Vm5vZGUuY29udGV4dCk7XG4gICAgdm0uJGZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSW5JbmFjdGl2ZVRyZWUgKHZtKSB7XG4gIHdoaWxlICh2bSAmJiAodm0gPSB2bS4kcGFyZW50KSkge1xuICAgIGlmICh2bS5faW5hY3RpdmUpIHsgcmV0dXJuIHRydWUgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSBlbHNlIGlmICh2bS5fZGlyZWN0SW5hY3RpdmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodm0uX2luYWN0aXZlIHx8IHZtLl9pbmFjdGl2ZSA9PT0gbnVsbCkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSB0cnVlO1xuICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIGlmICghdm0uX2luYWN0aXZlKSB7XG4gICAgdm0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnZGVhY3RpdmF0ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsSG9vayAodm0sIGhvb2spIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGxpZmVjeWNsZSBob29rc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICB2YXIgaW5mbyA9IGhvb2sgKyBcIiBob29rXCI7XG4gIGlmIChoYW5kbGVycykge1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhoYW5kbGVyc1tpXSwgdm0sIG51bGwsIHZtLCBpbmZvKTtcbiAgICB9XG4gIH1cbiAgaWYgKHZtLl9oYXNIb29rRXZlbnQpIHtcbiAgICB2bS4kZW1pdCgnaG9vazonICsgaG9vayk7XG4gIH1cbiAgcG9wVGFyZ2V0KCk7XG59XG5cbi8qICAqL1xuXG52YXIgTUFYX1VQREFURV9DT1VOVCA9IDEwMDtcblxudmFyIHF1ZXVlID0gW107XG52YXIgYWN0aXZhdGVkQ2hpbGRyZW4gPSBbXTtcbnZhciBoYXMgPSB7fTtcbnZhciBjaXJjdWxhciA9IHt9O1xudmFyIHdhaXRpbmcgPSBmYWxzZTtcbnZhciBmbHVzaGluZyA9IGZhbHNlO1xudmFyIGluZGV4ID0gMDtcblxuLyoqXG4gKiBSZXNldCB0aGUgc2NoZWR1bGVyJ3Mgc3RhdGUuXG4gKi9cbmZ1bmN0aW9uIHJlc2V0U2NoZWR1bGVyU3RhdGUgKCkge1xuICBpbmRleCA9IHF1ZXVlLmxlbmd0aCA9IGFjdGl2YXRlZENoaWxkcmVuLmxlbmd0aCA9IDA7XG4gIGhhcyA9IHt9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNpcmN1bGFyID0ge307XG4gIH1cbiAgd2FpdGluZyA9IGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSAjNjU2NiByZXF1aXJlcyBzYXZpbmcgdGhlIHRpbWVzdGFtcCB3aGVuIGV2ZW50IGxpc3RlbmVycyBhcmVcbi8vIGF0dGFjaGVkLiBIb3dldmVyLCBjYWxsaW5nIHBlcmZvcm1hbmNlLm5vdygpIGhhcyBhIHBlcmYgb3ZlcmhlYWQgZXNwZWNpYWxseVxuLy8gaWYgdGhlIHBhZ2UgaGFzIHRob3VzYW5kcyBvZiBldmVudCBsaXN0ZW5lcnMuIEluc3RlYWQsIHdlIHRha2UgYSB0aW1lc3RhbXBcbi8vIGV2ZXJ5IHRpbWUgdGhlIHNjaGVkdWxlciBmbHVzaGVzIGFuZCB1c2UgdGhhdCBmb3IgYWxsIGV2ZW50IGxpc3RlbmVyc1xuLy8gYXR0YWNoZWQgZHVyaW5nIHRoYXQgZmx1c2guXG52YXIgY3VycmVudEZsdXNoVGltZXN0YW1wID0gMDtcblxuLy8gQXN5bmMgZWRnZSBjYXNlIGZpeCByZXF1aXJlcyBzdG9yaW5nIGFuIGV2ZW50IGxpc3RlbmVyJ3MgYXR0YWNoIHRpbWVzdGFtcC5cbnZhciBnZXROb3cgPSBEYXRlLm5vdztcblxuLy8gRGV0ZXJtaW5lIHdoYXQgZXZlbnQgdGltZXN0YW1wIHRoZSBicm93c2VyIGlzIHVzaW5nLiBBbm5veWluZ2x5LCB0aGVcbi8vIHRpbWVzdGFtcCBjYW4gZWl0aGVyIGJlIGhpLXJlcyAocmVsYXRpdmUgdG8gcGFnZSBsb2FkKSBvciBsb3ctcmVzXG4vLyAocmVsYXRpdmUgdG8gVU5JWCBlcG9jaCksIHNvIGluIG9yZGVyIHRvIGNvbXBhcmUgdGltZSB3ZSBoYXZlIHRvIHVzZSB0aGVcbi8vIHNhbWUgdGltZXN0YW1wIHR5cGUgd2hlbiBzYXZpbmcgdGhlIGZsdXNoIHRpbWVzdGFtcC5cbi8vIEFsbCBJRSB2ZXJzaW9ucyB1c2UgbG93LXJlcyBldmVudCB0aW1lc3RhbXBzLCBhbmQgaGF2ZSBwcm9ibGVtYXRpYyBjbG9ja1xuLy8gaW1wbGVtZW50YXRpb25zICgjOTYzMilcbmlmIChpbkJyb3dzZXIgJiYgIWlzSUUpIHtcbiAgdmFyIHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICBpZiAoXG4gICAgcGVyZm9ybWFuY2UgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nICYmXG4gICAgZ2V0Tm93KCkgPiBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKS50aW1lU3RhbXBcbiAgKSB7XG4gICAgLy8gaWYgdGhlIGV2ZW50IHRpbWVzdGFtcCwgYWx0aG91Z2ggZXZhbHVhdGVkIEFGVEVSIHRoZSBEYXRlLm5vdygpLCBpc1xuICAgIC8vIHNtYWxsZXIgdGhhbiBpdCwgaXQgbWVhbnMgdGhlIGV2ZW50IGlzIHVzaW5nIGEgaGktcmVzIHRpbWVzdGFtcCxcbiAgICAvLyBhbmQgd2UgbmVlZCB0byB1c2UgdGhlIGhpLXJlcyB2ZXJzaW9uIGZvciBldmVudCBsaXN0ZW5lciB0aW1lc3RhbXBzIGFzXG4gICAgLy8gd2VsbC5cbiAgICBnZXROb3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTsgfTtcbiAgfVxufVxuXG4vKipcbiAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICovXG5mdW5jdGlvbiBmbHVzaFNjaGVkdWxlclF1ZXVlICgpIHtcbiAgY3VycmVudEZsdXNoVGltZXN0YW1wID0gZ2V0Tm93KCk7XG4gIGZsdXNoaW5nID0gdHJ1ZTtcbiAgdmFyIHdhdGNoZXIsIGlkO1xuXG4gIC8vIFNvcnQgcXVldWUgYmVmb3JlIGZsdXNoLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdDpcbiAgLy8gMS4gQ29tcG9uZW50cyBhcmUgdXBkYXRlZCBmcm9tIHBhcmVudCB0byBjaGlsZC4gKGJlY2F1c2UgcGFyZW50IGlzIGFsd2F5c1xuICAvLyAgICBjcmVhdGVkIGJlZm9yZSB0aGUgY2hpbGQpXG4gIC8vIDIuIEEgY29tcG9uZW50J3MgdXNlciB3YXRjaGVycyBhcmUgcnVuIGJlZm9yZSBpdHMgcmVuZGVyIHdhdGNoZXIgKGJlY2F1c2VcbiAgLy8gICAgdXNlciB3YXRjaGVycyBhcmUgY3JlYXRlZCBiZWZvcmUgdGhlIHJlbmRlciB3YXRjaGVyKVxuICAvLyAzLiBJZiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgZHVyaW5nIGEgcGFyZW50IGNvbXBvbmVudCdzIHdhdGNoZXIgcnVuLFxuICAvLyAgICBpdHMgd2F0Y2hlcnMgY2FuIGJlIHNraXBwZWQuXG4gIHF1ZXVlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcblxuICAvLyBkbyBub3QgY2FjaGUgbGVuZ3RoIGJlY2F1c2UgbW9yZSB3YXRjaGVycyBtaWdodCBiZSBwdXNoZWRcbiAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIHdhdGNoZXJzXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHF1ZXVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHdhdGNoZXIgPSBxdWV1ZVtpbmRleF07XG4gICAgaWYgKHdhdGNoZXIuYmVmb3JlKSB7XG4gICAgICB3YXRjaGVyLmJlZm9yZSgpO1xuICAgIH1cbiAgICBpZCA9IHdhdGNoZXIuaWQ7XG4gICAgaGFzW2lkXSA9IG51bGw7XG4gICAgd2F0Y2hlci5ydW4oKTtcbiAgICAvLyBpbiBkZXYgYnVpbGQsIGNoZWNrIGFuZCBzdG9wIGNpcmN1bGFyIHVwZGF0ZXMuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaGFzW2lkXSAhPSBudWxsKSB7XG4gICAgICBjaXJjdWxhcltpZF0gPSAoY2lyY3VsYXJbaWRdIHx8IDApICsgMTtcbiAgICAgIGlmIChjaXJjdWxhcltpZF0gPiBNQVhfVVBEQVRFX0NPVU5UKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBhbiBpbmZpbml0ZSB1cGRhdGUgbG9vcCAnICsgKFxuICAgICAgICAgICAgd2F0Y2hlci51c2VyXG4gICAgICAgICAgICAgID8gKFwiaW4gd2F0Y2hlciB3aXRoIGV4cHJlc3Npb24gXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIilcbiAgICAgICAgICAgICAgOiBcImluIGEgY29tcG9uZW50IHJlbmRlciBmdW5jdGlvbi5cIlxuICAgICAgICAgICksXG4gICAgICAgICAgd2F0Y2hlci52bVxuICAgICAgICApO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGtlZXAgY29waWVzIG9mIHBvc3QgcXVldWVzIGJlZm9yZSByZXNldHRpbmcgc3RhdGVcbiAgdmFyIGFjdGl2YXRlZFF1ZXVlID0gYWN0aXZhdGVkQ2hpbGRyZW4uc2xpY2UoKTtcbiAgdmFyIHVwZGF0ZWRRdWV1ZSA9IHF1ZXVlLnNsaWNlKCk7XG5cbiAgcmVzZXRTY2hlZHVsZXJTdGF0ZSgpO1xuXG4gIC8vIGNhbGwgY29tcG9uZW50IHVwZGF0ZWQgYW5kIGFjdGl2YXRlZCBob29rc1xuICBjYWxsQWN0aXZhdGVkSG9va3MoYWN0aXZhdGVkUXVldWUpO1xuICBjYWxsVXBkYXRlZEhvb2tzKHVwZGF0ZWRRdWV1ZSk7XG5cbiAgLy8gZGV2dG9vbCBob29rXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZGV2dG9vbHMgJiYgY29uZmlnLmRldnRvb2xzKSB7XG4gICAgZGV2dG9vbHMuZW1pdCgnZmx1c2gnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVXBkYXRlZEhvb2tzIChxdWV1ZSkge1xuICB2YXIgaSA9IHF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciB3YXRjaGVyID0gcXVldWVbaV07XG4gICAgdmFyIHZtID0gd2F0Y2hlci52bTtcbiAgICBpZiAodm0uX3dhdGNoZXIgPT09IHdhdGNoZXIgJiYgdm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICBjYWxsSG9vayh2bSwgJ3VwZGF0ZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBRdWV1ZSBhIGtlcHQtYWxpdmUgY29tcG9uZW50IHRoYXQgd2FzIGFjdGl2YXRlZCBkdXJpbmcgcGF0Y2guXG4gKiBUaGUgcXVldWUgd2lsbCBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIGVudGlyZSB0cmVlIGhhcyBiZWVuIHBhdGNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50ICh2bSkge1xuICAvLyBzZXR0aW5nIF9pbmFjdGl2ZSB0byBmYWxzZSBoZXJlIHNvIHRoYXQgYSByZW5kZXIgZnVuY3Rpb24gY2FuXG4gIC8vIHJlbHkgb24gY2hlY2tpbmcgd2hldGhlciBpdCdzIGluIGFuIGluYWN0aXZlIHRyZWUgKGUuZy4gcm91dGVyLXZpZXcpXG4gIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICBhY3RpdmF0ZWRDaGlsZHJlbi5wdXNoKHZtKTtcbn1cblxuZnVuY3Rpb24gY2FsbEFjdGl2YXRlZEhvb2tzIChxdWV1ZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHF1ZXVlW2ldLCB0cnVlIC8qIHRydWUgKi8pO1xuICB9XG59XG5cbi8qKlxuICogUHVzaCBhIHdhdGNoZXIgaW50byB0aGUgd2F0Y2hlciBxdWV1ZS5cbiAqIEpvYnMgd2l0aCBkdXBsaWNhdGUgSURzIHdpbGwgYmUgc2tpcHBlZCB1bmxlc3MgaXQnc1xuICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlV2F0Y2hlciAod2F0Y2hlcikge1xuICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICBpZiAoaGFzW2lkXSA9PSBudWxsKSB7XG4gICAgaGFzW2lkXSA9IHRydWU7XG4gICAgaWYgKCFmbHVzaGluZykge1xuICAgICAgcXVldWUucHVzaCh3YXRjaGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgYWxyZWFkeSBmbHVzaGluZywgc3BsaWNlIHRoZSB3YXRjaGVyIGJhc2VkIG9uIGl0cyBpZFxuICAgICAgLy8gaWYgYWxyZWFkeSBwYXN0IGl0cyBpZCwgaXQgd2lsbCBiZSBydW4gbmV4dCBpbW1lZGlhdGVseS5cbiAgICAgIHZhciBpID0gcXVldWUubGVuZ3RoIC0gMTtcbiAgICAgIHdoaWxlIChpID4gaW5kZXggJiYgcXVldWVbaV0uaWQgPiB3YXRjaGVyLmlkKSB7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICAgIHF1ZXVlLnNwbGljZShpICsgMSwgMCwgd2F0Y2hlcik7XG4gICAgfVxuICAgIC8vIHF1ZXVlIHRoZSBmbHVzaFxuICAgIGlmICghd2FpdGluZykge1xuICAgICAgd2FpdGluZyA9IHRydWU7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAgICAgZmx1c2hTY2hlZHVsZXJRdWV1ZSgpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG5leHRUaWNrKGZsdXNoU2NoZWR1bGVyUXVldWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuXG5cbnZhciB1aWQkMiA9IDA7XG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKi9cbnZhciBXYXRjaGVyID0gZnVuY3Rpb24gV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBjYixcbiAgb3B0aW9ucyxcbiAgaXNSZW5kZXJXYXRjaGVyXG4pIHtcbiAgdGhpcy52bSA9IHZtO1xuICBpZiAoaXNSZW5kZXJXYXRjaGVyKSB7XG4gICAgdm0uX3dhdGNoZXIgPSB0aGlzO1xuICB9XG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpO1xuICAvLyBvcHRpb25zXG4gIGlmIChvcHRpb25zKSB7XG4gICAgdGhpcy5kZWVwID0gISFvcHRpb25zLmRlZXA7XG4gICAgdGhpcy51c2VyID0gISFvcHRpb25zLnVzZXI7XG4gICAgdGhpcy5sYXp5ID0gISFvcHRpb25zLmxhenk7XG4gICAgdGhpcy5zeW5jID0gISFvcHRpb25zLnN5bmM7XG4gICAgdGhpcy5iZWZvcmUgPSBvcHRpb25zLmJlZm9yZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlZXAgPSB0aGlzLnVzZXIgPSB0aGlzLmxhenkgPSB0aGlzLnN5bmMgPSBmYWxzZTtcbiAgfVxuICB0aGlzLmNiID0gY2I7XG4gIHRoaXMuaWQgPSArK3VpZCQyOyAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eTsgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW107XG4gIHRoaXMubmV3RGVwcyA9IFtdO1xuICB0aGlzLmRlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMubmV3RGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5leHByZXNzaW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgID8gZXhwT3JGbi50b1N0cmluZygpXG4gICAgOiAnJztcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmICh0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmdldHRlciA9IHBhcnNlUGF0aChleHBPckZuKTtcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IG5vb3A7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHdhdGNoaW5nIHBhdGg6IFxcXCJcIiArIGV4cE9yRm4gKyBcIlxcXCIgXCIgK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoKSB7XG4gIHB1c2hUYXJnZXQodGhpcyk7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHZtID0gdGhpcy52bTtcbiAgdHJ5IHtcbiAgICB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodm0sIHZtKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAoXCJnZXR0ZXIgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIC8vIFwidG91Y2hcIiBldmVyeSBwcm9wZXJ0eSBzbyB0aGV5IGFyZSBhbGwgdHJhY2tlZCBhc1xuICAgIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICAgIGlmICh0aGlzLmRlZXApIHtcbiAgICAgIHRyYXZlcnNlKHZhbHVlKTtcbiAgICB9XG4gICAgcG9wVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGVhbnVwRGVwcygpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufTtcblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiBhZGREZXAgKGRlcCkge1xuICB2YXIgaWQgPSBkZXAuaWQ7XG4gIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZCk7XG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKTtcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gY2xlYW51cERlcHMgKCkge1xuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgZGVwID0gdGhpcy5kZXBzW2ldO1xuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICB9XG4gIHZhciB0bXAgPSB0aGlzLmRlcElkcztcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkcztcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwSWRzLmNsZWFyKCk7XG4gIHRtcCA9IHRoaXMuZGVwcztcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzO1xuICB0aGlzLm5ld0RlcHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwO1xufTtcblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgICB0aGlzLnJ1bigpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlV2F0Y2hlcih0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTY2hlZHVsZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIHJ1biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkLlxuICAgICAgaXNPYmplY3QodmFsdWUpIHx8XG4gICAgICB0aGlzLmRlZXBcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB0aGlzLnZtLCAoXCJjYWxsYmFjayBmb3Igd2F0Y2hlciBcXFwiXCIgKyAodGhpcy5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gZXZhbHVhdGUgKCkge1xuICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKTtcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiBEZXBlbmQgb24gYWxsIGRlcHMgY29sbGVjdGVkIGJ5IHRoaXMgd2F0Y2hlci5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdGhpcy5kZXBzW2ldLmRlcGVuZCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3Vic2NyaWJlciBsaXN0LlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIHRlYXJkb3duICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkLlxuICAgIGlmICghdGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKTtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuZGVwc1tpXS5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn07XG5cbi8qICAqL1xuXG52YXIgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uID0ge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogbm9vcCxcbiAgc2V0OiBub29wXG59O1xuXG5mdW5jdGlvbiBwcm94eSAodGFyZ2V0LCBzb3VyY2VLZXksIGtleSkge1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzW3NvdXJjZUtleV1ba2V5XVxuICB9O1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xuICAgIHRoaXNbc291cmNlS2V5XVtrZXldID0gdmFsO1xuICB9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGluaXRTdGF0ZSAodm0pIHtcbiAgdm0uX3dhdGNoZXJzID0gW107XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnM7XG4gIGlmIChvcHRzLnByb3BzKSB7IGluaXRQcm9wcyh2bSwgb3B0cy5wcm9wcyk7IH1cbiAgaWYgKG9wdHMubWV0aG9kcykgeyBpbml0TWV0aG9kcyh2bSwgb3B0cy5tZXRob2RzKTsgfVxuICBpZiAob3B0cy5kYXRhKSB7XG4gICAgaW5pdERhdGEodm0pO1xuICB9IGVsc2Uge1xuICAgIG9ic2VydmUodm0uX2RhdGEgPSB7fSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbiAgfVxuICBpZiAob3B0cy5jb21wdXRlZCkgeyBpbml0Q29tcHV0ZWQodm0sIG9wdHMuY29tcHV0ZWQpOyB9XG4gIGlmIChvcHRzLndhdGNoICYmIG9wdHMud2F0Y2ggIT09IG5hdGl2ZVdhdGNoKSB7XG4gICAgaW5pdFdhdGNoKHZtLCBvcHRzLndhdGNoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMgKHZtLCBwcm9wc09wdGlvbnMpIHtcbiAgdmFyIHByb3BzRGF0YSA9IHZtLiRvcHRpb25zLnByb3BzRGF0YSB8fCB7fTtcbiAgdmFyIHByb3BzID0gdm0uX3Byb3BzID0ge307XG4gIC8vIGNhY2hlIHByb3Aga2V5cyBzbyB0aGF0IGZ1dHVyZSBwcm9wcyB1cGRhdGVzIGNhbiBpdGVyYXRlIHVzaW5nIEFycmF5XG4gIC8vIGluc3RlYWQgb2YgZHluYW1pYyBvYmplY3Qga2V5IGVudW1lcmF0aW9uLlxuICB2YXIga2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyA9IFtdO1xuICB2YXIgaXNSb290ID0gIXZtLiRwYXJlbnQ7XG4gIC8vIHJvb3QgaW5zdGFuY2UgcHJvcHMgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICBpZiAoIWlzUm9vdCkge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gIH1cbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wc09wdGlvbnMsIHByb3BzRGF0YSwgdm0pO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICBpZiAoaXNSZXNlcnZlZEF0dHJpYnV0ZShoeXBoZW5hdGVkS2V5KSB8fFxuICAgICAgICAgIGNvbmZpZy5pc1Jlc2VydmVkQXR0cihoeXBoZW5hdGVkS2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIlxcXCJcIiArIGh5cGhlbmF0ZWRLZXkgKyBcIlxcXCIgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUgYW5kIGNhbm5vdCBiZSB1c2VkIGFzIGNvbXBvbmVudCBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZGVmaW5lUmVhY3RpdmUkJDEocHJvcHMsIGtleSwgdmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc1Jvb3QgJiYgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHZtLm1wSG9zdCA9PT0gJ21wLWJhaWR1JyB8fCB2bS5tcEhvc3QgPT09ICdtcC1rdWFpc2hvdScpey8v55m+5bqm44CB5b+r5omLIG9ic2VydmVyIOWcqCBzZXREYXRhIGNhbGxiYWNrIOS5i+WQjuinpuWPke+8jOebtOaOpeW/veeVpeivpSB3YXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2ZpeGVkIGJ5IHh4eHh4eCBfX25leHRfdGlja19wZW5kaW5nLHVuaTovL2Zvcm0tZmllbGQg5pe25LiN5ZGK6K2mXG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICBrZXkgPT09ICd2YWx1ZScgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHZtLiRvcHRpb25zLmJlaGF2aW9ycykgJiZcbiAgICAgICAgICAgICAgICB2bS4kb3B0aW9ucy5iZWhhdmlvcnMuaW5kZXhPZigndW5pOi8vZm9ybS1maWVsZCcpICE9PSAtMVxuICAgICAgICAgICAgICApe1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHZtLl9nZXRGb3JtRGF0YSl7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyICRwYXJlbnQgPSB2bS4kcGFyZW50O1xuICAgICAgICAgICAgd2hpbGUoJHBhcmVudCl7XG4gICAgICAgICAgICAgIGlmKCRwYXJlbnQuX19uZXh0X3RpY2tfcGVuZGluZyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHBhcmVudCA9ICRwYXJlbnQuJHBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYSBwcm9wIGRpcmVjdGx5IHNpbmNlIHRoZSB2YWx1ZSB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHBhcmVudCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJJbnN0ZWFkLCB1c2UgYSBkYXRhIG9yIGNvbXB1dGVkIHByb3BlcnR5IGJhc2VkIG9uIHRoZSBwcm9wJ3MgXCIgK1xuICAgICAgICAgICAgXCJ2YWx1ZS4gUHJvcCBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgLy8gc3RhdGljIHByb3BzIGFyZSBhbHJlYWR5IHByb3hpZWQgb24gdGhlIGNvbXBvbmVudCdzIHByb3RvdHlwZVxuICAgIC8vIGR1cmluZyBWdWUuZXh0ZW5kKCkuIFdlIG9ubHkgbmVlZCB0byBwcm94eSBwcm9wcyBkZWZpbmVkIGF0XG4gICAgLy8gaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9wcm9wc1wiLCBrZXkpO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHNPcHRpb25zKSBsb29wKCBrZXkgKTtcbiAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xufVxuXG5mdW5jdGlvbiBpbml0RGF0YSAodm0pIHtcbiAgdmFyIGRhdGEgPSB2bS4kb3B0aW9ucy5kYXRhO1xuICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZ2V0RGF0YShkYXRhLCB2bSlcbiAgICA6IGRhdGEgfHwge307XG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGRhdGEgPSB7fTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnZGF0YSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhbiBvYmplY3Q6XFxuJyArXG4gICAgICAnaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvY29tcG9uZW50cy5odG1sI2RhdGEtTXVzdC1CZS1hLUZ1bmN0aW9uJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKG1ldGhvZHMgJiYgaGFzT3duKG1ldGhvZHMsIGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGRhdGEgcHJvcGVydHkuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJUaGUgZGF0YSBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWNsYXJlZCBhcyBhIHByb3AuIFwiICtcbiAgICAgICAgXCJVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuXCIsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgcHJveHkodm0sIFwiX2RhdGFcIiwga2V5KTtcbiAgICB9XG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YSAoZGF0YSwgdm0pIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRhdGEuY2FsbCh2bSwgdm0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJkYXRhKClcIik7XG4gICAgcmV0dXJuIHt9XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxudmFyIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnMgPSB7IGxhenk6IHRydWUgfTtcblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSwgY29tcHV0ZWQpIHtcbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIHZhciB3YXRjaGVycyA9IHZtLl9jb21wdXRlZFdhdGNoZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gY29tcHV0ZWQgcHJvcGVydGllcyBhcmUganVzdCBnZXR0ZXJzIGR1cmluZyBTU1JcbiAgdmFyIGlzU1NSID0gaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcblxuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV07XG4gICAgdmFyIGdldHRlciA9IHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nID8gdXNlckRlZiA6IHVzZXJEZWYuZ2V0O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGdldHRlciA9PSBudWxsKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJHZXR0ZXIgaXMgbWlzc2luZyBmb3IgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1NTUikge1xuICAgICAgLy8gY3JlYXRlIGludGVybmFsIHdhdGNoZXIgZm9yIHRoZSBjb21wdXRlZCBwcm9wZXJ0eS5cbiAgICAgIHdhdGNoZXJzW2tleV0gPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgdm0sXG4gICAgICAgIGdldHRlciB8fCBub29wLFxuICAgICAgICBub29wLFxuICAgICAgICBjb21wdXRlZFdhdGNoZXJPcHRpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudC1kZWZpbmVkIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGFscmVhZHkgZGVmaW5lZCBvbiB0aGVcbiAgICAvLyBjb21wb25lbnQgcHJvdG90eXBlLiBXZSBvbmx5IG5lZWQgdG8gZGVmaW5lIGNvbXB1dGVkIHByb3BlcnRpZXMgZGVmaW5lZFxuICAgIC8vIGF0IGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBkZWZpbmVDb21wdXRlZCh2bSwga2V5LCB1c2VyRGVmKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChrZXkgaW4gdm0uJGRhdGEpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBkYXRhLlwiKSwgdm0pO1xuICAgICAgfSBlbHNlIGlmICh2bS4kb3B0aW9ucy5wcm9wcyAmJiBrZXkgaW4gdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBhcyBhIHByb3AuXCIpLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUNvbXB1dGVkIChcbiAgdGFyZ2V0LFxuICBrZXksXG4gIHVzZXJEZWZcbikge1xuICB2YXIgc2hvdWxkQ2FjaGUgPSAhaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcbiAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHNob3VsZENhY2hlXG4gICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmKTtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gbm9vcDtcbiAgfSBlbHNlIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgID8gc2hvdWxkQ2FjaGUgJiYgdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmLmdldClcbiAgICAgIDogbm9vcDtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXQgfHwgbm9vcDtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9PT0gbm9vcCkge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJDb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIGFzc2lnbmVkIHRvIGJ1dCBpdCBoYXMgbm8gc2V0dGVyLlwiKSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIgKGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fY29tcHV0ZWRXYXRjaGVycyAmJiB0aGlzLl9jb21wdXRlZFdhdGNoZXJzW2tleV07XG4gICAgaWYgKHdhdGNoZXIpIHtcbiAgICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkgey8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2V0dGVySW52b2tlcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRoaXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtLCBtZXRob2RzKSB7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgdHlwZSBcXFwiXCIgKyAodHlwZW9mIG1ldGhvZHNba2V5XSkgKyBcIlxcXCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgXCJEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P1wiLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKChrZXkgaW4gdm0pICYmIGlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBWdWUgaW5zdGFuY2UgbWV0aG9kLiBcIiArXG4gICAgICAgICAgXCJBdm9pZCBkZWZpbmluZyBjb21wb25lbnQgbWV0aG9kcyB0aGF0IHN0YXJ0IHdpdGggXyBvciAkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZtW2tleV0gPSB0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nID8gbm9vcCA6IGJpbmQobWV0aG9kc1trZXldLCB2bSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcbiAgZm9yICh2YXIga2V5IGluIHdhdGNoKSB7XG4gICAgdmFyIGhhbmRsZXIgPSB3YXRjaFtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBoYW5kbGVyLFxuICBvcHRpb25zXG4pIHtcbiAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICBvcHRpb25zID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gaGFuZGxlci5oYW5kbGVyO1xuICB9XG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICBoYW5kbGVyID0gdm1baGFuZGxlcl07XG4gIH1cbiAgcmV0dXJuIHZtLiR3YXRjaChleHBPckZuLCBoYW5kbGVyLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgLy8gZmxvdyBzb21laG93IGhhcyBwcm9ibGVtcyB3aXRoIGRpcmVjdGx5IGRlY2xhcmVkIGRlZmluaXRpb24gb2JqZWN0XG4gIC8vIHdoZW4gdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5LCBzbyB3ZSBoYXZlIHRvIHByb2NlZHVyYWxseSBidWlsZCB1cFxuICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gIHZhciBkYXRhRGVmID0ge307XG4gIGRhdGFEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9O1xuICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgcHJvcHNEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJvcHMgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkYXRhRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXG4gICAgICAgICdVc2UgbmVzdGVkIGRhdGEgcHJvcGVydGllcyBpbnN0ZWFkLicsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgICBwcm9wc0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcHJvcHMnLCBwcm9wc0RlZik7XG5cbiAgVnVlLnByb3RvdHlwZS4kc2V0ID0gc2V0O1xuICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBkZWw7XG5cbiAgVnVlLnByb3RvdHlwZS4kd2F0Y2ggPSBmdW5jdGlvbiAoXG4gICAgZXhwT3JGbixcbiAgICBjYixcbiAgICBvcHRpb25zXG4gICkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoY2IpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudXNlciA9IHRydWU7XG4gICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgdm0sIChcImNhbGxiYWNrIGZvciBpbW1lZGlhdGUgd2F0Y2hlciBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB1bndhdGNoRm4gKCkge1xuICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQkMyA9IDA7XG5cbmZ1bmN0aW9uIGluaXRNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYSB1aWRcbiAgICB2bS5fdWlkID0gdWlkJDMrKztcblxuICAgIHZhciBzdGFydFRhZywgZW5kVGFnO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArICh2bS5fdWlkKTtcbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgIH1cblxuICAgIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gICAgdm0uX2lzVnVlID0gdHJ1ZTtcbiAgICAvLyBtZXJnZSBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5faXNDb21wb25lbnQpIHtcbiAgICAgIC8vIG9wdGltaXplIGludGVybmFsIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uXG4gICAgICAvLyBzaW5jZSBkeW5hbWljIG9wdGlvbnMgbWVyZ2luZyBpcyBwcmV0dHkgc2xvdywgYW5kIG5vbmUgb2YgdGhlXG4gICAgICAvLyBpbnRlcm5hbCBjb21wb25lbnQgb3B0aW9ucyBuZWVkcyBzcGVjaWFsIHRyZWF0bWVudC5cbiAgICAgIGluaXRJbnRlcm5hbENvbXBvbmVudCh2bSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGluaXRQcm94eSh2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgICAvLyBleHBvc2UgcmVhbCBzZWxmXG4gICAgdm0uX3NlbGYgPSB2bTtcbiAgICBpbml0TGlmZWN5Y2xlKHZtKTtcbiAgICBpbml0RXZlbnRzKHZtKTtcbiAgICBpbml0UmVuZGVyKHZtKTtcbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZUNyZWF0ZScpO1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGluaXRJbmplY3Rpb25zKHZtKTsgLy8gcmVzb2x2ZSBpbmplY3Rpb25zIGJlZm9yZSBkYXRhL3Byb3BzXG4gICAgaW5pdFN0YXRlKHZtKTtcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBpbml0UHJvdmlkZSh2bSk7IC8vIHJlc29sdmUgcHJvdmlkZSBhZnRlciBkYXRhL3Byb3BzXG4gICAgIXZtLl8kZmFsbGJhY2sgJiYgY2FsbEhvb2sodm0sICdjcmVhdGVkJyk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgdm0uX25hbWUgPSBmb3JtYXRDb21wb25lbnROYW1lKHZtLCBmYWxzZSk7XG4gICAgICBtYXJrKGVuZFRhZyk7XG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArICh2bS5fbmFtZSkgKyBcIiBpbml0XCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICB9XG5cbiAgICBpZiAodm0uJG9wdGlvbnMuZWwpIHtcbiAgICAgIHZtLiRtb3VudCh2bS4kb3B0aW9ucy5lbCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0SW50ZXJuYWxDb21wb25lbnQgKHZtLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKHZtLmNvbnN0cnVjdG9yLm9wdGlvbnMpO1xuICAvLyBkb2luZyB0aGlzIGJlY2F1c2UgaXQncyBmYXN0ZXIgdGhhbiBkeW5hbWljIGVudW1lcmF0aW9uLlxuICB2YXIgcGFyZW50Vm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgb3B0cy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgb3B0cy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcblxuICB2YXIgdm5vZGVDb21wb25lbnRPcHRpb25zID0gcGFyZW50Vm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgb3B0cy5wcm9wc0RhdGEgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhO1xuICBvcHRzLl9wYXJlbnRMaXN0ZW5lcnMgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzO1xuICBvcHRzLl9yZW5kZXJDaGlsZHJlbiA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5jaGlsZHJlbjtcbiAgb3B0cy5fY29tcG9uZW50VGFnID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnRhZztcblxuICBpZiAob3B0aW9ucy5yZW5kZXIpIHtcbiAgICBvcHRzLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgIG9wdHMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgaWYgKEN0b3Iuc3VwZXIpIHtcbiAgICB2YXIgc3VwZXJPcHRpb25zID0gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yLnN1cGVyKTtcbiAgICB2YXIgY2FjaGVkU3VwZXJPcHRpb25zID0gQ3Rvci5zdXBlck9wdGlvbnM7XG4gICAgaWYgKHN1cGVyT3B0aW9ucyAhPT0gY2FjaGVkU3VwZXJPcHRpb25zKSB7XG4gICAgICAvLyBzdXBlciBvcHRpb24gY2hhbmdlZCxcbiAgICAgIC8vIG5lZWQgdG8gcmVzb2x2ZSBuZXcgb3B0aW9ucy5cbiAgICAgIEN0b3Iuc3VwZXJPcHRpb25zID0gc3VwZXJPcHRpb25zO1xuICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBsYXRlLW1vZGlmaWVkL2F0dGFjaGVkIG9wdGlvbnMgKCM0OTc2KVxuICAgICAgdmFyIG1vZGlmaWVkT3B0aW9ucyA9IHJlc29sdmVNb2RpZmllZE9wdGlvbnMoQ3Rvcik7XG4gICAgICAvLyB1cGRhdGUgYmFzZSBleHRlbmQgb3B0aW9uc1xuICAgICAgaWYgKG1vZGlmaWVkT3B0aW9ucykge1xuICAgICAgICBleHRlbmQoQ3Rvci5leHRlbmRPcHRpb25zLCBtb2RpZmllZE9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhzdXBlck9wdGlvbnMsIEN0b3IuZXh0ZW5kT3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tvcHRpb25zLm5hbWVdID0gQ3RvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgbW9kaWZpZWQ7XG4gIHZhciBsYXRlc3QgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBzZWFsZWQgPSBDdG9yLnNlYWxlZE9wdGlvbnM7XG4gIGZvciAodmFyIGtleSBpbiBsYXRlc3QpIHtcbiAgICBpZiAobGF0ZXN0W2tleV0gIT09IHNlYWxlZFtrZXldKSB7XG4gICAgICBpZiAoIW1vZGlmaWVkKSB7IG1vZGlmaWVkID0ge307IH1cbiAgICAgIG1vZGlmaWVkW2tleV0gPSBsYXRlc3Rba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vZGlmaWVkXG59XG5cbmZ1bmN0aW9uIFZ1ZSAob3B0aW9ucykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICEodGhpcyBpbnN0YW5jZW9mIFZ1ZSlcbiAgKSB7XG4gICAgd2FybignVnVlIGlzIGEgY29uc3RydWN0b3IgYW5kIHNob3VsZCBiZSBjYWxsZWQgd2l0aCB0aGUgYG5ld2Aga2V5d29yZCcpO1xuICB9XG4gIHRoaXMuX2luaXQob3B0aW9ucyk7XG59XG5cbmluaXRNaXhpbihWdWUpO1xuc3RhdGVNaXhpbihWdWUpO1xuZXZlbnRzTWl4aW4oVnVlKTtcbmxpZmVjeWNsZU1peGluKFZ1ZSk7XG5yZW5kZXJNaXhpbihWdWUpO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFVzZSAoVnVlKSB7XG4gIFZ1ZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgdmFyIGluc3RhbGxlZFBsdWdpbnMgPSAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyB8fCAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyA9IFtdKSk7XG4gICAgaWYgKGluc3RhbGxlZFBsdWdpbnMuaW5kZXhPZihwbHVnaW4pID4gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5pbnN0YWxsLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2luID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIGluc3RhbGxlZFBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0TWl4aW4kMSAoVnVlKSB7XG4gIFZ1ZS5taXhpbiA9IGZ1bmN0aW9uIChtaXhpbikge1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIG1peGluKTtcbiAgICByZXR1cm4gdGhpc1xuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV4dGVuZCAoVnVlKSB7XG4gIC8qKlxuICAgKiBFYWNoIGluc3RhbmNlIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgVnVlLCBoYXMgYSB1bmlxdWVcbiAgICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxuICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICovXG4gIFZ1ZS5jaWQgPSAwO1xuICB2YXIgY2lkID0gMTtcblxuICAvKipcbiAgICogQ2xhc3MgaW5oZXJpdGFuY2VcbiAgICovXG4gIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5kT3B0aW9ucykge1xuICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xuICAgIHZhciBTdXBlciA9IHRoaXM7XG4gICAgdmFyIFN1cGVySWQgPSBTdXBlci5jaWQ7XG4gICAgdmFyIGNhY2hlZEN0b3JzID0gZXh0ZW5kT3B0aW9ucy5fQ3RvciB8fCAoZXh0ZW5kT3B0aW9ucy5fQ3RvciA9IHt9KTtcbiAgICBpZiAoY2FjaGVkQ3RvcnNbU3VwZXJJZF0pIHtcbiAgICAgIHJldHVybiBjYWNoZWRDdG9yc1tTdXBlcklkXVxuICAgIH1cblxuICAgIHZhciBuYW1lID0gZXh0ZW5kT3B0aW9ucy5uYW1lIHx8IFN1cGVyLm9wdGlvbnMubmFtZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBuYW1lKSB7XG4gICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUobmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIFN1YiA9IGZ1bmN0aW9uIFZ1ZUNvbXBvbmVudCAob3B0aW9ucykge1xuICAgICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgICB9O1xuICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgU3ViLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YjtcbiAgICBTdWIuY2lkID0gY2lkKys7XG4gICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICBTdXBlci5vcHRpb25zLFxuICAgICAgZXh0ZW5kT3B0aW9uc1xuICAgICk7XG4gICAgU3ViWydzdXBlciddID0gU3VwZXI7XG5cbiAgICAvLyBGb3IgcHJvcHMgYW5kIGNvbXB1dGVkIHByb3BlcnRpZXMsIHdlIGRlZmluZSB0aGUgcHJveHkgZ2V0dGVycyBvblxuICAgIC8vIHRoZSBWdWUgaW5zdGFuY2VzIGF0IGV4dGVuc2lvbiB0aW1lLCBvbiB0aGUgZXh0ZW5kZWQgcHJvdG90eXBlLiBUaGlzXG4gICAgLy8gYXZvaWRzIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBjYWxscyBmb3IgZWFjaCBpbnN0YW5jZSBjcmVhdGVkLlxuICAgIGlmIChTdWIub3B0aW9ucy5wcm9wcykge1xuICAgICAgaW5pdFByb3BzJDEoU3ViKTtcbiAgICB9XG4gICAgaWYgKFN1Yi5vcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICBpbml0Q29tcHV0ZWQkMShTdWIpO1xuICAgIH1cblxuICAgIC8vIGFsbG93IGZ1cnRoZXIgZXh0ZW5zaW9uL21peGluL3BsdWdpbiB1c2FnZVxuICAgIFN1Yi5leHRlbmQgPSBTdXBlci5leHRlbmQ7XG4gICAgU3ViLm1peGluID0gU3VwZXIubWl4aW47XG4gICAgU3ViLnVzZSA9IFN1cGVyLnVzZTtcblxuICAgIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgICAvLyBjYW4gaGF2ZSB0aGVpciBwcml2YXRlIGFzc2V0cyB0b28uXG4gICAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgU3ViW3R5cGVdID0gU3VwZXJbdHlwZV07XG4gICAgfSk7XG4gICAgLy8gZW5hYmxlIHJlY3Vyc2l2ZSBzZWxmLWxvb2t1cFxuICAgIGlmIChuYW1lKSB7XG4gICAgICBTdWIub3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gU3ViO1xuICAgIH1cblxuICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyIG9wdGlvbnMgYXQgZXh0ZW5zaW9uIHRpbWUuXG4gICAgLy8gbGF0ZXIgYXQgaW5zdGFudGlhdGlvbiB3ZSBjYW4gY2hlY2sgaWYgU3VwZXIncyBvcHRpb25zIGhhdmVcbiAgICAvLyBiZWVuIHVwZGF0ZWQuXG4gICAgU3ViLnN1cGVyT3B0aW9ucyA9IFN1cGVyLm9wdGlvbnM7XG4gICAgU3ViLmV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zO1xuICAgIFN1Yi5zZWFsZWRPcHRpb25zID0gZXh0ZW5kKHt9LCBTdWIub3B0aW9ucyk7XG5cbiAgICAvLyBjYWNoZSBjb25zdHJ1Y3RvclxuICAgIGNhY2hlZEN0b3JzW1N1cGVySWRdID0gU3ViO1xuICAgIHJldHVybiBTdWJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzJDEgKENvbXApIHtcbiAgdmFyIHByb3BzID0gQ29tcC5vcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBwcm94eShDb21wLnByb3RvdHlwZSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q29tcHV0ZWQkMSAoQ29tcCkge1xuICB2YXIgY29tcHV0ZWQgPSBDb21wLm9wdGlvbnMuY29tcHV0ZWQ7XG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIGRlZmluZUNvbXB1dGVkKENvbXAucHJvdG90eXBlLCBrZXksIGNvbXB1dGVkW2tleV0pO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0QXNzZXRSZWdpc3RlcnMgKFZ1ZSkge1xuICAvKipcbiAgICogQ3JlYXRlIGFzc2V0IHJlZ2lzdHJhdGlvbiBtZXRob2RzLlxuICAgKi9cbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZVt0eXBlXSA9IGZ1bmN0aW9uIChcbiAgICAgIGlkLFxuICAgICAgZGVmaW5pdGlvblxuICAgICkge1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5uYW1lID0gZGVmaW5pdGlvbi5uYW1lIHx8IGlkO1xuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnZGlyZWN0aXZlJyAmJiB0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRlZmluaXRpb24gPSB7IGJpbmQ6IGRlZmluaXRpb24sIHVwZGF0ZTogZGVmaW5pdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF0gPSBkZWZpbml0aW9uO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUgKG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpXG59XG5cbmZ1bmN0aW9uIG1hdGNoZXMgKHBhdHRlcm4sIG5hbWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi5pbmRleE9mKG5hbWUpID4gLTFcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGF0dGVybi5zcGxpdCgnLCcpLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKGlzUmVnRXhwKHBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChuYW1lKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlIChrZWVwQWxpdmVJbnN0YW5jZSwgZmlsdGVyKSB7XG4gIHZhciBjYWNoZSA9IGtlZXBBbGl2ZUluc3RhbmNlLmNhY2hlO1xuICB2YXIga2V5cyA9IGtlZXBBbGl2ZUluc3RhbmNlLmtleXM7XG4gIHZhciBfdm5vZGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5fdm5vZGU7XG4gIGZvciAodmFyIGtleSBpbiBjYWNoZSkge1xuICAgIHZhciBjYWNoZWROb2RlID0gY2FjaGVba2V5XTtcbiAgICBpZiAoY2FjaGVkTm9kZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNhY2hlZE5vZGUuY29tcG9uZW50T3B0aW9ucyk7XG4gICAgICBpZiAobmFtZSAmJiAhZmlsdGVyKG5hbWUpKSB7XG4gICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5LCBrZXlzLCBfdm5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlRW50cnkgKFxuICBjYWNoZSxcbiAga2V5LFxuICBrZXlzLFxuICBjdXJyZW50XG4pIHtcbiAgdmFyIGNhY2hlZCQkMSA9IGNhY2hlW2tleV07XG4gIGlmIChjYWNoZWQkJDEgJiYgKCFjdXJyZW50IHx8IGNhY2hlZCQkMS50YWcgIT09IGN1cnJlbnQudGFnKSkge1xuICAgIGNhY2hlZCQkMS5jb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICB9XG4gIGNhY2hlW2tleV0gPSBudWxsO1xuICByZW1vdmUoa2V5cywga2V5KTtcbn1cblxudmFyIHBhdHRlcm5UeXBlcyA9IFtTdHJpbmcsIFJlZ0V4cCwgQXJyYXldO1xuXG52YXIgS2VlcEFsaXZlID0ge1xuICBuYW1lOiAna2VlcC1hbGl2ZScsXG4gIGFic3RyYWN0OiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgaW5jbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIGV4Y2x1ZGU6IHBhdHRlcm5UeXBlcyxcbiAgICBtYXg6IFtTdHJpbmcsIE51bWJlcl1cbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgfSxcblxuICBkZXN0cm95ZWQ6IGZ1bmN0aW9uIGRlc3Ryb3llZCAoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIHBydW5lQ2FjaGVFbnRyeSh0aGlzLmNhY2hlLCBrZXksIHRoaXMua2V5cyk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy4kd2F0Y2goJ2luY2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gICAgdGhpcy4kd2F0Y2goJ2V4Y2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICFtYXRjaGVzKHZhbCwgbmFtZSk7IH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgc2xvdCA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgdmFyIHZub2RlID0gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZChzbG90KTtcbiAgICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgaWYgKGNvbXBvbmVudE9wdGlvbnMpIHtcbiAgICAgIC8vIGNoZWNrIHBhdHRlcm5cbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjb21wb25lbnRPcHRpb25zKTtcbiAgICAgIHZhciByZWYgPSB0aGlzO1xuICAgICAgdmFyIGluY2x1ZGUgPSByZWYuaW5jbHVkZTtcbiAgICAgIHZhciBleGNsdWRlID0gcmVmLmV4Y2x1ZGU7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIG5vdCBpbmNsdWRlZFxuICAgICAgICAoaW5jbHVkZSAmJiAoIW5hbWUgfHwgIW1hdGNoZXMoaW5jbHVkZSwgbmFtZSkpKSB8fFxuICAgICAgICAvLyBleGNsdWRlZFxuICAgICAgICAoZXhjbHVkZSAmJiBuYW1lICYmIG1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHZub2RlXG4gICAgICB9XG5cbiAgICAgIHZhciByZWYkMSA9IHRoaXM7XG4gICAgICB2YXIgY2FjaGUgPSByZWYkMS5jYWNoZTtcbiAgICAgIHZhciBrZXlzID0gcmVmJDEua2V5cztcbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXkgPT0gbnVsbFxuICAgICAgICAvLyBzYW1lIGNvbnN0cnVjdG9yIG1heSBnZXQgcmVnaXN0ZXJlZCBhcyBkaWZmZXJlbnQgbG9jYWwgY29tcG9uZW50c1xuICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXG4gICAgICAgID8gY29tcG9uZW50T3B0aW9ucy5DdG9yLmNpZCArIChjb21wb25lbnRPcHRpb25zLnRhZyA/IChcIjo6XCIgKyAoY29tcG9uZW50T3B0aW9ucy50YWcpKSA6ICcnKVxuICAgICAgICA6IHZub2RlLmtleTtcbiAgICAgIGlmIChjYWNoZVtrZXldKSB7XG4gICAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY2FjaGVba2V5XS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgLy8gbWFrZSBjdXJyZW50IGtleSBmcmVzaGVzdFxuICAgICAgICByZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gdm5vZGU7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAvLyBwcnVuZSBvbGRlc3QgZW50cnlcbiAgICAgICAgaWYgKHRoaXMubWF4ICYmIGtleXMubGVuZ3RoID4gcGFyc2VJbnQodGhpcy5tYXgpKSB7XG4gICAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXlzWzBdLCBrZXlzLCB0aGlzLl92bm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdm5vZGUuZGF0YS5rZWVwQWxpdmUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGUgfHwgKHNsb3QgJiYgc2xvdFswXSlcbiAgfVxufTtcblxudmFyIGJ1aWx0SW5Db21wb25lbnRzID0ge1xuICBLZWVwQWxpdmU6IEtlZXBBbGl2ZVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRHbG9iYWxBUEkgKFZ1ZSkge1xuICAvLyBjb25maWdcbiAgdmFyIGNvbmZpZ0RlZiA9IHt9O1xuICBjb25maWdEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnOyB9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbmZpZ0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnRG8gbm90IHJlcGxhY2UgdGhlIFZ1ZS5jb25maWcgb2JqZWN0LCBzZXQgaW5kaXZpZHVhbCBmaWVsZHMgaW5zdGVhZC4nXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ2NvbmZpZycsIGNvbmZpZ0RlZik7XG5cbiAgLy8gZXhwb3NlZCB1dGlsIG1ldGhvZHMuXG4gIC8vIE5PVEU6IHRoZXNlIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIC0gYXZvaWQgcmVseWluZyBvblxuICAvLyB0aGVtIHVubGVzcyB5b3UgYXJlIGF3YXJlIG9mIHRoZSByaXNrLlxuICBWdWUudXRpbCA9IHtcbiAgICB3YXJuOiB3YXJuLFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIG1lcmdlT3B0aW9uczogbWVyZ2VPcHRpb25zLFxuICAgIGRlZmluZVJlYWN0aXZlOiBkZWZpbmVSZWFjdGl2ZSQkMVxuICB9O1xuXG4gIFZ1ZS5zZXQgPSBzZXQ7XG4gIFZ1ZS5kZWxldGUgPSBkZWw7XG4gIFZ1ZS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG4gIC8vIDIuNiBleHBsaWNpdCBvYnNlcnZhYmxlIEFQSVxuICBWdWUub2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBvYnNlcnZlKG9iaik7XG4gICAgcmV0dXJuIG9ialxuICB9O1xuXG4gIFZ1ZS5vcHRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZS5vcHRpb25zW3R5cGUgKyAncyddID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgfSk7XG5cbiAgLy8gdGhpcyBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBcImJhc2VcIiBjb25zdHJ1Y3RvciB0byBleHRlbmQgYWxsIHBsYWluLW9iamVjdFxuICAvLyBjb21wb25lbnRzIHdpdGggaW4gV2VleCdzIG11bHRpLWluc3RhbmNlIHNjZW5hcmlvcy5cbiAgVnVlLm9wdGlvbnMuX2Jhc2UgPSBWdWU7XG5cbiAgZXh0ZW5kKFZ1ZS5vcHRpb25zLmNvbXBvbmVudHMsIGJ1aWx0SW5Db21wb25lbnRzKTtcblxuICBpbml0VXNlKFZ1ZSk7XG4gIGluaXRNaXhpbiQxKFZ1ZSk7XG4gIGluaXRFeHRlbmQoVnVlKTtcbiAgaW5pdEFzc2V0UmVnaXN0ZXJzKFZ1ZSk7XG59XG5cbmluaXRHbG9iYWxBUEkoVnVlKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckaXNTZXJ2ZXInLCB7XG4gIGdldDogaXNTZXJ2ZXJSZW5kZXJpbmdcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRzc3JDb250ZXh0Jywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gdGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dFxuICB9XG59KTtcblxuLy8gZXhwb3NlIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IGZvciBzc3IgcnVudGltZSBoZWxwZXIgaW5zdGFsbGF0aW9uXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnRnVuY3Rpb25hbFJlbmRlckNvbnRleHQnLCB7XG4gIHZhbHVlOiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dFxufSk7XG5cblZ1ZS52ZXJzaW9uID0gJzIuNi4xMSc7XG5cbi8qKlxuICogaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1RlbmNlbnQvd2VzdG9yZS9tYXN0ZXIvcGFja2FnZXMvd2VzdG9yZS91dGlscy9kaWZmLmpzXG4gKi9cbnZhciBBUlJBWVRZUEUgPSAnW29iamVjdCBBcnJheV0nO1xudmFyIE9CSkVDVFRZUEUgPSAnW29iamVjdCBPYmplY3RdJztcbi8vIGNvbnN0IEZVTkNUSU9OVFlQRSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSdcblxuZnVuY3Rpb24gZGlmZihjdXJyZW50LCBwcmUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgc3luY0tleXMoY3VycmVudCwgcHJlKTtcbiAgICBfZGlmZihjdXJyZW50LCBwcmUsICcnLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gc3luY0tleXMoY3VycmVudCwgcHJlKSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IHByZSkgeyByZXR1cm4gfVxuICAgIHZhciByb290Q3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnQpO1xuICAgIHZhciByb290UHJlVHlwZSA9IHR5cGUocHJlKTtcbiAgICBpZiAocm9vdEN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUgJiYgcm9vdFByZVR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICBpZihPYmplY3Qua2V5cyhjdXJyZW50KS5sZW5ndGggPj0gT2JqZWN0LmtleXMocHJlKS5sZW5ndGgpe1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByZSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50W2tleV07XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRba2V5XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3luY0tleXMoY3VycmVudFZhbHVlLCBwcmVba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyb290Q3VycmVudFR5cGUgPT0gQVJSQVlUWVBFICYmIHJvb3RQcmVUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPj0gcHJlLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc3luY0tleXMoY3VycmVudFtpbmRleF0sIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9kaWZmKGN1cnJlbnQsIHByZSwgcGF0aCwgcmVzdWx0KSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IHByZSkgeyByZXR1cm4gfVxuICAgIHZhciByb290Q3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnQpO1xuICAgIHZhciByb290UHJlVHlwZSA9IHR5cGUocHJlKTtcbiAgICBpZiAocm9vdEN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUpIHtcbiAgICAgICAgaWYgKHJvb3RQcmVUeXBlICE9IE9CSkVDVFRZUEUgfHwgT2JqZWN0LmtleXMoY3VycmVudCkubGVuZ3RoIDwgT2JqZWN0LmtleXMocHJlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudFtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBwcmVWYWx1ZSA9IHByZVtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJlVHlwZSA9IHR5cGUocHJlVmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VHlwZSAhPSBBUlJBWVRZUEUgJiYgY3VycmVudFR5cGUgIT0gT0JKRUNUVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFIOatpOWkhOWwhiAhPSDkv67mlLnkuLogIT0944CC5raJ5Y+K5Zyw5pa55aSq5aSa5oGQ5oCV5rWL6K+V5LiN5Yiw77yM5aaC5p6c5Ye6546w5pWw5o2u5a+55q+U6Zeu6aKY77yM5bCG5YW25L+u5pS55Zue5p2l44CCXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHByZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVUeXBlICE9IEFSUkFZVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlLmxlbmd0aCA8IHByZVZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RpZmYoaXRlbSwgcHJlVmFsdWVbaW5kZXhdLCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSArICdbJyArIGluZGV4ICsgJ10nLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VHlwZSA9PSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVUeXBlICE9IE9CSkVDVFRZUEUgfHwgT2JqZWN0LmtleXMoY3VycmVudFZhbHVlKS5sZW5ndGggPCBPYmplY3Qua2V5cyhwcmVWYWx1ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHN1YktleSBpbiBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlmZihjdXJyZW50VmFsdWVbc3ViS2V5XSwgcHJlVmFsdWVbc3ViS2V5XSwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXkgKyAnLicgKyBzdWJLZXksIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudCkgbG9vcCgga2V5ICk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJvb3RDdXJyZW50VHlwZSA9PSBBUlJBWVRZUEUpIHtcbiAgICAgICAgaWYgKHJvb3RQcmVUeXBlICE9IEFSUkFZVFlQRSkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPCBwcmUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgX2RpZmYoaXRlbSwgcHJlW2luZGV4XSwgcGF0aCArICdbJyArIGluZGV4ICsgJ10nLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRSZXN1bHQocmVzdWx0LCBrLCB2KSB7XG4gICAgLy8gaWYgKHR5cGUodikgIT0gRlVOQ1RJT05UWVBFKSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IHY7XG4gICAgLy8gfVxufVxuXG5mdW5jdGlvbiB0eXBlKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZmx1c2hDYWxsYmFja3MkMSh2bSkge1xuICAgIGlmICh2bS5fX25leHRfdGlja19jYWxsYmFja3MgJiYgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRykge1xuICAgICAgICAgICAgdmFyIG1wSW5zdGFuY2UgPSB2bS4kc2NvcGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWycgKyAoK25ldyBEYXRlKSArICddWycgKyAobXBJbnN0YW5jZS5pcyB8fCBtcEluc3RhbmNlLnJvdXRlKSArICddWycgKyB2bS5fdWlkICtcbiAgICAgICAgICAgICAgICAnXTpmbHVzaENhbGxiYWNrc1snICsgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCArICddJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvcGllcyA9IHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5zbGljZSgwKTtcbiAgICAgICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3BpZXNbaV0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFzUmVuZGVyV2F0Y2hlcih2bSkge1xuICAgIHJldHVybiBxdWV1ZS5maW5kKGZ1bmN0aW9uICh3YXRjaGVyKSB7IHJldHVybiB2bS5fd2F0Y2hlciA9PT0gd2F0Y2hlcjsgfSlcbn1cblxuZnVuY3Rpb24gbmV4dFRpY2skMSh2bSwgY2IpIHtcbiAgICAvLzEubmV4dFRpY2sg5LmL5YmNIOW3siBzZXREYXRhIOS4lCBzZXREYXRhIOi/mOacquWbnuiwg+WujOaIkFxuICAgIC8vMi5uZXh0VGljayDkuYvliY3lrZjlnKggcmVuZGVyIHdhdGNoZXJcbiAgICBpZiAoIXZtLl9fbmV4dF90aWNrX3BlbmRpbmcgJiYgIWhhc1JlbmRlcldhdGNoZXIodm0pKSB7XG4gICAgICAgIGlmKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpe1xuICAgICAgICAgICAgdmFyIG1wSW5zdGFuY2UgPSB2bS4kc2NvcGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWycgKyAoK25ldyBEYXRlKSArICddWycgKyAobXBJbnN0YW5jZS5pcyB8fCBtcEluc3RhbmNlLnJvdXRlKSArICddWycgKyB2bS5fdWlkICtcbiAgICAgICAgICAgICAgICAnXTpuZXh0VnVlVGljaycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0VGljayhjYiwgdm0pXG4gICAgfWVsc2V7XG4gICAgICAgIGlmKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpe1xuICAgICAgICAgICAgdmFyIG1wSW5zdGFuY2UkMSA9IHZtLiRzY29wZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlJDEuaXMgfHwgbXBJbnN0YW5jZSQxLnJvdXRlKSArICddWycgKyB2bS5fdWlkICtcbiAgICAgICAgICAgICAgICAnXTpuZXh0TVBUaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIF9yZXNvbHZlO1xuICAgIGlmICghdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzKSB7XG4gICAgICAgIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcyA9IFtdO1xuICAgIH1cbiAgICB2bS5fX25leHRfdGlja19jYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYi5jYWxsKHZtKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgJ25leHRUaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX3Jlc29sdmUpIHtcbiAgICAgICAgICAgIF9yZXNvbHZlKHZtKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGlmICghY2IgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNsb25lV2l0aERhdGEodm0pIHtcbiAgLy8g56Gu5L+d5b2T5YmNIHZtIOaJgOacieaVsOaNruiiq+WQjOatpVxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGRhdGFLZXlzID0gW10uY29uY2F0KFxuICAgIE9iamVjdC5rZXlzKHZtLl9kYXRhIHx8IHt9KSxcbiAgICBPYmplY3Qua2V5cyh2bS5fY29tcHV0ZWRXYXRjaGVycyB8fCB7fSkpO1xuXG4gIGRhdGFLZXlzLnJlZHVjZShmdW5jdGlvbihyZXQsIGtleSkge1xuICAgIHJldFtrZXldID0gdm1ba2V5XTtcbiAgICByZXR1cm4gcmV0XG4gIH0sIHJldCk7XG5cbiAgLy8gdnVlLWNvbXBvc2l0aW9uLWFwaVxuICB2YXIgY29tcG9zaXRpb25BcGlTdGF0ZSA9IHZtLl9fY29tcG9zaXRpb25fYXBpX3N0YXRlX18gfHwgdm0uX19zZWNyZXRfdmZhX3N0YXRlX187XG4gIHZhciByYXdCaW5kaW5ncyA9IGNvbXBvc2l0aW9uQXBpU3RhdGUgJiYgY29tcG9zaXRpb25BcGlTdGF0ZS5yYXdCaW5kaW5ncztcbiAgaWYgKHJhd0JpbmRpbmdzKSB7XG4gICAgT2JqZWN0LmtleXMocmF3QmluZGluZ3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0W2tleV0gPSB2bVtrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgLy9UT0RPIOmcgOimgeaKiuaXoOeUqOaVsOaNruWkhOeQhuaOie+8jOavlOWmgiBsaXN0PT5sMCDliJkgbGlzdCDpnIDopoHnp7vpmaTvvIzlkKbliJnlpJrkvKDovpPkuIDku73mlbDmja5cbiAgT2JqZWN0LmFzc2lnbihyZXQsIHZtLiRtcC5kYXRhIHx8IHt9KTtcbiAgaWYgKFxuICAgIEFycmF5LmlzQXJyYXkodm0uJG9wdGlvbnMuYmVoYXZpb3JzKSAmJlxuICAgIHZtLiRvcHRpb25zLmJlaGF2aW9ycy5pbmRleE9mKCd1bmk6Ly9mb3JtLWZpZWxkJykgIT09IC0xXG4gICkgeyAvL2Zvcm0tZmllbGRcbiAgICByZXRbJ25hbWUnXSA9IHZtLm5hbWU7XG4gICAgcmV0Wyd2YWx1ZSddID0gdm0udmFsdWU7XG4gIH1cblxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXQpKVxufVxuXG52YXIgcGF0Y2ggPSBmdW5jdGlvbihvbGRWbm9kZSwgdm5vZGUpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHZub2RlID09PSBudWxsKSB7IC8vZGVzdHJveVxuICAgIHJldHVyblxuICB9XG4gIGlmICh0aGlzLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IHRoaXMubXBUeXBlID09PSAnY29tcG9uZW50Jykge1xuICAgIHZhciBtcEluc3RhbmNlID0gdGhpcy4kc2NvcGU7XG4gICAgdmFyIGRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRyeSB7XG4gICAgICBkYXRhID0gY2xvbmVXaXRoRGF0YSh0aGlzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gICAgZGF0YS5fX3dlYnZpZXdJZF9fID0gbXBJbnN0YW5jZS5kYXRhLl9fd2Vidmlld0lkX187XG4gICAgdmFyIG1wRGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IC8v5LuF5ZCM5q2lIGRhdGEg5Lit5pyJ55qE5pWw5o2uXG4gICAgICBtcERhdGFba2V5XSA9IG1wSW5zdGFuY2UuZGF0YVtrZXldO1xuICAgIH0pO1xuICAgIHZhciBkaWZmRGF0YSA9IHRoaXMuJHNob3VsZERpZmZEYXRhID09PSBmYWxzZSA/IGRhdGEgOiBkaWZmKGRhdGEsIG1wRGF0YSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRpZmZEYXRhKS5sZW5ndGgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHRoaXMuX3VpZCArXG4gICAgICAgICAgJ13lt67ph4/mm7TmlrAnLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRpZmZEYXRhKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fbmV4dF90aWNrX3BlbmRpbmcgPSB0cnVlO1xuICAgICAgbXBJbnN0YW5jZS5zZXREYXRhKGRpZmZEYXRhLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMkMS5fX25leHRfdGlja19wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGZsdXNoQ2FsbGJhY2tzJDEodGhpcyQxKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbHVzaENhbGxiYWNrcyQxKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5UmVuZGVyKCkge1xuXG59XG5cbmZ1bmN0aW9uIG1vdW50Q29tcG9uZW50JDEoXG4gIHZtLFxuICBlbCxcbiAgaHlkcmF0aW5nXG4pIHtcbiAgaWYgKCF2bS5tcFR5cGUpIHsvL21haW4uanMg5Lit55qEIG5ldyBWdWVcbiAgICByZXR1cm4gdm1cbiAgfVxuICBpZiAodm0ubXBUeXBlID09PSAnYXBwJykge1xuICAgIHZtLiRvcHRpb25zLnJlbmRlciA9IGNyZWF0ZUVtcHR5UmVuZGVyO1xuICB9XG4gIGlmICghdm0uJG9wdGlvbnMucmVuZGVyKSB7XG4gICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlSZW5kZXI7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCh2bS4kb3B0aW9ucy50ZW1wbGF0ZSAmJiB2bS4kb3B0aW9ucy50ZW1wbGF0ZS5jaGFyQXQoMCkgIT09ICcjJykgfHxcbiAgICAgICAgdm0uJG9wdGlvbnMuZWwgfHwgZWwpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnWW91IGFyZSB1c2luZyB0aGUgcnVudGltZS1vbmx5IGJ1aWxkIG9mIFZ1ZSB3aGVyZSB0aGUgdGVtcGxhdGUgJyArXG4gICAgICAgICAgJ2NvbXBpbGVyIGlzIG5vdCBhdmFpbGFibGUuIEVpdGhlciBwcmUtY29tcGlsZSB0aGUgdGVtcGxhdGVzIGludG8gJyArXG4gICAgICAgICAgJ3JlbmRlciBmdW5jdGlvbnMsIG9yIHVzZSB0aGUgY29tcGlsZXItaW5jbHVkZWQgYnVpbGQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnRmFpbGVkIHRvIG1vdW50IGNvbXBvbmVudDogdGVtcGxhdGUgb3IgcmVuZGVyIGZ1bmN0aW9uIG5vdCBkZWZpbmVkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAhdm0uXyRmYWxsYmFjayAmJiBjYWxsSG9vayh2bSwgJ2JlZm9yZU1vdW50Jyk7XG5cbiAgdmFyIHVwZGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2bS5fdXBkYXRlKHZtLl9yZW5kZXIoKSwgaHlkcmF0aW5nKTtcbiAgfTtcblxuICAvLyB3ZSBzZXQgdGhpcyB0byB2bS5fd2F0Y2hlciBpbnNpZGUgdGhlIHdhdGNoZXIncyBjb25zdHJ1Y3RvclxuICAvLyBzaW5jZSB0aGUgd2F0Y2hlcidzIGluaXRpYWwgcGF0Y2ggbWF5IGNhbGwgJGZvcmNlVXBkYXRlIChlLmcuIGluc2lkZSBjaGlsZFxuICAvLyBjb21wb25lbnQncyBtb3VudGVkIGhvb2spLCB3aGljaCByZWxpZXMgb24gdm0uX3dhdGNoZXIgYmVpbmcgYWxyZWFkeSBkZWZpbmVkXG4gIG5ldyBXYXRjaGVyKHZtLCB1cGRhdGVDb21wb25lbnQsIG5vb3AsIHtcbiAgICBiZWZvcmU6IGZ1bmN0aW9uIGJlZm9yZSgpIHtcbiAgICAgIGlmICh2bS5faXNNb3VudGVkICYmICF2bS5faXNEZXN0cm95ZWQpIHtcbiAgICAgICAgY2FsbEhvb2sodm0sICdiZWZvcmVVcGRhdGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHRydWUgLyogaXNSZW5kZXJXYXRjaGVyICovKTtcbiAgaHlkcmF0aW5nID0gZmFsc2U7XG4gIHJldHVybiB2bVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVuZGVyQ2xhc3MgKFxuICBzdGF0aWNDbGFzcyxcbiAgZHluYW1pY0NsYXNzXG4pIHtcbiAgaWYgKGlzRGVmKHN0YXRpY0NsYXNzKSB8fCBpc0RlZihkeW5hbWljQ2xhc3MpKSB7XG4gICAgcmV0dXJuIGNvbmNhdChzdGF0aWNDbGFzcywgc3RyaW5naWZ5Q2xhc3MoZHluYW1pY0NsYXNzKSlcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIHJldHVybiBhID8gYiA/IChhICsgJyAnICsgYikgOiBhIDogKGIgfHwgJycpXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUNsYXNzICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5QXJyYXkodmFsdWUpXG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlPYmplY3QodmFsdWUpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5QXJyYXkgKHZhbHVlKSB7XG4gIHZhciByZXMgPSAnJztcbiAgdmFyIHN0cmluZ2lmaWVkO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChpc0RlZihzdHJpbmdpZmllZCA9IHN0cmluZ2lmeUNsYXNzKHZhbHVlW2ldKSkgJiYgc3RyaW5naWZpZWQgIT09ICcnKSB7XG4gICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgIHJlcyArPSBzdHJpbmdpZmllZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlPYmplY3QgKHZhbHVlKSB7XG4gIHZhciByZXMgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlW2tleV0pIHtcbiAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgcmVzICs9IGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxudmFyIHBhcnNlU3R5bGVUZXh0ID0gY2FjaGVkKGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGxpc3REZWxpbWl0ZXIgPSAvOyg/IVteKF0qXFwpKS9nO1xuICB2YXIgcHJvcGVydHlEZWxpbWl0ZXIgPSAvOiguKykvO1xuICBjc3NUZXh0LnNwbGl0KGxpc3REZWxpbWl0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdmFyIHRtcCA9IGl0ZW0uc3BsaXQocHJvcGVydHlEZWxpbWl0ZXIpO1xuICAgICAgdG1wLmxlbmd0aCA+IDEgJiYgKHJlc1t0bXBbMF0udHJpbSgpXSA9IHRtcFsxXS50cmltKCkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG4vLyBub3JtYWxpemUgcG9zc2libGUgYXJyYXkgLyBzdHJpbmcgdmFsdWVzIGludG8gT2JqZWN0XG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZUJpbmRpbmcgKGJpbmRpbmdTdHlsZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgcmV0dXJuIHRvT2JqZWN0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VTdHlsZVRleHQoYmluZGluZ1N0eWxlKVxuICB9XG4gIHJldHVybiBiaW5kaW5nU3R5bGVcbn1cblxuLyogICovXG5cbnZhciBNUF9NRVRIT0RTID0gWydjcmVhdGVTZWxlY3RvclF1ZXJ5JywgJ2NyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyJywgJ3NlbGVjdEFsbENvbXBvbmVudHMnLCAnc2VsZWN0Q29tcG9uZW50J107XG5cbmZ1bmN0aW9uIGdldFRhcmdldChvYmosIHBhdGgpIHtcbiAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgnLicpO1xuICB2YXIga2V5ID0gcGFydHNbMF07XG4gIGlmIChrZXkuaW5kZXhPZignX18kbicpID09PSAwKSB7IC8vbnVtYmVyIGluZGV4XG4gICAga2V5ID0gcGFyc2VJbnQoa2V5LnJlcGxhY2UoJ19fJG4nLCAnJykpO1xuICB9XG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gb2JqW2tleV1cbiAgfVxuICByZXR1cm4gZ2V0VGFyZ2V0KG9ialtrZXldLCBwYXJ0cy5zbGljZSgxKS5qb2luKCcuJykpXG59XG5cbmZ1bmN0aW9uIGludGVybmFsTWl4aW4oVnVlKSB7XG5cbiAgVnVlLmNvbmZpZy5lcnJvckhhbmRsZXIgPSBmdW5jdGlvbihlcnIsIHZtLCBpbmZvKSB7XG4gICAgVnVlLnV0aWwud2FybigoXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgKGVyci50b1N0cmluZygpKSArIFwiXFxcIlwiKSwgdm0pO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgIHZhciBhcHAgPSB0eXBlb2YgZ2V0QXBwID09PSAnZnVuY3Rpb24nICYmIGdldEFwcCgpO1xuICAgIGlmIChhcHAgJiYgYXBwLm9uRXJyb3IpIHtcbiAgICAgIGFwcC5vbkVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBvbGRFbWl0ID0gVnVlLnByb3RvdHlwZS4kZW1pdDtcblxuICBWdWUucHJvdG90eXBlLiRlbWl0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgZXZlbnQpIHtcbiAgICAgIHRoaXMuJHNjb3BlWyd0cmlnZ2VyRXZlbnQnXShldmVudCwge1xuICAgICAgICBfX2FyZ3NfXzogdG9BcnJheShhcmd1bWVudHMsIDEpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9sZEVtaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG5leHRUaWNrID0gZnVuY3Rpb24oZm4pIHtcbiAgICByZXR1cm4gbmV4dFRpY2skMSh0aGlzLCBmbilcbiAgfTtcblxuICBNUF9NRVRIT0RTLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIFZ1ZS5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZVttZXRob2RdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZVttZXRob2RdKGFyZ3MpXG4gICAgICB9XG4gICAgICAvLyBtcC1hbGlwYXlcbiAgICAgIGlmICh0eXBlb2YgbXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKG1ldGhvZCA9PT0gJ2NyZWF0ZVNlbGVjdG9yUXVlcnknKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgICAgIHJldHVybiBteS5jcmVhdGVTZWxlY3RvclF1ZXJ5KGFyZ3MpXG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2NyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyJykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgICAgICByZXR1cm4gbXkuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoYXJncylcbiAgICAgIH1cbiAgICAgIC8vIFRPRE8gbXAtYWxpcGF5IOaaguS4jeaUr+aMgSBzZWxlY3RBbGxDb21wb25lbnRzLHNlbGVjdENvbXBvbmVudFxuICAgIH07XG4gIH0pO1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19pbml0X3Byb3ZpZGUgPSBpbml0UHJvdmlkZTtcblxuICBWdWUucHJvdG90eXBlLl9faW5pdF9pbmplY3Rpb25zID0gaW5pdEluamVjdGlvbnM7XG5cbiAgVnVlLnByb3RvdHlwZS5fX2NhbGxfaG9vayA9IGZ1bmN0aW9uKGhvb2ssIGFyZ3MpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcbiAgICBwdXNoVGFyZ2V0KCk7XG4gICAgdmFyIGhhbmRsZXJzID0gdm0uJG9wdGlvbnNbaG9va107XG4gICAgdmFyIGluZm8gPSBob29rICsgXCIgaG9va1wiO1xuICAgIHZhciByZXQ7XG4gICAgaWYgKGhhbmRsZXJzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICByZXQgPSBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhoYW5kbGVyc1tpXSwgdm0sIGFyZ3MgPyBbYXJnc10gOiBudWxsLCB2bSwgaW5mbyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2bS5faGFzSG9va0V2ZW50KSB7XG4gICAgICB2bS4kZW1pdCgnaG9vazonICsgaG9vaywgYXJncyk7XG4gICAgfVxuICAgIHBvcFRhcmdldCgpO1xuICAgIHJldHVybiByZXRcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9fc2V0X21vZGVsID0gZnVuY3Rpb24odGFyZ2V0LCBrZXksIHZhbHVlLCBtb2RpZmllcnMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RpZmllcnMpKSB7XG4gICAgICBpZiAobW9kaWZpZXJzLmluZGV4T2YoJ3RyaW0nKSAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgICB9XG4gICAgICBpZiAobW9kaWZpZXJzLmluZGV4T2YoJ251bWJlcicpICE9PSAtMSkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX24odmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGFyZ2V0ID0gdGhpcztcbiAgICB9XG4gICAgLy8g6Kej5Yaz5Yqo5oCB5bGe5oCn5re75YqgXHJcbiAgICBWdWUuc2V0KHRhcmdldCwga2V5LCB2YWx1ZSlcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9fc2V0X3N5bmMgPSBmdW5jdGlvbih0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGFyZ2V0ID0gdGhpcztcbiAgICB9XG4gICAgLy8g6Kej5Yaz5Yqo5oCB5bGe5oCn5re75YqgXHJcbiAgICBWdWUuc2V0KHRhcmdldCwga2V5LCB2YWx1ZSlcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9fZ2V0X29yaWcgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoaXRlbSkpIHtcbiAgICAgIHJldHVybiBpdGVtWyckb3JpZyddIHx8IGl0ZW1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9fZ2V0X3ZhbHVlID0gZnVuY3Rpb24oZGF0YVBhdGgsIHRhcmdldCkge1xuICAgIHJldHVybiBnZXRUYXJnZXQodGFyZ2V0IHx8IHRoaXMsIGRhdGFQYXRoKVxuICB9O1xuXG5cbiAgVnVlLnByb3RvdHlwZS5fX2dldF9jbGFzcyA9IGZ1bmN0aW9uKGR5bmFtaWNDbGFzcywgc3RhdGljQ2xhc3MpIHtcbiAgICByZXR1cm4gcmVuZGVyQ2xhc3Moc3RhdGljQ2xhc3MsIGR5bmFtaWNDbGFzcylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9fZ2V0X3N0eWxlID0gZnVuY3Rpb24oZHluYW1pY1N0eWxlLCBzdGF0aWNTdHlsZSkge1xuICAgIGlmICghZHluYW1pY1N0eWxlICYmICFzdGF0aWNTdHlsZSkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHZhciBkeW5hbWljU3R5bGVPYmogPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoZHluYW1pY1N0eWxlKTtcbiAgICB2YXIgc3R5bGVPYmogPSBzdGF0aWNTdHlsZSA/IGV4dGVuZChzdGF0aWNTdHlsZSwgZHluYW1pY1N0eWxlT2JqKSA6IGR5bmFtaWNTdHlsZU9iajtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVPYmopLm1hcChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gKChoeXBoZW5hdGUobmFtZSkpICsgXCI6XCIgKyAoc3R5bGVPYmpbbmFtZV0pKTsgfSkuam9pbignOycpXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX21hcCA9IGZ1bmN0aW9uKHZhbCwgaXRlcmF0ZWUpIHtcbiAgICAvL1RPRE8g5pqC5LiN6ICD6JmRIHN0cmluZ1xuICAgIHZhciByZXQsIGksIGwsIGtleXMsIGtleTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0gdmFsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICByZXRbaV0gPSBpdGVyYXRlZSh2YWxbaV0sIGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldFxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgICByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgZm9yIChpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgIHJldFtrZXldID0gaXRlcmF0ZWUodmFsW2tleV0sIGtleSwgaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0ID0gbmV3IEFycmF5KHZhbCk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0gdmFsOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIC8vIOesrOS4gOS4quWPguaVsOaaguaXtuS7jeWSjOWwj+eoi+W6j+S4gOiHtFxuICAgICAgICByZXRbaV0gPSBpdGVyYXRlZShpLCBpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXRcbiAgICB9XG4gICAgcmV0dXJuIFtdXG4gIH07XG5cbn1cblxuLyogICovXG5cbnZhciBMSUZFQ1lDTEVfSE9PS1MkMSA9IFtcbiAgICAvL0FwcFxuICAgICdvbkxhdW5jaCcsXG4gICAgJ29uU2hvdycsXG4gICAgJ29uSGlkZScsXG4gICAgJ29uVW5pTlZpZXdNZXNzYWdlJyxcbiAgICAnb25QYWdlTm90Rm91bmQnLFxuICAgICdvblRoZW1lQ2hhbmdlJyxcbiAgICAnb25FcnJvcicsXG4gICAgJ29uVW5oYW5kbGVkUmVqZWN0aW9uJyxcbiAgICAvL1BhZ2VcbiAgICAnb25Jbml0JyxcbiAgICAnb25Mb2FkJyxcbiAgICAvLyAnb25TaG93JyxcbiAgICAnb25SZWFkeScsXG4gICAgLy8gJ29uSGlkZScsXG4gICAgJ29uVW5sb2FkJyxcbiAgICAnb25QdWxsRG93blJlZnJlc2gnLFxuICAgICdvblJlYWNoQm90dG9tJyxcbiAgICAnb25UYWJJdGVtVGFwJyxcbiAgICAnb25BZGRUb0Zhdm9yaXRlcycsXG4gICAgJ29uU2hhcmVUaW1lbGluZScsXG4gICAgJ29uU2hhcmVBcHBNZXNzYWdlJyxcbiAgICAnb25SZXNpemUnLFxuICAgICdvblBhZ2VTY3JvbGwnLFxuICAgICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnLFxuICAgICdvbkJhY2tQcmVzcycsXG4gICAgJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcsXG4gICAgJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJyxcbiAgICAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJyxcbiAgICAvL0NvbXBvbmVudFxuICAgIC8vICdvblJlYWR5JywgLy8g5YW85a655pen54mI5pys77yM5bqU6K+l56e76Zmk6K+l5LqL5Lu2XG4gICAgJ29uUGFnZVNob3cnLFxuICAgICdvblBhZ2VIaWRlJyxcbiAgICAnb25QYWdlUmVzaXplJ1xuXTtcbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluJDEoVnVlKSB7XG5cbiAgICAvL2ZpeGVkIHZ1ZS1jbGFzcy1jb21wb25lbnRcbiAgICB2YXIgb2xkRXh0ZW5kID0gVnVlLmV4dGVuZDtcbiAgICBWdWUuZXh0ZW5kID0gZnVuY3Rpb24oZXh0ZW5kT3B0aW9ucykge1xuICAgICAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB2YXIgbWV0aG9kcyA9IGV4dGVuZE9wdGlvbnMubWV0aG9kcztcbiAgICAgICAgaWYgKG1ldGhvZHMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoTElGRUNZQ0xFX0hPT0tTJDEuaW5kZXhPZihtZXRob2ROYW1lKSE9PS0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZE9wdGlvbnNbbWV0aG9kTmFtZV0gPSBtZXRob2RzW21ldGhvZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWV0aG9kc1ttZXRob2ROYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvbGRFeHRlbmQuY2FsbCh0aGlzLCBleHRlbmRPcHRpb25zKVxuICAgIH07XG5cbiAgICB2YXIgc3RyYXRlZ2llcyA9IFZ1ZS5jb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuICAgIHZhciBtZXJnZUhvb2sgPSBzdHJhdGVnaWVzLmNyZWF0ZWQ7XG4gICAgTElGRUNZQ0xFX0hPT0tTJDEuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgICBzdHJhdGVnaWVzW2hvb2tdID0gbWVyZ2VIb29rO1xuICAgIH0pO1xuXG4gICAgVnVlLnByb3RvdHlwZS5fX2xpZmVjeWNsZV9ob29rc19fID0gTElGRUNZQ0xFX0hPT0tTJDE7XG59XG5cbi8qICAqL1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHBhdGNoIGZ1bmN0aW9uXG5WdWUucHJvdG90eXBlLl9fcGF0Y2hfXyA9IHBhdGNoO1xuXG4vLyBwdWJsaWMgbW91bnQgbWV0aG9kXG5WdWUucHJvdG90eXBlLiRtb3VudCA9IGZ1bmN0aW9uKFxuICAgIGVsICxcbiAgICBoeWRyYXRpbmdcbikge1xuICAgIHJldHVybiBtb3VudENvbXBvbmVudCQxKHRoaXMsIGVsLCBoeWRyYXRpbmcpXG59O1xuXG5saWZlY3ljbGVNaXhpbiQxKFZ1ZSk7XG5pbnRlcm5hbE1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5leHBvcnQgZGVmYXVsdCBWdWU7XG4iLCJjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IGlzT2JqZWN0ID0gKHZhbCkgPT4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xuY29uc3QgZGVmYXVsdERlbGltaXRlcnMgPSBbJ3snLCAnfSddO1xuY2xhc3MgQmFzZUZvcm1hdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIGludGVycG9sYXRlKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycyA9IGRlZmF1bHREZWxpbWl0ZXJzKSB7XG4gICAgICAgIGlmICghdmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gW21lc3NhZ2VdO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b2tlbnMgPSB0aGlzLl9jYWNoZXNbbWVzc2FnZV07XG4gICAgICAgIGlmICghdG9rZW5zKSB7XG4gICAgICAgICAgICB0b2tlbnMgPSBwYXJzZShtZXNzYWdlLCBkZWxpbWl0ZXJzKTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlc1ttZXNzYWdlXSA9IHRva2VucztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcGlsZSh0b2tlbnMsIHZhbHVlcyk7XG4gICAgfVxufVxuY29uc3QgUkVfVE9LRU5fTElTVF9WQUxVRSA9IC9eKD86XFxkKSsvO1xuY29uc3QgUkVfVE9LRU5fTkFNRURfVkFMVUUgPSAvXig/OlxcdykrLztcbmZ1bmN0aW9uIHBhcnNlKGZvcm1hdCwgW3N0YXJ0RGVsaW1pdGVyLCBlbmREZWxpbWl0ZXJdKSB7XG4gICAgY29uc3QgdG9rZW5zID0gW107XG4gICAgbGV0IHBvc2l0aW9uID0gMDtcbiAgICBsZXQgdGV4dCA9ICcnO1xuICAgIHdoaWxlIChwb3NpdGlvbiA8IGZvcm1hdC5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGNoYXIgPSBmb3JtYXRbcG9zaXRpb24rK107XG4gICAgICAgIGlmIChjaGFyID09PSBzdGFydERlbGltaXRlcikge1xuICAgICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHRleHQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICAgICAgICBsZXQgc3ViID0gJyc7XG4gICAgICAgICAgICBjaGFyID0gZm9ybWF0W3Bvc2l0aW9uKytdO1xuICAgICAgICAgICAgd2hpbGUgKGNoYXIgIT09IHVuZGVmaW5lZCAmJiBjaGFyICE9PSBlbmREZWxpbWl0ZXIpIHtcbiAgICAgICAgICAgICAgICBzdWIgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBjaGFyID0gZm9ybWF0W3Bvc2l0aW9uKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNDbG9zZWQgPSBjaGFyID09PSBlbmREZWxpbWl0ZXI7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gUkVfVE9LRU5fTElTVF9WQUxVRS50ZXN0KHN1YilcbiAgICAgICAgICAgICAgICA/ICdsaXN0J1xuICAgICAgICAgICAgICAgIDogaXNDbG9zZWQgJiYgUkVfVE9LRU5fTkFNRURfVkFMVUUudGVzdChzdWIpXG4gICAgICAgICAgICAgICAgICAgID8gJ25hbWVkJ1xuICAgICAgICAgICAgICAgICAgICA6ICd1bmtub3duJztcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdmFsdWU6IHN1YiwgdHlwZSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyAgZWxzZSBpZiAoY2hhciA9PT0gJyUnKSB7XG4gICAgICAgIC8vICAgLy8gd2hlbiBmb3VuZCByYWlscyBpMThuIHN5bnRheCwgc2tpcCB0ZXh0IGNhcHR1cmVcbiAgICAgICAgLy8gICBpZiAoZm9ybWF0W3Bvc2l0aW9uXSAhPT0gJ3snKSB7XG4gICAgICAgIC8vICAgICB0ZXh0ICs9IGNoYXJcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGNoYXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGV4dCAmJiB0b2tlbnMucHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHRleHQgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbmZ1bmN0aW9uIGNvbXBpbGUodG9rZW5zLCB2YWx1ZXMpIHtcbiAgICBjb25zdCBjb21waWxlZCA9IFtdO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgY29uc3QgbW9kZSA9IGlzQXJyYXkodmFsdWVzKVxuICAgICAgICA/ICdsaXN0J1xuICAgICAgICA6IGlzT2JqZWN0KHZhbHVlcylcbiAgICAgICAgICAgID8gJ25hbWVkJ1xuICAgICAgICAgICAgOiAndW5rbm93bic7XG4gICAgaWYgKG1vZGUgPT09ICd1bmtub3duJykge1xuICAgICAgICByZXR1cm4gY29tcGlsZWQ7XG4gICAgfVxuICAgIHdoaWxlIChpbmRleCA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xuICAgICAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgIGNvbXBpbGVkLnB1c2godG9rZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGlzdCc6XG4gICAgICAgICAgICAgICAgY29tcGlsZWQucHVzaCh2YWx1ZXNbcGFyc2VJbnQodG9rZW4udmFsdWUsIDEwKV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbmFtZWQnOlxuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnbmFtZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBpbGVkLnB1c2godmFsdWVzW3Rva2VuLnZhbHVlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUeXBlIG9mIHRva2VuICcke3Rva2VuLnR5cGV9JyBhbmQgZm9ybWF0IG9mIHZhbHVlICcke21vZGV9JyBkb24ndCBtYXRjaCFgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Vua25vd24nOlxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgRGV0ZWN0ICd1bmtub3duJyB0eXBlIG9mIHRva2VuIWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpbmRleCsrO1xuICAgIH1cbiAgICByZXR1cm4gY29tcGlsZWQ7XG59XG5cbmNvbnN0IExPQ0FMRV9aSF9IQU5TID0gJ3poLUhhbnMnO1xuY29uc3QgTE9DQUxFX1pIX0hBTlQgPSAnemgtSGFudCc7XG5jb25zdCBMT0NBTEVfRU4gPSAnZW4nO1xuY29uc3QgTE9DQUxFX0ZSID0gJ2ZyJztcbmNvbnN0IExPQ0FMRV9FUyA9ICdlcyc7XG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5jb25zdCBoYXNPd24gPSAodmFsLCBrZXkpID0+IGhhc093blByb3BlcnR5LmNhbGwodmFsLCBrZXkpO1xuY29uc3QgZGVmYXVsdEZvcm1hdHRlciA9IG5ldyBCYXNlRm9ybWF0dGVyKCk7XG5mdW5jdGlvbiBpbmNsdWRlKHN0ciwgcGFydHMpIHtcbiAgICByZXR1cm4gISFwYXJ0cy5maW5kKChwYXJ0KSA9PiBzdHIuaW5kZXhPZihwYXJ0KSAhPT0gLTEpO1xufVxuZnVuY3Rpb24gc3RhcnRzV2l0aChzdHIsIHBhcnRzKSB7XG4gICAgcmV0dXJuIHBhcnRzLmZpbmQoKHBhcnQpID0+IHN0ci5pbmRleE9mKHBhcnQpID09PSAwKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShsb2NhbGUsIG1lc3NhZ2VzKSB7XG4gICAgaWYgKCFsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2NhbGUgPSBsb2NhbGUudHJpbSgpLnJlcGxhY2UoL18vZywgJy0nKTtcbiAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXNbbG9jYWxlXSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgIH1cbiAgICBsb2NhbGUgPSBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG9jYWxlLmluZGV4T2YoJ3poJykgPT09IDApIHtcbiAgICAgICAgaWYgKGxvY2FsZS5pbmRleE9mKCctaGFucycpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBMT0NBTEVfWkhfSEFOUztcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlLmluZGV4T2YoJy1oYW50JykgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5UO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmNsdWRlKGxvY2FsZSwgWyctdHcnLCAnLWhrJywgJy1tbycsICctY2h0J10pKSB7XG4gICAgICAgICAgICByZXR1cm4gTE9DQUxFX1pIX0hBTlQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5TO1xuICAgIH1cbiAgICBjb25zdCBsYW5nID0gc3RhcnRzV2l0aChsb2NhbGUsIFtMT0NBTEVfRU4sIExPQ0FMRV9GUiwgTE9DQUxFX0VTXSk7XG4gICAgaWYgKGxhbmcpIHtcbiAgICAgICAgcmV0dXJuIGxhbmc7XG4gICAgfVxufVxuY2xhc3MgSTE4biB7XG4gICAgY29uc3RydWN0b3IoeyBsb2NhbGUsIGZhbGxiYWNrTG9jYWxlLCBtZXNzYWdlcywgd2F0Y2hlciwgZm9ybWF0ZXIsIH0pIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBMT0NBTEVfRU47XG4gICAgICAgIHRoaXMuZmFsbGJhY2tMb2NhbGUgPSBMT0NBTEVfRU47XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHt9O1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0ge307XG4gICAgICAgIHRoaXMud2F0Y2hlcnMgPSBbXTtcbiAgICAgICAgaWYgKGZhbGxiYWNrTG9jYWxlKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxiYWNrTG9jYWxlID0gZmFsbGJhY2tMb2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtYXRlciA9IGZvcm1hdGVyIHx8IGRlZmF1bHRGb3JtYXR0ZXI7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcyB8fCB7fTtcbiAgICAgICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IExPQ0FMRV9FTik7XG4gICAgICAgIGlmICh3YXRjaGVyKSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoTG9jYWxlKHdhdGNoZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldExvY2FsZShsb2NhbGUpIHtcbiAgICAgICAgY29uc3Qgb2xkTG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbm9ybWFsaXplTG9jYWxlKGxvY2FsZSwgdGhpcy5tZXNzYWdlcykgfHwgdGhpcy5mYWxsYmFja0xvY2FsZTtcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VzW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgLy8g5Y+v6IO95Yid5aeL5YyW5pe25LiN5a2Y5ZyoXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW3RoaXMubG9jYWxlXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMubWVzc2FnZXNbdGhpcy5sb2NhbGVdO1xuICAgICAgICAvLyDku4Xlj5HnlJ/lj5jljJbml7bvvIzpgJrnn6VcbiAgICAgICAgaWYgKG9sZExvY2FsZSAhPT0gdGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcnMuZm9yRWFjaCgod2F0Y2hlcikgPT4ge1xuICAgICAgICAgICAgICAgIHdhdGNoZXIodGhpcy5sb2NhbGUsIG9sZExvY2FsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRMb2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZTtcbiAgICB9XG4gICAgd2F0Y2hMb2NhbGUoZm4pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLndhdGNoZXJzLnB1c2goZm4pIC0gMTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYWRkKGxvY2FsZSwgbWVzc2FnZSwgb3ZlcnJpZGUgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGN1ck1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlc1tsb2NhbGVdO1xuICAgICAgICBpZiAoY3VyTWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3VyTWVzc2FnZXMsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWVzc2FnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzT3duKGN1ck1lc3NhZ2VzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJNZXNzYWdlc1trZXldID0gbWVzc2FnZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2xvY2FsZV0gPSBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGYobWVzc2FnZSwgdmFsdWVzLCBkZWxpbWl0ZXJzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdGVyLmludGVycG9sYXRlKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycykuam9pbignJyk7XG4gICAgfVxuICAgIHQoa2V5LCBsb2NhbGUsIHZhbHVlcykge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgaWYgKHR5cGVvZiBsb2NhbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsb2NhbGUgPSBub3JtYWxpemVMb2NhbGUobG9jYWxlLCB0aGlzLm1lc3NhZ2VzKTtcbiAgICAgICAgICAgIGxvY2FsZSAmJiAobWVzc2FnZSA9IHRoaXMubWVzc2FnZXNbbG9jYWxlXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNPd24obWVzc2FnZSwga2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW5ub3QgdHJhbnNsYXRlIHRoZSB2YWx1ZSBvZiBrZXlwYXRoICR7a2V5fS4gVXNlIHRoZSB2YWx1ZSBvZiBrZXlwYXRoIGFzIGRlZmF1bHQuYCk7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdGVyLmludGVycG9sYXRlKG1lc3NhZ2Vba2V5XSwgdmFsdWVzKS5qb2luKCcnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHdhdGNoQXBwTG9jYWxlKGFwcFZtLCBpMThuKSB7XG4gICAgLy8g6ZyA6KaB5L+d6K+BIHdhdGNoIOeahOinpuWPkeWcqOe7hOS7tua4suafk+S5i+WJjVxuICAgIGlmIChhcHBWbS4kd2F0Y2hMb2NhbGUpIHtcbiAgICAgICAgLy8gdnVlMlxuICAgICAgICBhcHBWbS4kd2F0Y2hMb2NhbGUoKG5ld0xvY2FsZSkgPT4ge1xuICAgICAgICAgICAgaTE4bi5zZXRMb2NhbGUobmV3TG9jYWxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhcHBWbS4kd2F0Y2goKCkgPT4gYXBwVm0uJGxvY2FsZSwgKG5ld0xvY2FsZSkgPT4ge1xuICAgICAgICAgICAgaTE4bi5zZXRMb2NhbGUobmV3TG9jYWxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0RGVmYXVsdExvY2FsZSgpIHtcbiAgICBpZiAodHlwZW9mIHVuaSAhPT0gJ3VuZGVmaW5lZCcgJiYgdW5pLmdldExvY2FsZSkge1xuICAgICAgICByZXR1cm4gdW5pLmdldExvY2FsZSgpO1xuICAgIH1cbiAgICAvLyDlsI/nqIvluo/lubPlj7DvvIx1bmkg5ZKMIHVuaS1pMThuIOS6kuebuOW8leeUqO+8jOWvvOiHtOiuv+mXruS4jeWIsCB1bmnvvIzmlYXlnKggZ2xvYmFsIOS4iuaMguS6hiBnZXRMb2NhbGVcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLmdldExvY2FsZSkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsLmdldExvY2FsZSgpO1xuICAgIH1cbiAgICByZXR1cm4gTE9DQUxFX0VOO1xufVxuZnVuY3Rpb24gaW5pdFZ1ZUkxOG4obG9jYWxlLCBtZXNzYWdlcyA9IHt9LCBmYWxsYmFja0xvY2FsZSwgd2F0Y2hlcikge1xuICAgIC8vIOWFvOWuueaXp+eJiOacrOWFpeWPglxuICAgIGlmICh0eXBlb2YgbG9jYWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICBbbG9jYWxlLCBtZXNzYWdlc10gPSBbXG4gICAgICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsb2NhbGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIOWboOS4uuWwj+eoi+W6j+W5s+WPsO+8jHVuaS1pMThuIOWSjCB1bmkg5LqS55u45byV55So77yM5a+86Ie05q2k5pe26K6/6ZeuIHVuaSDml7bvvIzkuLogdW5kZWZpbmVkXG4gICAgICAgIGxvY2FsZSA9IGdldERlZmF1bHRMb2NhbGUoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmYWxsYmFja0xvY2FsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgZmFsbGJhY2tMb2NhbGUgPVxuICAgICAgICAgICAgKHR5cGVvZiBfX3VuaUNvbmZpZyAhPT0gJ3VuZGVmaW5lZCcgJiYgX191bmlDb25maWcuZmFsbGJhY2tMb2NhbGUpIHx8XG4gICAgICAgICAgICAgICAgTE9DQUxFX0VOO1xuICAgIH1cbiAgICBjb25zdCBpMThuID0gbmV3IEkxOG4oe1xuICAgICAgICBsb2NhbGUsXG4gICAgICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgd2F0Y2hlcixcbiAgICB9KTtcbiAgICBsZXQgdCA9IChrZXksIHZhbHVlcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGdldEFwcCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gYXBwIHZpZXdcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWZ1bmMtYXNzaWduICovXG4gICAgICAgICAgICB0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkxOG4udChrZXksIHZhbHVlcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGlzV2F0Y2hlZEFwcExvY2FsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcFZtID0gZ2V0QXBwKCkuJHZtO1xuICAgICAgICAgICAgICAgIC8vIOWPr+iDvSR2bei/mOS4jeWtmOWcqO+8jOavlOWmguWcqOaUr+S7mOWuneWwj+eoi+W6j+S4re+8jOe7hOS7tuWumuS5iei+g+aXqe+8jOWcqHByb3Bz55qEZGVmYXVsdOmHjOS9v+eUqOS6hnQoKeWHveaVsO+8iOWmgnVuaS1nb29kcy1uYXbvvInvvIzmraTml7ZhcHDov5jmnKrliJ3lp4vljJZcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgLy8gXHR0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICAvLyBcdGRlZmF1bHQgKCkge1xuICAgICAgICAgICAgICAgIC8vIFx0XHRyZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAvLyBcdFx0XHRpY29uOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgLy8gXHRcdFx0dGV4dDogdChcInVuaS1nb29kcy1uYXYub3B0aW9ucy5zaG9wXCIpLFxuICAgICAgICAgICAgICAgIC8vIFx0XHR9LCB7XG4gICAgICAgICAgICAgICAgLy8gXHRcdFx0aWNvbjogJ2NhcnQnLFxuICAgICAgICAgICAgICAgIC8vIFx0XHRcdHRleHQ6IHQoXCJ1bmktZ29vZHMtbmF2Lm9wdGlvbnMuY2FydFwiKVxuICAgICAgICAgICAgICAgIC8vIFx0XHR9XVxuICAgICAgICAgICAgICAgIC8vIFx0fVxuICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgaWYgKGFwcFZtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOinpuWPkeWTjeW6lOW8j1xuICAgICAgICAgICAgICAgICAgICBhcHBWbS4kbG9jYWxlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzV2F0Y2hlZEFwcExvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNXYXRjaGVkQXBwTG9jYWxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoQXBwTG9jYWxlKGFwcFZtLCBpMThuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaTE4bi50KGtleSwgdmFsdWVzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQoa2V5LCB2YWx1ZXMpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaTE4bixcbiAgICAgICAgZihtZXNzYWdlLCB2YWx1ZXMsIGRlbGltaXRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBpMThuLmYobWVzc2FnZSwgdmFsdWVzLCBkZWxpbWl0ZXJzKTtcbiAgICAgICAgfSxcbiAgICAgICAgdChrZXksIHZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHQoa2V5LCB2YWx1ZXMpO1xuICAgICAgICB9LFxuICAgICAgICBhZGQobG9jYWxlLCBtZXNzYWdlLCBvdmVycmlkZSA9IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBpMThuLmFkZChsb2NhbGUsIG1lc3NhZ2UsIG92ZXJyaWRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2goZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBpMThuLndhdGNoTG9jYWxlKGZuKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0TG9jYWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIGkxOG4uZ2V0TG9jYWxlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldExvY2FsZShuZXdMb2NhbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBpMThuLnNldExvY2FsZShuZXdMb2NhbGUpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5cbmNvbnN0IGlzU3RyaW5nID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG5sZXQgZm9ybWF0ZXI7XG5mdW5jdGlvbiBoYXNJMThuSnNvbihqc29uT2JqLCBkZWxpbWl0ZXJzKSB7XG4gICAgaWYgKCFmb3JtYXRlcikge1xuICAgICAgICBmb3JtYXRlciA9IG5ldyBCYXNlRm9ybWF0dGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB3YWxrSnNvbk9iaihqc29uT2JqLCAoanNvbk9iaiwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0ganNvbk9ialtrZXldO1xuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAoaXNJMThuU3RyKHZhbHVlLCBkZWxpbWl0ZXJzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGhhc0kxOG5Kc29uKHZhbHVlLCBkZWxpbWl0ZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VJMThuSnNvbihqc29uT2JqLCB2YWx1ZXMsIGRlbGltaXRlcnMpIHtcbiAgICBpZiAoIWZvcm1hdGVyKSB7XG4gICAgICAgIGZvcm1hdGVyID0gbmV3IEJhc2VGb3JtYXR0ZXIoKTtcbiAgICB9XG4gICAgd2Fsa0pzb25PYmooanNvbk9iaiwgKGpzb25PYmosIGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGpzb25PYmpba2V5XTtcbiAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGlzSTE4blN0cih2YWx1ZSwgZGVsaW1pdGVycykpIHtcbiAgICAgICAgICAgICAgICBqc29uT2JqW2tleV0gPSBjb21waWxlU3RyKHZhbHVlLCB2YWx1ZXMsIGRlbGltaXRlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VJMThuSnNvbih2YWx1ZSwgdmFsdWVzLCBkZWxpbWl0ZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBqc29uT2JqO1xufVxuZnVuY3Rpb24gY29tcGlsZUkxOG5Kc29uU3RyKGpzb25TdHIsIHsgbG9jYWxlLCBsb2NhbGVzLCBkZWxpbWl0ZXJzLCB9KSB7XG4gICAgaWYgKCFpc0kxOG5TdHIoanNvblN0ciwgZGVsaW1pdGVycykpIHtcbiAgICAgICAgcmV0dXJuIGpzb25TdHI7XG4gICAgfVxuICAgIGlmICghZm9ybWF0ZXIpIHtcbiAgICAgICAgZm9ybWF0ZXIgPSBuZXcgQmFzZUZvcm1hdHRlcigpO1xuICAgIH1cbiAgICBjb25zdCBsb2NhbGVWYWx1ZXMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbGVzKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lICE9PSBsb2NhbGUpIHtcbiAgICAgICAgICAgIGxvY2FsZVZhbHVlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBsb2NhbGVzW25hbWVdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBsb2NhbGVWYWx1ZXMudW5zaGlmdCh7IGxvY2FsZSwgdmFsdWVzOiBsb2NhbGVzW2xvY2FsZV0gfSk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGNvbXBpbGVKc29uT2JqKEpTT04ucGFyc2UoanNvblN0ciksIGxvY2FsZVZhbHVlcywgZGVsaW1pdGVycyksIG51bGwsIDIpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkgeyB9XG4gICAgcmV0dXJuIGpzb25TdHI7XG59XG5mdW5jdGlvbiBpc0kxOG5TdHIodmFsdWUsIGRlbGltaXRlcnMpIHtcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZihkZWxpbWl0ZXJzWzBdKSA+IC0xO1xufVxuZnVuY3Rpb24gY29tcGlsZVN0cih2YWx1ZSwgdmFsdWVzLCBkZWxpbWl0ZXJzKSB7XG4gICAgcmV0dXJuIGZvcm1hdGVyLmludGVycG9sYXRlKHZhbHVlLCB2YWx1ZXMsIGRlbGltaXRlcnMpLmpvaW4oJycpO1xufVxuZnVuY3Rpb24gY29tcGlsZVZhbHVlKGpzb25PYmosIGtleSwgbG9jYWxlVmFsdWVzLCBkZWxpbWl0ZXJzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBqc29uT2JqW2tleV07XG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAvLyDlrZjlnKjlm73pmYXljJZcbiAgICAgICAgaWYgKGlzSTE4blN0cih2YWx1ZSwgZGVsaW1pdGVycykpIHtcbiAgICAgICAgICAgIGpzb25PYmpba2V5XSA9IGNvbXBpbGVTdHIodmFsdWUsIGxvY2FsZVZhbHVlc1swXS52YWx1ZXMsIGRlbGltaXRlcnMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVZhbHVlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgLy8g5qC85byP5YyW5Zu96ZmF5YyW6K+t6KiAXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVMb2NhbGVzID0gKGpzb25PYmpba2V5ICsgJ0xvY2FsZXMnXSA9IHt9KTtcbiAgICAgICAgICAgICAgICBsb2NhbGVWYWx1ZXMuZm9yRWFjaCgobG9jYWxWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZUxvY2FsZXNbbG9jYWxWYWx1ZS5sb2NhbGVdID0gY29tcGlsZVN0cih2YWx1ZSwgbG9jYWxWYWx1ZS52YWx1ZXMsIGRlbGltaXRlcnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb21waWxlSnNvbk9iaih2YWx1ZSwgbG9jYWxlVmFsdWVzLCBkZWxpbWl0ZXJzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjb21waWxlSnNvbk9iaihqc29uT2JqLCBsb2NhbGVWYWx1ZXMsIGRlbGltaXRlcnMpIHtcbiAgICB3YWxrSnNvbk9iaihqc29uT2JqLCAoanNvbk9iaiwga2V5KSA9PiB7XG4gICAgICAgIGNvbXBpbGVWYWx1ZShqc29uT2JqLCBrZXksIGxvY2FsZVZhbHVlcywgZGVsaW1pdGVycyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGpzb25PYmo7XG59XG5mdW5jdGlvbiB3YWxrSnNvbk9iaihqc29uT2JqLCB3YWxrKSB7XG4gICAgaWYgKGlzQXJyYXkoanNvbk9iaikpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uT2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAod2Fsayhqc29uT2JqLCBpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KGpzb25PYmopKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGpzb25PYmopIHtcbiAgICAgICAgICAgIGlmICh3YWxrKGpzb25PYmosIGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVMb2NhbGUobG9jYWxlcykge1xuICAgIHJldHVybiAobG9jYWxlKSA9PiB7XG4gICAgICAgIGlmICghbG9jYWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsZSA9IG5vcm1hbGl6ZUxvY2FsZShsb2NhbGUpIHx8IGxvY2FsZTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVMb2NhbGVDaGFpbihsb2NhbGUpLmZpbmQoKGxvY2FsZSkgPT4gbG9jYWxlcy5pbmRleE9mKGxvY2FsZSkgPiAtMSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVMb2NhbGVDaGFpbihsb2NhbGUpIHtcbiAgICBjb25zdCBjaGFpbiA9IFtdO1xuICAgIGNvbnN0IHRva2VucyA9IGxvY2FsZS5zcGxpdCgnLScpO1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIGNoYWluLnB1c2godG9rZW5zLmpvaW4oJy0nKSk7XG4gICAgICAgIHRva2Vucy5wb3AoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYWluO1xufVxuXG5leHBvcnQgeyBCYXNlRm9ybWF0dGVyIGFzIEZvcm1hdHRlciwgSTE4biwgTE9DQUxFX0VOLCBMT0NBTEVfRVMsIExPQ0FMRV9GUiwgTE9DQUxFX1pIX0hBTlMsIExPQ0FMRV9aSF9IQU5ULCBjb21waWxlSTE4bkpzb25TdHIsIGhhc0kxOG5Kc29uLCBpbml0VnVlSTE4biwgaXNJMThuU3RyLCBpc1N0cmluZywgbm9ybWFsaXplTG9jYWxlLCBwYXJzZUkxOG5Kc29uLCByZXNvbHZlTG9jYWxlIH07XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==