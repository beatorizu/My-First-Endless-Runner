class Scenario {
	constructor(image, speed) {
		this.image = image;
		this.speed = speed;
		this.ratio = height / this.image.height;
		this.newWidth = parseInt(this.ratio * this.image.width);
		this.x1 = 0;
		this.x2 = this.newWidth;
		this.x3 = 2 * this.newWidth;
	}

	show() {
		virtualCanvas.image(this.image, this.x1, 0);
		virtualCanvas.image(this.image, this.x2, 0);
		virtualCanvas.image(this.image, this.x3, 0);
	}

	move() {
		this.x1 -= this.speed;
		this.x2 -= this.speed;
		this.x3 -= this.speed;
		if (this.x1 < -this.newWidth) {
			this.x1 = 2 * this.newWidth + this.x2;
		}
		if (this.x2 < -this.newWidth) {
      this.x2 = 2 * this.newWidth + this.x3;
		}
		if (this.x3 < -this.newWidth) {
      this.x3 = 2 * this.newWidth + this.x1;
		}
	}
}
