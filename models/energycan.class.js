class EnergyCan extends MovableObj {
  sheetFolder = './assets/img/crazy-skate-run/items/energy-cans';

  idleSheet = { path: `${this.sheetFolder}/energy-can-idle-sheet.png`, columns: 6, rows: 1 };

  width = 50;
  height = 50;

  offset = {
    top: 10,
    right: 15,
    bottom: 10,
    left: 15,
  };

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadSheet(this.idleSheet);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playSheet(this.idleSheet);
    }, 300);
  }
}
