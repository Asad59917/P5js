var img;
var WIDTH;
var HEIGHT;

function preload() {
  img = loadImage("scene.jpg");

}

function setup() {
  WIDTH = img.width;
  HEIGHT = img.height;
  createCanvas(WIDTH,HEIGHT);
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  for (var i = 0; i < 20; i++){
    var x = floor(random(img.width));
    var y = floor(random(img.height));
    var pix = img.get(x, y);
    fill(pix, 128);
    ellipse(x, y, 10, 10);
  }
}

