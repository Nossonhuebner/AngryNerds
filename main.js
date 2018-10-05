import {LevelOne} from './levels/level1';
import { LevelTwo } from './levels/level2';
import Sling from './elements/sling';
import { gameOverModal, levelsModal, startModal, wallDetection,
  mousePos, stop, getDistance, drawSun, collisionDetection } from './util';

export const GRAVITY = 0.5;
export const FRICTION = 0.99;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.canvas.width  = 1341;
  ctx.canvas.height = 485;
  const x = 125; // middle of sling
  const y = 333;
  let levels = [new LevelOne(), new LevelTwo()];
  let boxes = levels[0].boxes;
  let balls = levels[0].balls;
  let ball = levels[0].balls[0];

  let mouseHold = false;
  let mpos = {x: "", y: ""};


  let released = false;
  let gameOver = false;
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
        gameOver = true;
      }
  });

  canvas.addEventListener('mouseup', (e) => {
    if (!start) {
      start = true;
      return;
    } else if (gameOver) {
      setTimeout(() => {
        levels = [[1], new LevelOne(), new LevelTwo()];
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
      mpos = mousePos(canvas, e);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
      if (!start) {
        start = true;
      } else if (gameOver) {
        levels = [[1], new LevelOne(), new LevelTwo()];
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

  const sling = new Sling(ctx, mouseHold, ball.x, ball.y);
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

      collisionDetection(ball, boxes[i]);
      wallDetection(boxes[i], canvas);
      boxes[i].draw(ctx);
    }
  }


  function draw() {

    if (!start) {
       startModal(ctx, canvas);
    } else if (gameOver) {
        gameOverModal(ctx, canvas);
    } else if (isLevelOver()) {
       levelsModal(ctx, canvas);
    } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSun(ctx);
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
       if ( balls.length > 1 && Math.abs(ball.dy) < 0.05 && ball.y > canvas.height - 150 ) { // final ball stopped
        gameOver = true;
      }
    }

    // ball.draw(ctx);

    for (let i = 0; i < levels[0].balls.length; i++) {
      levels[0].balls[i].draw(ctx);
    }

    for (var i = 0; i < levels[0].retiredBalls.length; i++) {
      levels[0].retiredBalls[i].draw(ctx);
    }

    if (balls[balls.length-1].stopped) {
      gameOver = true;
    }

  }
    requestAnimationFrame(draw);
  }
  draw();

});
