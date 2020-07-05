function preload() {
  cartucho = loadJSON('cartucho/cartucho.json', cartucho => {
    const { scenario, enemies } = cartucho.map;
    scenario.forEach(element => {
      const { path } = element;
      element.image = loadImage(path);
    });
    enemies.forEach(enemy => {
      const { sprite } = enemy;
      enemy.image = loadImage(sprite.path);
    });
  });
  homeImage = loadImage(HOME_SCREEN_IMAGE_PATH);
  erinFont = loadFont(ERIN_FONT_PATH);
  gameOverImage = loadImage(GAME_OVER_IMAGE_PATH);
  heroImage = loadImage(HERO_IMAGE_PATH);
  soundTrack = loadSound(SOUND_TRACK_PATH);
  gameOverSoundTrack = loadSound(GAME_OVER_SOUND_TRACK_PATH);
  jumpSoundTrack = loadSound(JUMP_SOUND_TRACK_PATH);
  jumpSoundTrack.setVolume(.4);
  heartImage = loadImage(HEART_IMAGE_PATH);
}

function setup() {
  createCanvas(windowWidth, 600);
  virtualCanvas = createGraphics(windowWidth, 600);
  frameRate(40);
  virtualCanvas.frameRate(40);
  currentScene = 'home'
  buttomManager = new ButtomManager('Iniciar', width / 2, height / 2);
  home = new Home();
  game = new Game(cartucho);
  game.setup();
  scenes = {
    home, game
  }
}

function keyPressed() {
  scenes[currentScene].keyPressed(key);
}

function touchStarted() {
  if (currentScene !== 'home') {
    scenes[currentScene].touchStarted();
  }
}

function draw() {
  scenes[currentScene].draw();
  image(virtualCanvas, 0, 0, windowWidth, 600);
}
