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
    image(this.image, 0, height - 135, 110, 135, currentFrameX, currentFrameY, 220, 270);
    this.walk();
  }

  walk() {
    this.currentFrame++;
    if (this.currentFrame >= this.framesCoordinates.length - 1) {
      this.currentFrame = 0;
    }
  }
}
