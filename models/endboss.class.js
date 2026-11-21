class Endboss extends MovableObj {
  rideSheet = {
    path: 'assets/img/crazy-skate-run/characters/segway-officer/ride-sheet.png',
    columns: 4,
    rows: 2,
  };
  attackSheet = {
    path: 'assets/img/crazy-skate-run/characters/segway-officer/attack-sheet.png',
    columns: 2,
    rows: 2,
  };
  hitSheet = {
    path: 'assets/img/crazy-skate-run/characters/segway-officer/hit-sheet.png',
    columns: 2,
    rows: 2,
  };
  defeatedSheet = {
    path: 'assets/img/crazy-skate-run/characters/segway-officer/defeated-sheet.png',
    columns: 2,
    rows: 2,
  };

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
    this.loadImage(this.endbossFahren[0]);
    this.loadMultiImages([...this.endbossAngriff, ...this.endbossBesiegt, ...this.endbossFahren, ...this.endbossTreffer]);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (!this.isDead()) {
        this.playAnimation(this.endbossFahren);
      } else {
        if (!this.deathAnimation) {
          this.deadStatusReset();
        }
        this.playOneAnimation(this.endbossBesiegt);
      }
    }, 1000 / 8);
  }
}
