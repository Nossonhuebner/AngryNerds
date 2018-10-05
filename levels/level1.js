import Box from '../elements/box';
import BallsArr from '../elements/ball';

  //boxes
  let boxImg = new Image();
  const srcArr = ['./assets/images/webpack/webpack-logo.png',
                  './assets/images/webpack/webpack-logo-orange.png',
                  './assets/images/webpack/webpack-logo-red.png'
                  ];

export class LevelOne {
  constructor() {
    this.boxes = [new Box(boxImg, 600, 300, 75, 75, srcArr)];
    this.balls = new BallsArr().balls;
    this.retiredBalls= [];
  }
}
