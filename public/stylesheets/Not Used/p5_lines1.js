
let a;
let b;
var canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    stroke(0, 255, 0);
    a = height;
    b = height/2;
}

function draw() {
    background(0);
    line(0, a, width, a);
    line(0, b, width, b);
    a = a - 0.5;
    b = b - 0.5;

    if (a < 0) {
        a = height;
    }
    if (b < 0) {
        b = height;
    }

}

