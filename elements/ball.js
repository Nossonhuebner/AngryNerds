import Shape from './shape';
import { FRICTION, GRAVITY } from '../main';
import{ wallDetection } from '../util';

class Ball extends Shape {
  constructor(img, x, y, ballRadius) {
    super(img, x, y, ballRadius, ballRadius);
  }

  draw(ctx) {
    if (this.moving) {
      if (this.y > 423 && Math.abs(this.dx) < 1 && Math.abs(this.dy) < 1) {
        this.stopped = true;
      } else {
        this.dx *= FRICTION;
        this.dy += GRAVITY;
        wallDetection(this, ctx.canvas);
        this.y += this.dy;
        this.x += this.dx;
      }
    }

    ctx.drawImage(this.img, this.x - 12, this.y - 12, this.height, this.height);
  }

}



class BallsArr {
  constructor () {
    this.balls = [new Ball(new Image(), 1, 1, 1)]; // dummy starting ball
      let ballImg = new Image();
      ballImg.src = './assets/images/nerd.png';
      for (var i = 0; i < 3; i++) {
        this.balls.push(new Ball(ballImg, 125 + (30 * i), 388, 25));
      }
  }
}

export default BallsArr;
