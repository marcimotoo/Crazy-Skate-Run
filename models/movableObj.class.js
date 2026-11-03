class MovableObj extends world {
  x;
  y;
  img;
  constructor(x, y, img) {
    super();
    this.x = x;
    this.y = y;
    this.img = img;
  }

  moveRight() {
    console.log('move right');
  }
  moveleft() {}
}
