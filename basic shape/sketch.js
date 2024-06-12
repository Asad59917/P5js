function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);
  // rectangle
  fill(0,180,10)
  strokeWeight(5)
  stroke(120,0,0)
  rect(150, 100,100, 200);
  
  //circle
  fill(0,0,100)
  strokeWeight(5)
  stroke(0,0,180)
  circle(200,200,130);
  
  //triangle
  fill(120,0,0)
  strokeWeight(5)
  stroke(0,0,0)
  triangle(100,250,200,120,300,250);
}


