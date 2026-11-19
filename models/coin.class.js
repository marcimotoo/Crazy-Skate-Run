class Coin extends MovableObj {
  coinPictureSet = [1, 2, 3, 4, 5, 6].map((number) => `./assets/img/coins-vi/coin-${number}.png`);

  width = 50;
  height = 50;
  offset = { top: 10, right: 10, bottom: 10, left: 10 };

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadImage('./assets/img/coins-vi/coin-1.png');
    this.loadMultiImages([...this.coinPictureSet]);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.coinPictureSet);
    }, 300);
  }
}
