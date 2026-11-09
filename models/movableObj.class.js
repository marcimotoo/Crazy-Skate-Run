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
  acceleration = 1;
  energy = 100;

  constructor() {}

  isAbouveGround() {
    return this.y < 350;
  }

  fall() {
    setInterval(() => {
      if (this.isAbouveGround() || this.speedY > 0) {
        this.fallPhysic();
      }
    }, 1000 / 25);
  }

  fallPhysic() {
    this.y -= this.speedY;
    this.speedY -= this.acceleration;
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
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 15;
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

  hit() {
    this.energy -= 10;
    if (this.energy < 0) {
      this.energy = 0;
    }
  }

  isDead() {
    return this.energy == 0;
  }
}
