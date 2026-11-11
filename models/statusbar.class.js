class StatusBar extends DrawableObject {
  x = 20;
  y = 20;
  width = 150;
  height = 33;
  balanceBar = [0, 20, 40, 60, 80, 100].map((number) => `assets/img/statusleisten/gleichgewicht/gleichgewicht-${number}.png`);
  percentage = 100;
  constructor() {
    super();
    this.loadMultiImages(this.balanceBar);
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.balanceBar[this.statusBarIndex()];
    this.img = this.imageCache[path];
  }

  statusBarIndex() {
    if (this.percentage >= 100) return 5;
    if (this.percentage >= 80) return 4;
    if (this.percentage >= 60) return 3;
    if (this.percentage >= 40) return 2;
    if (this.percentage >= 20) return 1;
    return 0;
  }
}
