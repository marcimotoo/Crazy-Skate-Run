class MovableObj {
  x = 120;
  y = 310;
  img;
  width = 100;
  height = 100;
  imageCache = {};
  constructor() {}

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
    this.animate;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      const img = new Image();
      img.src = path;
      this.imageCache.push[path] = path;
    });
  }

  breiteAnpassen() {
    this.img.onload = () => {
      this.width = (this.height * this.img.naturalWidth) / this.img.naturalHeight;
    };
  }

  moveRight() {
    console.log('move right');
  }
  moveleft() {}

  animate(leftOrRight) {
    setInterval(() => {
      if (leftOrRight === 'left') {
        this.x -= 0.2;
      } else if (leftOrRight === 'right') {
        this.x += 0.2;
      }
    }, 1000 / 60);
  }
}
