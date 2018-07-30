class Shape {
  constructor(ctx, img, x, y, height, width, srcArr) {
    this.ctx = ctx ;
    this.img = img;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.srcArr = srcArr;
  }

  draw(){

    if (this.width) { //box
      if (this.hits) {
        if (this.hits > 2) {
          return null;
        }
        this.img.src = this.srcArr[this.hits];
      }
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
