let plane;
let pipes = [];
let planeIcon;
let pipeTopImage;
let pipeBottomImage;
let backgroundImage;
let mic;
let micLevel = 0;

function preload() {
  planeIcon = loadImage('plane.png');
  pipeTopImage = loadImage('tower2.png');
  pipeBottomImage = loadImage('tower.png');
  backgroundImage = loadImage('gamebg1.jpg'); 
}

function setup() {
  createCanvas(600, 600);
  plane = new Plane(planeIcon);
  

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(backgroundImage); 
  

  micLevel = mic.getLevel();


  let liftAmount = map(micLevel, 0, 0.2, 0, -12);


  plane.up(liftAmount);

 
  if (frameCount % 100 === 0) {
    pipes.push(new Pipe());
  }


  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();
    pipes[i].show();


    if (pipes[i].hits(plane)) {
      console.log("Game over!");
      noLoop();
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }


  plane.show();
  plane.update();
}

class Plane {
  constructor(icon) {
    this.y = height / 2;
    this.x = 100;
    this.gravity = 0.4;
    this.lift = 0;
    this.velocity = 0;
    this.icon = icon;
    this.width = 50;
    this.height = 40;
  }

  show() {
    image(this.icon, this.x, this.y, this.width, this.height);
  }

  up(amount) {

    this.velocity += amount;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    // Keep the plane within the canvas
    if (this.y > height - this.height) {
      this.y = height - this.height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

class Pipe {
  constructor() {
    this.spacing = 150;
    this.top = random(height / 2);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 50;
    this.speed = 2;
    this.highlight = false;
  }

  show() {
    if (this.highlight) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    image(pipeTopImage, this.x, 0, this.w, this.top); // Top pipe
    image(pipeBottomImage, this.x, height - this.bottom, this.w, this.bottom); // Bottom pipe
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    return this.x < -this.w;
  }

  hits(plane) {
    if (plane.y < this.top || plane.y > height - this.bottom) {
      if (plane.x > this.x && plane.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }
}
