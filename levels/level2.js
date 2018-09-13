import Ball from '../elements/ball';
import Box from '../elements/box';

//balls
  let balls = [];
  let ballImg = new Image();
  ballImg.src = './assets/images/nerd.png';
  for (var i = 0; i < 3; i++) {
    balls.push(new Ball(ballImg, 125 + (30 * i), 388, 25));
  }
//boxes
let boxImg = new Image();
const srcArr = ['./assets/images/heroku/heroku.png', './assets/images/heroku/heroku-orange.png', './assets/images/heroku/heroku-red.png'];
const box1 = new Box(boxImg, 550, 300, 75, 50, srcArr);
const box2 = new Box(boxImg, 650, 300, 75, 50, srcArr);
export const level2 = {boxes: [box1, box2], balls: balls, retiredBalls: []};
