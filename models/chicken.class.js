class Chicken extends MovableObj {
  constructor() {
    super();
    super.loadImage('./assets/img/objekte/verkehrskegel.png');
    super.breiteAnpassen();

    this.x = 200 + Math.random() * 500;
  }

  jump() {}
}
