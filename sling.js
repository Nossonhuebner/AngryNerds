class Sling {
  constructor(ctx, action, x, y) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(100, 276);
    ctx.lineTo(150, 300);
    ctx.lineWidth = 1;
    ctx.stroke();

    if (!action) {
      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(100, 276);
      ctx.lineTo(x, y);
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(150, 300);
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

}

export default Sling;
