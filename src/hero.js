class Hero extends Character {
  constructor(framesCoordinates, image, x, widthInScreen, heightInScreen, widthSprite, heightSprite) {
    super(framesCoordinates, image, x, widthInScreen, heightInScreen, widthSprite, heightSprite)

    this.groundLevel = height - this.height;
    this.y = this.groundLevel;
    this.gravityForce = 3;
    this.jumpSpeed = 0;
  }

  jump() {
    this.jumpSpeed = -30;
  }

  pullByTheGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravityForce;

    if (this.y > this.groundLevel) {
      this.y = this.groundLevel;
    }
  }
}
