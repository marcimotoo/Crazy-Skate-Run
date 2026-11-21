class EnergyCan extends MovableObj {
  energyCanPictures = [1, 2, 3, 4].map((number) => `./assets/img/old-images/old-design/energy-cans/collectible/energy-can-${number}.png`);
  width = 50;
  height = 50;

  offset = {
    top: 10,
    right: 15,
    bottom: 10,
    left: 15,
  };

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadImage('assets/img/old-images/old-design/energy-cans/collectible/energy-can-1.png');
    this.loadMultiImages([...this.energyCanPictures]);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.energyCanPictures);
    }, 300);
  }
}
