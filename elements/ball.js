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
        console.log(this);
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

export default Ball;
