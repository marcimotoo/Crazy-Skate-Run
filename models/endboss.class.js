class Endboss extends MovableObj {
  x;
  endbossAngriff = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/angriff/angriff-${number}.png`);
  endbossBesiegt = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/besiegt/besiegt-${number}.png`);
  endbossFahren = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/fahren/fahren-${number}.png`);
  endbossTreffer = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/treffer/treffer-${number}.png`);

  x = 4000;
  y = 310;
  width = 150;
  height = 150;
  speed = 2;

  offset = {
    top: 30,
    right: 10,
    bottom: 20,
    left: 15,
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
    }, 1000 / 15);
  }
}
