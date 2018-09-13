class Sling {
  constructor(ctx, mouseHold, x, y) {
    this.mouseHold = mouseHold;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  draw(mouseHold, x, y) {
    this.x = x;
    this.y = y;
    if (mouseHold) {
    this.ctx.strokeStyle = 'black';
    this.ctx.beginPath();
    this.ctx.moveTo(100, 316);
    this.ctx.lineTo(Math.min(x, 400), y);
    this.ctx.lineWidth = 1;
    this.ctx.stroke();

    this.ctx.strokeStyle = 'black';
    this.ctx.beginPath();
    this.ctx.moveTo(Math.min(x, 400), y);
    this.ctx.lineTo(150, 350);
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
  } else {
    this.ctx.strokeStyle = 'black';
    this.ctx.beginPath();
    this.ctx.moveTo(100, 316);
    this.ctx.lineTo(150, 350);
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
  }
  }

}

export default Sling;
