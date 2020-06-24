class Enemy extends Character {
  constructor(framesCoordinates, image, x, widthInScreen, heightInScreen, widthSprite, heightSprite, speed) {
    super(framesCoordinates, image, x, widthInScreen, heightInScreen, widthSprite, heightSprite)
    this.speed = speed;
  }

  move() {
    this.x -= this.speed;
    if (this.x <= -this.width) {
      this.x = width
    }
  }
}
