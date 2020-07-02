class Enemy extends Character {
  constructor(image, x, yLevel, widthInScreen, heightInScreen, widthSprite, heightSprite, speed, totalOfSprites) {
    super(image, x, yLevel, widthInScreen, heightInScreen, widthSprite, heightSprite, totalOfSprites)
    this.speed = speed;
  }

  move() {
    this.x -= this.speed;
    if (this.x <= -this.width) {
      setTimeout(() => {
        this.x = width
      }, 1000);
    }
  }
}
