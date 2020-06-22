let scenario;
let character;

function preload() {
  scenario = loadImage("assets/images/scenario/forest.png");
  character = loadImage("assets/images/character/hipsta.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(scenario);
  image(character, 0, height - 135, 110, 135, 0, 0, 220, 270);
}
