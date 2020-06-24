let scenarioImage;
let heroImage;
let scenario;
let soundTrack;
let gameOverSoundTrack;
let hero;
let enemyGotinha;
let enemyGotinhaImage;

function preload() {
  scenarioImage = loadImage(SCENARIO_IMAGE_PATH);
  heroImage = loadImage(HERO_IMAGE_PATH);
  soundTrack = loadSound(SOUND_TRACK_PATH);
  enemyGotinhaImage = loadImage(ENEMY_GOTINHA_IMAGE_PATH);
  gameOverSoundTrack = loadSound(GAME_OVER_SOUND_TRACK_PATH);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  hero = new Hero(HERO_FRAMES_COORDINATES, heroImage, 0, HERO_WIDTH_IN_SCREEN, HERO_HEIGHT_IN_SCREEN, HERO_SPRITE_WIDTH, HERO_SPRITE_HEIGHT);
  enemyGotinha = new Enemy(ENEMY_GOTINHA_FRAMES_COORDINATES, enemyGotinhaImage, width - ENEMY_GOTINHA_WIDTH_IN_SCREEN, ENEMY_GOTINHA_WIDTH_IN_SCREEN, ENEMY_GOTINHA_HEIGHT_IN_SCREEN, ENEMY_GOTINHA_SPRITE_WIDTH, ENEMY_GOTINHA_SPRITE_HEIGHT, ENEMY_GOTINHA_SPEED);
  soundTrack.loop();
  frameRate(40);
}

function keyPressed() {
  if (key === 'ArrowUp') {
    hero.jump();
  }
}

function gameOver() {
  noLoop();
  soundTrack.stop();
  gameOverSoundTrack.play();
}

function draw() {
  scenario.show();
  scenario.move();
  hero.show();
  hero.pullByTheGravity();
  enemyGotinha.show();
  enemyGotinha.move();

  if (hero.isColliding(enemyGotinha)) {
    gameOver();
  }
}
