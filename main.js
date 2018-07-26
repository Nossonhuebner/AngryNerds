import Shape from './shape';
import Ball from './ball';
import Box from './box';
import Sling from './sling'

document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var ballRadius = 10;
  const slingY = 288;
  const slingX = 125;
  var x = slingX;
  var y = slingY;
  var dx = 2;
  var dy = -2;
  var paddleHeight = 10;
  var rightPressed = false;
  var leftPressed = false;
  var score = 0;
  var lives = 3;
  var gravity = 0.5;
  var friction = 0.99;
  const ballWeight = 1;
  const boxWeight = 2;
  let boxX = 400;
  let boxY = 200;
  let by;
  let bx;
  let hit = false;
  let mouseHold = false;
  let pos;
  let mpos;
  let released = false;
  let action = false;
  let angle = 4;

  function mousePos(canvas, event) {
    const a = canvas.getBoundingClientRect();
    pos = {
      x: event.clientX - a.left,
      y: event.clientY - a.top
    };
    console.log(pos);
    return pos;
  }

  canvas.addEventListener('mousedown', (e) => {
    action = false;
    mouseHold = true;
  });

  canvas.addEventListener('mouseup', (e) => {
    action = true;
    mouseHold = false;
    released = true;
    pos = null;
  });

  canvas.addEventListener('mousemove', (e) => {
    mpos = mousePos(canvas, e);
  });

    const ball = new Ball(x, y, ballRadius, ctx);
    // ctx.beginPath();
    // ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    // ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    // ctx.fillStyle = "#f10d0d";
    // ctx.fill();
    // ctx.closePath();
    // base_image = new Image(); base_image.src = 'img/base.png'; ctx.drawImage('./nerd.png', x, y, ballRadius, ballRadius)

    // if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    //   console.log('hit side');
    //   dx = -dx;
    // }
  function drawBox() {
    const size = 50;
    if (x + ballRadius > boxX && x - ballRadius < boxX + size && y + ballRadius > boxY && y - ballRadius < boxY + size) {
      hit = true;
      bx = dx;
      by = dy;

      if (x + ballRadius > boxX && x - ballRadius < boxX + size) {
        dx = -dx;
      } else {
        dy = -dy;
      }
    }

    if (!hit) {}

    if (boxX + bx > canvas.width - size || boxX + bx < 0) {
      console.log('hit side');
      bx = -bx;
    } else if (by + boxY > canvas.height - size - 38 || by + boxY < size) {
      by = -by * 0.8;
    }

    if (hit) {
      if (boxY + by + (boxWeight * gravity) + size + size < canvas.height + size - 38) {
        by += (boxWeight * gravity);
      }
      bx *= friction;
      boxX += bx;
      boxY += by;
      // ctx.save(); ctx.translate(-boxX, -boxY);  Translate to centre of square ctx.rotate(Math.PI / angle);  Rotate 45 degrees angle++ ctx.beginPath(); ctx.rect(boxX, boxY, size, size) ctx.fillStyle = "#f10d0d"; ctx.fill(); ctx.closePath();  Centre at
      // the rotation point
      //
      // ctx.restore();
    }

    // ctx.save(); ctx.translate(boxX, boxX);  Translate to centre of square ctx.rotate(Math.PI / 4);  Rotate 45 degrees

    ctx.beginPath();
    ctx.rect(boxX, boxY, size, size);
    ctx.fillStyle = "#f10d0d";
    ctx.fill();
    ctx.closePath(); // Centre at the rotation point

    // ctx.restore();

  }

  function drawSling() {
    const sling = new Sling(ctx, action, x, y);
  }

  function drawMound() {
    // ctx.beginPath(); ctx.fillStyle = "#2f1a08" ctx.moveTo(360, canvas.height - 38); ctx.lineTo(425, canvas.height - 38 - 50); ctx.lineTo(450, canvas.height - 38 - 50); ctx.lineTo(475, canvas.height - 38 - 80); ctx.lineTo(495, canvas.height - 38 - 80);
    // ctx.lineTo(590, canvas.height - 38); ctx.fill();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawSling();
    drawBox();
    drawMound();
    // if (y + dy < ballRadius || y + dy > canvas.height - ballRadius - 38) {
    //   // console.log('hit y')
    //   dy = -dy * 0.8;
    // }
    // if (y + dy + gravity + ballRadius < canvas.height - 38 && !mouseHold) {
    //   dy += gravity;
    // }
    if (mouseHold) {
      x = mpos.x;
      y = mpos.y;
    } else if (released) {
      released = false;
      const pullY = slingY - mpos.y;
      const pullX = slingX - mpos.x;
      console.log(pullY);
      console.log(pullX);
      dy = pullY / 5;
      dx = pullX / 5;
      dy += gravity;
    }
    if (action) {
      dx *= friction;
      x += dx;
      y += dy;
    }

    requestAnimationFrame(draw);
  }

  draw();

});
