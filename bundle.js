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
      ctx.moveTo(100, 316);
      ctx.lineTo(Math.min(x, 400), y);
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(Math.min(x, 400), y);
      ctx.lineTo(150, 350);
      ctx.lineWidth = 1;
      ctx.stroke();
    } else {
      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(100, 316);
      ctx.lineTo(150, 350);
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
  ctx.canvas.width  = 1341;
  ctx.canvas.height = 485;
  const ballRadius = 25;
  var x = 125;
  var y = 333;
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
  let stopped = true;
  let angle = 4;
  let validHeight = false;
  let levels = [_levels_level1__WEBPACK_IMPORTED_MODULE_4__["level1"], _levels_level2__WEBPACK_IMPORTED_MODULE_5__["level2"]];
  let boxes = levels[0];
  let modal = false;
  let gameOver = false;
  let levelOver = false;
  let start = false;

  let ballImg = new Image();
  ballImg.src = './assets/images/nerd.png';

  let balls = [];
  let retiredBalls = [];

  for (var i = 0; i < 3; i++) {
    balls.push(new _elements_ball__WEBPACK_IMPORTED_MODULE_1__["default"](ballImg, x + (30 * i), 388, ballRadius));
  }
  let ball = balls[0];



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
    if (start && !levelOver && !gameOver) {
    if (stopped) {
      action = false;
      released = false;
      mouseHold = true;
      validHeight = false;
      // ball = new Ball(ctx, x, y, ballRadius);
      stop(launch);
    }
  }
  });
  canvas.addEventListener('mouseup', (e) => {
    if (start && !levelOver && !gameOver) {
      if (stopped) {
        action = true;
        mouseHold = false;
        released = true;
        pos = null;
        launch.play();
      }
  }
  });
  canvas.addEventListener('mousemove', (e) => {
    if (start && !levelOver && !gameOver) {
      mpos = mousePos(canvas, e);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
      if (!start) {
        start = true;
      } else if (gameOver) {
        levels = [[1],_levels_level1__WEBPACK_IMPORTED_MODULE_4__["level1"], _levels_level2__WEBPACK_IMPORTED_MODULE_5__["level2"]];
        handleLevels();
        gameOver = false;
      } else if (levelOver) {
        handleLevels();
        levelOver = false;
      }
    }
  });
    // const getDistance = (x1,y1, x2, y2) => {
    //  let xDistance = x2 - x1;
    //  let yDistance = y2 - y1;
    //
    //  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    // };
    function gameOverModal() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(230, 24, 24, 0.58)';
      ctx.fill();
      ctx.fillStyle = '#06326f';
      ctx.font = "30px 'Rock Salt'";
      ctx.fillText("Game Over",canvas.width / 2 - 100, canvas.height / 2);
      ctx.font = "20px 'Rock Salt'";
      ctx.fillText("Hit enter to play again",canvas.width / 2 - 130, canvas.height / 2 + 75);
    }

    function levelsModal() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(24, 230, 150, 0.58)';
      ctx.fill();
      ctx.fillStyle = '#06326f';
      ctx.font = "30px 'Rock Salt'";
      ctx.fillText("Congratulations",canvas.width / 2 - 130, canvas.height / 2);
      ctx.font = "20px 'Rock Salt'";
      ctx.fillText("Hit enter to continue",canvas.width / 2 - 130, canvas.height / 2 + 75);
    }

    function startModal() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(24, 200, 255, 0.58)';
      ctx.fill();
      ctx.fillStyle = '#06326f';
      ctx.font = "30px 'Rock Salt'";
      ctx.fillText("Angry Nerds",canvas.width / 2 - 100, canvas.height / 2 - 100);
      ctx.font = "20px 'Rock Salt'";
      ctx.fillText("Use the mouse to drag and unleash the nerds!",400, canvas.height / 2 + 75);
      ctx.fillText("Hit enter to play",canvas.width / 2 - 130, canvas.height / 2 + 120);
    }

    function isLevelOver(){
      for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].height !== 0) {
          return false;
        }
      }
      return true;
    }

    function handleLevels() {
      levels.shift();
      boxes = levels[0];
       balls = [];
       retiredBalls = [];
      for (var i = 0; i < 3; i++) {
        balls.push(new _elements_ball__WEBPACK_IMPORTED_MODULE_1__["default"](ballImg, x + (30 * i), y, ballRadius));
      }
      let ball = balls[0];
    }


  function drawBox(box) {
    const height = 75;
    // const length = 75;
    if (ball.x + ballRadius > box.x && ball.x - ballRadius < box.x + box.width && ball.y + ballRadius > box.y ) {
      hit = true;
      box.hits += 1;
      console.log(box.hits);

      explosion.play();
      stop(launch);
      if (ball.y < box.y || ball.y > box.y + box.height) { // top hit
        ball.y -= 10;
        dy = -(Math.abs(dy));
      } else {
        ball.x = ball.x < box.x ? ball.x -10 : ball.x + 10;
        dx = -(dx);
      }
      box.bx = -dx;
      box.by = -dy;
    }

    if (box.x + box.bx > canvas.width - box.width || box.x + box.bx < 0) {
      box.bx = -box.bx;
    } else if (box.by + box.y > canvas.height - height - 28 || box.by + box.y < 0) {
      box.by = -(Math.abs(box.by * 0.8));
    }

    if (hit) {
      if (box.y + box.by + (2 * gravity) + box.height < canvas.height - 38) {
        box.by += (2 * gravity);
      }
      box.bx *= friction;
      box.x += box.bx;
      box.y = Math.min((canvas.height - height - 28), (box.y + box.by));
    }
  }

  function drawString() {
    const sling = new _elements_sling__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, mouseHold, ball.x, ball.y);
  }


  function drawFence() {
    ctx.strokeStyle = '#2f1a08';
    ctx.beginPath();
    ctx.moveTo(400, 280);
    ctx.lineTo(400, 450);
    ctx.lineWidth = 10;
    ctx.stroke();

    if (ball.x + ballRadius > 400 && ball.x - ballRadius < 410) {
      if (ball.y + ballRadius > 280) {
        dx = -(dx);
      } else if (ball.y + ballRadius < 280 && ball.y + ballRadius > 260){
      dy = -(Math.abs(dy));
      }
    }

    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].x + boxes[i].width > 400 && boxes[i].x < 410 && boxes[i].y + boxes[i].height > 280) {
        boxes[i].bx = -boxes[i].bx;
        boxes[i].x += boxes[i].bx;
      }
    }
  }

  const sun = new Image();
  sun.src = './assets/images/coffee-sun.png';

  function draw() {
    if (!start) {
      startModal();
    } else if (gameOver) {
      gameOverModal();
    } else if (levelOver) {
      levelsModal();
    } else {

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(sun, 1000, 20, 110, 110);
      if (isLevelOver()) {
        levelOver = true;
      }

      for (var i = 0; i < boxes.length; i++) {
        drawBox(boxes[i]);
        boxes[i].draw(ctx);
      }
      //
      // for (var j = 0; j < retiredBalls.length; j++) {
      //   retiredBalls[j].draw(ctx);
      // }

      for (let i = 0; i < balls.length; i++) {

        balls[i].draw(ctx);
      }
      drawFence();
      drawString();

      if (action && ball.y < canvas.height - ball.height - 28){
        validHeight = true;
      }
      if (mouseHold && mpos.y < canvas.height - ball.height && stopped) {
        ball.x = Math.min(mpos.x, 400);
        ball.y = mpos.y;
      } else if (released) {
        stopped = false;
        released = false;
        const pullY = y - mpos.y;
        const pullX = x - Math.min(mpos.x, 400);

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
        if (Math.abs(dy) < 0.05 && ball.y > canvas.height - 150 ) {
          stopped = true;
          if (balls.length > 1) {
            retiredBalls.push(balls.shift());
          } else {
            gameOver = true;
          }
          ball = balls[0];
        }
      }
        ball.draw(ctx);
    }
    requestAnimationFrame(draw);
  }

  draw();

});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map