let scenarioImage;
let heroImage;
let scenario;
let soundTrack;
let hero;

function preload() {
  scenarioImage = loadImage(SCENARIO_IMAGE_PATH);
  heroImage = loadImage(HERO_IMAGE_PATH);
  soundTrack = loadSound(SOUND_TRACK_PATH);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  hero = new Hero(HERO_FRAMES_COORDINATES, heroImage, 0, HERO_WIDTH_IN_SCREEN, HERO_HEIGHT_IN_SCREEN, HERO_SPRITE_WIDTH, HERO_SPRITE_HEIGHT);
  soundTrack.loop();
  frameRate(40);
}

function draw() {
  scenario.show();
  scenario.move();
  hero.show();
}
