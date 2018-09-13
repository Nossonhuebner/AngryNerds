import Shape from './shape';

class Ball extends Shape {
  constructor(img, x, y, ballRadius) {
    super(img, x, y, ballRadius);
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x - 12, this.y - 12, this.height, this.height);
  }

}

export default Ball;
