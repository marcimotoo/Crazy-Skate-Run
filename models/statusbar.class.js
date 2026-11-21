class StatusBar extends DrawableObject {
  x = 20;
  y = 20;
  width = 150;
  height = 33;
  balanceBar = [0, 20, 40, 60, 80, 100].map((number) => `assets/img/old-images/old-design/status-bars/balance/balance-${number}.png`);
  boost = 100;

  boostTrackPath = 'assets/img/crazy-skate-run/hud/boost-bar-track.png';
  boostFillPath = 'assets/img/crazy-skate-run/hud/boost-bar-fill.png';
  portraitPath = 'assets/img/crazy-skate-run/hud/player-portrait.png';
  fullHeartPath = 'assets/img/crazy-skate-run/hud/heart-full.png';
  emptyHeartPath = 'assets/img/crazy-skate-run/hud/heart-empty.png';
  percentage = 100;
  constructor() {
    super();
    this.loadMultiImages([this.portraitPath, this.fullHeartPath, this.emptyHeartPath, this.boostTrackPath, this.boostFillPath]);
    // this.setPercentage(this.percentage);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
  }

  statusBarIndex() {
    if (this.percentage >= 100) return 5;
    if (this.percentage >= 80) return 4;
    if (this.percentage >= 60) return 3;
    if (this.percentage >= 40) return 2;
    if (this.percentage >= 20) return 1;
    return 0;
  }

  draw(ctx) {
    const portrait = this.imageCache[this.portraitPath];

    ctx.drawImage(portrait, this.x, this.y, 70, 70);

    for (let index = 0; index < 5; index++) {
      const heartPath = this.percentage > index * 20 ? this.fullHeartPath : this.emptyHeartPath;

      const heart = this.imageCache[heartPath];
      const heartX = this.x + 80 + index * 38;

      ctx.drawImage(heart, heartX, this.y + 10, 35, 31);
    }
  }

  drawBoostBar(ctx) {
    const track = this.imageCache[this.boostTrackPath];
    const fill = this.imageCache[this.boostFillPath];

    const x = this.x + 80;
    const y = this.y + 48;
    const width = 180;
    const height = 25;

    ctx.drawImage(track, x, y, width, height);

    const fillWidth = width * (this.boost / 100);

    ctx.drawImage(fill, 0, 0, fill.naturalWidth * (this.boost / 100), fill.naturalHeight, x, y, fillWidth, height);
  }
}
