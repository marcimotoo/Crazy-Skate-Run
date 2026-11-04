class World {
  charackter = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud(), new Cloud(), new Cloud()];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.clouds.forEach((cloud) => {
      this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
    });

    this.ctx.drawImage(this.charackter.img, this.charackter.x, this.charackter.y, this.charackter.width, this.charackter.height);
    this.enemies.forEach((enemy) => {
      this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
    });

    const self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  moveRight() {}

  jump() {}
}
