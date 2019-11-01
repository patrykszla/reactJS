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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log('Hello world');\ndocument.addEventListener('DOMContentLoaded', function () {\n  var Game = __webpack_require__(/*! ./game */ \"./js/game.js\");\n\n  var newGame = new Game();\n  newGame.showFurry();\n  newGame.showCoin();\n  newGame.startGame();\n  document.addEventListener('keydown', function (event) {\n    //addeventlistener na keydown czyli wcisniecie klawisza\n    newGame.turnFurry(event); //uruchom metode turnfurry i przekarz event z klawisza\n  });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Coin() {\n  this.x = Math.floor(Math.random() * 10); //zaokraglenie losowej liczby\n\n  this.y = Math.floor(Math.random() * 10);\n}\n\nmodule.exports = Coin;\n\n//# sourceURL=webpack:///./js/coin.js?");

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Furry(x, y, direction) {\n  this.x = x;\n  this.y = y;\n  this.direction = direction;\n}\n\nmodule.exports = Furry; //export naszego Furrego\n\n//# sourceURL=webpack:///./js/furry.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Furry = __webpack_require__(/*! ./furry */ \"./js/furry.js\"); // importuje (sciagam tutaj furry);\n\n\nvar Coin = __webpack_require__(/*! ./coin */ \"./js/coin.js\"); // importuje tutaj coina\n\n\nfunction Game() {\n  console.log('Hello world');\n  this.board = document.querySelectorAll('#board div');\n  this.furry = new Furry(0, 0, 'right'); // w kontekscie tego obiektu this.furry to nasz importowany Furry\n\n  this.coin = new Coin();\n  this.score = 0;\n\n  this.index = function (x, y) {\n    return x + y * 10;\n  };\n\n  this.showFurry = function () {\n    this.hideVisibleFurry(); //za kazdym razem sprawdzamy czy nie ma juz jakiegos furrego\n\n    if (this.board[this.index(this.furry.x, this.furry.y)] != null) {\n      // jezeli ten element jest rozny od nulla(zawsze) to:\n      this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry'); //this.index miejsce w ktorym ma sie pojawic furry po podaniu mu x i y \n    }\n  };\n\n  this.showCoin = function () {\n    this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin'); // dodajemy divovi o wspolrzednych x i y klase coin i dlatego pojawia sie nam obraze\n  };\n\n  console.log(this.coin.x, this.coin.y); //wyswietlam sobie wspolrzedne coina \n\n  this.startGame = function () {\n    var self = this; //po to zeby odwolac sie do tego obiektu\n\n    this.idSetInterval = setInterval(function () {\n      //robi interval czyli funkcje ktora cos robi i mowimy co jaki czas\n      self.moveFurry(); //na tym uruchamiamy metode moveFurry co 250 ms\n    }, 200);\n  };\n\n  this.moveFurry = function () {\n    if (this.furry.direction === 'right') {\n      this.furry.x = this.furry.x + 1; //bedzie nam przesuwalo w prawo bo na Furry mamy ustawiony direction right :)\n    } else if (this.furry.direction === 'left') {\n      this.furry.x = this.furry.x - 1;\n    } else if (this.furry.direction === 'up') {\n      this.furry.y = this.furry.y + 1;\n    } else if (this.furry.direction === 'down') {\n      this.furry.y = this.furry.y - 1;\n    }\n\n    this.showFurry();\n    this.checkCoinColision();\n    this.gameOver();\n  };\n\n  this.hideVisibleFurry = function () {\n    var visibleFurry = document.querySelector('.furry'); // sprawdzamy czy jest taki element na stronie\n\n    if (visibleFurry != null) {\n      //sprawdzamy czy jest nullem (SPOSOB ZEBY ZAWSZE COS USUNAC BO TO NIGDY NIE BEDZIE NULLEM)\n      visibleFurry.classList.remove('furry');\n    }\n  };\n\n  this.turnFurry = function (event) {\n    switch (event.which) {\n      case 37:\n        this.furry.direction = 'left'; //jesli event z klawiatury ma numer 37 to furry direction left! \n\n        break;\n\n      case 38:\n        this.furry.direction = 'down';\n        break;\n\n      case 39:\n        this.furry.direction = 'right';\n        break;\n\n      case 40:\n        this.furry.direction = 'up';\n        break;\n\n      default:\n        break;\n    }\n  };\n\n  this.checkCoinColision = function () {\n    if (this.index(this.furry.x, this.furry.y) === this.index(this.coin.x, this.coin.y)) {\n      //jesli index furry rowna sie index coin to dostajemy punkt\n      console.log('punkt');\n      this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');\n      this.score += 1;\n      document.querySelector('strong').innerText = this.score.toFixed(2); //tofixed zaokragla do dwoch po przecinku\n\n      this.coin = new Coin(); // musimy stworzyc nowego coina\n\n      this.showCoin(); //pokazujemy nowa monete \n    }\n  };\n\n  this.gameOver = function () {\n    if (this.furry.x < 0 || this.furry.y < 0 || this.furry.x > 9 || this.furry.y > 9) {\n      //jesli przekroczy z ktorejs strony plansze to wywala\n      clearInterval(this.idSetInterval);\n      this.hideVisibleFurry();\n      alert('Game over');\n    }\n  };\n}\n\nmodule.exports = Game; //exportujemy cala game\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ })

/******/ });