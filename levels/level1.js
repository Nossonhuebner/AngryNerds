import Box from '../elements/box';
import BallsArr from '../elements/ball';

  //boxes
  let boxImg = new Image();
  const srcArr = ['./assets/images/webpack/webpack-logo.png',
   './assets/images/webpack/webpack-logo-orange.png','./assets/images/webpack/webpack-logo-red.png'];
  export const level1 = {boxes: [new Box(boxImg, 600, 300, 50, 50, srcArr)], balls: new BallsArr().balls, retiredBalls: []};
