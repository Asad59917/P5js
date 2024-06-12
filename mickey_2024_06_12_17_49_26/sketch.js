function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let d = dist(mouseX, mouseY, width/2, height/2);
  
  // head
  fill(255);
  ellipse(width/2, height/2, 200, 200);
  
  // ears
  fill(0);
  ellipse(width/2 - 50, height/2 - 50, 80 + d/10, 80 + d/10);
  ellipse(width/2 + 50, height/2 - 50, 80 + d/10, 80 + d/10);
  
  // eyes
  fill(255);
  ellipse(width/2 - 30, height/2 - 20, 40, 40);
  ellipse(width/2 + 30, height/2 - 20, 40, 40);
  
  // Pupils
  fill(0);
  ellipse(width/2 - 30 + map(mouseX, 0, width, -5, 5), height/2 - 20 + map(mouseY, 0, height, -5, 5), 20, 20);
  ellipse(width/2 + 30 + map(mouseX, 0, width, -5, 5), height/2 - 20 + map(mouseY, 0, height, -5, 5), 20, 20);
  
  //  nose
  fill(255, 90, 90);
  ellipse(width/2, height/2 + 10, 20 + d/20, 20 + d/20);
  
  //mouth
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(width/2, height/2 + 30, 80, 50, 0, PI);
}
