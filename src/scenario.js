class Scenario {
  constructor(image, speed) {
    this.image = image;
    this.speed = speed;
  }

  show() {
    image(this.image, -this.speed, 0, width, height);
    image(this.image, width - this.speed, 0, width, height);
  }
}
