class ThrowableObject extends MovableObj {
  speedY = 30;
  speedX = 20;
  setWH = 40;
  width = this.setWH;
  height = this.setWH;

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadImage('assets/img/entwuerfe/wurfanimation/energydose.png');
    this.throw();
  }

  throw() {
    this.speedY = 10;
    this.fall();
    setInterval(() => {
      this.x += 15;
    }, 50);
  }
}
