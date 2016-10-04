/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// VAR, LET, and CONST
	// var - global or function scope, can be redefined
	// let - block scoped, can be redefined
	// const - block scoped, can't be redefined

	var sayHello = function sayHello() {
	  var functionScopedVar = true;
	  var blockScopedVar = true;

	  if (false) {
	    var anotherFunctionScopedVar = true;
	    var _anotherBlockScopedVar = true;
	  }
	  console.log(functionScopedVar, blockScopedVar);
	  console.log(anotherFunctionScopedVar);
	  console.log(anotherBlockScopedVar);
	};

	// sayHello();

	// for ( let i = 0; i < 5; i++ ) {
	//
	//   setTimeout(function () {
	//     console.log( i );
	//   }, i * 100);
	//
	// }

	// const sayHi = function ( name = "World" ) {
	//   console.log( "Hi " + name );
	// };
	var sayHi = function sayHi() {
	  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "World";

	  // const greeting = "Hi " + name;
	  var greeting = "Hi " + name;
	  console.log(greeting);
	};

	sayHi();
	sayHi("Jane");

	var squareNum = function squareNum(num) {
	  return num * num;
	};
	console.log(squareNum(4));

	var arrOfNums = [2, 4, 6];

	// let updatedNums = arrOfNums.map(function (n) {
	//   return n * 5
	// });
	// let updatedNums = arrOfNums.map((n) => {
	//   return n * 5
	// });
	var updatedNums = arrOfNums.map(function (n) {
	  return n * 5;
	});

	console.log(updatedNums);

	var groucho = {
	  firstName: "Groucho",
	  lastName: "Marx",
	  movie: "Duck Soup"
	};

	var f = groucho.firstName;
	var l = groucho.lastName;
	var m = groucho.movie;

	console.log(f, l, m);

	var firstName = groucho.firstName;
	var lastName = groucho.lastName;
	var movie = groucho.movie;


	var gummo = ["Gummo", "Marx", "Duck Soup"];
	var first = gummo[0];
	var last = gummo[1];
	var soup = gummo[2];

	console.log(first, last, soup);

	var objGummo = {
	  first: first,
	  last: last,
	  soup: soup
	};
	console.log(objGummo);

	var Shape = function () {
	  function Shape(type) {
	    _classCallCheck(this, Shape);

	    console.log("A new shape was created", type);
	  }

	  _createClass(Shape, [{
	    key: "sayHi",
	    value: function sayHi() {
	      console.log("A shape said hi?");
	    }
	  }]);

	  return Shape;
	}();

	var s = new Shape("Rectangle");

	var Circle = function (_Shape) {
	  _inherits(Circle, _Shape);

	  function Circle(type) {
	    _classCallCheck(this, Circle);

	    // Calls the constructor of whatever this class inherits from
	    var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, type + " Circle"));

	    console.log(type);
	    return _this;
	  }

	  _createClass(Circle, [{
	    key: "getCircumference",
	    value: function getCircumference() {}
	  }]);

	  return Circle;
	}(Shape);

	var c = new Circle("Large");

/***/ }
/******/ ]);