let scenario;

function preload() {
  scenario = loadImage("assets/images/scenario/forest.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(scenario);
}
