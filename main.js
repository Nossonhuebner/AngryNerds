import Shape from './elements/shape';
import Ball from './elements/ball';
import Box from './elements/box';
import Sling from './elements/sling';

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



  function drawBox() {

    const height = 75;
    const length = 75;
    const imgData = ctx.getImageData(box.x, box.y, height, length);
    const pix = imgData.data;

    if (ball.x + ballRadius > box.x && ball.x - ballRadius < box.x + length && ball.y + ballRadius > box.y && ball.y - ballRadius < box.y + height) {
      hit = true;
      explosion.play();
      stop(launch);

      for (let i = 0, n = pix.length; i <n; i += 4) {
        if (pix[i+2] > 10) {
          pix[i] += 75;
          pix[i+2] -= 50;
          pix[i+3] += 20;
        }
      }
      ctx.putImageData(imgData, box.x, box.y);
      let tempImg = new Image();
      tempImg.src = can[0].toDataURL("image/png");
      box.img = tempImg;

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
  ballImg.src = './assets/images/nerd.png';
  let ball = new Ball(ctx, ballImg, x, y, ballRadius);

  let boxImg = new Image();
  boxImg.src = './assets/images/webpack-logo.png';
  const box = new Box(ctx, boxImg, boxX, boxY, 50, 50);

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
