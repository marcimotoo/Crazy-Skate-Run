class ThrowableObject extends MovableObj {
  energyThowPictures = [1, 2, 3, 4].map((number) => `assets/img/old-images/old-design/energy-cans/projectile/energy-can-${number}.png`);
  speedY = 8;
  speedX = 15;
  setWH = 50;
  width = this.setWH;
  height = this.setWH;

  offset = {
    top: 8,
    right: 14,
    bottom: 9,
    left: 14,
  };

  constructor(x, y, otherDirection) {
    super();
    this.x = x;
    this.y = y;
    this.otherDirection = otherDirection;

    this.loadImage('./assets/img/old-images/old-design/energy-cans/projectile/energy-can-1.png');
    this.loadMultiImages([...this.energyThowPictures]);
    this.animate();
    this.throw();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.energyThowPictures);
    }, 1000 / 60);
  }

  throw() {
    this.fall();
    setInterval(() => {
      if (this.otherDirection) {
        this.x -= this.speedX;
      } else {
        this.x += this.speedX;
      }
    }, 50);
  }
}
