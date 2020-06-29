class Score {
  constructor() {
    this.points = 0;
  }

  show() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(30);
    text(parseInt(this.points), width - 30, 50);
  }

  addPoint(points=0.2) {
    this.points += points;
  }
}
