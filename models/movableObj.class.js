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
  energy = 100;
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

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Secruity) {
      ctx.beginPath();
      ctx.lineWidth = '2';
      ctx.strokeStyle = 'red';
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  isColliding(mo) {
    return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height;
  }

  //   if (character.x + character.width > chicken.x &&
  // character.y + character.height > chicken.y &&
  // character.x < chicken.x &&
  // character.y < chicken.y + chicken.height
  // )
}
