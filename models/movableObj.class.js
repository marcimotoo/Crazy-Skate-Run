class MovableObj extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 1;
  energy = 100;
  lastHit = 0;

  constructor() {
    super();
  }

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

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 15;
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
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    const timePassed = new Date().getTime() - this.lastHit;
    return timePassed < 400;
  }

  isDead() {
    return this.energy === 0;
  }
}
