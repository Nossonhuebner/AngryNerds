import { level1 } from './levels/level1';
import { level2 } from './levels/level2';
import Sling from './elements/sling';
import { gameOverModal, levelsModal, startModal, wallDetection,
  mousePos, stop, getDistance, drawSun, collisionDetection } from './util';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.canvas.width  = 1341;
  ctx.canvas.height = 485;
  const x = 125; // middle of sling
  const y = 333;
  let levels = [level1, level2];
  let boxes = levels[0].boxes;
  let balls = levels[0].balls;
  let ball = levels[0].balls[0];

  var gravity = 0.5;
  var friction = 0.99;
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



  canvas.addEventListener('mousedown', (e) => {
    // if (start && !levelOver && !gameOver) {
    //   if (stopped) {
        action = false;
        released = false;
        mouseHold = true;
        validHeight = false;
    //   }
    // }
  });

  canvas.addEventListener('mouseup', (e) => {
    // if (start && !levelOver && !gameOver) {
    //   if (stopped) {
        action = true;
        mouseHold = false;
        released = true;
        pos = null;
    //   }
    // }
  });

  canvas.addEventListener('mousemove', (e) => {
      mpos = mousePos(canvas, e);
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
      if (boxes[i].height !== 0) { //there are still visible boxes in the level
        return false;
      }
    }
    return true;
  }

  function handleLevels() {
    levels.shift();
    boxes = levels[0].boxes;
    balls = levels[0].balls;
    ball = balls[0];
  }

  function drawBox(box) {
    const height = 75;
    if (ball.x + ball.width > box.x && ball.x - ball.width < box.x + box.width && ball.y + ball.width > box.y ) {
      hit = true;
      box.hit();
      console.log(box.hits);

      if (ball.y < box.y || ball.y > box.y + box.height) { // top hit
        ball.y -= 10;
        box.dy = -(Math.abs(box.dy));
      } else {
        ball.x = ball.x < box.x ? ball.x -10 : ball.x + 10;
        box.dx = -(box.dx);
      }
      box.dx = -box.dx;
      box.dy = -box.dy;
    }

    if (hit) {
      if (box.y + box.dy + (2 * gravity) + box.height < canvas.height - 38) {
        box.dy += (2 * gravity);
      }
      box.dx *= friction;
      box.x += box.dx;
      box.y = Math.min((canvas.height - box.height - 28), (box.y + box.dy));
    }
  }

  const sling = new Sling(ctx, mouseHold, ball.x, ball.y);
  function drawString() {
    sling.draw(mouseHold, ball.x, ball.y);
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


  function draw() {
    if (!start) {
       startModal(ctx, canvas);
    } else if (gameOver) {
        gameOverModal(ctx, canvas);
    } else if (levelOver) {
       levelsModal(ctx, canvas);
    } else {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSun(ctx);
    drawFence();
    drawString();

    for (let i = 0; i < boxes.length; i++) {
      collisionDetection(ball, boxes[i]);
      wallDetection(boxes[i], canvas);
      boxes[i].draw(ctx);
    }

    for (let i = 0; i < levels[0].balls.length; i++) {
      levels[0].balls[i].draw(ctx);
    }
    if (action && ball.y < canvas.height - ball.height - 28) {
      validHeight = true;
    }

    if (mouseHold && mpos.y < canvas.height - ball.height && stopped) {
      ball.x = Math.min(mpos.x, 400);
      ball.y = mpos.y;
    } else if (released) {
      stopped = false;
      const pullY = y - mpos.y;
      const pullX = x - Math.min(mpos.x, 400);

      ball.dy = pullY / 5;
      ball.dx = pullX / 5;
    }
    if (action) {
      ball.dx *= friction;
      if ((ball.dy + ball.y > canvas.height - ball.height- 28  && validHeight )|| ball.dy + ball.y < ball.height ) { //hit top / bottom
        ball.dy = -ball.dy * 0.9 ;
      } else {
        ball.dy += gravity;
      }
      wallDetection(ball, canvas);

      ball.y += ball.dy;
      ball.x += ball.dx;

      if (Math.abs(ball.dy) < 0.05 && ball.y > canvas.height - 150 ) {

        stopped = true;
        // if (balls.length > 1) {
        //   // levels[0].retiredBalls.push(balls.shift());
        // } else {
        //   gameOver = true;
        // }
        ball = balls[0];
      }
    }
    ball.draw(ctx);
    for (var i = 0; i < levels[0].retiredBalls.length; i++) {
      levels[0].retiredBalls[i].draw(ctx);
    }

    if (released) {
      released = false;
      // levels[0].retiredBalls.push(levels[0].balls.shift());
      // ball = levels[0].balls[0];// next ball
    }
  }
    requestAnimationFrame(draw);
  }
  draw();

});
