
//ATTENTION: NOT MADE BY ME. SKETCH ACQUIRED FROM: https://p5js.org/examples/3d-sine-cosine-in-3d.html
//HAD TO CHANGE A FEW THINGS TO MAKE IT WORKING BUT IT WAS NOT MY CREATION

var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

}

function draw() {
    background(255,255,255);
    rotateY(frameCount * 0.01);

    for (let j = 0; j < 5; j++) {
        push();
        for (let i = 0; i < 80; i++) {
            translate(
                sin(frameCount * 0.001 + j) * 100,
                sin(frameCount * 0.001 + j) * 100,
                i * 0.1
            );
            rotateZ(frameCount * 0.0001);
            push();
            fill(0, 255, 0);
            sphere(8, 6, 4);
            pop();
        }
        pop();
    }
}