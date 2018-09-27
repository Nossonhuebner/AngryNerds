import Shape from './shape';
import { FRICTION, GRAVITY } from '../main';
import{ wallDetection } from '../util';

class Ball extends Shape {
  constructor(img, x, y, ballRadius) {
    super(img, x, y, ballRadius, ballRadius);
  }

  draw(ctx) {
    if (this.moving) {
      this.dx *= FRICTION;
      this.dy += GRAVITY;
      wallDetection(this, ctx.canvas);
      this.y += this.dy;
      this.x += this.dx;
    }
    
    ctx.drawImage(this.img, this.x - 12, this.y - 12, this.height, this.height);
  }

}

export default Ball;
