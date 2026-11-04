class MovableObj {
  x = 120;
  y = 310;
  img;
  width = 100;
  height = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log('move right');
  }
  moveleft() {}
}
