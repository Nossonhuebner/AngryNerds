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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ "./main.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./util.js");




class Ball extends _shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(img, x, y, ballRadius) {
    super(img, x, y, ballRadius, ballRadius);
    this.invalidHeight = true; // allows for dragging below groundlevel on launch
  }

  draw(ctx) {
    if (this.moving) {

      if (this.y < ctx.canvas.height - 30) this.invalidHeight = false;

      if (this.y > 423 && Math.abs(this.dx) < 1 && Math.abs(this.dy) < 1) {
        this.stopped = true;
      } else {
        this.dx *= _main__WEBPACK_IMPORTED_MODULE_1__["FRICTION"];
        this.dy += _main__WEBPACK_IMPORTED_MODULE_1__["GRAVITY"];
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["wallDetection"])(this, ctx.canvas);
        this.y += this.dy;
        this.x += this.dx;
      }
    }

    ctx.drawImage(this.img, this.x - 12, this.y - 12, this.height, this.height);
  }

}



class BallsArr {
  constructor () {
    this.balls = [new Ball(new Image(), 1, 1, 1)]; // dummy starting ball
      let ballImg = new Image();
      ballImg.src = './assets/images/nerd.png';
      for (var i = 0; i < 3; i++) {
        this.balls.push(new Ball(ballImg, 125 + (30 * i), 388, 25, 25));
      }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BallsArr);


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
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ "./main.js");



class Box extends _shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(img, x, y, height, width, srcArr) {
    super(img, x, y, height, width, srcArr);
    this.explosion = new Audio();
    this.explosion.src = "./assets/audio/explosion.wav";
  }


  draw(ctx) {
    if (this.hits > 2) { //reduce visibilty if dead
      this.width = 0;
      this.height = 0;
      this.x = 0;
      this.y = 0;
      return;
    } else if (this.moving) {
        this.dy += (2 * _main__WEBPACK_IMPORTED_MODULE_1__["GRAVITY"]);
        this.dx *= _main__WEBPACK_IMPORTED_MODULE_1__["FRICTION"];
        this.x += this.dx;
        this.y = Math.min((ctx.canvas.height - this.height - 28), (this.y + this.dy));
    }

    this.img.src = this.srcArr[this.hits];
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  hit() {
    this.moving = true;
    this.explosion.play();
    this.hits += 1;
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
    this.dx = 0;
    this.dy = 0;
    this.moving = false;
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
    this.mouseHold = mouseHold;
    this.ctx = ctx;
    this.centerX = 125;
    this.centerY = 333;
    this.launch = new Audio();
    this.launch.src = "./assets/audio/bomb_drop.wav";
  }

  draw(mouseHold, x, y) {
    if (mouseHold) { // lines to and from mousePos
      this.mouseHold = true;
      this.ctx.strokeStyle = 'black';
      this.ctx.beginPath();
      this.ctx.moveTo(100, 316);
      this.ctx.lineTo(Math.min(x, 400), y);
      this.ctx.lineWidth = 1;
      this.ctx.stroke();

      this.ctx.strokeStyle = 'black';
      this.ctx.beginPath();
      this.ctx.moveTo(Math.min(x, 400), y);
      this.ctx.lineTo(150, 350);
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
    } else {

      if (this.mouseHold) { // just released
        this.launch.play();
        this.mouseHold = false;
      }

      this.ctx.strokeStyle = 'black';
      this.ctx.beginPath();
      this.ctx.moveTo(100, 316);
      this.ctx.lineTo(150, 350);
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Sling);


/***/ }),

/***/ "./levels/level1.js":
/*!**************************!*\
  !*** ./levels/level1.js ***!
  \**************************/
/*! exports provided: LevelOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelOne", function() { return LevelOne; });
/* harmony import */ var _elements_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/box */ "./elements/box.js");
/* harmony import */ var _elements_ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/ball */ "./elements/ball.js");



  //boxes
  let boxImg = new Image();
  const srcArr = ['./assets/images/webpack/webpack-logo.png',
                  './assets/images/webpack/webpack-logo-orange.png',
                  './assets/images/webpack/webpack-logo-red.png'
                  ];

class LevelOne {
  constructor() {
    this.boxes = [new _elements_box__WEBPACK_IMPORTED_MODULE_0__["default"](boxImg, 600, 300, 75, 75, srcArr)];
    this.balls = new _elements_ball__WEBPACK_IMPORTED_MODULE_1__["default"]().balls;
    this.retiredBalls= [];
  }
}


/***/ }),

/***/ "./levels/level2.js":
/*!**************************!*\
  !*** ./levels/level2.js ***!
  \**************************/
/*! exports provided: level2, LevelTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "level2", function() { return level2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelTwo", function() { return LevelTwo; });
/* harmony import */ var _elements_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/ball */ "./elements/ball.js");
/* harmony import */ var _elements_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/box */ "./elements/box.js");



//boxes
let boxImg = new Image();
const srcArr = ['./assets/images/heroku/heroku.png', './assets/images/heroku/heroku-orange.png', './assets/images/heroku/heroku-red.png'];
const box1 = new _elements_box__WEBPACK_IMPORTED_MODULE_1__["default"](boxImg, 550, 300, 75, 50, srcArr);
const box2 = new _elements_box__WEBPACK_IMPORTED_MODULE_1__["default"](boxImg, 650, 300, 75, 50, srcArr);
const level2 = {boxes: [box1, box2], balls: (new _elements_ball__WEBPACK_IMPORTED_MODULE_0__["default"]().balls), retiredBalls: []};


class LevelTwo {
  constructor() {
    this.boxes = [new _elements_box__WEBPACK_IMPORTED_MODULE_1__["default"](boxImg, 550, 300, 65, 70, srcArr),
                  new _elements_box__WEBPACK_IMPORTED_MODULE_1__["default"](boxImg, 650, 300, 65, 70, srcArr)
                  ];
    this.balls = new _elements_ball__WEBPACK_IMPORTED_MODULE_0__["default"]().balls;
    this.retiredBalls= [];
  }
}


/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: GRAVITY, FRICTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAVITY", function() { return GRAVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRICTION", function() { return FRICTION; });
/* harmony import */ var _levels_level1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels/level1 */ "./levels/level1.js");
/* harmony import */ var _levels_level2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels/level2 */ "./levels/level2.js");
/* harmony import */ var _elements_sling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/sling */ "./elements/sling.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./util.js");





const GRAVITY = 0.5;
const FRICTION = 0.99;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.canvas.width  = 1341;
  ctx.canvas.height = 485;
  const x = 125; // middle of sling
  const y = 333;
  let levels = [new _levels_level1__WEBPACK_IMPORTED_MODULE_0__["LevelOne"](), new _levels_level2__WEBPACK_IMPORTED_MODULE_1__["LevelTwo"]()];
  let boxes = levels[0].boxes;
  let balls = levels[0].balls;
  let ball = levels[0].balls[0];

  let mouseHold = false;
  let mpos = {x: "", y: ""};


  let released = false;
  let gameOver = false;
  const gameOverSound = new Audio();
  gameOverSound.src = './assets/audio/game-over.wav';
  let levelOver = false;
  let start = false;



  canvas.addEventListener('mousedown', (e) => {
    if (!start || gameOver) return;

    if (levels[0].balls.length > 1) {
        levels[0].retiredBalls.push(balls.shift());
        ball = balls[0];
        released = false;
        mouseHold = true;
      } else {
        gameOverSound.play();
        gameOver = true;
      }
  });

  canvas.addEventListener('mouseup', (e) => {
    if (!start) {
      start = true;
      return;
    } else if (gameOver) {
      setTimeout(() => {
        levels = [[1], new _levels_level1__WEBPACK_IMPORTED_MODULE_0__["LevelOne"](), new _levels_level2__WEBPACK_IMPORTED_MODULE_1__["LevelTwo"]()];
        handleLevels();
        gameOver = false;
      }, 1000);
    } else if (levelOver) {
      setTimeout(() => {
        handleLevels();
        levelOver = false;
      }, 1000);
    } else {
      ball.moving = true;
      mouseHold = false;
      released = true;
    }
  });

  canvas.addEventListener('mousemove', (e) => {
      mpos = Object(_util__WEBPACK_IMPORTED_MODULE_3__["mousePos"])(canvas, e);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
      if (!start) {
        start = true;
      } else if (gameOver) {
        levels = [[1], new _levels_level1__WEBPACK_IMPORTED_MODULE_0__["LevelOne"](), new _levels_level2__WEBPACK_IMPORTED_MODULE_1__["LevelTwo"]()];
        handleLevels();
        gameOver = false;
      } else if (levelOver) {
        handleLevels();
        levelOver = false;
      }
    }
  });


  function isLevelOver(){
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].height !== 0) { //there are still visible boxes in the level
        return false;
      }
    }
    levelOver = true;
    return true;
  }

  function handleLevels() {
    levels.shift();
    boxes = levels[0].boxes;
    balls = levels[0].balls;
    ball = balls[0];
  }

  const sling = new _elements_sling__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, mouseHold, ball.x, ball.y);
  function drawString() {
    sling.draw(mouseHold, mpos.x, mpos.y);
  }


  function drawFence() {
    ctx.strokeStyle = '#2f1a08';
    ctx.beginPath();
    ctx.moveTo(400, 280);
    ctx.lineTo(400, 450);
    ctx.lineWidth = 10;
    ctx.stroke();

    if (ball.x + ball.width > 400 && ball.x - ball.width < 410) {
      if (ball.y + ball.width > 280) {
        ball.dx = -(ball.dx);
      } else if (ball.y + ball.width < 280 && ball.y + ball.width > 260){
      ball.dy = -(Math.abs(ball.dy));
      }
    }

    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].x + boxes[i].width > 400 && boxes[i].x < 410 && boxes[i].y + boxes[i].height > 280) {
        boxes[i].dx = -boxes[i].dx;
        boxes[i].x += boxes[i].dx;
      }
    }
  }


  function boxHandler() {
    for (let i = 0; i < boxes.length; i++) {

      Object(_util__WEBPACK_IMPORTED_MODULE_3__["collisionDetection"])(ball, boxes[i]);
      Object(_util__WEBPACK_IMPORTED_MODULE_3__["wallDetection"])(boxes[i], canvas);
      boxes[i].draw(ctx);
    }
  }


  function draw() {

    if (!start) {
       Object(_util__WEBPACK_IMPORTED_MODULE_3__["startModal"])(ctx, canvas);
    } else if (gameOver) {
        Object(_util__WEBPACK_IMPORTED_MODULE_3__["gameOverModal"])(ctx, canvas);
    } else if (isLevelOver()) {
       Object(_util__WEBPACK_IMPORTED_MODULE_3__["levelsModal"])(ctx, canvas);
    } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFence();
    drawString();
    boxHandler();



    if (!ball.moving) { // holding ball
      ball.x = Math.min(mpos.x, 400);
      ball.y = mpos.y;
    } else if (released) { // just released ball
      released = false;
      const pullY = sling.centerY - mpos.y; // calculate elasticity based on distance from sling pos
      const pullX = sling.centerX - Math.min(mpos.x, 400);
      ball.dy = pullY / 5;
      ball.dx = pullX / 5;
    }

    // ball.draw(ctx);

    for (let i = 0; i < levels[0].balls.length; i++) {
      levels[0].balls[i].draw(ctx);
    }

    for (var i = 0; i < levels[0].retiredBalls.length; i++) {
      levels[0].retiredBalls[i].draw(ctx);
    }

    if (balls[balls.length-1].stopped) {
      gameOverSound.play
      gameOver = true;
    }

  }
    requestAnimationFrame(draw);
  }
  draw();

});


/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! exports provided: gameOverModal, levelsModal, startModal, mousePos, stop, getDistance, collisionDetection, wallDetection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameOverModal", function() { return gameOverModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelsModal", function() { return levelsModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startModal", function() { return startModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousePos", function() { return mousePos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistance", function() { return getDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionDetection", function() { return collisionDetection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wallDetection", function() { return wallDetection; });
const boing = new Audio();
boing.src = "./assets/audio/boing.wav";

const gameOverModal = (ctx, canvas) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(230, 24, 24, 0.58)';
  ctx.fill();
  ctx.fillStyle = '#06326f';
  ctx.font = "30px 'Rock Salt'";
  ctx.fillText("Game Over",canvas.width / 2 - 100, canvas.height / 2);
  ctx.font = "20px 'Rock Salt'";
  ctx.fillText("Hit enter to play again",canvas.width / 2 - 130, canvas.height / 2 + 75);
};

const levelsModal = (ctx, canvas) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(24, 230, 150, 0.58)';
  ctx.fill();
  ctx.fillStyle = '#06326f';
  ctx.font = "30px 'Rock Salt'";
  ctx.fillText("Congratulations",canvas.width / 2 - 130, canvas.height / 2);
  ctx.font = "20px 'Rock Salt'";
  ctx.fillText("Hit enter to continue",canvas.width / 2 - 130, canvas.height / 2 + 75);
};

const startModal = (ctx, canvas) => {
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
};


const mousePos = (canvas, event) => {
  const a = canvas.getBoundingClientRect();
  let pos = {
    x: event.clientX - a.left,
    y: event.clientY - a.top
  };
  return pos;
};


const stop = (audio) => {
  audio.pause();
  audio.currentTime = 0;
};

const getDistance = (x1, y1, x2, y2) => {
 let xDistance = x2 - x1;
 let yDistance = y2 - y1;
 return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};

const collisionDetection = (ball, box) => {
  const ballCenter = ball.width / 2;
  const boxCenter = box.width / 2;
  const distance = getDistance((ball.x + ballCenter), (ball.y + ballCenter),
   (box.x + boxCenter), (box.y + (box.height / 2)));
  if (distance - (ballCenter + boxCenter) < 1) {
      box.hit();
      ball.dx = -(ball.dx);
      ball.dy = -(ball.dy);
      box.dx = -(ball.dx);
      box.dy = -(ball.dy);
  }
};

const wallDetection = (object, canvas) => {

  if (!object.moving) return; // hasnt fallen or is being held
  if (object.x + object.dx > canvas.width - object.width || object.x + object.dx < 0) {
    object.dx = -object.dx;
    boing.play();
  } else if ((object.dy + object.y > canvas.height - object.height - 28 && !object.invalidHeight) || object.dy + object.y < 0) {
    object.dy = -(object.dy) * 0.8;
  }
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map