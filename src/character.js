class Character {
  constructor(image) {
    this.image = image;
    this.framesCoordinates = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ];
    this.currentFrame = 0;
  }

  show() {
    const [currentFrameX, currentFrameY] = this.framesCoordinates[this.currentFrame];
    image(this.image, 0, height - CHARACTER_HEIGHT / 2, CHARACTER_WIDTH / 2, CHARACTER_HEIGHT / 2, currentFrameX, currentFrameY, CHARACTER_WIDTH, CHARACTER_HEIGHT);
    this.walk();
  }

  walk() {
    this.currentFrame++;
    if (this.currentFrame >= this.framesCoordinates.length - 1) {
      this.currentFrame = 0;
    }
  }
}
