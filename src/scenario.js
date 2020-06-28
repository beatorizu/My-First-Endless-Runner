class Scenario {
	constructor(image, speed) {
		this.image = image;
		this.speed = speed;
		this.ratio = height / this.image.height;
		this.newWidth = parseInt(this.ratio * this.image.width);
		this.x1 = 0;
		this.x2 = this.newWidth;
	}

	show() {
		image(this.image, this.x1, 0, this.newWidth, height);
		image(this.image, this.x2, 0, this.newWidth, height);
	}

	move() {
		this.x1 -= this.speed;
		this.x2 -= this.speed;
		if (this.x1 < -this.newWidth) {
			this.x1 = this.newWidth + this.x2;
		}
		if (this.x2 < -this.newWidth) {
      this.x2 = this.newWidth + this.x1;
		}
	}
}
