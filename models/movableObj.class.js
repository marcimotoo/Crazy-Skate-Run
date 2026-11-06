class MovableObj {
  x = 120;
  y = 350;
  img;
  width = 150;
  height = 100;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  accleration = 1;
  constructor() {}

  fall() {
    setInterval(() => {
      if (this.isAbouveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.accleration;
      }
    }, 1000 / 25);
  }

  isAbouveGround() {
    return this.y < 350;
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
    this.animate;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      const img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    setInterval(() => {
      this.x += this.speed;
    }, 1000 / 60);
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
