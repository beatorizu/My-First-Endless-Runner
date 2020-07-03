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
    virtualCanvas.image(homeImage, 0, 0, width, height);
  }

  _showText() {
    virtualCanvas.textFont(erinFont);
    virtualCanvas.textAlign(CENTER)
    virtualCanvas.textSize(50);
    virtualCanvas.text('As aventuras de', width / 2, height / 3);
    virtualCanvas.textSize(150);
    virtualCanvas.text('Erin', width / 2, height / 5 * 3)
  }

  _showButtom() {
    buttomManager.y = height / 7 * 5;
    buttomManager.draw();
  }
}
