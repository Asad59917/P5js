var img;
function preload(){
img = loadImage("scene.jpg");
  
}




function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  image(img,0,0, img.width/1, img.height/1);
  
  var Tree = map(mouseX,0, width, 2, 20);
  
  filter(POSTERIZE,Tree);
  
}