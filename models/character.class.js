class Character extends MovableObj {
  y = 350;
  width = 63;
  height = 100;
  speed = 5;
  rideImages = [1, 2, 3, 4].map((number) => `assets/img/charaktere/skater-animation/skater-${number}.png`);
  jumpImages = [5, 6, 7, 8].map((number) => `assets/img/charaktere/skater-animation/skater-${number}.png`);
  standImages = [1, 2, 3, 4].map((number) => `assets/img/charaktere/skater-idle/skater-idle-${number}.png`);
  stopImages = [1, 2, 3, 4].map((number) => `assets/img/charaktere/skater-bremsen/skater-bremsen-${number}.png`);
  preJumpImages = [1, 2, 3, 4].map((number) => `assets/img/charaktere/skater-sprungvorbereitung/skater-sprungvorbereitung-${number}.png`);
  deadImages = [1, 2, 3, 4].map((number) => `assets/img/charaktere/skater-sturz/skater-sturz-${number}.png`);
  hurtImages = [1, 2, 3, 4].map((number) => `assets/img/charaktere/skater-treffer/skater-treffer-${number}.png`);
  world;
  currentImage = 0;
  altePosition = this.x;
  constructor() {
    super();
    this.loadImage(this.standImages[0]);
    this.loadMultiImages([
      ...this.rideImages,
      ...this.standImages,
      ...this.jumpImages,
      ...this.stopImages,
      ...this.preJumpImages,
      ...this.deadImages,
      ...this.hurtImages,
    ]);

    this.animate();
    this.controlCharacter();
    this.fall();
  }

  animate() {
    setInterval(() => {
      if (this.isDead()) {
        this.animation(this.deadImages);
      } else if (this.isHurt()) {
        const frame = Math.floor((Date.now() - this.lastHit) / 100);
        this.img = this.imageCache[this.hurtImages[frame]];
      } else if (this.isAbouveGround() || this.speedY > 0) {
        this.fallAnimation();
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.animation(this.rideImages);
      } else if (this.world.keyboard.SPACE) {
        this.animation(this.preJumpImages);
      } else {
        this.animation(this.standImages);
      }
    }, 100);
  }

  controlCharacter() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x <= this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.x >= 110) {
        this.moveLeft();
        this.otherDirection = true;
      }

      if (this.world.keyboard.SPACE && !this.isAbouveGround()) {
        this.jump();
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);
  }

  fallAnimation() {
    let frame = 3;
    if (this.speedY > 10) frame = 0;
    else if (this.speedY > 4) frame = 1;
    else if (this.speedY > -6) frame = 2;
    this.img = this.imageCache[this.jumpImages[frame]];
  }
}
