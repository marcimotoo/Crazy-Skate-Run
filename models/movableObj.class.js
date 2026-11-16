class MovableObj extends DrawableObject {
  speed = 0.15;
  speedY = 0;
  acceleration = 1;
  health = 100;
  lastHit = 0;
  damage = 20;
  currentImage = 0;
  deathAnimation = false;
  otherDirection = false;

  constructor() {
    super();
  }

  isAbouveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 350;
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

  isColliding(mo) {
    return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height;
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
