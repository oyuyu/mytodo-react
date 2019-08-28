/******/ (function(modules) { // webpackBootstrap
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
<<<<<<< HEAD
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
=======
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index_decorator.js");
>>>>>>> mobx3
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {


=======
/***/ "./src/index_decorator.js":
/*!********************************!*\
  !*** ./src/index_decorator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _class, _class2, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

//定义修饰类的修饰器
function log(target) {
  //target表示被修饰的类-Numric
  // 在target类中找到所有的方法成员   获取所有的成员签名
  var descrips = Object.getOwnPropertyDescriptors(target.prototype); // 获取所有的成员名称

  var _loop = function _loop() {
    var key = _Object$keys[_i];

    //忽略构造方法
    if (key === 'constructor') {
      return "continue";
    }

    var func = descrips[key].value; //过滤函数类型

    if (typeof func === 'function') {
      // 重新定义该属性
      Object.defineProperty(target.prototype, key, {
        value: function value() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          console.log(key, 'before'); // 调用原函数定义

          var rst = func.apply(this, arguments);
          console.log(key, 'after');
          return rst;
        }
      });
    }
  };

  for (var _i = 0, _Object$keys = Object.keys(descrips); _i < _Object$keys.length; _i++) {
    var _ret = _loop();

    if (_ret === "continue") continue;
  }
} // 定义类属性成员的修饰器   ----error


function readOnly(target, key, desc) {
  //target类实例对象  key类成员名  desc类成员的描述符
  desc.writable = false;
  console.info(desc, ' ---');
  return desc;
} // 定义类方法成员的修饰器


function validate(arget, key, desc) {
  var func = desc.value; // 复写描述符的value

  desc.value = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // 遍历入参
    for (var _i2 = 0, _args = args; _i2 < _args.length; _i2++) {
      var num = _args[_i2];

      //检查入参的类型
      if (typeof num !== 'number') {
        throw new Error();
      }
    } //如果传入的参数是合法的  返回原定义的函数


    return func.apply(this, args);
  };
}

var Numric = log(_class = (_class2 = (_temp =
/*#__PURE__*/
function () {
  function Numric() {
    _classCallCheck(this, Numric);

    _initializerDefineProperty(this, "PI", _descriptor, this);
  }

  _createClass(Numric, [{
    key: "add",
    //对类属性成员使用装饰器会报错     为什么？
    // PI=3.14
    value: function add() {
      for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nums[_key3] = arguments[_key3];
      }

      return nums.reduce(function (pre, curr) {
        return pre + curr;
      }, 0);
    }
  }]);

  return Numric;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PI", [readOnly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3.14;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "add", [validate], Object.getOwnPropertyDescriptor(_class2.prototype, "add"), _class2.prototype)), _class2)) || _class; //生成实例   调用add


var a = new Numric();
a.PI = 3;
console.info(a, '--'); // new Numric().add(3,4)
>>>>>>> mobx3

/***/ })

/******/ });
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4X2RlY29yYXRvci5qcyJdLCJuYW1lcyI6WyJsb2ciLCJ0YXJnZXQiLCJkZXNjcmlwcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJwcm90b3R5cGUiLCJrZXkiLCJmdW5jIiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSIsImFyZ3MiLCJjb25zb2xlIiwicnN0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJrZXlzIiwicmVhZE9ubHkiLCJkZXNjIiwid3JpdGFibGUiLCJpbmZvIiwidmFsaWRhdGUiLCJhcmdldCIsIm51bSIsIkVycm9yIiwiTnVtcmljIiwibnVtcyIsInJlZHVjZSIsInByZSIsImN1cnIiLCJhIiwiUEkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsU0FBU0EsR0FBVCxDQUFhQyxNQUFiLEVBQW9CO0FBQUs7QUFDckI7QUFDQSxNQUFNQyxRQUFRLEdBQUNDLE1BQU0sQ0FBQ0MseUJBQVAsQ0FBaUNILE1BQU0sQ0FBQ0ksU0FBeEMsQ0FBZixDQUZnQixDQUdoQjs7QUFIZ0I7QUFJWCxRQUFNQyxHQUFHLG1CQUFUOztBQUNEO0FBQ0EsUUFBR0EsR0FBRyxLQUFHLGFBQVQsRUFBdUI7QUFDbkI7QUFDSDs7QUFDRCxRQUFNQyxJQUFJLEdBQUNMLFFBQVEsQ0FBQ0ksR0FBRCxDQUFSLENBQWNFLEtBQXpCLENBVFksQ0FVWjs7QUFDQSxRQUFHLE9BQU9ELElBQVAsS0FBZSxVQUFsQixFQUE2QjtBQUN6QjtBQUNBSixZQUFNLENBQUNNLGNBQVAsQ0FBc0JSLE1BQU0sQ0FBQ0ksU0FBN0IsRUFBd0NDLEdBQXhDLEVBQTRDO0FBQ3hDRSxhQUR3QyxtQkFDMUI7QUFBQSw0Q0FBTEUsSUFBSztBQUFMQSxnQkFBSztBQUFBOztBQUNWQyxpQkFBTyxDQUFDWCxHQUFSLENBQVlNLEdBQVosRUFBZ0IsUUFBaEIsRUFEVSxDQUVWOztBQUNBLGNBQU1NLEdBQUcsR0FBQ0wsSUFBSSxDQUFDTSxLQUFMLENBQVcsSUFBWCxFQUFnQkMsU0FBaEIsQ0FBVjtBQUNBSCxpQkFBTyxDQUFDWCxHQUFSLENBQVlNLEdBQVosRUFBZ0IsT0FBaEI7QUFDQSxpQkFBT00sR0FBUDtBQUVIO0FBUnVDLE9BQTVDO0FBV0g7QUF4Qlc7O0FBSWhCLGtDQUFrQlQsTUFBTSxDQUFDWSxJQUFQLENBQVliLFFBQVosQ0FBbEIsa0NBQXdDO0FBQUE7O0FBQUEsNkJBR2hDO0FBb0JQO0FBR0osQyxDQUNEOzs7QUFDQSxTQUFTYyxRQUFULENBQWtCZixNQUFsQixFQUF5QkssR0FBekIsRUFBNkJXLElBQTdCLEVBQWtDO0FBQUs7QUFDbkNBLE1BQUksQ0FBQ0MsUUFBTCxHQUFjLEtBQWQ7QUFDQVAsU0FBTyxDQUFDUSxJQUFSLENBQWFGLElBQWIsRUFBa0IsTUFBbEI7QUFDQSxTQUFPQSxJQUFQO0FBQ0gsQyxDQUVEOzs7QUFDQSxTQUFTRyxRQUFULENBQWtCQyxLQUFsQixFQUF3QmYsR0FBeEIsRUFBNEJXLElBQTVCLEVBQWlDO0FBQzdCLE1BQU1WLElBQUksR0FBQ1UsSUFBSSxDQUFDVCxLQUFoQixDQUQ2QixDQUU3Qjs7QUFDQVMsTUFBSSxDQUFDVCxLQUFMLEdBQVcsWUFBaUI7QUFBQSx1Q0FBTEUsSUFBSztBQUFMQSxVQUFLO0FBQUE7O0FBQ3hCO0FBQ0EsOEJBQWdCQSxJQUFoQiw2QkFBcUI7QUFBaEIsVUFBSVksR0FBRyxhQUFQOztBQUNEO0FBQ0EsVUFBRyxPQUFPQSxHQUFQLEtBQWMsUUFBakIsRUFBMEI7QUFDdEIsY0FBTSxJQUFJQyxLQUFKLEVBQU47QUFDSDtBQUNKLEtBUHVCLENBUXhCOzs7QUFDQSxXQUFPaEIsSUFBSSxDQUFDTSxLQUFMLENBQVcsSUFBWCxFQUFnQkgsSUFBaEIsQ0FBUDtBQUVILEdBWEQ7QUFhSDs7SUFFS2MsTSxHQURMeEIsRzs7Ozs7Ozs7Ozs7QUFFNkI7QUFDMUI7MEJBRVk7QUFBQSx5Q0FBTHlCLElBQUs7QUFBTEEsWUFBSztBQUFBOztBQUNSLGFBQU9BLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUNDLEdBQUQsRUFBS0MsSUFBTDtBQUFBLGVBQVlELEdBQUcsR0FBQ0MsSUFBaEI7QUFBQSxPQUFaLEVBQWlDLENBQWpDLENBQVA7QUFDSDs7OztnRkFMQVosUTs7Ozs7V0FBWSxJOzt5REFFWkksUSx3R0FNTDs7O0FBQ0EsSUFBSVMsQ0FBQyxHQUFHLElBQUlMLE1BQUosRUFBUjtBQUNBSyxDQUFDLENBQUNDLEVBQUYsR0FBTyxDQUFQO0FBQ0FuQixPQUFPLENBQUNRLElBQVIsQ0FBYVUsQ0FBYixFQUFnQixJQUFoQixFLENBQ0Esd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4X2RlY29yYXRvci5qc1wiKTtcbiIsIi8v5a6a5LmJ5L+u6aWw57G755qE5L+u6aWw5ZmoXG5mdW5jdGlvbiBsb2codGFyZ2V0KXsgICAgLy90YXJnZXTooajnpLrooqvkv67ppbDnmoTnsbstTnVtcmljXG4gICAgLy8g5ZyodGFyZ2V057G75Lit5om+5Yiw5omA5pyJ55qE5pa55rOV5oiQ5ZGYICAg6I635Y+W5omA5pyJ55qE5oiQ5ZGY562+5ZCNXG4gICAgY29uc3QgZGVzY3JpcHM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModGFyZ2V0LnByb3RvdHlwZSlcbiAgICAvLyDojrflj5bmiYDmnInnmoTmiJDlkZjlkI3np7BcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkZXNjcmlwcykpe1xuICAgICAgICAvL+W/veeVpeaehOmAoOaWueazlVxuICAgICAgICBpZihrZXk9PT0nY29uc3RydWN0b3InKXtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZ1bmM9ZGVzY3JpcHNba2V5XS52YWx1ZVxuICAgICAgICAvL+i/h+a7pOWHveaVsOexu+Wei1xuICAgICAgICBpZih0eXBlb2YgZnVuYyA9PT0nZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIC8vIOmHjeaWsOWumuS5ieivpeWxnuaAp1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldC5wcm90b3R5cGUsIGtleSx7XG4gICAgICAgICAgICAgICAgdmFsdWUoLi4uYXJncyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSwnYmVmb3JlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOiwg+eUqOWOn+WHveaVsOWumuS5iVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByc3Q9ZnVuYy5hcHBseSh0aGlzLGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5LCdhZnRlcicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnN0XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cblxufVxuLy8g5a6a5LmJ57G75bGe5oCn5oiQ5ZGY55qE5L+u6aWw5ZmoICAgLS0tLWVycm9yXG5mdW5jdGlvbiByZWFkT25seSh0YXJnZXQsa2V5LGRlc2MpeyAgICAvL3RhcmdldOexu+WunuS+i+WvueixoSAga2V557G75oiQ5ZGY5ZCNICBkZXNj57G75oiQ5ZGY55qE5o+P6L+w56ymXG4gICAgZGVzYy53cml0YWJsZT1mYWxzZTtcbiAgICBjb25zb2xlLmluZm8oZGVzYywnIC0tLScpXG4gICAgcmV0dXJuIGRlc2Ncbn1cblxuLy8g5a6a5LmJ57G75pa55rOV5oiQ5ZGY55qE5L+u6aWw5ZmoXG5mdW5jdGlvbiB2YWxpZGF0ZShhcmdldCxrZXksZGVzYyl7XG4gICAgY29uc3QgZnVuYz1kZXNjLnZhbHVlXG4gICAgLy8g5aSN5YaZ5o+P6L+w56ym55qEdmFsdWVcbiAgICBkZXNjLnZhbHVlPWZ1bmN0aW9uKC4uLmFyZ3Mpe1xuICAgICAgICAvLyDpgY3ljoblhaXlj4JcbiAgICAgICAgZm9yIChsZXQgbnVtIG9mIGFyZ3Mpe1xuICAgICAgICAgICAgLy/mo4Dmn6XlhaXlj4LnmoTnsbvlnotcbiAgICAgICAgICAgIGlmKHR5cGVvZiBudW0gIT09J251bWJlcicpe1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/lpoLmnpzkvKDlhaXnmoTlj4LmlbDmmK/lkIjms5XnmoQgIOi/lOWbnuWOn+WumuS5ieeahOWHveaVsFxuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLGFyZ3MpXG5cbiAgICB9XG5cbn1cbkBsb2dcbmNsYXNzIE51bXJpY3tcbiAgICBAcmVhZE9ubHkgUEk9My4xNDsgICAgICAgIC8v5a+557G75bGe5oCn5oiQ5ZGY5L2/55So6KOF6aWw5Zmo5Lya5oql6ZSZICAgICDkuLrku4DkuYjvvJ9cbiAgICAvLyBQST0zLjE0XG4gICAgQHZhbGlkYXRlXG4gICAgYWRkKC4uLm51bXMpe1xuICAgICAgICByZXR1cm4gbnVtcy5yZWR1Y2UoKHByZSxjdXJyKT0+cHJlK2N1cnIsMClcbiAgICB9XG59XG5cbi8v55Sf5oiQ5a6e5L6LICAg6LCD55SoYWRkXG5sZXQgYSA9IG5ldyBOdW1yaWMoKVxuYS5QSSA9IDM7XG5jb25zb2xlLmluZm8oYSwgJy0tJylcbi8vIG5ldyBOdW1yaWMoKS5hZGQoMyw0KSJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> mobx3
