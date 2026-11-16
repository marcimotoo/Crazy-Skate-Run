class Secruity extends MovableObj {
  x = 120;
  y = 350;
  width = 100;
  height = 100;
  runImage = [1, 2, 3, 4, 5, 6, 7, 8].map((number) => `assets/img/charaktere/security-laufen-export/security-laufen-0${number}.png`);

  speed = 1 + Math.random() * 3;

  currentImage = 0;
  damage = 50;

  constructor() {
    super();
    this.loadImage('assets/img/charaktere/security-laufen-export/security-laufen-01.png');
    this.loadMultiImages(this.runImage);
    this.x = 200 + Math.random() * 500;

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.animation(this.runImage);
    }, 1000 / 10);
  }
}
