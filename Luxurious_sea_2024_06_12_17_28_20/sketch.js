function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // hose body
  fill(255, 0, 0);
  rect(100, 200, 200, 150);

  // hose roof
  fill(100, 100, 100); 
  triangle(100, 200, 300, 200, 200, 100); 

  // house door
  fill(0, 0, 255);
  rect(180, 250, 40, 100); 

  // House windows
  fill(255); 
  rect(120, 220, 40, 40); 
  rect(240, 220, 40, 40); 
}
