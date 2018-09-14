class Sling {
  constructor(ctx, mouseHold, x, y) {
    this.mouseHold = mouseHold;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.launch = new Audio();
    this.launch.src = "./assets/audio/bomb_drop.wav";
  }

  draw(mouseHold, x, y) {
    if (mouseHold) { // lines to and from mousePos
      this.mouseHold = true;
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

      if (this.mouseHold) { // just released
        this.launch.play();
        this.mouseHold = false;
      }

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
