class Character {
  constructor(framesCoordinates, image, x, widthInScreen, heightInScreen, widthSprite, heightSprite) {
    this.framesCoordinates = framesCoordinates;
    this.image = image;
    this.width = widthInScreen;
    this.height = heightInScreen;
    this.x = x;
    this.y = height - this.height;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;
    this.currentFrame = 0;
  }

  show() {
    const [currentFrameX, currentFrameY] = this.framesCoordinates[this.currentFrame];
    image(this.image, this.x, this.y, this.width, this.height, currentFrameX, currentFrameY, this.widthSprite, this.heightSprite);
    this.walk();
  }

  walk() {
    this.currentFrame++;
    if (this.currentFrame >= this.framesCoordinates.length - 1) {
      this.currentFrame = 0;
    }
  }
}
