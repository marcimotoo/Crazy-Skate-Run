class Secruity extends MovableObj {
  x = 120;
  y = 350;
  width = 100;
  height = 100;
  runImage = [1, 2, 3, 4, 5, 6, 7, 8].map(
    (number) => `assets/img/charaktere/security-laufen-export/security-laufen-0${number}.png`,
  );
  deadImage = [1, 2, 3, 4, 5, 6].map(
    (number) => `assets/img/charaktere/security-tod-export/security-tod-0${number}.png`,
  );
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
    this.loadImage('assets/img/charaktere/security-laufen-export/security-laufen-01.png');
    this.loadMultiImages([...this.runImage, ...this.deadImage]);
    this.x = 200 + Math.random() * 500;

    this.animate();
  }

  animate() {
    setInterval(() => {
      if (!this.isDead()) {
        this.playAnimation(this.runImage);
      } else {
        if (!this.deathAnimation) {
          this.deadStatusReset();
        }
        this.playOneAnimation(this.deadImage);
      }
    }, 1000 / 8);
  }
}
