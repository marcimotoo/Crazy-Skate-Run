class Cloud extends MovableObj {
  y = 20;

  constructor() {
    super();
    super.loadImage('./assets/img_pollo_locco/img/5_background/layers/4_clouds/1.png');
    super.breiteAnpassen();

    this.x = Math.random() * 500;
    this.y = 20;
    this.speed = 0.1 + Math.random() * 2;
    this.animate();
  }

  animate() {
    this.moveLeft();
  }
}
