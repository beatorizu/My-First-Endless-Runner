class Life {
  constructor(total, initial) {
    this.total = total;
    this.initial = initial;
    this.lifes = this.initial;
    this.width = 25;
    this.height = 25;
    this.initialX = 20;
    this.y = 20;
  }

  show() {
    for (let i = 0; i < this.lifes; i++) {
      const margin = i * 10;
      const position = this.initialX * (1 + i);
      virtualCanvas.image(heartImage, position + margin, this.y, this.width, this.height);
    }
  }

  giveExtraLife() {
    if (this.lifes < this.total) {
      this.lifes++;
    }
  }

  loseLife() {
    this.lifes--;
  }
}
