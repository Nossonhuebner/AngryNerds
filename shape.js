class Shape {
  constructor(ctx, x, y, height, width) {
    this.ctx = ctx ;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

  }

  draw(){

    if (this.width) {
      this.ctx.beginPath();
      this.ctx.rect(this.x, this.y, this.height, this.width);
      this.ctx.fillStyle = "#f10d0d";
      this.ctx.fill();
      this.ctx.closePath();
    } else {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.height, 0, Math.PI * 2);
      this.ctx.fillStyle = "#f10d0d";
      this.ctx.fill();
      this.ctx.closePath();
    }
    // requestAnimationFrame(this.draw.bind(this));
  }
}

export default Shape;
