class StatusBar extends DrawableObject {
  x = 100;
  y = 100;
  width = 100;
  height = 100;
  balanceBar = [0, 20, 40, 60, 80, 100].map((number) => `assets/img/statusleisten/gleichgewicht/gleichgewicht-${number}.png`);
  constructor() {
    this.loadImages(...this.balanceBar);
    this.statusBar;
  }

  statusBar() {
    let balance = 100;
    if (this.energy === 80) balance = 80;
    else if (this.energy === 60) balance = 60;
    else if (this.energy === 40) balance = 40;
    else if (this.energy === 20) balance = 20;
    else if (this.energy === 0) balance = 0;
    this.img = this.imageCache[this.balanceBar[balance]];
  }
}
