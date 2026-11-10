class DrawableObject {
  x = 120;
  y = 350;
  width = 150;
  height = 100;

  img;
  imageCache = {};
  currentImage = 0;
  constructor() {}
  // Zeichnet das aktuelle Bild dieses Objekts auf die Spielfläche.
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
}
