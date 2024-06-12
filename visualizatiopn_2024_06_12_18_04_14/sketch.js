let table;
let colors = [];

function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  noLoop();


  for (let i = 0; i < table.getRowCount(); i++) {
    let row = table.getRow(i);
    let colorData = {
      Name: row.get('Name'),
      HEX: row.get('HEX'),
      RGB: row.get('RGB')
    };
    colors.push(colorData);
  }
}

function draw() {
  background(43, 53, 63);
  translate(width / 2, height / 2);
  let angleSeparation = 360 / colors.length;

  for (let i = 0; i < colors.length; i++) {
    let angle = i * angleSeparation;
    let nextAngle = angle + angleSeparation;
    let color = colors[i];
    
 
    fill(color.HEX);
    stroke(255);
    strokeWeight(2);
    arc(0, 0, 600, 600, angle, nextAngle, PIE);

    let labelAngle = angle + angleSeparation / 2;
    let x = cos(labelAngle) * 300;
    let y = sin(labelAngle) * 300;
    fill(255);
    noStroke();
    text(color.Name, x, y);
  }
}
