const charArray = ['assets/img/charaktere/skater-hocken.png', 'assets/img/charaktere/skater-springen.png', 'assets/img/charaktere/skater-stehen.png'];
class Character extends MovableObj {
  width = 100;
  height = 100;
  constructor(path) {
    super();
    this.loadImage(path);
    super.loadImages(charArray);
    this.breiteAnpassen();
    this.animate('right');
  }

  jump() {}
}
