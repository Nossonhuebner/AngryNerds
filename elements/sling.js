class Sling {
  constructor(ctx, mouseHold, x, y) {
      if (mouseHold) {
      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(100, 276);
      ctx.lineTo(Math.min(x, 400), y);
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(Math.min(x, 400), y);
      ctx.lineTo(150, 300);
      ctx.lineWidth = 1;
      ctx.stroke();
    } else {
      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(100, 276);
      ctx.lineTo(150, 300);
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

}

export default Sling;
