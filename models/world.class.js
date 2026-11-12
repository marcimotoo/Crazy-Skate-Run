class World {
  balanceLife = new StatusBar();
  character = new Character();
  endboss = new Endboss();
  throwableObject = [];
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  constructor(canvas, keyboard) {
    // Der Zeichenkontext zeichnet auf das Canvas; keyboard speichert die Tasten.
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.drawWorld();
    this.setWorld();
    this.run();
  }

  // Gibt dem Charakter Zugriff auf diese Welt und ihre Tastatur.
  setWorld() {
    this.character.world = this;
  }

  // Zeichnet die ganze Spielwelt und fordert danach das nächste Bild an.
  drawWorld() {
    // Löscht das vorige Bild, bevor die Szene neu gezeichnet wird.
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Verschiebt die Spielwelt passend zur Kamera.
    this.ctx.translate(this.camera_x, 0);

    // Die Reihenfolge bestimmt, welche Objekte über anderen erscheinen.
    this.addObjectsToMap(this.level.backgroundObjects);

    this.addToMap(this.character);
    this.addObjectsToMap(this.throwableObject);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.endboss);

    // Nimmt die Kameraverschiebung für die feste Anzeige zurück.
    this.ctx.translate(-this.camera_x, 0);
    // Die Statusleiste bleibt an ihrer Position auf dem Bildschirm.
    this.balanceLife.draw(this.ctx);
    // Merkt die Welt, damit die Funktion unten auf sie zugreifen kann.
    const self = this;
    // Der Browser ruft die Funktion vor dem nächsten Bild auf.
    requestAnimationFrame(function () {
      self.drawWorld();
    });
  }

  // Geht eine Liste durch und zeichnet jedes Objekt einzeln.
  addObjectsToMap(parameter) {
    parameter.forEach((object) => {
      this.addToMap(object);
    });
  }

  // Zeichnet ein bewegliches Objekt und bei Bedarf seinen Rahmen.
  addToMap(mo) {
    this.flipImage(mo);

    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    this.flipImageBack(mo);
  }

  // Spiegelt das Objekt, wenn es in die andere Richtung schaut.
  flipImage(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
  }
  // Stellt nach dem Zeichnen Position und Zeichenrichtung wieder her.
  flipImageBack(mo) {
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }

  // Prüft jede Sekunde, ob der Charakter einen Gegner berührt.
  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 200);
  }

  checkThrowObjects() {
    if (this.keyboard.THROW) {
      let bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObject.push(bottle);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit(); // Ein Treffer verringert die Energie.
        this.balanceLife.setPercentage(this.character.energy);
        console.log('collision with character', this.character.energy);
      }
    });
  }
}
