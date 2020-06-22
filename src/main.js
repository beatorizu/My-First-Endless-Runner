let scenarioImage;
let character;
let scenario;
let soundTrack;

function preload() {
  scenarioImage = loadImage("assets/images/scenario/forest.png");
  character = loadImage("assets/images/character/hipsta.png");
  soundTrack = loadSound("assets/sounds/sound_track.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  soundTrack.loop();
}

function draw() {
  scenario.show();
  scenario.move();
  image(character, 0, height - 135, 110, 135, 0, 0, 220, 270);
}
