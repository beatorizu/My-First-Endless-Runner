class Home {
  constructor() {

  }

  keyPressed(key) {
    if (key === ' ') {
      buttomManager._changeScene();
    }
  }

  draw() {
    this._showBackground();
    this._showText();
    this._showButtom();
  }

  _showBackground() {
    image(homeImage, 0, 0, width, height);
  }

  _showText() {
    textFont(erinFont);
    textAlign(CENTER)
    textSize(50);
    text('As aventuras de', width / 2, height / 3);
    textSize(150);
    text('Erin', width / 2, height / 5 * 3)
  }

  _showButtom() {
    buttomManager.y = height / 7 * 5;
    buttomManager.draw();
  }
}
