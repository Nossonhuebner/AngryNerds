import Shape from './shape';
import{ wallDetection } from '../util';

class Ball extends Shape {
  constructor(img, x, y, ballRadius) {
    super(img, x, y, ballRadius, ballRadius);
  }

  draw(ctx) {
    // wallDetection(this, ctx.canvas);
    // this.x += (this.dx * 0.99);
    // this.y += this.dy + 0.5;
    ctx.drawImage(this.img, this.x - 12, this.y - 12, this.height, this.height);
  }

}

export default Ball;
