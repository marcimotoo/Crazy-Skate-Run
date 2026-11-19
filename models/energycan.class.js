class EnergyCan extends MovableObj {
  energyCanPictures = [1, 2, 3, 4].map((number) => `./assets/img/energydosen/sammeln/entwurf-${number}.png`);
  width = 50;
  height = 50;

  offset = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  };

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadImage('assets/img/energydosen/sammeln/entwurf-1.png');
    this.loadMultiImages([...this.energyCanPictures]);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.energyCanPictures);
    }, 300);
  }
}
