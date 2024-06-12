function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50); 


  for (let y = 20; y < height; y += 40) {
    for (let x = 20; x < width; x += 40) {

      fill(x, y, 200);
      ellipse(x, y, y / 5 + 10);
    }
  }
}
