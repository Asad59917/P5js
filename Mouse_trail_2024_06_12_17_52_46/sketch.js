function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#fff');
}
function draw(){
  rectMode(CENTER);
  fill("beige")
  rect(mouseX - 75, mouseY - 25, 50, 50);
  
  fill("brown");
  ellipse(mouseX - 75, mouseY - 25, 50, 50)

  fill("lightblue")
  rect(mouseX - 25, mouseY - 25, 50, 50);
  
  fill("yellow");
  ellipse(mouseX - 25, mouseY - 25, 50, 50)
}