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
      let img = new Image();
      img.src = './assets/images/webpack-logo.png';
      this.ctx.drawImage(img, this.x, this.y, 75, 75);
      // this.ctx.beginPath();
      // this.ctx.rect(this.x, this.y, this.height, this.width);
      // this.ctx.fillStyle = "#f10d0d";
      // this.ctx.fill();
      // this.ctx.closePath();
    } else {
      let img = new Image();
      img.src = "./assets/images/nerd.png";
      this.ctx.drawImage(img, this.x - 12, this.y - 12, this.height, this.height);

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
