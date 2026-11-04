class Cloud extends MovableObj {
  constructor() {
    super();
    super.loadImage('./assets/img_pollo_locco/img/5_background/layers/4_clouds/1.png');
    super.breiteAnpassen();

    this.x = Math.random() * 500;
    this.y = 20;
    super.animate('left');
  }

  animate() {
    super.animate();
    this.x -= 1;
    return super.animate();
  }
}
