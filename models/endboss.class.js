class Endboss extends MovableObj {
  sheetFolder = './assets/img/crazy-skate-run/characters/segway-officer';

  rideSheet = { path: `${this.sheetFolder}/ride-sheet.png`, columns: 4, rows: 2 };
  attackSheet = { path: `${this.sheetFolder}/attack-sheet.png`, columns: 2, rows: 2 };
  hitSheet = { path: `${this.sheetFolder}/hit-sheet.png`, columns: 2, rows: 2 };
  defeatedSheet = { path: `${this.sheetFolder}/defeated-sheet.png`, columns: 2, rows: 2 };

  endbossAngriff = [1, 2, 3, 4].map((number) => `assets/img/old-images/old-design/characters/segway-officer/attack/attack-${number}.png`);
  endbossBesiegt = [1, 2, 3, 4].map((number) => `assets/img/old-images/old-design/characters/segway-officer/defeated/defeated-${number}.png`);
  endbossFahren = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2].map((number) => `assets/img/old-images/old-design/characters/segway-officer/ride/ride-${number}.png`);
  endbossTreffer = [1, 2, 3, 4].map((number) => `assets/img/old-images/old-design/characters/segway-officer/hit/hit-${number}.png`);

  x = 650;
  y = 480 - 140;
  width = 150;
  height = 150;
  speed = 2;

  offset = {
    top: 13,
    right: 42,
    bottom: 13,
    left: 42,
  };

  constructor() {
    super();
    this.loadSheet(this.rideSheet);
    this.loadMoreSheets([this.rideSheet, this.attackSheet, this.hitSheet, this.defeatedSheet]);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playSheet(this.rideSheet);
      // if (this.isDead()) {
      //   this.playOneSheet(this.defeatedSheet);
      // } else {
      //   if (!this.deathAnimation) {
      //     this.deadStatusReset();
      //   }
      //   this.playOneAnimation(this.endbossBesiegt);
      // }
    }, 1000 / 8);
  }
}
