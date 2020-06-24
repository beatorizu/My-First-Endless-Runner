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

  isColliding(enemy) {
    return collideRectRect(
      this.x, this.y, this.width * HITBOX_PRECISION, this.height * HITBOX_PRECISION,
      enemy.x, enemy.y, enemy.width * HITBOX_PRECISION, enemy.height * HITBOX_PRECISION
    )
  }
}
