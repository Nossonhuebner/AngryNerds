// import Shape from './elements/shape';
// import Ball from './elements/ball';
// import Box from './elements/box';
import { gameOverModal, levelsModal, startModal,
  mousePos, stop, getDistance, drawSun } from './util';
import Sling from './elements/sling';
import { level1 } from './levels/level1';
import { level2 } from './levels/level2';

document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.canvas.width  = 1341;
  ctx.canvas.height = 485;

  // const ballRadius = 25;
  // var x = 125;
  // var y = 333;
  // let boxX = 600;
  // let boxY = 300;
  // let balls = [];
  // for (var i = 0; i < 3; i++) {
  //   balls.push(new Ball(ballImg, x + (30 * i), 388, ballRadius));
  // }
  // // let ballImg = new Image();
  // ballImg.src = './assets/images/nerd.png';
  // let retiredBalls = [];
  //
  // const explosion = new Audio();
  // explosion.src = "./assets/audio/explosion.wav";




  let levels = [level1, level2];
  let boxes = levels[0].boxes;
  let ball = levels[0].balls[0];

  var dx = 2;
  var dy = -2;
  var gravity = 0.5;
  var friction = 0.99;
  let by;
  let bx;
  let hit = false;
  let mouseHold = false;
  let pos;
  let mpos;
  let released = false;
  let action = false;
  let stopped = true;
  let validHeight = false;
  let modal = false;
  let gameOver = false;
  let levelOver = false;
  let start = false;



  const boing = new Audio();
  boing.src = "./assets/audio/boing.wav";

  const launch = new Audio();
  launch.src = "./assets/audio/bomb_drop.wav";

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
        levels = [[1],level1, level2];
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
        if (boxes[i].height !== 0) {
          return false;
        }
      }
      return true;
    }

    function handleLevels() {
      levels.shift();
      boxes = levels.boxes[0];
      balls = [];
      retiredBalls = [];
      // for (var i = 0; i < 3; i++) {
      //   balls.push(new Ball(ballImg, x + (30 * i), y, ballRadius));
      // }
      ball = levels[0].balls[0];
    }


  function drawBox(box) {
    const height = 75;
    // const length = 75;
    if (ball.x + ball.width > box.x && ball.x - ball.width < box.x + box.width && ball.y + ball.width > box.y ) {
      hit = true;
      box.hit();
      console.log(box.hits);
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
    const sling = new Sling(ctx, mouseHold, ball.x, ball.y);
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
        dx = -(dx);
      } else if (ball.y + ball.width < 280 && ball.y + ball.width > 260){
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

    function getStatus() {
      if (!start) {
        return startModal(ctx, canvas);
      } else if (gameOver) {
        return  gameOverModal(ctx, canvas);
      } else if (levelOver) {
        return levelsModal(ctx, canvas);
      }
    }



  function draw() {
    if (isLevelOver()) {
      levelOver = true;
    }
    getStatus();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSun(ctx);


    for (var i = 0; i < boxes.length; i++) {
      drawBox(boxes[i]);
      boxes[i].draw(ctx);
    }

    for (let i = 0; i < levels[0].balls.length; i++) {
      levels[0].balls[i].draw(ctx);
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
    requestAnimationFrame(draw);
  }

  draw();

});
