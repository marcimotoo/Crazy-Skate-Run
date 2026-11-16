class Endboss extends MovableObj {
  endbossAngriff = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/angriff/angriff-${number}.png`);
  endbossBesiegt = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/besiegt/besiegt-${number}.png`);
  endbossFahren = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/fahren/fahren-${number}.png`);
  endbossTreffer = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/treffer/treffer-${number}.png`);

  x = 10000;
  y = 310;
  width = 150;
  height = 150;
  speed = 2;

  constructor() {
    super();
    this.loadImage(this.endbossFahren[0]);
    this.loadMultiImages([...this.endbossAngriff, ...this.endbossBesiegt, ...this.endbossFahren, ...this.endbossTreffer]);
    this.animate();
  }

  animate() {
    if (this.isDead()) {
      this.playAnimation(this.endbossBesiegt);
    }
    // setInterval(() => {
    //   if (this.x) {
    //     this.animation(this.endbossAngriff);
    //   }
    // }, 100);
  }
}
