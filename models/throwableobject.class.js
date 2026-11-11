class ThrowableObject extends MovableObj {
  speedY = 30;
  speedX = 20;

  constructor() {
    super();
  }

  throw() {
    if (this.world.keyboard.THROW) {
    }
  }
}
