import Shape from './shape';

class Ball extends Shape {
  constructor(x, y, ballRadius, ctx) {
    debugger
    super(x, y, ballRadius);
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#f10d0d";
    ctx.fill();
    ctx.closePath();
  }

}

export default Ball;
