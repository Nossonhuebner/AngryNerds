import Shape from './shape';
import { FRICTION, GRAVITY } from '../main';
import{ wallDetection } from '../util';

class Ball extends Shape {
  constructor(img, x, y, ballRadius) {
    super(img, x, y, ballRadius, ballRadius);
  }

  draw(ctx) {
    wallDetection(this, ctx.canvas);


    if (this.moving) {
      this.dx *= FRICTION;
      if ((this.dy + this.y > ctx.canvas.height - this.height- 28 )|| this.dy + this.y < this.height ) { //hit top / bottom
        this.dy = -this.dy * 0.9 ;
      } else {
        this.dy += GRAVITY;
      }

      wallDetection(this, ctx.canvas);

      this.y += this.dy;
      this.x += this.dx;
    }


    // this.x += (this.dx * 0.99);
    // this.y += this.dy + 0.5;
    ctx.drawImage(this.img, this.x - 12, this.y - 12, this.height, this.height);
  }

}

export default Ball;
