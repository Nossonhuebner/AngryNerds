import BallsArr from '../elements/ball';
import Box from '../elements/box';

//boxes
let boxImg = new Image();
const srcArr = ['./assets/images/heroku/heroku.png', './assets/images/heroku/heroku-orange.png', './assets/images/heroku/heroku-red.png'];
const box1 = new Box(boxImg, 550, 300, 75, 50, srcArr);
const box2 = new Box(boxImg, 650, 300, 75, 50, srcArr);
export const level2 = {boxes: [box1, box2], balls: (new BallsArr().balls), retiredBalls: []};


export class LevelTwo {
  constructor() {
    this.boxes = [new Box(boxImg, 550, 300, 75, 50, srcArr),
                  new Box(boxImg, 650, 300, 75, 50, srcArr)
                  ];
    this.balls = new BallsArr().balls;
    this.retiredBalls= [];
  }
}
