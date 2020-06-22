let scenarioImage;
let characterImage;
let scenario;
let soundTrack;
let character;

function preload() {
  scenarioImage = loadImage("assets/images/scenario/forest.png");
  characterImage = loadImage("assets/images/character/hipsta.png");
  soundTrack = loadSound("assets/sounds/sound_track.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  character = new Character(characterImage);
  soundTrack.loop();
}

function draw() {
  scenario.show();
  scenario.move();
  character.show();
}
