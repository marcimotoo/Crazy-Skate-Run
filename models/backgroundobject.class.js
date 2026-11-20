class BackgroundObject extends MovableObj {
  width = 100;
  height = 100;
  constructor(path, x, width = 720, height = 480, parallax = 1) {
    super();
    super.loadImage(path);
    this.x = x;
    this.width = width;
    this.height = height;
    this.parallax = parallax;
    this.y = 480 - this.height;
  }
}
