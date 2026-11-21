class World {
  bossLife = new StatusBar();
  balanceLife = new StatusBar();
  character = new Character();
  throwableObject = [];
  level = level1;

  inventory = {
    coins: 0,
    energyCans: 0,
  };

  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  hasThrown = false;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.drawWorld();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  drawWorld() {
    this.collectItem(this.level.coins, 'coins');
    this.collectItem(this.level.energyCans, 'energyCans');

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.level.backgroundObjects.forEach((object) => {
      // Gleicht einen Teil der Kameraverschiebung aus: 1 = volle Bewegung, 0 = Stillstand.
      const offset = -this.camera_x * (1 - object.parallax);
      this.ctx.translate(offset, 0);
      this.addToMap(object);
      // Nur dieses Hintergrundobjekt soll den Ausgleich erhalten.
      this.ctx.translate(-offset, 0);
    });

    this.addItem();
    this.addCharcters();

    this.ctx.translate(-this.camera_x, 0);
    this.balanceLife.draw(this.ctx);

    const self = this;
    requestAnimationFrame(function () {
      self.drawWorld();
    });
  }

  addItem() {
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.energyCans);
    this.addObjectsToMap(this.throwableObject);
  }

  addCharcters() {
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endboss);
  }

  collectItem(mO, itemType) {
    for (let index = mO.length - 1; index >= 0; index--) {
      const item = mO[index];
      if (this.character.isColliding(item)) {
        mO.splice(index, 1);
        this.inventory[itemType]++;
      }
    }
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
    mo.drawHitboxFrame(this.ctx);
  }

  addSheetToMap(mo) {
    mo.sheetDraw(this.ctx);
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

  run() {
    const enemys = [this.level.enemies, this.level.endboss];

    this.throwBottle();

    enemys.forEach((enemy) => {
      this.checkCollisions(enemy);
      this.checkCollisionsThrowObjects(enemy);
      this.followCharakter(enemy);
    });
  }

  throwBottle() {
    setInterval(() => {
      if (this.keyboard.THROW && !this.hasThrown && this.inventory.energyCans > 0) {
        let bottle = new ThrowableObject(this.character.x, this.character.y, this.character.otherDirection);
        this.throwableObject.push(bottle);
        this.inventory.energyCans--;
        this.hasThrown = true;
      }
      if (!this.keyboard.THROW) {
        this.hasThrown = false;
      }
    }, 1000 / 15);
  }

  checkCollisions(enemyArray) {
    enemyArray.forEach((enemy) => {
      setInterval(() => {
        if (!enemy.isDead()) {
          if (this.character.isColliding(enemy) && !this.character.isHurt()) {
            this.character.hit();
            this.balanceLife.setPercentage(this.character.health);
          }
        }
      }, 100);
    });
  }

  checkCollisionsThrowObjects(enemie) {
    setInterval(() => {
      this.throwableObject.forEach((bottle) => {
        enemie.forEach((enemy) => {
          if (!enemy.isDead()) {
            if (bottle.isColliding(enemy)) {
              enemy.hit();
              this.throwableObject.splice(0);
            }
          }
        });
      });
    }, 100);
  }

  followCharakter(enemyArray) {
    enemyArray.forEach((enemy) => {
      setInterval(() => {
        if (!enemy.isDead()) {
          if (this.character.x > enemy.x) {
            enemy.moveRight();
            enemy.otherDirection = true;
          } else {
            enemy.moveLeft();
            enemy.otherDirection = false;
          }
        }
      }, 1000 / 15);
    });
  }
}
