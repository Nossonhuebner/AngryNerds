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
  constructor(ctx, img, x, y, ballRadius) {
    super(ctx, img, x, y, ballRadius);
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
  constructor(ctx, img, x, y, height, width) {
    super(ctx, img, x, y, height, width);
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
  constructor(ctx, img, x, y, height, width) {
    this.ctx = ctx ;
    this.x = x;
    this.y = y;
    this.img = img;
    this.height = height;
    this.width = width;

  }

  draw(){

    if (this.width) {
      this.ctx.drawImage(this.img, this.x, this.y, 75, 75);
      // this.ctx.beginPath();
      // this.ctx.rect(this.x, this.y, this.height, this.width);
      // this.ctx.fillStyle = "#f10d0d";
      // this.ctx.fill();
      // this.ctx.closePath();
    } else {
      this.ctx.drawImage(this.img, this.x - 12, this.y - 12, this.height, this.height);

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





document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
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
      ball = new _elements_ball__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, x, y, ballRadius);
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



  function drawBox() {

    const height = 75;
    const length = 75;
    // const imgData = ctx.getImageData(box.x, box.y, height, length);
    // const pix = imgData.data;

    if (ball.x + ballRadius > box.x && ball.x - ballRadius < box.x + length && ball.y + ballRadius > box.y && ball.y - ballRadius < box.y + height) {
      hit = true;
      explosion.play();
      stop(launch);
      //
      // for (let i = 0, n = pix.length; i <n; i += 4) {
      //   pix[i] = 100;
      //   pix[i+1] = 0;
      //   pix[i+3] += 20;
      // }
      // ctx.putImageData(imgData, 0, 0);

      bx = dx;
      by = dy;
      dx = -dx;
      dy = -dy;
    }
    if (box.x + bx > canvas.width - length || box.x + bx < 0) {
      console.log('hit side');
      bx = -bx;
    } else if (by + box.y > canvas.height - height - 28 || by + box.y < height) {
      by = -by * 0.8;
    }
    if (hit) {
      if (box.y + by + (2 * gravity) + height < canvas.height - 38) {
        by += (2 * gravity);
      }
      bx *= friction;
      box.x += bx;
      box.y += by;
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

    if (box.x + box.width > 400 && box.x < 410 && box.y + box.height > 250) {
      bx = -bx;
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
  ballImg.src = './assets/images/webpack-logo.png';
  let ball = new _elements_ball__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, ballImg, x, y, ballRadius);

  let boxImg = new Image();
  boxImg.src = './assets/images/webpack-logo.png';
  const box = new _elements_box__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, boxImg, boxX, boxY, 50, 50);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    box.draw();
    drawFence();
    drawBox();
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
    console.log(validHeight);

    if (mouseHold && mpos.y < canvas.height - ball.height) {
      ball.x = mpos.x;
      ball.y = mpos.y;
    } else if (released) {
      released = false;
      const pullY = y - mpos.y;
      const pullX = x - mpos.x;
      console.log(y);
      console.log(mpos.y);
      console.log(pullY);
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
    ball.draw();

    requestAnimationFrame(draw);
  }

  draw();

});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map