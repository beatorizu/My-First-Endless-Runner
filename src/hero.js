class Hero extends Character {
  constructor(image, x, yLevel, widthInScreen, heightInScreen, widthSprite, heightSprite, totalOfSprites) {
    super(image, x, yLevel, widthInScreen, heightInScreen, widthSprite, heightSprite, totalOfSprites)

    this.groundLevel = height - this.height - yLevel;
    this.y = this.groundLevel;
    this.gravityForce = 3;
    this.jumpSpeed = 0;
    this.jumpLimit = 2;
    this.jumps = 0;
    this.isInvincible = false;
  }

  jump() {
    if (this.jumps < this.jumpLimit) {
      this.jumpSpeed = -30;
      this.jumps += 1;
    }
  }

  pullByTheGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravityForce;

    if (this.y > this.groundLevel) {
      this.y = this.groundLevel;
      this.jumps = 0;
    }
  }

  isColliding(enemy) {
    if (this.isInvincible) {
      return false;
    }
    return collideRectRect(
      this.x, this.y, this.width * HITBOX_PRECISION, this.height * HITBOX_PRECISION,
      enemy.x, enemy.y, enemy.width * HITBOX_PRECISION, enemy.height * HITBOX_PRECISION
    )
  }

  becomeInvincible() {
    this.isInvincible = true;
    setTimeout(() => {
      this.isInvincible = false;
    }, 1000);
  }

}
