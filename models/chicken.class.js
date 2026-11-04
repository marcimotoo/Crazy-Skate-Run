class Chicken extends MovableObj {
  constructor(x, y, img) {
    super(x, y, img);
    super.loadImage('./assets/img/verkehrskegel.png');
  }

  jump() {}
}
