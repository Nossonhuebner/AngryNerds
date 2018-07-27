import Shape from './shape';
import Ball from './ball';
import Box from './box';
import Sling from './sling';

document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  const ballRadius = 10;
  var x = 125;
  var y = 288;
  var dx = 2;
  var dy = -2;
  var gravity = 0.5;
  var friction = 0.99;
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
    return pos;
  }

    canvas.addEventListener('mousedown', (e) => {
      action = false
      released = false
      mouseHold = true;
    });
    canvas.addEventListener('mouseup', (e) => {
      action = true;
      mouseHold = false;
      released = true;
      debugger
      pos = null;
    });
    canvas.addEventListener('mousemove', (e) => {
      mpos = mousePos(canvas, e);
    });

    const ball = new Ball(ctx, x, y, ballRadius);
    const box = new Box(ctx, boxX, boxY, 50, 50);
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
      if (boxY + by + (2 * gravity) + size + size < canvas.height + size - 38) {
        by += (2 * gravity);
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

 // Centre at the rotation point

    // ctx.restore();

  }

  function drawString() {
    const sling = new Sling(ctx, mouseHold, x, y);
  }

  function drawMound() {
    // ctx.beginPath(); ctx.fillStyle = "#2f1a08" ctx.moveTo(360, canvas.height - 38); ctx.lineTo(425, canvas.height - 38 - 50); ctx.lineTo(450, canvas.height - 38 - 50); ctx.lineTo(475, canvas.height - 38 - 80); ctx.lineTo(495, canvas.height - 38 - 80);
    // ctx.lineTo(590, canvas.height - 38); ctx.fill();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(100, 276);
    ctx.lineTo(150, 300);
    ctx.lineWidth = 1;
    ctx.stroke();

    box.draw();
    // drawBox();
    drawMound();
    // if (y + dy < ballRadius || y + dy > canvas.height - ballRadius - 38) {
    //   // console.log('hit y')
    //   dy = -dy * 0.8;
    // }
    // if (y + dy + gravity + ballRadius < canvas.height - 38 && !mouseHold) {
    //   dy += gravity;
    // }
    if (mouseHold) {
      drawString();
      // x = mpos.x;
      // y = mpos.y;
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
      debugger
      dy += gravity;
      dx *= friction;
      ball.x += dx;
      ball.y += dy;
    }
    ball.draw();

    requestAnimationFrame(draw);
  }

  draw();

});
