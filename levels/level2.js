import Ball from '../elements/ball';
import Box from '../elements/box';

// let ballImg = new Image();
// ballImg.src = './assets/images/nerd.png';
// let ball1 = new Ball(ctx, ballImg, x, y, ballRadius);
// let ball2 = new Ball(ctx, ballImg, x, y - 10, ballRadius);
// let ball3 = new Ball(ctx, ballImg, x, y - 20, ballRadius);
let boxX = 600;
let boxY = 300;

let boxImg = new Image();
const srcArr = ['./assets/images/heroku/heroku.png', './assets/images/heroku/heroku-orange.png', './assets/images/heroku/heroku-red.png'];
const box1 = new Box(boxImg, boxX-50, boxY, 75, 50, srcArr);
const box2 = new Box(boxImg, boxX+ 50, boxY, 75, 50, srcArr);
export const level2 = [box1, box2];
