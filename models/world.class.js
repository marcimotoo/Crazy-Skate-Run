class World {
  character = new Character('./assets/img/charaktere/skater-hocken.png');
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollision();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);

    this.addToMap(this.character);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);

    this.ctx.translate(-this.camera_x, 0);

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
    this.flipImage(mo);

    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    this.flipImageBack(mo);
  }

  flipImage(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
  }
  flipImageBack(mo) {
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }

  checkCollision() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          console.log('collision with character', enemy);
        }
      });
    }, 1000);
  }

  //   if (character.x + character.width > chicken.x &&
  // character.y + character.height > chicken.y &&
  // character.x < chicken.x &&
  // character.y < chicken.y + chicken.height

  // )
}
