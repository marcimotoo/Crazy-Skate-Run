class StatusBar extends DrawableObject {
  x = 20;
  y = 20;
  width = 150;
  height = 33;
  balanceBar = [0, 20, 40, 60, 80, 100].map((number) => `assets/img/statusleisten/gleichgewicht/gleichgewicht-${number}.png`);
  constructor() {
    super();
    this.loadImage(this.balanceBar[5]);
    this.loadMultiImages(this.balanceBar);
    // this.statusBar;
  }

  statusBar() {
    let balance = 100;
    if (this.energy == 80) balance = 80;
    else if (this.energy == 60) balance = 60;
    else if (this.energy == 40) balance = 40;
    else if (this.energy == 20) balance = 20;
    else if (this.energy == 0) balance = 0;
    this.img = this.imageCache[this.balanceBar[balance]];
  }
}
