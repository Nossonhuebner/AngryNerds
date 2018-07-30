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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./elements/ball.js":
/*!**************************!*\
  !*** ./elements/ball.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./elements/shape.js");


class Ball extends _shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(img, x, y, ballRadius) {
    super(img, x, y, ballRadius);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Ball);


/***/ }),

/***/ "./elements/box.js":
/*!*************************!*\
  !*** ./elements/box.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./elements/shape.js");


class Box extends _shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(img, x, y, height, width, srcArr) {
    super(img, x, y, height, width, srcArr);
  }
}


/* harmony default export */ __webpack_exports__["default"] = (Box);


/***/ }),

/***/ "./elements/shape.js":
/*!***************************!*\
  !*** ./elements/shape.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Shape {
  constructor(img, x, y, height, width, srcArr) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.srcArr = srcArr;
    this.hits = 0;
    this.bx = 0;
    this.by = 0;
  }

  draw(ctx){
    if (this.width) { //box
      if (this.hits > 2) {
          this.width = 1;
          this.height = 0;
          this.x = 0;
          this.y = 0;
        } else {
      this.img.src = this.srcArr[this.hits];
      ctx.drawImage(this.img, this.x, this.y, 75, 75);
      }
      // this.ctx.beginPath();
      // this.ctx.rect(this.x, this.y, this.height, this.width);
      // this.ctx.fillStyle = "#f10d0d";
      // this.ctx.fill();
      // this.ctx.closePath();
    } else {
      ctx.drawImage(this.img, this.x - 12, this.y - 12, this.height, this.height);

      // this.ctx.beginPath();
      // this.ctx.arc(this.x, this.y, this.height, 0, Math.PI * 2);
      // this.ctx.fillStyle = "#f10d0d";
      // this.ctx.fill();
      // this.ctx.closePath();
    }
    // requestAnimationFrame(this.draw.bind(this));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Shape);


/***/ }),

/***/ "./elements/sling.js":
/*!***************************!*\
  !*** ./elements/sling.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Sling {
  constructor(ctx, mouseHold, x, y) {
      if (mouseHold) {
      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(100, 276);
      ctx.lineTo(x, y);
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(150, 300);
      ctx.lineWidth = 1;
      ctx.stroke();
    } else {
      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(100, 276);
      ctx.lineTo(150, 300);
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sling);


/***/ }),

/***/ "./levels/level1.js":
/*!**************************!*\
  !*** ./levels/level1.js ***!
  \**************************/
/*! exports provided: level1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "level1", function() { return level1; });
/* harmony import */ var _elements_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/box */ "./elements/box.js");
// let boxImg = new Image();
// const srcArr = ['./assets/images/webpack/webpack-logo.png', './assets/images/webpack/webpack-logo-orange.png','./assets/images/webpack/webpack-logo-red.png'];
// boxImg.src = srcArr[0];
// const box = new Box(ctx, boxImg, boxX, boxY, 50, 50, srcArr);
// box.hits = 0;

  let boxX = 600;
  let boxY = 300;

  let boxImg = new Image();
  const srcArr = ['./assets/images/webpack/webpack-logo.png', './assets/images/webpack/webpack-logo-orange.png','./assets/images/webpack/webpack-logo-red.png'];
  const level1 = [new _elements_box__WEBPACK_IMPORTED_MODULE_0__["default"](boxImg, boxX, boxY, 50, 50, srcArr)];


/***/ }),

/***/ "./levels/level2.js":
/*!**************************!*\
  !*** ./levels/level2.js ***!
  \**************************/
/*! exports provided: level2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "level2", function() { return level2; });
/* harmony import */ var _elements_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/ball */ "./elements/ball.js");
/* harmony import */ var _elements_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/box */ "./elements/box.js");



// let ballImg = new Image();
// ballImg.src = './assets/images/nerd.png';
// let ball1 = new Ball(ctx, ballImg, x, y, ballRadius);
// let ball2 = new Ball(ctx, ballImg, x, y - 10, ballRadius);
// let ball3 = new Ball(ctx, ballImg, x, y - 20, ballRadius);
let boxX = 600;
let boxY = 300;

let boxImg = new Image();
const srcArr = ['./assets/images/heroku/heroku.png', './assets/images/heroku/heroku-orange.png', './assets/images/heroku/heroku-red.png'];
const box1 = new _elements_box__WEBPACK_IMPORTED_MODULE_1__["default"](boxImg, boxX-50, boxY, 75, 50, srcArr);
const box2 = new _elements_box__WEBPACK_IMPORTED_MODULE_1__["default"](boxImg, boxX+ 50, boxY, 75, 50, srcArr);
const level2 = [box1, box2];


/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/shape */ "./elements/shape.js");
/* harmony import */ var _elements_ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/ball */ "./elements/ball.js");
/* harmony import */ var _elements_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/box */ "./elements/box.js");
/* harmony import */ var _elements_sling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/sling */ "./elements/sling.js");
/* harmony import */ var _levels_level1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./levels/level1 */ "./levels/level1.js");
/* harmony import */ var _levels_level2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./levels/level2 */ "./levels/level2.js");







document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const ballRadius = 25;
  var x = 125;
  var y = 288;
  var dx = 2;
  var dy = -2;
  var gravity = 0.5;
  var friction = 0.99;
  let boxX = 600;
  let boxY = 300;
  let by;
  let bx;
  let hit = false;
  let mouseHold = false;
  let pos;
  let mpos;
  let released = false;
  let action = false;
  let angle = 4;
  let validHeight = false;
  const levels = [_levels_level1__WEBPACK_IMPORTED_MODULE_4__["level1"], _levels_level2__WEBPACK_IMPORTED_MODULE_5__["level2"]];
  let boxes = levels[0];

  const boing = new Audio();
  boing.src = "./assets/audio/boing.wav";
  const launch = new Audio();
  launch.src = "./assets/audio/bomb_drop.wav";
  const explosion = new Audio();
  explosion.src = "./assets/audio/explosion.wav";



  function mousePos(canvas, event) {
    const a = canvas.getBoundingClientRect();
    pos = {
      x: event.clientX - a.left,
      y: event.clientY - a.top
    };
    return pos;
  }

  function stop(audio) {
    audio.pause();
    audio.currentTime = 0;
  }

    canvas.addEventListener('mousedown', (e) => {
      action = false;
      released = false;
      mouseHold = true;
      validHeight = false;
      // ball = new Ball(ctx, x, y, ballRadius);
      stop(launch);

    });
    canvas.addEventListener('mouseup', (e) => {
      action = true;
      mouseHold = false;
      released = true;
      pos = null;
      launch.play();
    });
    canvas.addEventListener('mousemove', (e) => {
      mpos = mousePos(canvas, e);
    });

    const getDistance = (x1,y1, x2, y2) => {
     let xDistance = x2 - x1;
     let yDistance = y2 - y1;

     return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    };

    function isLevelOver(){
      debugger
      for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].height !== 0) {
          return false;
        }
      }
      return true;
    }

    function handleLevels() {
      debugger
      if (isLevelOver() && levels.length > 1) {
        levels.shift();
        boxes = levels[0];
      }
    }


  function drawBox(box) {

    const height = 75;
    const length = 75;
    // const imgData = ctx.getImageData(600, 300, height, height);
    // const pix = imgData.data;

    if (ball.x + ballRadius > box.x && ball.x - ballRadius < box.x + length && ball.y + ballRadius > box.y && ball.y - ballRadius < box.y + height) {
      hit = true;
      box.hits += 1;
      console.log(box.hits);

      explosion.play();
      stop(launch);

      // for (let i = 0, n = pix.length; i <n; i += 4) {
      //     pix[i] += 75;
      //     pix[i+2] -= 10;
      // }
      // ctx.putImageData(imgData, box.x, box.y);
      // let tempImg = new Image();

      // tempImg.src = canvas.toDataURL("image/png");
      // // tempImg.height = 300;
      // // tempImg.length = 300;
      // box.img = tempImg;

      box.bx = dx;
      box.by = dy;
      dx = -(dx+3);
      dy = -(dy+3);
    }
    if (box.x + box.bx > canvas.width - length || box.x + box.bx < 0) {
      box.bx = -box.bx;
    } else if (box.by + box.y > canvas.height - height - 28 || box.by + box.y < height) {
      box.by = -box.by * 0.8;
    }
    if (hit) {
      if (box.y + box.by + (2 * gravity) + height < canvas.height - 38) {
        box.by += (2 * gravity);
      }
      box.bx *= friction;
      box.x += box.bx;
      box.y += box.by;
    }
  }

  function drawString() {
    const sling = new _elements_sling__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, mouseHold, ball.x, ball.y);
  }


  function drawFence() {
    ctx.strokeStyle = '#2f1a08';
    ctx.beginPath();
    ctx.moveTo(400, 250);
    ctx.lineTo(400, 380);
    ctx.lineWidth = 10;
    ctx.stroke();
    if (ball.x + ballRadius > 400 && ball.x - ballRadius < 410 && ball.y + ballRadius > 250) {
      dx = -dx;
    }

    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].x + boxes[i].width > 400 && boxes[i].x < 410 && boxes[i].y + boxes[i].height > 250) {
        boxes[i].bx = -boxes[i].bx;
        boxes[i].x += boxes[i].bx;
      }
    }
  }

  // function drawMound() {
  //   ctx.beginPath();
  //   ctx.fillStyle = "#2f1a08";
  //   ctx.moveTo(360, canvas.height - 38);
  //   ctx.lineTo(425, canvas.height - 38 - 50);
  //   ctx.lineTo(450, canvas.height - 38 - 50);
  //   ctx.lineTo(475, canvas.height - 38 - 80);
  //   ctx.lineTo(495, canvas.height - 38 - 80);
  //   ctx.lineTo(590, canvas.height - 38); ctx.fill();
  //
  //   if ( (ball.x  + ballRadius > 360 && ball.y  + ballRadius > canvas.height - 38) ||
  //       ((ball.x  + ballRadius > 425 && ball.x  - ballRadius < 450) && ball.y  + ballRadius > canvas.height - 38 - 50) ||
  //       ((ball.x  + ballRadius > 475 && ball.x  - ballRadius < 495) && ball.y  + ballRadius > canvas.height - 38 - 80) ||
  //       ball.x  + ballRadius > 495 && ball.y  + ballRadius > canvas.height - 38) {
  //         dx = -dx;
  //         dy = -dy;
  //       }
  // }
  let ballImg = new Image();
  ballImg.src = './assets/images/nerd.png';
  let ball = new _elements_ball__WEBPACK_IMPORTED_MODULE_1__["default"](ballImg, x, y, ballRadius);


  const sun = new Image();
  sun.src = './assets/images/coffee-sun.png';

  function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sun, 800, 30, 110, 110);
    handleLevels();
    for (var i = 0; i < boxes.length; i++) {
      drawBox(boxes[i]);
      boxes[i].draw(ctx);
    }
    drawFence();
    // drawMound();
    // if (y + dy < ballRadius || y + dy > canvas.height - ballRadius - 38) {
    //   // console.log('hit y')
    //   dy = -dy * 0.8;
    // }
    // if (y + dy + gravity + ballRadius < canvas.height - 38 && !mouseHold) {
    //   dy += gravity;
    // }
    drawString();

    if (action && ball.y < canvas.height - ball.height - 28){
      validHeight = true;
    }
    if (mouseHold && mpos.y < canvas.height - ball.height) {
      ball.x = mpos.x;
      ball.y = mpos.y;
    } else if (released) {
      released = false;
      const pullY = y - mpos.y;
      const pullX = x - mpos.x;

      dy = pullY / 5;
      dx = pullX / 5;
    }
    if (action) {
      dx *= friction;
      if ((dy + ball.y > canvas.height - ball.height- 28  && validHeight )|| dy + ball.y < ball.height ) { //hit top / bottom
        dy = -dy * 0.9 ;
        stop(launch);
      } else {
        dy += gravity;
      }
      if (dx + ball.x > canvas.width - ball.height || dx + ball.x < ball.height) {
        boing.play();
        dx = -dx;
      }
      ball.y += dy;
      ball.x += dx;
    }
    ball.draw(ctx);

    requestAnimationFrame(draw);
  }

  draw();

});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map