class Coin extends MovableObj { // * NEU: Übernimmt die vorhandene Trefferflächen-Logik.
  width = 40;
  height = 40;
  offset = { top: 0, right: 0, bottom: 0, left: 0 };

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadImage('./assets/img_pollo_locco/img/8_coin/coin_1.png');
  }
}
