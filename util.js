const boing = new Audio();
boing.src = "./assets/audio/boing.wav";

export const gameOverModal = (ctx, canvas) => {
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

export const levelsModal = (ctx, canvas) => {
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

export const startModal = (ctx, canvas) => {
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


export const mousePos = (canvas, event) => {
  const a = canvas.getBoundingClientRect();
  let pos = {
    x: event.clientX - a.left,
    y: event.clientY - a.top
  };
  return pos;
};


export const stop = (audio) => {
  audio.pause();
  audio.currentTime = 0;
};

export const getDistance = (x1, y1, x2, y2) => {
 let xDistance = x2 - x1;
 let yDistance = y2 - y1;
 return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};

export const collisionDetection = (ball, box) => {
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

export const wallDetection = (object, canvas) => {

  if (!object.moving) return; // hasnt fallen or is being held
  if (object.x + object.dx > canvas.width - object.width || object.x + object.dx < 0) {
    object.dx = -object.dx;
    boing.play();
  } else if ((object.dy + object.y > canvas.height - object.height - 28 && !object.invalidHeight) || object.dy + object.y < 0) {
    object.dy = -(object.dy) * 0.8;
  }
};
