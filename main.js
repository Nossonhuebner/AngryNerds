import Shape from './elements/shape';
import Ball from './elements/ball';
import Box from './elements/box';
import Sling from './elements/sling';
import { level1 } from './levels/level1';
import { level2 } from './levels/level2';

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
  const levels = [level1, level2];
  let boxes = levels[0];


  let ballImg = new Image();
  ballImg.src = './assets/images/nerd.png';
  let balls = [];
  let retiredBalls = [];
  for (var i = 0; i < 3; i++) {
    balls.push(new Ball(ballImg, x + (10 * i), y, ballRadius));
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
      for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].height !== 0) {
          return false;
        }
      }
      return true;
    }

    function handleLevels() {
      if (isLevelOver() && levels.length > 1) {
        levels.shift();
        boxes = levels[0];
      }
    }


  function drawBox(box) {
    const height = 75;
    const length = 75;
    if (ball.x + ballRadius > box.x && ball.x - ballRadius < box.x + length && ball.y + ballRadius > box.y && ball.y - ballRadius < box.y + height) {
      hit = true;
      box.hits += 1;
      console.log(box.hits);

      explosion.play();
      stop(launch);
      box.bx = dx;
      box.by = dy;
      if (ball.y < box.y || ball.y > box.y + height) { // top hit
        dy = -(dy+3);
      } else {
        dx = -(dx+3);
      }
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
    const sling = new Sling(ctx, mouseHold, ball.x, ball.y);
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

    for (var j = 0; j < retiredBalls.length; j++) {
      retiredBalls[j].draw(ctx);
    }

    for (let i = 0; i < balls.length; i++) {
      balls[i].draw(ctx);
    }
    drawFence();
    drawString();

    if (action && ball.y < canvas.height - ball.height - 28){
      validHeight = true;
    }
    if (mouseHold && mpos.y < canvas.height - ball.height) {
      ball.x = mpos.x;
      ball.y = mpos.y;
    } else if (released) {
      retiredBalls.push(balls.pop());
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
