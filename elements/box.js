import Shape from './shape';

class Box extends Shape {
  constructor(img, x, y, height, width, srcArr) {
    super(img, x, y, height, width, srcArr);
    this.explosion = new Audio();
    this.explosion.src = "./assets/audio/explosion.wav";
  }

  draw(ctx) {
    if (this.hits > 2) { //reduce visibilty if dead
      this.width = 1;
      this.height = 0;
      this.x = 0;
      this.y = 0;
    } else {
      this.img.src = this.srcArr[this.hits];
      ctx.drawImage(this.img, this.x, this.y, 75, 75);
    }
  }

  hit() {
    this.explosion.play();
    this.hits += 1;
  }

}


export default Box;
