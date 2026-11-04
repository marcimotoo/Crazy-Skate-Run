class Chicken extends MovableObj {
  constructor() {
    super().loadImage('./assets/img/verkehrskegel.png');
    this.x = 200 + Math.random() * 500;
  }

  jump() {}
}
