class World {
  charackter = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.charackter.img, this.charackter.x, this.charackter.y, this.charackter.width, this.charackter.height);

    const self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  moveRight() {}

  jump() {}
}
