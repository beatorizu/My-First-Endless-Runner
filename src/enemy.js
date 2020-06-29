class Enemy extends Character {
  constructor(image, x, yLevel, hasPower, widthInScreen, heightInScreen, widthSprite, heightSprite, speed, totalOfSprites) {
    super(image, x, yLevel, widthInScreen, heightInScreen, widthSprite, heightSprite, totalOfSprites)
    this.speed = speed;
    this.hasPower = hasPower;
  }

  move(enemy) {
    if (this.hasPower) {
      this.x -= this.speed;
      if (this.x <= -this.width) {
        this.x = width
        this.hasPower = false
        enemy.hasPower = true
      }
    }
  }
}
