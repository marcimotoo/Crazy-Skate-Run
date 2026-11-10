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
  world;
  currentImage = 0;
  altePosition = this.x;
  constructor(path) {
    super();
    this.loadImage(this.rideImages[0]);
    this.loadImages([...this.rideImages, ...this.standImages, ...this.jumpImages, ...this.stopImages, ...this.preJumpImages]);

    this.animate();
    this.controlCharacter();
    this.fall();
  }

  animate() {
    setInterval(() => {
      if (this.isDead()) {
      }
      if (this.isAbouveGround() || this.speedY > 0) {
        this.fallAnimation();
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.leftRightAnimation();
      } else if (this.x !== this.altePosition) {
        this.stopAnimation();
        console.log('Der Charakter fährt');
      } else {
        this.standAnimation();
        console.log('Der Charakter steht');
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

  preJumpAnimation() {
    const i = this.currentImage % this.preJumpImages.length;
    this.img = this.imageCache[this.preJumpImages[i]];
    this.currentImage++;
  }

  stopAnimation() {
    const i = this.currentImage % this.stopImages.length;
    this.img = this.imageCache[this.stopImages[i]];
    this.currentImage++;
  }

  standAnimation() {
    const i = this.currentImage % this.standImages.length;
    this.img = this.imageCache[this.standImages[i]];
    this.currentImage++;
  }

  leftRightAnimation() {
    const i = this.currentImage % this.rideImages.length;
    this.img = this.imageCache[this.rideImages[i]];
    this.currentImage++;
  }
  fallAnimation() {
    let frame = 3;
    if (this.speedY > 10) frame = 0;
    else if (this.speedY > 4) frame = 1;
    else if (this.speedY > -6) frame = 2;
    this.img = this.imageCache[this.jumpImages[frame]];
  }
}
