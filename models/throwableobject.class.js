class ThrowableObject extends MovableObj {
  speedY = 5;
  speedX = 40;
  setWH = 40;
  width = this.setWH;
  height = this.setWH;

  offset = {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  };

  constructor(x, y, otherDirection) {
    super();
    this.x = x;
    this.y = y;
    this.otherDirection = otherDirection;
    this.loadImage('assets/img/entwuerfe/wurfanimation/energydose.png');
    this.throw();
  }

  throw() {
    this.fall();
    setInterval(() => {
      if (this.otherDirection) {
        this.x -= this.speedX;
      } else {
        this.x += this.speedX;
      }
    }, 50);
  }
}
