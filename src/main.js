let scenarioImage;
let characterImage;
let scenario;
let soundTrack;
let character;

function preload() {
  scenarioImage = loadImage(SCENARIO_IMAGE_PATH);
  characterImage = loadImage(CHARACTER_IMAGE_PATH);
  soundTrack = loadSound(SOUND_TRACK_PATH);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  character = new Character(characterImage);
  soundTrack.loop();
  frameRate(40);
}

function draw() {
  scenario.show();
  scenario.move();
  character.show();
}
