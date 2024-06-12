let trail = [];
let maxTrailSize = 100;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(0, 50); 

    let trailSize = 20;

    trail.push({ x: mouseX, y: mouseY, size: random(10, 30), color: color(random(255), random(255), random(255)) });




    for (let i = 0; i < trail.length; i++) {
        let pos = trail[i];
        let alpha = map(i, 0, trail.length, 0, 255);
        fill(pos.color.levels[0], pos.color.levels[1], pos.color.levels[2], alpha);
        ellipse(pos.x, pos.y, pos.size, pos.size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
