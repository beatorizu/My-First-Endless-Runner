let scenarioImage;
let character;
let scenario;

function preload() {
  scenarioImage = loadImage("assets/images/scenario/forest.png");
  character = loadImage("assets/images/character/hipsta.png");
}

function setup() {
  scenario = new Scenario(scenarioImage, 50);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  scenario.show()
  image(character, 0, height - 135, 110, 135, 0, 0, 220, 270);
}
