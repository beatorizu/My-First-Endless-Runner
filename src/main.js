function preload() {
  gameOverImage = loadImage(GAME_OVER_IMAGE_PATH);
  heroImage = loadImage(HERO_IMAGE_PATH);
  soundTrack = loadSound(SOUND_TRACK_PATH);
  enemyGotinhaImage = loadImage(ENEMY_GOTINHA_IMAGE_PATH);
  enemyGotinhaVoadoraImage = loadImage(ENEMY_GOTINHA_VOADORA_IMAGE_PATH);
  enemyTrollImage = loadImage(ENEMY_TROLL_IMAGE_PATH);
  gameOverSoundTrack = loadSound(GAME_OVER_SOUND_TRACK_PATH);
  jumpSoundTrack = loadSound(JUMP_SOUND_TRACK_PATH);
  jumpSoundTrack.setVolume(.4);
  SCENARIO_ELEMENTS.forEach(element => {
    const { path } = element;
    element.image = loadImage(path);
  });
}

function setup() {
  createCanvas(windowWidth, 600);
  frameRate(40);
  game = new Game();
  game.setup();
}

function keyPressed() {
  game.keyPressed(key);
}

function touchStarted() {
  game.touchStarted();
}

function draw() {
  game.draw();
}
