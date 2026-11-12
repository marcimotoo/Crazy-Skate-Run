class ThrowableObject extends MovableObj {
  speedY = 30;
  speedX = 20;
  setWH = 40;
  width = this.setWH;
  height = this.setWH;

  constructor() {
    super();
    this.loadImage('assets/img/entwuerfe/wurfanimation/energydose.png');
    this.throw(120, 350);
  }

  throw(x, y) {
    this.x = x;
    this.y = y;
    this.speedY = 15;
    this.fall();
    setInterval(() => {
      this.x += 20;
    }, 50);
  }
}
