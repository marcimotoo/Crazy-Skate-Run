class BackgroundObject extends MovableObj {
  width = 720;
  height = 480;
  constructor(imagePath, x, width = 720, height = 480) {
    super().loadImage(imagePath);
    this.x = x;
    this.width = width;
    this.height = height;
    this.y = 480 - this.height;
  }
}
