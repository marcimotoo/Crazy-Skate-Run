class World {
  charackter = new Character('./assets/img/charaktere/skater-hocken.png');
  enemies = [new Pylon(), new Pylon(), new Pylon()];
  clouds = [new Cloud(), new Cloud(), new Cloud()];
  backgroundObjects = [
    new BackgroundObject('./assets/img/hintergruende/himmel.png', 0, 1440, 480),
    new BackgroundObject('./assets/img/hintergruende/skyline-transparent.png', 0, 1440, 480),
    new BackgroundObject('./assets/img/hintergruende/haeuser-vorne.png', 0, 1440, 700),
    new BackgroundObject('./assets/img/hintergruende/strasse-breit.png', 0, 1440, 120),
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.clouds);
    this.addToMap(this.charackter);
    this.addObjectsToMap(this.enemies);

    const self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(parameter) {
    parameter.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }

  moveRight() {}
  moveLeft() {}

  jump() {}
}
