class BackgroundObject extends MovableObj {
  width = 1440;
  height = 480;

  constructor(path, x, parallax = 1) {
    super();
    super.loadImage(path);
    this.x = x;

    this.parallax = parallax;
    this.y = 480 - this.height;
  }
}
