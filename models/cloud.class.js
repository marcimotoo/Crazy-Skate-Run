class Cloud extends MovableObj {
  constructor() {
    super().loadImage('./assets/img_pollo_locco/img/5_background/layers/4_clouds/1.png');
    this.x = Math.random() * 500;
    this.y = 20;
  }
}
