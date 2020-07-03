class Score {
  constructor() {
    this.points = 0;
  }

  show() {
    virtualCanvas.textAlign(RIGHT);
    virtualCanvas.fill('#fff');
    virtualCanvas.textSize(30);
    virtualCanvas.text(parseInt(this.points), width - 30, 50);
  }

  addPoint(points=0.2) {
    this.points += points;
  }
}
