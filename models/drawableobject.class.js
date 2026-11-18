class DrawableObject {
  x = 120;
  y = 350;
  width = 150;
  height = 100;

  img;
  imageCache = {};
  currentImage = 0;
  constructor() {}
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
    this.animate;
  }

  loadMultiImages(arr) {
    arr.forEach((path) => {
      const img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Secruity ||
      this instanceof Endboss ||
      this instanceof ThrowableObject
    ) {
      ctx.beginPath();
      ctx.lineWidth = '2';
      ctx.strokeStyle = 'red';
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  drawHitboxFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Secruity ||
      this instanceof Endboss ||
      this instanceof ThrowableObject
    ) {
      this.getRealFrame();
      ctx.beginPath();
      ctx.lineWidth = '2';
      ctx.strokeStyle = 'blue';
      ctx.rect(this.realX, this.realY, this.realW, this.realH);
      ctx.stroke();
    }
  }
}
