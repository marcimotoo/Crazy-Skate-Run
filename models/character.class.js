class Character extends MovableObj {
  y = 350;
  width = 63;
  height = 100;
  speed = 5;
  rideImages = [1, 2, 3, 4].map((number) => `assets/img/charaktere/skater-animation/skater-${number}.png`);
  jumpImages = [5, 6, 7, 8].map((number) => `assets/img/charaktere/skater-animation/skater-${number}.png`);
  world;
  currentImage = 0;
  constructor(path) {
    super();
    this.loadImage(this.rideImages[0]);
    this.loadImages([...this.rideImages, ...this.jumpImages]);

    this.animate();
    this.fall();
  }

  animate() {
    setInterval(() => {
      if (this.isAbouveGround() || this.speedY > 0) {
        let frame = 3;
        if (this.speedY > 10) frame = 0;
        else if (this.speedY > 4) frame = 1;
        else if (this.speedY > -6) frame = 2;
        this.img = this.imageCache[this.jumpImages[frame]];
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        const i = this.currentImage % this.rideImages.length;
        this.img = this.imageCache[this.rideImages[i]];
        this.currentImage++;
      } else {
        this.img = this.imageCache[this.rideImages[0]];
      }
    }, 100);

    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x <= this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
      }

      if (this.world.keyboard.LEFT && this.x >= 110) {
        this.x -= this.speed;
        this.otherDirection = true;
      }

      if (this.world.keyboard.SPACE && !this.isAbouveGround()) {
        this.speedY = 15;
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);
  }
}
