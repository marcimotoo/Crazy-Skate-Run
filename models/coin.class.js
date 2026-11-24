class Coin extends MovableObj {
  sheetFolder = './assets/img/crazy-skate-run/items/coins';

  coinSheet = { path: `${this.sheetFolder}/coin-spin-sheet.png`, columns: 6, rows: 1 };
  pickupSheet = { path: `${this.sheetFolder}/coin-pickup-sheet.png`, columns: 6, rows: 1 };

  width = 50;
  height = 50;
  offset = { top: 10, right: 10, bottom: 10, left: 10 };

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadSheet(this.coinSheet);
    this.loadMoreSheets([this.coinSheet, this.pickupSheet]);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playSheet(this.coinSheet);
      if (this.world.collect === true) {
        this.playOneSheet(this.pickupSheet);
      }
    }, 300);
  }
}
