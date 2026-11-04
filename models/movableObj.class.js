class MovableObj {
  x = 120;
  y = 310;
  img;
  width = 100;
  height = 100;
  constructor() {}
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  breiteAnpassen() {
    this.img.onload = () => {
      this.width = (this.height * this.img.naturalWidth) / this.img.naturalHeight;
    };
  }

  moveRight() {
    console.log('move right');
  }
  moveleft() {}
}
