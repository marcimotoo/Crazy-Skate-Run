class Secruity extends MovableObj {
  sheetFolder = './assets/img/crazy-skate-run/characters/security-guard';

  walkSheet = { path: `${this.sheetFolder}/guard-walk-sheet.png`, columns: 6, rows: 1 };
  attackSheet = { path: `${this.sheetFolder}/guard-attack-sheet.png`, columns: 6, rows: 1 };
  defeatedSheet = { path: `${this.sheetFolder}/guard-defeated-sheet.png`, columns: 6, rows: 1 };

  x = 120;
  y = 480 - 100;
  width = 100;
  height = 100;
  speed = 1 + Math.random() * 3;
  damage = 50;

  offset = {
    top: 5,
    right: 32,
    bottom: 5,
    left: 32,
  };

  constructor() {
    super();
    this.loadSheet(this.walkSheet);
    this.loadMoreSheets([this.walkSheet, this.attackSheet, this.defeatedSheet]);

    this.x = 200 + Math.random() * 500;

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playSheet(this.walkSheet);
      if (this.isDead()) {
        this.playOneSheet(this.defeatedSheet);
      } else {
      }
      //   if (!this.deathAnimation) {
      //     this.deadStatusReset();
      //   }
      //   this.playOneAnimation(this.deadImage);
      // }
    }, 1000 / 8);
  }
}
