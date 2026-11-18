class World {
  balanceLife = new StatusBar();
  character = new Character();
  throwableObject = [];
  level = level1;
  coins = [...this.level.coins]; // * NEU: Kopiert die Coin-Liste für diesen Spielstart.
  coinCount = 0;
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
    this.collectCoins(); // * NEU: Sammelt berührte Coins ein, bevor das nächste Bild gezeichnet wird.
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.coins);

    this.addToMap(this.character);
    this.addObjectsToMap(this.throwableObject);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endboss);

    this.ctx.translate(-this.camera_x, 0);
    this.balanceLife.draw(this.ctx);
    const self = this;
    requestAnimationFrame(function () {
      self.drawWorld();
    });
  }

  collectCoins() {
    for (let index = this.coins.length - 1; index >= 0; index--) { // * NEU: Geht rückwärts durch die Liste, damit beim Entfernen kein Coin übersprungen wird.
      const coin = this.coins[index];
      if (this.character.isColliding(coin)) { // * NEU: Prüft, ob sich die Trefferflächen von Figur und Coin überlappen.
        this.coins.splice(index, 1); // * NEU: Entfernt den Coin aus der Liste der noch verfügbaren Coins.
        this.coinCount++;
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
      if (this.keyboard.THROW && !this.hasThrown) {
        let bottle = new ThrowableObject(this.character.x, this.character.y, this.character.otherDirection);
        this.throwableObject.push(bottle);
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
