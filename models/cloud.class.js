class Cloud extends MovableObj {
  cloudPictures = [1, 2, 3, 4].map((number) => `./assets/img/old-images/old-design/clouds/cloud-${number}.png`);
  y = 20;
  width = 150;
  height = 100;

  constructor() {
    super();
    super.loadImage('./assets/img/old-images/old-design/clouds/cloud-1.png');

    this.x = Math.random() * 500;
    this.y = Math.random() * 500;
    this.speed = 0.1 + Math.random() * 2;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 100);
  }
}
