class MovableObj extends DrawableObject {
  x;
  y;
  width;
  height;
  speed = 0.15;
  speedY = 0;
  acceleration = 1;
  health = 100;
  lastHit = 0;
  damage = 20;
  currentImage = 0;
  deathAnimation = false;
  otherDirection = false;

  realX;
  realY;
  realW;
  realH;

  offset = {
    top: 30,
    right: 10,
    bottom: 20,
    left: 15,
  };

  constructor() {
    super();
  }

  getRealFrame() {
    this.realX = this.x + this.offset.left;
    this.realY = this.y + this.offset.top;
    this.realW = this.width - this.offset.left - this.offset.right;
    this.realH = this.height - this.offset.top - this.offset.bottom;
  }

  isColliding(mo) {
    this.getRealFrame();
    mo.getRealFrame();
    return this.realX + this.realW > mo.realX && this.realY + this.realH > mo.realY && this.realX < mo.realX + mo.realW && this.realY < mo.realY + mo.realH;
  }

  isAbouveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 380;
    }
  }

  fall() {
    setInterval(() => {
      if (this.isAbouveGround() || this.speedY > 0) {
        this.fallPhysic();
      }
    }, 1000 / 30);
  }

  fallPhysic() {
    this.y -= this.speedY;
    this.speedY -= this.acceleration;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 18;
  }

  hit() {
    this.health -= this.damage;
    if (this.health < 0) {
      this.health = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    const timePassed = new Date().getTime() - this.lastHit;
    return timePassed < 400;
  }

  isDead() {
    return this.health === 0;
  }

  deadStatusReset() {
    this.currentImage = 0;
    this.deathAnimation = true;
  }

  playAnimation(picturesArray) {
    const i = this.currentImage % picturesArray.length;
    this.img = this.imageCache[picturesArray[i]];
    this.currentImage++;
  }

  playOneAnimation(picturesArray) {
    let i = this.currentImage;
    this.img = this.imageCache[picturesArray[i]];
    if (i < picturesArray.length - 1) {
      this.currentImage++;
    } else {
      this.currentImage = picturesArray.length - 1;
    }
  }
}
