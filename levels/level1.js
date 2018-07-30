// let boxImg = new Image();
// const srcArr = ['./assets/images/webpack/webpack-logo.png', './assets/images/webpack/webpack-logo-orange.png','./assets/images/webpack/webpack-logo-red.png'];
// boxImg.src = srcArr[0];
// const box = new Box(ctx, boxImg, boxX, boxY, 50, 50, srcArr);
// box.hits = 0;
import Box from '../elements/box';
  let boxX = 600;
  let boxY = 300;

  let boxImg = new Image();
  const srcArr = ['./assets/images/webpack/webpack-logo.png', './assets/images/webpack/webpack-logo-orange.png','./assets/images/webpack/webpack-logo-red.png'];
  export const level1 = [new Box(boxImg, boxX, boxY, 50, 50, srcArr)];
