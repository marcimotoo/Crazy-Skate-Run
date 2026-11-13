class Endboss extends MovableObj {
  endbossAngriff = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/angriff/angriff-${number}.png`);
  endbossBesiegt = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/besiegt/besiegt-${number}.png`);
  endbossFahren = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/fahren/fahren-${number}.png`);
  endbossTreffer = [1, 2, 3, 4].map((number) => `assets/img/charaktere/polizist-segway/treffer/treffer-${number}.png`);

  x = 400;
  y = 280;
  width = 200;
  height = 200;

  constructor() {
    super();
    this.loadImage(this.endbossFahren[0]);
    this.loadMultiImages([...this.endbossAngriff, ...this.endbossBesiegt, ...this.endbossFahren, ...this.endbossTreffer]);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.x) {
        this.animation(this.endbossAngriff);
      }
    }, 100);
  }
}
