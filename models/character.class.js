class Character extends MovableObj {
  width = 100;
  height = 100;
  speed = 5;
  charArray = [
    { path: 'assets/img/charaktere/skater-hocken.png', height: 100, x: 120, y: 310 },
    { path: 'assets/img/charaktere/skater-springen.png', height: 115, x: 125, y: 280 },
    { path: 'assets/img/charaktere/skater-stehen.png', height: 140, x: 145, y: 282 },
  ];
  world;
  currentImage = 0;
  constructor(path) {
    super();
    this.loadImage(path);
    this.loadImages(this.charArray.map((pose) => pose.path));
    this.img.onload = () => this.breiteAnpassen();
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        const i = this.currentImage % this.charArray.length;
        const pose = this.charArray[i];
        this.img = this.imageCache[pose.path];
        this.height = pose.height;
        this.y = pose.y;
        this.breiteAnpassen();
        this.currentImage++;
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

      if (this.world.keyboard.UP) {
        this.y += this.speed;
      }

      if (this.world.keyboard.DOWN) {
        this.y -= this.speed;
      }

      if (this.world.keyboard.SPACE) {
        this.y += this.speed;
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);
  }
}
