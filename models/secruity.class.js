class Secruity extends MovableObj {
  charArray = [
    { path: 'assets/img/charaktere/security-laufen-export/security-laufen-01.png', height: 100, x: 120, y: 310 },
    { path: 'assets/img/charaktere/security-laufen-export/security-laufen-02.png', height: 100, x: 120, y: 310 },
    { path: 'assets/img/charaktere/security-laufen-export/security-laufen-03.png', height: 100, x: 120, y: 310 },
    { path: 'assets/img/charaktere/security-laufen-export/security-laufen-04.png', height: 100, x: 120, y: 310 },
    { path: 'assets/img/charaktere/security-laufen-export/security-laufen-05.png', height: 100, x: 120, y: 310 },
    { path: 'assets/img/charaktere/security-laufen-export/security-laufen-06.png', height: 100, x: 120, y: 310 },
    { path: 'assets/img/charaktere/security-laufen-export/security-laufen-07.png', height: 100, x: 120, y: 310 },
    { path: 'assets/img/charaktere/security-laufen-export/security-laufen-08.png', height: 100, x: 120, y: 310 },
  ];
  currentImage = 0;
  constructor() {
    super();
    this.loadImage('assets/img/charaktere/security-laufen-export/security-laufen-01.png');
    this.loadImages(this.charArray.map((pose) => pose.path));
    this.img.onload = () => this.breiteAnpassen();
    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
  }

  breiteAnpassen() {
    this.width = (this.height * this.img.naturalWidth) / this.img.naturalHeight;
  }

  animate() {
    this.moveLeft();
    setInterval(() => {
      const i = this.currentImage % this.charArray.length;
      const pose = this.charArray[i];
      this.img = this.imageCache[pose.path];
      this.breiteAnpassen();
      this.currentImage++;
    }, 200);
  }
}
