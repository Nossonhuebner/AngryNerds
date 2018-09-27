class Shape {
  constructor(img, x, y, height, width, srcArr) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.srcArr = srcArr;
    this.hits = 0;
    this.dx = 0;
    this.dy = 0;
    this.moving = false;
  }
}

export default Shape;
