class Character extends MovableObj {
  width = 100;
  height = 100;
  constructor(path) {
    super();
    super.loadImage(path);
    super.breiteAnpassen();
  }

  jump() {}
}
