class Endboss extends MovableObj {
  x;
  endbossAngriff = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/angriff/angriff-${number}.png`);
  endbossBesiegt = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/besiegt/besiegt-${number}.png`);
  endbossFahren = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2].map(
    (number) => `assets/img/charaktere/polizist-segway/fahren-neu/fahren-${number}.png`,
  );
  endbossTreffer = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/treffer/treffer-${number}.png`);

  x = 650;
  y = 310;
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
    this.loadMultiImages([
      ...this.endbossAngriff,
      ...this.endbossBesiegt,
      ...this.endbossFahren,
      ...this.endbossTreffer,
    ]);
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
