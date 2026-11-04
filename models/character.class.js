class Character extends MovableObj {
  constructor(x, y, img) {
    super(x, y, img);
    super.loadImage('./assets/img/skater-hocken.png');
  }

  jump() {}
}
