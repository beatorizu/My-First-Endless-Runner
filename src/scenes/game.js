class Game {
  constructor(cartucho) {
    this.currentIndex = 0;
    ({ map: this.map, settings: this.settings } = cartucho);
    this.map = cartucho.map;
  }

  setup() {
    SCENARIO_ELEMENTS.forEach(element => {
      const { image, speed } = element;
      element.scenario = new Scenario(image, speed);
    });
    hero = new Hero(heroImage, 0, Y_GROUND_LEVEL, HERO_WIDTH_IN_SCREEN, HERO_HEIGHT_IN_SCREEN, HERO_SPRITE_WIDTH, HERO_SPRITE_HEIGHT);
    enemyGotinha = new Enemy(enemyGotinhaImage, width, Y_GROUND_LEVEL, ENEMY_GOTINHA_WIDTH_IN_SCREEN, ENEMY_GOTINHA_HEIGHT_IN_SCREEN, ENEMY_GOTINHA_SPRITE_WIDTH, ENEMY_GOTINHA_SPRITE_HEIGHT, ENEMY_GOTINHA_SPEED, 0);
    enemyGotinhaVoadora = new Enemy(enemyGotinhaVoadoraImage, width, Y_AIR_LEVEL, ENEMY_GOTINHA_VOADORA_WIDTH_IN_SCREEN, ENEMY_GOTINHA_VOADORA_HEIGHT_IN_SCREEN, ENEMY_GOTINHA_VOADORA_SPRITE_WIDTH, ENEMY_GOTINHA_VOADORA_SPRITE_HEIGHT, ENEMY_GOTINHA_VOADORA_SPEED, ENEMY_GOTINHA_VOADORA_TOTAL_OF_SPRITES);
    enemyTroll = new Enemy(enemyTrollImage, width, 50, ENEMY_TROLL_WIDTH_IN_SCREEN, ENEMY_TROLL_HEIGHT_IN_SCREEN, ENEMY_TROLL_SPRITE_WIDTH, ENEMY_TROLL_SPRITE_HEIGHT, ENEMY_TROLL_SPEED, ENEMY_TROLL_TOTAL_OF_SPRITES);
    enemies.push(enemyGotinha, enemyGotinhaVoadora, enemyTroll);
    soundTrack.loop();
    score = new Score();
    const { maxLifes, initialLifes } = this.settings;
    life = new Life(maxLifes, initialLifes);
  }

  gameOver() {
    noLoop();
    soundTrack.stop();
    image(gameOverImage, width / 2 - 200, height / 2);
    gameOverSoundTrack.play();
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      hero.jump();
      jumpSoundTrack.play();
    }
  }

  touchStarted() {
    hero.jump();
    jumpSoundTrack.play();
  }

  draw() {
    const currentRow = this.map[this.currentIndex]
    const currentEnemy = enemies[currentRow.enemy];
    const enemyIsInvisible = currentEnemy.x < -currentEnemy.width;
    SCENARIO_ELEMENTS.forEach(element => {
      const { scenario } = element;
      scenario.show();
      scenario.move();
    });
    life.show();
    score.show();
    score.addPoint();
    hero.show();
    hero.pullByTheGravity();
    currentEnemy.speed = currentRow.speed;
    currentEnemy.show();
    currentEnemy.move();
    if (enemyIsInvisible) {
      this.currentIndex++;
      currentEnemy.appear();
      if(this.currentIndex > enemies.length - 1) {
        this.currentIndex = 0;
      }
    }
    if (hero.isColliding(currentEnemy)) {
      life.loseLife();
      hero.becomeInvincible();
      if (life.lifes === 0) {
        this.gameOver();
      }
    }
  }
}
