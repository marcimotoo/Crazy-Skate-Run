class Character extends MovableObj {
  width = 100;
  height = 100;
  charArray = [
    { path: 'assets/img/charaktere/skater-hocken.png', height: 100, x: 120, y: 310 },
    { path: 'assets/img/charaktere/skater-springen.png', height: 115, x: 125, y: 280 },
    { path: 'assets/img/charaktere/skater-stehen.png', height: 140, x: 145, y: 282 },
  ];
  currentImage = 0;
  constructor(path) {
    super();
    this.loadImage(path);
    this.loadImages(this.charArray.map((pose) => pose.path));
    this.img.onload = () => this.breiteAnpassen();
    this.animate();
  }

  jump() {}
  animate() {
    this.moveRight();
    setInterval(() => {
      const i = this.currentImage % this.charArray.length;
      const pose = this.charArray[i];
      this.img = this.imageCache[pose.path];
      this.height = pose.height;
      this.x = pose.x;
      this.y = pose.y;
      this.breiteAnpassen();
      this.currentImage++;
    }, 600);
  }
}
