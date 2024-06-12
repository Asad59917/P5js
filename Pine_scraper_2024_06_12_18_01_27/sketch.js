
let data = [10, 25, 15, 30, 20];

function setup() {
  
  createCanvas(800, 600);
  background(000);

  noLoop();
}

function draw() {

  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  
  
  let startAngle = 0;


  for (let i = 0; i < data.length; i++) {

    let sliceAngle = (data[i] / total) * TWO_PI;
    fill(map(i, 0, data.length, 50, 255), 100, 150);
    arc(width / 2, height / 2, 400, 400, startAngle, startAngle + sliceAngle, PIE);
    startAngle += sliceAngle;
  }
}
