import Ball from '../elements/ball';
import Box from '../elements/box';

let ballImg = new Image();
ballImg.src = './assets/images/nerd.png';
let ball1 = new Ball(ctx, ballImg, x, y, ballRadius);
let ball2 = new Ball(ctx, ballImg, x, y - 10, ballRadius);
let ball3 = new Ball(ctx, ballImg, x, y - 20, ballRadius);

let boxImg = new Image();
boxImg.src = './assets/images/webpack-logo.png';
const box1 = new Box(ctx, boxImg, boxX, boxY, 50, 50);
const box2 = new Box(ctx, boxImg, boxX, boxY, 50, 50);