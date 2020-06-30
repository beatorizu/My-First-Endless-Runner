class ButtomManager {
	constructor(text, x, y) {
		this.text = text;
		this.x = x;
		this.y = y;
		this.buttom = createButton(this.text)
		this.buttom.mousePressed(() => this._changeScene())
    this.buttom.addClass('buttom-start-game');
	}

	draw() {
		this.buttom.position(this.x, this.y);
		this.buttom.center('horizontal');
	}

	_changeScene() {
		this.buttom.remove();
		currentScene = 'game';
	}
}
