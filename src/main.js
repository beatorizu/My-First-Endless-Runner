let scenarioImage;
let heroImage;
let scenario;
let gameOverImage;
let soundTrack;
let gameOverSoundTrack;
let hero;
let enemyGotinha;
let enemyGotinhaImage;
let enemyGotinhaVoadora;
let enemyGotinhaVoadoraImage;
let enemyTroll;
let enemyTrollImage;
let jumpSoundTrack;
const enemies = [];

function preload() {
  scenarioImage = loadImage(SCENARIO_IMAGE_PATH);
  gameOverImage = loadImage(GAME_OVER_IMAGE_PATH);
  heroImage = loadImage(HERO_IMAGE_PATH);
  soundTrack = loadSound(SOUND_TRACK_PATH);
  enemyGotinhaImage = loadImage(ENEMY_GOTINHA_IMAGE_PATH);
  enemyGotinhaVoadoraImage = loadImage(ENEMY_GOTINHA_VOADORA_IMAGE_PATH);
  enemyTrollImage = loadImage(ENEMY_TROLL_IMAGE_PATH);
  gameOverSoundTrack = loadSound(GAME_OVER_SOUND_TRACK_PATH);
  jumpSoundTrack = loadSound(JUMP_SOUND_TRACK_PATH);
  jumpSoundTrack.setVolume(.4);
}

function setup() {
  createCanvas(windowWidth, 600);
  scenario = new Scenario(scenarioImage, 3);
  hero = new Hero(heroImage, 0, Y_GROUND_LEVEL, HERO_WIDTH_IN_SCREEN, HERO_HEIGHT_IN_SCREEN, HERO_SPRITE_WIDTH, HERO_SPRITE_HEIGHT);
  enemyGotinha = new Enemy(enemyGotinhaImage, width - ENEMY_GOTINHA_WIDTH_IN_SCREEN, Y_GROUND_LEVEL, ENEMY_GOTINHA_WIDTH_IN_SCREEN, ENEMY_GOTINHA_HEIGHT_IN_SCREEN, ENEMY_GOTINHA_SPRITE_WIDTH, ENEMY_GOTINHA_SPRITE_HEIGHT, ENEMY_GOTINHA_SPEED);
  enemyGotinhaVoadora = new Enemy(enemyGotinhaVoadoraImage, width - ENEMY_GOTINHA_VOADORA_WIDTH_IN_SCREEN, Y_AIR_LEVEL, ENEMY_GOTINHA_VOADORA_WIDTH_IN_SCREEN, ENEMY_GOTINHA_VOADORA_HEIGHT_IN_SCREEN, ENEMY_GOTINHA_VOADORA_SPRITE_WIDTH, ENEMY_GOTINHA_VOADORA_SPRITE_HEIGHT, ENEMY_GOTINHA_VOADORA_SPEED, ENEMY_GOTINHA_VOADORA_TOTAL_OF_SPRITES);
  enemyTroll = new Enemy(enemyTrollImage, width - ENEMY_TROLL_WIDTH_IN_SCREEN, 0, ENEMY_TROLL_WIDTH_IN_SCREEN, ENEMY_TROLL_HEIGHT_IN_SCREEN, ENEMY_TROLL_SPRITE_WIDTH, ENEMY_TROLL_SPRITE_HEIGHT, ENEMY_TROLL_SPEED, ENEMY_TROLL_TOTAL_OF_SPRITES);
  enemies.push(enemyGotinha, enemyGotinhaVoadora, enemyTroll);
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
  image(gameOverImage, width / 2 - 200, height / 2);
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
