var data = [];
var maxData;
var barColors = [];

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(BOTTOM);


  for (var i = 0; i < 100; i++) {
    var randomNumber = random(20, 80);
    data.push(randomNumber);
    barColors.push(color(random(100, 255), random(100, 255), random(100, 255))); 
  }

  maxData = max(data);
}

function draw() {
  background('black'); 
  stroke(89, 86, 74);

  var angleSeparation = 360 / data.length;
  var padding = 10;

  if (frameCount <= 400) {
    maxValue = constrain(frameCount * 2, 0, 400);
  } else {
    maxValue = 400;
  }

  var offset = 200;
  var dataMultiplier = (height / 2 - offset - padding) / maxData;

  for (var i = 0; i < data.length; i++) {
    push();
    var currentData = data[i];
    var finalHeight = currentData * dataMultiplier;
    var animatedHeight = map(maxValue, 0, 400, 0, finalHeight);
    translate(width / 2, height / 2);
    rotate(angleSeparation * i);
    fill(barColors[i]); 
    rect(0, offset, angleSeparation * 2, animatedHeight);
    fill(180); 
    noStroke();
    text(Math.floor(currentData), offset - 20, 0);
    pop();
  }
}
