let scenarioImage;
let heroImage;
let scenario;
let soundTrack;
let gameOverSoundTrack;
let hero;
let enemyGotinha;
let enemyGotinhaImage;
let enemyGotinhaVoadora;
let enemyGotinhaVoadoraImage;
let jumpSoundTrack;
const enemies = [];

function preload() {
  scenarioImage = loadImage(SCENARIO_IMAGE_PATH);
  heroImage = loadImage(HERO_IMAGE_PATH);
  soundTrack = loadSound(SOUND_TRACK_PATH);
  enemyGotinhaImage = loadImage(ENEMY_GOTINHA_IMAGE_PATH);
  enemyGotinhaVoadoraImage = loadImage(ENEMY_GOTINHA_VOADORA_IMAGE_PATH);
  gameOverSoundTrack = loadSound(GAME_OVER_SOUND_TRACK_PATH);
  jumpSoundTrack = loadSound(JUMP_SOUND_TRACK_PATH);
  jumpSoundTrack.setVolume(.4);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  hero = new Hero(heroImage, 0, HERO_WIDTH_IN_SCREEN, HERO_HEIGHT_IN_SCREEN, HERO_SPRITE_WIDTH, HERO_SPRITE_HEIGHT);
  enemyGotinha = new Enemy(enemyGotinhaImage, width - ENEMY_GOTINHA_WIDTH_IN_SCREEN, ENEMY_GOTINHA_WIDTH_IN_SCREEN, ENEMY_GOTINHA_HEIGHT_IN_SCREEN, ENEMY_GOTINHA_SPRITE_WIDTH, ENEMY_GOTINHA_SPRITE_HEIGHT, ENEMY_GOTINHA_SPEED);
  enemyGotinhaVoadora = new Enemy(enemyGotinhaVoadoraImage, width - ENEMY_GOTINHA_VOADORA_WIDTH_IN_SCREEN, ENEMY_GOTINHA_VOADORA_WIDTH_IN_SCREEN, ENEMY_GOTINHA_VOADORA_HEIGHT_IN_SCREEN, ENEMY_GOTINHA_VOADORA_SPRITE_WIDTH, ENEMY_GOTINHA_VOADORA_SPRITE_HEIGHT, ENEMY_GOTINHA_VOADORA_SPEED, ENEMY_GOTINHA_VOADORA_TOTAL_OF_SPRITES);
  enemies.push(enemyGotinha, enemyGotinhaVoadora);
  soundTrack.loop();
  frameRate(40);
}

function keyPressed() {
  if (key === 'ArrowUp') {
    hero.jump();
    jumpSoundTrack.play();
  }
}

function touchStarted() {
  hero.jump();
  jumpSoundTrack.play();
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
  enemies.forEach(enemy => {
    enemy.show();
    enemy.move();
    if (hero.isColliding(enemy)) {
      gameOver();
    }
  });
}
