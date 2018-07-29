class Shape {
  constructor(ctx, img, x, y, height, width) {
    this.ctx = ctx ;
    this.x = x;
    this.y = y;
    this.img = img;
    this.height = height;
    this.width = width;

  }

  draw(){

    if (this.width) {
      this.ctx.drawImage(this.img, this.x, this.y, 75, 75);
      // this.ctx.beginPath();
      // this.ctx.rect(this.x, this.y, this.height, this.width);
      // this.ctx.fillStyle = "#f10d0d";
      // this.ctx.fill();
      // this.ctx.closePath();
    } else {
      this.ctx.drawImage(this.img, this.x - 12, this.y - 12, this.height, this.height);

      // this.ctx.beginPath();
      // this.ctx.arc(this.x, this.y, this.height, 0, Math.PI * 2);
      // this.ctx.fillStyle = "#f10d0d";
      // this.ctx.fill();
      // this.ctx.closePath();
    }
    // requestAnimationFrame(this.draw.bind(this));
  }
}

export default Shape;
