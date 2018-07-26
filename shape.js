class Shape {
  constructor(x, y, bound) {
    this.x = x;
    this.y = y;
    this.bound = bound;

    if (this.x + this.bound > 800 || this.x  < this.bound) {
      debugger
      this.x = -this.x;
    }

    if (this.y + this.bound > 400 || this.y  < this.bound) {
      this.y = -this.y;
    }
  }

  draw(){
    
  }
}

export default Thing;
