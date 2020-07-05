class Game {
  constructor(cartucho) {
    this.currentIndex = 0;
    ({ map: this.map, settings: this.settings } = cartucho);
    ({ scenario: this.scenario, enemies: this.enemies } = this.map);
  }

  setup() {
    this.scenario.forEach(element => {
      const { image, speed } = element;
      element.scenario = new Scenario(image, speed);
    });
    this.enemies.forEach(element => {
      const { image, sprite, speed, yLevel } = element;
      enemies.push(new Enemy(
        image, width, yLevel,
        sprite.widthInScreen,
        sprite.heightInScreen,
        sprite.spriteWidth,
        sprite.spriteHeight, speed, sprite.totalOfSprites
      ));
    });
    hero = new Hero(heroImage, 0, Y_GROUND_LEVEL, HERO_WIDTH_IN_SCREEN, HERO_HEIGHT_IN_SCREEN, HERO_SPRITE_WIDTH, HERO_SPRITE_HEIGHT);
    soundTrack.loop();
    score = new Score();
    const { maxLifes, initialLifes } = this.settings;
    life = new Life(maxLifes, initialLifes);
  }

  gameOver() {
    noLoop();
    soundTrack.stop();
    virtualCanvas.image(gameOverImage, width / 2 - 200, height / 2);
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
    const currentRow = this.enemies[this.currentIndex]
    const currentEnemy = enemies[currentRow.enemy];
    const enemyIsInvisible = currentEnemy.x < -currentEnemy.width;
    this.scenario.forEach(element => {
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
