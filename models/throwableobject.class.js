class ThrowableObject extends MovableObj {
  sheetFolder = './assets/img/crazy-skate-run/items/energy-cans';

  throwSheet = { path: `${this.sheetFolder}/energy-can-throw-sheet.png`, columns: 6, rows: 1 };

  speedY = 8;
  speedX = 15;
  setWH = 50;
  width = this.setWH;
  height = this.setWH;

  offset = {
    top: 8,
    right: 14,
    bottom: 9,
    left: 14,
  };

  constructor(x, y, otherDirection) {
    super();
    this.x = x;
    this.y = y;
    this.otherDirection = otherDirection;

    this.loadSheet(this.throwSheet);
    this.animate();
    this.throw();
  }

  animate() {
    setInterval(() => {
      this.playSheet(this.throwSheet);
    }, 1000 / 60);
  }

  throw() {
    this.fall();
    setInterval(() => {
      if (this.otherDirection) {
        this.otherDirection = true;
        this.x -= this.speedX;
      } else {
        this.otherDirection = false;
        this.x += this.speedX;
      }
    }, 50);
  }
}
