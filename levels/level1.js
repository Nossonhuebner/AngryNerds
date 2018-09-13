import Box from '../elements/box';
import Ball from '../elements/ball';
  //balls
  let balls = [];
  let ballImg = new Image();
  ballImg.src = './assets/images/nerd.png';
  for (var i = 0; i < 3; i++) {
    balls.push(new Ball(ballImg, 125 + (30 * i), 388, 25));
  }

  //boxes
  let boxImg = new Image();
  const srcArr = ['./assets/images/webpack/webpack-logo.png',
   './assets/images/webpack/webpack-logo-orange.png','./assets/images/webpack/webpack-logo-red.png'];
  export const level1 = {boxes: [new Box(boxImg, 600, 300, 50, 50, srcArr)], balls: balls, retiredBalls: []};
