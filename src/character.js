class Character {
  constructor(image, x, widthInScreen, heightInScreen, widthSprite, heightSprite, totalOfSprites = 0) {
    this.image = image;
    this.width = widthInScreen;
    this.height = heightInScreen;
    this.x = x;
    this.y = height - this.height;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;
    this.currentFrame = 0;
    this.totalOfSprites = totalOfSprites;
    this.calculateFramesCoordinates();
  }

  show() {
    const [currentFrameX, currentFrameY] = this.framesCoordinates[this.currentFrame];
    image(this.image, this.x, this.y, this.width, this.height, currentFrameX, currentFrameY, this.widthSprite, this.heightSprite);
    this.animate();
  }

  animate() {
    this.currentFrame++;
    if (this.currentFrame >= this.framesCoordinates.length - 1) {
      this.currentFrame = 0;
    }
  }

  calculateFramesCoordinates() {
    const columns = [...sequenceGenerator(0, this.image.width, this.widthSprite)]
    const rows = [...sequenceGenerator(0, this.image.height, this.heightSprite)]
    const framesCoordinates = rows.map(row => columns.map(column => [column, row])).flat()
    this.framesCoordinates = this.totalOfSprites === 0 ? framesCoordinates : framesCoordinates.slice(0, this.totalOfSprites)
  }
}
