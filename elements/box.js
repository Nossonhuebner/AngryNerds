import Shape from './shape';

class Box extends Shape {
  constructor(img, x, y, height, width, srcArr) {
    super(img, x, y, height, width, srcArr);
    this.explosion = new Audio();
    this.explosion.src = "./assets/audio/explosion.wav";
  }


  draw(ctx) {
    if (this.hits > 2) { //reduce visibilty if dead
      // this.width = 1;
      // this.height = 0;
      // this.x = 0;
      // this.y = 0;
      return;
    } else if (this.hits) {
        // if (this.y + this.by + (2 * gravity) + this.height < canvas.height - 38) { //off the ground
        this.dy += (2 * 0.5); // gravity
        // }
        this.dx *= 0.99; // friction
        this.x += this.dx;
        this.y = Math.min((ctx.canvas.height - this.height - 28), (this.y + this.dy));
    }
    this.img.src = this.srcArr[this.hits];
    ctx.drawImage(this.img, this.x, this.y, 75, 75);
  }

  hit() {
    this.explosion.play();
    this.hits += 1;
  }

}


export default Box;
