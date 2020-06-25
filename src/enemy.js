class Enemy extends Character {
  constructor(image, x, widthInScreen, heightInScreen, widthSprite, heightSprite, speed, totalOfSprites) {
    super(image, x, widthInScreen, heightInScreen, widthSprite, heightSprite, totalOfSprites)
    this.speed = speed;
  }

  move() {
    this.x -= this.speed;
    if (this.x <= -this.width) {
      this.x = width
    }
  }
}
