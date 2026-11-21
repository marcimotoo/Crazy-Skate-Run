class DrawableObject {
  x = 120;
  y = 350;

  img;
  imageCache = {};
  currentImage = 0;

  frameIndex = 0; // Der Index beginnt bei 0, also beim ersten Bild.
  columns; // Anzahl der Spalten im Sheet.
  rows; // Anzahl der Zeilen im Sheet.
  frameCount;
  constructor() {}
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadSheet(sheet) {
    this.activeSheet = sheet;
    this.frameIndex = 0;
    this.columns = sheet.columns;
    this.rows = sheet.rows;
    this.frameCount = this.columns * this.rows;
    this.loadImage(sheet.path);
  }

  draw(ctx) {
    if (this.columns > 0 && this.rows > 0) {
      this.shetDraw(ctx);
      return;
    }
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  shetDraw(ctx) {
    const frameWidth = this.img.naturalWidth / this.columns; // Breite eines Kästchens.
    const frameHeight = this.img.naturalHeight / this.rows; // Höhe eines Kästchens.
    const rowMath = Math.floor(this.frameIndex / this.columns); // Jede volle Gruppe ergibt eine Zeile.
    const columnMath = this.frameIndex % this.columns; // Der Rest gibt die Spalte innerhalb der Zeile an.

    ctx.drawImage(
      this.img,
      columnMath * frameWidth, // Abstand vom linken Rand des Sheets.
      rowMath * frameHeight, // Abstand vom oberen Rand des Sheets.
      frameWidth, // Breite des Ausschnitts im Sheet.
      frameHeight, // Höhe des Ausschnitts im Sheet.
      this.x,
      this.y,
      this.height * (frameWidth / frameHeight), // Breite proportional zur Zeichenhöhe.
      this.height,
    );
  }

  loadMultiImages(arr) {
    arr.forEach((path) => {
      const img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  drawFrame(ctx) {
    if (this.instanceofItem()) {
      ctx.beginPath();
      ctx.lineWidth = '2';
      ctx.strokeStyle = 'red';
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  drawHitboxFrame(ctx) {
    if (this.instanceofItem()) {
      this.getRealFrame();
      ctx.beginPath();
      ctx.lineWidth = '2';
      ctx.strokeStyle = 'blue';
      ctx.rect(this.realX, this.realY, this.realW, this.realH);
      ctx.stroke();
    }
  }

  instanceofItem() {
    return (
      this instanceof Character ||
      this instanceof Secruity ||
      this instanceof Endboss ||
      this instanceof ThrowableObject ||
      this instanceof Coin ||
      this instanceof EnergyCan
    );
  }
}
