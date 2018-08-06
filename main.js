import Shape from './elements/shape';
import Ball from './elements/ball';
import Box from './elements/box';
import Sling from './elements/sling';
import { level1 } from './levels/level1';
import { level2 } from './levels/level2';

document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.canvas.width  = window.innerWidth;
  // ctx.canvas.height = window.innerHeight;
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
  let stopped = true;
  let angle = 4;
  let validHeight = false;
  const levels = [level1, level2];
  let boxes = levels[0];


  let ballImg = new Image();
  ballImg.src = './assets/images/nerd.png';

  let balls = [];
  let retiredBalls = [];

  for (var i = 0; i < 3; i++) {
    balls.push(new Ball(ballImg, x + (30 * i), y, ballRadius));
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
      if (stopped) {
        action = false;
        released = false;
        mouseHold = true;
        validHeight = false;
        // ball = new Ball(ctx, x, y, ballRadius);
        stop(launch);
      }
    });
    canvas.addEventListener('mouseup', (e) => {
      if (stopped) {
        action = true;
        mouseHold = false;
        released = true;
        pos = null;
        launch.play();
      }
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
         balls = [];
         retiredBalls = [];

        for (var i = 0; i < 3; i++) {
          balls.push(new Ball(ballImg, x + (30 * i), y, ballRadius));
        }
        let ball = balls[0];
      }
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
        dy = -(Math.abs(dy));
      } else {
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
    ctx.moveTo(400, 250);
    ctx.lineTo(400, 380);
    ctx.lineWidth = 10;
    ctx.stroke();

    if (ball.x + ballRadius > 400 && ball.x - ballRadius < 410) {
      if (ball.y + ballRadius > 260) {
        dx = -(dx);
      } else if (ball.y + ballRadius < 260 && ball.y + ballRadius > 245){
      dy = -(Math.abs(dy));
      }
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
    ctx.drawImage(sun, 1000, 20, 110, 110);
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
      if (Math.abs(dy) < 0.02 && ball.y > canvas.height - 70) {
        stopped = true;
        retiredBalls.push(balls.shift());
        ball = balls[0];
      }
    }
    ball.draw(ctx);
    requestAnimationFrame(draw);
  }

  draw();

});
