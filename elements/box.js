import Shape from './shape';

class Box extends Shape {
  constructor(ctx, img, x, y, height, width, srcArr) {
    super(ctx, img, x, y, height, width, srcArr);
  }
}


export default Box;
