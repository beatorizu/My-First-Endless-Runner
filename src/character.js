class Character {
  constructor(image) {
    this.image = image;
  }

  show() {
    image(this.image, 0, height - 135, 110, 135, 0, 0, 220, 270)
  }
}
