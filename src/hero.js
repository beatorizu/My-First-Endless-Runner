class Hero extends Character {
  constructor(framesCoordinates, image, x, widthInScreen, heightInScreen, widthSprite, heightSprite) {
    super(framesCoordinates, image, x, widthInScreen, heightInScreen, widthSprite, heightSprite)
  }

  jump() {
    this.y -= 50;
  }
}
