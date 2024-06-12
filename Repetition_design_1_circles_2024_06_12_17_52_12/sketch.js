function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  let numCircles = 10; 
  let circleSize = width / numCircles;

  for (let y = circleSize / 2; y < height; y += circleSize) {
    for (let x = circleSize / 2; x < width; x += circleSize) {
      if ((x + y) % (circleSize * 2) == 0) {
        fill(0); 
      } else {
        fill(255, 0, 0); 
      }
      ellipse(x, y, circleSize, circleSize);
    }
  }
}
