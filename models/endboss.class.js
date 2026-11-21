class Endboss extends MovableObj {
  x;
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
